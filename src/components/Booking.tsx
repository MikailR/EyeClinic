import { useEffect, useRef, useState } from 'react'
import {
  ADVANCED_CARE,
  BRANCHES,
  DIAGNOSTIC_TESTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
  type Branch,
} from '../data/clinic'
import { Check, Phone, WhatsApp } from './Icons'

const TIMES = ['Morning', 'Afternoon', 'Any time'] as const
type TimeChoice = (typeof TIMES)[number]

type Form = {
  name: string
  phone: string
  branch: Branch['id']
  reason: string
  time: TimeChoice
  notes: string
}

const EMPTY: Form = {
  name: '',
  phone: '',
  branch: 'chaguanas',
  reason: 'Not sure — I need an eye check',
  time: 'Any time',
  notes: '',
}

function digits(s: string) {
  return s.replace(/\D/g, '')
}

function compose(f: Form): string {
  const b = BRANCHES.find((x) => x.id === f.branch) as Branch
  const lines = [
    "Hi, I'd like to book an eye appointment at The Eye Clinic.",
    '',
    `Name: ${f.name.trim()}`,
    `Phone: ${f.phone.trim()}`,
    `Branch: ${b.name} (${b.address})`,
    `Reason: ${f.reason}`,
    `Preferred time: ${f.time}`,
  ]
  if (f.notes.trim()) lines.push(`Notes: ${f.notes.trim()}`)
  return lines.join('\n')
}

export default function Booking({
  presetBranch,
  onConsumePreset,
}: {
  presetBranch: Branch['id'] | null
  onConsumePreset: () => void
}) {
  const [form, setForm] = useState<Form>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<'name' | 'phone', string>>>({})
  const [sentMessage, setSentMessage] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const sentRef = useRef<HTMLDivElement>(null)

  // "Book at Tacarigua" from the Locations section pre-fills the branch here.
  useEffect(() => {
    if (!presetBranch) return
    setForm((f) => ({ ...f, branch: presetBranch }))
    onConsumePreset()
  }, [presetBranch, onConsumePreset])

  useEffect(() => {
    if (sentMessage) sentRef.current?.focus()
  }, [sentMessage])

  function set<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const next: typeof errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (digits(form.phone).length < 7) next.phone = 'Please enter a phone number we can call back.'
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(next.name ? 'f-name' : 'f-phone')
      first?.focus()
      return
    }
    setSentMessage(compose(form))
    setCopied(false)
  }

  async function copy() {
    if (!sentMessage) return
    try {
      await navigator.clipboard.writeText(sentMessage)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const branch = BRANCHES.find((b) => b.id === form.branch) as Branch

  return (
    <section id="book" className="book" aria-labelledby="book-h">
      <div className="wrap">
        <p className="eyebrow">Book an appointment</p>
        <h2 id="book-h">Request your appointment</h2>
        <p className="lede">
          Fill this in and we will send it to the clinic on WhatsApp — someone answers and confirms
          your day and time. In a hurry? Just call{' '}
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>

        {sentMessage ? (
          <div className="sent" ref={sentRef} tabIndex={-1} style={{ marginTop: 20 }}>
            <span className="sent-ico" aria-hidden="true">
              <Check />
            </span>
            <h3>Your request is ready to send</h3>
            <p className="lede">
              Tap the green button to open WhatsApp with these details already typed out. Nothing is
              sent until you press send in WhatsApp.
            </p>

            <dl className="summary">
              <dt>Name</dt>
              <dd>{form.name}</dd>
              <dt>Phone</dt>
              <dd>{form.phone}</dd>
              <dt>Branch</dt>
              <dd>
                {branch.name} — {branch.address}
              </dd>
              <dt>Reason</dt>
              <dd>{form.reason}</dd>
              <dt>Preferred time</dt>
              <dd>{form.time}</dd>
              {form.notes.trim() && (
                <>
                  <dt>Notes</dt>
                  <dd>{form.notes}</dd>
                </>
              )}
            </dl>

            <div className="sent-actions">
              <a
                className="btn btn-primary"
                style={{ background: '#128c46' }}
                href={whatsappLink(sentMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={19} />
                Send on WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                <Phone size={18} />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: 6 }}>
              <button type="button" className="linkish" onClick={copy}>
                {copied ? 'Copied — paste it anywhere' : 'Copy the message instead'}
              </button>
              <button type="button" className="linkish" onClick={() => setSentMessage(null)}>
                Edit details
              </button>
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate style={{ marginTop: 20 }}>
            <div className="field">
              <label htmlFor="f-name">Your name</label>
              <input
                id="f-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'e-name' : undefined}
              />
              {errors.name && (
                <p className="err" id="e-name">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="f-phone">Phone number</label>
              <input
                id="f-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="868 000 0000"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? 'e-phone' : undefined}
              />
              {errors.phone && (
                <p className="err" id="e-phone">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="f-branch">Which branch?</label>
              <select
                id="f-branch"
                name="branch"
                value={form.branch}
                onChange={(e) => set('branch', e.target.value as Branch['id'])}
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} — {b.address}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="f-reason">
                What do you need? <span className="hint">(optional)</span>
              </label>
              <select
                id="f-reason"
                name="reason"
                value={form.reason}
                onChange={(e) => set('reason', e.target.value)}
              >
                <option>Not sure — I need an eye check</option>
                <optgroup label="Advanced eye care">
                  {ADVANCED_CARE.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </optgroup>
                <optgroup label="Diagnostic tests & imaging">
                  {DIAGNOSTIC_TESTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </optgroup>
                <option>Other — I will explain</option>
              </select>
            </div>

            <fieldset
              className="field"
              style={{ border: 0, padding: 0, margin: '16px 0 0', minWidth: 0 }}
            >
              <legend
                style={{
                  padding: 0,
                  fontSize: 14,
                  fontWeight: 650,
                  color: 'var(--blue-ink)',
                  marginBottom: 6,
                }}
              >
                Preferred time
              </legend>
              <div className="seg">
                {TIMES.map((t) => (
                  <label key={t} style={{ position: 'relative' }}>
                    <input
                      type="radio"
                      name="time"
                      value={t}
                      checked={form.time === t}
                      onChange={() => set('time', t)}
                    />
                    <span className="seg-face">{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="f-notes">
                Anything else? <span className="hint">(optional)</span>
              </label>
              <textarea
                id="f-notes"
                name="notes"
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                placeholder="E.g. I am diabetic, or my doctor referred me."
              />
            </div>

            <div className="form-foot">
              <button className="btn btn-primary btn-block" type="submit">
                Continue
              </button>
              <p className="fine">
                No account, no payment. We only use these details to call you back.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
