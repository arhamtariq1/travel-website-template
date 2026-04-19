"use client";

import { blurReveal } from "@/components/landing/travel-shared";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    title: "Coastal Serenity",
    description:
      "Soft sand, slow tides, and horizons that invite you to stay a little longer.",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    title: "Alpine Crossing",
    description:
      "Glacial blues and pine-scented air along quiet mountain waters.",
  },
  {
    src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=800&auto=format&fit=crop",
    title: "Canal Light",
    description:
      "Golden hours on the water — old cities seen from a slower pace.",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    title: "Open Road",
    description:
      "Wide sky over red earth — miles of space to breathe and wander.",
  },
  {
    src: "https://images.unsplash.com/photo-1500259571355-332da5cb07aa?q=80&w=800&auto=format&fit=crop",
    title: "Upward Drift",
    description:
      "Dawn flights above valleys painted in soft pastels and still air.",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    title: "Forest Awakening",
    description:
      "First light through the trees — coffee, birdsong, and a new trail.",
  },
] as const;

export function ImageGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 md:py-20">
      <motion.div
        {...blurReveal}
        className="mx-auto max-w-3xl px-4 text-center"
      >
        <h2 className="font-display text-3xl font-semibold text-sky-950 md:text-5xl">
          Our Latest Destinations
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          A visual collection of our most breathtaking locations — each journey
          crafted with intention, wonder, and lasting memories.
        </p>
      </motion.div>

      <motion.div
        {...blurReveal}
        transition={{ ...blurReveal.transition, delay: 0.12 }}
        className="mx-auto mt-10 flex h-[400px] max-w-5xl items-stretch gap-2 px-4"
        onMouseLeave={() => setOpenIndex(null)}
      >
        {galleryItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.src}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={`${item.title}. ${item.description}`}
              onMouseEnter={() => setOpenIndex(idx)}
              onClick={() =>
                setOpenIndex((prev) => (prev === idx ? null : idx))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex((prev) => (prev === idx ? null : idx));
                }
              }}
              className={cn(
                "relative h-[400px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-out outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
                isOpen ? "min-w-0 flex-[4]" : "min-w-14 flex-1",
              )}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className={cn(
                  "object-cover object-center transition-transform duration-700",
                  isOpen && "scale-105",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 transition",
                  isOpen ? "bg-sky-950/20" : "bg-sky-100/25",
                )}
              />
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-950/90 via-sky-950/45 to-transparent transition duration-500",
                  isOpen ? "opacity-100" : "opacity-0",
                )}
              />
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 p-4 text-left transition duration-500 md:p-6",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0",
                )}
              >
                <h3 className="font-display text-lg font-semibold text-white drop-shadow-sm md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/90 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
