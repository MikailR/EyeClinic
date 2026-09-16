import { locations } from '../data'

export function BranchStrip() {
  return (
    <div className="wrap">
      <div className="branch-strip" aria-label="Clinic branches">
        {locations.map((loc) => (
          <article className="branch-card" key={loc.id}>
            <p className="name">{loc.name}</p>
            <p>{loc.address}</p>
            <p className="quiet">
              {loc.hoursLabel}. Confirm when booking.
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
