'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
    className?: string;
    size?: number;
}

export const BrandLogo = ({ className, size = 40 }: BrandLogoProps) => {
    return (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
            <Image
                src="/images/logo/apsoniclogo.png"
                alt="APSONIC Logo"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
};
