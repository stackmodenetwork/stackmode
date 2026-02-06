import { Link } from 'react-router-dom';
import { Code, Briefcase, ArrowRight, Zap, ChevronRight, Terminal, Rocket, Users, Check, Bot, Globe, Sparkles, TrendingUp, BookOpen, BarChart3, Target, Youtube, Cpu, Brain, Layers, Award, DollarSign, Calendar } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { ConnectWithMe } from '@/components/ConnectWithMe';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { EmployeeVsStackmodeComparison } from '@/components/EmployeeVsStackmodeComparison';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { SoftwareProofSection } from '@/components/SoftwareProofSection';
import { motion } from 'framer-motion';
const techStack = [{
  name: 'Python',
  icon: '🐍'
}, {
  name: 'Lovable',
  icon: '💜'
}, {
  name: 'Cursor AI',
  icon: '⚡'
}, {
  name: 'Claude AI',
  icon: '🤖'
}, {
  name: 'Bolt.new',
  icon: '⚡'
}, {
  name: 'Replit',
  icon: '💻'
}, {
  name: 'v0.dev',
  icon: '▲'
}, {
  name: 'Windsurf',
  icon: '🌊'
}];
const Home = () => {
  return <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      <FreeResourcesCTA variant="banner" />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Floating Orbs - CSS only for better performance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-[10%] w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center px-5 sm:px-4 pt-6 sm:pt-10 pb-4 sm:pb-6">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          

          {/* Main Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-[1.05] tracking-tight">  Code. Build. Invest.<span className="text-cyan-400">Build.</span> <span className="text-emerald-400">Invest.</span>
          </motion.h1>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-xs sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
            <span className="block mb-1">
              Learn how to use <span className="text-foreground font-medium">AI to code and build software</span>,
            </span>
            <span className="block mb-1">
              Promote your <span className="text-cyan-400 font-medium">business with content monetization</span>,
            </span>
            <span className="block">
              Then invest that income into <span className="text-emerald-400 font-medium">stocks, crypto & real estate</span>.
            </span>
            
          </motion.div>

          {/* Primary CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="flex flex-col items-center gap-3 mt-2">
             <p className="text-sm font-bold text-center">Stop paying <span className="text-destructive line-through">$5,000</span> <span className="text-foreground">for outdated courses</span></p>
             
             <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-xs sm:text-lg px-4 sm:px-10 py-2.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] max-w-[280px] sm:max-w-none mx-auto w-full sm:w-auto">
               <Zap size={18} className="sm:w-[22px] sm:h-[22px] flex-shrink-0" />
               <span>Join The Stackmode Academy — $50/mo</span>
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>

             <p className="text-muted-foreground text-xs sm:text-sm text-center max-w-[300px] sm:max-w-none mx-auto">
               Not sure where to start? Talk to us for free.
             </p>

             <a href="https://calendly.com/stackmodechris/architecture" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold text-xs sm:text-lg px-4 sm:px-10 py-2.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:scale-[1.02] max-w-[280px] sm:max-w-none mx-auto w-full sm:w-auto">
               <Calendar size={18} className="sm:w-[22px] sm:h-[22px] flex-shrink-0" />
               <span>Start Stacking Wins — Free Call</span>
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="text-cyan-400/80 text-xs font-mono">24/7 Support</span>
            <span className="text-cyan-400/50">•</span>
            <motion.span className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5" animate={{
            opacity: [1, 0.6, 1]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }}>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
              Clients In Training
            </motion.span>
          </div>

        </div>
      </section>

      {/* ==================== REVIEWS CAROUSEL ==================== */}
      <section className="py-4 sm:py-6 px-4">
        <ReviewsBackgroundCarousel />
      </section>

      {/* ==================== EMPLOYEE VS STACKMODE COMPARISON ==================== */}
      <EmployeeVsStackmodeComparison />

      {/* ==================== CODING SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-4 max-w-2xl mx-auto">
              <span className="text-cyan-400 font-semibold">Build real software with AI</span> — no CS degree needed. Ship SaaS products that generate revenue.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-cyan-500/10 via-card/80 to-cyan-400/5 border-2 border-cyan-500/30 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl" />
              
              <div className="flex justify-center mb-4">
                <motion.div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full px-4 py-1.5" animate={{
                scale: [1, 1.02, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }}>
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="text-cyan-400 text-xs font-bold">CODING SCHOOL</span>
                </motion.div>
              </div>

              <div className="relative z-10 text-center">
                  <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                    Learn to Build <span className="text-cyan-400">Real Software</span>
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base max-w-2xl mx-auto">
                    Stop consuming tutorials. Start building SaaS products with AI-powered tools. 
                    No CS degree required — just the will to create.
                  </p>

                  <div className="inline-flex flex-col gap-2 mb-5 text-left">
                    {['AI-Powered Development with Cursor & Lovable', 'Build Healthcare, B2B, and Consumer SaaS', 'From Zero to Deployed Product', 'Live Coaching & Community Support'].map((feature, i) => <motion.div key={feature} className="flex items-center gap-2" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }}>
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Check size={10} className="text-cyan-400" />
                        </div>
                        <span className="text-foreground/90 text-xs sm:text-sm">{feature}</span>
                      </motion.div>)}
                  </div>

                {/* Tech Stack Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 max-w-lg mx-auto">
                  {techStack.map((tech, i) => <motion.div key={tech.name} className="bg-background/60 border border-cyan-500/20 rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:border-cyan-400/50 transition-colors" initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.05
                }} whileHover={{
                  scale: 1.02
                }}>
                      <span className="text-base">{tech.icon}</span>
                      <span className="text-xs font-medium text-foreground">{tech.name}</span>
                    </motion.div>)}
                </div>

                <Link to="/coding" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-5 py-2.5 rounded-xl transition-all text-sm">
                  <Rocket size={16} />
                  <span>Explore Curriculum</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SOFTWARE PROOF SECTION ==================== */}
      <SoftwareProofSection variant="home" />

      {/* ==================== BUSINESS SERVICES SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-4 max-w-2xl mx-auto">
              <span className="text-violet-400 font-semibold">Grow and monetize your brand</span> — done-for-you services or learn to do it yourself inside the Academy.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-violet-500/10 via-card/80 to-violet-400/5 border-2 border-violet-500/30 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-violet-400 hover:shadow-[0_0_60px_rgba(139,92,246,0.2)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
              
              <div className="flex justify-center mb-4">
                <motion.div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/40 rounded-full px-4 py-1.5" animate={{
                scale: [1, 1.02, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5
              }}>
                  <Globe size={14} className="text-violet-400" />
                  <span className="text-violet-400 text-xs font-bold">BUSINESS SERVICES</span>
                </motion.div>
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                  Scale Your <span className="text-violet-400">Business</span>
                </h2>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base max-w-2xl mx-auto">
                  Whether you need a done-for-you website or want to learn to build yourself — we've got you covered.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5 max-w-md mx-auto">
                  <div className="bg-background/50 border border-violet-500/20 rounded-xl p-3 text-center">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center mb-2 mx-auto">
                      <Briefcase size={16} className="text-violet-400" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">Done-For-You</h4>
                    <p className="text-xs text-muted-foreground">Professional websites, ads, and scaling services</p>
                  </div>
                  <div className="bg-background/50 border border-violet-500/20 rounded-xl p-3 text-center">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center mb-2 mx-auto">
                      <Brain size={16} className="text-violet-400" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">DIY Training</h4>
                    <p className="text-xs text-muted-foreground">Learn AI business models inside the Academy</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 max-w-lg mx-auto">
                  {[{
                  value: '3',
                  label: 'Published Books',
                  icon: BookOpen
                }, {
                  value: '24/7',
                  label: 'Community Access',
                  icon: Users
                }, {
                  value: '48hr',
                  label: 'Avg Delivery',
                  icon: Zap
                }, {
                  value: '5★',
                  label: 'Client Rating',
                  icon: Award
                }].map((stat, i) => <motion.div key={stat.label} className="bg-background/50 border border-violet-500/20 rounded-xl p-3 text-center" initial={{
                  opacity: 0,
                  scale: 0.9
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }}>
                      <stat.icon size={18} className="text-violet-400 mx-auto mb-1" />
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                    </motion.div>)}
                </div>

                <Link to="/business" className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-background font-bold px-5 py-2.5 rounded-xl transition-all text-sm">
                  <Globe size={16} />
                  <span>View Business Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== INVESTING SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-4 max-w-2xl mx-auto">
              <span className="text-emerald-400 font-semibold">Put your money to work</span> — smart swing investing in stocks, crypto & real estate. No day trading.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-emerald-500/10 via-card/80 to-emerald-400/5 border-2 border-emerald-500/30 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-emerald-400 hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] transition-all duration-500">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div className="flex justify-center mb-4">
                <motion.div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-4 py-1.5" animate={{
                scale: [1, 1.02, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}>
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">INVESTING EDUCATION</span>
                </motion.div>
              </div>

              <div className="relative z-10 text-center">
                  <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                    Smart <span className="text-emerald-400">Swing Investing</span>
                  </h2>
                  <p className="text-muted-foreground mb-3 text-sm sm:text-base max-w-2xl mx-auto">
                    We don't teach day trading. We focus on high-quality swing positions that let you 
                    build wealth without staring at screens all day.
                  </p>
                  <p className="text-xs text-emerald-400/80 mb-4 italic max-w-md mx-auto">
                    "Position for days to weeks, not minutes. Less stress, more profits."
                  </p>

                  <div className="inline-flex flex-col gap-2 mb-5 text-left">
                    {['AI StackFinder for High-Probability Entries', 'Swing Positions (Days to Weeks)', 'Weekly Live Investing Calls', 'Stocks, Options & Crypto'].map((feature, i) => <motion.div key={feature} className="flex items-center gap-2" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }}>
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check size={10} className="text-emerald-400" />
                        </div>
                        <span className="text-foreground/90 text-xs sm:text-sm">{feature}</span>
                      </motion.div>)}
                  </div>

                  {/* Swing Wins */}
                  <div className="max-w-sm mx-auto mb-5">
                    <div className="bg-background/60 border border-emerald-500/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-muted-foreground">Recent Swing Wins</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">SWING</span>
                      </div>
                      <div className="space-y-2">
                        {[{
                      symbol: 'NVDA',
                      gain: '+127%',
                      time: '12 days'
                    }, {
                      symbol: 'TSLA',
                      gain: '+89%',
                      time: '8 days'
                    }, {
                      symbol: 'SPY',
                      gain: '+45%',
                      time: '5 days'
                    }].map((trade, i) => <motion.div key={trade.symbol} className="flex items-center justify-between bg-emerald-500/10 rounded-lg px-3 py-2" initial={{
                      opacity: 0,
                      x: 20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: i * 0.15
                    }}>
                            <span className="font-bold text-foreground text-sm">{trade.symbol}</span>
                            <span className="text-emerald-400 font-bold text-sm">{trade.gain}</span>
                            <span className="text-[10px] text-muted-foreground">{trade.time}</span>
                          </motion.div>)}
                      </div>
                      <p className="text-[10px] text-muted-foreground/60 mt-2 text-center">
                        Results vary. Past performance ≠ future results.
                      </p>
                    </div>
                  </div>

                  <Link to="/investing" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-5 py-2.5 rounded-xl transition-all text-sm">
                    <BarChart3 size={16} />
                    <span>Explore Investing</span>
                    <ArrowRight size={16} />
                  </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== ULTIMATE ACADEMY SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-gradient-to-br from-cyan-500/10 via-card/80 to-violet-500/10 border-2 border-cyan-500/30 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <motion.div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full px-4 py-1.5 mb-4" animate={{
                  scale: [1, 1.03, 1]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }}>
                    <Sparkles size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-bold">THE ULTIMATE EDUCATION PLATFORM</span>
                  </motion.div>

                  <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                    One Academy. <span className="text-cyan-400">Every Skill</span> You Need.
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base max-w-2xl mx-auto">
                    Coding. AI business. Investing. Real estate. Branding. Animations. 
                    Most people pay thousands across 10 different courses. You get it all — mentorship included — for the price of a dinner.
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-5 max-w-xl mx-auto">
                    {[{
                    emoji: '💻',
                    label: 'Build Software'
                  }, {
                    emoji: '📈',
                    label: 'Swing Investing'
                  }, {
                    emoji: '🏠',
                    label: 'Real Estate'
                  }, {
                    emoji: '🎬',
                    label: 'AI Animations'
                  }, {
                    emoji: '🚀',
                    label: 'Scale Business'
                  }, {
                    emoji: '🤖',
                    label: 'AI Mastery'
                  }].map(item => <div key={item.label} className="bg-background/50 border border-border/50 rounded-lg p-2 text-center group-hover:border-cyan-500/30 transition-colors">
                        <span className="text-base block mb-0.5">{item.emoji}</span>
                        <span className="text-[10px] font-medium text-foreground">{item.label}</span>
                      </div>)}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-background font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                    <Zap size={18} />
                    <span>Join The Stackmode Academy — $50/mo</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">
                    Cancel anytime · Instant access to everything
                  </p>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== LIBRARY SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm sm:text-base mb-4 max-w-2xl mx-auto">
              <span className="text-orange-400 font-semibold">Not ready to commit?</span> — start with free guides, books, and video tutorials. Zero risk.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-orange-500/10 via-card/80 to-orange-400/5 border-2 border-orange-500/30 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-orange-400 hover:shadow-[0_0_60px_rgba(249,115,22,0.2)] transition-all duration-500">
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              
              <motion.div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-4" animate={{
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1.5
            }}>
                <BookOpen size={14} className="text-orange-400" />
                <span className="text-orange-400 text-xs font-bold">FREE LIBRARY</span>
              </motion.div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                  Free Resources to <span className="text-orange-400">Get Started</span>
                </h2>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Access free investing strategies, business guides, books, and educational content. No signup required.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {['Investing Guides', 'Business Templates', 'Free Books', 'Video Tutorials', 'Cheat Sheets'].map(resource => <span key={resource} className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-2.5 py-1 rounded-full">
                      {resource}
                    </span>)}
                </div>

                <Link to="/library" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-background font-bold px-5 py-2.5 rounded-xl transition-all text-sm">
                  <BookOpen size={16} />
                  <span>Browse Free Resources</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== NETWORK CTA SECTION ==================== */}
      <section className="py-6 sm:py-10 px-5 sm:px-4 bg-gradient-to-b from-background to-cyan-500/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative bg-gradient-to-br from-cyan-500/10 via-card to-violet-500/10 border-2 border-cyan-500/40 rounded-2xl p-5 sm:p-8 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(6,182,212,0.25)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 text-center">
                  <motion.span className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-400 text-background text-xs font-bold px-4 py-1 rounded-full mb-4" animate={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    75% OFF — JOIN NOW
                  </motion.span>
                  
                  <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                    Everything for <span className="text-cyan-400">$50/month</span>
                  </h2>
                  <p className="text-muted-foreground mb-5 text-sm sm:text-base max-w-xl mx-auto">
                    Coding school. Business training. Investing tools. AI resources. Live coaching. Community access. All in one membership.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-5">
                    {[{
                    icon: Terminal,
                    label: 'Coding',
                    desc: 'Full curriculum'
                  }, {
                    icon: Globe,
                    label: 'Business',
                    desc: 'AI models'
                  }, {
                    icon: BarChart3,
                    label: 'Investing',
                    desc: 'Tools & signals'
                  }, {
                    icon: Users,
                    label: 'Community',
                    desc: 'Live support'
                  }].map(item => <div key={item.label} className="bg-background/50 border border-border/50 rounded-xl p-2.5 text-center">
                        <item.icon size={20} className="text-cyan-400 mx-auto mb-1" />
                        <div className="text-xs font-semibold text-foreground">{item.label}</div>
                        <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                      </div>)}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-background font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                    <Zap size={20} />
                    <span>Join The Stackmode Academy</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== ABOUT / CONNECT SECTION ==================== */}
      <section className="py-8 sm:py-12 px-5 sm:px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-3">
                Meet Your Mentor
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                I'm Christopher Robinson — Stackmodechris. I left a 4-year finance career to build this network and help others unlink time from money.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/40 flex-shrink-0">
                <OptimizedImage src="/images/stackmodechris-about-new.png" alt="Christopher Robinson - Stackmodechris" className="w-full h-full" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-1">Christopher Robinson</h3>
                <p className="text-primary font-medium mb-2 text-sm">aka Stackmodechris</p>
                <p className="text-muted-foreground max-w-xl text-sm">
                  Founder of Stackmode Academy | AI Business & Trading Mentor. My mission: show people that financial freedom isn't about climbing a corporate ladder — it's about building systems that work for you.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ConnectWithMe showBlessing={true} />
        </div>
      </section>

      {/* ==================== UNIVERSAL PAGE BOTTOM ==================== */}
      <UniversalPageBottom />

      {/* ==================== TRUSTPILOT SECTION ==================== */}
      <section className="py-6 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <TrustpilotWidget />
        </div>
      </section>

      <MainFooter />
      <CookieConsent />
    </main>;
};
export default Home;