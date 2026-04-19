"use client";

import { animate, motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { travelExperiences } from "@/components/landing/travel-experiences-data";

/** Easing similar to GSAP power3.inOut */
const POWER3_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

const ROMAN = ["i.", "ii.", "iii.", "iv.", "v."] as const;

/**
 * Scroll-scrubbed “drum” + crossfading visuals. Outer height tracks scroll progress
 * across the whole page — no nested scroll containers.
 */
export function TravelScrollExperiencesSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const slotH = useRef(0);
  const drumY = useMotionValue(0);

  const steps = travelExperiences.map((e, i) => ({
    num: ROMAN[i] ?? `${i + 1}.`,
    title: e.title,
    desc: e.desc,
    image: e.image,
  }));

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const goTo = useCallback(
    (index: number) => {
      activeRef.current = index;
      setActive(index);
      animate(drumY, -index * slotH.current, {
        duration: 0.75,
        ease: POWER3_IN_OUT,
      });
    },
    [drumY],
  );

  useEffect(() => {
    const updateSlot = () => {
      slotH.current = window.innerHeight / 3;
      drumY.set(-activeRef.current * slotH.current);
    };
    updateSlot();
    window.addEventListener("resize", updateSlot);

    const unsub = scrollYProgress.on("change", (progress) => {
      const index = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1,
      );
      if (index !== activeRef.current) {
        goTo(index);
      }
    });

    return () => {
      unsub();
      window.removeEventListener("resize", updateSlot);
    };
  }, [scrollYProgress, goTo, drumY, steps.length]);

  return (
    <div
      ref={outerRef}
      className="relative w-full"
      style={{ height: `${steps.length * 55}vh` }}
    >
      <div
        className="sticky top-0 flex h-screen w-full flex-col overflow-x-clip overflow-y-visible bg-gradient-to-br from-sky-50 via-white to-sky-100/40 lg:flex-row"
        style={{ minHeight: "100vh" }}
      >
        {/* LEFT: drum — centered in this half (full-width row; text block max-width + mx) */}
        <div className="relative flex h-[45vh] w-full justify-center overflow-x-clip overflow-y-hidden lg:h-auto lg:w-[48%] lg:min-h-0">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: `linear-gradient(
                to bottom,
                rgb(240 249 255) 0%,
                rgba(240, 249, 255, 0.35) 12%,
                rgba(240, 249, 255, 0) 28%,
                rgba(240, 249, 255, 0) 72%,
                rgba(240, 249, 255, 0.35) 88%,
                rgb(240 249 255) 100%
              )`,
            }}
          />

          {/*
            Center without transform on the same node as `y: drumY` — Framer's translateY
            would override Tailwind's -translate-x-1/2 and shift the whole drum to the right.
          */}
          <div className="absolute inset-x-0 top-[calc(100vh/3)] z-0 flex justify-center px-4 sm:px-6">
            <motion.div
              className="w-full max-w-md sm:max-w-lg"
              style={{
                willChange: "transform",
                y: drumY,
              }}
            >
            {steps.map((step, i) => {
              const isActive = i === active;
              const dist = Math.abs(i - active);
              const itemOpacity = isActive ? 1 : dist === 1 ? 0.38 : dist === 2 ? 0.12 : 0;
              const itemBlur = isActive
                ? "blur(0px)"
                : dist === 1
                  ? "blur(1.5px)"
                  : "blur(3px)";

              return (
                <motion.div
                  key={step.title}
                  animate={{ opacity: itemOpacity, filter: itemBlur }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center text-center select-none"
                  style={{
                    height: "calc(100vh / 3)",
                    pointerEvents: "none",
                  }}
                >
                  <p
                    className="mb-1 font-display text-[13px] italic text-sky-900"
                  >
                    {step.num}
                  </p>
                  <motion.h2
                    animate={{
                      fontSize: isActive
                        ? "clamp(26px, 2.6vw, 40px)"
                        : "clamp(20px, 2vw, 30px)",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="font-display mb-2 max-w-[20ch] font-bold leading-tight text-sky-950"
                  >
                    {step.title}
                  </motion.h2>
                  <motion.p
                    animate={{
                      opacity: isActive ? 1 : dist === 1 ? 0.65 : 0,
                      maxHeight: isActive || dist === 1 ? 80 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mx-auto max-w-[300px] overflow-hidden text-base leading-relaxed text-slate-600"
                  >
                    {step.desc}
                  </motion.p>
                </motion.div>
              );
            })}
            </motion.div>
          </div>
        </div>

        {/* RIGHT: images */}
        <div className="relative flex flex-1 items-center justify-center bg-sky-100/60 lg:w-[52%]">
          {steps.map((step, i) => (
            <motion.div
              key={step.image}
              animate={{
                opacity: i === active ? 1 : 0,
                scale: i === active ? 1 : 0.95,
              }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12"
              style={{ pointerEvents: i === active ? "auto" : "none" }}
            >
              <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl border border-sky-200/80 shadow-lg shadow-sky-200/30">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="340px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </motion.div>
          ))}

          <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 md:right-4">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: i === active ? 1 : 0.25,
                  scale: i === active ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 w-1.5 rounded-full bg-sky-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
