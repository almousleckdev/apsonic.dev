"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import {
  MdWaterDrop,
  MdFavorite,
  MdGroups,
  MdLightbulb,
  MdSecurity,
} from "react-icons/md";
import Image from "next/image";

// Custom hook for counting up animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  start: boolean = false,
) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 2000,
}) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const count = useCountUp(end, duration, isInView);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const MarketDaySection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* First Section: Water - Image Left, Text Right */}
      <Section
        backgroundColor={colors.background.white}
        padding="none"
        className="relative overflow-hidden "
      >
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Left Side: Image */}
          <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
            <Image
              src="/about/section3.png"
              alt="APSONIC打井项目"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-blue-900/10" />
          </div>

          {/* Right Side: Text */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <motion.div
                variants={childVariants}
                className="inline-flex items-center gap-2 mb-4"
                style={{ color: colors.brand.green }}
              >
                <MdWaterDrop className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  社会责任
                </span>
              </motion.div>
              <motion.h2
                variants={childVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              >
                为非洲打井 · <span className="text-gray-900">生命之源</span>
              </motion.h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <motion.p variants={childVariants}>
                  清洁的水源是生命的基础。APSONIC深知这一点，我们不仅为非洲提供可靠的交通工具，更致力于改善当地居民的生活质量。
                </motion.p>
                <motion.p variants={childVariants}>
                  在非洲的许多地区，清洁水源依然稀缺。APSONIC通过打井项目，为当地社区带来生命之源，让更多家庭享有安全饮用水，让孩子们拥有更健康的未来。
                </motion.p>
              </div>

              <motion.div
                variants={childVariants}
                className="flex items-center gap-6 pt-8 mt-8 border-t border-gray-200"
              >
                <div className="flex flex-col">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.brand.green }}
                  >
                    <Counter end={50} suffix="+" />
                  </span>
                  <span className="text-gray-600 text-sm mt-1">水井数量</span>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="flex flex-col">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.brand.green }}
                  >
                    <Counter end={10} suffix="万+" />
                  </span>
                  <span className="text-gray-600 text-sm mt-1">受益居民</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Second Section: Community - Text Left, Image Right */}
      <Section
        backgroundColor={colors.background.white}
        padding="none"
        className="relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row-reverse min-h-[80vh]">
          {/* Right Side: Image */}
          <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
            <Image
              src="/about/section4.png"
              alt="社区妇女在水井旁"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-green-900/10" />
          </div>

          {/* Left Side: Text */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={textVariantsLeft}
            >
              <motion.div
                variants={childVariants}
                className="inline-flex items-center gap-2 mb-4"
                style={{ color: colors.brand.green }}
              >
                <MdGroups className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  社区赋能
                </span>
              </motion.div>
              <motion.h2
                variants={childVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              >
                汇聚希望 · <span className="text-gray-900">滋润生命</span>
              </motion.h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <motion.p variants={childVariants}>
                  每一口水井不仅仅是基础设施，更是社区团结与希望的象征。当清澈的水源涌出时，我们看到的是妇女们脸上的笑容，是孩子们健康成长的未来。
                </motion.p>
                <motion.p variants={childVariants}>
                  APSONIC的打井项目让非洲的母亲们不再需要长途跋涉取水，让她们有更多时间照顾家庭、发展事业。清洁的水源改变的不仅是生活方式，更是整个社区的命运。
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Third Section: Lighting - Image Left, Text Right */}
      <Section
        backgroundColor={colors.background.white}
        padding="none"
        className="relative z-20 overflow-visible"
      >
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Left Side: Image */}
          <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
            <Image
              src="/about/section5.png"
              alt="太阳能路灯照亮非洲"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-yellow-900/10" />
          </div>

          {/* Right Side: Text */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-24 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <motion.div
                variants={childVariants}
                className="inline-flex items-center gap-2 mb-4"
                style={{ color: colors.brand.green }}
              >
                <MdLightbulb className="text-2xl" />
                <span className="font-bold text-sm uppercase tracking-widest">
                  基础设施建设
                </span>
              </motion.div>
              <motion.h2
                variants={childVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              >
                点亮非洲 · <span className="text-gray-900">照亮未来</span>
              </motion.h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <motion.p variants={childVariants}>
                  光明不仅驱散黑暗，更带来安全与希望。APSONIC在非洲各地建设太阳能照明设施，为社区带来光明，让夜晚不再是恐惧的代名词。
                </motion.p>
                <motion.p variants={childVariants}>
                  从街道到市场，从学校到医院，APSONIC的照明项目让非洲的夜晚焕然一新。孩子们可以在灯光下学习，商贩可以延长营业时间，社区的经济活力得到提升。
                </motion.p>
              </div>

              <motion.div
                variants={childVariants}
                className="flex items-center gap-6 pt-8 mt-8 border-t border-gray-200"
              >
                <div className="flex flex-col">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.brand.green }}
                  >
                    <Counter end={100} suffix="+" />
                  </span>
                  <span className="text-gray-600 text-sm mt-1">太阳能路灯</span>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="flex flex-col">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: colors.brand.green }}
                  >
                    <Counter end={30} suffix="+" />
                  </span>
                  <span className="text-gray-600 text-sm mt-1">服务社区</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};
