// Run with: node --test tests/wake-services.test.mjs (Node 20+, no packages)
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const inline = html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(inline, "index.html has its inline game script");
const script = inline[1];
const wakeArray = script.match(/const WAKE_SERVICES = (\[[\s\S]*?\n\]);/);
assert.ok(wakeArray, "wake targets must remain in one top-of-script array");
const services = vm.runInNewContext(wakeArray[1]);

test("the complete game script parses without syntax errors", () => {
  assert.doesNotThrow(() => new vm.Script(script));
});
test("all 21 wake endpoint URLs are unique", () => {
  const expected = [
    "https://dice-games-jx57.onrender.com/",
    "https://pocket-gamebox-multiplayer.onrender.com/health",
    "https://smart-alec-w100.onrender.com/health",
    "https://oche-master.onrender.com/",
    "https://marble-rush.onrender.com/",
    "https://forgers-fingers-1.onrender.com/",
    "https://cyber-cypher-j2ry.onrender.com/healthz",
    "https://the-vault-job.onrender.com/healthz",
    "https://aether-deception.onrender.com/health",
    "https://iron-crown-main.onrender.com/health",
    "https://starfall-lanes-1.onrender.com/health",
    "https://five-crowns-7225.onrender.com/healthz",
    "https://ragnagrok-2.onrender.com/healthz",
    "https://tidewater-gz69.onrender.com/health",
    "https://stackhouse-m50w.onrender.com/health",
    "https://gilded-deck.onrender.com/health",
    "https://last-card-kdjt.onrender.com/healthz",
    "https://gilded-five-phone.onrender.com/health",
    "https://ecky-thump.onrender.com/api/health",
    "https://noggin-0u32.onrender.com/health",
    "https://pub-quiz-powerhouse.onrender.com/healthz"
  ];
  assert.equal(services.length, 21);
  assert.deepEqual(Array.from(services, (s) => s.url), expected);
  assert.equal(new Set(services.map((s) => s.style).filter(Boolean)).size, 21);
  const catalogueArray = script.match(/const GAMES = (\[[\s\S]*?\n\]);/);
  assert.ok(catalogueArray, "launcher catalogue is present");
  const catalogue = vm.runInNewContext(catalogueArray[1]);
  assert.deepEqual(
    Array.from(services, (service) => service.style).filter(style => style !== "pocket-multiplayer").sort(),
    Array.from(catalogue, (game) => game.style).sort(),
    "all 20 catalogue tiles must have a wake-up service"
  );
  assert.equal(new Set(services.map((s) => s.url)).size, 21);
});
test("wake requests are concurrent, opaque, abort after 90 seconds and retry individually", () => {
  assert.match(script, /const WAKE_TIMEOUT_MS = 90 \* 1000/);
  assert.match(script, /const requests = services\.map\(\(service\) => wakeService\(service\)\)/);
  assert.match(script, /mode: "no-cors", cache: "no-store", signal: controller\.signal/);
  assert.match(script, /setTimeout\(\(\) => controller\.abort\(\), WAKE_TIMEOUT_MS\)/);
  assert.match(script, /retry\.addEventListener\("click", \(\) => retryService\(service\)\)/);
  assert.doesNotMatch(script, /\/\* ---------- Start ---------- \*\/\s*wakeAll\(/);
});
test("count, elapsed, four text statuses, accessible buttons and panel exist", () => {
  assert.match(html, /id="wakeAll" type="button">Wake all games</);
  assert.match(html, /id="wakeElapsed"/);
  assert.match(html, /id="wakeList"/);
  assert.match(html, /id="summary" role="status" aria-live="polite"/);
  for (const status of ["Not checked", "Waking…", "Responded", "Failed"]) assert.ok(script.includes(status));
  assert.match(html, /min-height:44px; min-width:72px/);
});
