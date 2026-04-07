import type { Metadata } from "next"
import { MembershipContent } from "./membership-content"

export const metadata: Metadata = {
  title: "Membership | ENERGYM",
  description:
    "Choose the perfect membership plan. Flexible pricing with no hidden fees and no long-term contracts.",
}

export default function MembershipPage() {
  return <MembershipContent />
}
