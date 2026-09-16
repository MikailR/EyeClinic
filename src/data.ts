// Single source of truth for clinic facts. Everything here comes from the
// creative brief / storefront panels. Do not add procedures that are not listed.

export const PHONE_DISPLAY = '+1 868-290-0590'
export const PHONE_TEL = 'tel:+18682900590'
export const WHATSAPP_NUMBER = '18682900590'
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'd like to book an eye appointment at The Eye Clinic."

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type Branch = {
  id: 'chaguanas' | 'tacarigua'
  name: string
  short: string
  address: string[]
  area: string
  hoursNote: string
  hours: { days: string; time: string }[]
  landmarks: string
  mapsQuery: string
}

export const BRANCHES: Branch[] = [
  {
    id: 'chaguanas',
    name: 'Chaguanas',
    short: 'Mid Center Mall',
    address: ['Mid Center Mall', 'Southern Main Road', 'Chaguanas'],
    area: 'Central Trinidad',
    hoursNote: 'Busier weekday and Saturday schedule. Confirm your time when booking.',
    hours: [
      { days: 'Monday – Friday', time: 'Confirm when booking' },
      { days: 'Saturday', time: 'Confirm when booking' },
      { days: 'Sunday', time: 'Closed' },
    ],
    landmarks: 'Inside Mid Center Mall on the Southern Main Road. Mall parking available.',
    mapsQuery: 'The Eye Clinic, Mid Center Mall, Southern Main Road, Chaguanas, Trinidad and Tobago',
  },
  {
    id: 'tacarigua',
    name: 'Tacarigua',
    short: '12 Eastern Main Road',
    address: ['12 Eastern Main Road', 'Tacarigua'],
    area: 'Tunapuna area, East Trinidad',
    hoursNote: 'Mainly Monday and Wednesday clinics. Confirm your time when booking.',
    hours: [
      { days: 'Monday & Wednesday', time: 'Confirm when booking' },
      { days: 'Other days', time: 'By appointment' },
      { days: 'Sunday', time: 'Closed' },
    ],
    landmarks: 'On the Eastern Main Road in Tacarigua, a short drive from Tunapuna and Trincity.',
    mapsQuery: 'The Eye Clinic, 12 Eastern Main Road, Tacarigua, Trinidad and Tobago',
  },
]

export type Doctor = {
  name: string
  shortName: string
  credentials: string
  title: string
  role: string
  bio: string
  initials: string
}

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Shehenaz Z. Mohammed',
    shortName: 'Dr. Mohammed',
    credentials: 'M.B.B.S (UWI), MRCOphth (Lond.)',
    title: 'Eye Specialist / Eye Surgeon',
    role: 'Consultant Ophthalmologist · Practice Principal',
    bio:
      'Dr. Mohammed leads The Eye Clinic and sees patients at both the Chaguanas and Tacarigua branches. She trained at The University of the West Indies and holds membership of the Royal College of Ophthalmologists, London.',
    initials: 'SM',
  },
  {
    name: 'Dr. Kellita Dalrymple',
    shortName: 'Dr. Dalrymple',
    credentials: 'M.B.B.S, FICO, FRCS (Ophth) (Glasg.)',
    title: 'Eye Specialist / Eye Surgeon',
    role: 'Consultant Ophthalmologist',
    bio:
      'Dr. Dalrymple is a Fellow of the Royal College of Physicians and Surgeons of Glasgow in Ophthalmology and holds the International Council of Ophthalmology fellowship. She consults and operates alongside Dr. Mohammed.',
    initials: 'KD',
  },
]

export type Service = {
  name: string
  blurb?: string
}

