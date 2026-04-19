"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { TravelNavbar } from "@/components/ui/travel-navbar";
import { TravelSections } from "@/components/landing/travel-sections";

const slides = [
  {
    title: "Voyanta",
    location: "Swiss Alps, Europe",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    details:
      "Curated mountain escapes with private guides, panoramic rail journeys, and boutique lodges above the clouds.",
  },
  {
    title: "Voyanta",
    location: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2000&q=80",
    details:
      "Sunset cliffside suites, private catamaran cruises, and culinary routes designed for unforgettable coastal memories.",
  },
  {
    title: "Voyanta",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=2000&q=80",
    details:
      "Temple district stays, seasonal cultural immersions, and peaceful luxury experiences blended with modern comfort.",
  },
] as const;

export default function Home() {
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.7], [0, 80]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const current = useMemo(() => slides[active], [active]);

  return (
    <main className="relative z-10 min-h-screen overflow-x-clip bg-transparent">
      <TravelNavbar />

      {/* Hero Section — scroll parallax + slide crossfade */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100vh] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0 will-change-transform"
              style={{
                scale: heroImageScale,
                y: heroImageY,
              }}
            >
              <Image
                src={current.image}
                alt={current.location}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,9,20,0.25),rgba(2,6,15,0.45)_42%,rgba(2,8,20,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_35%)]" />

        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative z-10 mx-auto flex min-h-[96vh] w-full max-w-7xl flex-col justify-end px-5 pb-8 pt-20 md:px-10 md:pb-5"
        >
          <motion.p
            key={`location-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-center text-sm uppercase tracking-[0.22em] text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]"
          >
            {current.location}
          </motion.p>

          <motion.h1
            key={`title-${active}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-center text-[clamp(4.3rem,16vw,15.5rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45),0_4px_40px_rgba(0,0,0,0.25)]"
          >
            {current.title}
          </motion.h1>

          <div className="mt-8 grid gap-4 md:items-end">
            <motion.p
              key={`details-${active}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-3xl rounded-lg bg-black/35 px-3 py-2 text-center text-sm leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] backdrop-blur-[2px] md:text-base"
            >
              {current.details}
            </motion.p>

            <div className="mx-auto grid w-full max-w-sm grid-cols-3 gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.location}
                  type="button"
                  onClick={() => setActive(idx)}
                  className="group text-left"
                  aria-label={`Show ${slide.location}`}
                >
                  <div className="h-1 rounded-full bg-white/25">
                    <motion.div
                      animate={{ width: active === idx ? "100%" : "0%" }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="h-full rounded-full bg-sky-400"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <TravelSections />
    </main>
  );
}
