"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import { MdOutlineVerifiedUser, MdOutlineMap } from "react-icons/md";

/**
 * Dealer Network Infographic Component
 */
// Custom hook for counting up animation
const useCountUp = (
  end: number,
  duration: number = 4000,
  start: boolean = false,
) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

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
  duration = 4000,
}) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const count = useCountUp(end, duration, isInView);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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

export const DealerNetworkInfographic: React.FC<{ className?: string }> = ({
  className,
}) => {
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
    <Section
      backgroundColor={colors.background.white}
      padding="none"
      className={`relative overflow-hidden ${className || ""}`}
    >
      <div className="flex flex-col lg:flex-row-reverse min-h-[80vh]">
        {/* Right Side: Image */}
        <div className="relative h-[50vh] w-full lg:h-auto lg:w-1/2">
          <Image
            src="/images/development-history.jpg"
            alt="发展历程"
            fill
            className="object-cover object-left lg:object-[20%_center]"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
            priority
          />
          <div className="absolute inset-0 bg-green-900/5 pointer-events-none" />
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
              <MdOutlineVerifiedUser className="text-2xl" />
              <span className="font-bold text-sm uppercase tracking-widest">
                合作伙伴
              </span>
            </motion.div>
            <motion.h2
              variants={childVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            >
              经销商稳定性高 · <span className="text-gray-900">覆盖率广</span>
            </motion.h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              <motion.p variants={childVariants}>
                APSONIC与经销商建立了长期互信的合作关系。与德诚合作10年以上的一级代理商占总数的绝大部分，这得益于我们对品质和服务的持续投入。
              </motion.p>
            </div>

            <motion.div
              variants={childVariants}
              className="flex items-center gap-8 pt-8 mt-8 border-t border-gray-200"
            >
              <div className="flex flex-col">
                <span
                  className="text-5xl md:text-6xl font-bold"
                  style={{ color: colors.brand.green }}
                >
                  <Counter end={83} suffix="%" />
                </span>
                <span className="text-gray-600 text-sm md:text-base mt-2 font-medium">10年以上合作代理</span>
              </div>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 mb-4 mt-16"
              style={{ color: colors.brand.green }}
            >
              <MdOutlineMap className="text-2xl" />
              <span className="font-bold text-sm uppercase tracking-widest">
                服务网络
              </span>
            </motion.div>
            <motion.h3
              variants={childVariants}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            >
              终端网点多
            </motion.h3>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-x-8 gap-y-6"
            >
              <div className="flex flex-col">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.brand.green }}
                >
                  <Counter end={125} />
                </span>
                <span className="text-gray-600 text-sm mt-1">一级代理</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300" />
              <div className="flex flex-col">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.brand.green }}
                >
                  <Counter end={4500} suffix="+" />
                </span>
                <span className="text-gray-600 text-sm mt-1">销售终端</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300" />
              <div className="flex flex-col">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.brand.green }}
                >
                  <Counter end={90} suffix="%" />
                </span>
                <span className="text-gray-600 text-sm mt-1">网点覆盖率</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
