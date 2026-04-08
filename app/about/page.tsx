"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { ImpactGallerySection } from "@/components/about/ImpactGallerySection";
import { NewsSection } from "@/components/news";
import { RootsSection } from "@/components/about/RootsSection";
import { MarketDaySection } from "@/components/about/MarketDaySection";
import { VideoShowcaseSection } from "@/components/about/VideoShowcaseSection";
import { VoicesSection } from "@/components/about/VoicesSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />

      <ScrollReveal
        variant="fadeUp"
        delay={0.2}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <MissionSection />
      </ScrollReveal>

      <ScrollReveal
        variant="slideRight"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <RootsSection />
      </ScrollReveal>

      <ScrollReveal
        variant="scaleIn"
        delay={0.3}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <VideoShowcaseSection />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeIn"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <ImpactGallerySection />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeUp"
        delay={0.2}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <MarketDaySection />
      </ScrollReveal>

      <ScrollReveal
        variant="slideRight"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <VoicesSection />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeUp"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={true}
      >
        <NewsSection variant="overlay" light={true} className="pt-4 pb-20" />
      </ScrollReveal>
    </main>
  );
}
