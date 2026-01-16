'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';

export const RootsSection = () => {
    return (
        <Section backgroundColor={colors.background.primary} padding="none" className="relative py-24 overflow-hidden">
            {/* African Geometric Pattern Background - "Kente/Mudcloth Inspired" */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(45deg, ${colors.brand.green} 25%, transparent 25%, transparent 75%, ${colors.brand.green} 75%, ${colors.brand.green}),
                        linear-gradient(45deg, ${colors.brand.green} 25%, transparent 25%, transparent 75%, ${colors.brand.green} 75%, ${colors.brand.green})
                     `,
                    backgroundPosition: '0 0, 10px 10px',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side: The Red Earth Concept */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 relative h-[600px] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-white/5"
                    >
                        {/* We use a service image but darken it to focus on the 'feeling' */}
                        <Image
                            src="/images/about/WechatIMG5213 (1).jpg"
                            alt="The African dusty road"
                            fill
                            className="object-cover sepia-[.5] brightness-75 scale-110"
                        />

                        {/* Overlay Text inside the image */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                            <span className="text-brand-green font-bold text-6xl opacity-20 absolute -top-10 left-10 scale-150 transform rotate-12">
                                AFRICA
                            </span>
                            <h3 className="text-white text-3xl font-bold leading-tight relative">
                                诞生于 <br />
                                <span className="text-brand-green">红土</span>。
                            </h3>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter">
                                坚韧不拔
                            </h2>
                            <div className="h-2 w-32 bg-brand-green mb-8" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl text-gray-700 leading-relaxed mb-8 font-light"
                        >
                            我们的摩托车不是在欧洲的玻璃塔中设计的。它们是在萨赫勒的炎热中锻造的，在稀树草原的红土路上测试的。
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 leading-relaxed mb-12"
                        >
                            我们明白，在非洲，摩托车不仅仅是一种交通工具。它是驮畜、家庭成员和生存工具。这就是为什么我们用额外的钢材加固底盘，并为不可预测的情况调整悬挂系统。
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl border-l-4 border-l-brand-green">
                                <span className="block text-3xl font-bold text-gray-900 mb-1">45°C</span>
                                <span className="text-xs text-brand-green uppercase tracking-widest">高温测试</span>
                            </div>
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl border-l-4 border-l-gray-300">
                                <span className="block text-3xl font-bold text-gray-900 mb-1">重载</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">就绪</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
