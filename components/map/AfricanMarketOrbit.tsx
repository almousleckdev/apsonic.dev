'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AFRICA_PATH = "M495.001,189.882c-0.938-1.114-2.43-1.587-3.833-1.228l-37.986,9.826c-1.562,0.403-3.194-0.228-4.088-1.562   l-16.51-24.756c-0.193-0.29-0.421-0.554-0.693-0.773l-15.58-13.247c-0.422-0.359-0.755-0.807-0.992-1.316l-19.458-42.969   c-0.088-0.219-0.202-0.42-0.342-0.605L384.122,96.97c-0.027-0.044-0.053-0.079-0.079-0.114l-15.756-24.424   c-0.526-0.825-0.729-1.825-0.526-2.79l0.464-2.317c0.22-1.105,0.922-2.053,1.912-2.587c1.001-0.535,2.176-0.596,3.22-0.167l2.413,1   c1.351,0.562,2.912,0.281,3.991-0.719c1.071-0.992,1.474-2.518,1.036-3.913l-2.711-8.51c-0.403-1.28-1.456-2.246-2.772-2.535   l-26.932-5.992c-0.57-0.122-1.176-0.114-1.737,0.027l-21.44,5.359c-0.632,0.158-1.298,0.149-1.931-0.035l-18.756-5.246   c-0.693-0.192-1.324-0.578-1.798-1.123l-4.861-5.474c-0.676-0.755-1.622-1.211-2.631-1.255l-11.641-0.587   c-1.931-0.088-3.632,1.289-3.913,3.21l-1.403,9.37c-0.158,1.018-0.711,1.93-1.544,2.518c-0.843,0.588-1.886,0.816-2.886,0.632   l-24.73-4.676c-1.351-0.263-2.448-1.22-2.877-2.518l-1.798-5.396c-0.5-1.491-1.878-2.518-3.448-2.57l-19.677-0.676   c-1.15-0.035-2.211-0.596-2.895-1.509l-6.378-8.51c-0.641-0.851-0.886-1.939-0.684-2.982c0.201-1.053,0.842-1.957,1.754-2.509   l1.675-1.009c1.72-1.027,2.325-3.22,1.403-4.992L209.93,2.004c-0.747-1.404-2.29-2.194-3.869-1.966L132.685,10.4   c-0.307,0.035-0.606,0.123-0.895,0.237l-21.432,8.729c-0.386,0.166-0.799,0.254-1.22,0.272L95.4,20.357   c-0.921,0.053-1.78,0.43-2.43,1.071L67.441,46.176c-0.578,0.562-0.965,1.289-1.096,2.079l-2.018,12.08   c-0.166,1.062-0.789,1.992-1.692,2.571l-22.696,14.37c-0.536,0.333-0.983,0.807-1.281,1.359l-20.625,37.294   c-0.342,0.614-0.508,1.298-0.474,2l1.596,34.231c0.009,0.298-0.009,0.588-0.07,0.878l-2.903,15.256   c-0.211,1.114,0.096,2.272,0.824,3.15l55.522,65.831c0.922,1.088,2.378,1.561,3.773,1.237l24.59-5.974   c0.377-0.088,0.763-0.123,1.158-0.097l34.433,2.404c0.474,0.044,0.956-0.026,1.421-0.166l25.608-8.291   c1.219-0.394,2.552-0.14,3.544,0.666l15.519,12.704c0.754,0.605,1.728,0.912,2.702,0.834l14.344-1.202   c1.053-0.079,2.088,0.271,2.859,0.991c0.782,0.71,1.229,1.71,1.229,2.772v13.905c0,0.192-0.018,0.377-0.044,0.562l-2.211,14.712   c-0.149,1.035,0.131,2.105,0.799,2.921l15.905,19.686c0.334,0.42,0.579,0.912,0.719,1.43l12.818,49.69   c0.184,0.692,0.158,1.421-0.061,2.096l-11.694,36.661c-0.28,0.878-0.228,1.834,0.14,2.676l19.976,44.733   c0.149,0.333,0.254,0.684,0.298,1.062l3.938,30.774c0.088,0.711,0.395,1.378,0.843,1.931l19.212,23.046   c0.562,0.685,0.868,1.526,0.868,2.413v16.791c0,1.079,0.465,2.114,1.29,2.833c0.807,0.72,1.894,1.036,2.974,0.895l33.977-4.421   l28.529-3.966c0.895-0.131,1.72-0.57,2.316-1.263l43.312-49.716c0.42-0.49,0.719-1.096,0.842-1.736l2.001-9.957   c0.193-0.974,0.772-1.842,1.605-2.395l4.553-3.026c1.018-0.694,1.649-1.825,1.675-3.053l0.747-30.775   c0.026-0.868,0.35-1.71,0.921-2.368l9.202-10.616c0.474-0.544,1.079-0.93,1.772-1.14l18.686-5.545   c1.606-0.473,2.702-1.938,2.702-3.615v-37.442c0-0.316-0.035-0.624-0.114-0.922l-9.106-35.67c-0.439-1.72,0.377-3.509,1.965-4.308   l3.088-1.543c0.562-0.281,1.035-0.685,1.386-1.185l27.125-38.293c0.386-0.552,0.921-0.982,1.526-1.263l21.871-9.799   c0.834-0.377,1.509-1.053,1.886-1.886l23.599-52.207C496.142,192.532,495.94,190.988,495.001,189.882z";

