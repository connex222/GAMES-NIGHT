# Games Night

The launcher for Shaun's TV + phone party games. Open it on the TV, pick a game, and everyone joins on their phones.

**Live site:** https://games-night-wfmz.onrender.com

## How to use it on a games night

1. About ten minutes before people arrive, open the live site on the TV.
2. Press **Wake all games** to wake the 20 Render services at once; the counter shows how many have responded, the timer shows elapsed time, and the status dots show each result. Open **All 20 game servers** to see individual statuses and tap **Retry** beside any failure. Optionally tick **Keep games awake** to refresh them every ten minutes while the launcher remains open. A green status means an opaque `no-cors` fetch completed, not that the game passed a full health check; individual requests time out after 90 seconds.
3. Pick a game on the TV. Players scan the QR code or type the room code on their phones.

## How it is hosted

- Render static site, publish path `.`
- Updates automatically when `main` changes on GitHub
- Everything is in `index.html`, with artwork in `assets/`

## Records

Design and QA records are in `docs/`.

## For developers and AI assistants

See `CLAUDE.md`, including how to add or remove a game.
