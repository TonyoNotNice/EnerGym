"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"
import { Instagram, ArrowRight } from "lucide-react"

// Static data for gym trainers with their profiles and specializations
const trainers = [
  {
    name: "Marcus Cole",
    specialization: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Former Division I athlete with 12 years of coaching experience. Marcus specializes in building explosive power and functional strength for athletes and everyday warriors alike.",
    certifications: ["CSCS", "NSCA-CPT", "USAW Level 2"],
    instagram: "#",
  },
  {
    name: "Elena Rivera",
    specialization: "HIIT & Functional Training",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "High-energy coach with a passion for metabolic conditioning. Elena designs sessions that push limits while keeping things fun, inclusive, and fiercely effective.",
    certifications: ["ACE-CPT", "CrossFit L2", "TRX Certified"],
    instagram: "#",
  },
  {
    name: "James Park",
    specialization: "Bodybuilding & Nutrition",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Competition-winning bodybuilder turned coach. James combines precise programming with deep nutrition science to sculpt physiques and transform lifestyles.",
    certifications: ["NASM-CPT", "Precision Nutrition L1", "IFBB Pro Card"],
    instagram: "#",
  },
  {
    name: "Aisha Thompson",
    specialization: "Yoga & Recovery",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Certified yoga instructor and mobility specialist. Aisha helps members recover smarter, move better, and build the flexibility foundation that supports all training.",
    certifications: ["RYT-500", "FMS Level 2", "NASM-CES"],
    instagram: "#",
  },
]

// Individual trainer card component with hover effects and scroll animation
function TrainerCard({
  trainer,
  index,
}: {
  trainer: (typeof trainers)[0]
  index: number
}) {
  // Hook for scroll-triggered animation with staggered delay
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    // Card container with hover effects and animation
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={trainer.image}
          alt={`Portrait of ${trainer.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={trainer.instagram}
            aria-label={`${trainer.name} Instagram`}
            className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-transform hover:scale-110"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {trainer.specialization}
        </span>
        <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-foreground">
          {trainer.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {trainer.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trainer.certifications.map((cert) => (
            <span
              key={cert}
              className="border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main trainers page content component
export function TrainersContent() {
  return (
    <main>
      {/* Hero section for trainers page */}
      <section className="bg-card pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section heading */}
          <SectionHeading
            label="Our Team"
            title="Meet Your Coaches"
            description="Our certified trainers bring world-class expertise, relentless energy, and genuine care to every session. They are not just coaches -- they are your partners in progress."
          />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, i) => (
              <TrainerCard key={trainer.name} trainer={trainer} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
            Want to Train <span className="text-primary">1-on-1?</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Book a free introductory session with any of our trainers. Find the right fit and start seeing results faster.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 font-bold uppercase tracking-wide"
            asChild
          >
            <Link href="/contact">
              Book a Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
