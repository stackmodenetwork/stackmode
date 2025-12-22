import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { Icon3D } from '@/components/Icon3D';
import { PressStartButton } from '@/components/PressStartButton';
import { ShoppingCart, Briefcase, Play, BookOpen, CandlestickChart, Siren, Check, DollarSign, Mic, Users, TrendingUp, Rocket, MessageSquare, Instagram, Youtube, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// Declare Calendly type
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: any) => void;
    };
  }
}
const Index = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showBadge, setShowBadge] = useState(true);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    // YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player('hero-video', {
        events: {
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setShowBadge(false);
            }
          }
        }
      });
    };
  }, []);
  const handlePressStart = () => {
    navigate('/game');
  };
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth">
      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative px-4 py-3 flex items-center justify-between border-b border-primary/30">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-accent animate-bounce" />
              <span className="text-sm font-bold text-foreground">Ready to Trade?</span>
            </div>
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 text-background font-bold text-xs px-4 py-2 rounded-lg shadow-lg shadow-accent/30 transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-1">
                <Rocket size={14} className="group-hover:animate-pulse" />
                BOOK FREE CALL
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Music - Deferred Loading */}
      <audio ref={audioRef} loop muted className="hidden" preload="none">
        <source src="/ambient-cyber-music.mp3" type="audio/mpeg" />
        <source src="/ambient-cyber-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Main Content - VSL Funnel Structure */}
      <section id="home" className="relative z-10 min-h-screen px-4 py-6 sm:py-8">
        
        {/* Headline - Above the Fold */}
        <header id="intro" className="text-center mb-6 sm:mb-8 max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4 animate-pulse">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary text-sm font-mono font-bold">Students Currently In Training</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary neon-glow mb-4 animate-fade-in">WELCOME TO STACKMODE.NET</h1>
          
          {/* Promo Video */}
          <h3 style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }} className="text-sm sm:text-base font-semibold text-orange-400 mb-3 text-center drop-shadow-[0_0_12px_rgba(251,146,60,0.8)] animate-fade-in md:text-xl">Hello, Here Is How I Mentor My Clients To Become Profitable Traders Watch This Video and Book A Free Call To Get Started Inshallah </h3>
          <div className="relative w-full max-w-xl mx-auto mb-6 px-4 sm:px-0">
            {/* Subtle glow effect */}
            <div className="absolute -inset-2 bg-accent/15 rounded-2xl blur-lg" />
            
            {/* Video container */}
            <div className="relative bg-background rounded-xl overflow-hidden border border-accent/30">
              <div className="relative w-full" style={{
              paddingBottom: '56.25%'
            }}>
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/DcNWSoWGBhs" title="How I Mentor My Clients" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
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

        {/* Main CTAs - Side by Side */}
        <section id="mentorship" className="max-w-6xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Free Mentorship Button */}
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" aria-label="Book Free Trading Mentorship Session" className="block group h-full">
              <article className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)] group-hover:scale-[1.02]">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.8),transparent_50%)] animate-pulse"></div>
                </div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{
                animationDelay: '1s'
              }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl" aria-hidden="true">📅</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent neon-glow group-hover:scale-105 transition-transform">TRADING MENTORSHIP</h2>
                  </div>
                  
                  <p className="text-foreground/90 mb-2 text-center text-sm sm:text-base">Get your personalized market game plan</p>
                  <p className="text-foreground/80 mb-4 sm:mb-6 text-center text-xs sm:text-sm italic">One-on-one guidance tailored to your trading goals — limited spots available!</p>
                  
                  <div className="relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-xl bg-accent/30 blur-xl animate-pulse group-hover:bg-accent/50 transition-colors"></div>
                    
                    {/* Main button */}
                    <div className="relative bg-gradient-to-r from-accent via-accent to-accent/80 text-background font-black text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-xl shadow-2xl overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent),linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                        BOOK A FREE CALL TODAY    
                        <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-5 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                        <Check size={14} className="text-background" />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-mono font-semibold">24/7 Support</p>
                    </div>
                    {/* Urgency */}
                    <div className="bg-destructive/20 border border-destructive/50 rounded-lg px-3 py-1.5 mt-2">
                      <p className="text-xs text-destructive font-bold animate-pulse">🔥 Spots Are Filling Quick!</p>
                    </div>
                  </div>
                </div>
              </article>
            </a>

            {/* Catch My Trades Button */}
            <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to Live Trading Signals" className="block group h-full">
              <article className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-cyan-400/50 rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] group-hover:scale-[1.02]">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.8),transparent_50%)] animate-pulse"></div>
                </div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{
                animationDelay: '0.5s'
              }}></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{
                animationDelay: '1.5s'
              }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl" aria-hidden="true">📈</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 neon-glow group-hover:scale-105 transition-transform">CATCH MY TRADES</h2>
                  </div>
                  
                  <p className="text-foreground/90 mb-3 text-center text-sm sm:text-base">Copy my exact trading strategy and key levels</p>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="text-muted-foreground line-through text-base sm:text-lg">$50/month</span>
                    <span className="text-cyan-400 font-bold text-xl sm:text-2xl md:text-3xl">$20/month</span>
                  </div>
                  
                  <div className="relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-xl animate-pulse group-hover:bg-cyan-400/50 transition-colors"></div>
                    
                    {/* Main button */}
                    <div className="relative bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 text-background font-black text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-xl shadow-2xl overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent),linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                        START COPYING
                        <span className="inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                      <Check size={14} className="text-background" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono font-semibold">Real-Time Alerts</p>
                  </div>
                </div>
              </article>
            </a>
        </div>

        {/* Calendly Inline Widget */}
        <AnimatedBlock delay={0.9} className="mt-12 max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-2xl -z-10" />
            <div 
              className="calendly-inline-widget rounded-2xl overflow-hidden border border-border/50" 
              data-url="https://calendly.com/stackmodechris/tradingmastermindcoaching?background_color=0a0b0d&text_color=ffffff&primary_color=d200ff"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </AnimatedBlock>
        </section>

        {/* Three Action Buttons */}
        <AnimatedBlock delay={1.175} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* Discord Button */}
            <a href="https://discord.gg/stackmodechris" target="_blank" rel="noopener noreferrer" className="group relative">
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
            <a href="https://podcasters.spotify.com/pod/show/stackmodechris" target="_blank" rel="noopener noreferrer" className="group relative">
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
            <a href="https://stackmodechris.systeme.io/trading" target="_blank" rel="noopener noreferrer" className="group relative">
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
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary neon-glow mb-3">
            Real Students, Real Profits 💰
          </h2>
          <p className="text-lg sm:text-xl text-secondary mb-6 sm:mb-8">See What Our Community Is Achieving Alhamdulillah</p>
        </section>

        {/* Featured Testimonial */}
        <AnimatedBlock delay={1.14} className="mb-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-card via-card/80 to-card border-2 border-accent/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-accent/20 mx-0 mr-[100px]">!</div>
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-foreground/90 italic mb-4 leading-relaxed">  "Brother without your mentorship id still be blowing accounts rn"</p>
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
        <AnimatedBlock delay={1.15} className="mb-16">
          <ReviewsGallery />
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
            <h3 className="text-2xl md:text-3xl font-bold text-primary neon-glow mb-6 text-center">
              How I Made $100 in 15 Minutes Alhamdulillah!
            </h3>
            <div className="relative w-full" style={{
            paddingBottom: '56.25%'
          }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-accent/50" src="https://www.youtube.com/embed/Ay6AYak6sXE" title="How I Made $100 in 15 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary neon-glow mb-2">
                Common Questions
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

        <AnimatedBlock delay={1.4} className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
              Learn Real Trading With Stackmodechris — Book A FREE Mentorship Call, Catch My Trades Live, And Master Proven Strategies To Stack Wins Inshallah.
            </p>
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
        <div id="socials" className="mt-12 max-w-6xl mx-auto mb-16">
          <h4 className="text-3xl md:text-4xl font-bold text-accent neon-glow mb-6 text-center">
            Social Media Links
          </h4>
          <div className="flex justify-center items-center gap-6">
            <a href="https://www.instagram.com/stackmodechris_" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card neon-border rounded-full p-4 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer hover-scale">
                <Instagram size={32} className="text-pink-500 neon-glow group-hover:scale-110 transition-transform" />
              </div>
            </a>
            
            <a href="https://www.tiktok.com/@stackmodechris_" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card neon-border rounded-full p-4 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-400 neon-glow group-hover:scale-110 transition-transform">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
            </a>
            
            <a href="https://www.youtube.com/@stackmodechris" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card neon-border rounded-full p-4 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer hover-scale">
                <Youtube size={32} className="text-red-500 neon-glow group-hover:scale-110 transition-transform" />
              </div>
            </a>
            
            <a href="https://twitter.com/stackmodechris" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-card neon-border rounded-full p-4 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-foreground neon-glow group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-accent neon-glow text-center mt-6">
            May God Bless You And Your Loved Ones!
          </p>
        </div>

        {/* Bottom Spacer for Footer - Adjusted for mobile */}
        <div className="h-[600px] md:h-96"></div>
        
      </section>

      {/* Corner UI Elements */}
      <div className="hidden md:block absolute top-4 left-4 text-primary font-mono text-sm">
        v2.0.0
      </div>
      <div className="hidden md:block absolute top-4 right-4 text-secondary font-mono text-sm">
        ONLINE
      </div>
      <div className="absolute bottom-4 left-4 text-accent font-mono text-sm">
        LOADING...
      </div>
      <div className="absolute bottom-4 right-4 text-muted-foreground font-mono text-sm">
        @STACKMODECHRIS
      </div>

      {/* Terms and Conditions */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border p-4 z-50">
        <div className="text-center text-xs text-muted-foreground font-mono">
          <p className="mb-2">
            <a href="https://stackmodechris.systeme.io/termsandconditions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline">
              Terms and Conditions/Refund Policy
            </a>
          </p>
          <p className="mb-2">
            <a href="https://stackmodechris.systeme.io/privacypolicy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline">
              Privacy Policy
            </a>
          </p>
          <p className="mb-2">
            Information shared here is for educational purposes only. Individuals, traders and business owners should evaluate their own trading strategies as well as their own business strategies, and identify any potential risks. The information shared here is not a guarantee of success. Your results may vary.
          </p>
          <p className="mb-2">
            <strong>INCOME DISCLAIMER:</strong> Although we make every effort to accurately represent the services and/or products presented on this website, Stackmodechris or Stackmode Network LLC. makes no assurance, representation or promise regarding future earnings or income, or that you will make any specific amount of money, or any money at all, or that you will not lose money. Earnings or income statements, or examples of earnings or income, represent estimates of what you may earn; however, there is no promise or guarantee that you may experience the same level of earnings or income. There is no assurance that any prior success or past results regarding earnings or income may be an indication of your future success or results. Stackmodechris Gives Education and Stackmode Network LLC is a education company. We do not sell a business opportunity, "get rich quick" program or money-making system. We believe, with education, individuals can be better prepared to make investment decisions, but we do not guarantee success in our training. We do not make earnings claims, efforts claims, or claims that our training will make you any money. All material is intellectual property and protected by copyright. Any duplication, reproduction, or distribution is strictly prohibited
          </p>
          <p>
            @2025 Stackmodechris/Stackmode Network LLC
          </p>
        </div>
      </div>

      {/* Scanlines Effect - Static */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" style={{
        backgroundSize: '100% 4px'
      }} />
      </div>

    </main>;
};
export default Index;