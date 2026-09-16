import { EyeMark, Phone, WhatsApp } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data/clinic'

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a className="brand" href="#top" aria-label="The Eye Clinic — home">
          <EyeMark size={30} />
          <span className="brand-name">The Eye Clinic</span>
        </a>
        <div className="hdr-actions">
          <a
            className="icon-btn"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message The Eye Clinic on WhatsApp"
          >
            <WhatsApp size={19} />
            <span className="lbl">WhatsApp</span>
          </a>
          <a
            className="icon-btn"
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call the clinic at ${PHONE_DISPLAY}`}
          >
            <Phone size={18} />
            <span className="lbl">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
