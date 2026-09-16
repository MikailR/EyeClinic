import { useState } from 'react'
import { BRANCHES, PHONE_DISPLAY, PHONE_TEL, mapsLink, type Branch } from '../data/clinic'
import { Car, Clock, Phone, Pin } from './Icons'

export default function Locations({ onBook }: { onBook: (branch: Branch['id']) => void }) {
  const [active, setActive] = useState<Branch['id']>('chaguanas')
  const branch = BRANCHES.find((b) => b.id === active) as Branch

  return (
    <section id="locations" aria-labelledby="loc-h">
      <div className="wrap">
        <p className="eyebrow">Find us</p>
        <h2 id="loc-h">Two branches in Trinidad</h2>
        <p className="lede">
          Same doctors, same clinic. Pick whichever branch is easier for you to reach.
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
              className="tab"
              onClick={() => setActive(b.id)}
            >
              {b.name}
            </button>
          ))}
        </div>

        <div
          className="branch"
          role="tabpanel"
          id={`panel-${branch.id}`}
          aria-labelledby={`tab-${branch.id}`}
        >
          <h3>The Eye Clinic — {branch.name}</h3>
          <p className="area">{branch.area}</p>

          <div className="branch-rows">
            <p className="row">
              <Pin size={19} />
              <span>
                <span className="k">Address</span>
                {branch.address}
              </span>
            </p>
            <p className="row">
              <Clock size={19} />
              <span>
                <span className="k">Clinic days</span>
                {branch.daysNote}
              </span>
            </p>
            <p className="row">
              <Car size={19} />
              <span>
                <span className="k">Parking</span>
                {branch.parking}
              </span>
            </p>
          </div>

          <div className="branch-cta">
            <button className="btn btn-primary" type="button" onClick={() => onBook(branch.id)}>
              Book at {branch.name}
            </button>
            <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn-ghost"
              href={mapsLink(branch)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pin size={18} />
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
