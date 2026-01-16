'use client';

import React from 'react';
import { ServiceHero } from '@/components/service-page/ServiceHero';
import { FeatureCards } from '@/components/service-page/FeatureCards';
import { StoreLocatorSection } from '@/components/service-page/StoreLocatorSection';
import { ServiceCoverage } from '@/components/service-page/ServiceCoverage';
import { DealerNetworkInfographic } from '@/components/service-page/DealerNetworkInfographic';
import {
  FEATURE_CARDS,
} from '@/lib/data/service-page';
import { SERVICE_FAQ_ITEMS } from '@/lib/data/faq';
import { FAQ } from '@/components/service-page';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: SERVICE_PAGE_CONFIG.colors.background }}>
      <ServiceHero />
      <FeatureCards cards={FEATURE_CARDS} />
      <DealerNetworkInfographic />
      <ServiceCoverage />
      <StoreLocatorSection />
      <FAQ items={SERVICE_FAQ_ITEMS} />
    </main>
  );
}

