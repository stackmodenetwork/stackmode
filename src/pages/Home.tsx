import { Link } from 'react-router-dom';
import { Code, Briefcase, ArrowRight, Zap, ChevronRight, Terminal, Rocket, Users, Check, Bot, Globe, Sparkles, TrendingUp, BookOpen, BarChart3, Target, Youtube, Cpu, Brain, Layers, Award, DollarSign } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { ConnectWithMe } from '@/components/ConnectWithMe';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import { OptimizedImage } from '@/components/OptimizedImage';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'Lovable', icon: '💜' },
  { name: 'Cursor AI', icon: '⚡' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'Bolt.new', icon: '⚡' },
  { name: 'Replit', icon: '💻' },
  { name: 'v0.dev', icon: '▲' },
  { name: 'Windsurf', icon: '🌊' },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-40 right-[10%] w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
          >
            <motion.div 
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-cyan-400 text-sm font-mono font-semibold tracking-wide">STACKMODE NETWORK</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight"
          >
            Build. <span className="text-cyan-400">Trade.</span> <span className="text-violet-400">Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The anti-guru network. Learn to code with AI, master trading, and build real businesses.
            <span className="text-foreground font-medium"> Everything for $50/month.</span>
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <a
              href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              <Zap size={22} />
              <span>Join Stackmode — $50/mo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-muted-foreground text-sm">Explore what's inside</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CODING SECTION ==================== */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-cyan-500/10 via-card/80 to-cyan-400/5 border-2 border-cyan-500/30 rounded-2xl p-6 sm:p-10 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl" />
              
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full px-4 py-2 mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Terminal size={16} className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-bold">CODING SCHOOL</span>
              </motion.div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Learn to Build <span className="text-cyan-400">Real Software</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Stop consuming tutorials. Start building SaaS products with AI-powered tools. 
                    No CS degree required — just the will to create.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {[
                      'AI-Powered Development with Cursor & Lovable',
                      'Build Healthcare, B2B, and Consumer SaaS',
                      'From Zero to Deployed Product',
                      'Live Coaching & Community Support'
                    ].map((feature, i) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-cyan-400" />
                        </div>
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/coding"
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                    >
                      <Rocket size={18} />
                      <span>Explore Curriculum</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2">
                    {techStack.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        className="bg-background/60 border border-cyan-500/20 rounded-lg px-4 py-3 flex items-center gap-2 hover:border-cyan-400/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== BUSINESS SERVICES SECTION ==================== */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-violet-500/10 via-card/80 to-violet-400/5 border-2 border-violet-500/30 rounded-2xl p-6 sm:p-10 overflow-hidden hover:border-violet-400 hover:shadow-[0_0_60px_rgba(139,92,246,0.2)] transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
              
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/40 rounded-full px-4 py-2 mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Globe size={16} className="text-violet-400" />
                <span className="text-violet-400 text-sm font-bold">BUSINESS SERVICES</span>
              </motion.div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Scale Your <span className="text-violet-400">Business</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Whether you need a done-for-you website or want to learn to build yourself — we've got you covered.
                  </p>

                  {/* Two Paths */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 border border-violet-500/20 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3">
                        <Briefcase size={20} className="text-violet-400" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">Done-For-You</h4>
                      <p className="text-xs text-muted-foreground">Professional websites, ads, and scaling services</p>
                    </div>
                    <div className="bg-background/50 border border-violet-500/20 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3">
                        <Brain size={20} className="text-violet-400" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">DIY Training</h4>
                      <p className="text-xs text-muted-foreground">Learn AI business models inside the network</p>
                    </div>
                  </div>

                  <Link
                    to="/business"
                    className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    <Globe size={18} />
                    <span>View Services</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500+', label: 'Clients Served', icon: Users },
                    { value: '$2M+', label: 'Revenue Generated', icon: DollarSign },
                    { value: '48hr', label: 'Avg Delivery', icon: Zap },
                    { value: '5⭐', label: 'Client Rating', icon: Award },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-background/50 border border-violet-500/20 rounded-xl p-4 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <stat.icon size={20} className="text-violet-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== TRADING SECTION ==================== */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-emerald-500/10 via-card/80 to-emerald-400/5 border-2 border-emerald-500/30 rounded-2xl p-6 sm:p-10 overflow-hidden hover:border-emerald-400 hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-4 py-2 mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <TrendingUp size={16} className="text-emerald-400" />
                <span className="text-emerald-400 text-sm font-bold">TRADING EDUCATION</span>
              </motion.div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Master the <span className="text-emerald-400">Markets</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Swing trading, options, crypto — learn battle-tested strategies with AI-powered tools like the StackFinder.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {[
                      'AI StackFinder Tool for Smart Entries',
                      'Live Volume Scanner & Alerts',
                      'Weekly Live Trading Calls',
                      'Stocks, Options, Futures & Crypto'
                    ].map((feature, i) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-emerald-400" />
                        </div>
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    to="/trading"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                  >
                    <BarChart3 size={18} />
                    <span>Explore Trading</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Trading Visual */}
                <div className="relative">
                  <div className="bg-background/60 border border-emerald-500/20 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">StackFinder Results</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">LIVE</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { symbol: 'NVDA', gain: '+127%', time: '3 days' },
                        { symbol: 'TSLA', gain: '+89%', time: '5 days' },
                        { symbol: 'SPY', gain: '+45%', time: '2 days' },
                      ].map((trade, i) => (
                        <motion.div
                          key={trade.symbol}
                          className="flex items-center justify-between bg-emerald-500/10 rounded-lg px-4 py-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 }}
                        >
                          <span className="font-bold text-foreground">{trade.symbol}</span>
                          <span className="text-emerald-400 font-bold">{trade.gain}</span>
                          <span className="text-xs text-muted-foreground">{trade.time}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 mt-3 text-center">
                      Results vary. Past performance ≠ future results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== LIBRARY SECTION ==================== */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-orange-500/10 via-card/80 to-orange-400/5 border-2 border-orange-500/30 rounded-2xl p-6 sm:p-10 overflow-hidden hover:border-orange-400 hover:shadow-[0_0_60px_rgba(249,115,22,0.2)] transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-2 mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <BookOpen size={16} className="text-orange-400" />
                <span className="text-orange-400 text-sm font-bold">FREE LIBRARY</span>
              </motion.div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Free Resources to <span className="text-orange-400">Get Started</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Access free trading strategies, business guides, books, and educational content. No signup required.
                </p>

                {/* Resource Types */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {['Trading Guides', 'Business Templates', 'Free Books', 'Video Tutorials', 'Cheat Sheets'].map((resource) => (
                    <span key={resource} className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm px-3 py-1.5 rounded-full">
                      {resource}
                    </span>
                  ))}
                </div>

                <Link
                  to="/library"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
                >
                  <BookOpen size={18} />
                  <span>Browse Free Resources</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== NETWORK CTA SECTION ==================== */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-cyan-500/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <a
              href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-gradient-to-br from-cyan-500/10 via-card to-violet-500/10 border-2 border-cyan-500/40 rounded-2xl p-6 sm:p-10 overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(6,182,212,0.25)] transition-all duration-500">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 text-center">
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-400 text-background text-xs font-bold px-4 py-1.5 rounded-full mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    75% OFF — JOIN NOW
                  </motion.span>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Everything for <span className="text-cyan-400">$50/month</span>
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Coding school. Business training. Trading tools. AI resources. Live coaching. Community access. All in one membership.
                  </p>

                  <div className="grid sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { icon: Terminal, label: 'Coding', desc: 'Full curriculum' },
                      { icon: Globe, label: 'Business', desc: 'AI models' },
                      { icon: BarChart3, label: 'Trading', desc: 'Tools & signals' },
                      { icon: Users, label: 'Community', desc: 'Live support' },
                    ].map((item) => (
                      <div key={item.label} className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                        <item.icon size={24} className="text-cyan-400 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-foreground">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-3 bg-cyan-500 text-background font-bold text-lg px-10 py-5 rounded-xl group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                    <Zap size={22} />
                    <span>Join Stackmode Network</span>
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== ABOUT / CONNECT SECTION ==================== */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Your Mentor
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I'm Christopher Robinson — Stackmodechris. I left a 4-year finance career to build this network and help others unlink time from money.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/40 flex-shrink-0">
                <OptimizedImage 
                  src="/images/stackmodechris-about-new.png" 
                  alt="Christopher Robinson - Stackmodechris"
                  className="w-full h-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Christopher Robinson</h3>
                <p className="text-primary font-medium mb-3">aka Stackmodechris</p>
                <p className="text-muted-foreground max-w-xl">
                  Founder of Stackmode Network | AI Business & Trading Mentor. My mission: show people that financial freedom isn't about climbing a corporate ladder — it's about building systems that work for you.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ConnectWithMe showBlessing={true} />
        </div>
      </section>

      {/* ==================== TRUSTPILOT SECTION ==================== */}
      <section className="py-8 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <TrustpilotWidget />
        </div>
      </section>

      <MainFooter />
      <CookieConsent />
    </main>
  );
};

export default Home;
