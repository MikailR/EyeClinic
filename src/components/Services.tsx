import { useState } from 'react'
import {
  ADVANCED_CARE,
  DIAGNOSTIC_TESTS,
  FLAGSHIPS,
  OTHER_SERVICES_NOTE,
  PHONE_DISPLAY,
  PHONE_TEL,
  type Service,
} from '../data'
import { ArrowIcon, CheckIcon, ChevronIcon, PhoneIcon, ServiceIcon } from './Icons'

function ServiceList({ items, id }: { items: Service[]; id: string }) {
  return (
    <ul className="svc-list" id={id}>
      {items.map((s) => (
        <li key={s.name}>
          <CheckIcon width={18} height={18} className="svc-list__check" />
          <div>
            <span className="svc-list__name">{s.name}</span>
            {s.blurb && <span className="svc-list__blurb">{s.blurb}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Services() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2 id="services-title">Tests, scans and eye surgery in one clinic</h2>
        <p className="section__lede">
          From a routine eye check to cataract surgery, both branches are equipped for
          diagnosis and treatment.
        </p>

        <ul className="flagships" aria-label="Featured services">
          {FLAGSHIPS.map((f) => (
            <li key={f.name} className="flagship">
              <span className="flagship__icon">
                <ServiceIcon kind={f.icon} />
              </span>
              <h3>{f.name}</h3>
              <p>{f.short}</p>
            </li>
          ))}
        </ul>

        <div className="svc-toggle">
          <button
            type="button"
            className="btn btn--outline"
            aria-expanded={showAll}
            aria-controls="all-services"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? 'Hide full list' : 'See all tests & treatments'}
            <ChevronIcon className={`chev ${showAll ? 'chev--up' : ''}`} width={20} height={20} />
          </button>
        </div>

        {showAll && (
          <div className="svc-panels" id="all-services">
            <div className="svc-panel">
              <h3 className="svc-panel__title">Diagnostic tests &amp; imaging</h3>
              <ServiceList items={DIAGNOSTIC_TESTS} id="diagnostics" />
            </div>
            <div className="svc-panel">
              <h3 className="svc-panel__title">Advanced eye care</h3>
              <ServiceList items={ADVANCED_CARE} id="advanced" />
              <p className="svc-panel__note">{OTHER_SERVICES_NOTE}</p>
            </div>
          </div>
        )}

        <div className="inline-cta">
          <p>
            Not sure which test or treatment you need? <strong>Start with a consultation.</strong>
          </p>
          <div className="inline-cta__actions">
            <a className="btn btn--primary" href="#book">
              Book a consultation <ArrowIcon width={18} height={18} />
            </a>
            <a className="btn btn--ghost" href={PHONE_TEL}>
              <PhoneIcon width={18} height={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
