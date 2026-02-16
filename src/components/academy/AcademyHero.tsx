import { motion } from 'framer-motion';
import { GraduationCap, Play, Code, TrendingUp, DollarSign, Cpu } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute text-primary/10 font-mono text-xs select-none pointer-events-none"
    initial={{ opacity: 0, x: `${x}%`, y: `${y}%` }}
    animate={{
      opacity: [0, 0.3, 0],
      y: [`${y}%`, `${y - 20}%`],
    }}
    transition={{ delay, duration: 6, repeat: Infinity, ease: 'linear' }}
  >
    {['{ }', '< />', 'AI', '( )', '=> ', '0x', '$$', '++'][Math.floor(Math.random() * 8)]}
  </motion.div>
);

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  delay: i * 0.5,
  x: Math.random() * 90 + 5,
  y: Math.random() * 80 + 10,
}));

export const AcademyHero = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* Announcement Banner */}
      {showBanner && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          className="relative overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 py-2.5 px-4">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/15 to-secondary/0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative z-10 flex items-center justify-center gap-2 text-center">
              <span className="text-xs sm:text-sm text-foreground font-medium">
                🏗️ <span className="font-bold">COMING SOON:</span> Our First Physical Campus Opening in Atlanta, Georgia
              </span>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-2 text-muted-foreground hover:text-foreground text-xs"
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />

        {/* Code Particles */}
        {particles.map((p) => (
          <FloatingParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
        ))}

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Cpu size={14} className="text-primary" />
            <span className="text-primary text-xs font-medium">The AI-Powered School for Builders & Investors</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight"
          >
            Build Apps & Software with AI.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Stack Your Assets Like a Pro.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Turn Ideas into Reality: Master AI Development → Generate Income → Multiply Wealth Through Strategic Trading & Investing
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-8 py-4 rounded-xl transition-all text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
            >
              <GraduationCap size={18} />
              Join Stackmode Academy — $50/mo
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/40 bg-card/60 text-foreground font-medium px-6 py-4 rounded-xl transition-all text-sm hover:bg-card"
            >
              <Play size={16} className="text-primary" />
              See What You'll Learn
            </a>
          </motion.div>

          {/* Split visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-card/80 border border-border rounded-lg px-4 py-2">
              <Code size={16} className="text-primary" />
              <span className="text-xs text-muted-foreground font-mono">Build Software</span>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent font-bold text-lg"
            >
              →
            </motion.div>
            <div className="flex items-center gap-2 bg-card/80 border border-border rounded-lg px-4 py-2">
              <DollarSign size={16} className="text-accent" />
              <span className="text-xs text-muted-foreground font-mono">Generate Income</span>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="text-accent font-bold text-lg hidden sm:block"
            >
              →
            </motion.div>
            <div className="hidden sm:flex items-center gap-2 bg-card/80 border border-border rounded-lg px-4 py-2">
              <TrendingUp size={16} className="text-secondary" />
              <span className="text-xs text-muted-foreground font-mono">Stack Wealth</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
