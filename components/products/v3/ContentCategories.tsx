"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdPlayCircleOutline, MdFeaturedVideo, MdGroups } from "react-icons/md";

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ContentCategoriesProps {
  categories?: Category[];
}

export const ContentCategories: React.FC<ContentCategoriesProps> = ({
  categories = [
    {
      icon: <MdPlayCircleOutline className="w-12 h-12" />,
      title: "真实骑行视频",
      description: "观看真实客户在非洲地形上体验我们摩托车的精彩瞬间",
    },
    {
      icon: <MdFeaturedVideo className="w-12 h-12" />,
      title: "功能演示",
      description: "详细视频展示核心功能与卓越性能",
    },
    {
      icon: <MdGroups className="w-12 h-12" />,
      title: "客户故事",
      description: "听听非洲大陆各地满意客户的真实评价",
    },
  ],
}) => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow group"
            >
              {/* Icon */}
              <div className="text-[#1FA84F] mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
