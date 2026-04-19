import { Camera, Compass, Hotel, Plane, UtensilsCrossed } from "lucide-react";

export const travelExperiences = [
  {
    icon: Plane,
    title: "Private Aviation",
    desc: "Charter flights and private jet services to any destination worldwide.",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Hotel,
    title: "Luxury Accommodations",
    desc: "Handpicked five-star hotels, villas, and exclusive resorts.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    desc: "Reservations at Michelin-starred restaurants and private chef services.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    desc: "Professional photographers to capture your once-in-a-lifetime moments.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Compass,
    title: "Curated Adventures",
    desc: "Unique cultural immersions and guided exploration designed for you.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

export type TravelExperience = (typeof travelExperiences)[number];
