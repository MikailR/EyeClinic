import { Pin, Star, Tick } from './Icons'

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Why patients choose The Eye Clinic">
      <div className="wrap">
        <ul className="trust-list">
          <li>
            <span className="tick stars" aria-hidden="true">
              <Star size={17} />
            </span>
            <span>
              <strong>5.0 on Google</strong> — from patients across Trinidad.
            </span>
          </li>
          <li>
            <span className="tick" aria-hidden="true">
              <Tick />
            </span>
            <span>
              <strong>Two eye surgeons</strong> — UK and UWI trained, MRCOphth and FRCS.
            </span>
          </li>
          <li>
            <span className="tick" aria-hidden="true">
              <Pin size={17} />
            </span>
            <span>
              <strong>Two branches</strong> — Central and the East–West Corridor.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
