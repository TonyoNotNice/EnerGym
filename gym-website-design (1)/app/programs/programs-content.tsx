"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"
import { ArrowRight, Dumbbell, Zap, User, Users } from "lucide-react"

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw power and lean muscle with our comprehensive strength programs. From beginner barbell basics to advanced powerlifting, our coaches design periodized plans that deliver measurable gains every cycle.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Dumbbell,
    features: [
      "Olympic lifting platforms",
      "Periodized programming",
      "Strength assessments",
      "Competition prep available",
    ],
  },
  {
    title: "HIIT Workouts",
    description:
      "Torch calories, boost endurance, and build functional fitness with high-intensity interval training. Our HIIT sessions combine cardio and resistance for maximum results in minimal time.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Zap,
    features: [
      "30-45 minute sessions",
      "Heart rate monitored",
      "All fitness levels welcome",
      "Metabolic conditioning",
    ],
  },
  {
    title: "Personal Training",
    description:
      "Get one-on-one attention from certified trainers who build programs around your unique goals, schedule, and body. Accountability, expertise, and results -- guaranteed.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: User,
    features: [
      "Customized programs",
      "Nutrition guidance",
      "Body composition tracking",
      "Flexible scheduling",
    ],
  },
  {
    title: "Group Classes",
    description:
      "Find your crew in our energizing group sessions. From spinning and kickboxing to yoga and functional training, there is a class for every interest and fitness level.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: Users,
    features: [
      "30+ classes per week",
      "Expert instructors",
      "All skill levels",
      "Community atmosphere",
    ],
  },
]

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${!isEven ? "lg:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
          <program.icon className="h-6 w-6" />
        </div>
      </div>

      {/* Content */}
      <div className="lg:w-1/2">
        <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">
          {program.title}
        </h3>
        <div className="mt-2 h-1 w-12 bg-primary" />
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {program.description}
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
              <span className="h-1.5 w-1.5 bg-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
          asChild
        >
          <Link href="/contact">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ProgramsContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-card pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Our Programs"
            title="Train Your Way"
            description="Whatever your goal, we have a program designed to get you there. Explore our training options and find the perfect fit."
          />
        </div>
      </section>

      {/* Programs list */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-24">
            {programs.map((program, i) => (
              <ProgramCard key={program.title} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
            Not Sure Which Program <span className="text-primary">Is Right?</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Book a free consultation and our team will help you find the perfect training program for your goals.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 font-bold uppercase tracking-wide"
            asChild
          >
            <Link href="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
