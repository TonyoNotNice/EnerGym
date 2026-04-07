"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-0">
          <span className="text-2xl font-black uppercase tracking-tight text-foreground">
            ENER
          </span>
          <span className="text-2xl font-black uppercase tracking-tight text-muted-foreground">
            GYM
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="uppercase tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            asChild
          >
            <Link href="/membership">Join Now</Link>
          </Button>
          <Button
            size="sm"
            className="uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            asChild
          >
            <Link href="/contact">Book Free Trial</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-muted ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
              <Button
                variant="outline"
                className="w-full uppercase tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                asChild
              >
                <Link href="/membership" onClick={() => setMobileOpen(false)}>Join Now</Link>
              </Button>
              <Button
                className="w-full uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                asChild
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Book Free Trial</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
