import { motion } from 'framer-motion';
import { Check, TrendingUp, BarChart3, BookOpen, Users, Zap, Shield, Brain, ArrowRight } from 'lucide-react';

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
        {/* Clickable Card linking to Whop */}
        <a
          href="https://whop.com/stackmode-network-llc"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative bg-gradient-to-br from-primary/5 via-card/90 to-emerald-500/5 border-2 border-primary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] group-hover:scale-[1.01]">
            {/* Background glow elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl opacity-40" />

            <div className="relative z-10">
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
                    className={`relative bg-card/80 border rounded-xl p-5 transition-all duration-300 group-hover:scale-[1.02] ${
                      feature.highlight
                        ? 'border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]'
                        : 'border-border/50 group-hover:border-primary/30'
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

              {/* CTA Button */}
              <motion.div 
                className="flex flex-col items-center mt-8 pt-6 border-t border-primary/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-foreground font-bold text-lg sm:text-xl mb-3">
                  DON'T WAIT! <span className="text-primary">JOIN THE STACKMODE NETWORK</span>
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-muted-foreground line-through text-sm">$200/mo</span>
                  <span className="text-2xl sm:text-3xl font-bold text-primary">$50/mo</span>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">75% OFF</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-emerald-400 group-hover:from-emerald-400 group-hover:to-primary text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl shadow-primary/25 transition-all">
                    <Users size={20} />
                    <span>Start Stacking Wins Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Cancel anytime • Instant access • No contracts</p>
              </motion.div>
            </div>
          </div>
        </a>

        {/* Video Section with Title */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
            <span className="text-foreground">WATCH HOW I MENTOR TRADERS TO </span>
            <span className="text-primary">CONSISTENT PROFITS</span>
          </h3>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-emerald-500/15 to-primary/20 rounded-2xl blur-xl opacity-60" />
              <div className="relative bg-background rounded-xl overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/10">
                <video
                  className="w-full h-auto"
                  poster="/images/video-thumbnail.png"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/mentor-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
