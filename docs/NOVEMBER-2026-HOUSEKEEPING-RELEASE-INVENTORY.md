# GAME NIGHT — housekeeping and Alpha release inventory
**Audit date:** 4 November 2026 (UK). **Scope:** GitHub and Render read-only investigation; this document is staged in a documentation PR, not automatically deployed. Distinguish *code presence*, *local automated test results*, and *real physical acceptance*.

## Medium-priority: branch reconciliation
For each named branch below, GitHub `compare_commits(base=main, head=branch)` was executed on 4 November. Status `behind` means **zero branch-only commits** (history included in main); it does not authorise deletion. `diverged` means both histories have unique commits; **do not bulk merge**, as older runtime/artwork and Actions workflows can regress main. `ahead` is intentional staged work, not certified. Classification covers 85 non-main branches: {"behind":21,"diverged":62,"ahead":2}. This is a reviewed named-project branch inventory, not an account-wide exhaustive census.

| Repository | Compare result | Named branches |
|---|---|---|
| STARFALL-LANES | behind | `commanders-academy-visual-pass-20261027`, `phase19-premium-complete-20261025`, `phase20-command-deck`, `phases-8-9-10-deployment`, `review-phase1-repair`, `review-phase4-deploy` |
| STARFALL-LANES | diverged | `fix/academy-audio-resume-20261029`, `fix/academy-original-narration-vAlpha2`, `phase16-release-qa`, `release/starfall-vAlpha-20261027`, `test/starfall-rc10-websocket` |
| CYBER-CYPHER | behind | `art/native-avatares-batches-2-3`, `feature/halo-tutorial-playback-controls`, `fix/atomic-avatar-art-loading`, `qa/live-avatar-browser-layout`, `qa/post-merge-acceptance`, `qa/real-websocket-acceptance`, `qa/stage25-multiplayer-acceptance`, `release/stage24-alpha-rc1`, `security/ws-8-22-1` |
| CYBER-CYPHER | diverged | `art/creative-claw-sample-review`, `docs/acceptance-signoff`, `docs/audio-qa-final-pass`, `docs/halo-voice-repaired-status`, `feature/aaa-art-production-pipeline`, `feature/lobby-music-and-avatar-art-direction`, `feature/phone-visual-foundation`, `feature/tv-title-cinematic-intro`, `fix/audio-narration-truncation`, `fix/final-audio-peaks-and-stings`, `fix/halo-gh-runner-ffmpeg`, `fix/halo-voice-complete-remaster`, `qa/render-production-remote-smoke` |
| NOGGIN | behind | `feature/cinematic-v4-upload`, `fix/cinematic-v4-lobby-flash` |
| NOGGIN | diverged | `feature/cinematic-studio-v3`, `feature/cinematic-v4-approved-integration`, `feature/game-night-cinematic-splash`, `feature/premium-cinematic-ident-v2` |
| Pub-Quiz-Powerhouse | diverged | `editorial/final-corrections-20261029`, `editorial/one-pass-final-qa-20261029`, `editorial/2020-2026-review-coverage-20261029`, `feature/v3.3-premium-audio`, `housekeeping/v4.0.13-release-ci-20261029`, `release/powerhouse-editorial-closeout-20261029` |
| THE-VAULT-JOB | behind | `artpass2/remaining-scene-preparation`, `fix/all-audio-20261102`, `fix/home-menu-vertical-layout`, `fix/victorian-lobby-music-replacement` |
| THE-VAULT-JOB | diverged | `art/reviewed-heist-backplates`, `art/stage14-victorian-scenes`, `audio/daydream-creative-claw-integration`, `feature/approved-aaa-front-screen`, `feature/approved-aaa-game-scenes`, `feature/24-victorian-avatars`, `fix/lobby-black-side-bars`, `fix/lobby-music-start`, `fix/reviewed-painted-scene-cleanup`, `fix/single-scene-background`, `fix/stage9-audio-transition-race`, `fix/stage12-heist-music-mixes`, `fix/stage15-avatar-scene-layout`, `fix/webp-mime-support`, `qa/stage7-visual-regression`, `qa/stage8-acceptance`, `qa/stage10-audio-assets`, `qa/stage17-acceptance-tooling`, `qa/stage17-audit-and-evidence`, `qa/stage18-alpha-gate`, `release/old-silas-stage2`, `release/stage3-music-sfx`, `release/stage4-ui-foundation`, `release/stage5-victorian-scenes`, `release/stage6-responsive-safety`, `release/stage16-aaa-compatible`, `security/update-ws-8-22`, `stage20-production-readiness`, `stage22-alpha-release-audit`, `stage23-alpha-visual-acceptance`, `stage23-final-visual-acceptance` |
| ECKY-THUMP | ahead | `staging/issue-4-durable-recovery` |
| Aether-Deception | diverged | `staging/postgres-durable-recovery` |
| FORGERS-FINGERS | ahead | `security/seat-reconnect-auth-20261104` |
| RAGNAGROK-2 | diverged | `fix/windows-tutorial-qa-crlf-20261104 (already squash-merged as PR #20; retain historical branch)` |
| GAMES-NIGHT | diverged | `housekeeping/alpha-release-gate-20261104 (docs were squash-merged via PR #6; retain historical branch)` |

