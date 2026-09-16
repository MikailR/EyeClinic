import { PHONE_DISPLAY, PHONE_TEL } from '../data/clinic'
import { Phone } from './Icons'

export default function StickyBar({ onBook }: { onBook: () => void }) {
  return (
    <nav className="bar" aria-label="Quick actions">
      <div className="bar-in">
        <a className="btn btn-call" href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
          <span className="sm">
            <Phone size={13} /> Call
          </span>
          <span className="lg">{PHONE_DISPLAY}</span>
        </a>
        <button className="btn btn-primary" type="button" onClick={onBook}>
          Book appointment
        </button>
      </div>
    </nav>
  )
}
