"use client";

import { TravelMarqueeStats } from "@/components/landing/travel-marquee-stats";
import { TravelExperiencesDestinations } from "@/components/landing/travel-experiences-destinations";
import { TravelVisualHow } from "@/components/landing/travel-visual-how";
import { TravelSocialContactFooter } from "@/components/landing/travel-social-contact-footer";

export function TravelSections() {
  return (
    <div className="relative z-10 bg-transparent">
      <TravelMarqueeStats />
      <TravelExperiencesDestinations />
      <TravelVisualHow />
      <TravelSocialContactFooter />
    </div>
  );
}
