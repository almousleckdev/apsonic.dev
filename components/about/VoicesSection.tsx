'use client';

import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { stories } from '@/lib/data/about';

export const VoicesSection = () => {
    return (
        <Section backgroundColor={colors.background.tertiary} className="relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <SectionHeader
                    light={true}
                    label="社区"
                    title="大陆的声音。"
                    highlightWord="大陆"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl bg-white p-8 border border-gray-100 hover:border-brand-green/30 hover:shadow-xl hover:shadow-gray-200 transition-all group"
                        >
                            <div className="relative z-10">
                                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                                    "{story.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-brand-green/50">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold">{story.name}</h4>
                                        <span className="text-brand-green text-xs uppercase tracking-wider">{story.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
