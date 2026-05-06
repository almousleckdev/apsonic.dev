"use client";

import React from "react";
import { ServiceDetailPage } from "@/components/service-page";
import { TWO_WHEELER_DATA } from "@/lib/data/service-detail-data";

export default function LocationsPage() {
  return (
    <ServiceDetailPage
      title="两轮车"
      data={TWO_WHEELER_DATA}
      heroImage="/products/AP250GY (1).png"
      heroColor="#0a1126"
      accentColor="#3b82f6"
    />
  );
}
