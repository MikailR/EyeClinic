import { faqs } from '../data'
import { ChevronIcon } from './Icons'

export default function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <p className="eyebrow">Before your visit</p>
        <h2 id="faq-title" className="section__title">
          Common questions
        </h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <span className="faq__chev">
                  <ChevronIcon />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
