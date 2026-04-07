import Link from "next/link"
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black uppercase tracking-tight text-foreground">
                ENER
              </span>
              <span className="text-2xl font-black uppercase tracking-tight text-muted-foreground">
                GYM
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center lg:text-left leading-relaxed">
              Push your limits. Build your strength. Join the community that never quits.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"2026 ENERGYM. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
