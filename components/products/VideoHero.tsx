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
  videoSrc?: string;
  imageSrc?: string;
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
  imageSrc,
}) => {
  const isDetailPage = !!breadcrumbs;

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Breadcrumbs - Smooth slide down */}
      {isDetailPage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-0 left-0 right-0 z-30 bg-black/10 backdrop-blur-md border-b border-white/5"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/50">
              <Link href="/" className="hover:text-white transition-colors">
                首页
              </Link>
              <span className="opacity-30">/</span>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                全系车型
              </Link>
              {title && (
                <>
                  <span className="opacity-30">/</span>
                  <span className="text-white font-semibold">{title}</span>
                </>
              )}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Main Hero Background - Video or Image */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70"
            />
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={title || "产品展示"}
              fill
              className="object-cover opacity-70"
              priority
            />
          ) : null}
          {/* Multi-layered cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      {/* Content Container - Glass-morphism Card */}
      {(title || subtitle) && (
        <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                {title && (
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6"
                  >
                    {title}
                  </motion.h1>
                )}
                {subtitle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <p className="text-xl md:text-2xl font-light tracking-wide text-white/80 leading-relaxed max-w-md">
                      {subtitle}
                    </p>
                    <div className="mt-8 flex gap-4">
                      <div className="h-0.5 w-12 bg-white/30 self-center" />
                      <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/50">
                        Experience Power
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );

};
