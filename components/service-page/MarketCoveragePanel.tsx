"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { Container } from "@/components/ui/Container";

const ALL_COUNTRIES = [
  { name: "Togo", flag: "🇹🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Ivory Coast", flag: "🇨🇮" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Mauritania", flag: "🇲🇷" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "Ethiopia", flag: "🇪🇹" },
];

const HUB_COUNTRIES = [
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Ivory Coast", flag: "🇨🇮" },
];

const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = "", className = "" }: { from?: number, to: number, duration?: number, suffix?: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${Math.round(value)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, suffix]);

  return <span ref={ref} className={className}>{from}{suffix}</span>;
};

export const MarketCoveragePanel = () => {
  return (
    <Container className="py-20" maxWidth="wide">
      <div className="flex flex-col lg:flex-row items-stretch w-full gap-8 lg:gap-16">
        
        {/* Left Panel - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">
          
          {/* Top Section: 27 Countries */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-baseline gap-2 justify-center lg:justify-start">
              产品已覆盖 <AnimatedCounter to={27} className="text-5xl text-[#E33B32] font-black tracking-tighter" /> 个非洲国家
            </h2>
            <div className="bg-[#F8F9FA] p-6 rounded-2xl">
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {ALL_COUNTRIES.map((country) => (
                  <div 
                    key={country.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-gray-200 text-[11px] sm:text-xs font-medium text-gray-600 shadow-sm transition-transform hover:scale-105 cursor-default"
                  >
                    <span>{country.name}</span>
                    <span className="text-sm">{country.flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section: 10 Hubs */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-baseline gap-2 justify-center lg:justify-start">
              已在 <AnimatedCounter to={10} className="text-4xl text-[#E33B32] font-black tracking-tighter" /> 个国家建立营销服务机构
            </h2>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {HUB_COUNTRIES.map((country) => (
                <div 
                  key={country.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-xs sm:text-sm font-medium text-gray-700 transition-transform hover:scale-105 cursor-default"
                >
                  <span className="text-base">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Stats */}
          <div className="pt-8 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-3 text-[#1FA84F]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="font-bold text-sm tracking-widest">服务网络</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">终端网点多</h3>
            
            <div className="flex items-center divide-x divide-gray-200 w-full justify-center lg:justify-start">
              <div className="pr-6 sm:pr-8 text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#1FA84F] mb-1"><AnimatedCounter to={125} /></div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">一级代理</div>
              </div>
              <div className="px-6 sm:px-8 text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#1FA84F] mb-1"><AnimatedCounter to={4500} suffix="+" /></div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">销售终端</div>
              </div>
              <div className="pl-6 sm:pl-8 text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#1FA84F] mb-1"><AnimatedCounter to={90} suffix="%" /></div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">网点覆盖率</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Panel - Map Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[800px] flex items-center justify-center">
          <div className="relative w-full h-full min-h-[400px]">
            <Image 
              src="/services/servicesmap.jpg"
              alt="APSONIC Africa Market Coverage Map"
              fill
              className="object-cover lg:object-contain object-center mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </Container>
  );
};
