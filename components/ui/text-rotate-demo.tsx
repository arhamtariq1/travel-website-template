"use client";

/**
 * Optional reference: full-screen TextRotate + scroll gallery pattern.
 * Wire to a route (e.g. app/text-rotate-demo/page.tsx) if you want to preview in isolation.
 * The live travel experiences section uses the same TextRotate + useInView pattern.
 */

import { useCallback, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import { TextRotate, type TextRotateRef } from "@/components/ui/text-rotate";

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    author: "Travel sample",
    title: "Tropical coast",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    author: "Road trip",
    title: "Desert highway",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    author: "Alpine escape",
    title: "Mountain peaks",
  },
] as const;

function Item({
  index,
  image,
  onInView,
  scrollRootRef,
}: {
  index: number;
  image: string;
  onInView: (inView: boolean) => void;
  scrollRootRef: React.RefObject<HTMLDivElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    root: scrollRootRef,
    margin: "0px -45% 0px -45%",
    amount: "some",
  });

  useEffect(() => {
    onInView(isInView);
  }, [isInView, onInView]);

  return (
    <section
      ref={ref}
      className="flex h-full w-1/2 shrink-0 snap-center items-center justify-center"
    >
      <div className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`Example ${index + 1}`}
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default function TextRotateDemo() {
  const textRotateRef = useRef<TextRotateRef>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliced = exampleImages.slice(1);

  const handleInView = useCallback((index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index);
    }
  }, []);

  return (
    <div className="relative flex h-screen w-full">
      <div className="relative h-full w-full">
        <div className="sticky top-0 flex h-screen w-full items-center justify-end bg-white text-foreground">
          <div className="w-2/3 pr-6">
            <TextRotate
              ref={textRotateRef}
              texts={sliced.map((img) => img.author)}
              mainClassName="flex w-full justify-center pt-2 text-sm sm:text-3xl md:text-4xl"
              splitLevelClassName="overflow-hidden pb-2"
              staggerFrom="first"
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.005}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0 }}
            />
          </div>
        </div>
        <div
          ref={scrollRef}
          className="absolute inset-0 flex snap-x snap-mandatory overflow-auto"
        >
          {sliced.map((image, index) => (
            <Item
              key={image.url}
              index={index}
              image={image.url}
              scrollRootRef={scrollRef}
              onInView={(inView) => {
                handleInView(index, inView);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
