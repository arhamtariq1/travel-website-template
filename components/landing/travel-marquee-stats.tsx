"use client";

import { motion } from "framer-motion";
import { marqueeItems, stagger, stats } from "@/components/landing/travel-shared";

export function TravelMarqueeStats() {
  return (
    <>
      <section className="overflow-hidden border-y border-white/10 py-5">
        <div className="flex animate-marquee-travel whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-zinc-400 md:text-base"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...stagger}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl font-light tracking-tight text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
