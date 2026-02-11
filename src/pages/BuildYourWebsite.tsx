import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { Check, ArrowRight, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';

const BuildYourWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Get a Website That Works | Stackmode</title>
        <meta name="description" content="We build it for you, or you learn to build it yourself. Professional websites with modern tech." />
        <link rel="canonical" href="https://stackmode.net/buildyourwebsite" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <MainHeader />
        <FreeResourcesCTA variant="banner" />

        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              Get a Website <span className="text-violet-400">That Works.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
            >
              We build it for you, or you learn to build it yourself.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="https://whop.com/stackmode-academy/educationalservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
              >
                <Zap size={20} />
                <span>Learn in Academy — $50/mo</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="https://calendly.com/stackmodechris/architecture"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-violet-500/20"
              >
                <Calendar size={20} />
                <span>Book a FREE Consultation</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-8 sm:py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground text-center mb-6">
                What's Included
              </h2>
              <div className="space-y-3">
                {[
                  'Custom design — not a template',
                  'Built with modern tech (React, not WordPress)',
                  'Fast load times (under 2 seconds)',
                  'SEO so people find you on Google',
                  'Works great on phones and tablets',
                  '30 days of support after launch',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                    <Check size={18} className="text-violet-400 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <UniversalPageBottom />
        <MainFooter />
      </main>
    </>
  );
};

export default BuildYourWebsite;
