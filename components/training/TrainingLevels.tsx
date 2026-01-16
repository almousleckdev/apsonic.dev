'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { colors } from '@/lib/design-tokens';
import { MdSettings, MdBuild, MdEngineering, MdCheckCircle } from 'react-icons/md';

const levels = [
    {
        icon: <MdSettings />,
        title: "Level 1: Technician",
        subtitle: "Periodic Maintenance",
        description: "Foundational knowledge on basic service maintenance, oil changes, brake adjustments, and chain tensioning.",
        features: ["Basic System Overview", "Periodic Maintenance Schedule", "Proper Tool Usage"],
        color: "from-blue-500 to-blue-700"
    },
    {
        icon: <MdBuild />,
        title: "Level 2: Specialist",
        subtitle: "Diagnostic & Repair",
        description: "Advanced training on electrical systems, fuel delivery diagnosis, and minor engine repair.",
        features: ["Electrical Diagnostics", "Carburetor Tuning", "Suspension Service"],
        color: "from-brand-green to-green-700"
    },
    {
        icon: <MdEngineering />,
        title: "Level 3: Master",
        subtitle: "Engine & Transmission",
        description: "Complete mastery of engine teardown, transmission rebuilding, and complex troubleshooting.",
        features: ["Complete Engine Overhaul", "Transmission Rebuild", "Advanced Troubleshooting"],
        color: "from-orange-500 to-orange-700"
    }
];

export const TrainingLevels = () => {
    return (
        <Section backgroundColor={colors.background.primary} className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Certification Levels</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our curriculum is designed to take you from a novice to a master mechanic through a structured, hands-on learning path.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {levels.map((level, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#151515] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-green/30 transition-all group"
                        >
                            <div className={`h-2 bg-gradient-to-r ${level.color}`} />
                            <div className="p-8">
                                <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center text-3xl text-white mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    {level.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{level.title}</h3>
                                <span className="text-brand-green text-sm font-mono uppercase tracking-wider block mb-4">{level.subtitle}</span>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    {level.description}
                                </p>

                                <ul className="space-y-3">
                                    {level.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <MdCheckCircle className="text-brand-green/70 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
