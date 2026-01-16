'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdFileDownload } from 'react-icons/md';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MotorcyclePDFIcon, MotorcycleImageIcon, MotorcycleVideoIcon } from '@/components/ui/MotorcycleIcons';

const trainingData = {
    manuals: [
        {
            id: '1',
            title: '三轮车基础操作手册',
            description: '三轮车完整操作手册，包含安全操作指南和日常维护说明。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/images/services/services1.jpg',
            size: '3.2 MB',
            updated: '2025年1月'
        },
        {
            id: '2',
            title: '三轮车维修技术手册',
            description: '三轮车详细维修技术手册，包含故障诊断和维修步骤。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/images/services/services2.jpg',
            size: '7.5 MB',
            updated: '2024年12月'
        },
        {
            id: '3',
            title: '三轮车配件目录',
            description: '三轮车完整配件目录，包含所有原厂配件编号和规格。',
            pdfUrl: '/pdf/simpple.pdf',
            imageUrl: '/images/about/envato-labs-image-edit (32).png',
            size: '4.8 MB',
            updated: '2025年1月'
        }
    ],
    videos: [
        {
            id: '1',
            title: '三轮车操作基础',
            description: '学习三轮车的基本操作技巧和安全注意事项',
            thumbnail: '/images/services/services1.jpg',
            youtubeId: 'S-pUpk_yjZo'
        },
        {
            id: '2',
            title: '三轮车维护保养',
            description: '了解三轮车的日常维护和保养要点',
            thumbnail: '/images/services/services2.jpg',
            youtubeId: 'ScMzIvxBSi4'
        },
        {
            id: '3',
            title: '三轮车故障诊断',
            description: '掌握三轮车常见故障的诊断和维修方法',
            thumbnail: '/images/about/envato-labs-image-edit (32).png',
            youtubeId: 'JGwWNGJdvx8'
        }
    ],
    images: [
        '/images/services/services1.jpg',
        '/images/services/services2.jpg',
        '/images/about/envato-labs-image-edit (32).png',
        '/images/about/envato-labs-image-edit (38).png'
    ]
};

export default function TrainingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/services2.jpg"
                        alt="Apsonic三轮车手册"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            三轮车 <br />
                            <span className="text-brand-green">手册与指南</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl"
                        >
                            访问Apsonic三轮车官方文档库，下载用户手册、配件目录和服务指南。
                        </motion.p>
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
                            {trainingData.manuals.map((manual, idx) => (
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
                            {trainingData.images.map((imageUrl, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={imageUrl}
                                        alt={`三轮车培训图片 ${idx + 1}`}
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
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <MotorcycleVideoIcon size={36} className="text-brand-green" />
                            视频教程
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trainingData.videos.map((video, idx) => (
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
