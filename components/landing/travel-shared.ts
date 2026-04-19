"use client";

/** Smooth “editorial” ease — fast settle, slow start */
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 as const },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/** Large blocks: slides up with blur clearing — high impact on scroll */
export const blurReveal = {
  initial: { opacity: 0, y: 52, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: {
    once: true,
    amount: 0.15 as const,
    margin: "0px 0px -10% 0px",
  },
  transition: { duration: 0.8, ease: easeOutExpo },
};

/** Cards / tiles: slight scale + rotation */
export const tiltReveal = {
  initial: { opacity: 0, y: 40, scale: 0.94, rotateZ: -1.2 },
  whileInView: { opacity: 1, y: 0, scale: 1, rotateZ: 0 },
  viewport: { once: true, amount: 0.18 as const, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.7, ease: easeOutExpo },
};

export const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
};

export const marqueeItems = [
  "Bespoke Itineraries",
  "Private Jets",
  "Luxury Villas",
  "Personal Concierge",
  "Exclusive Access",
  "Cultural Immersions",
  "Michelin Dining",
  "Yacht Charters",
  "Mountain Retreats",
  "Island Escapes",
];

export const stats = [
  { value: "150+", label: "Destinations" },
  { value: "12K+", label: "Travelers" },
  { value: "4.9", label: "Avg. Rating" },
  { value: "24/7", label: "Concierge" },
];

export const destinations = [
  {
    name: "Bali, Indonesia",
    tagline: "Island of the Gods",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    price: "From $2,400",
    rating: 4.9,
    duration: "7 Days",
  },
  {
    name: "Maldives",
    tagline: "Overwater Paradise",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
    price: "From $4,800",
    rating: 5.0,
    duration: "5 Days",
  },
  {
    name: "Iceland",
    tagline: "Land of Fire & Ice",
    image:
      "https://images.unsplash.com/photo-1520769945061-0a448c463865?q=80&w=800&auto=format&fit=crop",
    price: "From $3,200",
    rating: 4.8,
    duration: "10 Days",
  },
  {
    name: "Amalfi Coast",
    tagline: "Italian Riviera",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?q=80&w=800&auto=format&fit=crop",
    price: "From $3,600",
    rating: 4.9,
    duration: "8 Days",
  },
];

export const testimonials = [
  {
    quote:
      "Voyanta turned our anniversary into the most magical experience. Every detail, from the private sunrise yacht to the candlelit cave dinner, was flawless.",
    author: "Sophia & Marcus",
    role: "Honeymoon in Santorini",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "I've worked with many travel agencies, but Voyanta operates on another level. They anticipated needs I didn't even know I had. Pure excellence.",
    author: "James Whitfield",
    role: "Family Trip to Kyoto",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "From the private villa in Bali to the underwater dining in Maldives — every moment felt like a scene from a movie. Extraordinary is an understatement.",
    author: "Amara Chen",
    role: "Solo Explorer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Voyanta doesn't just plan trips — they design emotions. Our Iceland adventure under the Northern Lights remains the greatest gift we've ever received.",
    author: "Erik & Lina",
    role: "Anniversary in Iceland",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];
