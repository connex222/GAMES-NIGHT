import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {runInNewContext} from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const start = html.indexOf('const GAMES = [');
const end = html.indexOf('\n];', start);
assert.ok(start >= 0 && end > start, 'Games Night catalogue must exist');
const games = JSON.parse(JSON.stringify(runInNewContext(html.slice(start, end + 3) + '\nGAMES;')));

test('official catalogue has alphabetically ordered, unique playable titles', () => {
  assert.ok(games.length >= 20, 'do not silently lose previously published games');
  const names = games.map(g => g.name);
  assert.deepEqual(names, [...names].sort(new Intl.Collator('en-GB', {sensitivity: 'base'}).compare));
  assert.equal(new Set(names).size, games.length, 'no duplicate names');
  assert.equal(new Set(games.map(g => g.url)).size, games.length, 'no duplicate destinations');
  for (const g of games) {
    assert.match(g.url, /^https:\/\//, g.name + ' has a secure destination');
    assert.ok(g.tagline?.trim() && g.desc?.trim() && g.play?.trim(), g.name + ' has playable details');
  }
  assert.ok(html.includes(`${games.length} games in the collection`), 'collection total reflects entries');
  assert.ok(html.includes(`Choose from all ${games.length} games`), 'accessible chooser total reflects entries');
});

test('official Render destinations and approved logo mirrors are present', () => {
  const find = name => games.find(g => g.name === name);
  assert.equal(find('Smart Alec')?.url, 'https://smart-alec-w100.onrender.com/tv/');
  assert.equal(find('Marble Rush')?.url, 'https://marble-rush.onrender.com/tv.html');
  assert.equal(find('Pocket Gamebox')?.url, 'https://dice-games-jx57.onrender.com');
  assert.ok(existsSync(join(root, 'assets/marble-rush-logo.webp')), 'approved Marble Rush logo included');
  assert.ok(existsSync(join(root, 'assets/pocket-gamebox-logo.svg')), 'approved Pocket Gamebox logo included');
  assert.ok(html.includes('marble: "assets/marble-rush-logo.webp"'));
  assert.ok(html.includes('pocket: "assets/pocket-gamebox-logo.svg"'));
});
