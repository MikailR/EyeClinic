import { PHONE_DISPLAY, PHONE_TEL } from '../data'
import { CalendarIcon, PhoneIcon } from './Icons'

/** Always-visible mobile action bar. Hidden on wide screens (see CSS). */
export default function StickyBar() {
  return (
    <div className="sticky" role="region" aria-label="Quick actions">
      <a className="sticky__btn sticky__btn--call" href={PHONE_TEL}>
        <PhoneIcon />
        <span>
          <span className="sticky__label">Call clinic</span>
          <span className="sticky__sub">{PHONE_DISPLAY}</span>
        </span>
      </a>
      <a className="sticky__btn sticky__btn--book" href="#book">
        <CalendarIcon />
        <span>
          <span className="sticky__label">Book</span>
          <span className="sticky__sub">appointment</span>
        </span>
      </a>
    </div>
  )
}
