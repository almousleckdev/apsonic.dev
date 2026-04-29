import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APSONIC - Good Quality, Good Life",
  description: "APSONIC motorcycles - High quality motorcycles for West Africa",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { ConditionalLayout } from "@/components/layout/ConditionalLayout";

import { ErrorBoundary } from "@/components/error/ErrorBoundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <ErrorBoundary>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
