import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
)

export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

export const WhatsAppIcon = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8ZM8.6 7c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.2 4.9 4.3 2.4 1 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4l-.5-.3-1.9-.9c-.3-.1-.5-.1-.7.1l-.8 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.6-.8c.1-.2.1-.4 0-.6l-.8-2c-.2-.5-.4-.5-.6-.5h-.6Z" />
  </svg>
)

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const StarIcon = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="m12 2 3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8L12 2Z" />
  </svg>
)

export const ChevronIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
)

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
)

/** Brand mark — stylised blue eye, like the door decal. */
export const EyeMark = ({ size = 36, ...p }: P & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" {...p}>
    <path d="M6 32c7-11.5 16-17 26-17s19 5.5 26 17c-7 11.5-16 17-26 17S13 43.5 6 32Z" fill="#DCEBFA" stroke="#0B4F9C" strokeWidth="3.5" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="10.5" fill="#0B4F9C" />
    <circle cx="32" cy="32" r="4.5" fill="#062E5C" />
    <circle cx="36" cy="27.5" r="2.2" fill="#fff" />
    <path d="M12 44c6 5 12.5 7.5 20 7.5" stroke="#2C7BE5" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
)

/** Simple service pictograms for the flagship grid. */
export function ServiceIcon({ kind }: { kind: 'cataract' | 'glaucoma' | 'diabetic' | 'oct' | 'kids' | 'laser' }) {
  const s = { ...base, width: 28, height: 28 }
  switch (kind) {
    case 'cataract':
      return (
        <svg {...s}>
          <path d="M2.5 12c2.8-4.5 6-7 9.5-7s6.7 2.5 9.5 7c-2.8 4.5-6 7-9.5 7s-6.7-2.5-9.5-7Z" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 8.8v6.4" strokeDasharray="1.5 1.5" />
        </svg>
      )
    case 'glaucoma':
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2" />
        </svg>
      )
    case 'diabetic':
      return (
        <svg {...s}>
          <path d="M12 3s5.5 6 5.5 10.2A5.5 5.5 0 0 1 6.5 13.2C6.5 9 12 3 12 3Z" />
          <path d="M9.5 14.5c.3 1.3 1.2 2 2.5 2.2" />
        </svg>
      )
    case 'oct':
      return (
        <svg {...s}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M6 14c1.5-3 3-4.5 4.5-4.5S13 12 15 12s2.5-1.5 3-3" />
          <path d="M6 17h12" strokeDasharray="2 2" />
        </svg>
      )
    case 'kids':
      return (
        <svg {...s}>
          <circle cx="12" cy="9" r="4.5" />
          <path d="M4.5 20.5c1-3.7 4-5.5 7.5-5.5s6.5 1.8 7.5 5.5" />
          <path d="M9.8 8.8h.01M14.2 8.8h.01" strokeWidth="2.6" />
        </svg>
      )
    case 'laser':
      return (
        <svg {...s}>
          <path d="M3 20 14 9" />
          <path d="M14 9l3-3m0 0 2.5-2.5M17 6l2 2M17 6l-2-2" />
          <circle cx="7" cy="16" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}
