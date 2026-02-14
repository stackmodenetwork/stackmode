import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { Check, ArrowRight, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';

const BuildYourWebsite = () => {
  return (
    <>
      <Helmet>
        <title>We Build Your Software | Stackmode</title>
        <meta name="description" content="Need an app, website, or software tool? We build it for you. Book a free call to get started." />
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
              We Build It <span className="text-violet-400">For You.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
            >
              Tell us what you need. We build your app, website, or software tool.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
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

        {/* What We Build */}
        <section className="py-8 sm:py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground text-center mb-6">
                What We Can Build For You
              </h2>
              <div className="space-y-3">
                {[
                  'Websites that get you clients',
                  'AI-powered tools and dashboards',
                  'SaaS products (like StackFinder)',
                  'Mobile-friendly apps',
                  'Custom software for your business',
                  'Built with modern tech — not WordPress',
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

        {/* StackFinder Example */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <a
                href="https://stackmodechris-droid-stackfinder.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all text-center"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">Example: StackFinder</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  An AI stock research tool we built from scratch. We can build something like this for you.
                </p>
                <span className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-6 py-3 rounded-lg transition-all text-sm">
                  See StackFinder Live
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
    </>
  );
};

export default BuildYourWebsite;
