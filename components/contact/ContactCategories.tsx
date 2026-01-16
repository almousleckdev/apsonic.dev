'use client';

import React from 'react';
import { FeatureCard } from '@/components/ui';
import { MdStorefront, MdSupportAgent, MdBusinessCenter, MdNewspaper } from 'react-icons/md';

const categories = [
    {
        icon: <MdBusinessCenter />,
        title: "Sales & Partnerships",
        description: "For bulk orders, fleet management, and B2B opportunities.",
        action: "Contact Sales",
        color: "brand-green"
    },
    {
        icon: <MdStorefront />,
        title: "Become a Dealer",
        description: "Join our expanding network of certified Apsonic distributors.",
        action: "Apply Now",
    },
    {
        icon: <MdSupportAgent />,
        title: "Support Center",
        description: "Technical assistance, warranty claims, and part inquiries.",
        action: "Get Support",
    },
    {
        icon: <MdNewspaper />,
        title: "Media & Press",
        description: "Brand assets, press releases, and media inquiries.",
        action: "Media Kit",
    }
];

export const ContactCategories = () => {
    return (
        <div className="relative -mt-20 z-20 container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, index) => (
                    <FeatureCard
                        key={index}
                        index={index}
                        icon={cat.icon}
                        title={cat.title}
                        description={cat.description}
                        actionLabel={cat.action}
                        variant="glass"
                    />
                ))}
            </div>
        </div>
    );
};
