import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play, Phone, ChevronRight, Award, Users, Globe, Youtube, BookOpen } from 'lucide-react';
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
                Call Now: <span className="text-primary">(678) 775-8532</span>
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 bg-primary/20 border border-primary/40 text-primary text-xs font-medium px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Available
            </span>
          </a>
        </div>
      </div>

      {/* Hero Section - Simplified */}
      <section className="relative pt-8 sm:pt-12 pb-8 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-2">
            <Zap size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold">Learn. Earn. Stack.</span>
          </div>
          
          {/* Active Clients Indicator */}
          <div className="inline-flex items-center gap-2 mb-4 ml-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-muted-foreground text-sm">Clients in training</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Master <span className="text-primary">Trading</span> & Build Your <span className="text-accent">Business</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your path to financial freedom
          </p>

          {/* Choose Your Path - Large Interactive Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
            {/* Trading Path */}
            <Link 
              to="/trading" 
              className="group relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] hover:scale-[1.02] block"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 border-2 border-primary/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <TrendingUp size={32} className="text-primary sm:w-10 sm:h-10" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Trading Education
                </h2>

                <p className="text-muted-foreground text-sm mb-4">
                  Stocks • Options • Futures • Forex • Crypto
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Start Learning</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Business Path */}
            <Link 
              to="/business" 
              className="group relative bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border-2 border-accent/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-[1.02] block"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 border-2 border-accent/50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                  <Briefcase size={32} className="text-accent sm:w-10 sm:h-10" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Business Education
                </h2>

                <p className="text-muted-foreground text-sm mb-4">
                  Marketing • Sales • Branding • Scaling
                </p>

                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  <span>Grow Your Business</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a 
              href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              BOOK A FREE TRADING CALL HERE
              <ArrowRight size={14} />
            </a>
            <a 
              href="https://calendly.com/stackmodechris/businessscaling" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/20 transition-colors"
            >
              BOOK YOUR FREE BUSINESS GROWTH CALL HERE
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section - Right after path selection */}
      <section className="py-10 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
              Real Results
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              What My Clients Are Achieving
            </h2>
          </div>
          <ReviewsGallery />
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">
              What I Offer
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Areas of Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, title: 'Stock Trading', desc: 'Technical analysis & swing trading', color: 'primary', link: '/trading' },
              { icon: Briefcase, title: 'Options Trading', desc: 'High-probability setups', color: 'primary', link: '/trading' },
              { icon: Award, title: 'Futures & Forex', desc: 'Price action strategies', color: 'primary', link: '/trading' },
              { icon: Users, title: 'Crypto Trading', desc: 'Digital asset analysis', color: 'primary', link: '/trading' },
              { icon: Zap, title: 'Business Scaling', desc: 'Grow your revenue', color: 'accent', link: '/business' },
              { icon: Globe, title: 'Website Creation', desc: 'Professional web presence', color: 'accent', link: '/buildyourwebsite' },
              { icon: Youtube, title: 'Content Monetization', desc: 'Turn content to income', color: 'accent', link: '/business' },
              { icon: BookOpen, title: 'Ad Creation', desc: 'High-converting ads', color: 'accent', link: '/business' }
            ].map((item, i) => (
              <Link 
                to={item.link}
                key={i} 
                className="bg-background rounded-xl p-4 border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group block"
              >
                <div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className={`w-5 h-5 text-${item.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>

          {/* Library Button */}
          <div className="mt-8 text-center">
            <Link 
              to="/library" 
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/40 rounded-2xl px-8 py-4 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-foreground">Free Resources & Courses</h3>
                  <p className="text-sm text-muted-foreground">Browse the full library</p>
                </div>
                <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Below expertise */}
      <section className="py-12 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">
            Turn Business Profits Into Trading <span className="text-primary">Income</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">Watch how I can help you stack both</p>
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]">
            {!videoPlaying ? (
              <button onClick={() => setVideoPlaying(true)} className="relative w-full aspect-video group cursor-pointer" aria-label="Play video">
                <img src="https://img.youtube.com/vi/beRKDGUDcdU/maxresdefault.jpg" alt="Meet Your Mentor" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <span className="mt-3 text-white font-semibold text-sm sm:text-base">Watch Now</span>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 rounded-full px-2.5 py-1">
                  <img src="/images/sm-logo.png" alt="Stackmode" className="w-5 h-5 object-contain" />
                  <span className="text-white text-xs font-medium">STACKMODE</span>
                </div>
              </button>
            ) : (
              <div className="aspect-video">
                <iframe src="https://www.youtube.com/embed/beRKDGUDcdU?autoplay=1" title="Meet Your Mentor" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Preview - Compact */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-card/50 border border-border/50 rounded-2xl p-6">
            <img 
              src="/images/stackmodechris-about-new.png" 
              alt="Stackmodechris" 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-primary/30" 
            />
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Stackmodechris</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Trading mentor & business strategist helping people build wealth through multiple income streams.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <span className="text-border">|</span>
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <span className="text-border">|</span>
            <a href="/dmca" className="text-muted-foreground hover:text-primary transition-colors">DMCA</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Stackmode Network LLC
          </p>
        </div>
      </footer>

      {/* Mobile spacer */}
      <div className="h-24 md:hidden" />

      <CookieConsent />
    </main>;
};

export default Home;
