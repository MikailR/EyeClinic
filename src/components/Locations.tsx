import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, branches, mapsLink, whatsappLink } from '../data'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export default function Locations() {
  const [active, setActive] = useState(branches[0].id)
  const branch = branches.find((b) => b.id === active) ?? branches[0]

  return (
    <section id="locations" className="section" aria-labelledby="locations-title">
      <div className="container">
        <p className="eyebrow">Where to find us</p>
        <h2 id="locations-title" className="section__title">
          Two clinics: Chaguanas and Tacarigua
        </h2>
        <p className="section__lead">
          Same doctors, same phone number. Pick the branch that's easier for you to reach.
        </p>

        <div className="tabs" role="tablist" aria-label="Choose a branch">
          {branches.map((b) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              id={`tab-${b.id}`}
              aria-selected={active === b.id}
              aria-controls={`panel-${b.id}`}
              className={`tab ${active === b.id ? 'tab--active' : ''}`}
              onClick={() => setActive(b.id)}
            >
              {b.name}
            </button>
          ))}
        </div>

        {branches.map((b) => (
          <div
            key={b.id}
            role="tabpanel"
            id={`panel-${b.id}`}
            aria-labelledby={`tab-${b.id}`}
            hidden={b.id !== branch.id}
            className="branch"
          >
            <div className="branch__grid">
              <div className="branch__info">
                <h3 className="branch__name">
                  The Eye Clinic, {b.name} <span className="branch__area">— {b.area}</span>
                </h3>
                <address className="branch__address">
                  <PinIcon />
                  <span>
                    {b.address.map((line) => (
                      <span key={line} className="branch__line">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>

                <dl className="branch__hours">
                  <dt>Clinic days</dt>
                  <dd>
                    {b.hoursSummary}
                    <span className="branch__hours-note">{b.hoursNote}</span>
                  </dd>
                  <dt>Phone</dt>
                  <dd>
                    <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
                  </dd>
                </dl>

                <div className="branch__actions">
                  <a className="btn btn--outline" href={mapsLink(b)} target="_blank" rel="noopener noreferrer">
                    <PinIcon /> Get directions
                  </a>
                  <a
                    className="btn btn--whatsapp"
                    href={whatsappLink(`Hi, I'd like to book an eye appointment at The Eye Clinic, ${b.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon /> Book {b.name} on WhatsApp
                  </a>
                </div>
              </div>

              <div className="photo-placeholder photo-placeholder--wide" role="img" aria-label={`Photo of the ${b.name} clinic entrance — real photo to be supplied`}>
                <span>Real photo of the {b.name} clinic entrance goes here</span>
              </div>
            </div>
          </div>
        ))}

        <div className="cta-strip cta-strip--blue">
          <p>Ready to visit? Call us and we'll book you into the nearest branch.</p>
          <div className="cta-strip__actions">
            <a className="btn btn--white" href={PHONE_TEL}>
              <PhoneIcon /> Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn--ghost" href="#book">
              Book online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
