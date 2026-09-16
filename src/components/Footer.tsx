import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_DEFAULT, branches, doctors } from '../data'
import { EyeMark } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            <EyeMark size={28} light />
            <span>The Eye Clinic</span>
          </div>
          <p className="footer__tag">Eye specialists and eye surgeons in Trinidad.</p>
          <ul className="footer__doctors">
            {doctors.map((d) => (
              <li key={d.name}>
                {d.name} — {d.credentials}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
              WhatsApp the clinic
            </a>
          </p>
        </div>

        {branches.map((b) => (
          <div key={b.id}>
            <h3>{b.name}</h3>
            <address>
              {b.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <p className="footer__hours">{b.hoursSummary}. Confirm when booking.</p>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">
        <p>© {year} The Eye Clinic, Trinidad &amp; Tobago.</p>
        <p>Website prototype — placeholders mark where real clinic photos will go.</p>
      </div>
    </footer>
  )
}
