"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { EngineeringSection } from "@/components/about/EngineeringSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { ImpactGallerySection } from "@/components/about/ImpactGallerySection";
import { NewsSection } from "@/components/news";
import { RootsSection } from "@/components/about/RootsSection";
import { RhythmSection } from "@/components/about/RhythmSection";
import { MarketDaySection } from "@/components/about/MarketDaySection";
import { ProverbSection } from "@/components/about/ProverbSection";
import { VideoShowcaseSection } from "@/components/about/VideoShowcaseSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { LeadersSection } from "@/components/about/LeadersSection";
import { SustainabilitySection } from "@/components/about/SustainabilitySection";
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
        once={false}
      >
        <MissionSection />
      </ScrollReveal>

      {/* <ScrollReveal variant="fadeUp" delay={0.2} duration={0.9} amount={0.1} once={false}>
        <PhilosophySection />
      </ScrollReveal> */}

      <ScrollReveal
        variant="slideRight"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <RootsSection />
      </ScrollReveal>

      <ScrollReveal
        variant="scaleIn"
        delay={0.3}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <VideoShowcaseSection />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeIn"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <ImpactGallerySection />
      </ScrollReveal>

      {/* <ScrollReveal variant="fadeUp" delay={0.2} duration={0.9} amount={0.1} once={false}>
        <EngineeringSection />
      </ScrollReveal> */}

      {/* <ScrollReveal variant="fadeIn" delay={0.25} duration={0.9} amount={0.1} once={false}>
        <RhythmSection />
      </ScrollReveal> */}

      <ScrollReveal
        variant="fadeUp"
        delay={0.2}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <MarketDaySection />
      </ScrollReveal>

      {/* <ScrollReveal
        variant="slideLeft"
        delay={0.3}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <TimelineSection />
      </ScrollReveal> */}

      {/* <ScrollReveal variant="fadeUp" delay={0.2} duration={0.9} amount={0.1} once={false}>
        <SustainabilitySection />
      </ScrollReveal> */}

      {/* <ScrollReveal
        variant="fadeUp"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <CoreValuesSection />
      </ScrollReveal> */}

      {/* <ScrollReveal variant="slideRight" delay={0.25} duration={0.9} amount={0.1} once={false}>
        <LeadersSection />
      </ScrollReveal> */}

      <ScrollReveal
        variant="slideRight"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <VoicesSection />
      </ScrollReveal>

      {/* <ScrollReveal
        variant="fadeIn"
        delay={0.2}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <ProverbSection />
      </ScrollReveal> */}

      <ScrollReveal
        variant="fadeUp"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <NewsSection variant="overlay" light={true} className="py-20" />
      </ScrollReveal>
    </main>
  );
}
