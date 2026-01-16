'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { SERVICE_COVERAGE_COUNTRIES, SERVICE_COVERAGE_STATS } from '@/lib/data/service-page';
import { cn } from '@/lib/utils';

export interface Country {
  flag: string;
  name: string;
}

export interface ServiceCoverageProps {
  countries?: Country[];
  stats?: {
    servicePoints: string;
    subsidiaries: string;
    dealers: string;
  };
  className?: string;
}

// Service coverage section with country flags and statistics
export const ServiceCoverage: React.FC<ServiceCoverageProps> = ({
  countries = SERVICE_COVERAGE_COUNTRIES,
  stats = SERVICE_COVERAGE_STATS,
  className,
}) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="small"
      style={{ borderTop: `1px solid ${SERVICE_PAGE_CONFIG.colors.border}` }}
    >
      <Container maxWidth="wide">
        {/* Heading */}
        <h2
          className="text-center mb-8"
          style={{
            fontSize: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontSize,
            fontWeight: SERVICE_PAGE_CONFIG.typography.sectionTitle.fontWeight,
            color: SERVICE_PAGE_CONFIG.typography.sectionTitle.color,
          }}
        >
          我们的服务网络覆盖西非
        </h2>

        {/* Countries */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-100 shadow-sm transition-all hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 500,
                color: '#111827',
              }}
            >
              <span className="text-2xl leading-none">{country.flag}</span>
              <span>{country.name}</span>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.servicePoints}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              服务点
            </div>
          </div>
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.subsidiaries}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              子公司
            </div>
          </div>
          <div className="text-center">
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: SERVICE_PAGE_CONFIG.colors.secondary,
                marginBottom: '4px',
              }}
            >
              {stats.dealers}
            </div>
            <div
              style={{
                fontSize: '14px',
                color: SERVICE_PAGE_CONFIG.colors.secondary,
              }}
            >
              授权经销商
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

