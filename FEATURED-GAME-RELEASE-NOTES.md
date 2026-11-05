# Games Night — Featured Game Layout (5 November 2026)

## Display
The cramped four-by-four grid has been replaced with one full-sized featured game card. All sixteen game names appear in a horizontally scrollable selector above it, with left/right arrow buttons. Select a name to preview that game without navigating away; click its large tile to open the actual game.

The Pick a Game control animates across the selectors and reveals the winning game as the featured card. Game selection supports keyboard left/right/home/end, and the main card remains keyboard accessible.

The site uses the existing game logos and descriptions. The selected card shows the full description; no truncation.

## Music
AAA gameshow instrumental generated with Creative Claw / Lyria 3.5 on 5 November 2026 (16 credits). Track served via a permanent Creative Claw CDN MP3 URL; the previous generated WAV under assets/ is the playback fallback if the CDN fails. The user enables music by ticking the Gameshow music control. A volume slider adjusts music independently of the existing sound effects.

## Deployment
Render static service GAMES-NIGHT automatically deploys on main. Game launch URLs are unchanged.
## Validation
Static script syntax checked; all sixteen game records retained. Browser layout and live music playback still require device testing.