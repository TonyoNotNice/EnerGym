"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started.",
    features: [
      "Full gym access",
      "Locker room & showers",
      "Free Wi-Fi",
      "1 guest pass per month",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/month",
    description: "Our most popular plan.",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 PT session monthly",
      "Nutrition guidance",
      "Priority booking",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "The ultimate experience.",
    features: [
      "Everything in Pro",
      "4 PT sessions monthly",
      "Recovery suite access",
      "Custom meal plans",
      "Unlimited guest passes",
    ],
    featured: false,
  },
]

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`relative flex flex-col border p-8 transition-all duration-500 ${
        plan.featured
          ? "border-primary bg-card shadow-lg shadow-primary/10 scale-[1.02]"
          : "border-border bg-card hover:border-primary/40"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-5 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-black uppercase tracking-wide text-foreground">
        {plan.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-black text-foreground">{plan.price}</span>
        <span className="text-sm text-muted-foreground">{plan.period}</span>
      </div>

      <div className="my-6 h-px bg-border" />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`mt-8 w-full py-5 font-bold uppercase tracking-wide ${
          plan.featured
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-muted text-foreground border border-border hover:border-primary hover:text-primary"
        }`}
        asChild
      >
        <Link href="/membership">Get Started</Link>
      </Button>
    </div>
  )
}

export function Pricing() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Membership Plans"
          title="Invest in Yourself"
          description="No hidden fees. No long-term contracts. Cancel anytime."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
