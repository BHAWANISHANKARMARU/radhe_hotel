# Radhe Hotel & Restaurant Website Design

## Purpose

Create a premium, conversion-focused digital home for Radhe Hotel & Restaurant in Sridungargarh, Bikaner. The site must establish trust for overnight guests, make the restaurant feel destination-worthy, and convert family celebrations into enquiries.

## Experience

The visual direction is “Midnight Peacock Courtyard”: deep indigo, marigold gold, lacquer red, and peacock green. The site opens cinematically at blue hour, then moves into warm daylight interiors and richly lit food. Oversized bilingual display moments, carved-arch silhouettes, staggered image reveals, and a subtle peacock-feather cursor trail create one composed motion language rather than scattered effects.

## Pages and Functions

- Home: cinematic hero, quick booking bar, stay/dine/celebrate pathways, signature food, rooms, testimonials, location and call-to-action.
- Stay: room presentation, amenities, policy summary and booking action.
- Dining: restaurant story, signature dishes, hours and table reservation.
- Celebrations: wedding, birthday, family and corporate event packages with enquiry form.
- Gallery: filterable stay/dine/celebrate photography.
- About: family hospitality story and locality.
- Contact: address, phone actions, map link and enquiry form.
- Book: tabbed room/table/event form with validation and a clear confirmation state.

## Content and Brand Assumptions

Radhe offers guest rooms, vegetarian dining and celebration/event service. The supplied logo is used as the primary brand mark. The supplied invitation provides the address and phone numbers. Prices, room inventory, exact capacity and menu prices are intentionally omitted until confirmed; actions create an enquiry rather than claim a live reservation.

## Technical Design

Next.js App Router with TypeScript and scoped CSS. Shared layout includes a responsive header, footer, mobile action dock and motion layer. Content is local and static; forms validate in the browser and produce a success state. Images are original generated assets stored in `public/images` and rendered with `next/image`. Motion respects `prefers-reduced-motion`.

## Quality Bar

Responsive from 360px to wide desktop, keyboard accessible, meaningful focus states, no horizontal overflow, no fake live availability, and every visible navigation/action control must work.
