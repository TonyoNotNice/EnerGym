import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CtaSection } from "@/components/cta-section"

// Home page component - main landing page of the gym website
// Composes all major sections in logical order for optimal user experience
export default function Home() {
  return (
    <main>
      {/* Hero section with compelling call-to-action */}
      <Hero />
      {/* About section explaining gym values and mission */}
      <About />
      {/* Customer testimonials for social proof */}
      <Testimonials />
      {/* Pricing plans for membership options */}
      <Pricing />
      {/* Final call-to-action to encourage sign-ups */}
      <CtaSection />
    </main>
  )
}
