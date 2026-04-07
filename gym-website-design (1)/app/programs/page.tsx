import type { Metadata } from "next"
import { ProgramsContent } from "./programs-content"

export const metadata: Metadata = {
  title: "Programs | ENERGYM",
  description:
    "Explore our range of training programs including Strength Training, HIIT, Personal Training, and Group Classes.",
}

export default function ProgramsPage() {
  return <ProgramsContent />
}
