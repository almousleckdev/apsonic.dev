'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SERVICE_PAGE_CONFIG } from '@/lib/constants/service-page';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface DealerNetworkInfographicProps {
  className?: string;
}

/**
 * Dealer Network Infographic Component
 * Displays dealer statistics and West Africa network coverage map
 * Matches the exact design from the reference image
 */
export const DealerNetworkInfographic: React.FC<DealerNetworkInfographicProps> = ({
  className,
}) => {
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
                  <span className="text-7xl md:text-8xl font-bold text-red-600 leading-none">83%</span>
                </div>
                <p className="text-sm md:text-base text-red-600 leading-relaxed">
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
                    <div className="text-6xl md:text-7xl font-bold text-red-600 leading-none mb-2">125</div>
                    <p className="text-sm md:text-base text-red-600 leading-relaxed">一级代理125家</p>
                  </div>
                  <div className="w-px h-20 bg-blue-500"></div>
                  <div className="flex-1 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-red-600 leading-none mb-2">4500</div>
                    <p className="text-sm md:text-base text-red-600 leading-relaxed">4500多个销售终端</p>
                  </div>
                  <div className="w-px h-20 bg-blue-500"></div>
                  <div className="flex-1 text-center">
                    <div className="text-6xl md:text-7xl font-bold text-red-600 leading-none mb-2">90%</div>
                    <p className="text-sm md:text-base text-red-600 leading-relaxed">网点覆盖率90%以上</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Map */}
          <ScrollReveal variant="slideLeft">
            <div className="relative">
              {/* Map Container */}
              <div className="relative w-full aspect-square max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8">
                <div className="relative w-full h-full">
                  {/* West Africa Map SVG */}
                  <svg
                    viewBox="0 0 500 500"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Background */}
                    <rect width="500" height="500" fill="#fafafa" />
                    
                    {/* Country Outlines - More accurate shapes with solid colors */}
                    {/* Mali - Red */}
                    <path
                      d="M 120 60 L 280 60 L 280 200 L 120 200 Z"
                      fill="#ef4444"
                      stroke="#dc2626"
                      strokeWidth="2"
                    />
                    
                    {/* Burkina Faso - Purple */}
                    <path
                      d="M 200 120 L 300 120 L 300 240 L 200 240 Z"
                      fill="#a855f7"
                      stroke="#9333ea"
                      strokeWidth="2"
                    />
                    
                    {/* Guinea - Green */}
                    <path
                      d="M 50 180 L 150 180 L 150 320 L 50 320 Z"
                      fill="#10b981"
                      stroke="#059669"
                      strokeWidth="2"
                    />
                    
                    {/* Cote D'Ivoire - Light Blue */}
                    <path
                      d="M 150 240 L 280 240 L 280 380 L 150 380 Z"
                      fill="#06b6d4"
                      stroke="#0891b2"
                      strokeWidth="2"
                    />
                    
                    {/* Ghana - Yellow */}
                    <path
                      d="M 280 280 L 360 280 L 360 380 L 280 380 Z"
                      fill="#eab308"
                      stroke="#ca8a04"
                      strokeWidth="2"
                    />
                    
                    {/* Togo - Light Green */}
                    <path
                      d="M 360 300 L 400 300 L 400 380 L 360 380 Z"
                      fill="#84cc16"
                      stroke="#65a30d"
                      strokeWidth="2"
                    />
                    
                    {/* Benin - Dark Blue */}
                    <path
                      d="M 400 260 L 460 260 L 460 380 L 400 380 Z"
                      fill="#2563eb"
                      stroke="#1d4ed8"
                      strokeWidth="2"
                    />

                    {/* Sales Outlets (Blue Dots) - More scattered across all countries */}
                    {[
                      // Mali
                      { x: 150, y: 100 }, { x: 200, y: 80 }, { x: 180, y: 120 }, { x: 220, y: 140 }, { x: 160, y: 160 },
                      // Burkina Faso
                      { x: 220, y: 150 }, { x: 250, y: 140 }, { x: 240, y: 180 }, { x: 260, y: 200 }, { x: 230, y: 220 },
                      // Guinea
                      { x: 80, y: 220 }, { x: 100, y: 240 }, { x: 70, y: 260 }, { x: 120, y: 280 }, { x: 90, y: 300 },
                      // Cote D'Ivoire
                      { x: 180, y: 280 }, { x: 200, y: 300 }, { x: 220, y: 320 }, { x: 240, y: 340 }, { x: 190, y: 350 },
                      { x: 210, y: 360 }, { x: 230, y: 340 },
                      // Ghana
                      { x: 300, y: 300 }, { x: 320, y: 320 }, { x: 310, y: 340 }, { x: 330, y: 350 },
                      // Togo
                      { x: 370, y: 320 }, { x: 380, y: 340 }, { x: 375, y: 360 },
                      // Benin
                      { x: 420, y: 300 }, { x: 430, y: 320 }, { x: 440, y: 340 }, { x: 425, y: 360 },
                    ].map((dot, i) => (
                      <circle
                        key={i}
                        cx={dot.x}
                        cy={dot.y}
                        r="4"
                        fill="#3b82f6"
                        opacity="0.9"
                      />
                    ))}

                    {/* Branch Companies (Red Stars) - 7 locations */}
                    {[
                      { x: 100, y: 230 }, // Guinea
                      { x: 200, y: 130 }, // Mali
                      { x: 250, y: 180 }, // Burkina Faso
                      { x: 200, y: 310 }, // Cote D'Ivoire
                      { x: 320, y: 330 }, // Ghana
                      { x: 380, y: 340 }, // Togo
                      { x: 430, y: 320 }, // Benin
                    ].map((star, i) => (
                      <g key={i} transform={`translate(${star.x}, ${star.y})`}>
                        <path
                          d="M 0,-10 L 3,-3 L 10,-3 L 4,1 L 6,10 L 0,5 L -6,10 L -4,1 L -10,-3 L -3,-3 Z"
                          fill="#ef4444"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                        />
                      </g>
                    ))}

                    {/* Factory (Green Triangle) - Togo */}
                    <g transform="translate(380, 340)">
                      <path
                        d="M 0,-10 L 9,10 L -9,10 Z"
                        fill="#10b981"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>

                  {/* Country Labels with Chinese names */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[15%] left-[30%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        马里
                      </div>
                    </div>
                    <div className="absolute top-[25%] left-[55%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        布基纳法索
                      </div>
                    </div>
                    <div className="absolute top-[35%] left-[12%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        几内亚
                      </div>
                    </div>
                    <div className="absolute top-[50%] left-[35%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        科特迪瓦
                      </div>
                    </div>
                    <div className="absolute top-[55%] left-[62%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        加纳
                      </div>
                    </div>
                    <div className="absolute top-[60%] left-[72%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        多哥
                      </div>
                    </div>
                    <div className="absolute top-[52%] left-[82%]">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 border border-gray-300 shadow-sm">
                        贝宁
                      </div>
                    </div>
                  </div>

                  {/* Map Legend - Bottom Right */}
                  <div className="absolute bottom-3 right-3 bg-white/98 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-300">
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="text-red-600 text-lg leading-none">★</span>
                        <span className="text-gray-700 font-medium">德诚分公司</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-green-600 text-lg leading-none">▲</span>
                        <span className="text-gray-700 font-medium">德诚工厂</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-blue-600 text-lg leading-none">●</span>
                        <span className="text-gray-700 font-medium">销售网点</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
};
