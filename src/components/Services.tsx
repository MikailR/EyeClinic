import { diagnostics, otherServicesNote, treatments } from '../data'

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <p className="section__eyebrow">From the clinic doors</p>
        <h2 className="section__title" id="services-title">
          Diagnostic tests and advanced eye care
        </h2>
        <p className="section__lead">
          These are the lists on our storefront — not a marketing menu. If you
          need something else, ask when you book.
        </p>
        <div className="panel-grid">
          <article className="panel">
            <div className="panel__head">
              <h3>Diagnostic tests &amp; imaging</h3>
              <p>On-site checks so we can see what’s going on.</p>
            </div>
            <ul className="panel__list">
              {diagnostics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <div className="panel__head">
              <h3>Advanced eye care</h3>
              <p>Procedures and treatments after consultation.</p>
            </div>
            <ul className="panel__list">
              {treatments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="panel__note">{otherServicesNote}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
