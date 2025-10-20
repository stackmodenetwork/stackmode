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
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="block group">
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
                  
                  <p className="text-foreground/90 mb-6 text-center text-sm md:text-base">Book a free strategy call and get personalized guidance</p>
                  
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
            <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer" className="block group">
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