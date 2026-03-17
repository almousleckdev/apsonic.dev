"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { MdArrowForward } from "react-icons/md";

export interface FeatureCard {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  href: string;
}

export interface FeatureCardsProps {
  cards: FeatureCard[];
  className?: string;
}

/**
 * FeatureCards - Refined & Compact
 * Vertical layout, Image Top, Text Below.
 * Removed bulky icons but added strong hover states to indicate clickability.
 * Updated to max-w-7xl for larger cards.
 */
export const FeatureCards: React.FC<FeatureCardsProps> = ({
  cards,
  className,
}) => {
  return (
    <Section className={className} backgroundColor="#F8F9FA" padding="large">
      <Container maxWidth="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto pb-12">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative block h-full"
            >
              <div
                className={cn(
                  "bg-white rounded-[32px] p-8 h-full flex flex-col items-center text-center transition-all duration-500 border border-gray-100/50 shadow-sm",
                  "hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1.5",
                )}
              >
                {/* Image Section - Top Centered & Consistent */}
                <div className="relative w-full h-[280px] mb-8 flex items-end justify-center overflow-visible border border-gray-100 rounded-2xl group-hover:border-[#1FA84F]/20 transition-colors duration-300 p-6">
                  <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center mt-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-black transition-colors">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <span className="block text-base font-medium text-gray-400 mb-4">
                      {card.subtitle}
                    </span>
                  )}
                  <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Attractive Click Indicator */}
                  <div className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>{card.ctaText}</span>
                    <MdArrowForward className="text-lg" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};
