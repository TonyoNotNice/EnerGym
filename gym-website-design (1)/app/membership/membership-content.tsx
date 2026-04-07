"use client"

import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Get moving with full gym access and essential amenities.",
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room & showers", included: true },
      { text: "Free Wi-Fi", included: true },
      { text: "1 guest pass per month", included: true },
      { text: "Group classes", included: false },
      { text: "Personal training", included: false },
      { text: "Nutrition guidance", included: false },
      { text: "Recovery suite", included: false },
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/month",
    description: "The complete package for dedicated athletes.",
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room & showers", included: true },
      { text: "Free Wi-Fi", included: true },
      { text: "3 guest passes per month", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "1 PT session monthly", included: true },
      { text: "Nutrition guidance", included: true },
      { text: "Recovery suite", included: false },
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "Unlock everything for peak performance.",
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room & showers", included: true },
      { text: "Free Wi-Fi", included: true },
      { text: "Unlimited guest passes", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "4 PT sessions monthly", included: true },
      { text: "Custom meal plans", included: true },
      { text: "Recovery suite access", included: true },
    ],
    featured: false,
  },
]

const faqs = [
  {
    question: "Is there a sign-up fee?",
    answer: "No. We believe in transparent pricing. The price you see is the price you pay -- no hidden fees or initiation costs.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. All memberships are month-to-month with no long-term contracts. Cancel online or at the front desk.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes. You can change your plan at any time and the new rate takes effect on your next billing cycle.",
  },
  {
    question: "Do you offer student or corporate discounts?",
    answer: "Yes, we offer 15% off for students with a valid ID and corporate partnership rates for companies with 10+ employees.",
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
          ? "border-primary bg-card shadow-xl shadow-primary/10 lg:scale-105 z-10"
          : "border-border bg-card hover:border-primary/40"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
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
          <li key={feature.text} className="flex items-center gap-2.5">
            {feature.included ? (
              <Check className="h-4 w-4 shrink-0 text-primary" />
            ) : (
              <X className="h-4 w-4 shrink-0 text-muted-foreground/40" />
            )}
            <span
              className={`text-sm ${
                feature.included ? "text-foreground" : "text-muted-foreground/50"
              }`}
            >
              {feature.text}
            </span>
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
        <Link href="/contact">Choose Plan</Link>
      </Button>
    </div>
  )
}

function FaqItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`border-b border-border pb-6 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {faq.answer}
      </p>
    </div>
  )
}

export function MembershipContent() {
  return (
    <main>
      <section className="bg-card pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Membership"
            title="Choose Your Plan"
            description="Flexible pricing with no hidden fees and no long-term contracts. Start your journey today."
          />
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3 items-start">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            label="FAQ"
            title="Common Questions"
          />
          <div className="mt-12 flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl text-balance">
            Ready to <span className="text-primary">Get Started?</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Try us risk-free with a complimentary trial session. No credit card required.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 font-bold uppercase tracking-wide"
            asChild
          >
            <Link href="/contact">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
