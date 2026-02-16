import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

export const AcademyPhilosophy = () => (
  <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
    {/* Geometric pattern bg */}
    <div className="absolute inset-0 bg-card/50" />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)`,
      }}
    />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
          <Shield size={14} className="text-accent" />
          <span className="text-accent text-xs font-medium">Our Philosophy</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
          Don't Trade with Rent Money.{' '}
          <span className="text-accent">Build First, Then Stack.</span>
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          Here's the truth most "trading gurus" won't tell you: You should NEVER risk money you can't afford to lose. That's why Stackmode Academy is different.
        </p>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
          We teach you to <span className="text-foreground font-semibold">BUILD first</span>—use AI to create income-generating software and apps. Then, and only then, you learn to <span className="text-foreground font-semibold">STACK</span>—multiply that income through strategic trading and investing. This is the complete blueprint for sustainable wealth in the AI era.
        </p>

        <a
          href="https://whop.com/stackmode-academy/educationalservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-xl transition-all text-sm hover:scale-[1.02]"
        >
          Start Building Today
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);
