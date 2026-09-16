import { doctors } from '../data'

export function Doctors() {
  return (
    <section className="section section--foam" id="doctors" aria-labelledby="doctors-title">
      <div className="wrap">
        <p className="section__eyebrow">Your surgeons</p>
        <h2 className="section__title" id="doctors-title">
          Two eye specialists, one practice
        </h2>
        <p className="section__lead">
          Dr. Shehenaz Z. Mohammed leads the clinic. Dr. Kellita Dalrymple
          practises alongside her. Real photographs will replace these
          placeholders.
        </p>
        <div className="doc-grid">
          {doctors.map((doc) => (
            <article className="doc" key={doc.id}>
              <div
                className="doc__photo"
                aria-label={`${doc.name} — photo to come`}
              >
                {doc.initials}
                <span className="label">Photo to come</span>
              </div>
              <div>
                {doc.lead ? <p className="doc__badge">Practice principal</p> : null}
                <h3>{doc.name}</h3>
                <p className="doc__cred">{doc.credentials}</p>
                <p className="doc__role">{doc.role}</p>
                <p className="doc__note">{doc.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
