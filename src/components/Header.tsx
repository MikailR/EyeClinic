import { useEffect, useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data'
import { CloseIcon, EyeMark, MenuIcon, PhoneIcon, WhatsAppIcon } from './Icons'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#doctors', label: 'Our doctors' },
  { href: '#locations', label: 'Locations' },
  { href: '#faq', label: 'FAQ' },
  { href: '#book', label: 'Book' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the menu on Escape and lock scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="The Eye Clinic — home">
          <EyeMark size={34} />
          <span className="brand__text">The Eye Clinic</span>
        </a>

        <nav className="nav nav--desktop" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="btn btn--ghost btn--sm header__phone" href={PHONE_TEL}>
            <PhoneIcon width={18} height={18} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            className="btn btn--whatsapp btn--sm"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
          >
            <WhatsAppIcon width={20} height={20} />
            <span className="hide-sm">WhatsApp</span>
          </a>
          <button
            type="button"
            className="icon-btn nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="menu" id="mobile-menu">
          <nav className="menu__nav container" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={PHONE_TEL} className="menu__phone" onClick={() => setOpen(false)}>
              <PhoneIcon width={20} height={20} /> Call {PHONE_DISPLAY}
            </a>
          </nav>
          <button type="button" className="menu__backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  )
}
