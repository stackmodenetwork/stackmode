import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Check, ArrowRight, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const Business = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Turn Views Into Income | Stackmode</title>
        <meta name="description" content="Learn how to get attention online and make money from it. Content creation, ads, funnels, and AI branding tools." />
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
            Turn Views Into <span className="text-violet-400">Income.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
          >
            We teach you how to get attention online and make money from it.
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
              className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-violet-500/20"
            >
              <Calendar size={20} />
              <span>Book a FREE Call</span>
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
                'Create content that gets views',
                'Run ads that make money',
                'Build funnels that sell for you',
                'Use AI tools to brand and grow fast',
                'Turn followers into paying clients',
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

      {/* Done For You */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-violet-500/10 border-2 border-violet-500/30 rounded-xl p-6 hover:border-violet-400 transition-all text-center"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">Want Us To Do It For You?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We build websites, run ads, and set up your funnels. You focus on your business.
              </p>
              <span className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold px-6 py-3 rounded-lg transition-all text-sm">
                <Calendar size={16} />
                Book a Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
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

export default Business;
