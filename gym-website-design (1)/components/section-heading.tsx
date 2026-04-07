"use client"

import { useScrollAnimate } from "@/hooks/use-scroll-animate"

// Props interface for the SectionHeading component
interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

// Reusable section heading component with scroll animation
// Used throughout the site for consistent section introductions
export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  // Hook for scroll-triggered animation
  const [ref, isVisible] = useScrollAnimate<HTMLDivElement>()

  return (
    // Animated container with centered text alignment
    <div
      ref={ref}
      className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="text-sm font-bold uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 bg-primary" />
    </div>
  )
}
