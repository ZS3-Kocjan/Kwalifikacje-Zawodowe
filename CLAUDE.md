# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Kwalifikacje Zawodowe is a static quiz app for students preparing for the theory part of Polish vocational qualification exams (INF.03, INF.04). A student picks a qualification and answers 40 randomly drawn questions, with immediate right or wrong feedback and a running score. Live at https://zs3-kocjan.github.io/Kwalifikacje-Zawodowe.

The stack is JavaScript (no TypeScript), React 19, Vite 8, Tailwind CSS 4, GSAP 3 and lucide-react. There is no backend, router or state library. Quiz progress lives only in React state, so a reload resets it. Only finished results are kept, in `localStorage`.

## Commands

Run everything from `packages/web-site`. There is no root `package.json` and no workspace setup.

```bash
npm ci                             # install dependencies
npm run dev                        # open http://localhost:5173/Kwalifikacje-Zawodowe/ (the Vite `base` path is required)
npm run build                      # writes dist/ (gitignored)
npm run preview                    # serves the production build
npm run lint
node scripts/check-code-marks.js   # parser asserts plus an unbalanced-backtick check over every question
```

There is no test runner. To add questions, use the `add-questions` skill. To check or improve existing ones, use `verify-questions`. After editing question data, run `check-code-marks.js` and the checker, from the repository root: `node .claude/skills/verify-questions/scripts/check-questions.mjs`.

Deployment happens in CI: on pushes to `main` touching `packages/web-site/**` or the workflow itself, `.github/workflows/deploy.yml` runs `npm ci` and `npm run build`, then publishes `dist` to GitHub Pages. CI runs neither lint nor the check script.

## Repository layout

```
.github/workflows/deploy.yml     GitHub Pages build and deploy
.claude/skills/                  Claude Code skills, with sources pinned in skills-lock.json
README.md                        Polish project page, mostly badges
packages/web-site/               The only package
  index.html                     Vite entry, contains #root
  package.json                   Scripts and deps
  vite.config.js                 React and Tailwind plugins; `base: "/Kwalifikacje-Zawodowe"`
  eslint.config.js               Flat config; unused vars starting with a capital or _ are allowed
  public/cursor*.png             Custom cursor images used by index.css
  public/Inter-*.ttf             Self-hosted Inter variable font (upright only), used by index.css
  scripts/check-code-marks.js    Assert-based check of the parser and all question text
  src/
    main.jsx                     React root, without StrictMode
    App.jsx                      Page shell and dark background: Header, Main, Footer
    index.css                    Tailwind import, Inter @font-face, :root styles, .pointer, .disabled, .text-shadow, .clip-text
    data/data.js                 The entire question bank
    scripts/splitCode.js         Splits a string into plain text and code parts
    scripts/results.js           Saves and loads the last 5 finished results per qualification in localStorage
    components/
      Main.jsx                   All quiz state, and the switch between menu and quiz views
      Card.jsx                   Qualification card in the menu, with its saved results below; registers the GSAP plugins
      Question.jsx               One question; picks each answer's colour classes
      Answer.jsx                 One answer button
      FormattedText.jsx          Renders code marks as <code> elements
      ScoreStatus.jsx            Fixed bottom pill: answered/total and % correct
      Header.jsx                 Fixed top bar with the title and GitHub link
      Footer.jsx                 Credit links
```

There is no Tailwind config file. Tailwind 4 is set up through the Vite plugin and the `@import` in `index.css`. If the repository is renamed, update `base` in `vite.config.js`.

## Architecture

All quiz state is in `Main.jsx`:

- `quiz` is the only state: the 40 drawn questions, each copied with a `userAnswer` that is `null` until answered. While it is empty, the qualification menu shows. Nothing ever empties it again, so the only way back to the menu is a page reload.
- Choosing a qualification draws 40 random questions in the click handler and fills `quiz`.
- `Question` and `Answer` only render and call back into `checkAnswer`, which ignores questions already answered. The answered count and `points` are derived from `quiz` on every render, not stored.
- The number 40 is hard-coded twice: in `shuffle40Questions` and in the "Odpowiedz na 40 pytań:" heading.
- `ScoreStatus` shows the percentage of answered questions, not of all 40. It turns green at 50% or more.
- When the last question is answered, `checkAnswer` calls `saveResult`. The chosen qualification's name is kept in a ref, because it is never rendered.
- `Card` reads its results once, on mount, and shows the average and the last 5 under the card, with the same 50% colours. On md the card list is a grid, and each `Card` is a two-row subgrid, so cards keep equal heights while results sit in the row below.

`Header`, `Card` and the menu heading in `Main` animate with GSAP and `SplitText`. Plugins are registered once, in `Card.jsx`. `Main.jsx` uses `SplitText` and `useGSAP` without registering them, so it depends on that import.

Styling is Tailwind classes inside `className`, on a glassy dark look (`bg-white/10`, `ring`, `rounded-3xl`). Interactive elements use the `.pointer` and `.disabled` classes instead of Tailwind `cursor-*`, because the app has custom cursor images.

## Question data

`src/data/data.js` is an array of qualifications:

- A qualification is `{ name, fullName, questions, available }`. `available: false` renders a disabled card.
- A question is `{ id, title, answers: [{ id, text }], goodAnswer }`.
- `goodAnswer` is an index into `answers`. Every answer's `id` equals its index.
- Question `id`s run sequentially from 0 and are unique only within their qualification.
- Every question has exactly four answers, and `Question` lays them out as a 2×2 grid.

The file is about 3,600 lines, so search it instead of reading it whole. Each question's `title` and `answers` take one source line each. For bulk edits, replace exact string literals rather than regenerating the file, so the diff stays reviewable.

## Code marks in question text

`title` and answer `text` are plain strings with two Markdown-style marks, parsed by `splitCode.js` and rendered by `FormattedText`. Nothing else is interpreted: no bold, lists or language tags on fences. React escapes the text, so a raw `<img>` in a question is safe, and it should still be marked as code.

- Single backticks are for names, keywords, tags, attributes, selectors, single calls, short expressions and SQL clauses.
- Fences are for complete statements, CSS `property: value` declarations and multi-line snippets. In a title, separate a fence from the surrounding text with `\n\n`, for example `` "W CSS właściwość\n\n```\ndisplay: none;\n```\n\npowoduje:" ``. Do not start a title with a fence, or the question number sits alone above it.
- Terms that are not code stay plain, such as `'favicon'` or `'Ctrl+Z'`.

`FormattedText` uses `<code>` with `display: block` rather than `<pre>`, because `h3` and `button` only accept phrasing content.

Formatting must not give the answer away. If only the correct option would carry code marks, or only it would lack them, leave all of that question's options unmarked.

## Conventions

UI text and questions are in Polish. Commit messages are in English: a short imperative with a capital first letter, for example ``Update `README.md` ``. Files in `components/` hold one default-exported function component, with 4-space indentation.
