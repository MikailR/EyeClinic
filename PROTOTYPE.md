# Eye Clinic prototype

## Implemented

A complete single-page site with a sparse blue-and-white visual design, responsive navigation, typographic hero and decorative eye illustration.

- Four flagship services drawn from the provided advanced-care list.
- All nine diagnostic services and all eight advanced-care services, plus the consultation note.
- Both doctors with their supplied credentials and roles, with the principal specialist identified.
- Both clinic addresses with Google Maps directions links.
- Chaguanas: Monday, Tuesday, Thursday, Friday and Saturday, 9AM–5PM; closed Wednesday and Sunday.
- Tacarigua: Monday and Wednesday, 9AM–5PM. No additional closed-day claim is made.
- Persistent Call and Book actions, direct WhatsApp contact and a validated appointment request form.
- Page title, description, theme colour and English language metadata.

Clinic facts are sourced from `src/data.ts`, updated only to include the opening hours supplied in the implementation request. No fees, testimonials, outcome claims, doctor photographs or additional credentials were invented.

## Booking behaviour

The visitor enters their name and telephone number, selects a location and optionally changes the service from general consultation. Native browser validation checks required fields and the telephone format. Preparing the request reveals an explicit WhatsApp handoff link with a prefilled message. The visitor must review and send the message in WhatsApp. The site clearly explains that the clinic must confirm availability.

No appointment is saved or confirmed by this prototype. No backend, analytics, form storage or automated message delivery is configured. The WhatsApp service receives the supplied details when the visitor opens the generated link.

## Accessibility and responsive design

Semantic landmarks, a skip link, visible keyboard focus, labelled form controls, native select elements, a status announcement for prepared requests and an expanded-state mobile menu are included. Decorative SVGs are hidden from assistive technology. The layout starts as a single column and expands into desktop grids; persistent contact controls reserve space at the bottom of the page. Reduced-motion preferences disable smooth scrolling.

## Verification

- `npm run build`: passed; TypeScript compilation and Vite production bundling completed.
- `npm run lint`: passed.
- Vite `base: './'` retained.

Live browser, assistive-technology, telephone, Google Maps and WhatsApp end-to-end checks were not performed. Before public release, confirm contact routing with the clinic and review the form on mobile devices, including the external WhatsApp handoff. No deployment was performed.
