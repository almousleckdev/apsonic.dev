'use client';

import React from 'react';
import { Section, Button } from '@/components/ui';
import { NewsCard } from '@/components/news';
import { newsItems } from '@/lib/data/news';
import { colors } from '@/lib/design-tokens';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { STAGGER_CONTAINER, ENTERPRISE_EASE } from '@/lib/constants/animations';

export default function NewsListPage() {
    const featuredNews = newsItems[0];
    const otherNews = newsItems.slice(1);
    const recommendedNews = newsItems.slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Enterprise Hero Section */}
            <div className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <div className="w-full h-full bg-brand-green skew-x-12 translate-x-1/2" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: ENTERPRISE_EASE }}
                            className="inline-block text-brand-green font-bold text-sm uppercase tracking-[0.2em] mb-4"
                        >
                            Apsonic新闻中心
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8, ease: ENTERPRISE_EASE }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            信息 <span className="text-brand-green">中心</span>。
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: ENTERPRISE_EASE }}
                            className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl"
                        >
                            了解发动机技术的最新突破、社区倡议和整个非洲大陆的企业里程碑。
                        </motion.p>
                    </div>
                </div>
            </div>

            <Section backgroundColor={colors.background.primary} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-16">

                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/3 space-y-12 lg:sticky lg:top-24 h-fit">
                            <ScrollReveal variant="fadeIn" delay={0.4}>
                                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-brand-green rounded-full" />
                                    最新更新
                                </h3>
                                <div className="space-y-8">
                                    {recommendedNews.map((news) => (
                                        <Link key={news.id} href={`/news/${news.id}`} className="group flex gap-4">
                                            <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                                <Image
                                                    src={news.thumbnail}
                                                    alt={news.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest mb-1">{news.category}</span>
                                                <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-green transition-colors leading-tight">{news.title}</h4>
                                                <span className="text-[10px] text-gray-400 mt-1">{new Date(news.date).toLocaleDateString()}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </aside>

                        {/* Main Content */}
                        <div className="w-full lg:w-2/3">
                            {featuredNews && (
                                <ScrollReveal variant="fadeUp" delay={0.3} className="mb-16 pb-16 border-b border-gray-100">
                                    <Link href={`/news/${featuredNews.id}`} className="group">
                                        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-8">
                                            <Image
                                                src={featuredNews.thumbnail}
                                                alt={featuredNews.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute top-6 left-6 flex gap-2">
                                                <span className="bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                    精选故事
                                                </span>
                                            </div>
                                        </div>
                                        <div className="max-w-3xl">
                                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 group-hover:text-brand-green transition-colors leading-tight">
                                                {featuredNews.title}
                                            </h2>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                {featuredNews.excerpt}
                                            </p>
                                            <Button variant="outline" className="rounded-full px-10">
                                                阅读全文
                                            </Button>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            )}

                            <motion.div
                                variants={STAGGER_CONTAINER}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24"
                            >
                                {otherNews.map((item, index) => (
                                    <NewsCard
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        className="h-full"
                                    />
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </Section>
        </main>
    );
}
