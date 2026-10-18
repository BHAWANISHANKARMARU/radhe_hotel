import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("dev:turbo starts Next with Turbopack on Node 22", () => {
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.match(pkg.scripts["dev:turbo"], /node@22/);
  assert.match(pkg.scripts["dev:turbo"], /next dev --turbopack/);
});

test("default development and production builds use Chakra-compatible webpack", () => {
  const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.match(pkg.scripts.dev, /next dev --webpack/);
  assert.match(pkg.scripts.build, /next build --webpack/);
});
