import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data/clinic'
import { Phone, WhatsApp } from './Icons'

export default function FinalCta({ onBook }: { onBook: () => void }) {
  return (
    <section className="final" aria-labelledby="final-h">
      <div className="wrap">
        <h2 id="final-h">Worried about your eyes? Don't wait.</h2>
        <p>
          Blurry vision, floaters, pain or a change you can't explain — get it looked at by an eye
          specialist.
        </p>
        <div className="final-cta">
          <button className="btn btn-primary" type="button" onClick={onBook}>
            Book an appointment
          </button>
          <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
            <Phone size={19} />
            Call {PHONE_DISPLAY}
          </a>
          <a
            className="btn btn-ghost"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp size={19} />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  )
}
