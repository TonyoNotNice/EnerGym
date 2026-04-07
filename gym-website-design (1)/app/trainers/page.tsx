import type { Metadata } from "next"
import { TrainersContent } from "./trainers-content"

export const metadata: Metadata = {
  title: "Trainers | ENERGYM",
  description:
    "Meet our team of certified fitness professionals. World-class coaches ready to help you reach your goals.",
}

export default function TrainersPage() {
  return <TrainersContent />
}
