/* ============================================================================
   APP — routing, rendering, and the (no-LLM) answer checker.
   ========================================================================== */

(function () {
  'use strict';

  const appEl = document.getElementById('app');
  const LEVELS = ['Basic', 'Intermediate', 'Advanced'];
  const TOPICS = ['Fractions', 'Decimals', 'Ratios', 'Percentages'];
  const STORE_KEY = 'mathsPractice.progress.v1';

  /* ---------------- progress (localStorage) ---------------- */
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  let progress = loadProgress();

  /* =========================================================
     ANSWER CHECKER  (returns 'correct' | 'partial' | 'wrong')
     ========================================================= */

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }

  // Turn a written answer into a plain number where possible.
  function toNumber(raw) {
    let s = String(raw).trim().toLowerCase();
    if (!s) return NaN;
    // strip currency, words, units, separators
    s = s.replace(/[£$€]/g, '')
         .replace(/,/g, '')
         .replace(/percent|percentage|%/g, '')
         .replace(/pounds?|pence|litres?|liters?|kg|kilograms?|grams?|metres?|meters?|cm|°c|degrees?|people|pupils?|students?|sweets?|cupcakes?|marbles?|pieces?|tins?|bars?|cows?|dogs?|years?|days?/g, '')
         .replace(/\bp\b/g, '')
         .trim();
    // mixed number: "1 1/2"
    let m = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)$/);
    if (m) {
      const whole = parseInt(m[1], 10);
      const frac = parseInt(m[2], 10) / parseInt(m[3], 10);
      return whole < 0 ? whole - frac : whole + frac;
    }
    // fraction "a/b"
    m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
    if (m) { const d = parseFloat(m[2]); return d === 0 ? NaN : parseFloat(m[1]) / d; }
    // plain number
    s = s.replace(/\s+/g, '');
    if (/^-?\d*\.?\d+$/.test(s)) return parseFloat(s);
    return NaN;
  }

  // Pull out an integer fraction "a/b" as {n, d}, else null.
  function fractionParts(raw) {
    const m = String(raw).trim().match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
    if (!m) return null;
    return { n: parseInt(m[1], 10), d: parseInt(m[2], 10) };
  }

  // Simplify a ratio string like "6:4" -> "3:2". Returns null if not a ratio.
  function toRatio(raw) {
    let s = String(raw).trim().replace(/\s+/g, '');
    if (!/^\d+(\.\d+)?:\d+(\.\d+)?(:\d+(\.\d+)?)?$/.test(s)) return null;
    let parts = s.split(':').map(Number);
    // scale to integers if decimals present
    if (parts.some(n => !Number.isInteger(n))) {
      const factor = 100; parts = parts.map(n => Math.round(n * factor));
    }
    let g = parts.reduce((acc, n) => gcd(acc, n), parts[0]);
    return parts.map(n => n / g).join(':');
  }

  function numbersClose(a, b) {
    if (isNaN(a) || isNaN(b)) return false;
    const tol = Math.max(0.011, Math.abs(b) * 0.01); // tolerant of 33.3 vs 33.33 etc.
    return Math.abs(a - b) <= tol;
  }

  // Does the user's answer match this single acceptable answer?
  function matchesOne(userRaw, acceptRaw) {
    const uR = toRatio(userRaw), aR = toRatio(acceptRaw);
    if (aR) { return uR ? uR === aR : false; }          // ratio expected
    if (uR && !aR) {                                     // user wrote ratio, answer numeric -> compare numerically if possible
      // allow e.g. user "1:2" vs accept "0.5"? Only if single colon -> ratio fraction
      const up = userRaw.split(':').map(Number);
      if (up.length === 2) return numbersClose(up[0] / up[1], toNumber(acceptRaw));
      return false;
    }
    return numbersClose(toNumber(userRaw), toNumber(acceptRaw));
  }

  function checkAnswer(q, userRaw) {
    if (!String(userRaw).trim()) return 'empty';
    const accept = q.accept || [];
    // "Simplest form" questions: right value but not reduced -> partial, with a nudge.
    if (q.requireSimplest) {
      const fp = fractionParts(userRaw);
      if (fp && Math.abs(fp.d) > 1) {
        const g = gcd(fp.n, fp.d);
        if (g > 1) {
          const reduced = (fp.n / g) + '/' + (fp.d / g);
          for (const a of accept) {
            if (matchesOne(reduced, a)) {
              return { kind: 'partial', note: `That is the right value, but it is not in its simplest form yet — divide the top and bottom by ${g}.` };
            }
          }
        }
      }
    }
    for (const a of accept) { if (matchesOne(userRaw, a)) return 'correct'; }
    if (q.partial) {
      for (const p of q.partial) { if (matchesOne(userRaw, p.value)) return { kind: 'partial', note: p.note }; }
    }
    return 'wrong';
  }

  /* =========================================================
     ROUTER
     ========================================================= */
  function currentRoute() {
    const h = (location.hash || '#/home').replace(/^#\//, '');
    const [name, ...rest] = h.split('/');
    return { name: name || 'home', rest };
  }

  function setActiveNav(name) {
    document.querySelectorAll('#topnav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-route') === name);
    });
  }

  function render() {
    const { name } = currentRoute();
    setActiveNav(name);
    window.scrollTo(0, 0);
    if (name === 'guide') renderGuide();
    else if (name === 'practice') renderPractice();
    else if (name === 'worksheet') renderWorksheet();
    else renderHome();
  }

  /* =========================================================
     HOME
     ========================================================= */
  function renderHome() {
    appEl.innerHTML = `
      <section class="hero">
        <h1>Maths Practice</h1>
        <p class="lead">A friendly place to get really good at <strong>fractions, decimals, ratios and percentages</strong> — with clear guides and word-problem practice that builds up to proper, multi-step thinking.</p>
        <div class="topic-chips">
          ${TOPICS.map(t => `<span class="pill topic">${t}</span>`).join('')}
        </div>
      </section>

      <section class="home-cards">
        <a class="home-card" href="#/guide">
          <div class="emoji">📘</div>
          <h2>Guide</h2>
          <p>Learn each topic with diagrams and worked examples. Includes a special section on reverse percentages and two- and three-step word problems — the bits that catch people out.</p>
          <span class="go">Open the guide →</span>
        </a>
        <a class="home-card" href="#/practice">
          <div class="emoji">✏️</div>
          <h2>Practice</h2>
          <p>75 word problems across three levels: Basic, Intermediate and Advanced. Type your answer, reveal a hint if you need one, then check it against a full model answer.</p>
          <span class="go">Start practising →</span>
        </a>
      </section>

      ${homeStats()}
    `;
  }

  function homeStats() {
    const total = QUESTIONS.length;
    const done = Object.keys(progress).length;
    const correct = Object.values(progress).filter(v => v === 'correct').length;
    if (done === 0) {
      return `<div class="card center"><p class="lead" style="margin:0">Tip: start with the Guide's <strong>“Reverse &amp; Multi-step ⭐”</strong> section if word problems feel tricky.</p></div>`;
    }
    return `<div class="card">
      <h3 style="margin-top:0">Your progress so far</h3>
      <p class="progress-line">${correct} correct · ${done} attempted · ${total} total</p>
      <div class="progress-bar"><span style="width:${Math.round(correct/total*100)}%"></span></div>
      <p style="margin-top:14px"><a class="btn small secondary" href="#/practice">Keep practising →</a></p>
    </div>`;
  }

  /* =========================================================
     GUIDE
     ========================================================= */
  function renderGuide() {
    const { rest } = currentRoute();
    const active = rest[0] || GUIDE[0].id;
    const navLinks = GUIDE.map(s =>
      `<a href="#/guide/${s.id}" class="${s.id === active ? 'active' : ''}">${s.title}</a>`
    ).join('');
    const section = GUIDE.find(s => s.id === active) || GUIDE[0];

    appEl.innerHTML = `
      <div class="guide-layout">
        <aside class="guide-nav">
          <h4>Topics</h4>
          ${navLinks}
        </aside>
        <article class="guide-content">
          <div class="guide-section active">${section.html}</div>
          <div class="nav-buttons">${guidePrevNext(active)}</div>
        </article>
      </div>
    `;
  }

  function guidePrevNext(activeId) {
    const idx = GUIDE.findIndex(s => s.id === activeId);
    const prev = idx > 0 ? GUIDE[idx - 1] : null;
    const next = idx < GUIDE.length - 1 ? GUIDE[idx + 1] : null;
    return `
      ${prev ? `<a class="btn ghost" href="#/guide/${prev.id}">← ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a class="btn secondary" href="#/guide/${next.id}">${next.title} →</a>` : '<a class="btn" href="#/practice">Go to Practice →</a>'}
    `;
  }

  /* =========================================================
     PRACTICE
     ========================================================= */
  // practice view state (kept in module scope, not the URL, to stay simple)
  let pFilter = { topic: 'All', level: 'All', show: 'All' };
  let pIndex = 0;

  function filteredQuestions() {
    return QUESTIONS.filter(q => {
      if (pFilter.topic !== 'All' && q.topic !== pFilter.topic) return false;
      if (pFilter.level !== 'All' && q.level !== pFilter.level) return false;
      if (pFilter.show === 'Review') {
        // only the ones she got wrong or partially right
        return progress[q.id] === 'wrong' || progress[q.id] === 'partial';
      }
      if (pFilter.show === 'Unsolved') return progress[q.id] !== 'correct';
      return true;
    });
  }

  function renderPractice() {
    const list = filteredQuestions();
    if (pIndex >= list.length) pIndex = 0;

    appEl.innerHTML = `
      <div class="practice-head">
        <div>
          <h1 style="margin-bottom:4px">Practice</h1>
          <p class="progress-line" id="pProgress"></p>
          <div class="progress-bar"><span id="pBar"></span></div>
        </div>
        <div class="filters">
          <div class="filter-group">
            <label for="fTopic">Topic</label>
            <select id="fTopic">${['All', ...TOPICS].map(t => opt(t, pFilter.topic)).join('')}</select>
          </div>
          <div class="filter-group">
            <label for="fLevel">Level</label>
            <select id="fLevel">${['All', ...LEVELS].map(l => opt(l, pFilter.level)).join('')}</select>
          </div>
          <div class="filter-group">
            <label for="fShow">Show</label>
            <select id="fShow">
              <option value="All" ${pFilter.show === 'All' ? 'selected' : ''}>All questions</option>
              <option value="Review" ${pFilter.show === 'Review' ? 'selected' : ''}>Retry wrong ones</option>
              <option value="Unsolved" ${pFilter.show === 'Unsolved' ? 'selected' : ''}>Not yet solved</option>
            </select>
          </div>
        </div>
      </div>
      <div id="qHolder"></div>
    `;

    document.getElementById('fTopic').addEventListener('change', e => { pFilter.topic = e.target.value; pIndex = 0; renderPractice(); });
    document.getElementById('fLevel').addEventListener('change', e => { pFilter.level = e.target.value; pIndex = 0; renderPractice(); });
    document.getElementById('fShow').addEventListener('change', e => { pFilter.show = e.target.value; pIndex = 0; renderPractice(); });

    drawQuestion();
  }

  function opt(val, sel) { return `<option value="${val}" ${val === sel ? 'selected' : ''}>${val}</option>`; }

  function updateProgressLine(list) {
    const attempted = list.filter(q => progress[q.id]).length;
    const correct = list.filter(q => progress[q.id] === 'correct').length;
    const line = document.getElementById('pProgress');
    const bar = document.getElementById('pBar');
    if (line) line.textContent = `${correct} correct · ${attempted} attempted · ${list.length} in this set`;
    if (bar) bar.style.width = list.length ? `${Math.round(correct / list.length * 100)}%` : '0%';
  }

  function drawQuestion() {
    const list = filteredQuestions();
    const holder = document.getElementById('qHolder');
    updateProgressLine(list);

    if (list.length === 0) {
      const msg = pFilter.show === 'Review'
        ? 'Nothing to retry here — every question you\'ve tried in this set is correct! 🎉 Switch "Show" back to "All questions" for more practice.'
        : pFilter.show === 'Unsolved'
          ? 'All solved in this set — nice work! 🎉 Switch "Show" to "All questions" to revisit any.'
          : 'No questions match these filters yet.';
      holder.innerHTML = `<div class="empty">${msg}</div>`;
      return;
    }
    const q = list[pIndex];
    const prevStatus = progress[q.id];
    const statusBadge = prevStatus
      ? `<span class="q-status ${prevStatus}">${prevStatus === 'correct' ? '✓ solved' : prevStatus === 'partial' ? '~ partly' : '✗ try again'}</span>`
      : '';

    holder.innerHTML = `
      <div class="q-card">
        <div class="q-meta">
          <span class="q-number">Q${pIndex + 1} / ${list.length}</span>
          <span class="pill ${q.level.toLowerCase()}">${q.level}</span>
          <span class="pill topic">${q.topic}</span>
          ${statusBadge}
        </div>
        <p class="q-text">${q.question}</p>

        <div class="answer-row">
          <input type="text" id="ansInput" placeholder="Type your answer…" autocomplete="off" />
          <button class="btn" id="checkBtn">Check answer</button>
        </div>

        <div class="hint-toggle">
          <button class="btn ghost small" id="hintBtn">💡 Show hint</button>
          <div class="hint-box" id="hintBox">${q.hint || ''}</div>
        </div>

        <div class="feedback" id="feedback"></div>

        <div class="nav-buttons">
          <button class="btn ghost" id="prevBtn" ${pIndex === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn secondary" id="nextBtn" ${pIndex === list.length - 1 ? 'disabled' : ''}>Next →</button>
        </div>
      </div>
    `;

    const input = document.getElementById('ansInput');
    const feedbackEl = document.getElementById('feedback');

    const doCheck = () => evaluate(q, input.value, feedbackEl, list);
    document.getElementById('checkBtn').addEventListener('click', doCheck);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doCheck(); });

    document.getElementById('hintBtn').addEventListener('click', () => {
      const box = document.getElementById('hintBox');
      box.classList.toggle('show');
      document.getElementById('hintBtn').textContent = box.classList.contains('show') ? '💡 Hide hint' : '💡 Show hint';
    });

    document.getElementById('prevBtn').addEventListener('click', () => { if (pIndex > 0) { pIndex--; drawQuestion(); } });
    document.getElementById('nextBtn').addEventListener('click', () => { if (pIndex < list.length - 1) { pIndex++; drawQuestion(); } });

    input.focus();
  }

  function evaluate(q, value, feedbackEl, list) {
    const result = checkAnswer(q, value);
    if (result === 'empty') {
      feedbackEl.className = 'feedback partial show';
      feedbackEl.innerHTML = `<div class="verdict">✋ Type an answer first</div>`;
      return;
    }

    let cls, verdict, intro = '';
    if (result === 'correct') {
      cls = 'correct'; verdict = '✓ Correct — well done!';
      progress[q.id] = 'correct';
    } else if (result && result.kind === 'partial') {
      cls = 'partial'; verdict = '~ Partially correct — you\'re close!';
      intro = `<p>${result.note}</p>`;
      if (progress[q.id] !== 'correct') progress[q.id] = 'partial';
    } else {
      cls = 'wrong'; verdict = '✗ Not quite — let\'s look at it together';
      if (!progress[q.id]) progress[q.id] = 'wrong';
    }
    saveProgress(progress);

    feedbackEl.className = `feedback ${cls} show`;
    feedbackEl.innerHTML = `
      <div class="verdict">${verdict}</div>
      ${intro}
      <div class="model-answer">
        <h4>Model answer</h4>
        ${q.model}
      </div>
    `;
    updateProgressLine(list);

    // refresh the little status badge without redrawing the whole card
    const badgeHolder = document.querySelector('.q-meta');
    if (badgeHolder && !badgeHolder.querySelector('.q-status')) {
      const span = document.createElement('span');
      span.className = `q-status ${progress[q.id]}`;
      span.textContent = progress[q.id] === 'correct' ? '✓ solved' : progress[q.id] === 'partial' ? '~ partly' : '✗ try again';
      badgeHolder.appendChild(span);
    }
  }

  /* =========================================================
     WORKSHEET (printable)
     ========================================================= */
  let wFilter = { topic: 'All', level: 'Advanced', answers: true };

  function worksheetQuestions() {
    return QUESTIONS.filter(q =>
      (wFilter.topic === 'All' || q.topic === wFilter.topic) &&
      (wFilter.level === 'All' || q.level === wFilter.level)
    );
  }

  function renderWorksheet() {
    const list = worksheetQuestions();
    const setLabel = `${wFilter.level === 'All' ? 'All levels' : wFilter.level} · ${wFilter.topic === 'All' ? 'All topics' : wFilter.topic}`;

    const questionsHtml = list.map((q, i) => `
      <li class="ws-item">
        <div class="ws-q"><span class="ws-qnum">${i + 1}.</span> ${q.question}</div>
        <div class="ws-hint">💡 Hint: ${q.hint || ''}</div>
        <div class="ws-working"><span>Working / answer:</span></div>
      </li>`).join('');

    const answersHtml = wFilter.answers ? `
      <div class="ws-answers">
        <h2>Model answers — ${setLabel}</h2>
        <ol class="ws-answer-list">
          ${list.map(q => `<li><div class="ws-a-q">${q.question}</div>${q.model}</li>`).join('')}
        </ol>
      </div>` : '';

    appEl.innerHTML = `
      <div class="ws-controls">
        <h1 style="margin-top:0">Printable worksheet</h1>
        <p class="lead">Pick a set, then print it or save it as a PDF to do on paper. Answers print on a separate page at the end.</p>
        <div class="filters">
          <div class="filter-group">
            <label for="wTopic">Topic</label>
            <select id="wTopic">${['All', ...TOPICS].map(t => opt(t, wFilter.topic)).join('')}</select>
          </div>
          <div class="filter-group">
            <label for="wLevel">Level</label>
            <select id="wLevel">${['All', ...LEVELS].map(l => opt(l, wFilter.level)).join('')}</select>
          </div>
          <div class="filter-group">
            <label for="wAnswers">Answer sheet</label>
            <select id="wAnswers">
              <option value="yes" ${wFilter.answers ? 'selected' : ''}>Include answers</option>
              <option value="no" ${!wFilter.answers ? 'selected' : ''}>Questions only</option>
            </select>
          </div>
          <div class="filter-group" style="justify-content:flex-end">
            <label>&nbsp;</label>
            <button class="btn" id="wPrint">🖨️ Print / Save as PDF</button>
          </div>
        </div>
        <p class="progress-line">${list.length} question${list.length === 1 ? '' : 's'} in this worksheet.</p>
      </div>

      <div class="worksheet">
        <div class="ws-header">
          <h1>Maths Worksheet</h1>
          <p class="ws-meta">Name: _______________________   Date: ______________</p>
          <p class="ws-set">${setLabel} · Fractions, Decimals, Ratios &amp; Percentages</p>
        </div>
        ${list.length ? `<ol class="ws-questions">${questionsHtml}</ol>` : '<p>No questions match this selection.</p>'}
        ${answersHtml}
      </div>
    `;

    document.getElementById('wTopic').addEventListener('change', e => { wFilter.topic = e.target.value; renderWorksheet(); });
    document.getElementById('wLevel').addEventListener('change', e => { wFilter.level = e.target.value; renderWorksheet(); });
    document.getElementById('wAnswers').addEventListener('change', e => { wFilter.answers = e.target.value === 'yes'; renderWorksheet(); });
    document.getElementById('wPrint').addEventListener('click', () => window.print());
  }

  /* =========================================================
     boot
     ========================================================= */
  window.addEventListener('hashchange', render);
  render();
})();
