# Luxury Rajasthani Skeuomorphic Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Radhe Hotel & Restaurant into a cohesive, tactile luxury hospitality website while preserving its truthful content and WhatsApp enquiry workflow.

**Architecture:** Extend the existing Chakra UI v3 token system with reusable material primitives, then restyle the established feature components and route compositions around those primitives. Behavioral ownership stays in `Header`, `BookingForm`, and `GallerySection`; CSS provides lightweight material rendering and state physics without another UI or animation dependency.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Chakra UI 3.36, Emotion, Lucide React, CSS custom properties, Next Image.

**Spec:** `docs/superpowers/specs/2026-10-18-radhe-skeuomorphic-redesign.md`

## Global Constraints

- Preserve verified contact details from `src/data/site.ts` and the WhatsApp enquiry handoff.
- Do not add rates, availability, testimonials, awards, history, amenities, capacities, menu items, social accounts, or third-party property imagery.
- Use Chakra UI v3 APIs only; do not add another component library or animation dependency.
- Use the approved parchment, leather, brass, walnut, sandstone, ink, and edge colors exactly as centralized tokens.
- Essential content must remain visible without JavaScript animation completion.
- Maintain semantic HTML, keyboard access, visible focus, reduced motion, 44px touch targets, and mobile support down to 320px.

## Review Focus

- A 320px viewport must not introduce horizontal overflow or clipped reservation controls; covered by Task 5 browser checks.
- Empty and chronologically invalid stay dates must show accessible errors and must not open WhatsApp; covered by Task 2 tests.
- Navigation and gallery controls must remain keyboard-operable, including Escape dismissal; covered by Tasks 3 and 4 checks.
- Reduced-motion users must receive stable content without entrance dependencies; covered by Task 1 CSS assertions and Task 5 browser emulation.
- Missing JavaScript or delayed intersection observation must not hide page content; covered by Task 1 test and Task 5 inspection.

---

### Task 1: Material Design System and Primitives

**Files:**
- Modify: `src/theme/system.ts`
- Modify: `src/app/globals.css`
- Create: `src/components/ui/MaterialSurface.tsx`
- Create: `src/components/ui/TactileButton.tsx`
- Test: `tests/material-system.test.mjs`

**Interfaces:**
- Produces: `MaterialSurface({ material, asChild?, className?, children })` with `paper | leather | sandstone | walnut` variants.
- Produces: `TactileButton({ variant, href?, type?, disabled?, loading?, children, ...props })` with `brass | leather | engraved` variants.
- Produces: global `.tactileField`, material, focus, pressed, and reduced-motion recipes consumed by later tasks.

- [ ] **Step 1: Write failing material-system tests** asserting the exact palette tokens, material primitive exports, button variants/states, non-hidden reveal baseline, and reduced-motion rules.
- [ ] **Step 2: Run `node --test tests/material-system.test.mjs`** and confirm failure for missing primitives/tokens.
- [ ] **Step 3: Extend `system.ts`** with approved colors, layered shadow tokens, and restrained radii.
- [ ] **Step 4: Implement `MaterialSurface` and `TactileButton`** with semantic markup, disabled/loading behavior, and stable labels.
- [ ] **Step 5: Replace the foundational CSS variables and action/input recipes** with distinct paper, leather, brass, sandstone, and walnut treatments using a single upper-left light source.
- [ ] **Step 6: Run `node --test tests/material-system.test.mjs && npm run lint`** and confirm pass.
- [ ] **Step 7: Commit** with `git commit -m "feat: establish skeuomorphic material system"`.

### Task 2: Tactile Reservation Ledger

**Files:**
- Modify: `src/components/BookingForm.tsx`
- Modify: `src/app/globals.css`
- Modify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: Task 1 tactile button and field recipes.
- Produces: unchanged `BookingForm({ compact?: boolean })` API with stay, dining, and celebration modes plus `idle | prepared` status.

