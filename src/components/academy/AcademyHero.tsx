import { motion } from 'framer-motion';
import { GraduationCap, Star, Terminal, TrendingUp, Code2 } from 'lucide-react';

export const AcademyHero = () => (
  <section className="relative flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden" style={{ background: '#060d06' }}>
    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: 'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    }} />
    {/* Radial glow */}
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,255,136,0.06) 0%, transparent 70%)',
    }} />

    <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05 }}
        className="mb-4"
      >
        <img src="/images/sm-logo-new.png" alt="Stackmode Academy Christopher Robinson StackmodeChris" className="w-16 h-16 rounded-full object-cover mx-auto shadow-lg" style={{ border: '2px solid rgba(0,255,136,0.4)', boxShadow: '0 0 20px rgba(0,255,136,0.15)' }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-5"
        style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)' }}
      >
        <Star size={12} style={{ color: '#00ff88', fill: '#00ff88' }} />
        <span className="text-xs font-medium" style={{ color: '#00ff88' }}>Founded by Christopher Robinson</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-center"
        style={{ color: '#f0f0f0', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
      >
        STACKMODE ACADEMY — LEARN AI SOFTWARE, TRADING & ASSET STACKING
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm sm:text-lg mb-6 max-w-xl mx-auto leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif" }}
      >
        Build software with AI. Learn to trade the markets. Stack your assets and build wealth. Founded by Christopher Robinson (StackmodeChris). Zero experience required.
      </motion.p>

      {/* Feature pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {[
          { icon: Code2, label: 'Python & Web Dev' },
          { icon: TrendingUp, label: 'Trading & Investing' },
          { icon: Terminal, label: 'AI Tools & Automation' },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{
            color: '#00ff88',
            background: 'rgba(0,255,136,0.06)',
            border: '1px solid rgba(0,255,136,0.15)',
            fontFamily: "'Share Tech Mono', monospace",
          }}>
            <Icon size={12} />
            {label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://whop.com/stackmode-academy/educationalservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all text-sm sm:text-base hover:scale-[1.02]"
          style={{
            background: '#00ff88',
            color: '#030305',
            boxShadow: '0 0 30px rgba(0,255,136,0.25)',
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.1em',
            fontSize: 18,
          }}
        >
          <GraduationCap size={18} />
          JOIN THE STACKMODE ACADEMY — $50/MO
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 text-xs"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        4.9★ rating · Cancel anytime
      </motion.p>
    </div>
  </section>
);
