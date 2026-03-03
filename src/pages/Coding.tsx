import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Check, ArrowRight, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const Coding = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Learn To Code. Build Software. | Stackmode Academy</title>
        <meta name="description" content="Learn to code with AI tools. No degree needed. Build real apps that make money. Join the Stackmode Academy." />
      </Helmet>

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
            Learn To Code. <span className="text-cyan-400">Sell Software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-lg mb-2 max-w-xl mx-auto"
          >
            Use AI tools to build real apps. No degree needed. Make money from your code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-sm font-bold mb-6"
          >
            Stop paying <span className="text-destructive line-through">$5,000</span>{' '}
            <span className="text-foreground">for bootcamps that teach old skills</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <a
              href="https://calendly.com/stackmodechris/turboboost"
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

      {/* What You Learn */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              What You'll Learn
            </h2>
            <div className="space-y-3">
              {[
                'Use AI coding tools (Cursor, Lovable, Claude)',
                'Build real apps people will pay for',
                'Launch your own software products',
                'Make monthly income from your apps',
                'No coding experience needed to start',
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

      {/* What You Can Build */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              What You Can Build
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '🤖', name: 'AI Tools' },
                { emoji: '📊', name: 'Dashboards' },
                { emoji: '🛒', name: 'Online Stores' },
                { emoji: '🏥', name: 'Health Apps' },
                { emoji: '💼', name: 'Business Apps' },
                { emoji: '📱', name: 'Mobile Apps' },
              ].map((idea) => (
                <div key={idea.name} className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
                  <span className="text-2xl block mb-2">{idea.emoji}</span>
                  <span className="text-foreground text-sm font-medium">{idea.name}</span>
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
    </main>
  );
};

export default Coding;
