import { motion } from 'framer-motion';
import { Check, TrendingUp, BarChart3, BookOpen, Users, Zap, Shield, Target, Brain } from 'lucide-react';

export const TradingFeatures = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Live Trade Alerts",
      description: "Get my exact entries, stop losses, and take profits in real-time as I trade.",
      highlight: true
    },
    {
      icon: BarChart3,
      title: "Stack Finder Scanner",
      description: "My proprietary AI tool that scans the market and finds high-probability setups.",
      highlight: true
    },
    {
      icon: Brain,
      title: "Smart Strike Solver",
      description: "Options trading made simple. Know exactly which strikes to pick.",
      highlight: false
    },
    {
      icon: BookOpen,
      title: "Always-Updated Library",
      description: "$1,000+ worth of courses that stay current with market conditions.",
      highlight: false
    },
    {
      icon: Users,
      title: "Weekly Live Coaching",
      description: "Join live calls where I break down the market and answer your questions.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Risk Management System",
      description: "Learn to protect your capital and trade with confidence, not emotion.",
      highlight: false
    }
  ];

  return (
    <section className="relative z-10 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap size={16} className="text-primary" />
            <span className="text-primary text-sm font-bold">WHAT'S INCLUDED</span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything You Need To{' '}
            <span className="text-primary">Trade Profitably</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            No fluff. No outdated content. Just the tools and training that actually work.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`relative bg-card/80 border rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${
                feature.highlight
                  ? 'border-primary/40 hover:border-primary hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                  : 'border-border/50 hover:border-primary/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {feature.highlight && (
                <div className="absolute -top-2 -right-2 bg-primary text-background text-[10px] font-bold px-2 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                feature.highlight ? 'bg-primary/15' : 'bg-muted/50'
              }`}>
                <feature.icon size={20} className={feature.highlight ? 'text-primary' : 'text-foreground/70'} />
              </div>

              <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>

              <div className="flex items-center gap-2 mt-3 text-xs text-primary/80">
                <Check size={14} className="text-primary" />
                <span>Included in membership</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
