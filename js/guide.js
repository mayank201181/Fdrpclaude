/* ============================================================================
   GUIDE CONTENT
   Each section: { id, title, html }. Rendered by js/app.js.
   Diagrams are inline SVG so they need no external files and scale crisply.
   ========================================================================== */

const GUIDE = [

/* ------------------------------------------------------------------ */
{ id:'start', title:'Start here', html: `
  <h1>The big idea 💡</h1>
  <p class="lead">You already know the basics — that 2 out of 10 is 1/5, or 0.2, or 20%. This guide is about the tricky part: <strong>using</strong> those ideas in word problems, and especially <strong>thinking backwards</strong>.</p>

  <div class="note">
    <strong>The one move that unlocks almost everything:</strong> when a problem talks about percentages, always stop and ask
    <em>“What is the whole — the 100% — in this question?”</em> Find that, and the rest is easy.
  </div>

  <h3>How to use this app</h3>
  <ul>
    <li><strong>Guide</strong> (you're here): read a topic, look carefully at the diagrams, and copy the steps onto paper once.</li>
    <li><strong>Practice</strong>: try the questions. Use the <em>hint</em> button if you're stuck — that's not cheating, that's learning. Then <em>check your answer</em> and read the full worked solution, even when you got it right.</li>
  </ul>

  <div class="tip"><strong>Golden rule for word problems:</strong> read it twice, write down what you know, decide what you're looking for, and <em>then</em> start calculating. Slow is smooth, smooth is fast.</div>

  <h3>The four topics talk to each other</h3>
  <p>Fractions, decimals and percentages are just three ways of saying the same thing. Ratios are close cousins. Here's the master conversion table — learn these by heart and most questions get faster.</p>
  ${fdpTable()}
` },

/* ------------------------------------------------------------------ */
{ id:'fractions', title:'Fractions', html: `
  <h1>Fractions</h1>
  <p class="lead">A fraction is just “how many parts, out of how many equal parts in the whole”.</p>

  <div class="diagram">
    ${barModel(8, 3, 'A bar split into 8 equal parts, 3 shaded')}
    <figcaption>This bar is split into 8 equal pieces and 3 are shaded → <strong>3/8</strong>. Top = parts you have, bottom = total parts.</figcaption>
  </div>

  <h3>Simplifying (making a fraction “tidier”)</h3>
  <p>Divide the top and bottom by the <em>same</em> number until you can't go further.</p>
  <div class="worked"><h4>Example: simplify 12/30</h4>
    <p>Both divide by 6: 12 ÷ 6 = 2, and 30 ÷ 6 = 5. So 12/30 = <strong>2/5</strong>.</p>
  </div>

  <h3>“Of” means multiply</h3>
  <p>When a problem says <em>“2/3 <strong>of</strong> something”</em>, that's a multiplication.</p>
  <ol class="steps">
    <li>To find a fraction <em>of an amount</em>: divide by the bottom, multiply by the top.</li>
    <li><strong>2/5 of 35</strong>: 35 ÷ 5 = 7 (that's one fifth), then × 2 = <strong>14</strong>.</li>
  </ol>

  <div class="diagram">
    ${barModel(5, 2, 'Bar of 5 parts with 2 shaded, each worth 7', ['','','','',''], 7)}
    <figcaption>35 shared into 5 equal parts → each part is 7. Two parts (2/5) = 14.</figcaption>
  </div>

  <h3>Adding & subtracting: make the bottoms match</h3>
  <div class="worked"><h4>Example: 1/3 + 1/4</h4>
    <p>The smallest number both 3 and 4 divide into is 12. So 1/3 = 4/12 and 1/4 = 3/12.</p>
    <p>4/12 + 3/12 = <strong>7/12</strong>.</p>
  </div>

  <div class="note"><strong>Backwards fractions (important!):</strong> If you're told <em>3/4 of a number is 18</em>, work in parts.
  3/4 = 18 means one quarter is 18 ÷ 3 = 6, so the whole (four quarters) is 6 × 4 = <strong>24</strong>. This “find one part, then build up to the whole” idea is the same skill you'll use for reverse percentages.</div>
` },

/* ------------------------------------------------------------------ */
{ id:'decimals', title:'Decimals', html: `
  <h1>Decimals</h1>
  <p class="lead">Decimals are fractions with hidden denominators of 10, 100, 1000…</p>

  <div class="diagram">
    ${placeValue()}
    <figcaption>Each step to the right is ten times smaller: tenths, then hundredths, then thousandths.</figcaption>
  </div>

  <table>
    <tr><th>Decimal</th><th>Means</th><th>Fraction</th></tr>
    <tr><td>0.5</td><td>5 tenths</td><td>5/10 = 1/2</td></tr>
    <tr><td>0.25</td><td>25 hundredths</td><td>25/100 = 1/4</td></tr>
    <tr><td>0.6</td><td>6 tenths</td><td>6/10 = 3/5</td></tr>
    <tr><td>0.05</td><td>5 hundredths</td><td>5/100 = 1/20</td></tr>
  </table>

  <h3>Adding & subtracting: line up the dots</h3>
  <div class="worked"><h4>Example: 0.7 + 0.45</h4>
    <p>Write 0.7 as 0.70 so both have two decimal places, then add: 0.70 + 0.45 = <strong>1.15</strong>.</p>
  </div>

  <div class="warn"><strong>Common slip:</strong> 0.3 is bigger than 0.03 — not the other way round! Give them the same number of digits (0.30 vs 0.03) and it's obvious.</div>

  <h3>Rounding to 1 decimal place</h3>
  <p>Look at the <em>next</em> digit. 5 or more → round up; 4 or less → stay. So 4.67 → look at the 7 → rounds up → <strong>4.7</strong>.</p>

  <div class="note"><strong>Backwards decimals:</strong> “0.4 of an amount is £6” → 0.4 means four tenths. One tenth = £6 ÷ 4 = £1.50, so the whole (ten tenths) = £15.</div>
` },

/* ------------------------------------------------------------------ */
{ id:'ratios', title:'Ratios', html: `
  <h1>Ratios</h1>
  <p class="lead">A ratio compares amounts using “parts”. <code>3:2</code> means for every 3 of one thing, there are 2 of the other.</p>

  <div class="diagram">
    ${ratioBar(3,2)}
    <figcaption>The ratio 3:2 → 5 equal parts in total: 3 of one kind, 2 of the other.</figcaption>
  </div>

  <h3>Simplifying ratios</h3>
  <p>Just like fractions — divide both sides by the same number. 6:9 → divide by 3 → <strong>2:3</strong>.</p>

  <h3>Sharing in a ratio — the “one part” method</h3>
  <p>This is the method that solves nearly every ratio question:</p>
  <ol class="steps">
    <li>Add the numbers in the ratio → that's the <strong>total number of parts</strong>.</li>
    <li>Divide the total amount by the number of parts → that's <strong>one part</strong>.</li>
    <li>Multiply to find each share.</li>
  </ol>
  <div class="worked"><h4>Example: share £40 between Amy and Ben in 3:1</h4>
    <p>Parts: 3 + 1 = 4. One part = £40 ÷ 4 = £10. Amy = 3 × £10 = <strong>£30</strong>, Ben = £10.</p>
  </div>

  <div class="diagram">
    ${ratioBar(3,1,['£10','£10','£10'],['£10'])}
    <figcaption>£40 ÷ 4 parts = £10 each part. Amy (3 parts) = £30, Ben (1 part) = £10.</figcaption>
  </div>

  <div class="note"><strong>“One part is known” problems:</strong> if you're told one quantity instead of the total — e.g. “flour:butter = 5:2 and there is 250 g of flour” — use the known side to find one part. 5 parts = 250 g → one part = 50 g → butter = 2 × 50 = 100 g.</div>

  <div class="tip"><strong>Difference trick (advanced):</strong> “Cara gets 24 more than Ann, ratio 2:3:5”. The <em>difference</em> Cara − Ann is 5 − 2 = 3 parts. So 3 parts = 24 → one part = 8 → total of 10 parts = 80.</div>
` },

/* ------------------------------------------------------------------ */
{ id:'percentages', title:'Percentages', html: `
  <h1>Percentages (the basics)</h1>
  <p class="lead">“Per cent” means “out of 100”. 30% just means 30 out of 100, or 30/100, or 0.3.</p>

  <div class="diagram">
    ${percentBar(30)}
    <figcaption>30% of a bar shaded — 30 squares out of 100.</figcaption>
  </div>

  <h3>The building blocks (do these in your head)</h3>
  <table>
    <tr><th>To find…</th><th>Do this</th><th>Example on £80</th></tr>
    <tr><td>10%</td><td>÷ 10</td><td>£8</td></tr>
    <tr><td>1%</td><td>÷ 100</td><td>£0.80</td></tr>
    <tr><td>50%</td><td>÷ 2 (half)</td><td>£40</td></tr>
    <tr><td>25%</td><td>÷ 4 (quarter)</td><td>£20</td></tr>
    <tr><td>5%</td><td>half of 10%</td><td>£4</td></tr>
    <tr><td>20%</td><td>10% × 2</td><td>£16</td></tr>
  </table>
  <p>Build any percentage from these. <strong>15%</strong> = 10% + 5% = £8 + £4 = £12.</p>

  <h3>Increase and decrease</h3>
  <ul>
    <li><strong>Increase by 20%:</strong> find 20%, then ADD it on. £50 → +£10 → £60.</li>
    <li><strong>Decrease by 15%:</strong> find 15%, then TAKE it off. £80 → −£12 → £68.</li>
  </ul>

  <h3>“What percentage is …?”</h3>
  <p>Write it as a fraction (part ÷ whole), then turn into a percentage (× 100).</p>
  <div class="worked"><h4>Example: 18 out of 25</h4>
    <p>18/25 = 72/100 = <strong>72%</strong>. (Multiply top and bottom by 4 to get “out of 100”.)</p>
  </div>

  <div class="warn"><strong>Always ask “percentage of WHAT?”</strong> Percentage change is measured against the <em>original</em> amount, never the new one. From £40 to £50 is a £10 rise, and 10 out of the original 40 = <strong>25%</strong> (not 20%).</div>

  <p>Ready for the part that trips most people up? → go to <strong>Reverse &amp; Multi-step</strong>.</p>
` },

/* ------------------------------------------------------------------ */
{ id:'reverse', title:'Reverse & Multi-step ⭐', html: `
  <h1>Reverse &amp; Multi-step thinking ⭐</h1>
  <p class="lead">This is the section to read slowly. It's the difference between “knowing percentages” and “getting the answer right in a word problem”.</p>

  <div class="warn">
    <strong>The trap everyone falls into.</strong> A coat is <em>20% off</em> and now costs <strong>£80</strong>. What was the original price?<br>
    Tempting (and WRONG): “add 20% of 80” → 80 + 16 = £96. ❌<br>
    Why it's wrong: the 20% was taken off the <em>original</em> price, not off £80. So £80 is only part of the original — it is <strong>80% of it</strong>, not 100%.
  </div>

  <h2>1 · The “What is 100%?” method</h2>
  <p>Every reverse-percentage question is the same puzzle in disguise. You are given a number, and you must work out what <strong>100% (the whole)</strong> is. Three tiny steps:</p>
  <ol class="steps">
    <li>Decide what percentage the number you were given represents.</li>
    <li>Divide to find <strong>1%</strong>.</li>
    <li>Multiply by 100 to find <strong>100%</strong> — the answer.</li>
  </ol>

  <h3>Discount example (the £80 coat), drawn out</h3>
  <div class="diagram">
    ${reverseDiscountBar()}
    <figcaption>20% was removed, so the £80 you pay is the remaining <strong>80%</strong>. The whole bar (100%) is what we want.</figcaption>
  </div>
  <div class="worked"><h4>Solve it</h4>
    <ol>
      <li>£80 = 80% of the original.</li>
      <li>1% = £80 ÷ 80 = £1.</li>
      <li>100% = £1 × 100 = <strong>£100</strong>.</li>
    </ol>
    <p>Check it forwards: £100 − 20% (£20) = £80. ✓ &nbsp; (Notice the wrong answer £96 fails this check: £96 − 20% = £76.8, not £80.)</p>
  </div>

  <h2>2 · Profit example (your shop)</h2>
  <p>A shop sells a toy for <strong>£120</strong>, making a <strong>20% profit</strong> on what they paid. What did they pay?</p>
  <p>Here the £120 is the cost <em>plus</em> a bit extra, so it is <strong>more</strong> than 100%. Cost = 100%, profit = +20%, selling price = <strong>120%</strong>.</p>
  <div class="diagram">
    ${reverseProfitBar()}
    <figcaption>The £120 selling price is 120% of the cost. So 120% = £120, and we want 100%.</figcaption>
  </div>
  <div class="worked"><h4>Solve it</h4>
    <ol>
      <li>£120 = 120% of the cost.</li>
      <li>1% = £120 ÷ 120 = £1.</li>
      <li>100% = <strong>£100</strong>. (Check: £100 + 20% = £120 ✓.)</li>
    </ol>
  </div>

  <div class="note"><strong>Spot the direction.</strong> Read the question and decide whether the number you were given is:
  <ul>
    <li><strong>less</strong> than the whole → a DISCOUNT or LOSS → it's below 100% (e.g. 80%, 75%, 65%).</li>
    <li><strong>more</strong> than the whole → PROFIT, VAT or an INCREASE → it's above 100% (e.g. 120%, 112%, 140%).</li>
  </ul>
  Get that percentage right and the “÷ then × 100” does the rest.</div>

  <h3>A small table to recognise instantly</h3>
  <table>
    <tr><th>The wording</th><th>The given number is…</th><th>To get the original, divide by</th></tr>
    <tr><td>20% discount / 20% off</td><td>80%</td><td>0.8</td></tr>
    <tr><td>25% loss</td><td>75%</td><td>0.75</td></tr>
    <tr><td>“pay only 65%”</td><td>65%</td><td>0.65</td></tr>
    <tr><td>20% profit / +20% VAT</td><td>120%</td><td>1.2</td></tr>
    <tr><td>12% pay rise</td><td>112%</td><td>1.12</td></tr>
    <tr><td>40% increase</td><td>140%</td><td>1.4</td></tr>
  </table>
  <p>“Divide by 0.8” and “find 1% then × 100” give exactly the same answer — use whichever feels clearer to you.</p>

  <h2>3 · Multipliers: the fast lane</h2>
  <p>Once the bar model makes sense, you can speed up with a single <strong>multiplier</strong>.</p>
  <div class="diagram">
    ${multiplierLine()}
    <figcaption>A percentage change is just “× a number”. Increases are above 1; decreases are below 1.</figcaption>
  </div>
  <ul>
    <li>Increase by 25% → × 1.25 &nbsp;&nbsp; | &nbsp;&nbsp; Decrease by 25% → × 0.75</li>
    <li><strong>Forwards:</strong> new = old × multiplier.</li>
    <li><strong>Backwards:</strong> old = new ÷ multiplier.</li>
  </ul>
  <div class="worked"><h4>Example: £540 includes 20% VAT — find the price before VAT</h4>
    <p>Multiplier for +20% is 1.2. Backwards: £540 ÷ 1.2 = <strong>£450</strong>. (Taking 20% off £540 would give £432 — wrong, because £540 isn't the “before” price.)</p>
  </div>

  <h2>4 · Two-step and three-step problems</h2>
  <p>Long problems aren't harder — they're just several easy steps in a row. Write the result of each step before moving on.</p>

  <div class="worked"><h4>Two steps: 15% off £80</h4>
    <p>Step 1 — saving: 15% of £80 = £12. &nbsp; Step 2 — price: £80 − £12 = <strong>£68</strong>. <br>
    <em>Watch out:</em> £12 is the <strong>saving</strong>, not the answer. The question asks for the price.</p>
  </div>

  <div class="worked"><h4>Two changes in a row: +10% then −10% on £20</h4>
    <p>Step 1: £20 × 1.1 = £22. &nbsp; Step 2: 10% of £22 = £2.20, so £22 − £2.20 = <strong>£19.80</strong>.</p>
    <p>It does <em>not</em> come back to £20! The −10% is taken from £22, a bigger amount than the original. This is exactly why you can't add and subtract percentages of different amounts.</p>
  </div>

  <div class="worked"><h4>Three steps: hidden whole</h4>
    <p>“A TV is reduced by 30% and now costs £280. How much was it reduced by, in pounds?”</p>
    <ol>
      <li>£280 = 70% of the original → 1% = £4 → original = £400.</li>
      <li>Reduction = £400 − £280 = <strong>£120</strong>.</li>
      <li>Check: 30% of £400 = £120 ✓.</li>
    </ol>
  </div>

  <div class="tip">
    <strong>A checklist you can say out loud for any percentage word problem:</strong>
    <ol>
      <li>What is the whole — the 100%?</li>
      <li>Is the number I'm given bigger or smaller than the whole?</li>
      <li>What percentage does my number represent?</li>
      <li>Find 1% (divide), then build the part I actually need.</li>
      <li>Re-read the question — am I giving the saving, the new price, or the original? Check forwards.</li>
    </ol>
  </div>
` }

];

