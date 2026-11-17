# Games Night — Render catalogue reconciliation (17 November 2026)

## Sources inspected
- Supplied `GAMES-NIGHT-main(3).zip`, matching the current GitHub `main` index.html at blob `e5ff0f5e0380b7d474ea9a81265b0b4ec7dd9e2a`.
- Render workspace **My Workspace**, service inventory and latest deploy status.
- The SMART-ALEC and OCHE-MASTER GitHub repositories, including their official logo and stage artwork.

## Changes
- Added **Smart Alec**: `https://smart-alec.onrender.com/tv/`; original `public/art/logo.webp` and `public/art/title-stage.webp`.
- Added **OCHE**: `https://oche-master.onrender.com/tv`; original `public/assets/img/logo.png` and `public/assets/img/background.jpg`.
- Updated the collection count from 16 to **18**; preserved the original 16 game entries, their exact links, layouts and approved artwork.
- All four newly required artwork files are copied into Games Night itself so the collection does not depend on loading images from sleeping game servers.
- Added styles and proper cover-file handling for both new games.
- **Marble Rush deliberately excluded**, following the owner's instruction not to list it while unfinished.
- Suspended development/staging Render services deliberately excluded.

## Link reconciliation
The exact 16 existing game URLs were matched against the 16 currently deployed public Render service URLs. Every matching service's latest Render deploy status was `live` at inspection. Smart Alec and OCHE were also `live`. New entry routes were verified against the applications' server routing code.

**Verification limit:** This environment could not perform direct external browser/HTTP GET tests of the `.onrender.com` sites (network access blocked). A `live` deployment and matching launch URL do not prove that every end-to-end game session or browser launch succeeds. Test each TV launch and phone QR join on real devices for full acceptance.
