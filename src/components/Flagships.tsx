import type { ComponentType } from 'react'
import { flagships, type FlagshipId } from '../data'
import {
  IconArrow,
  IconCataract,
  IconDiabetic,
  IconGlaucoma,
  IconKids,
  IconLaser,
  IconScan,
} from './Icons'

const icons: Record<FlagshipId, ComponentType<{ className?: string }>> = {
  cataract: IconCataract,
  glaucoma: IconGlaucoma,
  diabetic: IconDiabetic,
  imaging: IconScan,
  myopia: IconKids,
  laser: IconLaser,
}

export function Flagships() {
  return (
    <section className="section" aria-labelledby="flag-title">
      <div className="wrap">
        <p className="section__eyebrow">What we see most</p>
        <h2 className="section__title" id="flag-title">
          Surgery, medical care, and scans — in one clinic
        </h2>
        <p className="section__lead">
          A short list of the work patients come in for. The full diagnostic and
          treatment lists are below, as they appear on our doors.
        </p>
        <div className="flag-grid">
          {flagships.map((item) => {
            const Icon = icons[item.id]
            return (
              <a className="flag" href="#services" key={item.id}>
                <span className="flag__icon">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </a>
            )
          })}
        </div>
        <a className="see-all" href="#services">
          See all tests &amp; treatments
          <IconArrow />
        </a>
      </div>
    </section>
  )
}

export function VisitSteps() {
  return (
    <section className="section section--foam" aria-labelledby="visit-title">
      <div className="wrap">
        <p className="section__eyebrow">A first visit</p>
        <h2 className="section__title" id="visit-title">
          Call, come in, leave with a plan
        </h2>
        <ol className="steps">
          <li className="step">
            <div>
              <h3>Book the way that suits you</h3>
              <p>Call, WhatsApp, or send the form. We’ll confirm branch and time.</p>
            </div>
          </li>
          <li className="step">
            <div>
              <h3>Tests on site</h3>
              <p>Acuity, fields, OCT, scans — whatever the doctor needs that day.</p>
            </div>
          </li>
          <li className="step">
            <div>
              <h3>A clear next step</h3>
              <p>Drops, laser, injections, surgery, or a follow-up. Plain language.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
