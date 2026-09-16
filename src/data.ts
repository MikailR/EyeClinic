export const PHONE_E164 = '18682900590'
export const PHONE_TEL = 'tel:+18682900590'
export const PHONE_DISPLAY = '+1 868-290-0590'
export const PHONE_LOCAL = '290-0590'

export const WHATSAPP_DEFAULT_TEXT =
  "Hi, I'd like to book an eye appointment at The Eye Clinic."

export function whatsappUrl(text: string = WHATSAPP_DEFAULT_TEXT): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`
}

export const clinic = {
  name: 'The Eye Clinic',
  phoneDisplay: PHONE_DISPLAY,
  phoneLocal: PHONE_LOCAL,
  phoneTel: PHONE_TEL,
  googleRating: '5.0 on Google',
}

export const doctors = [
  {
    id: 'mohammed',
    name: 'Dr. Shehenaz Z. Mohammed',
    initials: 'SZM',
    credentials: 'M.B.B.S (UWI), MRCOphth (Lond.)',
    role: 'Eye Specialist / Eye Surgeon',
    lead: true,
    note: 'Practice principal. University of the West Indies graduate; Membership of the Royal College of Ophthalmologists, London.',
  },
  {
    id: 'dalrymple',
    name: 'Dr. Kellita Dalrymple',
    initials: 'KD',
    credentials: 'M.B.B.S, FICO, FRCS (Ophth) (Glasg.)',
    role: 'Eye Specialist / Eye Surgeon',
    lead: false,
    note: 'Eye specialist and surgeon. Fellow of the International Council of Ophthalmology; FRCS Ophthalmology, Glasgow.',
  },
] as const

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
] as const

export const treatments = [
  'Cataract Surgery',
  'Glaucoma Surgery and Medical Management',
  'Myopia Management in Kids',
  'Pterygium excision and graft',
  'Laser Eye Treatments',
  'Diabetic Eye Treatments',
  'Eye Injections',
  'Chalazion / Stye excision',
] as const

export const otherServicesNote = 'Other services available upon consultation'

export type FlagshipId =
  | 'cataract'
  | 'glaucoma'
  | 'diabetic'
  | 'imaging'
  | 'myopia'
  | 'laser'

export const flagships: {
  id: FlagshipId
  title: string
  blurb: string
}[] = [
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    blurb: 'Cloudy lens, clearer sight. Surgical care when a cataract is getting in the way.',
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Care',
    blurb: 'Surgery and medical management to help protect remaining sight.',
  },
  {
    id: 'diabetic',
    title: 'Diabetic Eye Treatments',
    blurb: 'Checks and treatment for diabetic eye disease — don’t wait on blurry vision.',
  },
  {
    id: 'imaging',
    title: 'OCT & Diagnostic Scans',
    blurb: 'OCT, visual fields, A-scan, B-scan and more, done here at the clinic.',
  },
  {
    id: 'myopia',
    title: 'Myopia Management in Kids',
    blurb: 'Care for children whose short-sight is progressing.',
  },
  {
    id: 'laser',
    title: 'Laser Eye Treatments',
    blurb: 'Laser procedures as advised after a proper consultation.',
  },
]

export const locations = [
  {
    id: 'chaguanas',
    name: 'Chaguanas',
    area: 'Central Trinidad',
    address: 'Mid Center Mall, Southern Main Road',
    hoursLabel: 'Weekdays and Saturday',
    hoursNote:
      'This branch runs denser weekday and Saturday clinics. Exact times — confirm when booking.',
    mapsUrl:
      'https://maps.google.com/?q=Mid+Center+Mall+Southern+Main+Road+Chaguanas+Trinidad',
    parking: 'Mall parking at Mid Center Mall. Ask when you book if you need a closer drop-off.',
  },
  {
    id: 'tacarigua',
    name: 'Tacarigua',
    area: 'Tunapuna area',
    address: '12 Eastern Main Road',
    hoursLabel: 'Mondays and Wednesdays',
    hoursNote:
      'This branch is heavier on Mondays and Wednesdays. Exact times — confirm when booking.',
    mapsUrl: 'https://maps.google.com/?q=12+Eastern+Main+Road+Tacarigua+Trinidad',
    parking: 'Street-side on Eastern Main Road. Confirm the best place to stop when you book.',
  },
] as const

export const faqs = [
  {
    q: 'Which branch should I come to?',
    a: 'Chaguanas (Mid Center Mall, Southern Main Road) is the busier weekday and Saturday clinic. Tacarigua (12 Eastern Main Road, Tunapuna area) is heavier on Mondays and Wednesdays. Pick whichever is easier to reach — we’ll confirm a time when you book.',
  },
  {
    q: 'What should I bring?',
    a: 'Bring your current glasses, a list of medicines, your ID, and any past eye reports or clinic letters if you have them. If you wear contact lenses, bring the lens case too. Someone can come with you if you expect drops that blur your vision for a while.',
  },
  {
    q: 'Do I need a referral?',
    a: 'You can book yourself. If another doctor sent you, bring that letter. Walk-ins are sometimes possible; calling or WhatsApp first is the surest way to be seen the same day.',
  },
  {
    q: 'How do I book?',
    a: 'Call +1 868-290-0590, WhatsApp the same number, or send a request with the form on this page. We will confirm the branch, doctor, and time with you — this site does not take payments or lock a slot on its own.',
  },
  {
    q: 'Where can I park?',
    a: 'Chaguanas has mall parking at Mid Center Mall. Tacarigua is on Eastern Main Road — confirm the best place to stop when you book. If mobility is an issue, say so when you call and we’ll help you plan the arrival.',
  },
  {
    q: 'Is this glasses only, or surgery too?',
    a: 'Both. The clinic does diagnostic tests and imaging, medical eye care, and surgery including cataract, glaucoma, pterygium, laser, diabetic eye treatments, eye injections, and chalazion or stye excision. Other services are available upon consultation.',
  },
] as const

export const visitReasons = [
  'First consultation / general eye check',
  ...treatments,
  ...diagnostics,
  'Follow-up visit',
  'Other — I’ll explain',
] as const
