// Clinic facts from /workspace/eye-clinic-bakeoff/brief/CREATIVE_BRIEF.md.
export const clinic = {
  name: 'The Eye Clinic',
  country: 'Trinidad & Tobago',
} as const;

export const doctors = [
  {
    name: 'Dr. Shehenaz Z. Mohammed',
    credentials: 'M.B.B.S (UWI), MRCOphth (Lond.)',
    role: 'Eye Specialist / Eye Surgeon',
    isPrincipal: true,
  },
  {
    name: 'Dr. Kellita Dalrymple',
    credentials: 'M.B.B.S, FICO, FRCS (Ophth) (Glasg.)',
    role: 'Eye Specialist / Eye Surgeon',
    isPrincipal: false,
  },
] as const;

export const phone = {
  number: '+1 868-290-0590',
  href: 'tel:+18682900590',
} as const;

const whatsappMessage =
  "Hi, I'd like to book an eye appointment at The Eye Clinic.";

export const whatsapp = {
  number: phone.number,
  message: whatsappMessage,
  href: `https://wa.me/18682900590?text=${encodeURIComponent(whatsappMessage)}`,
} as const;

export const locations = [
  {
    name: 'Chaguanas',
    address: 'Mid Center Mall, Southern Main Road',
    hours: 'Mon, Tue, Thu, Fri & Sat · 9AM–5PM',
    closed: 'Closed Wednesday & Sunday',
  },
  {
    name: 'Tacarigua',
    area: 'Tunapuna area',
    address: '12 Eastern Main Road',
    hours: 'Mon & Wed · 9AM–5PM',
  },
] as const;

export const diagnostics = [
  'Visual Acuity Testing',
  'Colour Vision Testing',
  'Visual Field Testing (VFT)',
  'Optical Coherence Tomography (OCT)',
  'Fundus Autofluorescence',
  'Fluorescein Angiography',
  'Pachymetry',
  'A-Scans',
  'B-Scan Ultrasound',
] as const;

export const advancedCare = [
  'Cataract Surgery',
  'Glaucoma Surgery and Medical Management',
  'Myopia Management in Kids',
  'Pterygium excision and graft',
  'Laser Eye Treatments',
  'Diabetic Eye Treatments',
  'Eye Injections',
  'Chalazion / Stye excision',
] as const;

export const servicesNote = 'Other services available upon consultation';
