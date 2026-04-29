"use client";
import { ServiceHero } from "@/components/service-page/ServiceHero";
import { FeatureCards } from "@/components/service-page/FeatureCards";
import { MarketCoveragePanel } from "@/components/service-page";
import { ServiceCoverage } from "@/components/service-page/ServiceCoverage";
import { DealerNetworkInfographic } from "@/components/service-page/DealerNetworkInfographic";
import { FEATURE_CARDS } from "@/lib/data/service-page";
import { SERVICE_FAQ_ITEMS } from "@/lib/data/faq";
import { FAQ } from "@/components/service-page";
import { SERVICE_PAGE_CONFIG } from "@/lib/constants/service-page";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: SERVICE_PAGE_CONFIG.colors.background }}>
      <ServiceHero />
      <ScrollReveal
        variant="fadeUp"
        delay={0.1}
      >
        <FeatureCards cards={FEATURE_CARDS} />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeIn"
        delay={0.15}
      >
        <MarketCoveragePanel />
      </ScrollReveal>

      <div className="border-t border-white/5 pt-20">
        <ScrollReveal
          variant="fadeUp"
          delay={0.1}
        >
          <OfficeLocations />
        </ScrollReveal>
      </div>

      <ScrollReveal
        variant="fadeUp"
        delay={0.1}
      >
        <FAQ items={SERVICE_FAQ_ITEMS} />
      </ScrollReveal>
    </main>
  );
}
