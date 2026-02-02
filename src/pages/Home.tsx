import { Link } from 'react-router-dom';
import { TrendingUp, Briefcase, ArrowRight, Zap, Play, Phone, ChevronRight, Award, Users, Globe, Youtube, BookOpen, Gift } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { useState } from 'react';
import { MainHeader } from '@/components/MainHeader';
import { TradingBackground } from '@/components/TradingBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { motion } from 'framer-motion';
const Home = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      
      {/* Dynamic Trading Background */}
      <TradingBackground />

      {/* Phone Call CTA Banner */}
      <motion.div 
        className="bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border-y border-primary/30 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-8 px-4 z-10">
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
            Master <motion.span 
              className="text-primary inline-block"
              animate={{ 
                textShadow: [
                  '0 0 0px hsl(var(--primary))',
                  '0 0 20px hsl(var(--primary))',
                  '0 0 0px hsl(var(--primary))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >Trading</motion.span> & Build Your <motion.span 
              className="text-accent inline-block"
              animate={{ 
                textShadow: [
                  '0 0 0px hsl(var(--accent))',
                  '0 0 20px hsl(var(--accent))',
                  '0 0 0px hsl(var(--accent))'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >Business</motion.span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Choose your path to financial freedom
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
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated chart line */}
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
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated growth bars */}
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

          {/* Free Resources Button - Prominent in Hero */}
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link 
              to="/library" 
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border-2 border-accent/50 rounded-2xl px-6 sm:px-8 py-4 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02]"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ width: '200%' }}
              />
              <div className="relative z-10 flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 border border-accent/50 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Gift size={20} className="text-accent sm:w-6 sm:h-6" />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">Free Resources & Courses</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Start learning today — no cost</p>
                </div>
                <ChevronRight size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stackmode Network Group Promo */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <StackmodeGroupPromo variant="home" />
        </div>
      </section>

      {/* Stack Finder AI Tool Promo */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <StackFinderPromo variant="home" />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-10 px-4 border-t border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-6">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Real Results
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                What My Clients Are Achieving
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ReviewsGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-12 px-4 bg-muted/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">
                What I Offer
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Areas of Expertise
              </h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
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
              <StaggerItem key={i}>
                <Link 
                  to={item.link}
                  className="bg-background rounded-xl p-4 border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group block h-full"
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-3`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color}`} />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Library Button */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 text-center">
              <Link 
                to="/library" 
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/40 rounded-2xl px-8 py-4 overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02]"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ width: '200%' }}
                />
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BookOpen size={20} className="text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-foreground">Free Resources & Courses</h3>
                    <p className="text-sm text-muted-foreground">Browse the full library</p>
                  </div>
                  <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-4 bg-card/30 border-y border-border/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
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
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 30px rgba(var(--primary-rgb),0.6)',
                          '0 0 50px rgba(var(--primary-rgb),0.8)',
                          '0 0 30px rgba(var(--primary-rgb),0.6)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
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

      {/* Books Credibility Section */}
      <BooksCredibilityPromo variant="compact" showHeading={true} />

      {/* About Preview */}
      <section className="py-12 px-4 relative z-10">
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
                  <span>Learn more</span>
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
