import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play } from 'lucide-react';
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
          <div className="flex items-center justify-center h-16 sm:h-20">
            <a href="https://stackmode.net" className="flex items-center gap-2">
              <img 
                src="/images/sm-logo.png" 
                alt="Stackmode Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
              />
              <span className="text-xl sm:text-2xl font-bold text-foreground">STACKMODE.NET</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Build Your <span className="text-primary">Wealth</span>
            <br />
            Your Way
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose your path to financial freedom. Whether you want to master the markets or build a thriving business, we've got you covered.
          </p>

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
          <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-muted-foreground text-sm">
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

          {/* Video Introduction */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Meet Your Mentor
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Watch to learn how I can help you achieve your financial goals
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]">
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] group-hover:scale-110 transition-transform">
                      <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                    <span className="mt-4 text-white font-semibold text-sm sm:text-base opacity-90">
                      Watch Introduction
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

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-2">Book a free call to find the right path for you.</p>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Limited Spots Available for Both Calls
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <TrendingUp size={18} />
                <span>FREE Trading Mentorship Call</span>
              </a>
              <a 
                href="https://calendly.com/stackmodechris/businessscaling" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <Briefcase size={18} />
                <span>FREE Business Scaling Call</span>
              </a>
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
