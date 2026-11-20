# Games Night: transparent branding and local music

- The two site-logo placements now use `assets/games-night-premium-transparent.webp`; the full-resolution transparent PNG is also available in `assets/games-night-premium-transparent.png`.
- The lobby music source now points directly to the already bundled `assets/games-night-showtime.wav` (33.1 seconds; loops), instead of first attempting to stream from Creative Claw.
- The original external Creative Claw MP3 could **not** be downloaded from this execution environment. The bundled WAV may not be the exact same recording as the remote MP3. If the exact track is required, obtain its MP3 from Creative Claw and replace the local file and HTML reference after verifying playback rights.
- Browser autoplay restrictions remain: a player must enable **Gameshow music** to start playback.
- No service URLs, game rules or game-logo assets were changed.
- Check on the actual TV: music playback and mute, logo sizing in header/nav, QR launch links, and the wake-up status panel.
