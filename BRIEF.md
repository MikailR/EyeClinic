# BRIEF — The Eye Clinic website prototype

Build a **production-quality, mobile-first marketing website** for an ophthalmology practice in Trinidad & Tobago. This is a real business bakeoff entry: ship working HTML/CSS/JS (Vite + React/TS preferred, or clean static HTML). `npm run build` must succeed if you use a bundler; otherwise a single deployable `dist/` or root static site is fine.

Write `PROTOTYPE.md` at the repo root of your branch noting: model id, visual direction in 2–3 sentences, and any deliberate Trinidad UX choices.

## Practice (facts — do not invent conflicting details)

- **Name:** The Eye Clinic
- **Doctor:** Dr. Shehenaz Mohammed (ophthalmologist)
- **Phone:** +1 868-290-0590 (`tel:+18682900590`)
- **Branches:**
  1. **Chaguanas** — Mid Center Mall, Southern Main Road
  2. **Tacarigua** (Tunapuna area) — 12 Eastern Main Road
- Google listings ~5.0; **no website today** — this prototype is the future site
- Hours differ by branch (Chaguanas denser weekdays/Sat; Tacarigua Mon/Wed heavy). Show hours clearly; if unsure, label as “Confirm when booking” rather than inventing exact schedules.

## Doctors (from storefront — use exact credentials)

1. **Dr. Shehenaz Z. Mohammed** — M.B.B.S (UWI), MRCOphth (Lond.) — Eye Specialist / Eye Surgeon
2. **Dr. Kellita Dalrymple** — M.B.B.S, FICO, FRCS (Ophth) (Glasg.) — Eye Specialist / Eye Surgeon

Lead with Dr. Mohammed as the practice principal; include Dr. Dalrymple on About / team. No invented photos — placeholders labeled for real photos later. Brand mark on doors: stylized blue eye icon + “The Eye Clinic”.

## Services (AUTHORITATIVE — from clinic storefront panels)

Do **not** invent procedures beyond this list. Group clearly on the site; keep the UI sparse (two sections, not 17 equal cards).

### Diagnostic tests & imaging
- Visual Acuity Testing
- Colour Vision Testing
- Visual Field Testing (VFT)
- Optical Coherence Tomography (OCT)
- Fundus Autofluorescence
- Fluorescein Angiography
- Pachymetry
- A-Scans
- B-Scan Ultrasound

### Advanced eye care (procedures / treatments)
- Cataract Surgery
- Glaucoma Surgery and Medical Management
- Myopia Management in Kids
- Pterygium excision and graft
- Laser Eye Treatments
- Diabetic Eye Treatments
- Eye Injections
- Chalazion / Stye excision
- Note on site: “Other services available upon consultation”

Hero must still make the offering obvious in one glance: specialist eye care / eye surgery in Trinidad. Homepage can feature 4–6 flagships (e.g. Cataract, Glaucoma, Diabetic eye, OCT/scans, Myopia in kids, Laser) with a “See all tests & treatments” link to the full lists.

Reference photo of the storefront (branding + panels): `/workspace/eye-clinic-bakeoff/brief/storefront.jpg`

## Audience & constraints (critical)

Design for **Trinidad mobile users**, not a Silicon Valley demo:

- Most traffic is **mobile**. Desktop is secondary.
- Prefer **Call** and **WhatsApp** as high-trust actions; online booking can be primary but must not be the only path.
- Assume **spotty data / mid-range Android phones**: light page weight, system fonts OK, minimal heavy animation, no autoplay video, no giant image carousels.
- Large thumb targets (≥44px). High contrast. Readable without pinch-zoom.
- English as used in T&T (clear, warm, not corporate US jargon).
- Trust signals that matter locally: doctor name, phone number visible as text, both addresses, Google-style star rating mention OK as “5.0 on Google” without fake review widgets.
- Do **not** invent a male doctor photo or wrong name. Prefer abstract/clinical photography, iconography, or a respectful silhouette placeholder labeled for a real photo later.

## CTA system (required)

Implement a deliberate CTA hierarchy:

1. **Primary sticky mobile bar** (always visible, safe-area aware):  
   - **Call** → `tel:+18682900590` (show number or “Call clinic”)  
   - **Book** → appointment intent (form, `#book`, or WhatsApp-deep-link — pick one and commit)
2. **WhatsApp** affordance (header or secondary): `https://wa.me/18682900590?text=` with a short prefilled message like `Hi, I'd like to book an eye appointment at The Eye Clinic.`
3. Repeat CTAs after services and near locations — not five competing equal buttons in the hero.
4. One clear primary action above the fold; secondary Call/WhatsApp support it.

Research-backed patterns to apply: sticky dual CTA for local clinics, visible phone for trust, WhatsApp for conversational booking common in Caribbean/emerging-market service businesses, keep the bar from covering content.

## Visual direction

- **Blue + white** clinic palette (tech-forward, calm, modern — not dense or cluttered).
- Sparse layouts with breathing room. Previous image-gen mocks failed for being overcrowded — err toward less.
- Seamless, polished micro-interactions OK if cheap (CSS only).
- SEO-friendly: real headings (`h1` practice/doctor intent), semantic sections, location names in copy, `title` / meta description.

## Pages / sections (minimum)

Single-page is fine if it includes:
1. Hero (what + who + where)
2. Services
3. Doctor / about (Dr. Shehenaz Mohammed)
4. Locations (both branches)
5. Contact / book
6. Footer with phone + addresses

Optional: FAQ (parking, what to bring, which branch).

## Out of scope

- Real backend / payments / EHR
- Fake patient data
- Image-gen placeholder spam
- Dense dashboard UI

## Done when

- Mobile homepage is usable in under 5 seconds of glance time: visitor knows it’s an eye specialist clinic, who the doctor is, and can Call or Book.
- Both locations appear.
- Sticky Call + Book work.
- Build/deploy artifacts land so the comparison host can iframe `/previews/<branch>/`.

## Ship notes for this bakeoff
- Output ONLY inside your assigned model directory.
- Vite+React+TS preferred. Set `base: './'` in vite.config so GitHub Pages subpath `/previews/<id>/` works.
- `npm install && npm run build` must succeed; artifacts in `dist/`.
- Include `README.md` and `PROTOTYPE.md`.
