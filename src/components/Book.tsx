import { useMemo, useState, type FormEvent } from 'react'
import {
  ADVANCED_CARE,
  BRANCHES,
  DIAGNOSTIC_TESTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from '../data'
import { CheckIcon, PhoneIcon, WhatsAppIcon } from './Icons'

/**
 * Booking intent. Decision (per brief): the form composes a WhatsApp message
 * and opens wa.me — no backend needed, and WhatsApp is the highest-trust
 * conversational channel for T&T patients. Phone is always shown alongside.
 */

const REASONS = [
  'General eye check / consultation',
  ...ADVANCED_CARE.map((s) => s.name),
  ...DIAGNOSTIC_TESTS.map((s) => s.name),
  'Something else',
]

const TIMES = ['Any time', 'Morning', 'Afternoon', 'Saturday']

export default function Book() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [branch, setBranch] = useState<string>('Either branch')
  const [reason, setReason] = useState(REASONS[0])
  const [time, setTime] = useState(TIMES[0])
  const [note, setNote] = useState('')
  const [sent, setSent] = useState(false)
  const [touched, setTouched] = useState(false)

  const valid = name.trim().length >= 2 && phone.replace(/\D/g, '').length >= 7

  const message = useMemo(() => {
    const lines = [
      `Hi, I'd like to book an eye appointment at The Eye Clinic.`,
      `Name: ${name.trim() || '—'}`,
      `Phone: ${phone.trim() || '—'}`,
      `Branch: ${branch}`,
      `Reason: ${reason}`,
      `Preferred time: ${time}`,
    ]
    if (note.trim()) lines.push(`Notes: ${note.trim()}`)
    return lines.join('\n')
  }, [name, phone, branch, reason, time, note])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="section section--tint" id="book" aria-labelledby="book-title">
      <div className="container book">
        <div className="book__intro">
          <p className="eyebrow">Book an appointment</p>
          <h2 id="book-title">Tell us when suits you</h2>
          <p className="section__lede">
            Fill in the short form and we’ll open WhatsApp with your request ready to send.
            Prefer to talk? Call us on{' '}
            <a href={PHONE_TEL} className="link-strong">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <ul className="book__points">
            <li><CheckIcon width={18} height={18} /> We reply on WhatsApp to confirm your slot</li>
            <li><CheckIcon width={18} height={18} /> No account or app download needed</li>
            <li><CheckIcon width={18} height={18} /> Choose Chaguanas or Tacarigua</li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate aria-describedby="form-help">
          <p id="form-help" className="visually-hidden">
            All fields except notes are needed. Submitting opens WhatsApp with your message prefilled.
          </p>

          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input
              id="f-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={touched && name.trim().length < 2}
              required
            />
            {touched && name.trim().length < 2 && <span className="field__err">Please enter your name.</span>}
          </div>

          <div className="field">
            <label htmlFor="f-phone">Phone number</label>
            <input
              id="f-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="e.g. 868 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={touched && phone.replace(/\D/g, '').length < 7}
              required
            />
            {touched && phone.replace(/\D/g, '').length < 7 && (
              <span className="field__err">Please enter a phone number we can reach you on.</span>
            )}
          </div>

          <fieldset className="field">
            <legend>Branch</legend>
            <div className="chips">
              {['Either branch', ...BRANCHES.map((b) => b.name)].map((b) => (
                <label key={b} className={`chip ${branch === b ? 'chip--on' : ''}`}>
                  <input
                    type="radio"
                    name="branch"
                    value={b}
                    checked={branch === b}
                    onChange={() => setBranch(b)}
                  />
                  {b}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="f-reason">Reason for visit</label>
            <select id="f-reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)}>
              {REASONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>

          <fieldset className="field">
            <legend>Preferred time</legend>
            <div className="chips">
              {TIMES.map((t) => (
                <label key={t} className={`chip ${time === t ? 'chip--on' : ''}`}>
                  <input type="radio" name="time" value={t} checked={time === t} onChange={() => setTime(t)} />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="f-note">
              Anything else? <span className="muted">(optional)</span>
            </label>
            <textarea
              id="f-note"
              name="note"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. I have diabetes, or this is for my child"
            />
          </div>

          <button type="submit" className="btn btn--whatsapp btn--lg btn--block">
            <WhatsAppIcon /> Send request on WhatsApp
          </button>

          {sent && (
            <p className="form__ok" role="status">
              <CheckIcon width={18} height={18} /> WhatsApp should have opened with your message. If it
              didn’t,{' '}
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                tap here
              </a>{' '}
              or call {PHONE_DISPLAY}.
            </p>
          )}

          <p className="form__alt">
            Rather call? <a href={PHONE_TEL}><PhoneIcon width={16} height={16} /> {PHONE_DISPLAY}</a>
          </p>
        </form>
      </div>
    </section>
  )
}
