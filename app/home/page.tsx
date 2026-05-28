
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HighlightsSection from './components/HighlightsSection'
import CTASection from './components/CTASection'
import ProblemSection from './components/ProblemSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CTASection />
    </main>
  )
}
