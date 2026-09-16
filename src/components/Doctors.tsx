import { DOCTORS } from '../data'

export default function Doctors() {
  const [principal, ...team] = DOCTORS
  return (
    <section className="section section--tint" id="doctors" aria-labelledby="doctors-title">
      <div className="container">
        <p className="eyebrow">Your doctors</p>
        <h2 id="doctors-title">Meet {principal.name}</h2>
        <p className="section__lede">
          {principal.title}. Leading The Eye Clinic across both branches.
        </p>

        <article className="doctor doctor--principal">
          <div className="doctor__photo" role="img" aria-label={`Photo placeholder for ${principal.name}`}>
            <span className="doctor__initials">{principal.initials}</span>
            <span className="doctor__photo-label">Photo of {principal.shortName} to be added</span>
          </div>
          <div className="doctor__body">
            <h3>{principal.name}</h3>
            <p className="doctor__creds">{principal.credentials}</p>
            <p className="doctor__role">{principal.role}</p>
            <p>{principal.bio}</p>
          </div>
        </article>

        {team.map((d) => (
          <article className="doctor" key={d.name}>
            <div className="doctor__photo doctor__photo--sm" role="img" aria-label={`Photo placeholder for ${d.name}`}>
              <span className="doctor__initials">{d.initials}</span>
              <span className="doctor__photo-label">Photo to be added</span>
            </div>
            <div className="doctor__body">
              <h3>{d.name}</h3>
              <p className="doctor__creds">{d.credentials}</p>
              <p className="doctor__role">{d.role} · {d.title}</p>
              <p>{d.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
