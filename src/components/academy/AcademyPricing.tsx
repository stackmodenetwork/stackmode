import { motion } from 'framer-motion';
import { Check, Shield, GraduationCap } from 'lucide-react';

const features = [
  'Complete AI Development Curriculum',
  'Trading & Investing Masterclasses',
  'Exclusive StackFinder AI Tool Access',
  'Private Community Chat (24/7)',
  'Live Trading Sessions (Weekly)',
  'Exclusive Educational Video Content',
  'Portfolio & Business Templates',
  'Priority Campus Access (Atlanta 2026)',
  'New Content Added Weekly',
  'Lifetime Access to All Updates',
];

export const AcademyPricing = () => (
  <section className="py-16 sm:py-20 px-4">
    <div className="max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
          Join Stackmode Academy Today
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border-2 border-primary/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-lg font-bold text-foreground mb-1">STACKMODE ACADEMY MEMBERSHIP</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl sm:text-5xl font-bold text-foreground">$50</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <p className="text-xs text-muted-foreground mb-6">Billed Monthly · Cancel Anytime</p>

          <div className="space-y-3 mb-6">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <Check size={15} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="https://whop.com/stackmode-academy/educationalservice/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold w-full py-4 rounded-xl transition-all text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.01]"
          >
            <GraduationCap size={18} />
            Join Academy Now — $50/month
          </a>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield size={14} className="text-accent" />
            <span className="text-xs text-muted-foreground">30-Day Money-Back Guarantee — No Questions Asked</span>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-2">
            Start learning today. If you don't see value in the first 30 days, get a full refund.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
