"use client";

import React from "react";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdPublic,
  MdMap,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

// Expanded list of countries APSONIC is active in (27 approx)
// West Africa focus + others
const coverageCountries = [
  { name: "Togo 🇹🇬", active: true },
  { name: "Ghana 🇬🇭", active: true },
  { name: "Mali 🇲🇱", active: true },
  { name: "Burkina Faso 🇧🇫", active: true },
  { name: "Ivory Coast 🇨🇮", active: true },
  { name: "Benin 🇧🇯", active: true },
  { name: "Guinea 🇬🇳", active: true },
  { name: "Niger 🇳🇪", active: true },
  { name: "Senegal 🇸🇳", active: true },
  { name: "Nigeria 🇳🇬", active: true },
  { name: "Cameroon 🇨🇲", active: true },
  { name: "Chad 🇹🇩", active: true },
  { name: "Liberia 🇱🇷", active: true },
  { name: "Sierra Leone 🇸🇱", active: true },
  { name: "Gambia 🇬🇲", active: true },
  { name: "Gabon 🇬🇦", active: true },
  { name: "Kenya 🇰🇪", active: true },
  { name: "Uganda 🇺🇬", active: true },
  { name: "Tanzania 🇹🇿", active: true },
  { name: "Mauritania 🇲🇷", active: true },
  { name: "Angola 🇦🇴", active: true },
  { name: "Namibia 🇳🇦", active: true },
  { name: "Zambia 🇿🇲", active: true },
  { name: "Mozambique 🇲🇿", active: true },
  { name: "Rwanda 🇷🇼", active: true },
  { name: "Burundi 🇧🇮", active: true },
  { name: "Ethiopia 🇪🇹", active: true },
];

const offices = [
  {
    country: "Togo 🇹🇬",
    city: "Lomé",
    address: "Zone Portuaire, Lomé",
    phone: "+228 90 00 00 00",
    email: "togo@apsonic.dev",
    mapUrl:
      "https://maps.google.com/maps?q=Lome%20Port%2C%20Togo&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    country: "Ghana 🇬🇭",
    city: "Accra",
    address: "124 Spintex Road, Accra",
    phone: "+233 54 000 0000",
    email: "ghana@apsonic.dev",
    mapUrl:
      "https://maps.google.com/maps?q=124%20Spintex%20Road%2C%20Accra%2C%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    country: "Mali 🇲🇱",
    city: "Bamako",
    address: "ACI 2000, Bamako",
    phone: "+223 20 00 00 00",
    email: "mali@apsonic.dev",
    mapUrl:
      "https://maps.google.com/maps?q=ACI%202000%2C%20Bamako%2C%20Mali&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    country: "Burkina Faso 🇧🇫",
    city: "Ouagadougou",
    address: "Kwame N'Krumah Ave, Ouagadougou",
    phone: "+226 25 00 00 00",
    email: "burkina@apsonic.dev",
    mapUrl: "",
  },
  {
    country: "Ivory Coast 🇨🇮",
    city: "Abidjan",
    address: "Marcory Zone 4, Abidjan",
    phone: "+225 27 00 00 00",
    email: "ci@apsonic.dev",
    mapUrl: "",
  },
  {
    country: "Benin 🇧🇯",
    city: "Cotonou",
    address: "Ave Steinmetz, Cotonou",
    phone: "+229 97 00 00 00",
    email: "benin@apsonic.dev",
    mapUrl: "",
  },
  {
    country: "Guinea 🇬🇳",
    city: "Conakry",
    address: "Kaloum, Conakry",
    phone: "+224 620 00 00 00",
    email: "guinea@apsonic.dev",
    mapUrl: "",
  },
  {
    country: "China 🇨🇳", // Flag added for consistency
    city: "Guangzhou",
    address: "Tianhe District, Guangzhou",
    phone: "+86 20 0000 0000",
    email: "hq@apsonic.dev",
    mapUrl: "",
  },
];

export const OfficeLocations = () => {
  return (
    <Container maxWidth="wide">
      <div className="space-y-16">
        {/* Market Coverage Section - Full Width Banner */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1FA84F]/10 p-3 rounded-full text-[#1FA84F] text-2xl">
                  <MdPublic />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">产品覆盖</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                根据行业报告，APSONIC活跃于西非及更广泛的地区，
                在约27个非洲国家销售和维修摩托车。
              </p>
            </div>

            <div className="max-w-lg flex flex-wrap gap-2 justify-start md:justify-end">
              {coverageCountries.map((c, idx) => (
                <span
                  key={idx}
                  className="bg-white hover:bg-gray-900 hover:text-white transition-all text-gray-700 px-3 py-1.5 rounded-lg text-xs border border-gray-200 shadow-sm"
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Official Offices Grid - With Map Visuals */}
        <div id="official-branches">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            官方分支机构
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-black/10 transition-all hover:shadow-xl hover:shadow-gray-200"
              >
                {/* Map Thumbnail Placeholder or Iframe */}
                <div className="h-40 w-full bg-gray-100 relative overflow-hidden">
                  {office.mapUrl ? (
                    <iframe
                      src={office.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-gray-900/20 flex items-center justify-center animate-pulse">
                          <div className="h-3 w-3 rounded-full bg-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.4)]" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Map Icon overlay */}
                  <div className="absolute top-3 right-3 bg-white/50 p-1.5 rounded-lg backdrop-blur-md pointer-events-none z-10">
                    <MdMap className="text-gray-900/70" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-gray-900 font-bold text-lg">
                      {office.country}
                    </h4>
                  </div>
                  <span className="text-gray-900 text-sm font-medium mb-4 block">
                    {office.city}
                  </span>

                  <p className="text-gray-600 text-xs mb-6 flex-grow leading-relaxed">
                    {office.address}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-black transition-colors"
                    >
                      <MdPhone className="text-sm" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-black transition-colors"
                    >
                      <MdEmail className="text-sm" />
                      <span>{office.email}</span>
                    </a>
                  </div>

                  <div className="mt-4 pt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ", " + office.city + ", " + office.country)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-lg bg-gray-50 text-xs font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MdLocationOn /> 查看路线
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
