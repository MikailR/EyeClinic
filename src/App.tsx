import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Locations from './components/Locations'
import Booking from './components/Booking'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'
import type { Branch } from './data/clinic'

export default function App() {
  const [presetBranch, setPresetBranch] = useState<Branch['id'] | null>(null)

  // Every "Book" in the page lands on the same request form — one committed path.
  const goToBooking = useCallback((branch?: Branch['id']) => {
    if (branch) setPresetBranch(branch)
    const el = document.getElementById('book')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [])

  const consumePreset = useCallback(() => setPresetBranch(null), [])

  return (
    <>
      <a className="skip" href="#services">
        Skip to services
      </a>
      <Header />
      <main>
        <Hero onBook={goToBooking} />
        <TrustStrip />
        <Services onBook={goToBooking} />
        <Doctors />
        <Locations onBook={goToBooking} />
        <Booking presetBranch={presetBranch} onConsumePreset={consumePreset} />
        <Faq />
        <FinalCta onBook={goToBooking} />
      </main>
      <Footer />
      <StickyBar onBook={goToBooking} />
    </>
  )
}
