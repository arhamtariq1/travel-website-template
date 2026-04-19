"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Quote,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";
import { blurReveal, testimonials } from "@/components/landing/travel-shared";

export function TravelSocialContactFooter() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <section id="reviews" className="px-6 py-20 md:px-10">
        <motion.div {...blurReveal} className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">
              Testimonials
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-sky-950 md:text-5xl">
              What our travelers say
            </h2>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" as const }}
                  className="relative rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white to-sky-50/90 p-8 shadow-lg shadow-sky-100/60 backdrop-blur-sm md:p-12"
                >
                  <Quote className="mb-6 h-8 w-8 text-sky-400/70" />
                  <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-sky-200">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonials[activeTestimonial].author}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({
                        length: testimonials[activeTestimonial].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/90 text-sky-700 transition hover:bg-sky-100 hover:text-sky-950"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial
                      ? "w-8 bg-sky-500"
                      : "w-2 bg-sky-200 hover:bg-sky-300"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/90 text-sky-700 transition hover:bg-sky-100 hover:text-sky-950"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>


      <section id="contact" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.2fr]">
          <motion.div {...blurReveal} className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">Get In Touch</p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-sky-950 md:text-4xl">
              Let&apos;s plan your
              <span className="block text-sky-600">next adventure</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Share your travel dreams and our expert concierge team will craft
              a personalized itinerary within 48 hours.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 000-1234" },
                { icon: Mail, text: "hello@aeralis.travel" },
                { icon: Globe, text: "aeralis.travel" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100">
                      <Icon className="h-4 w-4 text-sky-700" />
                    </div>
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            {...blurReveal}
            transition={{ ...blurReveal.transition, delay: 0.1 }}
            className="grid gap-4 rounded-2xl border border-sky-200/80 bg-white p-6 shadow-lg shadow-sky-100/50 md:grid-cols-2 md:p-8"
          >
            {[
              { label: "Full Name", placeholder: "Your name", span: false },
              { label: "Email", placeholder: "you@email.com", span: false },
              {
                label: "Destination",
                placeholder: "Where do you want to go?",
                span: true,
              },
            ].map((field) => (
              <div key={field.label} className={`space-y-2 ${field.span ? "md:col-span-2" : ""}`}>
                <label className="text-xs uppercase tracking-[0.14em] text-slate-500">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-sky-200 bg-sky-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
              </div>
            ))}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Tell us about your dream trip
              </label>
              <textarea
                rows={4}
                placeholder="Dates, group size, interests, budget range..."
                className="w-full resize-none rounded-xl border border-sky-200 bg-sky-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-14px_rgba(14,165,233,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-16px_rgba(14,165,233,0.5)]"
              >
                <Send className="h-4 w-4" />
                Send inquiry
              </button>
              <p className="text-xs text-slate-500">Average reply time: under 48 hours</p>
            </div>
          </motion.form>
        </div>
      </section>

      <footer
        id="footer"
        className="relative overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-white via-sky-50/90 to-[#e4f2fa] px-6 pb-12 pt-20 md:rounded-t-[3rem] md:px-10 md:pb-16 md:pt-28"
      >
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-sky-200/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl"
          aria-hidden
        />

        <motion.div {...blurReveal} className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.42em] text-sky-800/45">
              Since 2018 · Private itineraries
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row md:items-end md:gap-8">
              <span className="bg-gradient-to-br from-sky-900 via-slate-900 to-cyan-900 bg-clip-text font-display text-[clamp(3.5rem,16vw,10rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-transparent">
                Aeralis
              </span>
              <span className="font-display pb-2 text-2xl font-medium tracking-[0.2em] text-sky-800/55 md:text-3xl">
                Travel
              </span>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              We choreograph departures, not packages — fewer guests, deeper stories,
              and a team that answers before you have to ask.
            </p>
          </div>

          <nav
            className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.8125rem] text-slate-500"
            aria-label="Footer"
          >
            {(
              [
                ["Destinations", "#destinations"],
                ["Experiences", "#experiences"],
                ["Gallery", "#gallery"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
                ["Privacy", "#"],
                ["Terms", "#"],
              ] as const
            ).map(([label, href], i) => (
              <span key={label} className="inline-flex items-center gap-3">
                {i > 0 ? (
                  <span className="text-sky-200" aria-hidden>
                    ·
                  </span>
                ) : null}
                <a
                  href={href}
                  className="transition hover:text-sky-800 hover:underline hover:decoration-sky-300 hover:underline-offset-4"
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>

          <div
            className="mx-auto mt-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-sky-300/50 to-transparent md:mt-8"
            role="presentation"
          />

          <div className="mt-4 flex flex-col items-center justify-between gap-10 md:mt-6 md:flex-row md:items-end">
            <p className="max-w-lg text-center text-xs leading-relaxed text-slate-500 md:text-left md:text-sm">
              &copy; {new Date().getFullYear()} Aeralis Travel.{" "}
              <span className="text-slate-400">|</span> Curated journeys worldwide —
              ATOL where shown · Concierge on every booking.
            </p>
            <div className="flex items-center gap-5">
              {(
                [
                  ["Instagram", Instagram, "https://instagram.com"],
                  ["Facebook", Facebook, "https://facebook.com"],
                  ["LinkedIn", Linkedin, "https://linkedin.com"],
                ] as const
              ).map(([label, Icon, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full p-2 text-slate-500 transition hover:bg-white/60 hover:text-sky-800 hover:shadow-sm"
                >
                  <Icon className="h-5 w-5 stroke-[1.25]" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
