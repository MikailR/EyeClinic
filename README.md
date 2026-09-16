# The Eye Clinic — website prototype

Mobile-first marketing site for **The Eye Clinic**, an ophthalmology practice in Trinidad with
branches in **Chaguanas** and **Tacarigua**.

Built with Vite + React + TypeScript. No runtime dependencies beyond React, no webfonts, no images
— every graphic is an inline SVG.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the built dist/
```

`vite.config.ts` sets `base: './'`, so `dist/` works from any subpath — including a
GitHub Pages preview at `/previews/<id>/`.

## What is in here

```
index.html            title, meta description, MedicalClinic JSON-LD for both branches
src/data/clinic.ts    every fact on the site: phone, branches, doctors, services, FAQ
src/styles.css        the whole design system (one file, ~14 kB)
src/App.tsx           page composition + the shared "go to booking" action
src/components/       Header, Hero, TrustStrip, Services, Doctors, Locations,
                      Booking, Faq, FinalCta, Footer, StickyBar, Icons
```

All clinic facts live in `src/data/clinic.ts`. Changing the phone number, an address or a service
name is a one-line edit there; nothing is hard-coded in the components.

## Sections

1. **Hero** — what (eye specialist care and eye surgery), who (both doctors, with credentials),
   where (Chaguanas & Tacarigua), and one primary CTA.
2. **Trust strip** — 5.0 on Google, two eye surgeons, two branches.
3. **Services** — six flagship cards, with the full storefront lists behind a disclosure.
4. **Doctors** — Dr. Shehenaz Z. Mohammed (principal) and Dr. Kellita Dalrymple.
5. **Locations** — tabbed branch cards with address, clinic days, parking, and per-branch CTAs.
6. **Book** — appointment request form that hands off to WhatsApp.
7. **FAQ** — branch choice, what to bring, dilating drops, parking, visit length.
8. **Final CTA + footer** — phone, both addresses, both doctors, directions links.

## CTA system

| Level | Action | Target |
| --- | --- | --- |
| Sticky bar (mobile) | **Call** / **Book** | `tel:+18682900590` / scrolls to `#book` |
| Hero | **Book an appointment** (primary), Call + WhatsApp (secondary) | `#book` |
| Header | WhatsApp, phone number | `wa.me/18682900590` |
| After services | Book an appointment | `#book` |
| Per branch | Book at *branch*, Call, Get directions | `#book` (pre-selects that branch) |
| Final CTA | Book, Call, WhatsApp | `#book` |

**Book** commits to one path: the `#book` form composes a message and opens WhatsApp with it
prefilled. The user still presses send. Call and copy-to-clipboard are the fallbacks.

## Accessibility & performance notes

- All tap targets are at least 44px; most buttons are 46–52px tall.
- Real landmarks and heading order (`h1` → `h2` → `h3`), skip link, `aria-expanded` /
  `aria-controls` on every disclosure, proper tablist for the branch switcher, labelled form
  fields with inline errors and `aria-invalid`.
- 16px form inputs so iOS does not zoom on focus.
- `prefers-reduced-motion` disables the transitions and the smooth scroll.
- Production build: ~1.1 kB gzipped HTML, ~3.6 kB gzipped CSS, ~54 kB gzipped JS, zero images.

## Not real

This is a prototype. There is no backend, no patient data is stored or transmitted by the site
itself, and the doctor portraits are labelled placeholders. Opening hours are shown only as far as
they are known — the site tells visitors to confirm exact times when booking rather than publishing
a schedule that has not been verified.
