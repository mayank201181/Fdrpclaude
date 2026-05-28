# Maths Practice — Fractions, Decimals, Ratios & Percentages

A small, friendly web app for practising Year 7 / early-IGCSE maths. It has two parts:

- **📘 Guide** — clear explanations with diagrams. There is a special section,
  **“Reverse & Multi-step ⭐”**, that teaches reverse percentages (e.g. *“sold for £80
  after 20% off — what was the original price?”*), profit/loss problems, and two- and
  three-step word problems using bar models.
- **✏️ Practice** — 75 word problems across three levels (**Basic / Intermediate /
  Advanced**, 25 each). Each question has a hidden **hint**, an answer box, and a
  **Check answer** button that says *Correct / Partially correct / Not yet* and shows a
  full **worked model answer**. No internet or AI needed — checking happens in the page.

## How to run it

It's a plain static website — no installation, no build step.

**Option A — just open it:** double-click `index.html` (or right-click → Open with your browser).

**Option B — share it as a link (recommended):** publish it free with **GitHub Pages**:

1. On GitHub, go to the repo → **Settings → Pages**.
2. Under *Build and deployment*, set **Source = Deploy from a branch**.
3. Choose the branch (e.g. `main` once this is merged) and folder **/(root)**, then **Save**.
4. After a minute, GitHub gives you a URL like `https://<your-username>.github.io/FDRPclaude/`.
   Send that link to your daughter — it works on a phone, tablet or laptop.

## Progress saving

Answers and progress are saved in the browser (localStorage) on the device being used,
so she can close the tab and come back. It is per-device and private — nothing is uploaded.

## Adding your own questions later

Open `js/questions.js`. Copy any question block, change the wording, hint, accepted
answers and model answer, and save. The file has full instructions at the top, including
how the answer-checker treats equivalent forms (`1/2 = 0.5 = 50%`, `3:2 = 6:4`, `£12 = 12`).

## Project layout

```
index.html        the page shell + navigation
styles.css        all styling (responsive, works on mobile)
js/questions.js   the 75-question bank (easy to extend)
js/guide.js       the guide content + inline SVG diagrams
js/app.js         routing, rendering, and the answer-checking engine
```
