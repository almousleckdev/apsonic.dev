'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdSchool, MdVerified, MdArchitecture } from 'react-icons/md';

export const TrainingHero = () => {
    return (
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-white flex items-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/services/services2.jpg" // Using an existing technical image
                    alt="Apsonic Mechanic Training"
                    fill
                    className="object-cover object-center opacity-30 mix-blend-normal blur-[2px]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 px-4 py-1.5 rounded-full text-brand-green text-sm font-bold mb-6"
                    >
                        <MdSchool className="text-lg" />
                        APSONIC ACADEMY
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Master the <br />
                        <span className="text-brand-green">Machine.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl"
                    >
                        Join the elite network of certified Apsonic technicians. Our tier-based training program equips you with the skills to diagnose, repair, and maintain the next generation of African mobility.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};
