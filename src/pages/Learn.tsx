import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { Play, Download, ArrowRight, Zap, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';

const Learn = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Start Learning For Free | Stackmode</title>
        <meta name="description" content="Get free courses and ebooks. No email required. Start learning how to make more income today." />
      </Helmet>

      <MainHeader />
      <FreeResourcesCTA variant="banner" />

      {/* Hero */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Start Learning <span className="text-emerald-400">For Free.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm sm:text-lg mb-8 max-w-xl mx-auto"
          >
            Get free courses and ebooks. No email needed. No catch.
          </motion.p>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-card/50 border-2 border-emerald-500/30 rounded-xl p-6 sm:p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
                <Gift size={16} />
                100% FREE
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                The Key Steps To Profitability
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                A full video course and ebook on how to invest and grow a business. No fluff. Just what works.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://stackmodechris.systeme.io/freecourse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-lg transition-all"
                >
                  <Play size={18} />
                  Get Free Course
                </a>
                <a
                  href="https://stackmodechris.systeme.io/freebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-border hover:border-emerald-500/50 text-foreground font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  <Download size={18} />
                  Download eBook
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Want Everything? */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-cyan-500/10 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all text-center"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">Want Everything?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get all courses, tools, live coaching, and community access for one price.
              </p>
              <span className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-6 py-3 rounded-lg transition-all text-sm">
                <Zap size={16} />
                Join The Academy — $50/mo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <UniversalPageBottom />
      <MainFooter />
    </main>
  );
};

export default Learn;
