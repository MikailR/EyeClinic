export const PHONE_DISPLAY = '868-290-0590'
export const PHONE_TEL = '+18682900590'
export const WHATSAPP_NUMBER = '18682900590'

export const WHATSAPP_DEFAULT_TEXT =
  "Hi, I'd like to book an eye appointment at The Eye Clinic."

export function whatsappLink(text: string = WHATSAPP_DEFAULT_TEXT): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export type Doctor = {
  name: string
  qualifications: string
  role: string
  principal?: boolean
  bio: string
}

/** Names and credentials exactly as they appear on the clinic door. */
export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Shehenaz Z. Mohammed',
    qualifications: 'M.B.B.S (UWI), MRCOphth (Lond.)',
    role: 'Eye Specialist / Eye Surgeon',
    principal: true,
    bio: 'Dr. Mohammed leads The Eye Clinic and sees patients at both the Chaguanas and Tacarigua branches — from a first eye test right through to cataract, glaucoma and laser surgery.',
  },
  {
    name: 'Dr. Kellita Dalrymple',
    qualifications: 'M.B.B.S, FICO, FRCS (Ophth) (Glasg.)',
    role: 'Eye Specialist / Eye Surgeon',
    bio: 'Dr. Dalrymple consults and operates alongside Dr. Mohammed, so you have two eye surgeons behind your care. Ask which doctor is in when you call to book.',
  },
]

export type Branch = {
  id: 'chaguanas' | 'tacarigua'
  name: string
  area: string
  address: string
  /** Deliberately not invented: real weekly schedule is confirmed on the phone. */
  daysNote: string
  mapQuery: string
  parking: string
}

export const BRANCHES: Branch[] = [
  {
    id: 'chaguanas',
    name: 'Chaguanas',
    area: 'Central Trinidad',
    address: 'Mid Center Mall, Southern Main Road, Chaguanas',
    daysNote: 'Open most weekdays and Saturday. Exact times: confirm when booking.',
    mapQuery: 'The Eye Clinic, Mid Center Mall, Southern Main Road, Chaguanas, Trinidad',
    parking: 'Mall parking on site, off the Southern Main Road.',
  },
  {
    id: 'tacarigua',
    name: 'Tacarigua',
    area: 'Tunapuna / East–West Corridor',
    address: '12 Eastern Main Road, Tacarigua',
    daysNote: 'Clinic days are mainly Monday and Wednesday. Exact times: confirm when booking.',
    mapQuery: 'The Eye Clinic, 12 Eastern Main Road, Tacarigua, Trinidad',
    parking: 'Street-side parking on the Eastern Main Road, near Tunapuna.',
  },
]

export function mapsLink(branch: Branch): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`
}

/** Services are taken verbatim from the clinic storefront panels. Nothing added. */
export const DIAGNOSTIC_TESTS = [
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

export const ADVANCED_CARE = [
  'Cataract Surgery',
  'Glaucoma Surgery and Medical Management',
  'Myopia Management in Kids',
  'Pterygium excision and graft',
  'Laser Eye Treatments',
  'Diabetic Eye Treatments',
  'Eye Injections',
  'Chalazion / Stye excision',
] as const

export type Flagship = {
  title: string
  blurb: string
  icon: 'cataract' | 'glaucoma' | 'diabetic' | 'scan' | 'child' | 'laser'
  group: 'care' | 'tests'
}

/** Six flagships for the homepage — each one is on the storefront list above. */
export const FLAGSHIPS: Flagship[] = [
  {
    title: 'Cataract Surgery',
    blurb: 'Clouded, foggy vision assessed and treated by an eye surgeon.',
    icon: 'cataract',
    group: 'care',
  },
  {
    title: 'Glaucoma Surgery and Medical Management',
    blurb: 'Pressure checks, drops and surgery to protect the sight you still have.',
    icon: 'glaucoma',
    group: 'care',
  },
  {
    title: 'Diabetic Eye Treatments',
    blurb: 'For diabetics — regular eye checks, laser and injections when needed.',
    icon: 'diabetic',
    group: 'care',
  },
  {
    title: 'Optical Coherence Tomography (OCT)',
    blurb: 'Detailed scan of the retina, done right here in the clinic.',
    icon: 'scan',
    group: 'tests',
  },
  {
    title: 'Myopia Management in Kids',
    blurb: 'Short-sightedness in children — checked early and managed.',
    icon: 'child',
    group: 'care',
  },
  {
    title: 'Laser Eye Treatments',
    blurb: 'In-clinic laser treatment for the eye conditions that need it.',
    icon: 'laser',
    group: 'care',
  },
]

export const OTHER_SERVICES_NOTE = 'Other services available upon consultation.'

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'Which branch should I go to?',
    a: 'Whichever is easier for you — Chaguanas if you are in Central, Tacarigua if you are along the East–West Corridor. The same doctors see patients at both. If your test or surgery has to happen at a particular branch, we will tell you when you book.',
  },
  {
    q: 'Do I need an appointment?',
    a: 'Yes, please call or WhatsApp first. Clinic days differ by branch, so a quick call saves you a wasted trip.',
  },
  {
    q: 'What should I bring?',
    a: 'A valid ID, your current glasses or contact lenses, any eye drops or medication you use, and your referral letter if a doctor sent you. Diabetics should bring recent blood sugar results if you have them.',
  },
  {
    q: 'Will my eyes be dilated? Can I drive after?',
    a: 'Many eye exams and scans need dilating drops, and your vision stays blurry and light-sensitive for a few hours afterwards. Plan to have someone drive you, and bring dark glasses.',
  },
  {
    q: 'Where do I park?',
    a: 'Chaguanas has mall parking on site at Mid Center Mall. In Tacarigua there is street-side parking along the Eastern Main Road.',
  },
  {
    q: 'How long does a visit take?',
    a: 'Allow about an hour and a half, more if you need scans on the day. Ask when you call and we will give you a better idea for your appointment.',
  },
]
