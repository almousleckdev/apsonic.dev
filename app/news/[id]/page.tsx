'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Section, Button } from '@/components/ui';
import { NewsContent } from '@/components/news';
import { newsItems } from '@/lib/data/news';
import { colors } from '@/lib/design-tokens';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdArrowBack, MdCalendarToday, MdTag, MdPerson } from 'react-icons/md';

export default function NewsDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const item = newsItems.find(i => i.id === id);
    const recommendedNews = newsItems.filter(i => i.id !== id).slice(0, 4);

    if (!item) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">文章未找到</h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light italic">您查找的新闻文章不存在。</p>
                    <Button onClick={() => router.push('/news')} variant="primary" className="rounded-full px-10">
                        返回新闻中心
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Enterprise Style Hero for Article */}
            <div className="relative h-[70vh] w-full overflow-hidden bg-gray-900">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />

                <div className="absolute inset-0 flex items-end pb-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-brand-green/20">
                                    <MdTag className="text-lg" /> {item.category}
                                </span>
                                <span className="text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10">
                                    <MdCalendarToday className="text-brand-green text-lg" /> {new Date(item.date).toLocaleDateString()}
                                </span>
                                {item.authorName && (
                                    <span className="text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10">
                                        <MdPerson className="text-brand-green text-lg" /> {item.authorName}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
                                {item.title}
                            </h1>

                            {/* Author Detail Row */}
                            <div className="flex items-center gap-4 py-6 border-t border-white/10">
                                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-brand-green shadow-xl">
                                    <Image
                                        src={item.authorImage || '/images/about-hero.png'}
                                        alt={item.authorName || 'Author'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-0.5">{item.authorName}</p>
                                    <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">认证贡献者</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Section backgroundColor={colors.background.primary} className="py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Reading Content */}
                        <div className="w-full lg:w-2/3">
                            <div className="mb-16">
                                <Button
                                    onClick={() => router.push('/news')}
                                    variant="outline"
                                    className="rounded-full border-gray-200 text-gray-600 hover:text-brand-green hover:border-brand-green px-6"
                                >
                                    <MdArrowBack className="mr-2" /> 所有文章
                                </Button>
                            </div>

                            <article className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed">
                                <NewsContent blocks={item.content} />
                            </article>
                        </div>

                        {/* Sidebar - Right Side as requested */}
                        <aside className="w-full lg:w-1/3">
                            <div className="lg:sticky lg:top-24 space-y-12">
                                <div>
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
                                                        className="object-cover transition-transform group-hover:scale-110"
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
                                </div>

                                {/* Quick Links or Corporate CTA */}
                                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Apsonic企业</h4>
                                    <p className="text-sm text-gray-600 mb-6 font-light">了解更多关于我们在非洲的使命和全球影响。</p>
                                    <Link href="/about">
                                        <Button variant="outline" className="w-full rounded-xl border-gray-200">我们的故事</Button>
                                    </Link>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </Section>
        </main>
    );
}
