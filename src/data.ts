// Facts only — sourced from the creative brief and the clinic storefront panels.
// Do not add services that are not on the storefront lists.

export const PHONE_DISPLAY = '+1 868-290-0590'
export const PHONE_TEL = 'tel:+18682900590'
export const WHATSAPP_NUMBER = '18682900590'

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "Hi, I'd like to book an eye appointment at The Eye Clinic.",
)

export type Doctor = {
  name: string
  credentials: string
  role: string
  principal?: boolean
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Shehenaz Z. Mohammed',
    credentials: 'M.B.B.S (UWI), MRCOphth (Lond.)',
    role: 'Eye Specialist / Eye Surgeon',
    principal: true,
  },
  {
    name: 'Dr. Kellita Dalrymple',
    credentials: 'M.B.B.S, FICO, FRCS (Ophth) (Glasg.)',
    role: 'Eye Specialist / Eye Surgeon',
  },
]

export const diagnostics: string[] = [
  'Visual Acuity Testing',
  'Colour Vision Testing',
  'Visual Field Testing (VFT)',
  'Optical Coherence Tomography (OCT)',
  'Fundus Autofluorescence',
  'Fluorescein Angiography',
  'Pachymetry',
  'A-Scans',
  'B-Scan Ultrasound',
]

export const treatments: string[] = [
  'Cataract Surgery',
  'Glaucoma Surgery and Medical Management',
  'Myopia Management in Kids',
  'Pterygium excision and graft',
  'Laser Eye Treatments',
  'Diabetic Eye Treatments',
  'Eye Injections',
  'Chalazion / Stye excision',
]

export type Flagship = { title: string; blurb: string }

// Homepage flagships — each maps to an item on the storefront lists above.
export const flagships: Flagship[] = [
  { title: 'Cataract Surgery', blurb: 'Clearer vision when cataracts cloud your sight.' },
  { title: 'Glaucoma Care', blurb: 'Surgery and medical management to protect your sight.' },
  { title: 'Diabetic Eye Treatments', blurb: 'Regular checks and treatment for diabetes-related eye changes.' },
  { title: 'OCT & Eye Scans', blurb: 'Detailed imaging of the retina and optic nerve, done in-clinic.' },
  { title: 'Myopia Management in Kids', blurb: 'Slowing short-sightedness as children grow.' },
  { title: 'Laser Eye Treatments', blurb: 'In-clinic laser procedures, assessed at consultation.' },
]

export type Branch = {
  id: 'chaguanas' | 'tacarigua'
  name: string
  area: string
  address: string[]
  hoursSummary: string
  hoursNote: string
  mapsQuery: string
}

export const branches: Branch[] = [
  {
    id: 'chaguanas',
    name: 'Chaguanas',
    area: 'Central Trinidad',
    address: ['Mid Center Mall', 'Southern Main Road, Chaguanas'],
    hoursSummary: 'Weekdays and Saturday clinics',
    hoursNote: 'Exact times vary by day — confirm when booking.',
    mapsQuery: 'The Eye Clinic, Mid Center Mall, Southern Main Road, Chaguanas, Trinidad',
  },
  {
    id: 'tacarigua',
    name: 'Tacarigua',
    area: 'Tunapuna area, East Trinidad',
    address: ['12 Eastern Main Road', 'Tacarigua'],
    hoursSummary: 'Mainly Monday and Wednesday clinics',
    hoursNote: 'Confirm your day and time when booking.',
    mapsQuery: 'The Eye Clinic, 12 Eastern Main Road, Tacarigua, Trinidad',
  },
]

export function mapsLink(branch: Branch): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`
}

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'Which branch should I visit?',
    a: 'Whichever is closer — Chaguanas (Mid Center Mall) for Central and South, Tacarigua (Eastern Main Road) for the East–West corridor. Both are run by the same doctors. If you need a specific test or procedure, tell us when booking and we will confirm the right branch.',
  },
  {
    q: 'What should I bring?',
    a: 'Your ID, any current glasses or contact lenses, a list of medications you take (including eye drops), and any previous eye reports or scans. If you have diabetes, bring your recent blood sugar results if you have them.',
  },
  {
    q: 'Will my eyes be dilated?',
    a: 'Often, yes — dilating drops help us examine the back of the eye. Your vision may be blurry and light-sensitive for a few hours afterwards, so bring sunglasses and, if possible, someone to drive you home.',
  },
  {
    q: 'Do I need a referral?',
    a: 'No referral is needed to book a consultation. If your GP or optometrist gave you a referral letter, bring it along.',
  },
  {
    q: 'Is there parking?',
    a: 'Chaguanas: use the Mid Center Mall car park. Tacarigua: there is parking along the Eastern Main Road near the clinic. Ask us on WhatsApp if you need directions.',
  },
]
