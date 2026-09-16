# The Eye Clinic

A mobile-first, blue-and-white clinic website built with React, TypeScript and Vite.

## Development

```sh
npm install
npm run dev
```

## Validation and production

```sh
npm run lint
npm run build
npm run preview
```

The production output is `dist/`. Vite retains `base: './'` for deployment under a relative path. Deploy the contents of `dist/` to a static host.

## Content and structure

- `src/data.ts`: clinic facts, contact links, doctors, locations, opening hours and complete service lists. The supplied opening hours replace the original placeholders.
- `src/App.tsx`: hero, flagship services, full service lists, doctors, locations, appointment form and persistent contact actions.
- `src/App.css` and `src/index.css`: responsive layouts, typography and accessibility states.
- `index.html`: page title, description, theme colour and language.

All clinic facts originate in `src/data.ts`; HTML metadata contains a static summary for search engines. The decorative eye illustration is inline SVG and doctor monograms are not photographs. No external fonts, imagery or additional packages are required.

## Appointment requests

The form validates required name, phone and location fields. Submission prepares a WhatsApp link containing those details and the chosen service. The visitor then selects **Continue to WhatsApp** to review and send the message. Editing the form clears the prepared link.

There is no booking backend, database, automatic message transmission or confirmed appointment slot. The clinic must respond to confirm availability. Form details are held in page memory and included in the WhatsApp link; the site does not save them to local storage.

Call links use the clinic telephone number. WhatsApp links use the supplied clinic destination. Directions open Google Maps searches for the addresses in `src/data.ts`.

See [PROTOTYPE.md](./PROTOTYPE.md) for scope and verification details.
