import { useState } from 'react'
import { FAQS } from '../data/clinic'
import { Chevron } from './Icons'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <p className="eyebrow">Before you come in</p>
        <h2 id="faq-h">Common questions</h2>

        <div style={{ marginTop: 18 }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className="faq-item" key={f.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <Chevron size={20} className={isOpen ? 'chev open' : 'chev'} />
                  </button>
                </h3>
                <p className="faq-a" id={`faq-a-${i}`} hidden={!isOpen}>
                  {f.a}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
