'use client';

import React from 'react';
import { ServiceSupport } from '@/components/service';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { cn } from '@/lib/utils';

export interface StoreLocatorSectionProps {
  className?: string;
}

// Store locator section wrapper with title
export const StoreLocatorSection: React.FC<StoreLocatorSectionProps> = ({
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor="transparent"
      padding="large"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
            全国支持
          </span>
          <h2
            className="mb-6"
            style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#111827',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            查找最近的 <span className="text-brand-green">Apsonic</span> 服务中心
          </h2>
          <p className="text-gray-600 font-light text-lg">
            在整个非洲大陆拥有数百个授权服务点，
            专业支持始终近在咫尺。
          </p>
        </div>

        {/* Service Support Component */}
        <ServiceSupport />
      </Container>
    </Section>
  );
};

