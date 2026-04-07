"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

// Hero component - full-screen landing section with background image and CTA
// Features smooth fade-in animation and responsive design
export function Hero() {
  // State to trigger animation after component mounts
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    // Full-screen hero section with centered content
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image covering entire section */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="People training in a modern gym"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay with gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Main content container */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-20 text-center">
        {/* Animated badge */}
        <span
          className={`mb-6 inline-block border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Premium Performance Training
        </span>

        <h1
          className={`text-5xl font-black uppercase leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-balance">Stronger</span>
          <br />
          <span className="text-primary text-balance">Every Day</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Transform your body. Transform your life. World-class facilities,
          expert trainers, and a community that pushes you to be your best.
        </p>

        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button
            size="lg"
            className="bg-primary px-8 py-6 text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/membership">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/30 px-8 py-6 text-base font-bold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
            asChild
          >
            <Link href="/contact">Book Free Trial</Link>
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid w-full max-w-3xl grid-cols-3 divide-x divide-border border border-border bg-card/80 backdrop-blur-sm transition-all duration-700 delay-[900ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "10K+", label: "Active Members" },
            { value: "50+", label: "Expert Trainers" },
            { value: "15", label: "Years Strong" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-5">
              <span className="text-2xl font-black text-primary md:text-3xl">
                {stat.value}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
