import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const read = path => readFileSync(new URL(path, `file://${root}/`), "utf8");

test("the Chakra system defines the contemporary Radhe palette and typography", () => {
  const theme = read("src/theme/system.ts");
  for (const token of ["#123B32", "#FAF9F5", "#1E2723", "#65716B", "#E6E5DF"]) assert.match(theme, new RegExp(token));
  assert.match(theme, /var\(--font-manrope\)/);
  assert.match(theme, /var\(--font-inter\)/);
});

test("the rejected material vocabulary is absent from the active design system", () => {
  const css = read("src/app/globals.css");
  for (const rejected of ["parchment", "leather", "walnut", "tactile-brass", "material-paper"]) assert.doesNotMatch(css, new RegExp(rejected, "i"));
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
