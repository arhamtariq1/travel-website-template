"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VerticalImageStack } from "@/components/ui/vertical-image-stack";
import { fadeUp, stagger } from "@/components/landing/travel-shared";

const steps = [
  {
    step: "01",
    title: "Share your vision",
    desc: "Tell us your dream trip — we listen deeply to understand your ideal experience.",
  },
  {
    step: "02",
    title: "We craft your plan",
    desc: "Our experts design a bespoke itinerary tailored to your preferences.",
  },
  {
    step: "03",
    title: "Refine together",
    desc: "Review, adjust, and perfect every detail until it feels just right.",
  },
  {
    step: "04",
    title: "Embark & enjoy",
    desc: "Travel with confidence knowing our 24/7 concierge is always beside you.",
  },
];

export function TravelVisualHow() {
  return (
    <>
      <section className="border-y border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div {...fadeUp} className="flex flex-col justify-center py-10">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              Visual Stories
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Moments that
              <span className="block bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                take your breath away
              </span>
            </h2>
            <p className="mt-4 max-w-md text-zinc-400">
              Scroll through our curated collection of unforgettable travel
              moments captured across every continent.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200">
                Explore Gallery
              </button>
              <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.06]">
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
          <VerticalImageStack />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Your journey in 4 simple steps
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-0 md:grid-cols-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              {...stagger}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative border-l border-white/10 py-8 pl-8 first:border-l-0 first:pl-0 md:py-0"
            >
              <span className="text-5xl font-extralight text-white/10 transition-colors duration-500 group-hover:text-amber-300/30">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
