'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NewsItem } from '@/lib/types/news';
import { cn } from '@/lib/utils';
import { MdCalendarToday, MdOutlineArrowForward } from 'react-icons/md';

interface NewsCardProps {
    item: NewsItem;
    index?: number;
    className?: string;
    light?: boolean;
    variant?: 'default' | 'overlay';
}

export const NewsCard: React.FC<NewsCardProps> = ({
    item,
    index = 0,
    className,
    light = false,
    variant = 'default'
}) => {
    if (variant === 'overlay') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn('relative h-[400px] rounded-2xl overflow-hidden group border border-gray-100 cursor-pointer shadow-lg shadow-gray-200', className)}
            >
                <Link href={`/news/${item.id}`} className="absolute inset-0">
                    <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest mb-2 block">
                            {item.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {item.excerpt}
                        </p>
                    </div>
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn('group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-green/30 hover:shadow-xl hover:shadow-gray-200 transition-all duration-300', className)}
        >
            <Link href={`/news/${item.id}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-green text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                        {item.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    {/* Author & Date info */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden border border-brand-green/30">
                            <Image
                                src={item.authorImage || '/images/about-hero.png'}
                                alt={item.authorName || 'Author'}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-900 leading-none mb-0.5">{item.authorName || 'Apsonic新闻'}</span>
                            <div className="flex items-center gap-1.5 text-gray-400 text-[9px] uppercase tracking-widest leading-none">
                                <MdCalendarToday className="text-brand-green size-2.5" />
                                {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold leading-tight group-hover:text-brand-green transition-colors line-clamp-2 flex-grow text-gray-900">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-sm line-clamp-2 leading-relaxed text-gray-600">
                        {item.excerpt}
                    </p>
                    <div className="mt-6 flex items-center text-brand-green font-bold text-sm group-hover:gap-3 transition-all">
                        阅读故事 <MdOutlineArrowForward className="ml-2" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
