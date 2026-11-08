# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static quiz app for students preparing for the theory part of Polish vocational qualification exams (INF.03, INF.04). Live at https://zs3-kocjan.github.io/Kwalifikacje-Zawodowe. React 19, Vite, Tailwind 4 and GSAP, with no backend. Quiz progress lives only in React state, so a reload resets it.

## Commands

Run everything from `packages/web-site`. There is no root `package.json`.

```bash
npm run dev                        # open http://localhost:5173/Kwalifikacje-Zawodowe/ (the Vite `base` path is required)
npm run build
npm run lint
node scripts/check-code-marks.js   # parser asserts plus an unbalanced-backtick check over every question
```

There is no test runner. `check-code-marks.js` is the only automated check, so run it after editing question data. CI does not run it or lint: on pushes to `main` touching `packages/web-site/**`, `.github/workflows/deploy.yml` runs `npm ci` and `npm run build`, then deploys to GitHub Pages.

`npm run lint` currently reports 3 errors in `App.jsx` and `Main.jsx`.

## Architecture

All quiz state is in `src/components/Main.jsx`. An empty `questions` array shows the qualification menu. Choosing a qualification fills it, and an effect then draws 40 random questions into `shuffledQuestions` and rebuilds `answers` (one `{ id, userAnswer }` per drawn question). `Question` and `Answer` only render and call back into `checkAnswer`, which ignores questions already answered.

`src/data/data.js` is the entire question bank, an array of qualifications:

- A qualification is `{ name, fullName, questions, available }`. `available: false` renders a disabled card.
- A question is `{ id, title, answers: [{ id, text }], goodAnswer }`.
- `goodAnswer` is an index into `answers`. `id` is unique only within its qualification.

GSAP plugins are registered once, in `Card.jsx`. `Main.jsx` uses `SplitText` and `useGSAP` without registering them, so it depends on that import.

## Code marks in question text

`title` and answer `text` are plain strings with two Markdown-style marks, parsed by `src/data/splitCode.js` and rendered by `FormattedText`. Nothing else is interpreted: no bold, lists or language tags on fences.

- Single backticks are for names, keywords, tags, attributes, selectors, single calls, short expressions and SQL clauses.
- Fences (written as `` ```\ncode\n``` `` inside the string) are for complete statements, CSS `property: value` declarations and multi-line snippets. In titles, separate a fence from the surrounding text with `\n\n`.

Formatting must not give the answer away. If only the correct option would carry code marks, or only it would lack them, leave all of that question's options unmarked.

## Conventions

UI text and questions are in Polish. Commit messages are in English: a short imperative with a capital first letter, for example ``Update `README.md` ``.
