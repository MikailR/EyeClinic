type IconProps = {
  className?: string
}

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
  focusable: false as const,
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.8 3.8h2.3l1.4 3.4-1.8 1.1a12.5 12.5 0 0 0 5.9 5.9l1.1-1.8 3.4 1.4v2.3c0 .9-.7 1.7-1.6 1.8-7.2.8-13.3-5.3-12.5-12.5.1-.9.9-1.6 1.8-1.6Z" />
    </svg>
  )
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M12.04 2.5A9.45 9.45 0 0 0 2.6 11.9c0 1.66.44 3.28 1.27 4.71L2.5 21.5l5.03-1.32a9.45 9.45 0 0 0 4.51 1.15h.01a9.46 9.46 0 0 0 0-18.83Zm0 17.3h-.01a7.85 7.85 0 0 1-4-.1l-.29-.1-2.98.78.8-2.9-.16-.3a7.84 7.84 0 1 1 6.64 2.62Zm4.3-5.87c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.93-.14.16-.28.18-.51.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.4-1.31-1.63-.14-.24-.01-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function IconStar({ className }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M12 2.8 14.7 8l5.8.8-4.2 4.1 1 5.8L12 16.2 6.7 18.7l1-5.8L3.5 8.8 9.3 8 12 2.8Z" />
    </svg>
  )
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCataract({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M4.2 9.5c2.2 1 4.8 1.5 7.8 1.5s5.6-.5 7.8-1.5" />
    </svg>
  )
}

export function IconGlaucoma({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 12c2.8-5 6.4-7.5 9-7.5S18.2 7 21 12c-2.8 5-6.4 7.5-9 7.5S5.8 17 3 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5.2V3M12 21v-2.2M4.8 8.2 3.4 7M20.6 7l-1.4 1.2" />
    </svg>
  )
}

export function IconDiabetic({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c3.6 4 6.5 7.3 6.5 10.6A6.5 6.5 0 0 1 5.5 14.1C5.5 10.8 8.4 7.5 12 3.5Z" />
      <path d="M10 14.2c.4 1.4 1.4 2.3 3 2.5" />
    </svg>
  )
}

export function IconScan({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M7 12h2.2M14.8 12H17" />
    </svg>
  )
}

export function IconKids({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.1" />
      <path d="M6.5 19.5c.4-3.4 2.6-5.2 5.5-5.2s5.1 1.8 5.5 5.2" />
      <path d="M4.5 10.5c1.4-2 3-3 5-3.3M19.5 10.5c-1.4-2-3-3-5-3.3" />
    </svg>
  )
}

export function IconLaser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h7M13 12h7" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 4v3M12 17v3M6.2 6.2l2 2M15.8 15.8l2 2M17.8 6.2l-2 2M8.2 15.8l-2 2" />
    </svg>
  )
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12.5 9.5 17 19 7.5" />
    </svg>
  )
}

export function IconExternal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 5h5v5M19 5l-9 9" />
      <path d="M11 6H6.5A1.5 1.5 0 0 0 5 7.5v10A1.5 1.5 0 0 0 6.5 19h10a1.5 1.5 0 0 0 1.5-1.5V13" />
    </svg>
  )
}
