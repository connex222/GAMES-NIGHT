# Collection fullscreen placement standard — 15 November 2026

## Scope
Review branch `improvement/fullscreen-dock-catalogue-20261115`. This is a presentation-only improvement. It does not change game sessions, scores, QR codes, room recovery, avatars, music, or game rules. MARBLE RUSH is intentionally excluded from the Games Night catalogue while unfinished.

## Behaviour required
1. Use the existing user-gesture fullscreen / exit fullscreen behaviour. Browsers may refuse fullscreen at initial load, so do not promise forced fullscreen or add a splash screen.
2. Keep the control at least 12 CSS pixels from safe viewport edges.
3. Avoid covering **all** visible interactive controls *and* meaningful text/status/image regions, not just other buttons.
4. Try the normal labelled button first; when space is tight, use a minimum 44×44 icon-only button with clear accessibility label and tooltip.
5. If no safe floating position exists, dock in document flow inside an existing header/control row. For full-screen layouts without a header, provide a reserved in-flow strip rather than hiding the control.
6. Re-evaluate after resize, scroll, fullscreen transitions and changes to the visible game screen.
7. Retain keyboard focus indicator and `aria-pressed`, `aria-label`, and `type="button"`. Never reload the game or change its state when toggling.
8. Game-specific styling should use `--collection-fullscreen-bg`, `--collection-fullscreen-color` and `--collection-fullscreen-border` without replacing the underlying placement logic.

## Acceptance (not yet executed on physical devices)
Test 320×640, 390×844, 430×932, 844×390, 768×1024, 1180×820, 1366×768, 1440×900, 1280×720, 1920×1080, and 3840×2160, plus 200% zoom and reduced motion. Run across welcome, lobby/QR, tutorial, gameplay, scoring, results and pause/menu screens when applicable. Every state must show or provide access to the control and avoid blocked buttons, cropped text, lost keyboard focus and gameplay regressions. Verify on Safari iPhone/iPad, Chrome Android, Chrome/Edge desktop and TV browser. Check real full-screen entry and exit, including Escape and browser refusal.

## QA gate
The shared code has been inspected statically but **full browser and physical-device QA have not been run** in this change. Do not label it AAA-accepted or merge across all games solely because the source file exists. Confirm each game's own fullscreen implementation first to avoid duplicate controls. Prefer short-lived per-repository branches and review/merge only after its layouts and gameplay pass.

## Catalogue corrections
Corrected NOGGIN (28 spaces and 7 libraries), STACKHOUSE (2–6-player multiplayer), AETHER & DECEPTION (5–10 players), FORGER'S FINGER (drawing/auction, 3–8 players), CYBER CYPHER (Zero Day) and ECKY THUMP (Social Club and the five authentic modes). MARBLE RUSH stays unpublished in Games Night until its rebuild passes acceptance.
