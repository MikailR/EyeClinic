import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  doctors,
  locations,
  visitReasons,
  whatsappUrl,
} from '../data'
import { IconCalendar, IconPhone, IconWhatsApp } from './Icons'

type FormState = {
  name: string
  phone: string
  branch: string
  doctor: string
  reason: string
  day: string
  notes: string
}

const empty: FormState = {
  name: '',
  phone: '',
  branch: '',
  doctor: 'No preference',
  reason: '',
  day: 'First available',
  notes: '',
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please put your full name.'
  if (!/^[\d+\s()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = 'A phone number we can reach you on.'
  }
  if (!values.branch) errors.branch = 'Choose a branch — or either.'
  if (!values.reason) errors.reason = 'Tell us why you’re coming in.'
  return errors
}

function buildMessage(values: FormState): string {
  const lines = [
    "Hi, I'd like to book an eye appointment at The Eye Clinic.",
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Branch: ${values.branch}`,
    `Doctor: ${values.doctor}`,
    `Reason: ${values.reason}`,
    `Preferred day: ${values.day}`,
  ]
  if (values.notes.trim()) lines.push(`Notes: ${values.notes.trim()}`)
  return lines.join('\n')
}

export function Book() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<FormState | null>(null)

  const wa = useMemo(
    () => (submitted ? whatsappUrl(buildMessage(submitted)) : whatsappUrl()),
    [submitted],
  )

  useEffect(() => {
    const apply = () => {
      const id = sessionStorage.getItem('preferred-branch')
      if (!id) return
      const loc = locations.find((item) => item.id === id)
      if (loc) {
        setValues((v) => ({ ...v, branch: `${loc.name} — ${loc.address}` }))
        setSubmitted(null)
      }
      sessionStorage.removeItem('preferred-branch')
    }
    apply()
    window.addEventListener('prefill-branch', apply)
    window.addEventListener('hashchange', apply)
    return () => {
      window.removeEventListener('prefill-branch', apply)
      window.removeEventListener('hashchange', apply)
    }
  }, [])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted(values)
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }))
  }

  return (
    <section className="section" id="book" aria-labelledby="book-title">
      <div className="wrap">
        <p className="section__eyebrow">Appointments</p>
        <h2 className="section__title" id="book-title">
          Book a visit
        </h2>
        <p className="section__lead">
          Send a request and we’ll confirm by phone or WhatsApp. Nothing is
          charged here, and a slot is not held until we reply.
        </p>
        <div className="book-layout">
          {submitted ? (
            <div className="success" role="status">
              <h3>Request ready</h3>
              <p>
                This prototype doesn’t sit on the clinic’s booking system.
                Send the details on WhatsApp, or call — we’ll take it from
                there.
              </p>
              <dl>
                <dt>Name</dt>
                <dd>{submitted.name}</dd>
                <dt>Phone</dt>
                <dd>{submitted.phone}</dd>
                <dt>Branch</dt>
                <dd>{submitted.branch}</dd>
                <dt>Doctor</dt>
                <dd>{submitted.doctor}</dd>
                <dt>Reason</dt>
                <dd>{submitted.reason}</dd>
                <dt>Preferred day</dt>
                <dd>{submitted.day}</dd>
              </dl>
              <div className="success__actions">
                <a className="btn btn--whatsapp" href={wa} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp />
                  Send on WhatsApp
                </a>
                <a className="btn btn--primary" href={PHONE_TEL}>
                  <IconPhone />
                  Call {PHONE_DISPLAY}
                </a>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setSubmitted(null)
                    setValues(empty)
                  }}
                >
                  Start another request
                </button>
              </div>
            </div>
          ) : (
            <form
              className={`form${Object.keys(errors).length ? ' is-invalid' : ''}`}
              onSubmit={onSubmit}
              noValidate
            >
              <div className="field">
                <label htmlFor="name">
                  Full name <span className="req">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  onChange={(e) => set('name', e.target.value)}
                />
                {errors.name ? <p className="error">{errors.name}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="phone">
                  Phone <span className="req">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="868…"
                  value={values.phone}
                  aria-invalid={Boolean(errors.phone)}
                  onChange={(e) => set('phone', e.target.value)}
                />
                {errors.phone ? <p className="error">{errors.phone}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="branch">
                  Branch <span className="req">*</span>
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={values.branch}
                  aria-invalid={Boolean(errors.branch)}
                  onChange={(e) => set('branch', e.target.value)}
                >
                  <option value="">Select…</option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={`${loc.name} — ${loc.address}`}>
                      {loc.name} — {loc.address}
                    </option>
                  ))}
                  <option value="Either branch">Either branch</option>
                </select>
                {errors.branch ? <p className="error">{errors.branch}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="doctor">Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={values.doctor}
                  onChange={(e) => set('doctor', e.target.value)}
                >
                  <option>No preference</option>
                  {doctors.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="reason">
                  Reason for visit <span className="req">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={values.reason}
                  aria-invalid={Boolean(errors.reason)}
                  onChange={(e) => set('reason', e.target.value)}
                >
                  <option value="">Select…</option>
                  {visitReasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.reason ? <p className="error">{errors.reason}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="day">Preferred day</label>
                <select
                  id="day"
                  name="day"
                  value={values.day}
                  onChange={(e) => set('day', e.target.value)}
                >
                  <option>First available</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="notes">Anything we should know</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={values.notes}
                  onChange={(e) => set('notes', e.target.value)}
                />
              </div>
              <p className="form__hint">
                Chaguanas is busier weekdays and Saturday. Tacarigua is heavier
                Mondays and Wednesdays. We’ll confirm the exact time.
              </p>
              <button type="submit" className="btn btn--primary btn--block">
                <IconCalendar />
                Request appointment
              </button>
            </form>
          )}
          <aside className="book-aside">
            <div className="aside-card">
              <h3>Prefer to talk</h3>
              <p>Same number for both branches.</p>
              <a className="phone-plain" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
              <div className="loc__actions">
                <a className="btn btn--ghost" href={PHONE_TEL}>
                  <IconPhone />
                  Call
                </a>
                <a className="btn btn--whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="aside-card">
              <h3>What happens next</h3>
              <ol>
                <li>We read your request.</li>
                <li>We confirm branch, doctor, and time.</li>
                <li>You come in with glasses and any old reports.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