interface FlagData {
  id: string;
  country: string;
  code: string;
}

const OUTER_FLAGS: FlagData[] = [
  { id: 'ng', country: 'Nigeria', code: 'ng' },
  { id: 'gh', country: 'Ghana', code: 'gh' },
  { id: 'ke', country: 'Kenya', code: 'ke' },
  { id: 'sn', country: 'Senegal', code: 'sn' },
  { id: 'ci', country: 'Ivory Coast', code: 'ci' },
];

const INNER_FLAGS: FlagData[] = [
  { id: 'tg', country: 'Togo', code: 'tg' },
  { id: 'bj', country: 'Benin', code: 'bj' },
  { id: 'bf', country: 'Burkina Faso', code: 'bf' },
];

const OrbitingFlag = ({ flag, radiusX, radiusY, duration, index, total }: { 
  flag: FlagData; 
  radiusX: number; 
  radiusY: number; 
  duration: number; 
  index: number; 
  total: number 
}) => {
  const startAngle = (index / total) * 2 * Math.PI;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          transform: `translate(${Math.cos(startAngle) * radiusX}px, ${Math.sin(startAngle) * radiusY}px)`,
        }}
      >
        <motion.div
          className="relative group cursor-pointer"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white/50 group-hover:shadow-white/20">
            <img 
              src={`https://flagcdn.com/w80/${flag.code}.png`} 
              alt={flag.country}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {flag.country}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AfricanMarketOrbit = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      
      {/* Central Africa Map */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
        >
          <svg
            viewBox="0 0 512 512"
            className="w-full h-full fill-orange-500/80 stroke-orange-600/50 stroke-[2]"
          >
            <path d={AFRICA_PATH} />
          </svg>
        </motion.div>
        
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-white tracking-wider uppercase">Subsonic Market</h3>
          <p className="text-orange-400 text-sm font-medium tracking-widest">Presence Across Africa</p>
        </div>
      </div>

      {/* Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Orbit Path Line */}
        <div className="absolute w-[480px] h-[240px] border border-white/5 rounded-[100%]" />
        
        {/* Inner Orbit Path Line */}
        <div className="absolute w-[320px] h-[160px] border border-white/5 rounded-[100%]" />

        {/* Outer Orbit Flags */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-auto">
          {OUTER_FLAGS.map((flag, i) => (
            <OrbitingFlag 
              key={flag.id} 
              flag={flag} 
              radiusX={240} 
              radiusY={120} 
              duration={100} 
              index={i} 
              total={OUTER_FLAGS.length} 
            />
          ))}
        </div>

        {/* Inner Orbit Flags */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-auto">
          {INNER_FLAGS.map((flag, i) => (
            <OrbitingFlag 
              key={flag.id} 
              flag={flag} 
              radiusX={160} 
              radiusY={80} 
              duration={80} 
              index={i} 
              total={INNER_FLAGS.length} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfricanMarketOrbit;
