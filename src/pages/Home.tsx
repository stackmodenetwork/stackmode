import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play, BookOpen, User, Mic, MessageCircle } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { useState } from 'react';

const Home = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="https://stackmode.net" className="flex items-center gap-2">
              <img 
                src="/images/sm-logo.png" 
                alt="Stackmode Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
              />
              <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:inline">STACKMODE.NET</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/trading" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Trading
              </Link>
              <Link to="/business" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Business
              </Link>
              <Link to="/learn" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Library
              </Link>
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <a 
                href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Podcast
              </a>
              <a 
                href="https://discord.gg/5zYWSWGMYm"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                Discord
              </a>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden border-t border-border overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-2 py-2">
            <Link 
              to="/trading" 
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <TrendingUp size={14} />
              Trading
            </Link>
            <Link 
              to="/business" 
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <Briefcase size={14} />
              Business
            </Link>
            <Link 
              to="/learn" 
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <BookOpen size={14} />
              Library
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <User size={14} />
              About
            </Link>
            <a 
              href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <Mic size={14} />
              Podcast
            </a>
            <a 
              href="https://discord.gg/5zYWSWGMYm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent bg-muted/50 hover:bg-muted px-3 py-2 rounded-full whitespace-nowrap transition-colors"
            >
              <MessageCircle size={14} />
              Discord
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - VSL Style */}
      <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 px-4">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold">Welcome to Stackmode Network</span>
          </div>

          {/* VSL Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight max-w-5xl mx-auto">
            Stackmode is the <span className="text-primary">ULTIMATE</span> system to stack to multi 6 or 7-figure trading profits <span className="text-accent">AND</span> business revenue simultaneously.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Become the apex authority in the market, without the burnout of the 24/7 grind.
          </p>

          {/* Video Introduction - VSL Style */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)]">
              {!videoPlaying ? (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="relative w-full aspect-video group cursor-pointer"
                  aria-label="Play video"
                >
                  {/* YouTube Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/beRKDGUDcdU/maxresdefault.jpg"
                    alt="Meet Your Mentor - Stackmodechris"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  
                  {/* Branded Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)] group-hover:scale-110 transition-transform">
                      <Play size={40} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                    <span className="mt-4 text-white font-bold text-base sm:text-lg opacity-90">
                      Watch Now
                    </span>
                  </div>

                  {/* Logo Watermark */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1.5">
                    <img 
                      src="/images/sm-logo.png" 
                      alt="Stackmode" 
                      className="w-6 h-6 object-contain" 
                    />
                    <span className="text-white text-xs font-semibold">STACKMODE</span>
                  </div>
                </button>
              ) : (
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/beRKDGUDcdU?autoplay=1"
                    title="Meet Your Mentor - Stackmodechris"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons - Right after video */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-2">Book a free call to find the right path for you.</p>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Limited Spots Available
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex flex-col items-center gap-2">
                <a 
                  href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  <TrendingUp size={18} />
                  <span>FREE Trading Mentorship Call</span>
                </a>
                <p className="text-xs text-muted-foreground max-w-[200px] text-center">
                  Learn trading strategies, chart analysis & risk management
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <a 
                  href="https://calendly.com/stackmodechris/businessscaling" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  <Briefcase size={18} />
                  <span>FREE Business Scaling Call</span>
                </a>
                <p className="text-xs text-muted-foreground max-w-[200px] text-center">
                  Grow your brand, marketing & revenue streams
                </p>
              </div>
            </div>
          </div>

          {/* Path Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Trading Path */}
            <Link 
              to="/trading" 
              className="group relative bg-gradient-to-br from-card via-card/80 to-card border-2 border-primary/30 rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp size={32} className="text-primary" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-left">
                  Trading Education
                </h2>

                <p className="text-muted-foreground text-left mb-6 leading-relaxed">
                  Learn to trade stocks, options, futures, forex & crypto. Get 1-on-1 mentorship, live trade signals, and proven strategies to become a profitable trader.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Mentorship</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Trade Signals</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Courses</span>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Start Trading</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Business Path */}
            <Link 
              to="/business" 
              className="group relative bg-gradient-to-br from-card via-card/80 to-card border-2 border-accent/30 rounded-3xl p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase size={32} className="text-accent" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-left">
                  Business Education
                </h2>

                <p className="text-muted-foreground text-left mb-6 leading-relaxed">
                  Build and scale your online business. Learn digital marketing, content creation, sales funnels, and how to create multiple streams of income.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Marketing</span>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Sales</span>
                  <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Branding</span>
                </div>

                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  <span>Start Building</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Proven</span>
              <span>Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">5+ Years</span>
              <span>Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Free</span>
              <span>Strategy Calls</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 border-t border-border">
        <ReviewsGallery />
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/images/stackmodechris-about-new.png" 
                alt="Stackmodechris" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-primary/30"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Meet Stackmodechris</h3>
              <p className="text-muted-foreground mb-4">
                Trading mentor, business strategist, and founder of Stackmode Network. Helping people build wealth through trading and entrepreneurship.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
              >
                <span>Learn more about me</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href="/dmca" className="text-muted-foreground hover:text-primary transition-colors">
              DMCA Policy
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2026 Stackmode Network LLC. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Spacer for mobile bottom navigation */}
      <div className="h-28 md:hidden" />

      <CookieConsent />
    </main>
  );
};

export default Home;
