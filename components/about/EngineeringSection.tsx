"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui";
import * as Icons from "react-icons/md";
import { engineeringFeatures } from "@/lib/data/about";

interface SpecCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
}

const SpecCard = ({
  title,
  value,
  description,
  icon,
  colSpan = "col-span-1",
}: SpecCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={cn(
      "group relative overflow-hidden rounded-2xl bg-gray-50 p-8 border border-gray-100",
      colSpan,
    )}
  >
    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
      <div className="text-4xl text-brand-green">{icon}</div>
    </div>

    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          {title}
        </h3>
        <div className="text-3xl font-bold text-gray-900 mb-4">{value}</div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>

    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

export const EngineeringSection = () => {
  return (
    <Section
      id="engineering"
      backgroundColor={colors.background.primary}
      className="relative z-10 my-8 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <SectionHeader light={true} label="精密工程" title="经久耐用。" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {/* Feature 1: Engine Tech - Spans 2 rows on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden border border-gray-100 group"
          >
            <Image
              src="/about/Picture3.png"
              alt="Apsonic Precision Welding"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-2 flex items-center gap-2 text-brand-green">
                <Icons.MdHandyman className="text-xl" />
                <span className="font-bold uppercase tracking-widest text-xs">
                  精密制造
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                本地化组装生产线
              </h3>
              <p className="max-w-md text-gray-300">
                位于多哥洛美的先进组装中心，结合当地工匠精神与现代工业标准，确保每一辆出厂的摩托车都符合严苛的耐用性测试。
              </p>
            </div>
          </motion.div>

          {/* Render specs from data */}
          {engineeringFeatures.map((spec, index) => {
            const IconComponent = (Icons as any)[spec.iconName];
            return (
              <SpecCard
                key={spec.id}
                title={spec.title}
                value={spec.value}
                description={spec.description}
                icon={IconComponent ? <IconComponent /> : null}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};
