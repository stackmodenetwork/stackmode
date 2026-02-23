import { Helmet } from 'react-helmet-async';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { ReviewWall } from '@/components/ReviewWall';
import { SoftwareShowcase } from '@/components/SoftwareShowcase';
import { WhatYouGet } from '@/components/academy/WhatYouGet';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';
import { AcademyFooter } from '@/components/academy/AcademyFooter';
import { CodeTradingBackground } from '@/components/CodeTradingBackground';
import { GraduationCap, MessageCircle, Mic, Wrench, Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const Home = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowStickyHeader(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden" style={{ background: '#060d06' }}>
      <Helmet>
        <title>Stackmode Academy | Learn AI Software, Trading & Asset Stacking | Christopher Robinson</title>
        <meta name="description" content="Stackmode Academy by Christopher Robinson (StackmodeChris) is the #1 online learning academy for mastering AI software development, trading the financial markets, and stacking your assets to build real wealth. Join thousands of students worldwide." />
        <link rel="canonical" href="https://stackmode.net/academy" />
      </Helmet>

      {/* Top Category Bar */}
      <nav className="relative z-50 backdrop-blur-md border-b" style={{ background: 'rgba(6,13,6,0.95)', borderColor: 'rgba(0,255,136,0.1)' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop: show all links */}
          <div className="hidden sm:flex items-center justify-center gap-2 py-2.5 flex-wrap">
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-4 py-2 rounded-full transition-all text-xs"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={14} className="flex-shrink-0" />
              Join The Academy
            </a>
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors" style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <MessageCircle size={14} className="flex-shrink-0" /> Discord
            </a>
            <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/50 transition-colors">
              <Mic size={14} className="flex-shrink-0" /> Podcast
            </a>
            <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/50 transition-colors">
              <Wrench size={14} className="flex-shrink-0" /> Grow Your Brand
            </a>
            <a href="tel:+16787758532" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full text-background transition-colors bg-accent">
              <Phone size={14} className="flex-shrink-0" /> Contact
            </a>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex sm:hidden items-center justify-between py-2.5">
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full transition-all text-[11px]"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={14} className="flex-shrink-0" />
              Join The Academy
            </a>
            <button
              onClick={() => setMobileNavOpen(prev => !prev)}
              className="p-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}>
              {mobileNavOpen ? <X size={18} className="text-primary" /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileNavOpen && (
            <div className="sm:hidden pb-3 space-y-1 animate-fade-in">
              <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <MessageCircle size={16} className="text-primary" /> Discord
              </a>
              <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <Mic size={16} className="text-primary" /> Podcast
              </a>
              <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-card/50 transition-colors">
                <Wrench size={16} className="text-primary" /> Grow Your Brand
              </a>
              <a href="tel:+16787758532" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold text-background bg-accent transition-colors mt-1">
                <Phone size={16} /> Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-transform duration-300 ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ background: 'rgba(6,13,6,0.95)', borderBottom: '1px solid rgba(0,255,136,0.1)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 focus:outline-none">
              <img src="/images/sm-logo-new.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm font-bold text-foreground font-mono">STACKMODE ACADEMY</span>
            </button>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-[10px] sm:text-xs"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="sm:hidden">Join The Academy</span>
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
    </main>);

};

export default Home;