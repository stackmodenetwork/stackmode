import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Check, Calendar, Terminal, Wrench, BookOpen } from 'lucide-react';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ScrollReveal } from '@/components/ScrollReveal';

import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { SoftwareProofSection } from '@/components/SoftwareProofSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      <FreeResourcesCTA variant="banner" />

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

          {/* Anti-guru line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-sm font-bold mb-6"
          >
            Stop paying <span className="text-destructive line-through">$5,000</span>{' '}
            <span className="text-foreground">for bootcamps that teach old skills</span>
          </motion.p>

          {/* CTA Button */}
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
              <Link
                to="/coding"
                className="group block bg-card/50 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all"
              >
                <Terminal size={28} className="text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Learn To Code</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Use AI tools to build real apps. No degree needed. Make money from your software.
                </p>
                <span className="text-cyan-400 text-sm font-medium flex items-center gap-1">
                  Join The Academy <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal>
              <Link
                to="/buildyourwebsite"
                className="group block bg-card/50 border-2 border-violet-500/30 rounded-xl p-6 hover:border-violet-400 transition-all"
              >
                <Wrench size={28} className="text-violet-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Hire Us To Build</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We build your app, website, or software tool. You tell us what you need. We make it.
                </p>
                <span className="text-violet-400 text-sm font-medium flex items-center gap-1">
                  Book a Free Call <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We've Built */}
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
      <MainFooter />
    </main>
  );
};

export default Home;
