import React from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { MissionSection } from '@/components/about/MissionSection';
import { EngineeringSection } from '@/components/about/EngineeringSection';
import { TimelineSection } from '@/components/about/TimelineSection';
import { PhilosophySection } from '@/components/about/PhilosophySection';
import { ImpactGallerySection } from '@/components/about/ImpactGallerySection';
import { NewsSection } from '@/components/news';
import { RootsSection } from '@/components/about/RootsSection'; // New
import { RhythmSection } from '@/components/about/RhythmSection'; // New
import { MarketDaySection } from '@/components/about/MarketDaySection'; // New
import { ProverbSection } from '@/components/about/ProverbSection'; // New
import { VideoShowcaseSection } from '@/components/about/VideoShowcaseSection'; // New
import { CoreValuesSection } from '@/components/about/CoreValuesSection';
import { LeadersSection } from '@/components/about/LeadersSection';
import { SustainabilitySection } from '@/components/about/SustainabilitySection';
import { VoicesSection } from '@/components/about/VoicesSection';


export const metadata = {
    title: '关于我们 - Apsonic',
    description: 'Apsonic的故事：为非洲而设计，经久耐用。',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <PhilosophySection />
            <MissionSection />
            <RootsSection />
            <NewsSection variant="overlay" light={true} />
            <EngineeringSection />
            <RhythmSection />
            <VideoShowcaseSection />
            <MarketDaySection />
            <ImpactGallerySection />
            <ProverbSection />
            <TimelineSection />
            <VoicesSection />
            <CoreValuesSection />
            <LeadersSection />
            <SustainabilitySection />
        </main>
    );
}
