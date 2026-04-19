"use client";

import { motion } from "framer-motion";
import { marqueeItems, stats, tiltReveal } from "@/components/landing/travel-shared";

export function TravelMarqueeStats() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scaleX: 0.97 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border-y border-sky-200/60 bg-sky-100/30 py-5"
      >
        <div className="flex animate-marquee-travel whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-sky-700/70 md:text-base"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500/80" />
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      <section className="border-b border-sky-200/60 px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...tiltReveal}
              transition={{
                ...tiltReveal.transition,
                delay: i * 0.1,
              }}
              className="text-center"
            >
              <p className="font-display text-4xl font-light tracking-tight text-sky-950 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-sky-700/65">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
