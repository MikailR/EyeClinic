import { useState } from 'react'
import {
  ADVANCED_CARE,
  DIAGNOSTIC_TESTS,
  FLAGSHIPS,
  OTHER_SERVICES_NOTE,
  type Flagship,
} from '../data/clinic'
import {
  Chevron,
  IcoCataract,
  IcoChild,
  IcoDiabetic,
  IcoGlaucoma,
  IcoLaser,
  IcoScan,
  Tick,
} from './Icons'

const GLYPH: Record<Flagship['icon'], (p: { size?: number }) => JSX.Element> = {
  cataract: IcoCataract,
  glaucoma: IcoGlaucoma,
  diabetic: IcoDiabetic,
  scan: IcoScan,
  child: IcoChild,
  laser: IcoLaser,
}

export default function Services({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <section id="services" aria-labelledby="services-h">
      <div className="wrap">
        <p className="eyebrow">Tests &amp; treatments</p>
        <h2 id="services-h">What we treat</h2>
        <p className="lede">
          Everything from a first eye test to surgery, under one roof. These six are what patients
          come to us for most.
        </p>

        <ul className="cards">
          {FLAGSHIPS.map((s) => {
            const Glyph = GLYPH[s.icon]
            return (
              <li className="card" key={s.title}>
                <span className="card-ico" aria-hidden="true">
                  <Glyph size={23} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
              </li>
            )
          })}
        </ul>

        <div className="disclosure">
          <button
            type="button"
            className="disclosure-btn"
            aria-expanded={open}
            aria-controls="all-services"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? 'Hide the full list' : 'See all tests & treatments'}</span>
            <Chevron className={open ? 'chev open' : 'chev'} />
          </button>

          <div id="all-services" className="disclosure-body" hidden={!open}>
            <div className="list-cols">
              <div className="list-group">
                <h3>Diagnostic tests &amp; imaging</h3>
                <ul className="ticks">
                  {DIAGNOSTIC_TESTS.map((t) => (
                    <li key={t}>
                      <span className="tick" aria-hidden="true">
                        <Tick size={16} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="list-group">
                <h3>Advanced eye care</h3>
                <ul className="ticks">
                  {ADVANCED_CARE.map((t) => (
                    <li key={t}>
                      <span className="tick" aria-hidden="true">
                        <Tick size={16} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="note-line">{OTHER_SERVICES_NOTE}</p>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={onBook}
              style={{ marginTop: 18 }}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
