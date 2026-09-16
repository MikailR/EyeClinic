import { doctors } from '../data'
import { StarIcon } from './Icons'

export default function Doctors() {
  return (
    <section id="doctors" className="section section--tint" aria-labelledby="doctors-title">
      <div className="container">
        <p className="eyebrow">Your doctors</p>
        <h2 id="doctors-title" className="section__title">
          Consultant ophthalmologists, trained in the UK and the Caribbean
        </h2>
        <p className="section__lead">
          The Eye Clinic is led by Dr. Shehenaz Z. Mohammed, with Dr. Kellita Dalrymple. Both are eye
          specialists and eye surgeons, and both consult at our Chaguanas and Tacarigua clinics.
        </p>

        <ul className="doctors">
          {doctors.map((d) => (
            <li key={d.name} className={`doctor ${d.principal ? 'doctor--principal' : ''}`}>
              <div className="photo-placeholder photo-placeholder--portrait" role="img" aria-label={`Portrait of ${d.name} — real photo to be supplied`}>
                <span>Real photo of {d.name.replace('Dr. ', 'Dr ')} goes here</span>
              </div>
              <div className="doctor__body">
                {d.principal && <p className="doctor__tag">Practice principal</p>}
                <h3 className="doctor__name">{d.name}</h3>
                <p className="doctor__creds">{d.credentials}</p>
                <p className="doctor__role">{d.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="rating">
          <StarIcon /> Rated 5.0 on Google by patients across Trinidad
        </p>
      </div>
    </section>
  )
}
