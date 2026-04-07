"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

export function CtaSection() {
  const [ref, isVisible] = useScrollAnimate<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`bg-card py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl text-balance">
          Your Transformation
          <br />
          <span className="text-primary">Starts Today</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Book a free trial session and experience firsthand why thousands of
          members call ENERGYM home. No commitment, no pressure -- just results.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary px-10 py-6 text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/contact">
              Book Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/30 px-10 py-6 text-base font-bold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
