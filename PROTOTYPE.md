# PROTOTYPE.md — The Eye Clinic (claude-design entry)

**Model:** `claude-fable-5-1` (Claude Fable 5.1), working with the Claude Design MCP server.

## Visual direction

Storefront blue on white, nothing else. The hero and header sit on the same deep blue as the
clinic's door panels, with a simplified version of the eye mark; every other section is white
or a faint blue tint with thin rules and generous spacing. System fonts, no photography yet:
every image slot is a striped, labelled placeholder so real clinic photos drop in later
without redesign.

## How Claude Design MCP shaped this

1. **Direction was chosen from rendered options, not guessed.** Before writing any React, three
   390×844 mobile home screens were built as a design canvas in a Claude Design project
   (`Eye Clinic Mobile Explorations.dc.html`):
   - 1a "Clinic classic": white page, blue header strip, doctor card directly under the hero.
   - 1b "Storefront blue band": hero on deep blue like the door panels, big type, one white Book button.
   - 1c "Editorial white": thin rules, the phone number as the largest element, blue only on actions.
2. **The canvas was rendered and screenshotted** (headless Chrome against the MCP preview) and
   compared side by side. 1b read fastest in the five-second glance test (blue band = "this is the
   eye clinic on the door"), 1a's doctor card gave the strongest trust signal, and 1c's visible
   phone number and two thin-rule service lists were the calmest way to show 17 services.
3. **The shipped site is a merge:** 1b's hero band and single primary CTA, 1a's doctor card and
   credential layout, 1c's phone-as-text and rule-separated service lists.
4. **The Claude Design system prompt's quality rules were applied to the code**: minimum 44px
   hit targets (verified in the DOM, none under 44), 4.5:1 contrast (full-opacity ink on blue,
   no alpha-muted text), no hand-drawn illustration SVGs, striped monospace placeholders instead
   of fake photos, and no "rounded card with left-border accent" — an early build had that on the
   flagship cards and it was removed after the guidance flagged it as a cliché.
5. **Verify loop.** The built `dist/` was rendered at 390px and 1280px, then driven over the
   Chrome DevTools protocol: menu open/close, "See all tests & treatments" (17 items rendered),
   Tacarigua tab, empty-form validation (3 errors), a filled submission producing the correct
   `wa.me` message, and the FAQ accordion. All passed with no console errors and no horizontal
   overflow at 390px.

Design project (exploration canvas):
https://claude.ai/design/p/b7dab641-31f3-4705-8652-fa86a7e182e9?file=Eye+Clinic+Mobile+Explorations.dc.html

## Deliberate Trinidad UX choices

- **Call and WhatsApp everywhere, as text.** The number `+1 868-290-0590` appears in the hero, header
  (desktop), services strip, each branch, the booking section and the footer, always as a `tel:` link.
  WhatsApp deep links are prefilled and branch-specific.
- **Book = WhatsApp, committed.** The booking form doesn't pretend to have a backend. It composes a
  WhatsApp message (name, phone, branch, reason, timing) and opens `wa.me`. Patients see exactly
  what will be sent, and the clinic gets requests in the channel they already use.
- **Sticky Call + Book on mobile only**, with `env(safe-area-inset-bottom)` padding and body padding
  so it never covers the footer. On desktop the header carries the same actions.
- **Hours are honest.** The brief was unsure of exact times, so each branch shows the pattern
  ("Weekdays and Saturday clinics", "Mainly Monday and Wednesday clinics") with "confirm when booking",
  rather than invented schedules.
- **Light page.** No web fonts, no images, no carousel, no autoplay. One CSS file and one JS bundle,
  CSS-only transitions, `prefers-reduced-motion` respected.
- **Warm T&T English**: "close to home", "we'll advise", "no form needed"; no US clinic jargon.
- **Two branches always visible**: hero eyebrow, locations tabs, footer columns, and the branch
  chooser in the booking form.
- **No invented services or photos.** Service lists are the storefront panels verbatim, including
  "Other services available upon consultation". Doctor portraits are labelled placeholders.

## Next steps for the clinic

- Supply portraits of both doctors and a landscape photo for the hero/branch slots.
- Confirm clinic hours per branch so the "confirm when booking" note can become a real timetable.
- Optionally point the Book button at a real scheduler; the form already collects the right fields.
