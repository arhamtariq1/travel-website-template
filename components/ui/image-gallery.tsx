"use client";

import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500259571355-332da5cb07aa?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
] as const;

export function ImageGallery() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          Our Latest Destinations
        </h2>
        <p className="mt-3 text-sm text-zinc-300 md:text-base">
          A visual collection of our most breathtaking locations — each journey
          crafted with intention, wonder, and lasting memories.
        </p>
      </div>

      <div className="mx-auto mt-10 flex h-[400px] max-w-5xl items-center gap-2 px-4">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="group relative h-[400px] w-14 flex-grow overflow-hidden rounded-xl transition-all duration-500 hover:w-full hover:flex-grow-[4]"
          >
            <Image
              src={src}
              alt={`Destination ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
          </div>
        ))}
      </div>
    </section>
  );
}
