import { PHONE_LOCAL, PHONE_TEL } from '../data'
import { IconCalendar, IconPhone } from './Icons'

export function StickyBar() {
  return (
    <div className="sticky-cta" role="region" aria-label="Call or book">
      <a className="btn btn--ghost" href={PHONE_TEL}>
        <IconPhone />
        Call {PHONE_LOCAL}
      </a>
      <a className="btn btn--primary" href="#book">
        <IconCalendar />
        Book
      </a>
    </div>
  )
}