- [ ] **Step 1: Add failing source tests** for adaptive labels, required-field errors, chronological validation, honest prepared copy, WhatsApp construction, and accessible selected mode state.
- [ ] **Step 2: Run `node --test tests/site.test.mjs`** and confirm the new expectations fail.
- [ ] **Step 3: Refactor `BookingForm`** into a leather ledger with inset paper field bed, tactile tabs, recessed native inputs/select, loading-safe action styling, and existing validation logic.
- [ ] **Step 4: Add responsive booking CSS** ensuring stable mode transitions and 44px controls from 320px upward.
- [ ] **Step 5: Run `npm test && npm run lint`** and confirm pass.
- [ ] **Step 6: Commit** with `git commit -m "feat: craft tactile enquiry ledger"`.

### Task 3: Header, Hero, and Homepage Material Compositions

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/sections/HomeSections.tsx`
- Modify: `src/components/ui/SectionHeading.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: Task 1 material and button primitives; Task 2 booking form.
- Produces: unchanged route targets and exported homepage section component names.

- [ ] **Step 1: Add failing tests** for the engraved navigation, mobile guest-book drawer semantics, hero location plate, and material-specific section hooks.
- [ ] **Step 2: Run `npm test`** and confirm the new expectations fail.
- [ ] **Step 3: Recompose `Header`** as compact parchment signage with tactile booking control and leather mobile drawer while preserving focus restoration and navigation.
- [ ] **Step 4: Recompose hero and introduction** around the exterior photograph, parchment folio, brass location plate, and mounted introduction image.
- [ ] **Step 5: Recompose experiences, stay, dining, celebrations, gallery lead-in, story, and location** so each material has a distinct physical role rather than repeated cards.
- [ ] **Step 6: Implement responsive and interaction CSS** for hover, pressed, focus, compact header, mobile drawer, and reduced motion.
- [ ] **Step 7: Run `npm test && npm run lint`** and confirm pass.
- [ ] **Step 8: Commit** with `git commit -m "feat: redesign skeuomorphic homepage"`.

### Task 4: Secondary Pages, Gallery, and Footer

**Files:**
- Modify: `src/components/InnerPage.tsx`
- Modify: `src/components/gallery/GallerySection.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/book/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/gallery/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: Task 1 material/action primitives and Task 2 booking form.
- Preserves: `/stay`, `/dining`, `/celebrations`, `/gallery`, `/about`, `/contact`, and `/book` routes.
- Produces: accessible album lightbox with existing close/previous/next behavior and a leather directory footer.

- [ ] **Step 1: Add failing tests** for every route, material page hooks, verified contact source, lightbox labels, and absence of fabricated claims.
- [ ] **Step 2: Run `npm test`** and confirm new expectations fail.
- [ ] **Step 3: Recompose shared offering pages** with photography-led, individually accented room, menu, and invitation treatments.
- [ ] **Step 4: Recompose story, booking, and contact pages** using parchment narrative, leather ledger, and engraved address plate patterns.
- [ ] **Step 5: Restyle gallery and lightbox** as a restrained album while preserving native dialog semantics and keyboard behavior.
- [ ] **Step 6: Rebuild footer** as a legible forest-leather hotel directory with brass details and verified links only.
- [ ] **Step 7: Run `npm test && npm run lint`** and confirm pass.
- [ ] **Step 8: Commit** with `git commit -m "feat: complete material page system"`.

### Task 5: Production and Visual Verification

**Files:**
- Modify if defects are found: files owned by Tasks 1–4
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: completed site from Tasks 1–4.
- Produces: a buildable, visually inspected application with no known route, overflow, interaction, or accessibility regressions.

- [ ] **Step 1: Run `npm test`, `npm run lint`, and `npm run build`** and fix only redesign-caused failures until all pass.
- [ ] **Step 2: Start the application with `npm run dev:turbo`** and confirm the server becomes ready.
- [ ] **Step 3: Check all eight public routes** and require HTTP 200.
- [ ] **Step 4: Inspect full-page desktop and 375px/320px mobile renders** for material consistency, crops, loading, overflow, typography, and spacing.
- [ ] **Step 5: Exercise navigation, mobile drawer, all booking modes, empty/invalid/valid enquiry states, WhatsApp handoff, gallery open/previous/next/Escape/close, focus states, and reduced-motion emulation.**
- [ ] **Step 6: Inspect browser console** and correct redesign-caused errors or warnings.
- [ ] **Step 7: Repeat `npm test && npm run lint && npm run build`** and confirm final pass after visual fixes.
- [ ] **Step 8: Commit** with `git commit -m "test: verify skeuomorphic hospitality experience"`.
