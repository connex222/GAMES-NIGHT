# CLAUDE.md - Games Night

Instructions for AI assistants working in this repository.

## What this is

Games Night is the launcher page for Shaun's TV + phone party games. The host opens it on the TV, picks a game and is taken straight to that game's live address. It is a single `index.html` with artwork in `assets/`.

- Live site: https://games-night-wfmz.onrender.com
- Hosting: Render static site, publish path `.`, auto-deploys from `main`
- Visual design records: `docs/visual2/`

## How to change the game list

Each game card links to that game's Render address. When adding, removing or renaming a game:

1. Change only the card in `index.html`.
2. Check the link opens the game's TV screen (some games need a path, e.g. `/tv/` or `/tv.html`).
3. Keep the card artwork in `assets/` and reference it with a relative path.

## Working with Shaun (the owner)

- Shaun is not a programmer. Explain every step in plain English, in order, and assume no prior knowledge.
- Give the complete `index.html`, never partial snippets.
- Use UK English.
- Never delete files to tidy up; move old notes into `docs/`.
- Never force-push, rewrite history or rename the repository.

## Design rules

- Must look premium on a large TV and be readable from a sofa.
- Must work with a TV remote or mouse; every card needs a visible focus state.
- The page is static: no server code and no build step.
