'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

export const ProverbSection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} padding="none" className="relative py-32 flex items-center justify-center text-center overflow-hidden">
            {/* Background Pattern - Concentric Circles (Ripple/Community) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-black rounded-full absolute" />
                <div className="w-[600px] h-[600px] border border-black rounded-full absolute" />
                <div className="w-[400px] h-[400px] border border-black rounded-full absolute" />
                <div className="w-[200px] h-[200px] border border-black rounded-full absolute" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-brand-green font-serif italic text-xl mb-6 block">非洲谚语</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                        "如果你想走得快，一个人走。 <br />
                        <span className="text-brand-green">如果你想走得远，一起走。</span>"
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 mx-auto opacity-10" />
                </motion.div>
            </div>
        </Section>
    );
};
