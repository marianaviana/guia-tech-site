import React from 'react';
import HeroSection from './home/components/HeroSection';
import AboutSection from './home/components/AboutSection';
import HighlightsSection from './home/components/HighlightsSection';
import CTASection from './home/components/CTASection';

export default function Page() {
  return (
    <main className="bg-black text-gray-300 min-h-screen">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CTASection />
    </main>
  );
}