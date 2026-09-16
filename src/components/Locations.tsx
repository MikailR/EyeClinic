import { useState } from 'react'
import { BRANCHES, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data'
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export default function Locations() {
  const [active, setActive] = useState(BRANCHES[0].id)
  const branch = BRANCHES.find((b) => b.id === active) ?? BRANCHES[0]

  return (
    <section className="section" id="locations" aria-labelledby="locations-title">
      <div className="container">
        <p className="eyebrow">Where to find us</p>
        <h2 id="locations-title">Two branches, one phone number</h2>
        <p className="section__lede">
          Call <a href={PHONE_TEL} className="link-strong">{PHONE_DISPLAY}</a> for either branch.
        </p>

        <div className="tabs" role="tablist" aria-label="Choose a branch">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              role="tab"
              type="button"
              id={`tab-${b.id}`}
              aria-selected={active === b.id}
              aria-controls={`panel-${b.id}`}
              className={`tab ${active === b.id ? 'tab--active' : ''}`}
              onClick={() => setActive(b.id)}
            >
              <span className="tab__name">{b.name}</span>
              <span className="tab__sub">{b.short}</span>
            </button>
          ))}
        </div>

        <div
          className="branch"
          role="tabpanel"
          id={`panel-${branch.id}`}
          aria-labelledby={`tab-${branch.id}`}
        >
          <div className="branch__map" aria-hidden="true">
            <PinIcon width={40} height={40} />
            <span>{branch.name}</span>
            <small>{branch.area}</small>
          </div>

          <div className="branch__info">
            <div className="branch__row">
              <PinIcon className="branch__ico" />
              <address>
                <strong>The Eye Clinic — {branch.name}</strong>
                <br />
                {branch.address.join(', ')}
                <br />
                <span className="muted">{branch.landmarks}</span>
              </address>
            </div>

            <div className="branch__row">
              <ClockIcon className="branch__ico" />
              <div>
                <strong>Clinic hours</strong>
                <table className="hours">
                  <tbody>
                    {branch.hours.map((h) => (
                      <tr key={h.days}>
                        <th scope="row">{h.days}</th>
                        <td>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="muted small">{branch.hoursNote}</p>
              </div>
            </div>

            <div className="branch__actions">
              <a
                className="btn btn--outline"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions <ArrowIcon width={18} height={18} />
              </a>
              <a className="btn btn--ghost" href={PHONE_TEL}>
                <PhoneIcon width={18} height={18} /> Call
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink(`Hi, I'd like to book an eye appointment at The Eye Clinic (${branch.name} branch).`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon width={18} height={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
