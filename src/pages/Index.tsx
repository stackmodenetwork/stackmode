import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { Icon3D } from '@/components/Icon3D';
import { PressStartButton } from '@/components/PressStartButton';
import { ShoppingCart, Briefcase, Play, BookOpen, CandlestickChart, Siren, Check, DollarSign, Mic, Users, TrendingUp } from 'lucide-react';
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
  return <div className="min-h-screen bg-background relative overflow-x-hidden">{/* Changed from overflow-hidden to overflow-x-hidden for better responsive behavior */}
      {/* Background Music - Deferred Loading */}
      <audio ref={audioRef} loop muted className="hidden" preload="none">
        <source src="/ambient-cyber-music.mp3" type="audio/mpeg" />
        <source src="/ambient-cyber-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Background removed */}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Title Block */}
        <AnimatedBlock delay={0.1} className="text-center mb-8 mt-8">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary neon-glow mb-4">STACKMODE.NET</h1>
            <h2 className="text-2xl font-bold text-secondary neon-glow md:text-3xl">CREATE YOUR FUTURE INSHALLAH</h2>
            
            {/* Decorative Elements - Static */}
            <div className="absolute top-8 -left-12 w-8 h-8 border-2 border-accent" />
            <div className="absolute -bottom-4 -right-12 w-6 h-6 bg-accent" />
          </div>
        </AnimatedBlock>


        {/* Icon Row - Optimized Hover */}
        <AnimatedBlock delay={0.3} className="mb-8">
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <Icon3D type="wallet" size={48} className="hover:scale-105 transition-transform duration-300 md:w-16 md:h-16" />
            <Icon3D type="video" size={48} className="hover:scale-105 transition-transform duration-300 md:w-16 md:h-16" />
            <Icon3D type="book" size={48} className="hover:scale-105 transition-transform duration-300 md:w-16 md:h-16" />
            <Icon3D type="globe" size={48} className="hover:scale-105 transition-transform duration-300 md:w-16 md:h-16" />
          </div>
        </AnimatedBlock>


        {/* Stacking Blocks */}
        <div className="mb-16 space-y-8">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AnimatedBlock delay={0.5} className="w-80 h-16">
              <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <CandlestickChart size={24} className="text-yellow-400 mr-3 neon-glow" />
                <span className="text-yellow-400 font-bold tracking-wider neon-glow">TRADING MENTORSHIP</span>
              </a>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.6} className="w-80 h-16">
              <a href="https://whop.com/stackmode-network-llc/stackmode-trades/" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <div className="flex items-center mr-3">
                  <DollarSign size={20} className="text-primary neon-glow" />
                  <DollarSign size={20} className="text-primary neon-glow -ml-1" />
                  <DollarSign size={20} className="text-primary neon-glow -ml-1" />
                </div>
                <span className="text-primary font-bold tracking-wider neon-glow">CATCH MY TRADES</span>
              </a>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.7} className="w-80 h-16">
              <a href="https://stackmodechris.systeme.io/trading" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <BookOpen size={24} className="text-cyan-400 mr-3 neon-glow" />
                <span className="text-cyan-400 font-bold tracking-wider neon-glow">FREE TRADING EDUCATION</span>
              </a>
            </AnimatedBlock>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AnimatedBlock delay={0.8} className="w-80 h-16">
              <a href="https://calendly.com/stackmodechris/stackmode-business-mentorship" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <Briefcase size={24} className="text-fuchsia-500 mr-3 neon-glow" />
                <span className="text-fuchsia-500 font-bold tracking-wider neon-glow">START/GROW YOUR BUSINESS</span>
              </a>
            </AnimatedBlock>

            <AnimatedBlock delay={0.9} className="w-80 h-16">
              <a href="https://open.spotify.com/show/0vEjR8jK1E1iVZd4csQniK?si=bbe874533166484f" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <Mic size={24} className="text-orange-500 mr-3 neon-glow" />
                <span className="text-orange-500 font-bold tracking-wider neon-glow">STACKMODE PODCAST</span>
              </a>
            </AnimatedBlock>

            <AnimatedBlock delay={1.0} className="w-80 h-16">
              <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="w-full h-full bg-card neon-border rounded flex items-center justify-center hover:bg-card/80 hover:soft-glow transition-all cursor-pointer">
                <Users size={24} className="text-purple-400 mr-3 neon-glow" />
                <span className="text-purple-400 font-bold tracking-wider neon-glow">DISCORD</span>
              </a>
            </AnimatedBlock>
          </div>
        </div>

        {/* Promo Video Section */}
        <AnimatedBlock delay={1.03} className="mb-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-accent neon-glow flex items-center justify-center gap-3">
            How I Turned $30 Into $2000+
            <TrendingUp size={40} className="text-primary neon-glow" />
          </h3>
        </AnimatedBlock>

        <AnimatedBlock delay={1.05} className="mb-16">
          <div className="w-full max-w-4xl mx-auto">
            <video 
              controls 
              className="w-full rounded-lg purple-border shadow-lg"
              preload="metadata"
            >
              <source src="/lovable-uploads/promo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </AnimatedBlock>

        {/* YouTube Video Section */}
        <AnimatedBlock delay={1.06} className="mb-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-accent neon-glow">
            How I Made $100 In 15 Minutes!
          </h3>
        </AnimatedBlock>

        <AnimatedBlock delay={1.07} className="mb-16">
          <div className="w-full max-w-6xl mx-auto px-4">
            <iframe 
              className="w-full aspect-video rounded-lg purple-border shadow-lg"
              src="https://www.youtube.com/embed/Ay6AYak6sXE?si=RBGsl6vnISYyUvOP&rel=0&modestbranding=1&hd=1"
              title="How I Made $100 In 15 Minutes!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </AnimatedBlock>

        {/* SUCCESS TESTIMONIALS SECTION - Optimized */}
        <AnimatedBlock delay={1.1} className="mb-8 text-center">
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-bold text-primary neon-glow mb-2">REAL RESULTS ALHAMDULILLAH</h3>
            <p className="text-xl text-secondary font-bold tracking-wider flex items-center justify-center gap-2">FROM REAL STUDENTS <Check size={20} className="text-green-400 neon-glow" /></p>
          </div>
        </AnimatedBlock>

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

        {/* Success Showcase Footer */}
        <AnimatedBlock delay={1.24} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {/* Success Showcase - Future Reviews */}
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
            <div className="w-72 h-48 opacity-0 md:block hidden"></div>
            <div className="w-72 h-48 opacity-0 md:block hidden"></div>
          </div>
        </AnimatedBlock>

        {/* Call to Action Button */}
        <AnimatedBlock delay={1.21} className="text-center mb-8 px-4">
          <Button asChild className="bg-accent hover:bg-accent/80 text-background font-bold text-sm md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-lg neon-glow w-full max-w-md">
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
              DON'T WAIT ANYMORE BOOK A FREE CALL HERE
            </a>
          </Button>
        </AnimatedBlock>

        {/* System Status */}
        <AnimatedBlock delay={1.22} className="text-center mb-8">
          <p className="text-muted-foreground font-mono text-sm tracking-wider">SYSTEM INITIALIZED • READY FOR LAUNCH SUBHANALLAH</p>
        </AnimatedBlock>

        {/* Results Stats */}
        <AnimatedBlock delay={1.23} className="mb-[500px] md:mb-96 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent neon-glow">$10,000+</div>
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