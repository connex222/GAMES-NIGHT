# GAMES NIGHT Visual System 2.0 — Local QA

**Date:** 8 November 2026  |  **Build:** user-approved artwork A–E integrated into supplied ZIP.
**Scope:** static portfolio launcher, not the individual games. GitHub and Render untouched.

## Test environment
Chromium headless / Linux; real DOM/CSS/JS loaded through in-memory page with relative resources intercepted from the local folder. The 16 external Render health checks were mocked; sound file bytes were not played; screenshots are local layout evidence, **not live Render evidence**.

## Automated checks
- **PASS:** Node `--check` on active inline JavaScript.
- **PASS:** All 74 artwork files decoded and asset dimensions exist.
- **PASS:** All new CSS `url()` references point to included files.
- **PASS:** All 16 featured background files exist.
- **PASS:** 16 interaction/source-preservation assertions: catalogue objects/URLs, Logo #2, audio URL, keyboard selector, picker, status, switches, volume and reduced-motion support.
- **PASS:** Render at 1920×1080 TV, 1366×768 desktop, 1024×768 tablet, 390×844 phone, 320×700 narrow phone; 16 selector entries in each viewport; no horizontal document overflow, broken loaded image elements or JavaScript page exceptions observed.
- **PASS:** User-approved art batches A–E included in isolated `assets/visual2` directory; original approved logo and fallback WAV retained.

## Pending / NOT RUN
- **NOT RUN:** Real external game URL and availability checks; health traffic mocked and previous no-CORS readiness probe cannot certify playable sessions.
- **NOT RUN:** Live Render source parity or live site screenshots; ZIP may be older than remote `main`.
- **NOT RUN:** Physical TV, tablet and phone tests; scripted browser viewport screenshots only.
- **NOT RUN:** Real audio playback, Creative Claw CDN response, speaker check, mute persistence beyond current page, or autoplay on physical browsers.
- **NOT RUN:** Real game-launch navigation to another service; external links preserved by exact catalogue comparison.
- **NOT RUN:** GitHub CI, Render deployment, production smoke, accessibility with screen readers, human acceptance and commercial licensing review.

## Specific known risks
1. **TIDEWATER external logo:** existing source has a remote logo reference; browser fallback displays its real title if unavailable. Binary not bundled in original ZIP.
2. **IRON CROWN:** source retains its link; do not label offline without current endpoint verification.
3. **Some backdrops:** Approved Batch A images were enlarged reconstructions; assess sharpness on a real TV.
4. **Alternate decorations:** Assets in the approved packs are shipped but not all are active in this slice. Manifest specifies active usage.
5. **No false availability:** screenshots showing “All 16 games responding” used mocked health requests, not genuine network checks.
6. **Older source:** do not push this snapshot to a live main branch without checking newer GitHub commits and reconciling diffs.

## QA files
`checks/browser-results.json`, `checks/functional-results.json`, screenshots under `screenshots/` in the review kit when provided separately.