// AUTHORITATIVE list — storefront left panel
export const DIAGNOSTIC_TESTS: Service[] = [
  { name: 'Visual Acuity Testing', blurb: 'How clearly you see at distance and near.' },
  { name: 'Colour Vision Testing', blurb: 'Screening for colour vision deficiency.' },
  { name: 'Visual Field Testing (VFT)', blurb: 'Maps your side vision. Important for glaucoma.' },
  { name: 'Optical Coherence Tomography (OCT)', blurb: 'Detailed scan of the retina and optic nerve.' },
  { name: 'Fundus Autofluorescence', blurb: 'Imaging of the retina without dye.' },
  { name: 'Fluorescein Angiography', blurb: 'Dye test of the blood vessels in the retina.' },
  { name: 'Pachymetry', blurb: 'Measures corneal thickness.' },
  { name: 'A-Scans', blurb: 'Eye measurements used to plan cataract surgery.' },
  { name: 'B-Scan Ultrasound', blurb: 'Ultrasound view of the inside of the eye.' },
]

// AUTHORITATIVE list — storefront right panel
export const ADVANCED_CARE: Service[] = [
  { name: 'Cataract Surgery', blurb: 'Removal of the cloudy lens and a clear replacement lens.' },
  { name: 'Glaucoma Surgery and Medical Management', blurb: 'Drops, laser and surgery to protect your sight.' },
  { name: 'Myopia Management in Kids', blurb: 'Slowing short-sightedness in children.' },
  { name: 'Pterygium excision and graft', blurb: 'Removal of the growth on the eye with a graft.' },
  { name: 'Laser Eye Treatments', blurb: 'In-clinic laser for a range of eye conditions.' },
  { name: 'Diabetic Eye Treatments', blurb: 'Screening and treatment of diabetic eye disease.' },
  { name: 'Eye Injections', blurb: 'Injections for retinal conditions.' },
  { name: 'Chalazion / Stye excision', blurb: 'Minor procedure for eyelid lumps.' },
]

export const OTHER_SERVICES_NOTE = 'Other services available upon consultation.'

// Homepage flagships (subset of the authoritative lists above)
export type Flagship = {
  name: string
  short: string
  icon: 'cataract' | 'glaucoma' | 'diabetic' | 'oct' | 'kids' | 'laser'
}

export const FLAGSHIPS: Flagship[] = [
  { name: 'Cataract Surgery', short: 'Clear away cloudy vision.', icon: 'cataract' },
  { name: 'Glaucoma Care', short: 'Surgery and medical management.', icon: 'glaucoma' },
  { name: 'Diabetic Eye Treatments', short: 'Protect your sight if you have sugar.', icon: 'diabetic' },
  { name: 'OCT & Eye Scans', short: 'Detailed imaging in clinic.', icon: 'oct' },
  { name: 'Myopia Management in Kids', short: 'Slow short-sightedness early.', icon: 'kids' },
  { name: 'Laser Eye Treatments', short: 'In-clinic laser procedures.', icon: 'laser' },
]

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Which branch should I go to?',
    a: 'Whichever is closer to you. Chaguanas (Mid Center Mall) suits Central and South; Tacarigua (Eastern Main Road) suits Tunapuna, Arima and the East. Both branches offer the same specialist care. If you need a specific test or procedure, call and we will guide you to the right day and branch.',
  },
  {
    q: 'What should I bring to my appointment?',
    a: 'Your ID, any glasses or contact lenses you use, a list of your current medications (including eye drops), and any previous eye reports or scans. If you have diabetes, bring your most recent blood sugar results if you have them.',
  },
  {
    q: 'Will my eyes be dilated? Can I drive after?',
    a: 'Many eye examinations use drops to widen the pupil. Your vision may be blurry and light-sensitive for a few hours, so it is best to bring someone to drive you home or arrange a ride.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes. Chaguanas has Mid Center Mall parking. Tacarigua has parking on site along the Eastern Main Road. Confirm when booking if you need step-free access.',
  },
  {
    q: 'Do you see children?',
    a: 'Yes. We offer Myopia Management in Kids and general eye examinations for children. Mention your child’s age when booking so we can allow enough time.',
  },
  {
    q: 'How do I book?',
    a: 'Call +1 868-290-0590 during clinic hours, or send a WhatsApp message anytime and we will reply to confirm. You can also use the booking form on this page, which sends your request to us on WhatsApp.',
  },
]