/* =====================================================================
   SVG diagram builders (kept simple and self-contained)
   ===================================================================== */

function barModel(parts, shaded, alt, labels, partValue) {
  const W = 520, H = 70, pad = 10;
  const bw = (W - pad*2) / parts;
  let cells = '';
  for (let i = 0; i < parts; i++) {
    const x = pad + i*bw;
    const fill = i < shaded ? '#4f46e5' : '#eef2ff';
    const stroke = '#c7d2fe';
    cells += `<rect x="${x}" y="${pad}" width="${bw}" height="${H-pad*2}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
    if (partValue != null) {
      const tcol = i < shaded ? '#fff' : '#3730a3';
      cells += `<text x="${x+bw/2}" y="${H/2+5}" text-anchor="middle" font-size="14" font-weight="700" fill="${tcol}">${partValue}</text>`;
    }
  }
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${alt||''}">${cells}</svg>`;
}

function ratioBar(a, b, labelsA, labelsB) {
  const total = a + b, W = 520, H = 64, pad = 10;
  const bw = (W - pad*2) / total;
  let cells = '';
  for (let i = 0; i < total; i++) {
    const x = pad + i*bw;
    const isA = i < a;
    const fill = isA ? '#0284c7' : '#f59e0b';
    cells += `<rect x="${x}" y="${pad}" width="${bw}" height="${H-pad*2}" rx="4" fill="${fill}" opacity="0.9"/>`;
    let lbl = '';
    if (isA && labelsA && labelsA[i] != null) lbl = labelsA[i];
    if (!isA && labelsB && labelsB[i-a] != null) lbl = labelsB[i-a];
    if (lbl) cells += `<text x="${x+bw/2}" y="${H/2+5}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">${lbl}</text>`;
  }
  cells += `<text x="${pad}" y="${H-2}" font-size="12" fill="#0369a1">${a} parts</text>`;
  cells += `<text x="${W-pad}" y="${H-2}" text-anchor="end" font-size="12" fill="#b45309">${b} parts</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="ratio ${a} to ${b}">${cells}</svg>`;
}

function percentBar(pct) {
  const W = 520, H = 44, pad = 10, full = W - pad*2;
  const w = full * pct/100;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${pct} percent">
    <rect x="${pad}" y="${pad}" width="${full}" height="${H-pad*2}" rx="6" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/>
    <rect x="${pad}" y="${pad}" width="${w}" height="${H-pad*2}" rx="6" fill="#4f46e5"/>
    <text x="${pad + w/2}" y="${H/2+5}" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">${pct}%</text>
  </svg>`;
}

function reverseDiscountBar() {
  const W = 540, H = 110, pad = 12, full = W - pad*2;
  const eighty = full * 0.8;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="reverse discount bar">
    <!-- whole 100% outline -->
    <rect x="${pad}" y="46" width="${full}" height="34" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="2"/>
    <!-- 80% paid -->
    <rect x="${pad}" y="46" width="${eighty}" height="34" rx="6" fill="#16a34a"/>
    <text x="${pad + eighty/2}" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">£80  =  80%</text>
    <text x="${pad + eighty + (full-eighty)/2}" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#991b1b">20% off</text>
    <!-- brace for 100% -->
    <text x="${pad + full/2}" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#3730a3">Original price = 100% = ?</text>
    <line x1="${pad}" y1="34" x2="${pad+full}" y2="34" stroke="#3730a3" stroke-width="2"/>
    <line x1="${pad}" y1="34" x2="${pad}" y2="44" stroke="#3730a3" stroke-width="2"/>
    <line x1="${pad+full}" y1="34" x2="${pad+full}" y2="44" stroke="#3730a3" stroke-width="2"/>
    <text x="${pad + full/2}" y="100" text-anchor="middle" font-size="13" fill="#374151">1% = £80 ÷ 80 = £1 → 100% = £100</text>
  </svg>`;
}

function reverseProfitBar() {
  const W = 540, H = 110, pad = 12, full = W - pad*2;
  const cost = full * (100/120); // 100% portion of a 120% bar
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="reverse profit bar">
    <rect x="${pad}" y="46" width="${full}" height="34" rx="6" fill="#fef3c7" stroke="#fcd34d" stroke-width="2"/>
    <rect x="${pad}" y="46" width="${cost}" height="34" rx="6" fill="#4f46e5"/>
    <text x="${pad + cost/2}" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">cost = 100%</text>
    <text x="${pad + cost + (full-cost)/2}" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">+20%</text>
    <text x="${pad + full/2}" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">Selling price £120 = 120%</text>
    <line x1="${pad}" y1="34" x2="${pad+full}" y2="34" stroke="#b45309" stroke-width="2"/>
    <line x1="${pad}" y1="34" x2="${pad}" y2="44" stroke="#b45309" stroke-width="2"/>
    <line x1="${pad+full}" y1="34" x2="${pad+full}" y2="44" stroke="#b45309" stroke-width="2"/>
    <text x="${pad + full/2}" y="100" text-anchor="middle" font-size="13" fill="#374151">1% = £120 ÷ 120 = £1 → 100% = £100</text>
  </svg>`;
}

function multiplierLine() {
  const W = 540, H = 96, pad = 30, axisY = 56;
  const x0 = pad, x1 = W - pad;
  // map 0.6 .. 1.4 across the axis
  const lo = 0.6, hi = 1.4;
  const X = v => x0 + (v - lo)/(hi - lo) * (x1 - x0);
  const ticks = [[0.7,'−30%\n×0.7'],[0.8,'−20%\n×0.8'],[1.0,'no change\n×1'],[1.2,'+20%\n×1.2'],[1.3,'+30%\n×1.3']];
  let marks = '';
  ticks.forEach(([v,lab]) => {
    const x = X(v);
    const lines = lab.split('\n');
    marks += `<line x1="${x}" y1="${axisY-6}" x2="${x}" y2="${axisY+6}" stroke="#374151" stroke-width="2"/>`;
    marks += `<text x="${x}" y="${axisY+22}" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">${lines[0]}</text>`;
    marks += `<text x="${x}" y="${axisY+34}" text-anchor="middle" font-size="11" fill="#6b7280">${lines[1]}</text>`;
  });
  const xOne = X(1.0);
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="multiplier number line">
    <line x1="${x0}" y1="${axisY}" x2="${x1}" y2="${axisY}" stroke="#9ca3af" stroke-width="2"/>
    <rect x="${x0}" y="${axisY-4}" width="${xOne-x0}" height="8" fill="#fecaca"/>
    <rect x="${xOne}" y="${axisY-4}" width="${x1-xOne}" height="8" fill="#bbf7d0"/>
    <text x="${(x0+xOne)/2}" y="${axisY-14}" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="700">decreases (&lt;1)</text>
    <text x="${(xOne+x1)/2}" y="${axisY-14}" text-anchor="middle" font-size="11" fill="#15803d" font-weight="700">increases (&gt;1)</text>
    ${marks}
  </svg>`;
}

function placeValue() {
  const cols = [['T','tens',''],['U','units','.'],['t','tenths','0.1'],['h','hundredths','0.01'],['th','thousandths','0.001']];
  const W = 540, H = 90, cw = 96, pad = 14;
  let cells = '';
  cols.forEach((c, i) => {
    const x = pad + i*cw;
    const isDecimal = i >= 2;
    cells += `<rect x="${x}" y="20" width="${cw-8}" height="40" rx="6" fill="${isDecimal?'#eef2ff':'#f1f5f9'}" stroke="#cbd5e1"/>`;
    cells += `<text x="${x+(cw-8)/2}" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">${c[1]}</text>`;
    cells += `<text x="${x+(cw-8)/2}" y="76" text-anchor="middle" font-size="11" fill="#6b7280">${c[2]}</text>`;
  });
  // decimal point marker between units and tenths
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="place value chart">${cells}
    <text x="${pad+2*cw-6}" y="46" font-size="22" font-weight="800" fill="#dc2626">.</text></svg>`;
}

function fdpTable() {
  const rows = [
    ['1/2','0.5','50%'],['1/4','0.25','25%'],['3/4','0.75','75%'],
    ['1/5','0.2','20%'],['2/5','0.4','40%'],['1/10','0.1','10%'],
    ['1/3','0.333…','33⅓%'],['1/100','0.01','1%']
  ];
  let body = rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
  return `<table><tr><th>Fraction</th><th>Decimal</th><th>Percentage</th></tr>${body}</table>`;
}

if (typeof window !== 'undefined') { window.GUIDE = GUIDE; }
