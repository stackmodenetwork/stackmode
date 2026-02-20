import { AcademyHero } from '@/components/academy/AcademyHero';
import { ReviewWall } from '@/components/ReviewWall';
import { SoftwareShowcase } from '@/components/SoftwareShowcase';
import { WhatYouGet } from '@/components/academy/WhatYouGet';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';
import { AcademyFooter } from '@/components/academy/AcademyFooter';
import { GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyHeader(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 transition-transform duration-300 ${
          showStickyHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-8 h-8 object-contain" />
              <span className="text-sm font-bold text-foreground font-mono">STACKMODE</span>
            </div>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2 rounded-lg transition-all text-xs"
            >
              <GraduationCap size={14} />
              Join The Stackmode Academy
            </a>
          </div>
        </div>
      </header>

      <AcademyHero />
      <ReviewWall />
      <SoftwareShowcase />
      <WhatYouGet />
      <AcademyPricing />
      <AcademyFAQ />
      <AcademyFooter />
    </main>
  );
};

export default Home;
