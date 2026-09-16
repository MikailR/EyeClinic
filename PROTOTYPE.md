# PROTOTYPE.md — The Eye Clinic

**Model:** `claude-fable-5-1` (Claude Fable 5.1)
**Stack:** Vite 7 + React 19 + TypeScript, single page, `base: './'`
**Build output:** `dist/` — ~2.5 KB HTML, ~4 KB CSS (gzip), ~77 KB JS (gzip), no images or web fonts

## Visual direction

Clinic blue on white, taken straight from the door decals and storefront
panels: a deep brand blue (#0B4F9C) for headings and primary actions, a
brighter accent blue for icons and eyebrows, and a pale sky tint for
alternating section backgrounds. Layouts are deliberately sparse: one idea per
section, a single primary action per screen, generous whitespace, system fonts,
and a CSS-only abstract "lens ring" in the hero instead of a photo. The
storefront's stylised blue eye is redrawn as an inline SVG brand mark.

## How the brief's constraints shaped it

- **Authoritative services only.** `src/data.ts` holds the nine diagnostic
  tests and eight advanced-care procedures exactly as painted on the panels,
  plus the "Other services available upon consultation" note. The homepage
  shows six flagships; a "See all tests & treatments" disclosure reveals the
  two full groups. Nothing else was added, and the meta description was
  corrected to drop non-listed items (glasses, contact lenses).
- **Both surgeons, exact credentials.** Dr. Shehenaz Z. Mohammed
  (M.B.B.S (UWI), MRCOphth (Lond.)) leads as practice principal; Dr. Kellita
  Dalrymple (M.B.B.S, FICO, FRCS (Ophth) (Glasg.)) follows on the team. Both
  are in the hero copy, the About section, the footer and the JSON-LD.
- **No invented photos.** Doctor cards use a dashed, labelled placeholder with
  initials so a real, approved photo can be dropped in later.

## Deliberate Trinidad UX choices

1. **Call + Book sticky bar on mobile**, padded for `env(safe-area-inset-bottom)`,
   with the body padded so the bar never covers content. The phone number is
   printed inside the Call button, not hidden behind an icon.
2. **WhatsApp as the booking rail.** The Book form does not post to a server.
   It composes a structured message (name, phone, branch, reason, preferred
   time, notes) and opens `wa.me/18682900590`, matching how Caribbean service
   businesses actually take bookings. Each branch card also offers a
   branch-specific WhatsApp message.
3. **Branch first.** Location tabs sit above the fold on the Locations section
   with plain-language guidance ("Central and South → Chaguanas; Tunapuna,
   Arima and the East → Tacarigua"). Hours are shown honestly as "Confirm when
   booking" rather than inventing a schedule, with the known pattern
   (Chaguanas weekdays/Saturday; Tacarigua Monday/Wednesday) as a note.
4. **Light on data.** No web fonts, no images, no carousel, no autoplay, no
   third-party scripts. One JS bundle and one CSS file; total transfer well
   under 100 KB gzipped on a mid-range Android on 3G/4G.
5. **Local voice.** Copy uses T&T English ("if you have sugar", "bring someone
   to drive you home", "tap here") rather than corporate US phrasing. Trust
   signals are the ones that matter locally: doctor names, visible phone, both
   addresses, and a plain "5.0 on Google" mention with no fake widget.
6. **Thumb-sized everything.** All tappable targets are ≥44 px; form inputs are
   50 px tall with `inputMode="tel"` on the phone field; branch and time
   pickers are large radio "chips" instead of small dropdowns.

## Interactive behaviours

- Mobile menu (Escape closes, scroll lock, backdrop tap closes)
- "See all tests & treatments" disclosure
- Branch tabs (Chaguanas / Tacarigua) with directions, call and WhatsApp per branch
- Booking form with inline validation → opens WhatsApp with prefilled message,
  then shows a fallback link and phone number
- FAQ accordion using native `<details name="faq">` (one open at a time in
  supporting browsers)

## Known gaps for the real launch

Exact clinic hours per branch, approved doctor photographs, and a real
Google Maps embed (omitted here to keep the page light and avoid a third-party
script in the prototype).
