'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { colors, typography } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ui/Section';

export const MissionSection = () => {
    return (
        <Section id="story" backgroundColor={colors.background.secondary} padding="none" className="relative overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">

                {/* Left Side: Sticky Content */}
                <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2
                            className="mb-8 font-bold leading-tight tracking-tighter"
                            style={{
                                fontSize: typography.size.h1,
                                color: colors.text.primary
                            }}
                        >
                            推动大陆 <span style={{ color: colors.brand.green }}>前行</span>。
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                在Apsonic，我们不仅仅制造摩托车。我们构建生命线。
                                在一个流动性意味着机遇的大陆，我们的使命很简单：
                                <strong> 以坚韧的可靠性赋能每一次旅程。</strong>
                            </p>
                            <p>
                                从拉各斯繁忙的街道到萨赫勒崎岖的地形，
                                我们的机器经过精心设计，能够承受最恶劣的条件，
                                确保企业持续运转，家庭保持联系，
                                经济不断发展。
                            </p>
                        </div>

                        <div className="mt-12 flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-gray-900">10+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">国家</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-gray-900">1M+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">骑手</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
                    <Image
                        src="/images/about/WechatIMG5212.jpg"
                        alt="Confident African rider looking at horizon"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 lg:bg-gradient-to-r lg:from-white/40 lg:via-transparent lg:to-transparent opacity-90" />
                </div>
            </div>
        </Section>
    );
};
