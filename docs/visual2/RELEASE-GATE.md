# Games Night Visual 2.0 — authorised release gate

Owner approval: samples 1–5 and Batches A–E, plus centred logos; explicit merge and deployment authorised 8 Nov 2026.

## Passed pre-release
- GitHub main `index.html` matches supplied baseline blob `ff23ddd9e973816fdadd89bcad04502de8bbde4e` at the time of final preparation.
- 16 catalogue URLs preserved; 74 image assets decode correctly.
- Logo centring PASS on five emulated viewports and 16 featured identities.
- JavaScript syntax and interaction tests PASS.
- Existing Logo #2 and music asset preserved.

## Still required by release tool
- Validate latest main hash again and block on concurrent changes.
- Fetch and embed official TIDEWATER logo, checking git blob SHA.
- Push isolated branch, PR, verify unchanged base before merge.
- Verify Render auto deploy serves the new site and the logo binary.

## Not executed in this environment
- Real-device screenreader, speaker/audio acceptance, end-to-end sessions across all 16 remote games.
- GitHub Actions; Render production smoke until post-merge.

Do not claim production deployed until release-script results and Render show a matching live version.
