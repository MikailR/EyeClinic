# The Eye Clinic — website prototype

Mobile-first marketing site for **The Eye Clinic**, an ophthalmology practice in Trinidad & Tobago. Built as a Vite + React + TypeScript prototype for the eye-clinic bakeoff.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`. Vite is configured with `base: './'` so the build can be served from a subpath such as `/previews/<id>/`.

Preview the production build:

```bash
npm run preview
```

## What’s in the prototype

- Sticky **Call** (`tel:+18682900590`) and **Book** bar on mobile
- **WhatsApp** (`wa.me/18682900590`) with a prefilled booking message
- Both surgeons: Dr. Shehenaz Z. Mohammed (MRCOphth Lond.) and Dr. Kellita Dalrymple (FRCS Glasg.)
- Both branches: Chaguanas (Mid Center Mall) and Tacarigua (12 Eastern Main Road)
- Authoritative diagnostic and advanced-care lists from the clinic storefront — nothing invented beyond that list
- Appointment request form that composes a WhatsApp message (no backend)

## Facts used

| | |
|---|---|
| Phone | +1 868-290-0590 |
| Chaguanas | Mid Center Mall, Southern Main Road |
| Tacarigua | 12 Eastern Main Road (Tunapuna area) |
| Hours | Differ by branch; labelled “confirm when booking” |

See `PROTOTYPE.md` for visual direction and Trinidad-specific UX choices.
