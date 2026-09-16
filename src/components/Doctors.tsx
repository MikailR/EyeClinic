import { DOCTORS } from '../data/clinic'
import { Person } from './Icons'

export default function Doctors() {
  return (
    <section id="doctors" className="docs" aria-labelledby="docs-h">
      <div className="wrap">
        <p className="eyebrow">Your doctors</p>
        <h2 id="docs-h">Seen by an eye surgeon, not a screen</h2>
        <p className="lede">
          The Eye Clinic is led by Dr. Shehenaz Z. Mohammed, with Dr. Kellita Dalrymple consulting
          and operating alongside her.
        </p>

        <div className="docs-grid" style={{ marginTop: 22 }}>
          {DOCTORS.map((d) => (
            <article className="doc" key={d.name}>
              <span className="avatar" aria-hidden="true">
                <Person size={30} />
              </span>
              <div>
                <h3>
                  {d.name}
                  {d.principal && <span className="pill">Principal</span>}
                </h3>
                <p className="quals">{d.qualifications}</p>
                <p className="role">{d.role}</p>
                <p className="bio">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="photo-note">
          Photo placeholders — real portraits of both doctors to be added before launch.
        </p>
      </div>
    </section>
  )
}
