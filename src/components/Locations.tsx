import { locations } from '../data'
import { IconExternal, IconPin } from './Icons'

export function Locations() {
  return (
    <section className="section" id="locations" aria-labelledby="locations-title">
      <div className="wrap">
        <p className="section__eyebrow">Two branches</p>
        <h2 className="section__title" id="locations-title">
          Chaguanas and Tacarigua
        </h2>
        <p className="section__lead">
          Same phone number for both. Hours differ — we will confirm a time
          when you book rather than guess from a sign.
        </p>
        <div className="loc-grid">
          {locations.map((loc) => (
            <article className="loc" key={loc.id}>
              <p className="loc__area">{loc.area}</p>
              <h3>{loc.name}</h3>
              <address>
                <IconPin /> {loc.address}
              </address>
              <div className="loc__hours">
                <strong>{loc.hoursLabel}</strong>
                <span>{loc.hoursNote}</span>
              </div>
              <p>{loc.parking}</p>
              <div className="loc__actions">
                <a
                  className="btn btn--ghost"
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconExternal />
                  Directions
                </a>
                <a
                  className="btn btn--primary"
                  href="#book"
                  onClick={() => {
                    sessionStorage.setItem('preferred-branch', loc.id)
                    window.dispatchEvent(new Event('prefill-branch'))
                  }}
                >
                  Book this branch
                </a>
              </div>
            </article>
          ))}
        </div>
        <figure className="storefront">
          <img
            src={`${import.meta.env.BASE_URL}storefront.jpg`}
            alt="Glass doors of The Eye Clinic, with the blue eye mark and both surgeons’ names on the door, and service lists on either side."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            The clinic storefront — diagnostic tests on the left, advanced eye
            care on the right, both surgeons named on the door.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
