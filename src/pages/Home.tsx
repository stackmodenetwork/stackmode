import { ArrowRight, Check, Calendar, Terminal, Wrench } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { SoftwareProofSection } from '@/components/SoftwareProofSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Simple Header - Logo only */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono">STACKMODE</span>
            </div>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
            >
              <Calendar size={16} />
              <span className="hidden sm:inline">Book a FREE Call</span>
              <span className="sm:hidden">Free Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-8 pb-6">
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
          >
            We Build Software.
            <br />
            <span className="text-cyan-400">We Teach You How.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
          >
            Need an app built? We do it for you. Want to learn to code? We teach you step by step.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-sm font-bold mb-6"
          >
            Stop paying <span className="text-destructive line-through">$5,000</span>{' '}
            <span className="text-foreground">for bootcamps that teach old skills</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              <Calendar size={20} />
              <span>Book a FREE Consultation</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
              Pick Your Path
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-sm">
              Learn to code yourself, or let us build it for you.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-card/50 border-2 border-cyan-500/30 rounded-xl p-6">
                <Terminal size={28} className="text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Learn To Code</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Use AI tools to build real apps. No degree needed. Make money from your software.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-card/50 border-2 border-violet-500/30 rounded-xl p-6">
                <Wrench size={28} className="text-violet-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Hire Us To Build</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We build your app, website, or software tool. You tell us what you need. We make it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              What We Build
            </h2>
            <div className="space-y-3">
              {[
                'AI-powered tools (like StackFinder)',
                'Business apps and dashboards',
                'Websites that get you clients',
                'SaaS products that make monthly income',
                'Custom software for any industry',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                  <Check size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* StackFinder Showcase */}
      <SoftwareProofSection variant="home" />

      <UniversalPageBottom />

      {/* Simple Footer */}
      <footer className="bg-background border-t border-border/50 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
            </a>
            <a href="https://www.youtube.com/@Stackmodechris" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-400 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Stackmode. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
