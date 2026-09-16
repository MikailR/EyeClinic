import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { IconClose, IconMenu, IconWhatsApp } from './Icons'
import { whatsappUrl } from '../data'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#locations', label: 'Locations' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap site-header__inner">
        <a href="#top" className="logo" onClick={close}>
          <Logo />
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp />
            <span>WhatsApp</span>
          </a>
          <a className="btn btn--primary" href="#book">
            Book
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile">
        <div className="wrap">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={close}>
            Book a visit
          </a>
        </div>
      </nav>
    </header>
  )
}
