"use client";

import React from "react";
import { ServiceDetailPage } from "@/components/service-page";
import { TRICYCLE_CATEGORIES } from "@/lib/data/service-detail-data";

export default function PartsPage() {
  return (
    <ServiceDetailPage
      title="三轮车"
      data={TRICYCLE_CATEGORIES}
      heroImage="/products/AP150ZH-20 SPORT (1).png"
      heroColor="#0a261a"
      accentColor="#28a745"
    />
  );
}
