import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';

export const AcademyHero = () => (
  <section className="relative flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />

    <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05 }}
        className="mb-4"
      >
        <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-primary/30 shadow-lg shadow-primary/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-5"
      >
        <Star size={12} className="text-primary fill-primary" />
        <span className="text-primary text-xs font-medium">Founded by Christopher Robinson</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-center"
      >
        Build with AI.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Stack Your Assets.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-sm sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
      >
        Learn the new AI Agentic Stack. Build real software that makes money. Trade and invest your profits. Zero experience required.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://whop.com/stackmode-academy/educationalservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
        >
          <GraduationCap size={18} />
          Join The Stackmode Academy — $50/mo
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 text-xs text-muted-foreground"
      >
        4.9★ rating · Cancel anytime
      </motion.p>
    </div>
  </section>
);
