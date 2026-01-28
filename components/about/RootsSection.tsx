"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";

export const RootsSection = () => {
  return (
    <Section
      backgroundColor={colors.background.primary}
      padding="none"
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 space-y-32">
        {/* First Section: Manufacturing Excellence - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side: Manufacturing Excellence */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Manufacturing facility image */}
            <Image
              src="/about/Picture2.png"
              alt="APSONIC Manufacturing Excellence"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter">
                好质量 好生活
              </h2>
              <div className="h-2 w-32 bg-brand-green mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed mb-8 font-light"
            >
              质量是我们的承诺，生活是我们的使命。每一辆APSONIC摩托车都承载着改善生活的愿景，通过卓越的品质为用户创造更美好的未来。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              我们深知，一辆可靠的摩托车不仅是交通工具，更是连接梦想与现实的桥梁。从严格的质量把控到精益求精的工艺，我们始终坚持为用户提供值得信赖的产品，让每一次出行都充满信心与希望。
            </motion.p>
          </div>
        </div>

        {/* Second Section: Engineering Excellence - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Visual Side: Engineering Craftsmanship */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Engineering work image */}
            <Image
              src="/about/Picture3.png"
              alt="APSONIC Engineering Craftsmanship"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter">
                工程师的匠心
              </h2>
              <div className="h-2 w-32 bg-brand-green mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed mb-8 font-light"
            >
              每一个零部件的精密加工，每一道工序的严格把关，都凝聚着工程师的专业与执着。我们相信，只有对细节的极致追求，才能铸就真正的好质量。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              从发动机的精密调校到车架的结构优化，从悬挂系统的反复测试到制动性能的严格验证，每一个环节都体现着工程师对完美的不懈追求。这份匠心，不仅是对技术的尊重，更是对用户生活品质的承诺。因为我们深知，好质量源于每一个细节的用心，好生活始于每一次安全可靠的出行。
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};
