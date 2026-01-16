'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { motion } from 'framer-motion';
import { MdWbSunny, MdShoppingBasket, MdAccessTime } from 'react-icons/md';

export const MarketDaySection = () => {
    return (
        <Section backgroundColor={colors.background.primary} className="relative py-24 border-t border-white/5 overflow-hidden">
            {/* Warm Overlay for "Sun/Dust" feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">

                    {/* Left: Narrative Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full md:w-5/12 bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100 flex flex-col justify-center shadow-sm"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 text-orange-600">
                            <MdWbSunny className="text-2xl" />
                            <span className="font-mono text-sm uppercase tracking-widest">05:00 AM</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                            集市日的 <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">忙碌</span>。
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            在太阳升起之前，Apsonic的发动机轰鸣启动。从尼日利亚的薯农到多哥的纺织品贸易商，我们是供应链的第一步。
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><MdAccessTime /> 可靠启动</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1"><MdShoppingBasket /> 重载运输</span>
                        </div>
                    </motion.div>

                    {/* Right: Visual Stat Blocks (Abstract Representation of Market Chaos/Order) */}
                    <div className="w-full md:w-7/12 grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between h-[280px] hover:bg-gray-100 transition-colors border border-gray-100 shadow-sm"
                        >
                            <span className="text-4xl font-bold text-gray-900">250kg</span>
                            <p className="text-gray-600 text-sm">市场商人每天平均载货量。</p>
                            <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                                <div className="bg-brand-green h-full w-[85%]" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-green/10 rounded-3xl p-6 flex flex-col justify-between h-[280px] border border-brand-green/20 relative overflow-hidden group shadow-sm"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl rounded-full group-hover:bg-brand-green/30 transition-all" />
                            <span className="text-4xl font-bold text-brand-green">98%</span>
                            <p className="text-gray-700 text-sm">高温条件下的运行可靠性评级。</p>
                            <div className="flex gap-1 mt-4">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-2 w-full bg-brand-green rounded-full opacity-80" />)}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="col-span-2 bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between shadow-sm"
                        >
                            <div>
                                <h4 className="text-gray-900 font-bold text-xl">贸易的支柱</h4>
                                <p className="text-gray-500 text-sm">连接农村农场与城市中心。</p>
                            </div>
                            <div className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 text-2xl hover:bg-gray-50 transition-colors">
                                ➔
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
