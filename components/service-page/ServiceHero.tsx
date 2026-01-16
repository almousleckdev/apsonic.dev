'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdSearch, MdArrowForward } from 'react-icons/md';
import { MotorcycleBookIcon } from '@/components/ui/MotorcycleIcons';

export interface ServiceHeroProps {
  className?: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ className }) => {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-white flex flex-col justify-center">

      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/services1.jpg"
          alt="Apsonic Professional Service"
          fill
          className="object-cover object-center opacity-30 mix-blend-normal blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              服务 <span className="text-brand-green">卓越</span>。
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
              获取手册、机械师培训和正品配件支持，为您的车队提供全方位服务。
            </p>
          </motion.div>

          {/* Integrated Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative max-w-2xl mx-auto mb-16 group"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <MdSearch className="h-6 w-6 text-gray-500 group-focus-within:text-brand-green transition-colors" />
            </div>
            <input
              type="text"
              placeholder="搜索手册、错误代码或维护指南..."
              className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-green/50 focus:ring-4 focus:ring-brand-green/10 transition-all text-lg shadow-xl shadow-gray-200"
            />
            <div className="absolute inset-y-2 right-2">
              <button className="h-full px-6 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-green/90 transition-colors">
                搜索
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Cards - Quick Access */}
      <div className="relative z-10 container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Download Manuals Card */}
          <motion.a
            href="/services/manuals"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 hover:border-brand-green/30 transition-all shadow-lg shadow-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <MotorcycleBookIcon size={28} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">手册与指南</h3>
                <p className="text-gray-600 text-sm">弯梁车、街车、越野车型手册下载</p>
              </div>
              <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-brand-green group-hover:text-brand-green transition-colors">
                <MdArrowForward />
              </div>
            </div>
          </motion.a>

          {/* Three-Wheeled Vehicle Manuals Card */}
          <motion.a
            href="/services/training"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 hover:border-brand-green/30 transition-all shadow-lg shadow-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <MotorcycleBookIcon size={28} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">三轮车</h3>
                <p className="text-gray-600 text-sm">三轮车手册与指南下载</p>
              </div>
              <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-brand-green group-hover:text-brand-green transition-colors">
                <MdArrowForward />
              </div>
            </div>
          </motion.a>

        </div>
      </div>

    </div>
  );
};

