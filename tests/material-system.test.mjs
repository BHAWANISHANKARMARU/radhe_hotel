import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = path => readFileSync(join(root, path), "utf8");

test("theme defines the approved physical-material palette and shadows", () => {
  const theme = read("src/theme/system.ts");
  for (const color of ["#F3EBDD", "#FBF7ED", "#E6DAC3", "#244334", "#172B22", "#45634D", "#B3975F", "#D7BF87", "#796039", "#5A3A28", "#352319", "#282820", "#625D51", "#C7B99E", "#A39273"]) assert.match(theme, new RegExp(color));
  assert.match(theme, /ambient/);
  assert.match(theme, /pressed/);
  assert.match(theme, /recessed/);
});

test("material primitives expose explicit surfaces and tactile states", () => {
  assert.equal(existsSync(join(root, "src/components/ui/MaterialSurface.tsx")), true);
  assert.equal(existsSync(join(root, "src/components/ui/TactileButton.tsx")), true);
  const surface = read("src/components/ui/MaterialSurface.tsx");
  const button = read("src/components/ui/TactileButton.tsx");
  for (const material of ["paper", "leather", "sandstone", "walnut"]) assert.match(surface, new RegExp(material));
  for (const variant of ["brass", "leather", "engraved"]) assert.match(button, new RegExp(variant));
  assert.match(button, /aria-busy/);
  assert.match(button, /disabled/);
});

test("global material recipes keep content visible and respect reduced motion", () => {
  const css = read("src/app/globals.css");
  for (const selector of ["material-paper", "material-leather", "material-sandstone", "material-walnut", "tactileButton", "tactileField"]) assert.match(css, new RegExp(selector));
  assert.match(css, /\.reveal[^}]*opacity:\s*1/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
