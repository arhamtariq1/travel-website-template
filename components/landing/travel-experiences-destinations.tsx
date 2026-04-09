"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Compass,
  Hotel,
  MapPin,
  Plane,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { ImageGallery } from "@/components/ui/image-gallery";
import { destinations, fadeUp, stagger } from "@/components/landing/travel-shared";
import { useState } from "react";

const experiences = [
  {
    icon: Plane,
    title: "Private Aviation",
    desc: "Charter flights and private jet services to any destination worldwide.",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Hotel,
    title: "Luxury Accommodations",
    desc: "Handpicked five-star hotels, villas, and exclusive resorts.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    desc: "Reservations at Michelin-starred restaurants and private chef services.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    desc: "Professional photographers to capture your once-in-a-lifetime moments.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Compass,
    title: "Curated Adventures",
    desc: "Unique cultural immersions and guided exploration designed for you.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop",
  },
];

export function TravelExperiencesDestinations() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <>
      <section id="experiences" className="px-6 py-20 md:px-10">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Tailored Travel Experiences
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            From private jets to secluded villas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            We handle every detail of your journey with precision and care.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onMouseEnter={() => setHoveredExp(i)}
                onMouseLeave={() => setHoveredExp(null)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredExp === i ? 1 : 0,
                      y: hoveredExp === i ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 p-4"
                  >
                    <p className="text-xs leading-relaxed text-zinc-200">
                      {exp.desc}
                    </p>
                  </motion.div>
                </div>
                <div className="p-4">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Icon className="h-4 w-4 text-amber-300/80" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{exp.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="gallery">
        <ImageGallery />
      </section>

      <section id="destinations" className="px-6 py-20 md:px-10">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Popular Destinations
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Where will you go next?
              </h2>
            </div>
            <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/[0.06]">
              View all destinations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest, i) => (
              <motion.article
                key={dest.name}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs text-amber-300 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-current" />
                    {dest.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="h-3 w-3" />
                    {dest.tagline}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">{dest.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-300/90">
                      {dest.price}
                    </span>
                    <span className="text-xs text-zinc-400">{dest.duration}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
