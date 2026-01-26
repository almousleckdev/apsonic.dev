"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  MotorcyclePDFIcon,
  MotorcycleImageIcon,
  MotorcycleVideoIcon,
} from "@/components/ui/MotorcycleIcons";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { TWO_WHEELER_DATA } from "@/lib/data/service-detail-data";
import { cn } from "@/lib/utils";
import {
  ANIMATION_VARIANTS,
  ENTERPRISE_EASE,
} from "@/lib/constants/animations";

import { ImageLightbox } from "@/components/ui/ImageLightbox";

export default function LocationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("underbone");
  const [lightbox, setLightbox] = React.useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
  });

  const currentData = TWO_WHEELER_DATA[selectedCategory];

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Upgraded */}
      <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden bg-[#0a1126] flex items-center justify-center text-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px]" />
          <Image
            src="/products/AP250GY (1).png"
            alt="Background"
            fill
            className="object-contain opacity-10 scale-150 rotate-[-10deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1126] via-[#0a1126]/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                服务与支持中心
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              两轮车 <br />
              <span className="text-blue-500">支持与原厂配件</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              查询官方服务网络，下载弯梁车、街车、越野车型的原厂维护手册。我们确保每一辆
              Apsonic 都能获得最专业的关怀。
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs - Premium Styling */}
      <div className="sticky top-0 z-40 bg-white/90 border-b border-gray-100 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex gap-12 overflow-x-auto no-scrollbar justify-center">
            {Object.keys(TWO_WHEELER_DATA).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={cn(
                  "px-4 py-8 font-black text-sm uppercase tracking-widest transition-all relative",
                  selectedCategory === key
                    ? "text-brand-green"
                    : "text-gray-400 hover:text-gray-900",
                )}
              >
                {TWO_WHEELER_DATA[key].title}
                {selectedCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 inset-x-0 h-1 bg-brand-green rounded-full shadow-[0_0_12px_rgba(40,167,69,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* PDF Downloads Section */}
        <ScrollReveal variant="fadeUp" amount={0.05} once={false}>
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                <MotorcyclePDFIcon size={32} className="text-brand-green" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  手册与配件目录
                </h2>
                <p className="text-gray-500 text-sm">
                  选择您的车型并下载官方文档
                </p>
              </div>
            </div>
            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {currentData.manuals.map((manual, idx) => (
                <motion.div
                  key={manual.id}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  className="bg-white rounded-[40px] p-10 transition-all group border border-gray-100 hover:border-brand-green/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
                >
                  <div
                    onClick={() => openLightbox(manual.imageUrl, manual.title)}
                    className="relative aspect-[4/3] mb-8 rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center p-8 cursor-zoom-in"
                  >
                    <Image
                      src={manual.imageUrl}
                      alt={manual.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-green transition-colors">
                    {manual.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed line-clamp-2 text-sm">
                    {manual.description}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-gray-300 tracking-[0.2em] mb-1">
                        Updated
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {manual.updated}
                      </span>
                    </div>
                    <a
                      href={manual.pdfUrl}
                      download
                      className="flex items-center gap-2 text-white font-bold text-sm bg-gray-900 px-8 py-4 rounded-2xl hover:bg-brand-green transition-all"
                    >
                      下载手册 <MdFileDownload className="text-xl" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Video Section */}
        <ScrollReveal variant="fadeUp" amount={0.05} once={false}>
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                <MotorcycleVideoIcon size={32} className="text-brand-green" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                  视频教程
                </h2>
                <p className="text-gray-500 text-sm">掌握您的两轮车维护技巧</p>
              </div>
            </div>
            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {currentData.videos.map((video) => (
                <motion.div key={video.id} variants={ANIMATION_VARIANTS.fadeUp}>
                  <VideoPlayer
                    youtubeId={video.youtubeId}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    description={video.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Image Gallery */}
        <ScrollReveal variant="fadeUp">
          <div className="bg-[#f8f9fc] rounded-[64px] p-12 lg:p-24 relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-[80px]" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 relative z-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[20px] bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20">
                    <MotorcycleImageIcon size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                    实物图解
                  </h2>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  探索 {currentData.title}{" "}
                  的内部构造。点击查看高清分解图，帮助您轻松定位和识别每一个原厂细节。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {currentData.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onClick={() =>
                    openLightbox(img, `${currentData.title} Detail ${idx + 1}`)
                  }
                  className="relative aspect-square rounded-[32px] overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-8 cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500 group"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx}`}
                    fill
                    className="object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-gray-900/40 to-transparent">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center ml-auto">
                      <MotorcycleImageIcon size={20} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Rendering */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        src={lightbox.src}
        alt={lightbox.alt}
      />
    </main>
  );
}
