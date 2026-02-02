import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { LazyCalendly } from '@/components/LazyCalendly';
import { OptimizedVideo } from '@/components/OptimizedVideo';
import { CookieConsent } from '@/components/CookieConsent';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { MainHeader } from '@/components/MainHeader';
import { Briefcase, Check, Users, TrendingUp, HelpCircle, Calendar, BookOpen, PlayCircle, Zap, Youtube, ArrowRight, Target, Shield, BarChart3, Sparkles, Activity } from 'lucide-react';
import { ConnectWithMe } from '@/components/ConnectWithMe';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TradingBackground } from '@/components/TradingBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { motion } from 'framer-motion';

const Index = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  // Optimized scroll handler with passive listener
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden scroll-smooth">
      <MainHeader />
      
      {/* Dynamic Trading Background */}
      <TradingBackground />

      {/* Free Resources Banner */}
      <FreeResourcesCTA variant="banner" />

      {/* Sticky Mobile Header CTA */}
      <div className={`fixed top-16 left-0 right-0 z-35 md:hidden transition-all duration-300 pointer-events-none ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-lg border-b border-primary/20 shadow-lg pointer-events-auto">
          <div className="px-4 py-2.5 flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground/80">Ready to profit?</span>
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-background font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md shadow-accent/20 flex-shrink-0">
              Book FREE Call →
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stackmode Network Button */}
      <a
        href="https://whop.com/stackmode-network-llc"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group transition-all duration-500 ${showStickyHeader ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
          
          {/* Button */}
          <div className="relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-background font-bold px-5 py-3 rounded-full shadow-xl shadow-cyan-500/30 transition-all group-hover:scale-105 group-hover:shadow-cyan-500/50">
            <Users size={18} />
            <span className="text-sm whitespace-nowrap">Join The Network</span>
          </div>
          
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full" />
        </div>
      </a>

      {/* Main Content - VSL Funnel Structure */}
      <section id="home" className="relative z-10 min-h-screen px-4 py-6 sm:py-8">

        {/* Headline - Above the Fold */}
        <header id="intro" className="text-center mb-6 sm:mb-8 max-w-5xl mx-auto">
          {/* Live Activity Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary text-sm font-semibold">Traders Currently in Training</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn How To Trade <motion.span 
              className="text-primary inline-block"
              animate={{ 
                textShadow: [
                  '0 0 0px hsl(var(--primary))',
                  '0 0 20px hsl(var(--primary))',
                  '0 0 0px hsl(var(--primary))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >Profitably</motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Watch how I mentor traders to consistent profits, then book your free strategy call to get started. Inshallah
          </motion.p>
          
          <motion.div 
            className="relative w-full max-w-xl mx-auto mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Subtle glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-2xl blur-xl opacity-60" />
            
            {/* Video container with clean border */}
            <div className="relative bg-background rounded-xl overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/10">
              <OptimizedVideo mobileSrc="/videos/mentor-intro-mobile.mp4" desktopSrc="/videos/mentor-intro.mp4" poster="/images/video-thumbnail.png" className="w-full h-auto" />
            </div>
          </motion.div>
          
          {/* Value Props */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
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
          </motion.div>
        </header>

        {/* Main CTAs - Optimized for Conversions */}
        <section id="mentorship" className="max-w-6xl mx-auto mb-8 sm:mb-12 scroll-mt-20">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Choose How You Want to Learn</h2>
          </div>
          
          {/* Mobile: Stacked with clear hierarchy. Desktop: Side by side */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Primary CTA: Free Mentorship - Lower barrier to entry */}
            <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" aria-label="Book Free Trading Mentorship Session" className="block group h-full order-1">
              <article className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-5 sm:p-6 md:p-8 pt-8 sm:pt-10 overflow-visible transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)] group-hover:scale-[1.02]">
                {/* FREE Badge */}
                <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                  <div className="bg-accent text-background text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                    Free Strategy Call
                  </div>
                </div>
                
                {/* Subtle background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Briefcase size={24} className="text-accent" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">1-on-1 Mentorship</h3>
                  </div>
                  
                  {/* Pricing - prominent */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-foreground font-bold text-2xl sm:text-3xl">The First Call is FREE</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-center text-sm sm:text-base">Get a personalized trading strategy built for your goals</p>
                  
                  {/* Benefits list */}
                  <div className="flex flex-col gap-2 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>Custom strategy based on your goals</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>Direct access to ask me anything</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>No commitment, no pressure</span>
                    </div>
                  </div>
                  
                  <div className="bg-accent hover:bg-accent/90 text-background font-semibold text-base sm:text-lg px-6 py-4 rounded-lg text-center transition-colors">
                    Book Your Free Call →
                  </div>
                  
                  {/* Urgency */}
                  <div className="mt-4 flex justify-center">
                    <p className="text-xs text-muted-foreground">Limited availability — book your spot today</p>
                  </div>
                </div>
              </article>
            </a>

            {/* Secondary CTA: Stackmode Network - Full Access */}
            <a href="https://whop.com/stackmode-network-llc" target="_blank" rel="noopener noreferrer" aria-label="Join Stackmode Network" className="block group h-full order-2">
              <article className="relative h-full bg-gradient-to-br from-cyan-500/10 via-card/80 to-cyan-400/10 border-2 border-cyan-500/50 rounded-2xl p-5 sm:p-6 md:p-8 pt-8 sm:pt-10 overflow-visible transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] group-hover:scale-[1.02]">
                {/* Best Value Badge */}
                <motion.div 
                  className="absolute top-0 right-4 -translate-y-1/2 z-20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-background text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-lg shadow-cyan-500/30 whitespace-nowrap">
                    BEST VALUE
                  </div>
                </motion.div>
                
                {/* Animated background accents */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Users size={24} className="text-cyan-400" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">Stackmode Network</h3>
                  </div>
                  
                  {/* Pricing - prominent */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-muted-foreground line-through text-lg">$100/mo</span>
                    <span className="text-foreground font-bold text-2xl sm:text-3xl">$50/mo</span>
                    <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full border border-cyan-400/30">50% OFF</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-center text-sm sm:text-base">Full access to trading tools, signals & education</p>
                  
                  {/* Benefits list */}
                  <div className="flex flex-col gap-2 mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>The Stackfinder AI Trading Tools</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>Real-time trade alerts & signals</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>$1000+ worth of trading courses</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-md opacity-30" />
                    <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-background font-semibold text-base sm:text-lg px-6 py-4 rounded-lg text-center transition-all flex items-center justify-center gap-2">
                      <span>Join Stackmode Network</span>
                      <ArrowRight size={18} />
                    </div>
                  </motion.div>
                  
                  {/* Trust signal */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check size={14} className="text-cyan-400" />
                      <span>Cancel anytime • Instant access</span>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          </div>
          
          {/* Courses & Books Section */}
          <div className="mt-10">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Prefer Self-Paced Learning?</h3>
              <p className="text-sm text-muted-foreground">Master trading on your own schedule with our courses and eBooks</p>
            </div>
            
            <Link to="/library" className="block group">
              <div className="relative bg-gradient-to-r from-orange-950/60 via-card to-orange-950/60 border border-orange-500/20 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group-hover:scale-[1.01]">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
                  {/* Cards Preview */}
                  <div className="flex items-center gap-3">
                    {/* Video Course Card */}
                    <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-orange-600/20 to-orange-900/30 rounded-xl border border-orange-500/30 flex flex-col items-center justify-center gap-2 shadow-lg">
                      <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                      <span className="text-[10px] sm:text-xs text-orange-300 font-medium">Courses</span>
                    </div>
                    
                    {/* Book Card */}
                    <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-br from-orange-600/20 to-orange-900/30 rounded-xl border border-orange-500/30 flex flex-col items-center justify-center gap-2 shadow-lg -ml-2 transform rotate-3">
                      <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                      <span className="text-[10px] sm:text-xs text-orange-300 font-medium">eBooks</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1 flex items-center justify-center sm:justify-start gap-2">
                      <span>Courses & Books</span>
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">Popular</span>
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3">Learn proven strategies at your own pace with video courses and comprehensive trading guides</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs sm:text-sm text-foreground/70">
                      <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Instant Access</span>
                      <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Lifetime Updates</span>
                      <span className="flex items-center gap-1"><Check size={14} className="text-orange-400" /> Beginner Friendly</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-lg text-center transition-all flex items-center gap-2 group-hover:gap-3 shadow-lg shadow-orange-500/20">
                      <span>Browse Library</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* StackFinder AI Tool Section */}
        <section className="max-w-5xl mx-auto mb-12 px-4">
          <StackFinderPromo variant="trading" />
        </section>

        {/* Stackmode Network Group - Stack Scanner Benefits */}
        <section className="max-w-5xl mx-auto mb-12 px-4">
          <ScrollReveal>
            <StackmodeGroupPromo variant="trading" />
          </ScrollReveal>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto my-8 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* Trust indicator */}
        <div className="mb-8 text-center">
          <p className="text-xs text-muted-foreground">Not sure which is right for you? <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Book a free call</a> and I'll help you decide.</p>
        </div>

        {/* SOCIAL PROOF - Real Results */}
        <section id="results" className="mb-8 sm:mb-12 text-center max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Proven Results from Real Traders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">See what our community has achieved, Alhamdulillah</p>
        </section>

        {/* Featured Testimonial */}
        <AnimatedBlock delay={1.14} className="mb-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-card via-card/80 to-card border-2 border-accent/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-accent/20 mx-0 mr-[100px]">!</div>
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-foreground/90 italic mb-4 leading-relaxed">"Everything you've taught me is literally bread and butter bro"</p>
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
        <AnimatedBlock delay={1.15} className="mb-12">
          <ReviewsGallery />
        </AnimatedBlock>

        {/* Calendly Inline Widget - After Reviews */}
        <AnimatedBlock delay={1.16} className="mb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Schedule Your Free Strategy Call
              </h2>
              <p className="text-muted-foreground">Pick a time that works for you</p>
            </div>
            <div className="relative">
              <LazyCalendly url="https://calendly.com/stackmodechris/tradingmastermindcoaching?background_color=0a0b0d&text_color=ffffff&primary_color=d200ff" height={650} />
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


        {/* Video 1 - How I Made $100 in 15 Minutes */}
        <AnimatedBlock delay={1.3} className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">Watch: $100 Profit in 15 Minutes</h3>
            <div className="relative w-full" style={{
            paddingBottom: '56.25%'
          }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-accent/50" src="https://www.youtube.com/embed/Ay6AYak6sXE" title="How I Made $100 in 15 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Frequently Asked Questions
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
                  <strong className="text-foreground">Trade Signals ($50/month):</strong> You receive my exact trade entries, stop losses, and take profits in real-time. Great for copying my trades while you learn.<br /><br />
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

        {/* About Section */}
        <AnimatedBlock delay={1.35} className="mb-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-primary/30 rounded-2xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-lg shadow-primary/20">
                    <img src="/images/stackmodechris-about-new.png" alt="Stackmodechris - Trading Mentor" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                
                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <Link to="/about" className="group">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      About Stackmodechris
                    </h2>
                  </Link>
                  <p className="text-primary font-medium mb-4">Trading Mentor & Founder of Stackmode Network</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Christopher Robinson, known online as Stackmodechris, is a passionate trader and mentor dedicated to helping everyday people achieve financial freedom through the markets. With expertise spanning stocks, options, futures, forex, and crypto, Stackmodechris has built a thriving community of traders who learn to read price action and execute high-probability setups. Through proven strategies and hands-on mentorship, Stackmodechris has helped clients generate thousands of dollars in profits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond trading, Stackmodechris is an IT specialist and content creator who shares his journey through his podcast, YouTube channel, and social media. His mission is simple: teach real trading skills that work, without the hype or empty promises.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors" href="https://calendly.com/stackmodechris/tradingmastermindcoaching">
                      <Calendar className="w-4 h-4" />
                      Speak With Me For FREE
                    </a>
                    <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      <Youtube size={16} />
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Books Credibility Section */}
        <BooksCredibilityPromo variant="compact" showHeading={true} className="mb-12" />

        <AnimatedBlock delay={1.4} className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-6">Learn Real Trading With Stackmodechris — Book A FREE Mentorship Call, Catch My Trades Live, And Master Proven Strategies To Stack Wins.</p>
            <SocialShareButtons className="justify-center" />
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
        <ConnectWithMe showBlessing={true} />

        {/* Bottom Navigation - Shop Section */}
        <div className="max-w-4xl mx-auto mt-8 mb-8">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6">Ready to Level Up?</h3>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Trading Mentorship
              </a>
              <a href="https://whop.com/stackmode-network-llc" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Catch My Trades
              </a>
              <Link to="/library" className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Courses & Books
              </Link>
              <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Podcast
              </a>
              <a href="/about" className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                About
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-8 md:h-12"></div>
        
      </section>

      {/* Footer with Terms */}
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
          
          {/* Earnings Disclaimer */}
          <div className="border border-border rounded-lg p-4 bg-muted/20">
            <h4 className="text-xs text-muted-foreground mb-2">Earnings Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. 
              The information provided on this website is for educational and informational purposes only and should not be construed as financial advice. 
              We make no guarantees regarding income, earnings, or financial success. Individual results will vary, and there is no assurance that you will 
              achieve similar results. You are solely responsible for your own trading decisions. By using our services, you acknowledge that you understand 
              these risks and accept full responsibility for any losses incurred.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Information shared here is for educational purposes only. Your results may vary. We do not guarantee success or make earnings claims.
          </p>
          
          <p className="text-xs text-muted-foreground">
            © 2026 Stackmode Network LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
      
      {/* Spacer for mobile bottom navigation - ensures no content hidden behind nav */}
      <div className="h-28 md:hidden" />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </main>
  );
};
export default Index;