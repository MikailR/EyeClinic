type P = { size?: number; className?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
})

export const Phone = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 13.1 10.9 21 19.3 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.2 1.2 0 0 0-.9-1.2l-3.2-.8a1.2 1.2 0 0 0-1.2.4l-1 1.2a13.6 13.6 0 0 1-5.7-5.7l1.2-1a1.2 1.2 0 0 0 .4-1.2l-.8-3.2A1.2 1.2 0 0 0 6.6 3Z" />
  </svg>
)

export const WhatsApp = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.2h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.03-5.1-2.89-6.96A9.77 9.77 0 0 0 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.36c0-4.5 3.67-8.17 8.19-8.17a8.13 8.13 0 0 1 5.78 2.4 8.1 8.1 0 0 1 2.4 5.78c0 4.51-3.67 8.19-8.18 8.19Zm4.49-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.19-.53.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.04s.87 2.37 1 2.53c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.46-.07 1.46-.6 1.66-1.18.21-.57.21-1.06.15-1.17-.06-.11-.22-.18-.47-.3Z" />
  </svg>
)

export const Pin = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M20 10.5c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.8" />
  </svg>
)

export const Clock = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </svg>
)

export const Car = ({ size = 20 }: P) => (
  <svg {...base(size)}>
    <path d="M5 16.5V19a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-2.5m16 0V19a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-2.5" />
    <path d="M3 16.5h18v-4.2a2 2 0 0 0-.2-.9l-1.9-3.9A2 2 0 0 0 17.1 6H6.9a2 2 0 0 0-1.8 1.1L3.2 11.4a2 2 0 0 0-.2.9Z" />
    <path d="M6.5 13.2h2m7 0h2" />
  </svg>
)

export const Chevron = ({ size = 20, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Tick = ({ size = 17 }: P) => (
  <svg {...base(size)} strokeWidth={2.4}>
    <path d="m4.5 12.5 4.8 4.8L19.5 7" />
  </svg>
)

export const Check = ({ size = 26 }: P) => (
  <svg {...base(size)} strokeWidth={2.2}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="m8 12.3 2.8 2.8L16.2 9.6" />
  </svg>
)

export const Star = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.44 6.2 20.5l1.1-6.47L2.6 9.45l6.5-.95L12 2.6Z" />
  </svg>
)

export const Person = ({ size = 30 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8.2" r="3.9" />
    <path d="M4.6 20.4a7.6 7.6 0 0 1 14.8 0" />
  </svg>
)

/** Brand mark: the blue eye from the clinic door. */
export const EyeMark = ({ size = 30 }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden focusable="false">
    <path
      d="M3 21c5.2-7.6 10.6-11.4 17-11.4S31.8 13.4 37 21c-5.2 7.6-10.6 11.4-17 11.4S8.2 28.6 3 21Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="21" r="6.2" fill="currentColor" />
    <circle cx="17.9" cy="18.9" r="1.9" fill="#fff" opacity=".85" />
    <path
      d="M6 10.4C10 6.6 14.8 4.7 20.4 4.7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      opacity=".45"
    />
  </svg>
)

/* --- service card glyphs --- */

export const IcoCataract = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <path d="M2.6 12C6.3 6.9 9.9 4.4 12 4.4S17.7 6.9 21.4 12c-3.7 5.1-7.3 7.6-9.4 7.6S6.3 17.1 2.6 12Z" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M9.6 9.6c1.8 0 3.3 1.5 3.3 3.3" opacity=".5" />
  </svg>
)

export const IcoGlaucoma = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 3.6v2.6M12 17.8v2.6M3.6 12h2.6M17.8 12h2.6" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
)

export const IcoDiabetic = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <path d="M3 13.4h3.3l1.8-4.6 2.6 8 2.2-5.3 1.4 1.9H21" />
    <path d="M4.2 18.6h15.6" opacity=".45" />
  </svg>
)

export const IcoScan = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <path d="M3.4 8V5.4a2 2 0 0 1 2-2H8M16 3.4h2.6a2 2 0 0 1 2 2V8M20.6 16v2.6a2 2 0 0 1-2 2H16M8 20.6H5.4a2 2 0 0 1-2-2V16" />
    <path d="M6.4 12h11.2" />
  </svg>
)

export const IcoChild = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="7.4" r="3.4" />
    <path d="M5.6 20.6a6.4 6.4 0 0 1 12.8 0" />
    <path d="M9.6 6.6h.01M14.4 6.6h.01" strokeWidth={2.6} />
  </svg>
)

export const IcoLaser = ({ size = 24 }: P) => (
  <svg {...base(size)}>
    <path d="M12 2.6v6.2" />
    <path d="M7.4 5.2 9.9 9.4M16.6 5.2 14.1 9.4" opacity=".55" />
    <path d="M4.6 12.6h14.8l-2.6 7.6a1.4 1.4 0 0 1-1.3.9H8.5a1.4 1.4 0 0 1-1.3-.9Z" />
  </svg>
)
