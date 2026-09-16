import { useState, type FormEvent } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, branches, whatsappLink } from '../data'
import { PhoneIcon, WhatsAppIcon } from './Icons'

type Form = {
  name: string
  phone: string
  branch: string
  reason: string
  timing: string
}

const initial: Form = { name: '', phone: '', branch: '', reason: '', timing: '' }

// Booking commitment: the form composes a WhatsApp message to the clinic.
// No backend is required and the patient sees exactly what will be sent.
export default function Book() {
  const [form, setForm] = useState<Form>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [sent, setSent] = useState(false)

  const update = (k: keyof Form) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const branchName = branches.find((b) => b.id === form.branch)?.name ?? 'either branch'

  const composed =
    `Hi, I'd like to book an eye appointment at The Eye Clinic.\n` +
    `Name: ${form.name.trim() || '—'}\n` +
    `Phone: ${form.phone.trim() || '—'}\n` +
    `Branch: ${branchName}\n` +
    (form.reason.trim() ? `Reason: ${form.reason.trim()}\n` : '') +
    (form.timing.trim() ? `Preferred time: ${form.timing.trim()}` : '')

  function validate(): boolean {
    const next: typeof errors = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (form.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a phone number we can reach you on.'
    if (!form.branch) next.branch = 'Choose a branch, or pick "Either".'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    window.open(whatsappLink(composed.trim()), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="book" className="section section--tint" aria-labelledby="book-title">
      <div className="container container--narrow">
        <p className="eyebrow">Book an appointment</p>
        <h2 id="book-title" className="section__title">
          Request your appointment
        </h2>
        <p className="section__lead">
          Fill in a few details and we'll open WhatsApp with your request ready to send. Prefer to
          talk? Call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> during clinic hours.
        </p>

        {sent ? (
          <div className="notice" role="status">
            <h3>Your request is ready in WhatsApp</h3>
            <p>
              If WhatsApp didn't open, tap the green button below to send it, or call us on{' '}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>. We'll reply with available days at {branchName}.
            </p>
            <div className="notice__actions">
              <a className="btn btn--whatsapp" href={whatsappLink(composed.trim())} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Open WhatsApp
              </a>
              <button type="button" className="btn btn--outline" onClick={() => setSent(false)}>
                Edit request
              </button>
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" value={form.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {errors.name && <p id="name-err" className="field__error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="phone">Phone or WhatsApp number</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="868-" value={form.phone} onChange={update('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
              {errors.phone && <p id="phone-err" className="field__error">{errors.phone}</p>}
            </div>

            <fieldset className="field">
              <legend>Preferred branch</legend>
              <div className="choices">
                {branches.map((b) => (
                  <label key={b.id} className={`choice ${form.branch === b.id ? 'choice--on' : ''}`}>
                    <input type="radio" name="branch" value={b.id} checked={form.branch === b.id} onChange={update('branch')} />
                    <span>{b.name}</span>
                  </label>
                ))}
                <label className={`choice ${form.branch === 'either' ? 'choice--on' : ''}`}>
                  <input type="radio" name="branch" value="either" checked={form.branch === 'either'} onChange={update('branch')} />
                  <span>Either</span>
                </label>
              </div>
              {errors.branch && <p className="field__error">{errors.branch}</p>}
            </fieldset>

            <div className="field">
              <label htmlFor="reason">
                What's the visit for? <span className="optional">(optional)</span>
              </label>
              <textarea id="reason" name="reason" rows={3} placeholder="e.g. blurry vision, diabetic eye check, cataract consultation" value={form.reason} onChange={update('reason')} />
            </div>

            <div className="field">
              <label htmlFor="timing">
                Days or times that suit you <span className="optional">(optional)</span>
              </label>
              <input id="timing" name="timing" placeholder="e.g. weekday mornings" value={form.timing} onChange={update('timing')} />
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--block">
              <WhatsAppIcon /> Send request on WhatsApp
            </button>
            <p className="form__alt">
              Or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> — no form needed.
            </p>
            <p className="form__privacy">
              Your details are only used to arrange your appointment. Nothing is stored on this website.
            </p>
          </form>
        )}

        <div className="book__phone">
          <a className="btn btn--outline btn--block" href={PHONE_TEL}>
            <PhoneIcon /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
