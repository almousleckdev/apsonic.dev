"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdSearch } from "react-icons/md";
import { ENTERPRISE_EASE } from "@/lib/constants/animations";

export interface ServiceHeroProps {
  className?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ className }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/services1.jpg"
          alt="Apsonic Professional Service"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: ENTERPRISE_EASE }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              服务 <span className="text-white">卓越</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              获取手册、机械师培训和正品配件支持，为您的车队提供全方位服务。
            </p>
          </motion.div>

          {/* Integrated Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: ENTERPRISE_EASE }}
            className="relative max-w-2xl mx-auto mb-8 group"
          >
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-10">
              <MdSearch className="h-6 w-6 text-gray-400 group-focus-within:text-white transition-colors" />
            </div>
            <input
              type="text"
              placeholder="搜索手册、错误代码或维护指南..."
              className="w-full h-16 pl-8 pr-16 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 focus:ring-4 focus:ring-white/20 transition-all text-lg backdrop-blur-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
