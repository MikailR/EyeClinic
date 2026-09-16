import { Phone, Star, WhatsApp } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data/clinic'

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-h">
      <div className="wrap hero-in">
        <p className="eyebrow">Chaguanas &amp; Tacarigua, Trinidad</p>
        <h1 id="hero-h">
          Eye specialist care
          <span className="accent">and eye surgery.</span>
        </h1>
        <p className="hero-sub">
          Eye tests, scans and surgery with <strong>Dr. Shehenaz Z. Mohammed</strong> (MRCOphth
          Lond.) and <strong>Dr. Kellita Dalrymple</strong> (FRCS Glasg.) — two branches, one phone
          call.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" type="button" onClick={onBook}>
            Book an appointment
          </button>
          <div className="hero-cta-row">
            <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
              <Phone size={19} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn-wa"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={19} />
              WhatsApp
            </a>
          </div>
        </div>

        <p className="hero-note">
          <span className="stars" aria-hidden="true">
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
            <Star size={15} />
          </span>{' '}
          5.0 on Google · <a href="#locations">Mid Center Mall, Chaguanas</a> ·{' '}
          <a href="#locations">12 Eastern Main Road, Tacarigua</a>
        </p>
      </div>
    </section>
  )
}
