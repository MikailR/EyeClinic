import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BranchStrip } from './components/BranchStrip'
import { Flagships, VisitSteps } from './components/Flagships'
import { Services } from './components/Services'
import { Doctors } from './components/Doctors'
import { Locations } from './components/Locations'
import { Faq } from './components/Faq'
import { Book } from './components/Book'
import { Footer } from './components/Footer'
import { StickyBar } from './components/StickyBar'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <BranchStrip />
        <Flagships />
        <VisitSteps />
        <Services />
        <Doctors />
        <Locations />
        <Faq />
        <Book />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
