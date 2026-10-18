# Radhe Hotel & Restaurant Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished multi-page hotel, restaurant and celebrations website that converts visitors into enquiries.

**Architecture:** A Next.js App Router project uses shared shell components, route-specific content blocks and one reusable enquiry form. Static business data keeps copy consistent while CSS provides the visual and motion system.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Modules/global CSS, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-17-radhe-hotel-design.md`

## Global Constraints

- Preserve the supplied Radhe logo and address/phone information.
- Use only locally stored original generated imagery.
- Respect reduced-motion preferences and keyboard navigation.
- Forms are enquiries, not guaranteed bookings.

## Review Focus

- Mobile navigation must expose every route.
- Empty booking fields must not produce confirmation.
- Phone and WhatsApp actions must use valid URI schemes.
- Decorative motion must disable under reduced motion.
- All routes must build without client/server boundary errors.

---

### Task 1: Project shell and content model

**Files:** Create `src/data/site.ts`, `src/components/Header.tsx`, `src/components/Footer.tsx`; modify `src/app/layout.tsx`.

- [ ] Write a failing test for route labels and contact URI values.
- [ ] Run the test and confirm missing module failure.
- [ ] Implement the content model and responsive shell.
- [ ] Run the test and confirm it passes.

### Task 2: Functional enquiry flow

**Files:** Create `src/components/BookingForm.tsx`, `src/lib/booking.ts`, `tests/booking.test.mjs`.

- [ ] Write failing tests for required fields and successful summaries.
- [ ] Run the tests and confirm missing implementation failure.
- [ ] Implement validation, tabs and confirmation UI.
- [ ] Run the tests and confirm they pass.

### Task 3: Pages and visual system

**Files:** Create all route pages and shared visual components; modify `src/app/globals.css`.

- [ ] Write a failing source-level smoke test for required routes and landmarks.
- [ ] Run the test and confirm the pages are absent.
- [ ] Implement home, stay, dining, celebrations, gallery, about, contact and book pages.
- [ ] Run tests and build.

### Task 4: Browser QA

**Files:** Modify responsive styles as observed.

- [ ] Start the production-compatible dev server.
- [ ] Capture desktop and mobile screenshots.
- [ ] Fix overflow, hierarchy, interaction or contrast defects.
- [ ] Re-run tests and production build.
