import { faqs } from '../data'

export function Faq() {
  return (
    <section className="section section--foam" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <p className="section__eyebrow">Before you come</p>
        <h2 className="section__title" id="faq-title">
          Common questions
        </h2>
        <p className="section__lead">
          Parking, what to bring, and which branch. If your question isn’t
          here, call or WhatsApp — that’s faster than guessing.
        </p>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
