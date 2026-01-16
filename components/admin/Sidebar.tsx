'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MdDashboard,
    MdNewspaper,
    MdCategory,
    MdSettings,
    MdLogout,
    MdMenu,
    MdClose,
    MdTableRows,
    MdPeople
} from 'react-icons/md';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
    href: string;
    icon: React.ElementType;
    label: string;
    active: boolean;
    onClick?: () => void;
}

const SidebarItem = ({ href, icon: Icon, label, active, onClick }: SidebarItemProps) => (
    <Link href={href} onClick={onClick}>
        <div className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative",
            active
                ? "bg-brand-green shadow-[0_4_15px_rgba(31,168,79,0.2)]"
                : "text-gray-500 hover:bg-gray-100 hover:text-black"
        )}>
            <Icon className={cn("text-xl", active ? "text-white" : "group-hover:text-brand-green")} />
            <span className={cn("font-bold text-sm tracking-wide", active ? "text-white" : "")}>{label}</span>
            {active && (
                <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute -left-1 w-2 h-6 bg-brand-green rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </div>
    </Link>
);

export const Sidebar = ({
    isOpen,
    onClose,
    onLogout
}: {
    isOpen: boolean,
    onClose: () => void,
    onLogout: () => void
}) => {
    const pathname = usePathname();

    const menuItems = [
        { href: '/admin/dashboard', icon: MdDashboard, label: '仪表板' },
        { href: '/admin/news', icon: MdNewspaper, label: '新闻与博客' },
        { href: '/admin/categories', icon: MdCategory, label: '产品分类' },
        { href: '/admin/products', icon: MdTableRows, label: '产品规格' },
        { href: '/admin/users', icon: MdPeople, label: '用户管理' },
        { href: '/admin/settings', icon: MdSettings, label: '设置' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={cn(
                "fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-100 z-50 transition-transform duration-300 lg:translate-x-0 shadow-sm",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 h-full flex flex-col">
                    {/* Logo Section */}
                    <Link href="/admin/dashboard" className="flex items-center gap-3 mb-12 px-2 group">
                        <BrandLogo size={32} />
                        <span className="text-xl font-black text-black tracking-tighter">
                            APSONIC <span className="text-brand-green">ADMIN</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex-grow space-y-2">
                        {menuItems.map((item) => (
                            <SidebarItem
                                key={item.href}
                                {...item}
                                active={pathname === item.href}
                                onClick={onClose}
                            />
                        ))}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="pt-6 border-t border-gray-100">
                        <button
                            className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all group shadow-sm hover:shadow-red-200"
                            onClick={onLogout}
                        >
                            <MdLogout className="text-xl group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-sm tracking-wide">登出</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
