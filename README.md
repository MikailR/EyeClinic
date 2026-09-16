# The Eye Clinic — website prototype (claude-design entry)

Mobile-first marketing site for **The Eye Clinic**, an ophthalmology practice with
branches in Chaguanas and Tacarigua, Trinidad & Tobago. Built with Vite + React + TypeScript.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve dist/ locally
```

`vite.config.ts` sets `base: './'`, so `dist/` works from any subpath
(for example `/previews/<branch>/`) or straight from a file system.

## What's in the site

Single page with anchored sections:

| Section | Notes |
| --- | --- |
| Header | Blue bar, brand mark, WhatsApp button, menu. Desktop adds nav, phone text, Book. |
| Hero | One primary action (Book) with "or call" phone text under it. Trust line: 5.0 on Google, two clinics, no referral. |
| Services | 6 flagship cards, then "See all tests & treatments" reveals the two storefront lists verbatim. |
| Doctors | Dr. Shehenaz Z. Mohammed (principal) and Dr. Kellita Dalrymple with exact credentials. Labelled photo placeholders. |
| Locations | Chaguanas / Tacarigua tabs, address, clinic days ("confirm when booking"), directions, WhatsApp. |
| Book | Form composes a WhatsApp message to the clinic. Call link always beside it. |
| FAQ | Native `<details>` accordion. |
| Footer | Phone, both addresses, both doctors. |
| Sticky bar | Call + Book, fixed on mobile, safe-area aware, hidden at ≥900px. |

All facts (services, credentials, addresses, phone) live in `src/data.ts` and come from
the creative brief and the storefront panels. Nothing outside those lists is offered.

## Weight

Production build is one CSS file (~14 KB) and one JS bundle (~246 KB, ~76 KB gzipped).
No web fonts, no images, no third-party scripts.
