import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <main className="bg-black text-gray-300 min-h-screen">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <CTASection />
    </main>
  );
}
