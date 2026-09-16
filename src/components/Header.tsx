import { useEffect, useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DEFAULT } from '../data'
import { EyeMark, PhoneIcon, WhatsAppIcon } from './Icons'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#locations', label: 'Locations' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header">
      <div className="container header__row">
        <a href="#top" className="brand" aria-label="The Eye Clinic — home">
          <EyeMark size={30} light />
          <span>The Eye Clinic</span>
        </a>

        <nav className="header__nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={PHONE_TEL}>
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="btn btn--whatsapp btn--sm" href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <a className="btn btn--white btn--sm header__book" href="#book">
            Book
          </a>
          <button
            type="button"
            className="header__menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
            <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)}>
            Book an appointment
          </a>
        </nav>
        <div className="mobile-menu__contact">
          <a className="btn btn--white" href={PHONE_TEL}>
            <PhoneIcon /> Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn--whatsapp" href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Message on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
