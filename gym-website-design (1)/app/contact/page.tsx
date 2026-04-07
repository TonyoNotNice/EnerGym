import type { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact | ENERGYM",
  description:
    "Get in touch with ENERGYM. Book a free trial, ask about memberships, or visit us at our location.",
}

export default function ContactPage() {
  return <ContactContent />
}
