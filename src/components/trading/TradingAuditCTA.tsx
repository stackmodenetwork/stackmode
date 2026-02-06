import { motion } from 'framer-motion';
import { Target, Shield, Search, Calendar, AlertTriangle, ArrowRight } from 'lucide-react';
export const TradingAuditCTA = () => {
  const auditPoints = [{
    icon: Search,
    text: "Dissect your last 3 losses to find the pattern"
  }, {
    icon: Shield,
    text: "Audit your risk management (most get this wrong)"
  }, {
    icon: Target,
    text: 'Identify the "Leak" draining your account'
  }];
  return <section className="relative z-10 px-4 py-10 sm:py-14">
      <motion.div className="max-w-4xl mx-auto" initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: '-50px'
    }} transition={{
      duration: 0.6
    }}>
        {/* Badge */}
        <div className="text-center mb-6">
          <motion.div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/40 rounded-full px-4 py-2" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }}>
            <Calendar size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-bold tracking-wide">FREE 1-ON-1 INVESTING CALL</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-4 leading-tight" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.1
      }}>
          Give Me 30 Minutes, I'll Show You{' '}
          <span className="text-primary">Why You're Still Losing</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p className="text-base sm:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8" initial={{
        opacity: 0,
        y: 15
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.15
      }}>
          Most investors are <span className="text-foreground font-medium">one or two bad habits</span> away from profitability. 
          You don't need another "magic indicator"—you need a <span className="text-primary font-semibold">second set of eyes</span> on your execution.
        </motion.p>

        {/* Main Card */}
        <a href="https://calendly.com/stackmodechris/architecture" target="_blank" rel="noopener noreferrer" className="block group">
          <div className="relative bg-gradient-to-br from-emerald-500/10 via-card/95 to-primary/10 border-2 border-emerald-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] group-hover:scale-[1.02]">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-emerald-500/15 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              {/* What we cover */}
              <div className="mb-6">
                <p className="text-sm text-emerald-400 font-semibold mb-4 uppercase tracking-wide">In Your Free Investing Audit, We'll:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {auditPoints.map((point, i) => <motion.div key={i} className="flex items-start gap-3 bg-background/50 border border-emerald-500/20 rounded-xl p-4" initial={{
                  opacity: 0,
                  y: 15
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.2 + i * 0.1
                }}>
                      <div className="w-10 h-10 bg-emerald-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        <point.icon size={20} className="text-emerald-400" />
                      </div>
                      <p className="text-sm text-foreground/90 leading-snug">{point.text}</p>
                    </motion.div>)}
                </div>
              </div>

              {/* Value proposition */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-emerald-500/20">
                {/* Warning badge */}
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className="w-10 h-10 bg-amber-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-400 font-semibold">Limited Spots</p>
                    <p className="text-xs text-muted-foreground">This Is For Serious Investors Only</p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div className="relative" whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.98
              }}>
                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-400 text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl shadow-emerald-500/25 transition-all">
                    <Calendar size={20} />
                    <span>Book Your FREE Call</span>
                    <motion.div animate={{
                    x: [0, 5, 0]
                  }} transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}>
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Trust line */}
              <p className="text-center text-xs text-muted-foreground mt-5">
                No sales pitch. No fluff. Just raw feedback on your investing game.
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </section>;
};