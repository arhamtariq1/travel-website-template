"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Mail,
  Phone,
  Quote,
  Send,
  Star,
} from "lucide-react";
import { useState } from "react";
import { fadeUp, testimonials } from "@/components/landing/travel-shared";

export function TravelSocialContactFooter() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <section id="reviews" className="px-6 py-20 md:px-10">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
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
                  className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-sm md:p-12"
                >
                  <Quote className="mb-6 h-8 w-8 text-amber-300/40" />
                  <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15">
                      <Image
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[activeTestimonial].author}
                      </p>
                      <p className="text-sm text-zinc-400">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({
                        length: testimonials[activeTestimonial].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-300 text-amber-300"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? "w-8 bg-amber-300"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-28 md:px-10">
        <Image
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000&auto=format&fit=crop"
          alt="Travel banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div {...fadeUp} className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Ready to create your
            <span className="block bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              unforgettable story?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Let our experts design your dream journey. From the first call to
            the final sunset, we handle everything.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="group rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
              Start Planning
              <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-white/25 px-7 py-3 text-sm text-white transition hover:bg-white/10">
              Call us now
            </button>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Get In Touch</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s plan your
              <span className="block text-amber-300">next adventure</span>
            </h2>
            <p className="mt-4 text-zinc-400">
              Share your travel dreams and our expert concierge team will craft
              a personalized itinerary within 48 hours.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 000-1234" },
                { icon: Mail, text: "hello@voyanta.travel" },
                { icon: Globe, text: "voyanta.travel" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
                      <Icon className="h-4 w-4 text-amber-300/80" />
                    </div>
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:grid-cols-2 md:p-8"
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
                <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-300/40 focus:ring-1 focus:ring-amber-300/20"
                />
              </div>
            ))}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.14em] text-zinc-400">
                Tell us about your dream trip
              </label>
              <textarea
                rows={4}
                placeholder="Dates, group size, interests, budget range..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-300/40 focus:ring-1 focus:ring-amber-300/20"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 px-7 py-3 text-sm font-medium text-black shadow-[0_10px_30px_-14px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-16px_rgba(251,191,36,0.6)]"
              >
                <Send className="h-4 w-4" />
                Send inquiry
              </button>
              <p className="text-xs text-zinc-500">Average reply time: under 48 hours</p>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Voyanta</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Crafting extraordinary journeys for discerning travelers since 2018.
              Your world, curated.
            </p>
          </div>
          {[
            {
              title: "Explore",
              links: ["Destinations", "Experiences", "Private Aviation", "Luxury Stays"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Partner With Us"],
            },
            {
              title: "Support",
              links: ["Help Center", "Travel Insurance", "Privacy Policy", "Terms of Service"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Voyanta Travel. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-xs text-zinc-500 transition hover:text-white">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
