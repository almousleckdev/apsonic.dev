'use client';

import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdOutlineForest, MdOutlineBolt } from 'react-icons/md';

export const SustainabilitySection = () => {
    return (
        <Section backgroundColor={colors.background.secondary} className="relative z-10 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Content - African Context Focus */}
                    <div className="w-full lg:w-1/2">
                        <SectionHeader
                            light={true}
                            align="left"
                            label="责任"
                            title="保护我们的土地。"
                            description="非洲不仅仅是我们的市场；它是我们的家园。我们致力于通过设计消耗更少燃料、产生更少排放的发动机来最小化我们的环境足迹，保护我们大陆的多样化生态系统。"
                            className="mb-8"
                        />

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-brand-green/10 p-2 text-brand-green">
                                    <MdOutlineBolt className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">燃油效率重点</h4>
                                    <p className="text-sm text-gray-600">我们符合欧3标准的发动机将燃料消耗降低15%，为骑手节省资金并减少碳排放。</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 rounded-full bg-brand-green/10 p-2 text-brand-green">
                                    <MdOutlineForest className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">包装减量</h4>
                                    <p className="text-sm text-gray-600">我们的运输箱使用80%的回收材料，减少当地社区的浪费。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden group"
                    >
                        <Image
                            src="/images/about/VII_3219__10970165.jpg"
                            alt="Apsonic motorcycle in nature"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-2">赋能本地产业</h3>
                            <p className="text-white/90 text-sm">
                                通过在加纳、多哥和贝宁本地化组装，我们减少了运输排放并培养了劳动力的技术技能。
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};
