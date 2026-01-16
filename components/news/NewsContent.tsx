'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NewsContentBlock } from '@/lib/types/news';
import { cn } from '@/lib/utils';

interface NewsContentProps {
    blocks: NewsContentBlock[];
    className?: string;
}

export const NewsContent: React.FC<NewsContentProps> = ({ blocks, className }) => {
    return (
        <div className={cn("space-y-10", className)}>
            {blocks.map((block, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index % 3) }}
                >
                    {block.type === 'paragraph' && (
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl font-light">
                            {block.content}
                        </p>
                    )}

                    {block.type === 'image' && (
                        <figure className="my-12">
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                                <Image
                                    src={block.content}
                                    alt={block.caption || "Article image"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {block.caption && (
                                <figcaption className="mt-4 text-center text-sm text-gray-500 italic">
                                    {block.caption}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    {block.type === 'video' && (
                        <div className="my-12">
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${block.content}?rel=0`}
                                    title={block.caption || "YouTube video"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0"
                                />
                            </div>
                            {block.caption && (
                                <p className="mt-4 text-center text-sm text-gray-500 italic">
                                    {block.caption}
                                </p>
                            )}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};
