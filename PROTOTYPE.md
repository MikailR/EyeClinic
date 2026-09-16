# PROTOTYPE — The Eye Clinic

**Model id:** `claude-opus-5` (Opus 5)
**Entry directory:** `models/opus-5`
**Stack:** Vite 5 + React 18 + TypeScript, `base: './'`, zero runtime dependencies beyond React.

## Visual direction

Sparse blue-and-white clinic: one deep royal blue (`#0B5FD9`) pulled from the storefront signage,
a pale blue tint for sections, and a lot of white space. Type is system-font only — no webfont
request on a mid-range Android — set large, high-contrast and left-aligned, with one decorative
element on the whole page (a thin blue arc behind the hero that echoes the swoosh on the door
panels). Every illustration is an inline SVG line icon, so the entire site is 3.6 kB of CSS and
54 kB gzipped JS with no images to download.

## Deliberate Trinidad UX choices

- **Booking commits to WhatsApp.** The form does not pretend to have a backend. You fill in name,
  phone, branch, reason and preferred time; "Continue" composes a plain-text message and hands it
  to `wa.me/18682900590` — you still press send yourself in WhatsApp, so nothing leaves your phone
  silently. Copy-to-clipboard and a plain `tel:` link are there when WhatsApp is not an option.
- **The phone number is text, everywhere.** Header, hero, every branch card, the final CTA, the
  footer and the sticky bar — always as readable digits, never hidden behind an icon, because the
  number itself is the trust signal.
- **Sticky Call + Book bar**, `env(safe-area-inset-bottom)` aware, with matching `padding-bottom`
  on `body` so it never covers the last line of content. It disappears above 900px where the
  header and in-page CTAs already cover the same ground.
- **Hours are not invented.** The brief said Chaguanas is denser weekdays/Saturday and Tacarigua is
  mainly Monday/Wednesday; the site says exactly that much and then says "Exact times: confirm when
  booking" rather than publishing a schedule that would send someone on a wasted trip.
- **Branch choice carries through.** "Book at Tacarigua" in the Locations section pre-selects
  Tacarigua in the booking form, so the choice is made once.
- **Local practicalities in the FAQ:** which branch to use, mall parking in Chaguanas vs street-side
  on the Eastern Main Road, dilating drops meaning you should not drive yourself home, and bringing
  recent blood sugar results if you are diabetic.
- **T&T English**, warm and direct — "Worried about your eyes? Don't wait." — no US clinic jargon,
  no "wellness journey".
- **Sparse by design.** Six flagship cards on the homepage; the full storefront lists (9 diagnostic
  tests, 8 advanced-care procedures) sit behind one "See all tests & treatments" disclosure so the
  page is two sections, not seventeen equal cards.

## Fidelity to the source material

Services are transcribed verbatim from the two storefront panels — nothing added, nothing renamed,
including the closing line "Other services available upon consultation." Both doctors appear with
the exact credentials from the door: Dr. Shehenaz Z. Mohammed (M.B.B.S UWI, MRCOphth Lond.) as
principal, and Dr. Kellita Dalrymple (M.B.B.S, FICO, FRCS (Ophth) Glasg.). There are no invented
photos — the doctor cards use a neutral silhouette avatar with a visible note that real portraits
go in before launch. The 5.0 Google rating is stated as plain text, with no fake review widget.

## Known gaps for the real build

- Replace the two silhouette avatars with real portraits.
- Publish real opening hours per branch once confirmed, replacing the "confirm when booking" line.
- Swap the canonical URL and add real Google Business Profile links / embedded maps.
- If the clinic later wants form submissions by email, point the `Continue` handler at a form
  endpoint and keep WhatsApp as the secondary path.
