import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data'
import { CalendarIcon, PhoneIcon, StarIcon, WhatsAppIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="eyebrow">Eye Specialists &amp; Eye Surgeons · Trinidad</p>
        <h1 id="hero-title">
          Specialist eye care in <span className="nowrap">Chaguanas</span> and{' '}
          <span className="nowrap">Tacarigua</span>
        </h1>
        <p className="hero__lede">
          Consultant ophthalmologists <strong>Dr. Shehenaz Z. Mohammed</strong> and{' '}
          <strong>Dr. Kellita Dalrymple</strong>. Eye tests, scans, cataract and glaucoma
          surgery, diabetic eye care and children’s myopia management — all in one clinic.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href="#book">
            <CalendarIcon />
            Book an appointment
          </a>
          <div className="hero__secondary">
            <a className="btn btn--ghost" href={PHONE_TEL}>
              <PhoneIcon width={20} height={20} />
              {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon width={20} height={20} />
              WhatsApp us
            </a>
          </div>
        </div>

        <ul className="trust" aria-label="Why patients choose us">
          <li>
            <StarIcon width={16} height={16} className="trust__star" />
            <span>
              <strong>5.0</strong> on Google
            </span>
          </li>
          <li>Two branches: Central &amp; East</li>
          <li>Consultation, tests &amp; surgery on site</li>
        </ul>
      </div>

      <div className="hero__art" aria-hidden="true">
        {/* Abstract eye / lens rings — pure CSS, no imagery to download */}
        <span className="ring ring--1" />
        <span className="ring ring--2" />
        <span className="ring ring--3" />
        <span className="pupil" />
      </div>
    </section>
  )
}
