"use client";

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

      {/* <ScrollReveal variant="fadeUp" delay={0.1}>
        <MissionSection />
      </ScrollReveal> */}

      <ScrollReveal variant="slideRight" delay={0.1}>
        <RootsSection />
      </ScrollReveal>

      <ScrollReveal variant="scaleIn" delay={0.1}>
        <VideoShowcaseSection />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" delay={0.1}>
        <ImpactGallerySection />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.1}>
        <MarketDaySection />
      </ScrollReveal>

      <ScrollReveal variant="slideRight" delay={0.1}>
        <VoicesSection />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.15}>
        <NewsSection variant="overlay" light={true} className="pt-4 pb-20" />
      </ScrollReveal>
    </main>
  );
}
