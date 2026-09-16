import { BRANCHES, DOCTORS, PHONE_DISPLAY, PHONE_TEL, mapsLink } from '../data/clinic'
import { EyeMark } from './Icons'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-cols">
          <div>
            <span className="brand" style={{ color: '#fff' }}>
              <EyeMark size={28} />
              <span className="brand-name">The Eye Clinic</span>
            </span>
            <h4>Call or WhatsApp</h4>
            <a className="tel" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <p style={{ marginTop: 10 }}>Eye specialist / eye surgeon · Trinidad</p>
          </div>

          {BRANCHES.map((b) => (
            <div key={b.id}>
              <h4>{b.name}</h4>
              <address>
                {b.address}
                <br />
                Trinidad &amp; Tobago
              </address>
              <a href={mapsLink(b)} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
          ))}
        </div>

        <p className="ftr-fine">
          {DOCTORS.map((d) => `${d.name}, ${d.qualifications}`).join(' · ')}
          <br />
          Clinic days differ by branch — confirm your day and time when you book. This site is for
          information only and is not medical advice.
        </p>
      </div>
    </footer>
  )
}
