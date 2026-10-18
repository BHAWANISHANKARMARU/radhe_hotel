import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

test("all hospitality routes exist", () => {
  for (const route of ["stay", "dining", "celebrations", "gallery", "about", "contact", "book"]) {
    assert.equal(existsSync(join(root, "src/app", route, "page.tsx")), true, `${route} route missing`);
  }
});

test("home exposes the three practical guest journeys", () => {
  const source = readFileSync(join(root, "src/components/sections/HomeSections.tsx"), "utf8");
  assert.match(source, /Book a stay/i);
  assert.match(source, /Explore dining/i);
  assert.match(source, /Plan a celebration/i);
  assert.match(source, /Rooms & stays/i);
});

test("shared shell includes accessible navigation and direct contact actions", () => {
  const header = readFileSync(join(root, "src/components/Header.tsx"), "utf8");
  const data = readFileSync(join(root, "src/data/site.ts"), "utf8");
  assert.match(header, /aria-label=\{open \? "Close navigation" : "Open navigation"\}/);
  assert.match(data, /tel:\+918107487770/);
  assert.match(data, /wa\.me\/918107487770/);
});

test("Chakra UI provider wraps the application", () => {
  const layout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  const provider = readFileSync(join(root, "src/components/ui/provider.tsx"), "utf8");
  assert.match(layout, /<Provider>/);
  assert.match(provider, /ChakraProvider/);
});
