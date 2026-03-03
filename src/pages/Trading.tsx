import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Check, ArrowRight, Zap, Calendar } from 'lucide-react';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
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
            Invest Your Income. <span className="text-emerald-400">Grow Your Wealth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
          >
            Stocks, crypto, real estate — we show you where to put your money so it grows.
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
              <span>Join The Academy — $50/mo</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              <Calendar size={20} />
              <span>FREE Consultation Call</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What You Learn */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              What You'll Learn
            </h2>
            <div className="space-y-3">
              {[
                'Swing trade stocks and options',
                'Invest in crypto the smart way',
                'Real estate basics for beginners',
                'Use AI tools to find good trades',
                'Build wealth without day trading',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                  <Check size={18} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-8 px-4">
        <ScrollReveal>
          <ReviewsBackgroundCarousel />
        </ScrollReveal>
      </section>

      <UniversalPageBottom />
      <MainFooter />
      <div className="h-20 md:hidden" />
    </main>
  );
};

export default Index;
