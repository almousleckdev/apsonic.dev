"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";

export const RootsSection = () => {
  return (
    <Section
      backgroundColor={colors.background.white}
      padding="none"
      className="relative overflow-hidden "
    >
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Left Side: Image */}
        <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
          <Image
            src="/about/section1.png"
            alt="APSONIC Manufacturing Excellence"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Right Side: Text */}
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24 bg-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut" as const,
                  staggerChildren: 0.15, // Stagger effect for children
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tighter"
            >
              好质量 好生活
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1 },
              }}
              className="h-1 w-20 mb-8 origin-left"
              style={{ backgroundColor: colors.brand.green }}
            />

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                质量是我们的承诺，生活是我们的使命。每一辆APSONIC摩托车都承载着改善生活的愿景，通过卓越的品质为用户创造更美好的未来。
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                我们深知，一辆可靠的摩托车不仅是交通工具，更是连接梦想与现实的桥梁。从严格的质量把控到精益求精的工艺，我们始终坚持为用户提供值得信赖的产品，让每一次出行都充满信心与希望。
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse min-h-[80vh]">
        {/* Right Side: Image */}
        <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
          <Image
            src="/about/section2.png"
            alt="APSONIC Engineering Craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Left Side: Text */}
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut" as const,
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tighter"
            >
              工程师的匠心
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1 },
              }}
              className="h-1 w-20 mb-8 origin-left"
              style={{ backgroundColor: colors.brand.green }}
            />

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                每一个零部件的精密加工，每一道工序的严格把关，都凝聚着工程师的专业与执着。我们相信，只有对细节的极致追求，才能铸就真正的好质量。
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                从发动机的精密调校到车架的结构优化，从悬挂系统的反复测试到制动性能的严格验证，每一个环节都体现着工程师对完美的不懈追求。这份匠心，不仅是对技术的尊重，更是对用户生活品质的承诺。
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
