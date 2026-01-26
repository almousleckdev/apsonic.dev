"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/design-tokens";
import { timelineEvents } from "@/lib/data/about";
import { MdRefresh } from "react-icons/md";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  isLast?: boolean;
}

const TimelineEvent = ({
  year,
  title,
  description,
  image,
  isLast = false,
}: TimelineEventProps) => (
  <div className="relative flex gap-6 md:gap-8 lg:gap-10 items-start mb-10 last:mb-0">
    {/* Left Side - Year */}
    <div className="flex-shrink-0 flex items-center gap-3 md:gap-4" style={{ width: '140px' }}>
      <div className="text-right flex-1">
        <span
          className="text-5xl md:text-6xl font-bold text-gray-300 leading-none block"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {year}
        </span>
      </div>
      {/* Green Circle Icon */}
      <div className="relative flex-shrink-0">
        <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-brand-green flex items-center justify-center shadow-lg z-10">
          <MdRefresh className="text-white text-[10px] md:text-xs" />
        </div>
      </div>
    </div>

    {/* Right Side - Compact Card with Image */}
    <div className="flex-1 max-w-lg mx-auto">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image - Better proportioned */}
        {image && (
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={image}
              alt={description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        )}
        {/* Description Text - Centered below image */}
        <div className="p-5 md:p-6 text-center">
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const TimelineSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      backgroundColor={colors.background.primary}
      className="py-16 md:py-24"
    >
      <Container maxWidth="wide">
        <SectionHeader
          label="品牌历程"
          title="APSONIC品牌历程"
          description="从多哥洛美到整个非洲，见证我们的成长足迹"
        />

        {/* Timeline Container - Shows 2 items at a time with scroll */}
        <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto">
          {/* Vertical Timeline Line - Background */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" 
            style={{ left: '128px' }}
          />

          {/* Scrollable Timeline Content - Shows 2 items at a time */}
          <div
            ref={scrollContainerRef}
            className="relative overflow-y-auto pr-4 timeline-scrollbar"
            style={{
              scrollSnapType: "y mandatory",
              maxHeight: "600px", // Shows approximately 2 items
            }}
          >
            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="scroll-snap-align-start"
                >
                  <TimelineEvent
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    isLast={index === timelineEvents.length - 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
