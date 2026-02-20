import { AcademyHero } from '@/components/academy/AcademyHero';
import { ReviewWall } from '@/components/ReviewWall';
import { SoftwareShowcase } from '@/components/SoftwareShowcase';
import { WhatYouGet } from '@/components/academy/WhatYouGet';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';
import { AcademyFooter } from '@/components/academy/AcademyFooter';
import { CodeTradingBackground } from '@/components/CodeTradingBackground';
import { GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const Home = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyHeader(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <CodeTradingBackground />

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 transition-transform duration-300 ${
          showStickyHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm font-bold text-foreground font-mono">STACKMODE</span>
            </button>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-[10px] sm:text-xs"
            >
              <GraduationCap size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="sm:hidden">Academy</span>
              <span className="hidden sm:inline">Join The Stackmode Academy</span>
            </a>
          </div>
        </div>
      </header>

      <div className="relative z-[1]">
        {/* Free Library Banner */}
        <FreeResourcesCTA variant="banner" />

        <AcademyHero />
        <ReviewWall />
      <SoftwareShowcase />
      <WhatYouGet />
      <AcademyPricing />
      <AcademyFAQ />
        <AcademyFooter />
      </div>
    </main>
  );
};

export default Home;
