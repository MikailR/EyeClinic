# The Eye Clinic — website prototype

Mobile-first marketing site for **The Eye Clinic**, an ophthalmology practice in
Trinidad & Tobago with branches in **Chaguanas (Mid Center Mall)** and
**Tacarigua (12 Eastern Main Road)**. Doctors: Dr. Shehenaz Z. Mohammed and
Dr. Kellita Dalrymple. Phone: +1 868-290-0590.

Built with Vite + React 19 + TypeScript. No UI libraries, no web fonts, no
images to download — one HTML file, one CSS file, one JS bundle.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve dist/ locally
```

`vite.config.ts` sets `base: './'`, so `dist/` works when served from any
subpath such as `/previews/<branch>/`.

## What's in the box

| Path | Purpose |
| --- | --- |
| `index.html` | Title, meta description, Open Graph tags, `MedicalClinic` JSON-LD with both branches and both physicians |
| `src/data.ts` | **Single source of truth** for phone, WhatsApp link, branches, doctors, and the authoritative service lists from the storefront panels |
| `src/components/Header.tsx` | Sticky header: brand mark, desktop nav, WhatsApp button, mobile menu |
| `src/components/Hero.tsx` | What / who / where in one glance, primary Book CTA, Call + WhatsApp support, trust line |
| `src/components/Services.tsx` | Six flagship cards, then a disclosure revealing the full **Diagnostic tests & imaging** and **Advanced eye care** lists |
| `src/components/Doctors.tsx` | Dr. Mohammed as principal, Dr. Dalrymple as team; labelled photo placeholders |
| `src/components/Locations.tsx` | Branch tabs with address, hours table, directions / call / WhatsApp actions |
| `src/components/Book.tsx` | Booking form that composes a WhatsApp message and opens `wa.me` |
| `src/components/Faq.tsx` | Native `<details>` accordion: which branch, what to bring, dilation, parking, kids, how to book |
| `src/components/Footer.tsx` | Phone, WhatsApp, both addresses, doctor credentials |
| `src/components/StickyBar.tsx` | Always-visible **Call** + **Book** bar on mobile, safe-area aware |
| `src/styles.css` | Blue/white design tokens and all layout, mobile-first with a few breakpoints |

## Editing content

Everything a clinic staff member might need to change lives in `src/data.ts`:
phone number, WhatsApp prefilled message, addresses, hours, doctor bios,
service blurbs and FAQ copy. Hours are intentionally shown as
"Confirm when booking" until the practice supplies its exact schedules.

The service lists in `data.ts` mirror the storefront panels exactly. Add or
remove items there only when the clinic changes what it offers.

## Replacing the photo placeholders

`Doctors.tsx` renders a dashed placeholder with initials for each doctor. Swap
the `.doctor__photo` block for an `<img>` with a real, approved photograph and
descriptive `alt` text. Keep images under ~80 KB and sized around 680×510 for
the principal card.

## CTA decisions

- **Sticky bar (mobile):** Call → `tel:+18682900590`, Book → `#book`.
- **Book** is committed to a single path: the form builds a WhatsApp message
  and opens `https://wa.me/18682900590?text=…`. No backend is required.
- **WhatsApp** appears in the header, hero, after services, on each branch, in
  the footer, and as the form's submit action.
- Phone number is shown as visible text wherever it appears.

## Not included (by design)

Real booking backend, payments, patient records, review widgets, analytics,
stock imagery.
