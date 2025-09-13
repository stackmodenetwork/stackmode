import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { Icon3D } from '@/components/Icon3D';
import { PressStartButton } from '@/components/PressStartButton';
import { ShoppingCart, Briefcase, Play, BookOpen, CandlestickChart, Siren, Check, DollarSign, Mic } from 'lucide-react';
const Index = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
    
    // Lazy load Calendly script after a delay for slow internet
    const loadCalendly = () => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };
    
    // Load after 1 second to prioritize initial page content
    const timer = setTimeout(loadCalendly, 1000);
    
    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  const handlePressStart = () => {
    navigate('/game');
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop muted={false} className="hidden">
        <source src="/ambient-cyber-music.mp3" type="audio/mpeg" />
        <source src="/ambient-cyber-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full gap-4 p-8 animate-pulse-neon">
          {Array.from({
          length: 64
        }).map((_, i) => <div key={i} className="bg-primary rounded" style={{
          animationDelay: `${i * 0.05}s`,
          animationDuration: '3s'
        }} />)}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Title Block */}
        <AnimatedBlock delay={0.1} className="text-center mb-8 mt-8">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary neon-glow mb-4 animate-pulse-neon">STACKMODE.NET</h1>
            <h2 className="text-2xl font-bold text-secondary neon-glow animate-glitch md:text-3xl">CREATE YOUR FUTURE INSHALLAH</h2>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 -left-12 w-8 h-8 border-2 border-accent animate-rotate-3d" />
            <div className="absolute -bottom-4 -right-12 w-6 h-6 bg-accent animate-float" />
          </div>
        </AnimatedBlock>


        {/* Icon Row */}
        <AnimatedBlock delay={0.3} className="mb-8">
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <Icon3D type="wallet" size={48} className="hover:scale-110 transition-transform duration-500 md:w-16 md:h-16" />
            <Icon3D type="video" size={48} className="hover:scale-110 transition-transform duration-500 md:w-16 md:h-16" />
            <Icon3D type="book" size={48} className="hover:scale-110 transition-transform duration-500 md:w-16 md:h-16" />
            <Icon3D type="globe" size={48} className="hover:scale-110 transition-transform duration-500 md:w-16 md:h-16" />
          </div>
        </AnimatedBlock>

        {/* Optimized Calendly Widget */}
        <AnimatedBlock delay={0.4} className="mb-8 w-full max-w-4xl">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/stackmodechris/tradingmastermindcoaching?hide_gdpr_banner=1&background_color=0b0b0b&text_color=d1eaca&primary_color=bf00ff&hide_landing_page_details=1&hide_event_type_details=1" 
            style={{ minWidth: '320px', height: '700px', width: '100%' }}
          />
        </AnimatedBlock>

        {/* Stacking Blocks */}
        <div className="mb-16 space-y-8">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AnimatedBlock delay={0.5} className="w-80 h-16">
              <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <CandlestickChart size={24} className="text-purple-400 mr-3 neon-glow" />
                <span className="text-foreground font-bold tracking-wider">TRADING MENTORSHIP</span>
              </a>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.6} className="w-80 h-16">
              <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <div className="flex items-center mr-3">
                  <DollarSign size={20} className="text-green-300 neon-glow" />
                  <DollarSign size={20} className="text-green-300 neon-glow -ml-1" />
                  <DollarSign size={20} className="text-green-300 neon-glow -ml-1" />
                </div>
                <span className="text-foreground font-bold tracking-wider">CATCH MY TRADES</span>
              </a>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.7} className="w-80 h-16">
              <a href="https://stackmodechris.systeme.io/trading" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <BookOpen size={24} className="text-blue-400 mr-3 neon-glow" />
                <span className="text-foreground font-bold tracking-wider">FREE TRADING EDUCATION</span>
              </a>
            </AnimatedBlock>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AnimatedBlock delay={0.8} className="w-80 h-16">
              <a href="https://calendly.com/stackmodechris/stackmode-business-mentorship" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <Briefcase size={24} className="text-yellow-400 mr-3 neon-glow" />
                <span className="text-foreground font-bold tracking-wider">START/GROW YOUR BUSINESS</span>
              </a>
            </AnimatedBlock>

            <AnimatedBlock delay={0.9} className="w-80 h-16">
              <a href="https://open.spotify.com/show/0vEjR8jK1E1iVZd4csQniK?si=bbe874533166484f" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <Mic size={24} className="text-cyan-400 mr-3 neon-glow" />
                <span className="text-foreground font-bold tracking-wider">STACKMODE NETWORK PODCAST</span>
              </a>
            </AnimatedBlock>

            <AnimatedBlock delay={1.0} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center hover:soft-glow transition-all cursor-pointer">
              <ShoppingCart size={24} className="text-emerald-400 mr-3 neon-glow" />
              <span className="text-foreground font-bold tracking-wider">SHOP</span>
            </AnimatedBlock>
          </div>
        </div>

        {/* SUCCESS TESTIMONIALS SECTION */}
        <AnimatedBlock delay={1.1} className="mb-8 text-center">
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-bold text-accent neon-glow mb-2 animate-pulse-neon">REAL RESULTS ALHAMDULILLAH</h3>
            <p className="text-xl text-secondary font-bold tracking-wider flex items-center justify-center gap-2">FROM REAL STUDENTS <Check size={20} className="text-green-400 neon-glow" /></p>
            
            {/* Decorative Stars */}
            <div className="absolute -top-2 -left-8 text-accent text-2xl animate-pulse-neon">★</div>
            <div className="absolute -top-4 -right-6 text-primary text-xl animate-float">★</div>
            <div className="absolute -bottom-2 left-4 text-secondary text-lg animate-pulse-neon">★</div>
            <div className="absolute -bottom-4 right-8 text-accent text-2xl animate-float">★</div>
          </div>
        </AnimatedBlock>

        {/* Trading Results Gallery */}
        <AnimatedBlock delay={1.15} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Review 1 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-xl animate-pulse-neon">★</div>
              <div className="absolute -top-3 -right-1 text-primary text-lg animate-float">★</div>
              <div className="absolute -bottom-2 -left-1 text-secondary text-sm animate-pulse-neon">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl animate-float">★</div>
              
              <img src="/lovable-uploads/206329e8-5e7d-4326-b922-690e9f4a17c6.png" alt="Trading Success - Client Results" className="w-72 h-auto neon-border rounded-lg hover:soft-glow transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Review 2 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-primary text-lg animate-float">★</div>
              <div className="absolute -top-3 -right-1 text-accent text-xl animate-pulse-neon">★</div>
              <div className="absolute -bottom-2 -left-1 text-accent text-lg animate-float">★</div>
              <div className="absolute -bottom-3 -right-2 text-secondary text-sm animate-pulse-neon">★</div>
              
              <img src="/lovable-uploads/d73c4368-8499-406f-8576-206f4c571130.png" alt="Trading Volume Growth - $1,195 Gross Volume" className="w-72 h-auto neon-border rounded-lg hover:soft-glow transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Review 3 */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-secondary text-xl animate-pulse-neon">★</div>
              <div className="absolute -top-3 -right-1 text-accent text-lg animate-float">★</div>
              <div className="absolute -bottom-2 -left-1 text-primary text-lg animate-pulse-neon">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-xl animate-float">★</div>
              
              <img src="/lovable-uploads/a28ad2f5-ba42-468f-b48a-866d99c2ded8.png" alt="Daily Profits - $563.94 Realized" className="w-72 h-auto neon-border rounded-lg hover:soft-glow transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Review 4 - Volume Chart */}
            <div className="relative group">
              <div className="absolute -top-2 -left-2 text-accent text-lg animate-float">★</div>
              <div className="absolute -top-3 -right-1 text-primary text-xl animate-pulse-neon">★</div>
              <div className="absolute -bottom-2 -left-1 text-secondary text-xl animate-float">★</div>
              <div className="absolute -bottom-3 -right-2 text-accent text-sm animate-pulse-neon">★</div>
              
              <img src="/lovable-uploads/2cddecc7-da9f-49e7-bc98-d47d395f175c.png" alt="Multiple Trading Wins - Consistent Profits" className="w-72 h-auto neon-border rounded-2xl hover:soft-glow transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </AnimatedBlock>

        {/* System Status */}
        <AnimatedBlock delay={1.16} className="text-center mb-8">
          <p className="text-muted-foreground font-mono text-sm tracking-wider animate-pulse-neon">SYSTEM INITIALIZED • READY FOR LAUNCH SUBHANALLAH</p>
        </AnimatedBlock>

        {/* Results Stats */}
        <AnimatedBlock delay={1.17} className="mb-[500px] md:mb-96 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent neon-glow">$5000+</div>
              <div className="text-sm font-mono text-muted-foreground tracking-wider">PROFITS GENERATED</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary neon-glow">100%</div>
              <div className="text-sm font-mono text-muted-foreground tracking-wider">REAL PROFITS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary neon-glow">24/7</div>
              <div className="text-sm font-mono text-muted-foreground tracking-wider">SUPPORT & SIGNALS</div>
            </div>
          </div>
        </AnimatedBlock>
        
        {/* Bottom Spacer */}
        <div className="mb-32"></div>
        
      </div>

      {/* Corner UI Elements */}
      <div className="absolute top-4 left-4 text-primary neon-glow font-mono text-sm animate-pulse-neon">
        v2.0.0
      </div>
      <div className="absolute top-4 right-4 text-secondary neon-glow font-mono text-sm animate-pulse-neon">
        ONLINE
      </div>
      <div className="absolute bottom-4 left-4 text-accent neon-glow font-mono text-sm animate-pulse-neon">
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

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse-neon" style={{
        backgroundSize: '100% 4px'
      }} />
      </div>
    </div>;
};
export default Index;