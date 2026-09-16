import { Logo } from './Logo'
import { PHONE_DISPLAY, PHONE_TEL, doctors, locations, whatsappUrl } from '../data'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p style={{ marginTop: '0.7rem' }}>
            Specialist eye care and surgery in Trinidad. {doctors[0].name} and{' '}
            {doctors[1].name}.
          </p>
        </div>
        <div>
          <h2>Call</h2>
          <p>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          </p>
          <p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp the clinic
            </a>
          </p>
        </div>
        {locations.map((loc) => (
          <div key={loc.id}>
            <h2>{loc.name}</h2>
            <p>{loc.address}</p>
            <p>{loc.hoursLabel}. Confirm when booking.</p>
          </div>
        ))}
      </div>
      <div className="wrap">
        <p className="tiny">
          Prototype marketing site for The Eye Clinic, Trinidad &amp; Tobago.
          No patient records are stored here. Photographs of the doctors are
          placeholders pending real portraits.
        </p>
      </div>
    </footer>
  )
}
