"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/design-tokens";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const philosophyItems: PhilosophyItem[] = [
  {
    id: "company-intro",
    title: "好质量好生活",
    description:
      "我们在生产的每一个环节都精益求精，致力于通过高品质产品改善民众生活。",
    image: "/about/Picture2.png",
    link: "#story",
  },
  {
    id: "africa-cup",
    title: "激情体育",
    description: "全球唯一连续三届签约非洲国家杯官方合作伙伴的摩托车品牌",
    image: "/about/Picture5.png",
    link: "/news/africa-cup-support",
  },
  {
    id: "community-transport",
    title: "社区运输方案",
    description:
      "通过多元化的三轮车和两轮车产品，我们为西非数百万人的出行和短途运输提供主力支持。",
    image: "/about/Picture7.png",
    link: "#engineering",
  },
  {
    id: "innovation-future",
    title: "可持续创新",
    description:
      "APSONIC倡导“高品质美好生活”，通过太阳能基础设施等创新技术回报社会。",
    image: "/about/Picture9.png",
    link: "#sustainability",
  },
];

export const PhilosophySection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.background.primary}
      padding="large"
      className=""
    >
      <Container maxWidth="wide">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Apsonic <span className="text-[#1FA84F]">理念</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              探索Apsonic的核心价值和品牌理念
            </p>
          </div>
        </ScrollReveal>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyItems.map((item, index) => (
            <ScrollReveal key={item.id} variant="fadeUp" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-300"
              >
                {item.link ? (
                  <Link href={item.link} className="block h-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
