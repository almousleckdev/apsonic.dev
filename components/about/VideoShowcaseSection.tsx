"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Section } from "@/components/ui";
import { colors } from "@/lib/design-tokens";
import Image from "next/image";
import { videos } from "@/lib/data/about";

export const VideoShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <Section
      id="videos"
      backgroundColor={colors.background.primary}
      className="relative py-24 border-t border-gray-100"
    >
      <div className="container mx-auto px-4 relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-brand-green hover:bg-brand-green hover:text-white transition-all bg-white shadow-sm"
        >
          <MdKeyboardArrowLeft className="text-3xl" />
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-20 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-brand-green hover:bg-brand-green hover:text-white transition-all bg-white shadow-sm"
        >
          <MdKeyboardArrowRight className="text-3xl" />
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="w-full lg:w-5/12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentVideo.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {currentVideo.description}
                </p>
                <a
                  href={currentVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-3 transition-all"
                >
                  观看完整视频 <MdKeyboardArrowRight className="text-xl" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Video Player & Thumbnails */}
          <div className="w-full lg:w-7/12">
            {/* Main Video Area */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-gray-100 mb-8">
              <video
                key={currentVideo.id}
                width="100%"
                height="100%"
                controls
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                poster={currentVideo.thumbnail}
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>

            {/* Bottom Area: Thumbnails & Indicators */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Indicators (Dots) */}
              <div className="flex gap-2">
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-brand-green"
                        : "w-4 bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnails (Preview next items) */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {videos.map((video, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? "border-brand-green opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <MdPlayCircleOutline className="text-white text-2xl" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
