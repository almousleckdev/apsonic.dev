"use client";

import React from "react";
import { Section, SectionHeader, FeatureCard } from "@/components/ui";
import { colors } from "@/lib/design-tokens";
import { coreValues } from "@/lib/data/about";
import * as Icons from "react-icons/md";

export const CoreValuesSection = () => {
  return (
    <Section
      backgroundColor={colors.background.secondary}
      className=""
    >
      <div className="container mx-auto px-4">
        <SectionHeader light={true} label="我们的DNA" title="我们的驱动力。" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => {
            // Dynamically resolve icon from react-icons
            const IconComponent = (Icons as any)[value.iconName];
            return (
              <FeatureCard
                key={value.id}
                index={index}
                icon={IconComponent ? <IconComponent /> : null}
                title={value.title}
                description={value.description}
                variant="default"
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};
