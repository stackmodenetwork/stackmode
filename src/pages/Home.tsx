import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { ReviewWall } from '@/components/ReviewWall';
import { SoftwareShowcase } from '@/components/SoftwareShowcase';
import { WhatYouGet } from '@/components/academy/WhatYouGet';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';
import { AcademyFooter } from '@/components/academy/AcademyFooter';
import DigitalCardPurchase from '@/components/landing/DigitalCardPurchase';
import { CeoTurboServices } from '@/components/CeoTurboServices';
import { GraduationCap, MessageCircle, Mic, Wrench, Phone, Menu, X, ArrowLeft, BookOpen } from 'lucide-react';
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
    <main className="min-h-screen relative overflow-x-hidden" style={{ background: '#04040a' }}>
      <Helmet>
        <title>Stackmode Academy | AI, Coding, Software &amp; Trading School | StackmodeChris | Christopher Robinson</title>
        <meta name="description" content="Stackmode Academy — founded by Christopher Robinson (StackmodeChris). Learn AI tools, software development, Python coding, stock trading, and investing. Get your NFC digital business card from CEO Turbo. Code. Content. Capital. Join for $50/month at stackmode.net" />
        <meta name="keywords" content="stackmode academy, stackmodechris, christopher robinson CEO, learn AI online, coding and trading school, software development course, AI tools for beginners, python programming course, stock trading school, crypto investing course, digital business card, NFC business card, CEO turbo, best online academy 2026" />
        <meta name="author" content="Christopher Robinson" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://stackmode.net" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stackmode.net" />
        <meta property="og:title" content="Stackmode Academy — AI, Coding &amp; Trading School | StackmodeChris" />
        <meta property="og:description" content="Christopher Robinson's complete education system. Learn AI, code software, and master trading/investing. One ecosystem. $50/month." />
        <meta property="og:image" content="https://stackmode.net/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Stackmode Academy" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stackmodechris" />
        <meta name="twitter:creator" content="@stackmodechris" />
        <meta name="twitter:title" content="Stackmode Academy — AI, Coding &amp; Trading School by StackmodeChris" />
        <meta name="twitter:description" content="Code. Content. Capital. Christopher Robinson's complete system to build assets, grow audiences and multiply profits. $50/month." />
        <meta name="twitter:image" content="https://stackmode.net/og-image.jpg" />
      </Helmet>

      {/* Top Category Bar */}
      <nav className="relative z-50 backdrop-blur-md border-b" style={{ background: 'rgba(4,4,10,0.95)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-2 py-2.5 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors mr-auto"
              style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <ArrowLeft size={14} className="flex-shrink-0" /> Choose Your Path
            </Link>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold px-4 py-2 rounded-full transition-all text-xs"
              style={{ background: '#00ff88', color: '#030305' }}>
              <GraduationCap size={14} className="flex-shrink-0" />
              Join The Academy
            </a>
            <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors" style={{ color: '#00cfff', border: '1px solid rgba(0,207,255,0.3)', background: 'rgba(0,207,255,0.08)' }}>
              <Wrench size={14} className="flex-shrink-0" /> Grow Your Brand
            </a>
            <Link
              to="/library"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full transition-colors"
              style={{ color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)' }}>
              <BookOpen size={14} className="flex-shrink-0" /> Library
            </Link>
            <a href="tel:+16787758532" className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full text-background transition-colors bg-accent">
              <Phone size={14} className="flex-shrink-0" /> Contact
            </a>
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors" style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <MessageCircle size={14} className="flex-shrink-0" /> Discord
            </a>
            <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/50 transition-colors">
              <Mic size={14} className="flex-shrink-0" /> Podcast
            </a>
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden items-center justify-between py-2.5">
            <div className="flex items-center gap-1.5">
              <Link
                to="/library"
                className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full transition-colors"
                style={{ color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)' }}>
                <BookOpen size={11} className="flex-shrink-0" /> Library
              </Link>
              <a
                href="https://whop.com/stackmode-academy/educationalservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold px-2.5 py-1.5 rounded-full transition-all text-[10px]"
                style={{ background: '#00ff88', color: '#030305' }}>
                <GraduationCap size={12} className="flex-shrink-0" />
                Join
              </a>
              <a href="https://ceoturbo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-full transition-colors" style={{ color: '#00cfff', border: '1px solid rgba(0,207,255,0.3)', background: 'rgba(0,207,255,0.08)' }}>
                <Wrench size={11} className="flex-shrink-0" /> Brand
              </a>
            </div>
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
              <a href="tel:+16787758532" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold text-background bg-accent transition-colors mt-1">
                <Phone size={16} /> Contact
              </a>
              <Link to="/" onClick={() => setMobileNavOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/40 hover:bg-card/50 transition-colors">
                <ArrowLeft size={16} /> Choose Your Path
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-transform duration-300 ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ background: 'rgba(4,4,10,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link
              to="/"
              className="flex items-center gap-2 focus:outline-none">
              <img src="/images/sm-logo-new.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm font-bold text-foreground font-mono">STACKMODE ACADEMY</span>
            </Link>
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
        <FreeResourcesCTA variant="banner" />
        <AcademyHero />
        <ReviewWall />
        <SoftwareShowcase />
        <WhatYouGet />
        <AcademyPricing />
        <AcademyFAQ />
        <DigitalCardPurchase />
        <CeoTurboServices />
        <AcademyFooter />
      </div>
    </main>
  );
};

export default Home;
