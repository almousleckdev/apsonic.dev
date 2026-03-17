"use client";

import React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import { stories } from "@/lib/data/about";

export const VoicesSection = () => {
  return (
    <Section
      backgroundColor={colors.background.white}
      className="relative z-10 border-t border-white/5 "
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          light={true}
          label={<span style={{ color: colors.brand.green }}>社区</span>}
          title="大陆的声音"
          highlightWord="大陆"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col h-full rounded-2xl bg-white p-8 border border-gray-100 hover:border-black/10 hover:shadow-xl hover:shadow-gray-200 transition-all group"
            >
              <div className="relative z-10 flex flex-col h-full flex-1">
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed line-clamp-4 flex-grow">
                  "{story.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-black/10 shrink-0">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-gray-900 font-bold truncate">{story.name}</h4>
                    <span className="text-gray-900 text-xs uppercase tracking-wider truncate block">
                      {story.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
