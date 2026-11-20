import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "index.html"), "utf8");
test("brand logo is a bundled transparent asset", () => {
  const logo = "assets/games-night-premium-transparent.webp";
  assert.equal(html.split(logo).length-1, 2);
  assert.ok(existsSync(join(root,logo)));
  assert.ok(existsSync(join(root,"assets/games-night-premium-transparent.png")));
});
test("lobby music is bundled and does not request Creative Claw at runtime", () => {
  assert.match(html, /<audio id="showMusic" src="assets\/games-night-showtime\.wav"/);
  assert.ok(existsSync(join(root,"assets/games-night-showtime.wav")));
  assert.doesNotMatch(html, /cdn\.creativeclaw\.co/i);
});
