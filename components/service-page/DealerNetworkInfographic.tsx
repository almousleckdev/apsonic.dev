"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICE_PAGE_CONFIG } from "@/lib/constants/service-page";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface DealerNetworkInfographicProps {
  className?: string;
}

/**
 * Dealer Network Infographic Component
 * Displays dealer statistics and West Africa network coverage map
 * Matches the exact design from the reference image
 */
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

export const DealerNetworkInfographic: React.FC<
  DealerNetworkInfographicProps
> = ({ className }) => {
  return (
    <Section
      className={className}
      backgroundColor={SERVICE_PAGE_CONFIG.colors.background}
      padding="large"
    >
      <Container maxWidth="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Statistics */}
          <ScrollReveal variant="slideRight">
            <div className="space-y-16">
              {/* Dealer Stability Section */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                  经销商稳定性高
                </h3>
                <div className="mb-3">
                  <span className="text-7xl md:text-8xl font-bold text-brand-green leading-none">
                    <Counter end={83} suffix="%" />
                  </span>
                </div>
                <p className="text-sm md:text-base text-brand-green leading-relaxed">
                  与德诚合作10年以上的一级代理商占83%
                </p>
              </div>

              {/* Network Coverage Stats Section */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
                  终端网点多, 覆盖率高
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-brand-green leading-none mb-2">
                      <Counter end={125} />
                    </div>
                    <p className="text-sm md:text-base text-brand-green leading-relaxed">
                      一级代理125家
                    </p>
                  </div>
                  <div className="w-px h-20 bg-gray-200"></div>
                  <div className="flex-1 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-brand-green leading-none mb-2">
                      <Counter end={4500} />
                    </div>
                    <p className="text-sm md:text-base text-brand-green leading-relaxed">
                      4500多个销售终端
                    </p>
                  </div>
                  <div className="w-px h-20 bg-gray-200"></div>
                  <div className="flex-1 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-brand-green leading-none mb-2">
                      <Counter end={90} suffix="%" />
                    </div>
                    <p className="text-sm md:text-base text-brand-green leading-relaxed">
                      网点覆盖率90%以上
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Development History Map Image */}
          <ScrollReveal variant="slideLeft">
            <div className="relative w-full">
              <Image
                src="/images/development-history.jpg"
                alt="非洲发展历程 - Africa Development History"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                quality={95}
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
};
