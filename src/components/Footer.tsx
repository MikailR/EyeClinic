import { BRANCHES, DOCTORS, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data'
import { EyeMark, PhoneIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#top" className="brand brand--footer">
            <EyeMark size={30} />
            <span className="brand__text">The Eye Clinic</span>
          </a>
          <p className="footer__tag">
            {DOCTORS[0].name}, {DOCTORS[0].credentials}
            <br />
            {DOCTORS[1].name}, {DOCTORS[1].credentials}
          </p>
          <div className="footer__contact">
            <a href={PHONE_TEL}>
              <PhoneIcon width={18} height={18} /> {PHONE_DISPLAY}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={18} height={18} /> WhatsApp
            </a>
          </div>
        </div>

        {BRANCHES.map((b) => (
          <address key={b.id} className="footer__branch">
            <strong>{b.name}</strong>
            {b.address.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span className="muted">Trinidad &amp; Tobago</span>
          </address>
        ))}
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} The Eye Clinic. Eye Specialists &amp; Eye Surgeons, Trinidad.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
