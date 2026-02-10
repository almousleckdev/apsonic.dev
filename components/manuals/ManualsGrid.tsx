"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdFileDownload, MdPictureAsPdf, MdDescription } from "react-icons/md";

const manuals = [
  {
    model: "AP125-8",
    name: "Standard Commuter Series",
    type: "Owner's Manual",
    size: "2.4 MB",
    updated: "Jan 2025",
  },
  {
    model: "AP150-5",
    name: "Super Aloba",
    type: "Owner's Manual",
    size: "2.8 MB",
    updated: "Dec 2024",
  },
  {
    model: "AP200-GY",
    name: "Off-Road Enduro",
    type: "Service Manual",
    size: "15.2 MB",
    updated: "Nov 2024",
  },
  {
    model: "AP250-Cargo",
    name: "Heavy Duty Tricycle",
    type: "Parts Catalog",
    size: "8.1 MB",
    updated: "Jan 2025",
  },
  {
    model: "AP110-Classic",
    name: "Urban Series",
    type: "Owner's Manual",
    size: "2.1 MB",
    updated: "Oct 2024",
  },
  {
    model: "Generic",
    name: "Apsonic Warranty Terms",
    type: "Legal Document",
    size: "0.5 MB",
    updated: "Jan 2024",
  },
];

export const ManualsGrid = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-white mb-8">
        Latest Documentation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manuals.map((manual, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-[#151515] border border-white/5 rounded-xl p-6 hover:bg-[#1a1a1a] hover:border-white/20 transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 bg-red-900/20 text-red-500 rounded-lg flex items-center justify-center text-xl">
                <MdPictureAsPdf />
              </div>
              <span className="text-xs text-gray-500 font-mono bg-[#222] px-2 py-1 rounded">
                {manual.model}
              </span>
            </div>

            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-white transition-colors">
              {manual.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{manual.type}</p>

            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
              <span>Updated: {manual.updated}</span>
              <span className="flex items-center gap-1 font-bold text-gray-300">
                <MdFileDownload className="text-lg" /> {manual.size}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
