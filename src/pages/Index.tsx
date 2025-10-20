import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { Icon3D } from '@/components/Icon3D';
import { PressStartButton } from '@/components/PressStartButton';
import { ShoppingCart, Briefcase, Play, BookOpen, CandlestickChart, Siren, Check, DollarSign, Mic, Users, TrendingUp, Rocket, MessageSquare, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    // Add Calendly CSS
    const calendlyCSS = document.createElement('link');
    calendlyCSS.href = 'https://assets.calendly.com/assets/external/widget.css';
    calendlyCSS.rel = 'stylesheet';
    document.head.appendChild(calendlyCSS);

    // Initialize Calendly badge widget with delay to improve initial load
    const initCalendly = () => {
      setTimeout(() => {
        const calendlyScript = document.createElement('script');
        calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
        calendlyScript.type = 'text/javascript';
        calendlyScript.async = true;
        document.head.appendChild(calendlyScript);
        calendlyScript.onload = () => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/stackmodechris/tradingmastermindcoaching?background_color=111111&text_color=edffec&primary_color=ff0ddd',
              text: 'BOOK A FREE CALL',
              color: '#111111',
              textColor: '#18ff00',
              branding: true
            });
          }
        };
      }, 1000);
    };
    initCalendly();

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
    return () => {
      // Cleanup - only remove CSS as script is loaded with delay
      if (document.head.contains(calendlyCSS)) {
        document.head.removeChild(calendlyCSS);
      }
    };
  }, []);
  const handlePressStart = () => {
    navigate('/game');
  };
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Music - Deferred Loading */}
      <audio ref={audioRef} loop muted className="hidden" preload="none">
        <source src="/ambient-cyber-music.mp3" type="audio/mpeg" />
        <source src="/ambient-cyber-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Main Content - VSL Funnel Structure */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        
        {/* Headline - Above the Fold */}
        <div className="text-center mb-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary neon-glow mb-4 lg:text-6xl">STACKMODE.NET</h1>
        </div>

        {/* Main CTAs - Side by Side */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Mentorship Button */}
            <div className="bg-card/50 border-2 border-accent rounded-xl p-8 hover:soft-glow transition-all">
              <h3 className="text-2xl md:text-3xl font-bold text-accent neon-glow mb-4 text-center">TRADING MENTORSHIP</h3>
              <p className="text-foreground mb-6 text-center">Book a free strategy call and get personalized guidance</p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-background font-bold text-lg px-8 py-6 rounded-lg neon-glow w-full transform hover:scale-105 transition-all shadow-2xl">
                <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
                  📅 BOOK A FREE CALL
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center font-mono">✅ No Credit Card Required</p>
            </div>

            {/* Catch My Trades Button */}
            <div className="bg-card/50 border-2 border-cyan-400 rounded-xl p-8 hover:soft-glow transition-all">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 neon-glow mb-4 text-center">CATCH MY TRADES</h3>
              <p className="text-foreground mb-6 text-center">Copy my exact trading strategy and grow your portfolio</p>
              <Button asChild className="bg-cyan-400 hover:bg-cyan-400/90 text-background font-bold text-lg px-8 py-6 rounded-lg neon-glow w-full transform hover:scale-105 transition-all shadow-2xl">
                <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer">
                  📈 START COPYING
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center font-mono">✅ Real-Time Alerts</p>
            </div>
        </div>
        </div>

        {/* HERO VSL - Primary Video */}
        <div className="mb-6 max-w-5xl mx-auto">
          <div className="relative">
            <iframe id="hero-video" className="w-full aspect-video rounded-lg purple-border shadow-2xl" src="https://www.youtube.com/embed/DcNWSoWGBhs?si=cK9Pyy7Iili2_nUz&rel=0&modestbranding=1&hd=1&enablejsapi=1" title="Training Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            {showBadge && <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-accent text-background px-3 py-1 md:px-6 md:py-3 rounded-lg font-bold text-xs md:text-lg neon-glow animate-[pulse_3s_ease-in-out_infinite]">
                🔥 WATCH NOW
              </div>}
          </div>
        </div>

        {/* Subheading - Below Video */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-secondary neon-glow md:text-base font-normal">Learn Real Trading With Stackmodechris — Book A FREE Mentorship Call, Catch My Trades Live, And Master Proven Strategies To Stack Wins Inshallah.</h2>
        </div>

        {/* More Ways To Learn & Grow - Moved Here */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary neon-glow mb-8">
            More Ways To Learn & Grow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://stackmodechris.systeme.io/trading" target="_blank" rel="noopener noreferrer" className="bg-card neon-border rounded-lg p-6 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer text-center">
              <BookOpen size={32} className="text-yellow-400 neon-glow mx-auto mb-3" />
              <span className="text-yellow-400 font-bold text-lg neon-glow block">FREE TRADING EDUCATION</span>
              <p className="text-sm text-muted-foreground mt-2">Start learning today</p>
            </a>
            
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="bg-card neon-border rounded-lg p-6 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer text-center">
              <MessageSquare size={32} className="text-primary neon-glow mx-auto mb-3" />
              <span className="text-primary font-bold text-lg neon-glow block">DISCORD</span>
              <p className="text-sm text-muted-foreground mt-2">Join the community</p>
            </a>
            
            <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet" target="_blank" rel="noopener noreferrer" className="bg-card neon-border rounded-lg p-6 hover:bg-card/80 hover:soft-glow transition-all cursor-pointer text-center">
              <Mic size={32} className="text-orange-500 neon-glow mx-auto mb-3" />
              <span className="text-orange-500 font-bold text-lg neon-glow block">PODCAST</span>
              <p className="text-sm text-muted-foreground mt-2">Listen & learn</p>
            </a>
          </div>
        </div>

        {/* SOCIAL PROOF - Real Results */}
        <div className="mb-12 text-center max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-primary neon-glow mb-3">
            Real Students, Real Profits 💰
          </h3>
          <p className="text-xl text-secondary mb-8">See What Our Community Is Achieving Daily</p>
        </div>

        {/* Trading Results Gallery - Row 1 */}
        <AnimatedBlock delay={1.15} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Review 1 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/206329e8-5e7d-4326-b922-690e9f4a17c6.png" alt="Trading Success - Client Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Review 2 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/d73c4368-8499-406f-8576-206f4c571130.png" alt="Trading Volume Growth - $1,195 Gross Volume" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Review 3 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/a28ad2f5-ba42-468f-b48a-866d99c2ded8.png" alt="Daily Profits - $563.94 Realized" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Review 4 - Volume Chart */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/2cddecc7-da9f-49e7-bc98-d47d395f175c.png" alt="Multiple Trading Wins - Consistent Profits" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>


        {/* Trading Results Gallery - Row 2 */}
        <AnimatedBlock delay={1.16} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 1 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-1.png" alt="Student Trading Success - Real Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 2 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-2.png" alt="Trading Profits - Student Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 3 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-3.png" alt="Consistent Trading Wins - Mentorship Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 4 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-4.png" alt="Profitable Trading Strategy - Real Student Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 3 */}
        <AnimatedBlock delay={1.17} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 5 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-5.png" alt="Trading Account Growth - Funded Trader Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 6 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-6.png" alt="Trading Excellence - Coaching Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 7 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-7.png" alt="Student Progress - Trading Mastery" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 8 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-8.png" alt="Profitable Trading Capture - Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 4 */}
        <AnimatedBlock delay={1.18} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 9 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-9.png" alt="Trading Growth Image - Mentorship Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 10 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-10.png" alt="Student Achievement - Trading Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 11 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-11.png" alt="Trading Success Screenshot - Real Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 12 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-12.png" alt="Profitable Trade Display - Student Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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

        {/* Trading Results Gallery - Row 5 */}
        <AnimatedBlock delay={1.19} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 13 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-13.png" alt="Mobile Trading Success - Student Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 14 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-14.png" alt="Trading Platform Success - Mentorship Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 15 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-15.png" alt="Profit Growth Image - Trading Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 16 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-16.png" alt="Trading Achievement - Real Student Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 6 */}
        <AnimatedBlock delay={1.20} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 17 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-17.png" alt="Trading Performance - Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 18 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-18.png" alt="Mobile Trading Win - Student Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 19 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-19.png" alt="Trading App Success - Real Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 20 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-20.png" alt="Profitable Trading Image - Mentorship Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 7 */}
        <AnimatedBlock delay={1.21} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 21 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-21.png" alt="Trading Success Platform - Student Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 22 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-22.png" alt="Final Trading Achievement - Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 23 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-23.png" alt="Student Research Guide Review - Trading Education" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 24 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-24.png" alt="Trading Mentorship Success - Student Gratitude" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 8 */}
        <AnimatedBlock delay={1.22} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 25 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-25.png" alt="Trading Strategy Development - Mentorship Impact" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 26 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-26.png" alt="Discord Trading Community Success - Performance Updates" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 27 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-27.png" alt="Trading Account Growth - SPX Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 28 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-28.png" alt="Trading Chart Analysis Success - Student Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 9 */}
        <AnimatedBlock delay={1.23} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 29 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-29.png" alt="Options Trading Portfolio Success - HAL & CF Profits" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 30 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-30.png" alt="CF Stock Options Success - Trading Performance" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 31 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-31.png" alt="Trading Confidence Growth - Mentorship Impact" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 32 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-32.png" alt="IWM Signal Trading Success - Profit Management" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery - Row 10 */}
        <AnimatedBlock delay={1.24} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* New Review 33 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-33.png" alt="Trading Mentorship Success - Alhamdulillah" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* New Review 34 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-34.png" alt="Trading Gap Up Success - Nice Play" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Chat Screenshot */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/chat-screenshot-2.jpg" alt="Client Booking Success - Ready to Grind" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Success Showcase */}
            <div className="relative group opacity-60">
              <div className="w-72 h-48 purple-border rounded-lg bg-card/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-accent text-3xl mb-2">★★★★★</div>
                  <div className="text-muted-foreground font-mono text-sm">CONTINUOUS</div>
                  <div className="text-muted-foreground font-mono text-sm">SUCCESS STORIES</div>
                  <div className="text-muted-foreground font-mono text-xs mt-2">ALLAHU AKBAR</div>
                </div>
              </div>
            </div>

            {/* Placeholder for visual balance */}
            <div className="w-72 h-48 opacity-0 md:block hidden"></div>
          </div>
        </AnimatedBlock>


        {/* Final CTA - Urgency */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Button asChild className="bg-accent hover:bg-accent/90 text-background font-bold text-base md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-lg neon-glow w-full transform hover:scale-105 transition-all shadow-2xl">
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
              🎯 BOOK YOUR FREE STRATEGY CALL NOW
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-mono">⚡ Limited Slots Available - Don't Miss Out</p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 max-w-6xl mx-auto mb-16">
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
        
      </div>

      {/* Corner UI Elements */}
      <div className="absolute top-4 left-4 text-primary font-mono text-sm">
        v2.0.0
      </div>
      <div className="absolute top-4 right-4 text-secondary font-mono text-sm">
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
    </div>;
};
export default Index;