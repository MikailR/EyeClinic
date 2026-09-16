import { EyeMark } from './Logo'
import { IconCalendar, IconStar } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL, clinic } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div>
          <p className="section__eyebrow">Chaguanas · Tacarigua</p>
          <h1 id="hero-title">The Eye Clinic</h1>
          <p className="hero__lead">Specialist eye care and surgery in Trinidad.</p>
          <p className="hero__who">
            <strong>Dr. Shehenaz Z. Mohammed</strong>, MRCOphth (Lond.) and{' '}
            <strong>Dr. Kellita Dalrymple</strong>, FRCS (Glasg.) — eye specialists
            and surgeons. Mid Center Mall, Chaguanas, and 12 Eastern Main Road,
            Tacarigua.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#book">
              <IconCalendar />
              Book a visit
            </a>
          </div>
          <div className="hero__meta">
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            <span className="stars" aria-label={clinic.googleRating}>
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <span>{clinic.googleRating}</span>
            </span>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <EyeMark className="logo__mark" />
        </div>
      </div>
    </section>
  )
}
