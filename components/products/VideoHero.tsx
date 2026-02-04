"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface VideoHeroProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  videoSrc: string;
}

/**
 * VideoHero - Cinematic product introduction with video background
 * Replaces ProductHero with dynamic video content
 */
export const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  videoSrc,
}) => {
  const isDetailPage = !!breadcrumbs;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Breadcrumbs - Smooth slide down */}
      {isDetailPage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-0 left-0 right-0 z-30 bg-white/10 backdrop-blur-sm border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-white/60">
              <Link href="/" className="hover:text-white transition-colors">
                首页
              </Link>
              <span>/</span>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                全系车型
              </Link>
              {title && (
                <>
                  <span>/</span>
                  <span className="text-white font-medium">{title}</span>
                </>
              )}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Main Hero Background - Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </motion.div>
      </div>

      {/* Content Container - Title and Badge */}
      {(title || subtitle) && (
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-4xl">
              {/* Title Image/Text - Slide from left with scale */}
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="text-white">
                  {title && (
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="text-2xl md:text-3xl font-light tracking-wide opacity-90">
                      {subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
