import { Link } from 'react-router-dom';
import { Code, Briefcase, ArrowRight, Zap, ChevronRight, Terminal, Rocket, Users, Check, Bot, Globe, Sparkles, TrendingUp } from 'lucide-react';
import { CookieConsent } from '@/components/CookieConsent';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

const techStack = [
  'Python', 'Lovable', 'Cursor AI', 'Claude', 'Bolt.new', 'Replit', 'v0.dev', 'Windsurf'
];

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      
      {/* Minimal Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-mono font-semibold tracking-wide">BUILD. LAUNCH. SCALE.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight"
          >
            Learn to <span className="text-cyan-400">Code</span>
            <br />
            Build <span className="text-violet-400">SaaS</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">Make Real Money</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The anti-guru school. No $5,000 courses. No theoretical BS.
            <span className="text-foreground font-medium"> Just real skills that make money.</span>
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-lg px-10 py-5 rounded-lg transition-all shadow-lg shadow-cyan-500/20"
            >
              <Zap size={22} />
              <span>Join Stackmode — $50/mo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 text-sm"
          >
            <span className="text-muted-foreground mr-2">You'll master:</span>
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="bg-card/50 border border-border/50 rounded-md px-2 py-1 text-muted-foreground font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Path Selection Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Choose Your Path
              </h2>
              <p className="text-muted-foreground">
                Everything you need to build income online.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Coding Path - PRIMARY */}
            <ScrollReveal delay={0.1}>
              <Link
                to="/coding"
                className="group relative block bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] h-full"
              >
                <div className="absolute top-4 right-4 bg-cyan-500/20 border border-cyan-500/40 rounded-full px-3 py-1 text-xs font-bold text-cyan-400">
                  CORE PRODUCT
                </div>
                
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal size={32} className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Coding School
                </h3>
                <p className="text-muted-foreground mb-6">
                  Learn to build SaaS products using AI tools like Lovable, Cursor, and Claude. No coding experience needed.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-cyan-400" />
                    <span className="text-foreground/80">AI-Powered Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-cyan-400" />
                    <span className="text-foreground/80">Build Real Products</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-cyan-400" />
                    <span className="text-foreground/80">SaaS Launch Curriculum</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  <span>Start Building</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Business Services Path */}
            <ScrollReveal delay={0.2}>
              <Link
                to="/business"
                className="group relative block bg-gradient-to-br from-violet-500/10 to-transparent border-2 border-violet-500/30 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] h-full"
              >
                <div className="w-16 h-16 bg-violet-500/20 border border-violet-500/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={32} className="text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Business Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Need a website? Ads? Choose done-for-you agency services or join the network to learn it yourself.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-violet-400" />
                    <span className="text-foreground/80">Done-For-You Websites</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-violet-400" />
                    <span className="text-foreground/80">Ad Campaign Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-violet-400" />
                    <span className="text-foreground/80">DIY Training Available</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-3 transition-all">
                  <span>View Services</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-cyan-500/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">ALL-IN-ONE MEMBERSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything for $50/month
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Coding school. Business training. AI tools. Live coaching. Community access.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <a
              href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card/50 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transition-all"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Terminal, label: 'Coding School', desc: 'Full curriculum' },
                  { icon: Bot, label: 'AI Tools', desc: 'Templates & guides' },
                  { icon: Users, label: 'Community', desc: 'Discord + coaching' },
                  { icon: Rocket, label: 'Launch Support', desc: 'Build to revenue' },
                ].map((item) => (
                  <div key={item.label} className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                    <item.icon size={24} className="text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground line-through text-lg">$200/mo</span>
                  <span className="text-4xl font-bold text-foreground">$50<span className="text-lg text-muted-foreground">/mo</span></span>
                  <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full">75% OFF</span>
                </div>
                <div className="inline-flex items-center gap-3 bg-cyan-500 text-background font-bold px-8 py-4 rounded-lg group-hover:bg-cyan-400 transition-colors">
                  <span>Join Stackmode Network</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What Members Say</h2>
            </div>
          </ScrollReveal>
          <ReviewsGallery />
        </div>
      </section>

      {/* Trading - Subtle Footer Link */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted-foreground mb-4">
              Also interested in trading? We have education for that too.
            </p>
            <Link
              to="/trading"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <TrendingUp size={16} />
              <span>View Trading Education</span>
              <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <MainFooter />
      <CookieConsent />
    </main>
  );
};

export default Home;
