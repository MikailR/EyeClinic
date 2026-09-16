type LogoProps = {
  className?: string
  markClassName?: string
  stacked?: boolean
}

export function EyeMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 44"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 22C14 7.2 25.2 3 36 3c10.8 0 22 4.2 32.5 19C58 36.8 46.8 41 36 41 25.2 41 14 36.8 3.5 22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="22" r="11.2" fill="#1A8AD4" />
      <circle cx="36" cy="22" r="5.35" fill="#0A2F4A" />
      <circle cx="32.6" cy="18.6" r="2.15" fill="#fff" />
    </svg>
  )
}

export function Logo({ className, markClassName, stacked = false }: LogoProps) {
  return (
    <span className={`logo${stacked ? ' logo--stacked' : ''} ${className ?? ''}`.trim()}>
      <EyeMark className={`logo__mark ${markClassName ?? ''}`.trim()} />
      <span className="logo__word">The Eye Clinic</span>
    </span>
  )
}