**Important content-specific decisions:** STARFALL current academy narration logic has a `canplay` retry missing from its old branch; do not restore the old academy. THE VAULT JOB stage23-alpha files were previously blob-matched to current main; its stage23-final alternative differs, so no blanket merge. CYBER CYPHER's old remote smoke workflow would open production WebSocket test rooms and consume Actions minutes, so leave it out. POWERHOUSE's old v4.0.13 CI workflow would spend Actions minutes and the live source is `4.0.11-preview`; do not promote version based solely on old branch names. NOGGIN flash fix is behind current main; no repair merge required. RAGNAGROK PR #20 already merged test-only changes; do not repeat its old branch.

**Branch policy:** keep every branch for now; no force pushes, deletes, archives or renames. A separate approval list and per-file proof are required before pruning. Check historic creative/audio content against main before selective cherry-picking.

## Medium-priority: live release/version record
Versions below are from **current GitHub main `package.json`**; they are **not** claims that each game achieved physical Alpha certification. Render's primary 16 web services have source-matched, nonblank health paths; the static GAMES-NIGHT launcher is separate. Earlier deployment reconciliation showed the primary releases matched main at the time. Since RAGNAGROK's test-only PR #20 was merged, its GitHub main now differs by exactly `test/tutorial.test.js` from its existing live release. No production redeploy is needed for a test-only change.

| Repository | GitHub main package version | Acceptance |
|---|---|---|
| `FORGERS-FINGERS` | `1.0.0` | Physical TV/phone/audio certification not established by this inventory |
| `CYBER-CYPHER` | `1.0.0-alpha` | Physical TV/phone/audio certification not established by this inventory |
| `THE-VAULT-JOB` | `1.0.0` | Physical TV/phone/audio certification not established by this inventory |
| `Aether-Deception` | `3.2.0` | Physical TV/phone/audio certification not established by this inventory |
| `IRON-CROWN` | `2.2.0-alpha.1` | Physical TV/phone/audio certification not established by this inventory |
| `STARFALL-LANES` | `2.4.1-alpha.2` | Physical TV/phone/audio certification not established by this inventory |
| `FIVE-CROWNS` | `0.7.5` | Physical TV/phone/audio certification not established by this inventory |
| `RAGNAGROK-2` | `1.2.0-alpha.1` | Physical TV/phone/audio certification not established by this inventory |
| `TIDEWATER` | `2.5.0` | Physical TV/phone/audio certification not established by this inventory |
| `STACKHOUSE` | `2.15.1-alpha.2` | Physical TV/phone/audio certification not established by this inventory |
| `GILDED-DECK` | `0.1.1-alpha.0` | Physical TV/phone/audio certification not established by this inventory |
| `LAST-CARD` | `2.5.1` | Physical TV/phone/audio certification not established by this inventory |
| `GILDED-FIVE` | `1.2.0` | Physical TV/phone/audio certification not established by this inventory |
| `ECKY-THUMP` | `2.1.0` | Physical TV/phone/audio certification not established by this inventory |
| `NOGGIN` | `3.5.0-alpha.1` | Physical TV/phone/audio certification not established by this inventory |
| `Pub-Quiz-Powerhouse` | `4.0.11-preview` | Physical TV/phone/audio certification not established by this inventory |

**Tag discipline:** this document does not assert tag names or that all versions have Git tags: no tag enumeration action was available in this connector. Do not create/retarget a release tag without exact current SHA and sign-off. Some versions lack an `alpha` suffix; a package version is **not** a release tag.

