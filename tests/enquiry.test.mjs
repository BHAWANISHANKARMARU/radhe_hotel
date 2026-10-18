import test from "node:test";
import assert from "node:assert/strict";
import { buildWhatsAppEnquiry, validateEnquiry } from "../src/lib/enquiry.mjs";

test("stay enquiries require both dates and a guest count", () => {
  assert.deepEqual(validateEnquiry("stay", { start: "", end: "", guests: "" }), {
    start: "Choose a check-in date.", end: "Choose a check-out date.", guests: "Select the number of guests."
  });
});

test("stay enquiries reject checkout on or before check-in", () => {
  assert.deepEqual(validateEnquiry("stay", { start: "2026-11-12", end: "2026-11-12", guests: "2" }), {
    end: "Check-out must be after check-in."
  });
});

test("dining enquiries do not require a checkout date", () => {
  assert.deepEqual(validateEnquiry("dining", { start: "2026-11-12", end: "", guests: "4" }), {});
});

test("WhatsApp handoff states the enquiry details without claiming confirmation", () => {
  const url = buildWhatsAppEnquiry("stay", { start: "2026-11-12", end: "2026-11-13", guests: "2", name: "Gaurav" });
  const message = decodeURIComponent(url.split("?text=")[1]);
  assert.match(url, /^https:\/\/wa\.me\/918107487770\?text=/);
  assert.match(message, /room stay/);
  assert.match(message, /Check-in: 2026-11-12/);
  assert.match(message, /check-out: 2026-11-13/);
  assert.match(message, /Guests: 2/);
  assert.match(message, /Name: Gaurav/);
  assert.doesNotMatch(message, /confirmed/i);
});
