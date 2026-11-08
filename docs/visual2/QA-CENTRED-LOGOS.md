# Games Night Visual 2.0 — All logos centred

**Scope:** Local-only correction of the visual2 integration build. GitHub and Render not changed.

## Requirements
- All 16 game logos aligned to the centre of the horizontal pick-a-game tiles.
- The logo/title in every larger featured-game cover aligned to the centre of the stage.
- TIDEWATER no longer appears as a blank selection tile when its external image cannot load.

## Verification
- Browser viewports tested: TV (1920×1080), desktop (1366×768), tablet (1024×768), phone (390×844), small phone (320×700).
- **PASS:** 80 of 80 selector tile positions centred (16×5), no missing logo images in mocked-offline test.
- **PASS:** 48 of 48 featured covers centred (16×3).
- **PASS:** TIDEWATER visible in all five viewports with local offline fallback.
- **PASS:** No browser page exceptions in five baseline viewport runs.
- **PASS:** 16 original game URL strings unchanged; original approved Games Night Logo #2 and audio binary unchanged.
- **NOT RUN:** External service live health, physical hardware, sound playback. Network status requests were mocked for browser tests.

## TIDEWATER limitation
`connex222/TIDEWATER` is a private GitHub repository; its approved logo exists at `public/art/logo.webp`, but that binary was not part of the attached GAMES NIGHT ZIP. The existing remote image URL is preserved and will be used if it loads. A locally bundled **temporary SVG fallback** is displayed immediately so the selector and featured panel are never blank; it is explicitly **not** the original approved image. Replace with the approved logo binary once available in the local assets.

## Updated files
- `index.html` — prefer original TIDEWATER logo where accessible, with visible fallback; avoid empty selector tiles.
- `assets/visual2/visual2.css` — centre game logos on all selectors and featured stages.
- `assets/visual2/tidewater-logo-fallback.svg` — temporary local availability fallback.
- `docs/visual2/LOGO-CENTRING-REVISION.md` and this QA document.

**Safe release position:** Preview for visual approval only. Do not merge or deploy before the real TIDEWATER logo is bundled and live/device checks complete.
