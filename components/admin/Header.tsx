'use client';

import React from 'react';
import { MdMenu, MdNotificationsNone, MdSearch } from 'react-icons/md';
import Image from 'next/image';

interface HeaderProps {
    onMenuClick: () => void;
    title: string;
}

export const Header = ({ onMenuClick, title }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-xl px-4 md:px-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 text-gray-500 hover:text-black lg:hidden"
                >
                    <MdMenu className="text-2xl" />
                </button>
                <h1 className="text-xl font-bold text-black md:text-2xl">{title}</h1>
            </div>

            <div className="flex items-center gap-6">
                {/* Search - Hidden on small screens */}
                <div className="hidden md:flex items-center bg-gray-100 border border-transparent rounded-full px-4 py-2 w-64 focus-within:border-brand-green/50 focus-within:bg-white transition-all">
                    <MdSearch className="text-gray-500 text-xl" />
                    <input
                        type="text"
                        placeholder="搜索..."
                        className="bg-transparent border-none outline-none text-sm text-black ml-2 w-full"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 hover:text-black transition-colors">
                    <MdNotificationsNone className="text-2xl" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-brand-green rounded-full border-2 border-white" />
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="hidden text-right md:block">
                        <p className="text-sm font-bold text-black">管理员</p>
                        <p className="text-xs text-brand-green">超级管理员</p>
                    </div>
                    <div className="h-10 w-10 relative rounded-full overflow-hidden border border-brand-green/20">
                        <Image src="/images/about-hero.png" alt="Profile" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
};
