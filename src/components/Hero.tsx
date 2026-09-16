import { PHONE_DISPLAY, PHONE_TEL, doctors } from "../data";
import { StarIcon } from "./Icons";

export default function Hero() {
  const principal = doctors[0];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">
            Eye specialists · Chaguanas &amp; Tacarigua, Trinidad
          </p>
          <h1 id="hero-title" className="hero__title">
            Specialist eye care and eye surgery, close to home.
          </h1>
          <p className="hero__lead">
            Cataract, glaucoma and diabetic eye treatment, plus full diagnostic
            testing — with <strong>{principal.name}</strong> and Dr. Kellita
            Dalrymple.
          </p>

          <div className="hero__cta">
            <a className="btn btn--white btn--lg" href="#book">
              Book an appointment
            </a>
            <p className="hero__call">
              or call{" "}
              <a href={PHONE_TEL} className="hero__phone">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <ul className="hero__trust" aria-label="Why patients choose us">
            <li>
              <StarIcon /> 5.0 on Google
            </li>
            <li>Two clinics in Trinidad</li>
            <li>No referral needed</li>
          </ul>
        </div>
        <div
          className="photo-placeholder hero__visual"
          role="img"
          aria-label="Clinic photograph — real photo of the consulting room or OCT scanner to be supplied"
        >
          <span>
            Real photo goes here: consulting room, OCT scanner, or the clinic
            entrance (landscape)
          </span>
        </div>
      </div>
    </section>
  );
}
