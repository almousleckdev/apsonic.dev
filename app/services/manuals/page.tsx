'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdFileDownload } from 'react-icons/md';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MotorcyclePDFIcon, MotorcycleImageIcon, MotorcycleVideoIcon } from '@/components/ui/MotorcycleIcons';

type Category = 'underbone' | 'street' | 'offroad';

interface ManualItem {
    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    imageUrl: string;
    size: string;
    updated: string;
}

interface VideoItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    youtubeId: string;
}

const categoryData: Record<Category, { title: string; manuals: ManualItem[]; videos: VideoItem[]; images: string[] }> = {
    underbone: {
        title: '弯梁车',
        manuals: [
            {
                id: '1',
                title: 'AP50-3 用户手册',
                description: 'AP50-3型号完整用户手册，包含操作指南和维护说明。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/products/accessories/AP150-30.png',
                size: '2.4 MB',
                updated: '2025年1月'
            },
            {
                id: '2',
                title: 'AP150-30 维修手册',
                description: 'AP150-30型号详细维修手册，包含故障诊断和维修步骤。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/products/accessories/AP150-30-1.png',
                size: '5.8 MB',
                updated: '2024年12月'
            },
            {
                id: '3',
                title: 'AP110-A PLUS 配件目录',
                description: 'AP110-A PLUS型号完整配件目录，包含所有原厂配件编号。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/banners/homepage/img3.jpg',
                size: '3.2 MB',
                updated: '2025年1月'
            }
        ],
        videos: [
            {
                id: '1',
                title: '弯梁车基础操作指南',
                description: '学习如何正确操作和维护弯梁车',
                thumbnail: '/images/services/services1.jpg',
                youtubeId: 'S-pUpk_yjZo'
            },
            {
                id: '2',
                title: '弯梁车日常维护',
                description: '了解弯梁车的日常保养要点',
                thumbnail: '/images/services/services2.jpg',
                youtubeId: 'ScMzIvxBSi4'
            }
        ],
        images: [
            '/images/products/accessories/AP150-30.png',
            '/images/products/accessories/AP150-30-1.png',
            '/images/banners/homepage/img3.jpg'
        ]
    },
    street: {
        title: '街车',
        manuals: [
            {
                id: '1',
                title: 'AP125-30 用户手册',
                description: 'AP125-30型号完整用户手册，包含操作指南和维护说明。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/banners/homepage/img2.jpg',
                size: '2.6 MB',
                updated: '2025年1月'
            },
            {
                id: '2',
                title: 'AP125-12 维修手册',
                description: 'AP125-12型号详细维修手册，包含故障诊断和维修步骤。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/banners/homepage/img1.jpg',
                size: '6.1 MB',
                updated: '2024年12月'
            }
        ],
        videos: [
            {
                id: '1',
                title: '街车操作技巧',
                description: '掌握街车的正确操作技巧',
                thumbnail: '/images/services/services1.jpg',
                youtubeId: 'JGwWNGJdvx8'
            }
        ],
        images: [
            '/images/banners/homepage/img2.jpg',
            '/images/banners/homepage/img1.jpg'
        ]
    },
    offroad: {
        title: '越野',
        manuals: [
            {
                id: '1',
                title: 'AP200-GY 用户手册',
                description: 'AP200-GY越野型号完整用户手册，包含越野操作指南。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/services/services2.jpg',
                size: '3.5 MB',
                updated: '2025年1月'
            },
            {
                id: '2',
                title: '越野车维护指南',
                description: '越野车型号的专业维护和保养指南。',
                pdfUrl: '/pdf/simpple.pdf',
                imageUrl: '/images/services/services1.jpg',
                size: '4.2 MB',
                updated: '2024年11月'
            }
        ],
        videos: [
            {
                id: '1',
                title: '越野车操作指南',
                description: '学习越野车的正确操作方法',
                thumbnail: '/images/services/services2.jpg',
                youtubeId: 'LXb3EKWsInQ'
            }
        ],
        images: [
            '/images/services/services2.jpg',
            '/images/services/services1.jpg'
        ]
    }
};

export default function ManualsPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('underbone');
    const currentData = categoryData[selectedCategory];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        手册与指南
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg"
                    >
                        访问Apsonic官方文档库，下载用户手册、配件目录和服务公告。
                    </motion.p>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex gap-2 overflow-x-auto">
                        {(Object.keys(categoryData) as Category[]).map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-4 font-bold text-sm whitespace-nowrap transition-all ${
                                    selectedCategory === category
                                        ? 'text-brand-green border-b-2 border-brand-green'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {categoryData[category].title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* PDF Downloads Section */}
                <ScrollReveal variant="fadeUp">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <MotorcyclePDFIcon size={36} className="text-brand-green" />
                            下载PDF手册
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentData.manuals.map((manual, idx) => (
                                <motion.div
                                    key={manual.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-green/50 hover:shadow-lg transition-all group"
                                >
                                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={manual.imageUrl}
                                            alt={manual.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                            <MotorcyclePDFIcon size={14} className="text-white" /> PDF
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                                        {manual.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">{manual.description}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <span>更新: {manual.updated}</span>
                                        <span>{manual.size}</span>
                                    </div>
                                    <a
                                        href={manual.pdfUrl}
                                        download
                                        className="w-full bg-brand-green text-white px-4 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MdFileDownload className="text-xl" />
                                        下载PDF
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Picture Cards Section */}
                <ScrollReveal variant="fadeUp">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <MotorcycleImageIcon size={36} className="text-brand-green" />
                            图片指南
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentData.images.map((imageUrl, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={imageUrl}
                                        alt={`${currentData.title}图片 ${idx + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Video Instructions Section */}
                <ScrollReveal variant="fadeUp">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <MotorcycleVideoIcon size={36} className="text-brand-green" />
                            视频教程
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {currentData.videos.map((video, idx) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-brand-green/50 hover:shadow-lg transition-all group"
                                >
                                    <div className="relative aspect-video bg-gray-900">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                                            <a
                                                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition-colors flex items-center justify-center"
                                            >
                                                <MotorcycleVideoIcon size={32} className="text-white" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{video.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
