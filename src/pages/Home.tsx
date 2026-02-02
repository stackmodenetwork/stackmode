import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play, ChevronRight, Globe, BookOpen, Gift, BarChart3, Users, Rocket, Shield, Target, Code, Youtube, Sparkles } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { useState } from 'react';
import { MainHeader } from '@/components/MainHeader';
import { TradingBackground } from '@/components/TradingBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { BlueprintPromo } from '@/components/BlueprintPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { FloatingPhoneButton } from '@/components/FloatingPhoneButton';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';

const Home = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      
      {/* Dynamic Trading Background */}
      <TradingBackground />

      {/* Free Resources Banner */}
      <FreeResourcesCTA variant="banner" />

      {/* Floating Phone Button - Desktop Only */}
      <FloatingPhoneButton />

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-6 px-4 z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap size={16} className="text-primary" />
            </motion.div>
            <span className="text-primary text-sm font-semibold">Learn. Earn. Stack.</span>
          </motion.div>
          
          {/* Active Clients Indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 ml-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-muted-foreground text-sm">Clients in training</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Master <span className="text-primary">Trading</span> & Build Your <span className="text-accent">Business</span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Choose your path to financial freedom — Learn from a proven mentor with real results
          </motion.p>

          {/* Choose Your Path - Large Interactive Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6">
            {/* Trading Path */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link 
                to="/trading" 
                className="group relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] hover:scale-[1.02] block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <svg className="absolute bottom-0 left-0 w-full h-16 opacity-20">
                  <motion.path
                    d="M0,40 Q50,20 100,35 T200,25 T300,40 T400,20"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                  />
                </svg>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 border-2 border-primary/50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <TrendingUp size={32} className="text-primary sm:w-10 sm:h-10" />
                  </motion.div>

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
            </motion.div>

            {/* Business Path */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                to="/business" 
                className="group relative bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border-2 border-accent/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-[1.02] block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-around gap-1 opacity-20">
                  {[0.3, 0.5, 0.4, 0.7, 0.6, 0.9, 0.8].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-2 bg-accent rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height * 40}px` }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 border-2 border-accent/50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Briefcase size={32} className="text-accent sm:w-10 sm:h-10" />
                  </motion.div>

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
            </motion.div>
          </div>

          {/* Stackmode Network - Premium All-In-One Offer */}
          <motion.div
            className="mt-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-cyan-400/20 to-cyan-500/30 rounded-3xl blur-lg opacity-60" />
            
            <div className="relative bg-gradient-to-br from-background/95 via-background/90 to-cyan-950/30 border-2 border-cyan-500/40 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_70%)]" />
              </div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full px-4 py-1.5 mb-4"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-bold">ALL-IN-ONE MEMBERSHIP</span>
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Get <span className="text-cyan-400">Everything</span> For Just $50/Month
                  </h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Stop paying for courses separately. Get unlimited access to all trading tools, business training, AI resources, and live coaching.
                  </p>
                </div>

                {/* What's Included Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { icon: TrendingUp, label: "Trading Tools", desc: "StackFinder + More" },
                    { icon: Briefcase, label: "Business Training", desc: "Full Course Library" },
                    { icon: Sparkles, label: "AI Resources", desc: "Templates & Guides" },
                    { icon: Users, label: "Live Coaching", desc: "Weekly Sessions" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-3 text-center hover:border-cyan-400/40 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <item.icon size={20} className="text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-foreground">{item.label}</div>
                      <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.a
                    href="https://whop.com/stackmode-network-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-background font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users size={22} />
                    <span>Join Stackmode Network</span>
                    <ArrowRight size={20} />
                  </motion.a>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Only</span>
                    <span className="text-2xl font-bold text-cyan-400">$50</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center items-center gap-4 mt-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    Cancel Anytime
                  </span>
                  <span className="hidden sm:inline text-border">•</span>
                  <span>Always Updated</span>
                  <span className="hidden sm:inline text-border">•</span>
                  <span>Private Community</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Access to Free Resources */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <Link 
              to="/library" 
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Gift size={16} className="text-accent" />
              <span className="text-sm">Or start with free resources</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stack Finder Promo - Right after hero */}
      <section className="py-8 px-4 relative z-10 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <StackFinderPromo variant="home" />
        </div>
      </section>

      {/* Reviews Gallery - Social Proof */}
      <section className="py-10 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-6">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Real Results
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                What My Clients Are Achieving
              </h2>
              <p className="text-muted-foreground text-sm mt-1">Verified testimonials from real students</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ReviewsGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Trading Section Preview */}
      <section className="py-10 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Trading Education
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Learn to Trade the <span className="text-primary">Smart Way</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Master stocks, options, futures, forex, and crypto with proven strategies. Get access to the StackFinder trading tools and learn from live market analysis.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: BarChart3, text: "Technical Analysis" },
                    { icon: Target, text: "Entry & Exit Strategies" },
                    { icon: Shield, text: "Risk Management" },
                    { icon: Rocket, text: "Live Trading Calls" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <item.icon size={16} className="text-primary" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/trading"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  <span>Explore Trading</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Pixel Art Trading Image */}
              <div className="flex-1 w-full max-w-md">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated glow background */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-cyan-500/30 to-primary/40 rounded-3xl blur-xl opacity-60"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Main image container */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 bg-background/50 backdrop-blur-sm">
                    <OptimizedImage 
                      src="/images/trading-pixel-art.png" 
                      alt="Grow Your Trading Account"
                      className="w-full aspect-square"
                    />
                    
                    {/* Retro scan line effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                    
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs text-primary font-bold tracking-wider">STACK SMART • TRADE SMART</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📈 GROW YOUR ACCOUNT
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Business Section Preview */}
      <section className="py-10 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="right">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Business Education
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Build Your <span className="text-accent">Empire</span> with AI
                </h2>
                <p className="text-muted-foreground mb-6">
                  Learn to create AI-powered businesses, monetize on YouTube, and build multiple income streams. Turn your ideas into profitable ventures.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Youtube, text: "YouTube Monetization" },
                    { icon: Rocket, text: "AI Business Models" },
                    { icon: Globe, text: "Social Media Growth" },
                    { icon: Target, text: "Content Strategy" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <item.icon size={16} className="text-accent" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/business"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  <span>Explore Business</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Blueprint Image */}
              <div className="flex-1 w-full max-w-md">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated glow - purple for business */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-purple-500/40 via-accent/30 to-purple-500/40 rounded-3xl blur-xl opacity-60"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20 bg-background/50 backdrop-blur-sm">
                    <OptimizedImage 
                      src="/images/stackmode-blueprint.png" 
                      alt="The Stackmode Blueprint - Business Success Course"
                      className="w-full aspect-video"
                    />
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
                    
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs text-purple-400 font-bold tracking-wider">THE STACKMODE BLUEPRINT</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge - purple glow */}
                  <motion.a
                    href="https://whop.com/stackmode-network-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-3 -right-3 bg-purple-500 hover:bg-purple-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-purple-500/50 cursor-pointer transition-colors"
                    animate={{ y: [0, -5, 0], boxShadow: ['0 0 10px rgba(168,85,247,0.5)', '0 0 20px rgba(168,85,247,0.8)', '0 0 10px rgba(168,85,247,0.5)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📚 GET THE BLUEPRINT
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Website Building Section */}
      <section className="py-10 px-4 relative z-10 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Professional Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Need a <span className="text-cyan-400">Website</span>?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get a professional, high-converting website built for your business. Or learn to build it yourself with our DIY training inside the Stackmode Network.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Code, text: "Custom Development" },
                    { icon: Globe, text: "Mobile Responsive" },
                    { icon: Target, text: "SEO Optimized" },
                    { icon: Rocket, text: "Fast Loading" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <item.icon size={16} className="text-cyan-400" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/buildyourwebsite"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-background font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                  >
                    <span>Get a Website</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a 
                    href="https://whop.com/stackmode-network-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-400 font-semibold px-6 py-3 rounded-xl transition-all hover:bg-cyan-500/10"
                  >
                    <span>DIY Training</span>
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full max-w-md">
                <motion.div 
                  className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <OptimizedImage 
                    src="/images/stackfinder/stackmode-5.png" 
                    alt="Website Development"
                    className="w-full aspect-video"
                  />
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Introduction */}
      <section className="py-10 px-4 border-t border-border/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Meet Your Mentor
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Turn Business Profits Into Trading <span className="text-primary">Income</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Watch how I can help you stack both</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} scale={0.95}>
            <motion.div 
              className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {!videoPlaying ? (
                <button onClick={() => setVideoPlaying(true)} className="relative w-full aspect-video group cursor-pointer" aria-label="Play video">
                  <img src="https://img.youtube.com/vi/beRKDGUDcdU/maxresdefault.jpg" alt="Meet Your Mentor" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
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
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Library Preview */}
      <section className="py-10 px-4 bg-muted/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Free Resources
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Start Learning for Free
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8">
              Access free trading strategies, business guides, and educational content in our resource library
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" staggerDelay={0.08}>
            {[
              { icon: TrendingUp, title: 'Trading Guides', desc: 'Free strategies', color: 'primary' },
              { icon: Briefcase, title: 'Business Tips', desc: 'Growth tactics', color: 'accent' },
              { icon: BookOpen, title: 'eBooks', desc: 'Deep dives', color: 'amber-500' },
              { icon: Youtube, title: 'Video Lessons', desc: 'Visual learning', color: 'red-500' }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-background rounded-xl p-4 border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className={`w-5 h-5 text-${item.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <Link 
              to="/library" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:shadow-lg"
            >
              <Gift size={18} />
              <span>Browse Full Library</span>
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Books Credibility Section */}
      <BooksCredibilityPromo variant="compact" showHeading={true} />

      {/* About Preview */}
      <section className="py-10 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <motion.img 
                src="/images/stackmodechris-about-new.png" 
                alt="Stackmodechris" 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-primary/30"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Stackmodechris</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Trading mentor & business strategist helping people build wealth through multiple income streams.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  <span>Learn more about me</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 px-4 relative z-10">
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
    </main>
  );
};

export default Home;
