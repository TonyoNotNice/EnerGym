"use client"

import { useEffect, useRef, useState, type RefObject } from "react"

// Custom hook for scroll-triggered animations
// Returns a ref to attach to an element and a boolean indicating visibility
// Once an element becomes visible, it stays visible (no exit animations)
export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>(): [RefObject<T | null>, boolean] {
  // Ref to attach to the target element
  const ref = useRef<T | null>(null)
  // State to track if element has been seen
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Create intersection observer with 15% threshold
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stop observing once visible to prevent re-triggering
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
