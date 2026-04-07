"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

// Static testimonials data - customer reviews with ratings
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Member for 3 years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "ENERGYM completely changed my life. I lost 40 pounds, gained confidence, and found a community that genuinely cares. The trainers here are incredible.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Member for 5 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "I have been to dozens of gyms over the years. Nothing compares to ENERGYM. The equipment, the atmosphere, and the coaching are all world-class.",
    stars: 5,
  },
  {
    name: "Marcus Williams",
    role: "Member for 1 year",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote:
      "I walked in as a complete beginner and never felt judged. My trainer built me a plan that actually works. Strongest I have ever been.",
    stars: 5,
  },
]

// Individual testimonial card component with scroll animation
function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0]
  index: number
}) {
  // Hook for scroll-triggered animation
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`flex flex-col border border-border bg-card p-7 transition-all duration-500 hover:border-primary/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
        {`"${t.quote}"`}
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <Image
          src={t.image}
          alt={`Portrait of ${t.name}`}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

// Main testimonials section component
export function Testimonials() {
  return (
    // Section with card background and padding
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading with label and title */}
        <SectionHeading
          label="Testimonials"
          title="Real People. Real Results."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
