import { motion } from 'framer-motion';
import { GraduationCap, Check, Star } from 'lucide-react';

export const AcademyFinalCTA = () => (
  <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
          Your Future Starts With One Decision
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
          Join students who are building wealth the smart way — with AI, software, and strategic investing.
        </p>

        <a
          href="https://whop.com/stackmode-academy/educationalservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-10 py-4 rounded-xl transition-all text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
        >
          <GraduationCap size={20} />
          Join Stackmode Academy — $50/month
        </a>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground">
          {['30-Day Money-Back Guarantee', 'Cancel Anytime', 'Instant Access'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check size={13} className="text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 mt-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
          <span className="text-xs text-muted-foreground ml-2">4.9/5 from 500+ reviews</span>
        </div>
      </motion.div>
    </div>
  </section>
);
