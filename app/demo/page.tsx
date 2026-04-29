import React from 'react';
import AfricanMarketOrbit from '@/components/map/AfricanMarketOrbit';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">African Market Presence</h1>
          <p className="text-gray-400">
            A dynamic visualization of Subsonic Market's reach across the African continent, 
            inspired by Grafana's premium animation style.
          </p>
        </header>

        <section className="bg-white/5 rounded-3xl border border-white/10 p-4 md:p-12 overflow-hidden">
          <AfricanMarketOrbit />
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </footer>
      </div>
    </main>
  );
}
