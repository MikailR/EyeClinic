import { FAQS } from '../data'
import { ChevronIcon } from './Icons'

export default function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <p className="eyebrow">Good to know</p>
        <h2 id="faq-title">Before your visit</h2>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <ChevronIcon className="chev" width={20} height={20} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
