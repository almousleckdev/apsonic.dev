"use client";

import React from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  videoSrc: string;
  icon?: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  sectionTitle?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  features,
  sectionTitle = "为非洲而设计的核心功能",
}) => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="w-full px-0">
        {/* Section Title */}
        <div className="text-center mb-16 px-10">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            基于非洲大陆独特的地理环境和使用需求，我们的摩托车在耐用性、燃油经济性和适应性方面进行了全面优化。
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-0">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${
                  index !== features.length - 1 ? "" : ""
                }`}
              >
                {/* Video Side */}
                <div
                  className={`relative bg-black ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <video
                    src={feature.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>

                {/* Text Side */}
                <div
                  className={`flex items-center justify-center p-12 md:p-16 bg-transparent ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="max-w-md">
                    {feature.icon && (
                      <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
