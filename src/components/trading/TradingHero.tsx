import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Zap } from 'lucide-react';
export const TradingHero = () => {
  return <section className="relative z-10 px-4 pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Warning Badge */}
        <motion.div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <AlertTriangle size={16} className="text-red-400" />
          <span className="text-red-400 text-sm font-bold tracking-wide">STOP GAMBLING WITH OUTDATED INFO</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }}>
          Most Trading Courses Are{' '}
          <span className="relative">
            <span className="text-red-400 line-through opacity-60">Expired</span>
          </span>
          <br />
          <motion.span className="text-primary" animate={{
          textShadow: ['0 0 0px hsl(145 80% 50%)', '0 0 30px hsl(145 80% 50%)', '0 0 0px hsl(145 80% 50%)']
        }} transition={{
          duration: 2.5,
          repeat: Infinity
        }}>
            Before You Even Buy Them.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          Stop dropping <span className="text-red-400 font-semibold">$2,000</span> on a pre-recorded course filmed three years ago.
          The market changes <span className="text-primary font-semibold">every single day</span>. 
          If your information isn't live, you aren't trading—<span className="text-foreground font-bold">you're gambling.</span>
        </motion.p>

        {/* Visual Comparison */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }}>
          {/* Old Way */}
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3">
            <TrendingDown size={24} className="text-red-400" />
            <div className="text-left">
              <p className="text-xs text-red-400/70 uppercase tracking-wide">Old Way</p>
              <p className="text-red-400 font-bold">$2,000+ Static Course</p>
            </div>
          </div>

          {/* Arrow */}
          <motion.div animate={{
          x: [0, 5, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="hidden sm:block">
            <Zap size={28} className="text-primary" />
          </motion.div>

          {/* New Way - Two Options */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-5 py-3">
              <motion.div animate={{
              rotate: [0, 10, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                <TrendingDown size={24} className="text-primary rotate-180" />
              </motion.div>
              <div className="text-left">
                <p className="text-xs text-primary/70 uppercase tracking-wide">STACKMODE NETWORK</p>
                <p className="text-primary font-bold">$50/mo Live Updates</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-3">
              <motion.div animate={{
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }}>
                <Zap size={24} className="text-emerald-400" />
              </motion.div>
              <div className="text-left">
                <p className="text-xs text-emerald-400/70 uppercase tracking-wide">1-ON-1 MENTORSHIP</p>
                <p className="text-emerald-400 font-bold">FREE Call</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hook Line */}
        <motion.p className="text-base sm:text-lg text-foreground/80 font-medium italic" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          "The gurus want you to pay for their past. <span className="text-primary">We want you to profit in the present.</span>"
        </motion.p>
      </div>
    </section>;
};