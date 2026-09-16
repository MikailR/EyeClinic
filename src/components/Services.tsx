import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, diagnostics, flagships, treatments, whatsappLink } from '../data'
import { ChevronIcon, PhoneIcon, WhatsAppIcon } from './Icons'

export default function Services() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2 id="services-title" className="section__title">
          Advanced eye care in Trinidad
        </h2>
        <p className="section__lead">
          From routine eye tests to surgery, all in one clinic. These are the treatments patients ask
          for most.
        </p>

        <ul className="flagships">
          {flagships.map((f) => (
            <li key={f.title} className="flagship">
              <h3>{f.title}</h3>
              <p>{f.blurb}</p>
            </li>
          ))}
        </ul>

        <div className="all-services">
          <button
            type="button"
            className="btn btn--outline btn--block"
            aria-expanded={showAll}
            aria-controls="all-services-panel"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? 'Hide full list' : 'See all tests & treatments'}
            <span className={`chev ${showAll ? 'chev--up' : ''}`}>
              <ChevronIcon />
            </span>
          </button>

          <div id="all-services-panel" className="all-services__panel" hidden={!showAll}>
            <div className="service-groups">
              <div className="service-group">
                <h3>Diagnostic tests &amp; imaging</h3>
                <ul>
                  {diagnostics.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="service-group">
                <h3>Advanced eye care</h3>
                <ul>
                  {treatments.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="service-group__note">Other services available upon consultation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-strip">
          <p>
            Not sure which test you need? Tell us what's happening with your eyes and we'll advise.
          </p>
          <div className="cta-strip__actions">
            <a
              className="btn btn--whatsapp"
              href={whatsappLink("Hi, I'd like some advice on which eye test or treatment I need at The Eye Clinic.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Ask on WhatsApp
            </a>
            <a className="btn btn--outline" href={PHONE_TEL}>
              <PhoneIcon /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
