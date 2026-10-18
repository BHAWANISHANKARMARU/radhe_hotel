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

test("booking is an honest adaptive tactile enquiry ledger", () => {
  const source = readFileSync(join(root, "src/components/BookingForm.tsx"), "utf8");
  assert.match(source, /bookingLedger/);
  assert.match(source, /ledgerPaper/);
  assert.match(source, /tactileField/);
  assert.match(source, /aria-selected=\{type === item\.value\}/);
  assert.match(source, /Please complete the required details/);
  assert.match(source, /Check-out must be after check-in/);
  assert.match(source, /No booking has been confirmed/);
  assert.match(source, /encodeURIComponent\(message\)/);
  assert.match(source, /Preferred date/);
});

test("homepage composes engraved navigation and distinct physical materials", () => {
  const header = readFileSync(join(root, "src/components/Header.tsx"), "utf8");
  const home = readFileSync(join(root, "src/components/sections/HomeSections.tsx"), "utf8");
  assert.match(header, /engravedNav/);
  assert.match(header, /guestBookNav/);
  assert.match(header, /brassStud/);
  assert.match(home, /heroFolio/);
  assert.match(home, /locationPlate/);
  assert.match(home, /experience-roomFolio/);
  assert.match(home, /experience-menuCover/);
  assert.match(home, /experience-invitation/);
  assert.match(home, /diningMenu/);
  assert.match(home, /eventInvitation/);
});

test("secondary routes reuse the material system and preserve accessible gallery controls", () => {
  const inner = readFileSync(join(root, "src/components/InnerPage.tsx"), "utf8");
  const gallery = readFileSync(join(root, "src/components/gallery/GallerySection.tsx"), "utf8");
  const footer = readFileSync(join(root, "src/components/Footer.tsx"), "utf8");
  const contact = readFileSync(join(root, "src/app/contact/page.tsx"), "utf8");
  assert.match(inner, /offeringFolio/);
  assert.match(inner, /engravedNotes/);
  assert.match(gallery, /albumMount/);
  for (const label of ["Close gallery", "Previous image", "Next image"]) assert.match(gallery, new RegExp(label));
  assert.match(footer, /guestBookFooter/);
  assert.match(contact, /addressPlate/);
  assert.match(contact, /contact\.address/);
  assert.match(contact, /contact\.phone/);
});
