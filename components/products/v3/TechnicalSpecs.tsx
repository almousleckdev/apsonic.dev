"use client";

import React from "react";
import { motion } from "framer-motion";

interface SpecRow {
  label: string;
  values: string[];
}

interface TechnicalSpecsProps {
  title?: string;
  specs: SpecRow[];
}

export const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({
  title = "技术规格",
  specs,
}) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-0">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center px-10"
        >
          {title}
        </motion.h2>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-6 py-6 text-left font-semibold text-sm md:text-base">
                  规格参数
                </th>
                <th className="px-6 py-6 text-left font-semibold text-sm md:text-base">
                  数值 1
                </th>
                <th className="px-6 py-6 text-left font-semibold text-sm md:text-base">
                  数值 2
                </th>
                <th className="px-6 py-6 text-left font-semibold text-sm md:text-base">
                  数值 3
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-900/5" : "bg-white"
                  } hover:bg-gray-900/10 transition-colors`}
                >
                  <td className="px-6 py-6 font-medium text-gray-900 text-sm md:text-base">
                    {spec.label}
                  </td>
                  {spec.values.map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      className="px-6 py-6 text-gray-700 text-sm md:text-base"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
