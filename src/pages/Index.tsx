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
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="block group h-full">
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)] group-hover:scale-[1.02]">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.8),transparent_50%)] animate-pulse"></div>
                </div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-2xl">📅</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent neon-glow group-hover:scale-105 transition-transform">TRADING MENTORSHIP</h3>
                  </div>
                  
                  <p className="text-foreground/90 mb-6 text-center text-sm md:text-base">Schedule a free first-time strategy call for personalized trading guidance.</p>
                  
                  <div className="relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-xl bg-accent/30 blur-xl animate-pulse group-hover:bg-accent/50 transition-colors"></div>
                    
                    {/* Main button */}
                    <div className="relative bg-gradient-to-r from-accent via-accent to-accent/80 text-background font-black text-lg md:text-xl px-8 py-5 rounded-xl shadow-2xl overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent),linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                        BOOK A FREE CALL
                        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                      <Check size={14} className="text-background" />
                    </div>
                    <p className="text-sm text-muted-foreground font-mono font-semibold">No Credit Card Required</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Catch My Trades Button */}
            <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer" className="block group h-full">
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-cyan-400/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] group-hover:scale-[1.02]">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.8),transparent_50%)] animate-pulse"></div>
                </div>
                
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 neon-glow group-hover:scale-105 transition-transform">CATCH MY TRADES</h3>
                  </div>
                  
                  <p className="text-foreground/90 mb-6 text-center text-sm md:text-base">Copy my exact trading strategy and key levels</p>
                  
                  <div className="relative">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-xl animate-pulse group-hover:bg-cyan-400/50 transition-colors"></div>
                    
                    {/* Main button */}
                    <div className="relative bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 text-background font-black text-lg md:text-xl px-8 py-5 rounded-xl shadow-2xl overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent),linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                        START COPYING
                        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                      <Check size={14} className="text-background" />
                    </div>
                    <p className="text-sm text-muted-foreground font-mono font-semibold">Real-Time Alerts</p>
                  </div>
                </div>
              </div>
            </a>
        </div>
        </div>

        {/* SOCIAL PROOF - Real Results */}
        <div className="mb-12 text-center max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-primary neon-glow mb-3">
            Real Students, Real Profits 💰
          </h3>
          <p className="text-xl text-secondary mb-8">See What Our Community Is Achieving Alhamdulillah</p>
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

            {/* Review 4 */}
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
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-1.png" alt="Student Trading Success - Real Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-2.png" alt="Trading Profits - Student Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-3.png" alt="Consistent Trading Wins - Mentorship Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-4.png" alt="Profitable Trading Strategy - Real Student Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </AnimatedBlock>

        {/* Three Action Buttons */}
        <AnimatedBlock delay={1.175} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* Discord Button */}
            <a href="https://discord.gg/stackmodechris" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-8 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">JOIN DISCORD</h3>
                  <p className="text-sm text-muted-foreground">Connect with traders</p>
                </div>
              </div>
            </a>

            {/* Podcast Button */}
            <a href="https://podcasters.spotify.com/pod/show/stackmodechris" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-8 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">LISTEN TO PODCAST</h3>
                  <p className="text-sm text-muted-foreground">Learn trading insights</p>
                </div>
              </div>
            </a>

            {/* Free Education Button */}
            <a href="https://stackmodechris.systeme.io/freetradereducation" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-xl p-8 hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">FREE EDUCATION</h3>
                  <p className="text-sm text-muted-foreground">Start learning today</p>
                </div>
              </div>
            </a>
          </div>
        </AnimatedBlock>


        {/* Trading Results Gallery - Row 3 */}
        <AnimatedBlock delay={1.17} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-5.png" alt="Trading Account Growth - Funded Trader Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-6.png" alt="Trading Excellence - Coaching Success Story" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-7.png" alt="Student Progress - Trading Mastery" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

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
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-9.png" alt="Trading Growth Image - Mentorship Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-10.png" alt="Student Achievement - Trading Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              <div className="absolute -bottom-3 -right-2 text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">★</div>
              
              <img src="/lovable-uploads/review-11.png" alt="Trading Success Screenshot - Real Results" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

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

        {/* Trading Results Gallery - Row 5-10 */}
        <AnimatedBlock delay={1.19} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-13.png" alt="Mobile Trading Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-14.png" alt="Trading Platform Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-15.png" alt="Profit Growth" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-16.png" alt="Trading Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.20} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-17.png" alt="Trading Performance" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-18.png" alt="Mobile Trading Win" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-19.png" alt="Trading App Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-20.png" alt="Profitable Trading" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.21} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-21.png" alt="Trading Success Platform" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-22.png" alt="Final Trading Achievement" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-23.png" alt="Student Research Guide" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-24.png" alt="Trading Mentorship Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.22} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-25.png" alt="Trading Strategy Development" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-26.png" alt="Discord Trading Community" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-27.png" alt="Trading Account Growth - SPX" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-28.png" alt="Trading Chart Analysis" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.23} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-29.png" alt="Options Trading Portfolio" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-30.png" alt="CF Stock Options Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-31.png" alt="Trading Confidence Growth" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-32.png" alt="IWM Signal Trading" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={1.24} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <div className="relative group">
              <img src="/lovable-uploads/review-33.png" alt="Trading Mentorship Success - Alhamdulillah" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/review-34.png" alt="Trading Gap Up Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/chat-screenshot-2.jpg" alt="Client Booking Success" loading="lazy" decoding="async" className="w-72 h-auto purple-border rounded-lg hover:soft-glow transition-all duration-300 group-hover:scale-102" />
            </div>
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
          </div>
        </AnimatedBlock>


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