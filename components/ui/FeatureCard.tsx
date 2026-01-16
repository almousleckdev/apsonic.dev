'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
    index?: number;
    variant?: 'default' | 'outline' | 'glass';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    actionLabel,
    onAction,
    className,
    index = 0,
    variant = 'default'
}) => {
    const variants = {
        default: 'bg-white hover:border-brand-green/30 hover:shadow-xl hover:shadow-gray-200 border-gray-100',
        outline: 'bg-transparent border-gray-200 hover:border-brand-green/30',
        glass: 'bg-white/80 backdrop-blur-md shadow-lg border-gray-100/50 hover:border-brand-green/30'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className={cn(
                'group p-8 rounded-2xl border transition-all duration-300',
                variants[variant],
                className
            )}
        >
            {icon && (
                <div className="mb-6 inline-flex rounded-xl bg-brand-green/10 p-3 text-3xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
            )}
            <h3 className="mb-3 text-xl font-bold text-gray-900">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
                {description}
            </p>
            {actionLabel && (
                <button
                    onClick={onAction}
                    className="text-sm font-bold text-brand-green flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                    {actionLabel} &rarr;
                </button>
            )}
        </motion.div>
    );
};
