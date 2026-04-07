"use client"

import Link from "next/link"
import { Dumbbell, Zap, Clock, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build raw power with state-of-the-art free weights, machines, and Olympic platforms.",
  },
  {
    icon: Zap,
    title: "HIIT Workouts",
    description:
      "Torch calories and boost endurance with high-intensity interval sessions.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "From spinning to yoga, find your crew in our wide range of group fitness classes.",
  },
  {
    icon: Clock,
    title: "Open 24/7",
    description:
      "Train on your schedule. Our doors never close so your progress never stops.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Red accent line on hover */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <service.icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
    </div>
  )
}

export function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="What We Offer"
          title="Built for Results"
          description="ENERGYM is more than a gym. We combine elite equipment, expert coaches, and a relentless community to help you exceed every goal."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-primary/80"
          >
            View All Programs
            <span className="text-lg">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
