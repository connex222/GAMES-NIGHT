# GAME NIGHT — Alpha release and branch consolidation gate

**Maintained:** 4 November 2026. **Scope:** code repositories, not proof of running deployments.  
**Tracking:** [Master Alpha consolidation issue #2](https://github.com/connex222/GAMES-NIGHT/issues/2).

## Golden rule

`main` is the current release candidate unless that game's recorded release procedure states otherwise. A branch with commits ahead of main is **not proof of missing work**: compare file contents and behaviour. Never auto-merge a diverged branch or mark a game Alpha solely because its title, README, GitHub status, or Render service says Alpha/Live.

## Safe branch classification

| Class | Evidence | Action |
| --- | --- | --- |
| Incorporated | The branch's relevant files match current main, even if commit history diverged | Do not merge; record equivalent paths. Retain branch until explicit cleanup review. |
| Historical | Branch changes superseded artwork, tutorials, narration, or earlier QA | Do not merge; close obsolete open PR with explanation; preserve branch. |
| Potential fix | Meaningful code or assets differ and appear absent from main | Review individual diff, dependency and game behaviour; port on a fresh branch from main with regression tests. |
| Unfinished | Draft PR, missing media, database schema, migrations, recovery or security tests | Keep unmerged; record blockers and required tests. |
| Ready | Scoped change, verified tests, no unexpected assets, successful acceptance | Merge using expected head SHA; verify main and production independently. |

## Mandatory Alpha evidence for each game

- [ ] Exact `main` commit SHA and dependency lockfile recorded; fresh install succeeds.
- [ ] Local automated tests and server startup pass; any failures investigated.
- [ ] Current approved artwork, avatars, logo, effects and voice media exist and render; don't silently replace assets.
- [ ] TV + two real phones join a room, play an entire game, reconnect, end and replay. Test bots only as a supplement.
- [ ] Four-letter room code, QR scan, lobby and privacy boundaries verified where applicable.
- [ ] PC, TV, tablet and phone inspected for clipping, offscreen buttons, avatar sizing and readability.
- [ ] Narration doesn't cut off; mute and music/voice settings survive rounds and navigation.
- [ ] Render build/start/health configuration and secret handling checked; note any in-memory room loss on restart.
- [ ] Review rollback plan and confirm no active party session during a server deployment.
- [ ] Real-device tester signs off; only then apply the version tag/Alpha claim.

## Local-first validation

Use each repository's **actual** `package.json` scripts; do not assume all games have the same commands. Typical Node steps (where scripts exist):

```powershell
git clone https://github.com/connex222/REPOSITORY-NAME.git
cd REPOSITORY-NAME
npm ci
npm test
```

Check `npm run` for a game-specific smoke, build or QA script. Record its exit code and actual output. If GitHub Actions minutes are limited, use local tests rather than installing a new auto-triggered workflow. Do not test against production rooms without a documented isolated test-room procedure.

## Specific branch findings (4 November 2026)

- **THE VAULT JOB:** `stage23-alpha-visual-acceptance` Stage 23 runner, QA script, package and sign-off are byte-identical to main. Competing `stage23-final-visual-acceptance` scripts differ; do not overwrite main. PRs #31/#34 closed as superseded, not merged. Real device/Render health checks remain.
- **NOGGIN:** Current main already has V4 cinematic runtime and early-load integration; older V3/V4 draft PRs #3/#4 closed without merging. Preserve V4 flash prevention.
- **STARFALL LANES:** `fix/academy-audio-resume-20261029` academy HTML and regression test are byte-identical to main. The current academy HTML additionally contains a `canplay` retry listener absent from `fix/academy-original-narration-vAlpha2`. Avoid audio regression.
- **CYBER CYPHER:** Historical audio-fix branches diverge from main; current installer and TV runtime differ. Check approved 5×5 board, current art and HALO narration before selective changes. The historical `qa/render-production-remote-smoke` workflow would create a live service test room if run, and should not be made routine.
- **PUB QUIZ POWERHOUSE:** Main reports `4.0.11-preview` while a historical housekeeping branch reports `4.0.13`; do not promote solely to change a version string. The proposed `regression.yml` is absent from main and would run GitHub Actions on push/PR; decide explicitly whether CI minutes should be consumed. Editorial audit records are present on main; avoid changing approved quiz state.
- **ECKY THUMP:** Draft PR #26 PostgreSQL recovery foundation remains intentionally unmerged; not integrated with live rooms.
- **AETHER & DECEPTION:** Separate diverged PostgreSQL durability branch requires crash, migration and security testing.

## Protected operations

No force push, blanket branch deletion, repository archiving, replacing the default branch or changing Render service settings as an incidental housekeeping action. Keep a recoverable commit reference for every historical branch. If production deploys automatically from main, merging is also a deployment decision; check active sessions first.

## Release record template

```text
GAME:
REPOSITORY:
MAIN COMMIT:
ALPHA VERSION:
LOCAL TEST COMMANDS / RESULTS:
REAL TV / TWO PHONE / RECONNECT / REPLAY RESULTS:
ASSET / AUDIO / RESPONSIVE RESULTS:
RENDER URL / HEALTH RESULT:
REMAINING BLOCKERS:
TESTED BY / DATE:
DECISION: ALPHA CERTIFIED / ALPHA CANDIDATE / BLOCKED
```

This document is a control checklist; it does **not** assert that every game has passed these tests.
