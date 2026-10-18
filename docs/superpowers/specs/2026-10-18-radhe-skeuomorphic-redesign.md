# Radhe Hotel & Restaurant — Luxury Rajasthani Skeuomorphic Redesign

## Objective

Transform the existing editorial Radhe website into a cohesive, tactile hospitality experience inspired by a luxury Rajasthani concierge desk. Preserve all verified business information, routes, navigation, and the honest WhatsApp enquiry workflow. The result must use physical-material logic throughout without becoming ornamental, cartoonish, or difficult to use.

## Creative Direction

The website uses a restrained material hierarchy rather than applying every material everywhere:

- Parchment is the primary reading surface.
- Forest leather contains navigation, reservation, and directory experiences.
- Antique brass identifies primary actions, labels, dividers, and hardware.
- Sandstone structures architectural sections and engraved framing.
- Walnut appears sparingly in the dining/menu experience.
- Photography remains visually dominant in hospitality sections.

Lighting is consistently oriented from the upper left. Raised, recessed, pressed, focused, and disabled states share centralized shadow and edge tokens.

## Design System

Chakra UI v3 remains the component foundation. `src/theme/system.ts` will define semantic color, typography, radius, and shadow tokens. `globals.css` will define lightweight material recipes using layered gradients, inset highlights, subtle CSS grain, engraved borders, and reusable classes.

Core colors follow the approved palette: parchment `#F3EBDD`, light paper `#FBF7ED`, aged paper `#E6DAC3`, forest leather `#244334`, dark leather `#172B22`, green highlight `#45634D`, brass `#B3975F`, light brass `#D7BF87`, deep brass `#796039`, walnut `#5A3A28`, dark walnut `#352319`, deep ink `#282820`, secondary ink `#625D51`, warm edge `#C7B99E`, and engraved edge `#A39273`.

Typography retains the existing Cormorant Garamond and Manrope pairing. Display type is reserved for expressive hospitality headlines; controls and reading text use Manrope.

## Component Architecture

Introduce a small material UI layer with purposeful components:

- `MaterialSurface` for paper, leather, sandstone, and walnut surface semantics.
- `TactileButton` for brass, leather, and engraved action variants.
- `TactileField` styling shared by native input and select controls.
- Existing `SectionHeading` and `Reveal` remain, adapted to the new visual language.

Existing feature components remain responsible for behavior:

- `Header` owns responsive navigation and focus behavior.
- `BookingForm` owns enquiry modes, validation, and WhatsApp handoff.
- `GallerySection` owns lightbox state and keyboard controls.
- `HomeSections`, `InnerPage`, and page files own compositions and factual content.

No new component library or animation dependency is required.

## Page Composition

### Header

A compact parchment fascia uses engraved navigation labels, brass separators, and a tactile booking button. Scrolling compacts the surface. Mobile navigation opens as a forest-leather guest book with accessible controls and unchanged route destinations.

### Hero

The existing Radhe exterior image remains dominant. A layered parchment folio contains the headline and supporting copy, accompanied by a small engraved brass location plate. Actions use brass and parchment tactile treatments without obscuring the architecture.

### Booking

The booking panel becomes a leather reservation ledger with an inset paper form surface. Mode selectors visibly depress when active. Inputs use recessed wells with readable labels and visible focus/error states. Stay, dining, and celebration fields remain adaptive. Submission continues to prepare a WhatsApp message; no availability or confirmation is fabricated.

### Homepage Sections

- Introduction: editorial parchment with brass rule and restrained photographic mount.
- Experiences: three materially distinct compositions—room folio, menu cover, invitation—rather than identical cards.
- Stay: large room photograph with brass mounting edge and an inset paper information panel.
- Dining: walnut/leather menu composition with vegetarian dining photography.
- Celebrations: embossed invitation panel over atmospheric photography.
- Gallery: art-directed album grid with restrained photo mounts and existing accessible dialog.
- Story: long-form paper layout with an embossed quotation treatment.
- Location: engraved address plate and tactile contact actions.
- Footer: dark forest leather directory with brass typography and verified links.

### Secondary Pages

Stay, dining, celebrations, gallery, story, contact, and booking pages reuse the same material hierarchy, action states, and truthful content. Their layouts remain individually composed rather than becoming copies of the homepage sections.

## Interaction and Motion

Hero imagery receives one restrained reveal. Controls respond with quick highlight, 1–2px lift, and pressed inset states. Booking modes transition without layout jumps. Mobile navigation and gallery use short, functional transitions. Reduced-motion users receive immediate state changes. Essential content never depends on an observer or animation completing.

## Accessibility and Performance

Maintain semantic landmarks, label associations, keyboard navigation, visible focus treatment, dialog Escape handling, adequate contrast, 44px touch targets, and reduced-motion behavior. Textures use CSS rather than heavy bitmap overlays. Existing Next Image optimization remains in place. No continuously animated effects or expensive blur stacks are introduced.

## Data and Error Handling

Verified contact details continue to come from `src/data/site.ts`. Content collections remain in `src/data/content.ts`. The booking form validates required fields and chronological stay dates, announces errors, explains that an enquiry is not a confirmation, and provides an editable prepared state. No backend, rate, capacity, menu item, amenity, award, or availability claim is added.

## Verification

Completion requires:

1. Existing automated tests pass.
2. ESLint passes.
3. TypeScript and optimized Next.js build pass.
4. Every route returns successfully.
5. Desktop and 320–375px mobile renders are inspected.
6. Header, mobile navigation, booking modes, validation, WhatsApp handoff, gallery dialog, and route links are exercised.
7. Focus, active, pressed, loading/disabled styling, reduced motion, overflow, image loading, and console output are checked.

## Out of Scope

No booking backend, payment flow, live availability, fabricated room information, fabricated menu, social accounts, testimonials, awards, property claims, or third-party hotel imagery will be introduced.
