'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AdminCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon: React.ReactNode;
    trend?: {
        value: string;
        positive: boolean;
    };
    className?: string;
}

export const AdminStatCard = ({ title, value, description, icon, trend, className }: AdminCardProps) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={cn(
            "bg-white border border-gray-100 rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-brand-green/20 hover:shadow-xl hover:shadow-gray-100",
            className
        )}
    >
        <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h4 className="text-3xl font-bold text-black tracking-tight">{value}</h4>
            </div>
            <div className="p-3 rounded-xl bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {icon}
            </div>
        </div>

        {trend && (
            <div className="flex items-center gap-2 relative z-10">
                <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded",
                    trend.positive ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                )}>
                    {trend.positive ? '+' : '-'}{trend.value}
                </span>
                <span className="text-xs text-gray-500">vs last period</span>
            </div>
        )}

        {description && <p className="text-xs text-gray-500 mt-4 relative z-10">{description}</p>}

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors" />
    </motion.div>
);

export const AdminContentCard = ({ title, children, className, action }: { title: string, children: React.ReactNode, className?: string, action?: React.ReactNode }) => (
    <div className={cn("bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm", className)}>
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-black">{title}</h3>
            {action}
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);
