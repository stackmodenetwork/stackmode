import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play, Phone } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { useState } from 'react';
import { MainHeader } from '@/components/MainHeader';

const Home = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  return <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />

      {/* Phone Call CTA Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border-y border-primary/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <a href="tel:6787758532" className="flex items-center justify-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
              <div className="relative bg-primary/20 border border-primary/50 rounded-full p-2 group-hover:bg-primary/30 transition-colors">
                <Phone size={18} className="text-primary" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-foreground font-semibold text-sm sm:text-base">
                Have Questions? Call Now: <span className="text-primary">(678) 775-8532</span>
              </span>
              <span className="hidden sm:inline text-muted-foreground text-sm ml-2">
                — Get instant answers & book your session
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 bg-primary/20 border border-primary/40 text-primary text-xs font-medium px-3 py-1 rounded-full group-hover:bg-primary/30 transition-colors">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Available Now
            </span>
          </a>
        </div>
      </div>

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
            <span className="text-primary text-sm font-semibold">Clients In Training</span>
          </div>

          {/* VSL Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight max-w-5xl mx-auto">
            Stackmode is the <span className="text-destructive-foreground">ULTIMATE</span> system to stack to multi 6 or 7-figure trading profits <span className="text-accent">AND</span> business revenue simultaneously.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Trade smarter. Build faster. Live freely.
          </p>

          {/* Path Selection Cards with CTAs - Primary Action */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Trading Path */}
            <Link to="/trading" className="group relative bg-gradient-to-br from-card via-card/80 to-card border-2 border-primary/30 rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)] cursor-pointer block">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} className="text-primary" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-left">
                  Trading Education
                </h2>

                <p className="text-muted-foreground text-left text-sm mb-4 leading-relaxed">
                  Master stocks, options, futures, forex & crypto with 1-on-1 mentorship and proven strategies.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">Mentorship</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">Signals</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">Courses</span>
                </div>

                <div className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-full transition-all group-hover:scale-105 mb-3">
                  <TrendingUp size={18} />
                  <span>Learn How To Trade</span>
                </div>

                <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://calendly.com/stackmodechris/tradingmastermindcoaching', '_blank'); }} className="flex items-center justify-center gap-2 text-primary/80 hover:text-primary text-sm font-medium transition-colors">
                  <span>FREE Trading Mentorship Call</span>
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Business Path */}
            <Link to="/business" className="group relative bg-gradient-to-br from-card via-card/80 to-card border-2 border-accent/30 rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] cursor-pointer block">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase size={28} className="text-accent" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-left">
                  Business Education
                </h2>

                <p className="text-muted-foreground text-left text-sm mb-4 leading-relaxed">
                  Build & scale your online business with digital marketing, sales funnels, and multiple income streams.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">Marketing</span>
                  <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">Sales</span>
                  <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">Branding</span>
                </div>

                <div className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 rounded-full transition-all group-hover:scale-105 mb-3">
                  <Briefcase size={18} />
                  <span>Learn How To Grow Your Business</span>
                </div>

                <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open('https://calendly.com/stackmodechris/businessscaling', '_blank'); }} className="flex items-center justify-center gap-2 text-accent/80 hover:text-accent text-sm font-medium transition-colors">
                  <span>FREE Business Scaling Call</span>
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Limited Spots Available — Book Your Free Call Now
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-muted-foreground text-sm mb-10">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Proven</span>
              <span>Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Full</span>
              <span>Educational Library</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">Free</span>
              <span>Strategy Calls</span>
            </div>
          </div>

          {/* Video Introduction */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              This Is How You Turn Business Profits Into Trading <span className="text-primary">Income</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-4">👇 Watch to learn how I can help you</p>
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)]">
              {!videoPlaying ? <button onClick={() => setVideoPlaying(true)} className="relative w-full aspect-video group cursor-pointer" aria-label="Play video">
                  {/* YouTube Thumbnail */}
                  <img src="https://img.youtube.com/vi/beRKDGUDcdU/maxresdefault.jpg" alt="Meet Your Mentor - Stackmodechris" className="w-full h-full object-cover" />
                  
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
                    <img src="/images/sm-logo.png" alt="Stackmode" className="w-6 h-6 object-contain" />
                    <span className="text-white text-xs font-semibold">STACKMODE</span>
                  </div>
                </button> : <div className="aspect-video">
                  <iframe src="https://www.youtube.com/embed/beRKDGUDcdU?autoplay=1" title="Meet Your Mentor - Stackmodechris" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </div>}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 border-t border-border">
        <ReviewsGallery />
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
    </main>;
};
export default Home;