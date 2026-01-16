'use client';

import React from 'react';
import { MdSearch } from 'react-icons/md';

export const ManualsSearch = () => {
    return (
        <div className="bg-[#111] border-b border-white/5 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <MdSearch className="h-6 w-6 text-gray-500 group-focus-within:text-brand-green transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter model number (e.g. AP125) or keyword..."
                            className="w-full h-14 pl-14 pr-4 bg-[#1a1a1a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-green/50 placeholder-gray-600 transition-all shadow-lg"
                        />
                    </div>
                    <div className="flex gap-4 mt-4 justify-center">
                        <span className="text-sm text-gray-500">Popular:</span>
                        <button className="text-sm text-brand-green hover:underline">AP125-8</button>
                        <button className="text-sm text-brand-green hover:underline">Aloba</button>
                        <button className="text-sm text-brand-green hover:underline">3-Wheeler</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
