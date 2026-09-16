import { PHONE_TEL } from '../data'
import { CalendarIcon, PhoneIcon } from './Icons'

// Always-visible mobile action bar. Hidden on wide screens where the header carries the CTAs.
export default function StickyBar() {
  return (
    <div className="sticky-bar" role="region" aria-label="Quick actions">
      <a className="btn btn--outline sticky-bar__btn" href={PHONE_TEL}>
        <PhoneIcon />
        <span>Call clinic</span>
      </a>
      <a className="btn btn--primary sticky-bar__btn" href="#book">
        <CalendarIcon />
        <span>Book</span>
      </a>
    </div>
  )
}