## Medium-priority: remaining Render health evidence
- All **16 active primary game web services** now have a configured matching health-check path (earlier issue #4 verified 10 user-applied paths; last three were confirmed in settings). No health configuration changes needed.
- Three outstanding independent external GET responses: `https://noggin-0u32.onrender.com/health`, `https://tidewater-gz69.onrender.com/health`, `https://forgers-fingers.onrender.com/health` — see [issue #5](https://github.com/connex222/GAMES-NIGHT/issues/5).
- Direct public HTTP retrieval from this working environment was not available; **do not mark HTTP 200 checked**. A separate Windows read-only checker can report response codes. TIDEWATER should truthfully return HTTP 503 during persistence failure; do not force 200.

## Low-priority: legacy repositories
- [DICE-GAMES](https://github.com/connex222/DICE-GAMES): **public**, `main`, single-branch static phone-game collection (POCKET GAMEBOX). No matching Render service is expected for a static-only GitHub Pages site. Pages publication **not independently confirmed**; do not imply a GitHub Pages URL is functional.
- [Texas-Holdem](https://github.com/connex222/Texas-Holdem): **public**, `main`, version `1.0.0`, older separate poker prototype, not byte-identical to private [GILDED-DECK](https://github.com/connex222/GILDED-DECK) `0.1.1-alpha.0`. No matching Render service in this workspace. **Preserve** both; neither should be deleted or archived merely for a similar name.
- Primary GAMES-NIGHT is a deployed static site; the suspended IRON CROWN preview is intentionally excluded and must stay suspended.

## High-priority: unresolved development and security
1. **FORGERS-FINGERS security:** draft [PR #2](https://github.com/connex222/FORGERS-FINGERS/pull/2) is ahead 12/behind 0 and changes only `server.js`, phone client, test, npm package/lock, security documentation. Current live main's player-ID-only reconnect weakness remains until this fix is merged/deployed. Owner reports successful localhost v4 security suite; CSV/commit details not independently inspected and 3-phone physical drawing/bidding/reconnect/audio acceptance remains outstanding. Do not silently deploy while rooms are active.
2. **ECKY THUMP recovery:** draft [PR #26](https://github.com/connex222/ECKY-THUMP/pull/26) ahead 10/behind 0, adds isolated encrypted PostgreSQL adapter, migration and tests but **is not wired into live engine**. Missing real database integration, `pg` dependency/lock, schema/key rotation, crash/race/security/device acceptance, and privacy/retention policy. Keep draft.
3. **AETHER & DECEPTION recovery:** `staging/postgres-durable-recovery` has diverged (27 ahead/8 behind) and changes server runtime, DB store, package manifest, staging workflow and tests. Its `DATABASE_URL` support and TLS guard exist, but code must be reviewed against current main, actual Neon restart/race/privacy tests run, and production configuration agreed before a selective integration. **Never wholesale-merge diverged staging**.
4. **RAGNAGROK:** local Windows QA v3 owner-reported PASS; PR #20 merged to main; exact logs of successful run not independently supplied. Real device sound/layout/2–8-player experience still pending; Render Free rooms are memory-only on restart.
5. **THE VAULT JOB**, **STARFALL LANES**, **CYBER CYPHER** and other current games: existing exact-source static/partial automated checks are not replacements for live TV/phone, narration and complete-game evidence. Use local test gates with approved Node and clean dependency installs, then real-player acceptance. No production Actions/rooms should be created for CI smoke testing.

## Decision ledger (4 Nov)
- **Done:** source-backed Render path configuration audit; historical branch comparison/classification of the named group; GitHub-main package version inventory; legacy repo identity classification; documented known security/database release blockers; RAGNAGROK Windows test-only regression merged.
- **Evidence pending:** independent HTTP results for three health paths; exact-current full QA for games not separately accepted; physical real-TV/phones/media test sessions; branch-by-branch artistic cherry-pick decisions; release tags.
- **Not authorised/performed:** delete/archive branches or repositories, force push, broad merge, change secrets, deploy/restart game services, mark draft DB/security code released, tag untested builds.

Source of record: [GAME NIGHT Master Alpha board](https://github.com/connex222/GAMES-NIGHT/issues/2). This document deliberately keeps unverified items open.

## Exact live-commit reconciliation, refreshed 4 November 2026
The connected Render deployment history was fetched for **all 16 active game web services**; latest status is **live** in all cases. Each displayed commit SHA was independently compared to current GitHub `main` using the GitHub compare endpoint. **15/16 identical**; the only difference is RAGNAGROK, whose extra commit edits one test file. This is a deploy/repository-consistency audit, **not** gameplay or media certification.

| Game | Render live commit (prefix) | Relative to current GitHub main |
|---|---|---|
| FORGERS-FINGERS | `b309773b` | identical |
| CYBER-CYPHER | `299e6901` | identical |
| THE-VAULT-JOB | `00f1536e` | identical |
| Aether-Deception | `a5badc8a` | identical |
| IRON-CROWN | `9c218f10` | identical |
| STARFALL-LANES | `dc674a66` | identical |
| FIVE-CROWNS | `6d29fd94` | identical |
| RAGNAGROK-2 | `17ba9504` | main +1 test-only commit |
| TIDEWATER | `e26cc4fe` | identical |
| STACKHOUSE | `a77cf022` | identical |
| GILDED-DECK | `a979bc22` | identical |
| LAST-CARD | `ea50927f` | identical |
| GILDED-FIVE | `e303e8e4` | identical |
| ECKY-THUMP | `abcfe360` | identical |
| NOGGIN | `6a4d6891` | identical |
| Pub-Quiz-Powerhouse | `1a133b6e` | identical |

### Additional high-priority security finding
- [AETHER & DECEPTION #2](https://github.com/connex222/Aether-Deception/issues/2) documents two source-verified blockers in **current main's** PostgreSQL adapter: raw JSONB snapshot serialisation includes host/player access tokens (not encrypted at the application layer); expiration is fixed at `createdAt + 12h` even for updated active rooms. Neither implies a confirmed compromise. The diverged older staging branch must not overwrite the newer current main. Require a separately reviewed migration and database-backed tests before claiming safe durable recovery.
- Independent three-game health and multi-game current-main QA Windows package prepared; no successful result has been claimed until the owner runs it and provides logs.
