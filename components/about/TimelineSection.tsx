'use client';

import React, { useRef } from 'react';
import { Section, SectionHeader } from '@/components/ui';
import { colors } from '@/lib/design-tokens';
import * as Icons from 'react-icons/md';
import { timelineEvents } from '@/lib/data/about';

interface TimelineEventProps {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const TimelineEvent = ({ year, title, description, icon }: TimelineEventProps) => (
    <div className="relative flex flex-col items-center flex-shrink-0 w-80 lg:w-96 snap-center group">
        <div className="mb-8 flex flex-col items-center relative">
            <span
                className="text-5xl font-bold tracking-tighter text-gray-300 group-hover:text-brand-green transition-colors duration-300"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
            >
                {year}
            </span>
            <div className="mt-4 h-4 w-4 rounded-full bg-brand-green ring-4 ring-brand-green/10 shadow-[0_0_15px_rgba(31,168,79,0.3)] z-10" />
            <div className="h-full w-px bg-gray-200 absolute top-16 bottom-0" />
        </div>

        <div className="w-full h-full rounded-2xl bg-white p-8 border border-gray-100 hover:border-brand-green/50 hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 text-brand-green text-3xl bg-brand-green/10 w-fit p-3 rounded-xl border border-brand-green/10">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export const TimelineSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <Section backgroundColor={colors.background.tertiary} className="overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    light={true}
                    label="我们的旅程"
                    title="运动的传承"
                    description="从谦逊的开始到主导非洲市场，我们的旅程由我们走过的里程碑详细记录。"
                />
            </div>

            <div className="relative w-full">
                <div className="absolute top-[88px] left-0 right-0 h-px bg-gray-200 hidden md:block" />

                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-12 overflow-x-auto pb-12 px-8 md:px-24 hide-scrollbar scroll-smooth"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {timelineEvents.map((event, index) => {
                        const IconComponent = (Icons as any)[event.iconName];
                        return (
                            <TimelineEvent
                                key={index}
                                year={event.year}
                                title={event.title}
                                description={event.description}
                                icon={IconComponent ? <IconComponent /> : null}
                            />
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
