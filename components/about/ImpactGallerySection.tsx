'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';

export const ImpactGallerySection = () => {
    return (
        <Section backgroundColor={colors.background.primary} padding="none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[80vh] w-full">
                {/* Item 1 */}
                <div className="relative group h-full overflow-hidden">
                    <Image
                        src="/images/about/envato-labs-image-edit (1)E.png"
                        alt="Riding free"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-green text-sm font-bold uppercase tracking-widest">生活方式</span>
                        <h3 className="text-2xl font-bold text-white mt-2">自由出行</h3>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative group h-full overflow-hidden lg:col-span-2">
                    <Image
                        src="/images/about/envato-labs-image-edit (32).png"
                        alt="Mechanic working"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-green text-sm font-bold uppercase tracking-widest">社区</span>
                        <h3 className="text-2xl font-bold text-white mt-2">赋能机械师</h3>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative group h-full overflow-hidden">
                    <Image
                        src="/images/about/envato-labs-image-edit (38).png"
                        alt="Spare parts"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-green text-sm font-bold uppercase tracking-widest">品质</span>
                        <h3 className="text-2xl font-bold text-white mt-2">正品配件</h3>
                    </div>
                </div>
            </div>
        </Section>
    );
};
