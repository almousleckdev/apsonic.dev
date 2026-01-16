'use client';

import React from 'react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { colors } from '@/lib/design-tokens';
import { NewsCard } from './NewsCard';
import { newsItems } from '@/lib/data/news';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NewsSectionProps {
    light?: boolean;
    limit?: number;
    className?: string;
    variant?: 'default' | 'overlay';
}

export const NewsSection: React.FC<NewsSectionProps> = ({
    light = false,
    limit = 3,
    className,
    variant = 'default'
}) => {
    const displayItems = newsItems.slice(0, limit);

    return (
        <Section
            backgroundColor={light ? colors.background.white : colors.background.primary}
            className={cn("relative z-10", className)}
        >
            <div className="container mx-auto px-4">
                <SectionHeader
                    light={light}
                    label="最新新闻"
                    title={<>信息 <span className="text-brand-green">中心</span>。</>}
                    description="了解APSONIC在整个大陆的最新更新、活动亮点和社区故事。"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {displayItems.map((item, index) => (
                        <NewsCard
                            key={item.id}
                            item={item}
                            index={index}
                            light={light}
                            variant={variant}
                        />
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link href="/news">
                        <Button variant="outline" className="rounded-full px-10 border-gray-200 text-gray-900 hover:bg-gray-100">
                            查看所有新闻
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
