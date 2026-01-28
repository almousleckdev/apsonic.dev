"use client";

import React from "react";
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
import { TRICYCLE_DATA } from "@/lib/data/service-detail-data";
import {
  ANIMATION_VARIANTS,
  ENTERPRISE_EASE,
} from "@/lib/constants/animations";

import { ImageLightbox } from "@/components/ui/ImageLightbox";

export default function PartsPage() {
  const [lightbox, setLightbox] = React.useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
  });

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Upgraded */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-[#0a261a] flex items-center">
        {/* Background Pattern/Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-green blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-green/50 blur-[100px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                    官方技术支持
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                  三轮车 <br />
                  <span className="text-brand-green">原厂配件</span>与指南
                </h1>
                <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-light">
                  访问 Apsonic 三轮车官方技术文档库。我们提供 100%
                  正品配件图解、专业的维护手册以及全方位的故障诊断教程。
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-brand-green text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                    查看配件目录
                  </button>
                  <button className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-2xl hover:bg-white/10 transition-colors">
                    技术视频教程
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-square"
              >
                <Image
                  src="/products/AP150ZH-20 SPORT (1).png"
                  alt="Hero Tricycle"
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* PDF Downloads */}
        <ScrollReveal
          variant="fadeUp"
          delay={0.2}
          duration={0.9}
          amount={0.1}
          once={false}
        >
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                  <MotorcyclePDFIcon size={28} className="text-brand-green" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    手册与配件目录
                  </h2>
                  <p className="text-gray-500 text-sm">官方授权技术文档下载</p>
                </div>
              </div>
            </div>
            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {TRICYCLE_DATA.manuals.map((manual, idx) => (
                <motion.div
                  key={manual.id}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  className="bg-white rounded-[32px] p-8 transition-all group border border-gray-100 hover:border-brand-green/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
                >
                  <div
                    onClick={() => openLightbox(manual.imageUrl, manual.title)}
                    className="relative aspect-[4/3] mb-8 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-6 cursor-zoom-in"
                  >
                    <Image
                      src={manual.imageUrl}
                      alt={manual.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                    {manual.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed line-clamp-2 text-sm">
                    {manual.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">
                        Update
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {manual.updated}
                      </span>
                    </div>
                    <a
                      href={manual.pdfUrl}
                      download
                      className="flex items-center gap-2 text-white font-bold text-sm bg-gray-900 px-6 py-3 rounded-xl hover:bg-brand-green transition-all"
                    >
                      下载手册 <MdFileDownload className="text-lg" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Technical Videos */}
        <ScrollReveal
          variant="scaleIn"
          delay={0.25}
          duration={0.9}
          amount={0.1}
          once={false}
        >
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                <MotorcycleVideoIcon size={28} className="text-brand-green" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  技术培训视频
                </h2>
                <p className="text-gray-500 text-sm">
                  由专业技师演示的操作与维护技巧
                </p>
              </div>
            </div>
            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {TRICYCLE_DATA.videos.map((video) => (
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

        {/* Parts Gallery */}
        <ScrollReveal
          variant="fadeIn"
          delay={0.2}
          duration={0.9}
          amount={0.1}
          once={false}
        >
          <div className="bg-gray-50 rounded-[48px] p-12 lg:p-20 overflow-hidden relative">
            {/* Decorative Background Icon */}
            <div className="absolute top-10 right-10 opacity-[0.03] rotate-12">
              <MotorcycleImageIcon size={400} />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/30">
                    <MotorcycleImageIcon size={28} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                    配件明细图
                  </h2>
                </div>
                <p className="text-gray-600 text-lg max-w-xl">
                  查看三轮车关键部件的高精度实物分解图，帮助您准确识别和选购所需零件。
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-sm hover:shadow-xl transition-all">
                查看全图册
              </button>
            </div>

            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10"
            >
              {TRICYCLE_DATA.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  onClick={() => openLightbox(img, `Part Detail ${idx + 1}`)}
                  className="relative aspect-square rounded-[32px] overflow-hidden bg-white group shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-zoom-in flex items-center justify-center p-8 border border-gray-100"
                >
                  <Image
                    src={img}
                    alt={`Part Detail ${idx + 1}`}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/20 to-transparent">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase">
                      Click to Enlarge
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
