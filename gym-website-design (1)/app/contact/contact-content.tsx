"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeading } from "@/components/section-heading"
import { useScrollAnimate } from "@/hooks/use-scroll-animate"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Power Street, Downtown, NY 10001",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@energym.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open 24/7 -- 365 days a year",
  },
]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formRef, formVisible] = useScrollAnimate<HTMLDivElement>()
  const [infoRef, infoVisible] = useScrollAnimate<HTMLDivElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="bg-card pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Get In Touch"
            title="Contact Us"
            description="Have a question, want to book a trial, or just want to say hello? We would love to hear from you."
          />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Contact form */}
            <div
              ref={formRef}
              className={`flex-1 transition-all duration-700 ${
                formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                Send a Message
              </h3>
              <div className="mt-2 h-1 w-12 bg-primary" />

              {submitted ? (
                <div className="mt-10 flex flex-col items-center gap-4 border border-primary/30 bg-primary/5 p-12 text-center">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">Message Sent</h4>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold uppercase tracking-wide"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex-1 flex flex-col gap-2">
                      <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Book a free trial"
                      required
                      className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your fitness goals..."
                      rows={5}
                      required
                      className="border-border bg-card text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 font-bold uppercase tracking-wide"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div
              ref={infoRef}
              className={`lg:w-[420px] transition-all duration-700 delay-200 ${
                infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
                Info
              </h3>
              <div className="mt-2 h-1 w-12 bg-primary" />

              <div className="mt-8 flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-border bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ENERGYM location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
