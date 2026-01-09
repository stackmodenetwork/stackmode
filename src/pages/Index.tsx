import { useEffect, useState, useCallback } from 'react';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { LazyCalendly } from '@/components/LazyCalendly';
import { OptimizedVideo } from '@/components/OptimizedVideo';
import { Briefcase, Check, Mic, Users, TrendingUp, HelpCircle, Menu, X, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const Index = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Optimized scroll handler with passive listener
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  return <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth animate-page-load">
      {/* Top Navigation Bar - Acquisition.com Style */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <img 
                src="/images/sm-logo.png" 
                alt="Stackmode Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold text-foreground hidden sm:block -ml-1">STACKMODE.NET</span>
            </a>
            
            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-10 mx-8">
              <a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Trading Mentorship
              </a>
              <a 
                href="#courses" 
                onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Courses
              </a>
              <a 
                href="#books" 
                onClick={(e) => { e.preventDefault(); document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Books
              </a>
              <a 
                href="https://discord.gg/5zYWSWGMYm" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Catch My Trades
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary transition-colors"
              aria-label="Open menu"
            >
              {menuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-30 md:hidden transition-all duration-300 ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Ready to start?</span>
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="bg-accent text-background font-medium text-xs px-4 py-2 rounded-md transition-colors hover:bg-accent/90">
              Book Free Call
            </a>
          </div>
        </div>
      </div>

      {/* Main Content - VSL Funnel Structure */}
      <section id="home" className="relative z-10 min-h-screen px-4 py-6 sm:py-8">

        {/* Mobile Dropdown Menu */}
        <div className={`fixed inset-x-0 top-16 z-50 md:hidden transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-xl">
            <div className="px-4 py-4">
              {/* Main Navigation Links */}
              <div className="space-y-1 mb-4">
                <a href="#mentorship" onClick={(e) => { e.preventDefault(); closeMenu(); setTimeout(() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-4 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Trading Mentorship
                </a>
                <a href="#courses" onClick={(e) => { e.preventDefault(); closeMenu(); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-4 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Courses
                </a>
                <a href="#books" onClick={(e) => { e.preventDefault(); closeMenu(); setTimeout(() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-4 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Books
                </a>
                <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors relative after:content-[''] after:absolute after:w-[calc(100%-2rem)] after:scale-x-0 after:h-0.5 after:bottom-2 after:left-4 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Catch My Trades
                </a>
              </div>
              
              {/* Social Links */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3 px-4">Follow Us</p>
                <div className="grid grid-cols-4 gap-2">
                  <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                    <span className="text-xs text-muted-foreground">Discord</span>
                  </a>
                  <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <span className="text-xs text-muted-foreground">YouTube</span>
                  </a>
                  <a href="https://podcasters.spotify.com/pod/show/stackmodetrading" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Mic className="w-5 h-5 text-green-500" />
                    <span className="text-xs text-muted-foreground">Podcast</span>
                  </a>
                  <a href="https://www.instagram.com/stackmodetrading/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-xs text-muted-foreground">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-background/60 -z-10" onClick={closeMenu} />
        </div>

        {/* Headline - Above the Fold */}
        <header id="intro" className="text-center mb-6 sm:mb-8 max-w-5xl mx-auto">
          {/* Live Activity Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4 animate-pulse">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary text-sm font-semibold">Traders Currently in Mentorship</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Learn How To Trade Profitably
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Watch how I mentor traders to consistent profits, then book your free strategy call to get started. Inshallah
          </p>
          <div className="relative w-full max-w-xl mx-auto mb-6 px-4 sm:px-0">
            {/* Subtle glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-2xl blur-xl opacity-60" />
            
            {/* Video container with clean border */}
            <div className="relative bg-background rounded-xl overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/10">
              <OptimizedVideo mobileSrc="/videos/mentor-intro-mobile.mp4" desktopSrc="/videos/mentor-intro.mp4" poster="/images/video-thumbnail.png" className="w-full h-auto" />
            </div>
          </div>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-primary" />
              <span>1-on-1 Mentorship</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-primary" />
              <span>Live Trade Signals</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Check size={18} className="text-primary" />
              <span>Proven Strategy</span>
            </div>
          </div>
        </header>

        {/* Main CTAs - Optimized for Conversions */}
        <section id="mentorship" className="max-w-6xl mx-auto mb-8 sm:mb-12 scroll-mt-20">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Choose How You Want to Learn</h2>
          </div>
          
          {/* Mobile: Stacked with clear hierarchy. Desktop: Side by side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Primary CTA: Free Mentorship - Lower barrier to entry */}
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" aria-label="Book Free Trading Mentorship Session" className="block group h-full order-1">
              <article className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-5 sm:p-6 md:p-8 pt-8 sm:pt-10 overflow-visible transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)] group-hover:scale-[1.02]">
                {/* FREE Badge */}
                <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                  <div className="bg-accent text-background text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                    Free Strategy Call
                  </div>
                </div>
                
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Briefcase size={24} className="text-accent" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">1-on-1 Mentorship</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-center text-sm sm:text-base">Get a personalized trading strategy built for your goals</p>
                  
                  {/* Benefits list */}
                  <div className="flex flex-col gap-2 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>Custom strategy based on your goals</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>Direct access to ask me anything</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>No commitment, no pressure</span>
                    </div>
                  </div>
                  
                  <div className="bg-accent hover:bg-accent/90 text-background font-semibold text-base sm:text-lg px-6 py-4 rounded-lg text-center transition-colors">
                    Book Your Free Call →
                  </div>
                  
                  {/* Urgency */}
                  <div className="mt-4 flex justify-center">
                    <p className="text-xs text-muted-foreground">Limited availability — book your spot today</p>
                  </div>
                </div>
              </article>
            </a>

            {/* Secondary CTA: Catch My Trades - Paid offer */}
            <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to Live Trading Signals" className="block group h-full order-2">
              <article className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-cyan-400/50 rounded-2xl p-5 sm:p-6 md:p-8 pt-8 sm:pt-10 overflow-visible transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] group-hover:scale-[1.02]">
                {/* Best Value Badge */}
                <div className="absolute top-0 right-4 -translate-y-1/2 z-20">
                  <div className="bg-cyan-500 text-background text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                    Consistent Trades
                  </div>
                </div>
                
                {/* Subtle background accent */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <TrendingUp size={24} className="text-cyan-400" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">Trade Signals</h3>
                  </div>
                  {/* Pricing - prominent */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-muted-foreground line-through text-sm">$50/mo</span>
                    <span className="text-foreground font-bold text-2xl sm:text-3xl">$20/mo</span>
                    <span className="bg-cyan-500/10 text-cyan-400 text-xs font-medium px-2 py-1 rounded">Save 60%</span>
                  </div>
                  
                  {/* Benefits list */}
                  <div className="flex flex-col gap-2 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>Real-time trade alerts & key levels</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>Weekly group calls (Sundays @ 5PM EST)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>Copy my exact strategy and trades</span>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500 hover:bg-cyan-500/90 text-background font-semibold text-base sm:text-lg px-6 py-4 rounded-lg text-center transition-colors">
                    Get Trade Signals →
                  </div>
                  
                  {/* Trust signal */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check size={14} className="text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          </div>
          
          {/* Trust indicator below CTAs */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">Not sure which is right for you? <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Book a free call</a> and I'll help you decide.</p>
          </div>
        </section>

        {/* Three Action Buttons */}
        <AnimatedBlock delay={1.175} className="mb-16">
          <div id="courses" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 scroll-mt-20">
            {/* Discord Button */}
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">JOIN THE DISCORD</h3>
                  <p className="text-sm text-muted-foreground">Connect with traders</p>
                </div>
              </div>
            </a>

            {/* Podcast Button */}
            <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-6 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">LISTEN TO THE PODCAST</h3>
                  <p className="text-sm text-muted-foreground">Learn trading insights</p>
                </div>
              </div>
            </a>

            {/* Free Education Button */}
            <a id="books" href="https://stackmodechris.systeme.io/trading" target="_blank" rel="noopener noreferrer" className="group relative scroll-mt-20">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-xl p-6 hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">FREE TRADING EDUCATION</h3>
                  <p className="text-sm text-muted-foreground">Get My FREE Course & eBook</p>
                </div>
              </div>
            </a>
          </div>
        </AnimatedBlock>

        {/* SOCIAL PROOF - Real Results */}
        <section id="results" className="mb-8 sm:mb-12 text-center max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Proven Results from Real Traders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">See what our community has achieved</p>
        </section>

        {/* Featured Testimonial */}
        <AnimatedBlock delay={1.14} className="mb-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-card via-card/80 to-card border-2 border-accent/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-accent/20 mx-0 mr-[100px]">!</div>
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-foreground/90 italic mb-4 leading-relaxed">"Everything you've taught me is literally bread and butter bro"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-bold">Verified Student</p>
                  <p className="text-muted-foreground text-sm">Stackmode Member</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-secondary">★</span>)}
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Reviews Gallery */}
        <AnimatedBlock delay={1.15} className="mb-12">
          <ReviewsGallery />
        </AnimatedBlock>

        {/* Calendly Inline Widget - After Reviews */}
        <AnimatedBlock delay={1.16} className="mb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Schedule Your Free Strategy Call
              </h2>
              <p className="text-muted-foreground">Pick a time that works for you</p>
            </div>
            <div className="relative">
              <LazyCalendly url="https://calendly.com/stackmodechris/tradingmastermindcoaching?background_color=0a0b0d&text_color=ffffff&primary_color=d200ff" height={650} />
            </div>
          </div>
        </AnimatedBlock>

        {/* Middle Call to Action Button */}
        <AnimatedBlock delay={1.175} className="text-center mb-8 px-4">
          <Button asChild className="bg-cyan-400 hover:bg-cyan-400/80 text-background font-bold text-sm md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-lg neon-glow w-full max-w-md">
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
              LEARN HOW TO TRADE HERE
            </a>
          </Button>
        </AnimatedBlock>


        {/* Video 1 - How I Made $100 in 15 Minutes */}
        <AnimatedBlock delay={1.3} className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">Watch: $100 Profit in 15 Minutes</h3>
            <div className="relative w-full" style={{
            paddingBottom: '56.25%'
          }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-accent/50" src="https://www.youtube.com/embed/Ay6AYak6sXE" title="How I Made $100 in 15 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          </div>
        </AnimatedBlock>


        {/* FAQ Section */}
        <AnimatedBlock delay={1.39} className="mb-16">
          <div id="faq" className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
                <HelpCircle size={18} className="text-accent" />
                <span className="text-accent text-sm font-bold">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Everything you need to know before booking</p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  What happens on the free strategy call?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  On your free call, we will review your current trading situation, identify what is holding you back, and create a personalized roadmap to help you become profitable. No pressure, no sales pitch — just real value and guidance tailored to your goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  Do I need trading experience to join?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Not at all! I work with complete beginners to advanced traders. The mentorship is tailored to YOUR level. Whether you have never placed a trade or you have been trading for years, I will meet you where you are and help you level up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  How much capital do I need to start trading?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  You can start with as little as $100-500. I will teach you proper risk management so you can grow your account safely. Many of my students also use prop firms to trade with larger capital without risking their own money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  What markets do you teach?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  I teach Stocks, Stock Options, Futures, Forex, and Crypto. Each market offers unique opportunities—stocks for long-term growth, options for leveraged strategies, futures for indices like NAS100 and US30, forex for 24/5 currency trading, and crypto for high-volatility plays. You'll learn to read price action and find high-probability setups across all of them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  What is the difference between mentorship and the trade signals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <strong className="text-foreground">Trade Signals ($20/month):</strong> You receive my exact trade entries, stop losses, and take profits in real-time. Great for copying my trades while you learn.<br /><br />
                  <strong className="text-foreground">Mentorship:</strong> Deep 1-on-1 coaching where I teach you the WHY behind every trade. You will learn to find your own setups and become an independent, profitable trader.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  How long until I see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Results vary based on your dedication and time invested. Most students start seeing improvements within 4-8 weeks of consistent practice. Some have become consistently profitable within 2-3 months. The key is following the process and staying disciplined.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card/50 border border-primary/20 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                  Is there a refund policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Yes! I stand behind my mentorship. Check the Terms and Conditions at the bottom of this page for full details on our refund policy. I want you to succeed, and I only work with people who are serious about transforming their trading.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA after FAQ */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Still have questions? Let us chat on your free call!</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4">
                <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
                  Book Your Free Call →
                </a>
              </Button>
            </div>
          </div>
        </AnimatedBlock>

        {/* About Section */}
        <AnimatedBlock delay={1.35} className="mb-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-primary/30 rounded-2xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-lg shadow-primary/20">
                    <img 
                      src="/images/stackmodechris-about-new.png" 
                      alt="Stackmodechris - Trading Mentor" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    About Stackmodechris
                  </h2>
                  <p className="text-primary font-medium mb-4">Trading Mentor & Founder of Stackmode Network</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Christopher Robinson, known online as Stackmodechris, is a passionate trader and mentor dedicated to helping everyday people achieve financial freedom through the markets. With expertise spanning stocks, options, futures, forex, and crypto, Stackmodechris has built a thriving community of traders who learn to read price action and execute high-probability setups. Through proven strategies and hands-on mentorship, Stackmodechris has helped clients generate thousands of dollars in profits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond trading, Stackmodechris is an IT specialist and content creator who shares his journey through his podcast, YouTube channel, and social media. His mission is simple: teach real trading skills that work, without the hype or empty promises.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a 
                      href="https://discord.gg/5zYWSWGMYm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                      Join Community
                    </a>
                    <a 
                      href="https://www.youtube.com/@stackmodetrading" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Youtube size={16} />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Blog Section */}
        <AnimatedBlock delay={1.375} className="mb-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trading Blog</h2>
              <p className="text-muted-foreground">Free education to level up your trading</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/blog" className="group bg-card/50 border border-primary/20 rounded-xl p-5 hover:border-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Trading Psychology</h3>
                <p className="text-sm text-muted-foreground">Master your mindset and emotions</p>
              </a>
              <a href="/blog" className="group bg-card/50 border border-primary/20 rounded-xl p-5 hover:border-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <TrendingUp size={20} className="text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Technical Analysis</h3>
                <p className="text-sm text-muted-foreground">Learn to read charts like a pro</p>
              </a>
              <a href="/blog" className="group bg-card/50 border border-primary/20 rounded-xl p-5 hover:border-primary transition-all">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Risk Management</h3>
                <p className="text-sm text-muted-foreground">Protect and grow your capital</p>
              </a>
            </div>
            <div className="text-center mt-6">
              <a href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                View All Articles →
              </a>
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.4} className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">Learn Real Trading With Stackmodechris — Book A FREE Mentorship Call, Catch My Trades Live, And Master Proven Strategies To Stack Wins.</p>
          </div>
        </AnimatedBlock>

        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          {/* What You Get */}
          <div className="bg-card/50 border border-primary/30 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-primary mb-4">What You Get On Your FREE Call:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-4">
              <div className="flex items-start gap-2">
                <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/90 text-sm">Personalized Trading Assessment</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/90 text-sm">Custom Strategy Recommendations</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/90 text-sm">Risk Management Review</span>
              </div>
              <div className="flex items-start gap-2">
                <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/90 text-sm">Clear Action Plan to Profit</span>
              </div>
            </div>
          </div>
          
          <Button asChild className="bg-accent hover:bg-accent/90 text-background font-bold text-base md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-lg neon-glow w-full transform hover:scale-105 transition-all shadow-2xl">
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
              🎯 BOOK YOUR FREE STRATEGY CALL NOW
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">⚡ Limited Slots Available - Don't Miss Out</p>
          
          {/* Risk Reversal */}
          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">100% Free • No Obligation • No Card Required</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div id="socials" className="mt-12 max-w-4xl mx-auto mb-16 px-4">
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Connect With Me
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <a href="https://www.youtube.com/@stackmodechris" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-red-500/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <Youtube size={20} className="text-red-500" />
              </div>
              <span className="text-foreground font-medium text-sm">YouTube</span>
            </a>
            
            <a href="https://www.instagram.com/stackmodechris_" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-pink-500/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                <Instagram size={20} className="text-pink-500" />
              </div>
              <span className="text-foreground font-medium text-sm">Instagram</span>
            </a>
            
            <a href="https://www.tiktok.com/@stackmodechris_" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-cyan-400/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">TikTok</span>
            </a>
            
            <a href="https://www.facebook.com/share/17cn4N587n/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-blue-600/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                <Facebook size={20} className="text-blue-600" />
              </div>
              <span className="text-foreground font-medium text-sm">Facebook</span>
            </a>
            
            <a href="https://twitter.com/stackmodechris" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-foreground/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">X (Twitter)</span>
            </a>
            
            <a href="https://www.linkedin.com/in/christopher-robinson-119a01234/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-blue-500/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Linkedin size={20} className="text-blue-500" />
              </div>
              <span className="text-foreground font-medium text-sm">LinkedIn</span>
            </a>
            
            <a href="https://www.pinterest.com/stackmodechris/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-red-600/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
                  <path d="M12 0a12 12 0 0 0-4.373 23.178c-.07-.937-.134-2.377.028-3.401.146-.927.943-3.996.943-3.996s-.24-.482-.24-1.193c0-1.116.647-1.949 1.452-1.949.685 0 1.016.514 1.016 1.131 0 .69-.439 1.72-.666 2.677-.189.8.401 1.452 1.189 1.452 1.427 0 2.524-1.505 2.524-3.676 0-1.922-1.381-3.266-3.353-3.266-2.284 0-3.625 1.713-3.625 3.484 0 .69.265 1.429.596 1.832a.24.24 0 0 1 .056.23c-.061.253-.197.8-.224.912-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1 0 12 0z" />
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Pinterest</span>
            </a>
            
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-card/50 border border-border hover:border-indigo-500/50 rounded-xl p-4 transition-all hover:bg-card/80 group">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </div>
              <span className="text-foreground font-medium text-sm">Discord</span>
            </a>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold text-foreground text-center mt-10">
            May God Bless You And Your Loved Ones!
          </p>
        </div>

        {/* Bottom Spacer */}
        <div className="h-16 md:h-24"></div>
        
      </section>

      {/* Footer with Terms */}
      <footer className="bg-background border-t border-border py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://stackmodechris.systeme.io/termsandconditions" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="https://stackmodechris.systeme.io/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Information shared here is for educational purposes only. Your results may vary. We do not guarantee success or make earnings claims.
          </p>
          
          <p className="text-xs text-muted-foreground">
            © 2025 Stackmode Network LLC
          </p>
        </div>
      </footer>

    </main>;
};
export default Index;