import { motion } from 'framer-motion';
import { Briefcase, Check, Users, ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const TradingCTASection = () => {
  return (
    <section className="relative z-10 px-4 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose How You Want to Learn
          </motion.h2>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* 1-on-1 Mentorship */}
          <motion.a
            href="https://calendly.com/stackmodechris/tradingmastermindcoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/80 border-2 border-accent/50 rounded-2xl p-6 sm:p-8 pt-10 overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_50px_rgba(var(--accent-rgb),0.3)] group-hover:scale-[1.02]">
              {/* Badge */}
              <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                <div className="bg-accent text-background text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                  Free Strategy Call
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">1-on-1 Mentorship</h3>
                </div>

                <p className="text-foreground font-bold text-2xl mb-3">The First Call is FREE</p>
                <p className="text-muted-foreground mb-4">Get a personalized trading strategy built for your goals</p>

                <div className="space-y-2 mb-5">
                  {[
                    'Custom strategy based on your goals',
                    'Direct access to ask me anything',
                    'No commitment, no pressure'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-accent hover:bg-accent/90 text-background font-semibold text-lg px-6 py-4 rounded-lg text-center transition-colors flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  <span>Book Your Free Call</span>
                  <ArrowRight size={18} />
                </div>

                <p className="text-xs text-muted-foreground text-center mt-3">Limited availability — book your spot today</p>
              </div>
            </div>
          </motion.a>

          {/* Stackmode Network */}
          <motion.a
            href="https://whop.com/stackmode-network-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full bg-gradient-to-br from-primary/10 via-card/80 to-emerald-500/10 border-2 border-primary/50 rounded-2xl p-6 sm:p-8 pt-10 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] group-hover:scale-[1.02]">
              {/* Badge */}
              <motion.div
                className="absolute top-0 right-4 -translate-y-1/2 z-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-gradient-to-r from-primary to-emerald-400 text-background text-xs font-bold px-3 py-1.5 rounded-md shadow-lg shadow-primary/30">
                  BEST VALUE
                </div>
              </motion.div>

              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Users size={20} className="text-primary" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Stackmode Network</h3>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-muted-foreground line-through text-lg">$200/mo</span>
                  <span className="text-foreground font-bold text-2xl">$50/mo</span>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full border border-primary/30">75% OFF</span>
                </div>

                <p className="text-muted-foreground mb-4">Full access to trading tools, signals & education</p>

                <div className="space-y-2 mb-5">
                  {[
                    'The Stackfinder AI Trading Tools',
                    'Real-time trade alerts & signals',
                    '$1000+ worth of trading courses'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                  <div className="absolute inset-0 bg-primary rounded-lg blur-md opacity-30" />
                  <div className="relative bg-gradient-to-r from-primary to-emerald-400 hover:from-emerald-400 hover:to-primary text-background font-semibold text-lg px-6 py-4 rounded-lg text-center transition-all flex items-center justify-center gap-2">
                    <span>Join Stackmode Network</span>
                    <ArrowRight size={18} />
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-3">
                  <Check size={14} className="text-primary" />
                  <span>Cancel anytime • Instant access</span>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
