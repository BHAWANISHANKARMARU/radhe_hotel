import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const read = path => readFileSync(join(root, path), "utf8");

test("all public hospitality routes remain available", () => {
  for (const route of ["stay", "dining", "celebrations", "gallery", "about", "contact", "book"]) assert.equal(existsSync(join(root, "src/app", route, "page.tsx")), true, `${route} route missing`);
});

test("homepage keeps the approved primary message and journeys", () => {
  const home = read("src/components/sections/HomeSections.tsx");
  assert.match(home, /Your journey deserves[\s\S]*beautiful pause/i);
  for (const copy of ["Thoughtful stays", "pure vegetarian dining", "Book a stay", "Explore dining", "Plan a celebration"]) assert.match(home, new RegExp(copy, "i"));
});

test("shared shell exposes active navigation and direct contact actions", () => {
  const header = read("src/components/Header.tsx");
  const data = read("src/data/site.ts");
  assert.match(header, /aria-current/);
  assert.match(header, /aria-expanded/);
  assert.match(header, /Escape/);
  assert.match(data, /tel:\+918107487770/);
  assert.match(data, /wa\.me\/918107487770/);
});

test("booking UI is explicit about WhatsApp handoff and confirmation", () => {
  const booking = read("src/components/BookingForm.tsx");
  assert.match(booking, /validateEnquiry/);
  assert.match(booking, /buildWhatsAppEnquiry/);
  assert.match(booking, /does not check live availability/);
  assert.match(booking, /no booking or payment has been completed/i);
  assert.match(booking, /aria-invalid/);
});

test("gallery dialog retains keyboard and explicit navigation controls", () => {
  const gallery = read("src/components/gallery/GallerySection.tsx");
  for (const label of ["Close gallery", "Previous image", "Next image"]) assert.match(gallery, new RegExp(label));
  assert.match(gallery, /onCancel/);
});
