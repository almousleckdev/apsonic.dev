'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { colors } from '@/lib/design-tokens';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    id: 'company-intro',
    title: '企业介绍',
    description: '了解Apsonic的企业文化、发展历程和核心价值观。',
    image: '/images/about/envato-labs-image-edit (1)E.png',
    link: '#story'
  },
  {
    id: 'quality-life',
    title: '好质量好生活（实验舱等）',
    description: '探索Apsonic如何通过严格的测试和质量控制，确保每一辆摩托车都达到最高标准。',
    image: '/images/about/envato-labs-image-edit (32).png',
    link: '#engineering'
  },
  {
    id: 'commercial',
    title: '广告片',
    description: '观看Apsonic的品牌宣传片，了解我们的故事和愿景。',
    image: '/images/about/envato-labs-image-edit (38).png',
    link: '#videos'
  },
  {
    id: 'africa-cup',
    title: '非洲杯',
    description: 'Apsonic支持非洲杯，为社区和体育发展贡献力量。',
    image: '/images/news/非洲杯大屏幕1.png',
    link: '/news/africa-cup-support'
  }
];

export const PhilosophySection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.background.primary}
      padding="large"
      className="relative z-10"
    >
      <Container maxWidth="wide">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apsonic <span className="text-brand-green">理念</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              探索Apsonic的核心价值和品牌理念
            </p>
          </div>
        </ScrollReveal>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              variant="fadeUp"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300"
              >
                {item.link ? (
                  <Link href={item.link} className="block h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
