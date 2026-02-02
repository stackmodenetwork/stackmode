import { motion } from 'framer-motion';
import { Check, Users, ArrowRight, Sparkles, Eye, Crosshair, BookOpen, Zap } from 'lucide-react';

export const TradingStackmodePromo = () => {
  const features = [
    {
      icon: Eye,
      title: "My Live Levels & Trades",
      description: "Don't just learn 'theory.' Watch over my shoulder as I execute."
    },
    {
      icon: Crosshair,
      title: "The Ultimate Stack Finder Tool",
      description: "The exact proprietary scanner I use to find entries. No more guessing."
    },
    {
      icon: BookOpen,
      title: 'The "Always-Fresh" Library',
      description: "We delete outdated strategies. Our content is updated constantly to match current market conditions."
    }
  ];

  return (
    <section className="relative z-10 px-4 py-12 sm:py-16">
      {/* External Header - Outside the box */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 rounded-full px-4 py-2 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-primary text-sm font-bold tracking-wide">THE STATIC COURSE MODEL IS DEAD</span>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We Built Stackmode Trading To{' '}
          <span className="text-primary">Kill The "Guru" Model</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          For <span className="text-primary font-semibold">$50/month</span>—less than a tank of gas—you don't just get a PDF. You get:
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://whop.com/stackmode-network-llc"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-card/90 to-emerald-500/10 border-2 border-primary/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-[0_0_80px_rgba(34,197,94,0.3)] group-hover:scale-[1.01]">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/10 to-transparent rounded-full blur-3xl opacity-50" />
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl" />
            </div>

            <div className="relative z-10">
              {/* Feature Cards Grid */}
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="bg-background/50 border border-primary/20 rounded-xl p-5 text-center transition-all hover:border-primary/40 hover:bg-primary/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                    <h4 className="text-foreground font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Pricing Section */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-primary/20">
                {/* Price Comparison */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2">
                    <span className="text-red-400 text-sm">Guru Course</span>
                    <span className="text-red-400 font-bold line-through">$2,000+</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap size={24} className="text-primary" />
                  </motion.div>
                  <div className="flex items-center gap-2 bg-primary/10 border border-primary/40 rounded-lg px-4 py-2">
                    <span className="text-primary text-sm">Stackmode</span>
                    <span className="text-primary font-bold text-xl">$50/mo</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center lg:items-end gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-lg">$200/mo</span>
                    <span className="text-foreground font-bold text-3xl">$50/mo</span>
                    <motion.span
                      className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      75% OFF
                    </motion.span>
                  </div>

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-emerald-400 text-background font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-primary/25 transition-all">
                      <Users size={20} />
                      <span>Start Stacking Wins! Join The Stackmode Network</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </motion.div>

                  <p className="text-xs text-muted-foreground">
                    Cancel anytime • Instant access • No contracts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};
