"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { ImageGallery } from "@/components/ui/image-gallery";
import { travelExperiences } from "@/components/landing/travel-experiences-data";
import { TravelScrollExperiencesSection } from "@/components/landing/travel-scroll-experiences-section";
import {
  blurReveal,
  destinations,
  tiltReveal,
} from "@/components/landing/travel-shared";

export function TravelExperiencesDestinations() {
  return (
    <>
      <section id="experiences" className="overflow-visible px-2 py-20">
        <motion.div {...blurReveal} className="mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">
            Tailored Travel Experiences
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-sky-950 md:text-5xl">
            From private jets to secluded villas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We handle every detail of your journey with precision and care.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 w-full overflow-visible">
          <TravelScrollExperiencesSection />
        </div>
      </section>

      <section id="gallery">
        <ImageGallery />
      </section>

      <section id="destinations" className="px-6 py-20 md:px-10">
        <motion.div {...blurReveal} className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-700/70">
                Popular Destinations
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-sky-950 md:text-5xl">
                Where will you go next?
              </h2>
            </div>
            <button className="group inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-white/60 px-5 py-2.5 text-sm text-sky-900 transition hover:bg-sky-100/90">
              View all destinations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest, i) => (
              <motion.article
                key={dest.name}
                {...tiltReveal}
                transition={{
                  ...tiltReveal.transition,
                  delay: i * 0.09,
                }}
                className="group relative overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-md shadow-sky-100/40 transition-colors hover:border-sky-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent" />
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs text-amber-600 shadow-sm backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-current" />
                    {dest.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {dest.tagline}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-800">{dest.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-sky-600">
                      {dest.price}
                    </span>
                    <span className="text-xs text-slate-500">{dest.duration}</span>
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
