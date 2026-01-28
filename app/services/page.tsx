"use client";

import React from "react";
import { ServiceHero } from "@/components/service-page/ServiceHero";
import { FeatureCards } from "@/components/service-page/FeatureCards";
import { StoreLocatorSection } from "@/components/service-page/StoreLocatorSection";
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
        delay={0.2}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <FeatureCards cards={FEATURE_CARDS} />
      </ScrollReveal>

      <ScrollReveal
        variant="scaleIn"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <DealerNetworkInfographic />
      </ScrollReveal>

      <ScrollReveal
        variant="fadeIn"
        delay={0.3}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <ServiceCoverage />
      </ScrollReveal>

      <div className="border-t border-white/5 pt-20">
        <ScrollReveal
          variant="fadeUp"
          delay={0.2}
          duration={0.9}
          amount={0.1}
          once={false}
        >
          <OfficeLocations />
        </ScrollReveal>
      </div>

      <ScrollReveal
        variant="fadeUp"
        delay={0.25}
        duration={0.9}
        amount={0.1}
        once={false}
      >
        <FAQ items={SERVICE_FAQ_ITEMS} />
      </ScrollReveal>
    </main>
  );
}
