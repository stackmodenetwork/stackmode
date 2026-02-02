import { motion } from 'framer-motion';
import { BarChart3, Zap, TrendingUp, Target, Shield, ArrowRight, Sparkles, Activity } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface StackFinderPromoProps {
  variant?: 'home' | 'trading';
}

export const StackFinderPromo = ({ variant = 'home' }: StackFinderPromoProps) => {
  const isTrading = variant === 'trading';
  
  // Theme colors based on variant
  const accentColor = isTrading ? 'emerald' : 'cyan';
  const accentClass = isTrading ? 'text-emerald-400' : 'text-cyan-400';
  const borderClass = isTrading ? 'border-emerald-500/30' : 'border-cyan-500/30';
  const bgClass = isTrading ? 'bg-emerald-500/10' : 'bg-cyan-500/10';
  const gradientFrom = isTrading ? 'from-emerald-500/20' : 'from-cyan-500/20';
  const gradientBorder = isTrading ? 'border-emerald-500/40' : 'border-cyan-500/40';
  const hoverBorder = isTrading ? 'hsl(142, 76%, 36%)' : 'hsl(185, 100%, 50%)';
  
  return (
    <ScrollReveal>
      <a 
        href="https://whop.com/stackmode-network-llc"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative overflow-hidden">
          {/* Premium gradient border effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} via-primary/20 to-primary/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`} />
          
          <motion.div 
            className={`relative bg-gradient-to-br from-card via-background to-card border-2 ${borderClass} rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 group-hover:border-opacity-100 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: hoverBorder, scale: 1.01 }}
          >
          {/* Animated background elements */}
          <div className={`absolute top-0 right-0 w-64 h-64 ${bgClass} rounded-full blur-3xl`} />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
          
          {/* Floating chart lines - decorative */}
          <svg className="absolute top-10 right-10 w-32 h-20 opacity-20" viewBox="0 0 100 50">
            <motion.path
              d="M0,40 Q20,10 40,25 T80,15 T100,30"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Value Proposition */}
            <div>
              {/* Badge */}
              <motion.div 
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradientFrom} to-primary/20 border ${gradientBorder} rounded-full px-4 py-2 mb-4`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={14} className={accentClass} />
                </motion.div>
                <span className={`${accentClass} text-xs sm:text-sm font-semibold uppercase tracking-wide`}>AI-Powered Trading Tool</span>
              </motion.div>
              
              {/* Headline */}
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Discover Winning Strategies with{' '}
                <span className={isTrading ? "bg-gradient-to-r from-emerald-400 via-primary to-emerald-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-cyan-400 via-primary to-purple-400 bg-clip-text text-transparent"}>
                  The StackFinder
                </span>
              </motion.h2>
              
              {/* Body Text */}
              <motion.p 
                className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Analyze market trends and identify the best opportunities instantly. 
                Stop guessing and start trading with real-time data, smart strike calculations, 
                and AI-powered market intelligence.
              </motion.p>
              
              {/* Feature Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {[
                  { icon: Activity, label: 'Live Volume Tracking' },
                  { icon: Target, label: 'Smart Strike Solver' },
                  { icon: Shield, label: 'Theta Shield Active' },
                  { icon: BarChart3, label: 'Profit Calculator' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-2 bg-background/60 border ${isTrading ? 'border-emerald-500/30' : 'border-border/50'} rounded-full px-3 py-1.5`}
                    whileHover={{ scale: 1.05, borderColor: hoverBorder }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <feature.icon size={14} className={accentClass} />
                    <span className="text-xs sm:text-sm text-foreground/80">{feature.label}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                className="relative inline-flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${isTrading ? 'from-emerald-500' : 'from-cyan-500'} to-primary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />
                
                <div className={`relative flex items-center gap-3 bg-gradient-to-r ${isTrading ? 'from-emerald-500 to-emerald-400 group-hover:from-emerald-400 group-hover:to-emerald-300 shadow-emerald-500/30' : 'from-cyan-500 to-cyan-400 group-hover:from-cyan-400 group-hover:to-cyan-300 shadow-cyan-500/30'} text-background font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl transition-all`}>
                  <Zap size={20} />
                  <span>Launch StackFinder</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
              
              {/* Access Note */}
              <motion.p 
                className="text-xs text-muted-foreground mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Included with Stackmode Network membership • $50/month
              </motion.p>
            </div>
            
            {/* Right: Visual Preview */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Mock Dashboard Preview */}
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${isTrading ? 'bg-gradient-to-r from-emerald-400 to-primary' : 'bg-gradient-to-r from-cyan-400 to-purple-400'} bg-clip-text text-transparent tracking-tight`}>
                      THE STACKFINDER
                    </h3>
                    <p className="text-xs text-muted-foreground">Market Intelligence System</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">SYSTEM STATUS</span>
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      OPERATIONAL
                    </span>
                  </div>
                </div>
                
                {/* Mock Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Smart Strike Card */}
                  <motion.div 
                    className="bg-card/60 border border-border/30 rounded-xl p-3"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={14} className={accentClass} />
                      <span className="text-xs font-semibold text-foreground">SMART STRIKE</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-2 mb-2">
                      <div className="flex items-center gap-1 text-primary text-xs mb-1">
                        <Shield size={12} />
                        <span>THETA SHIELD ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span>$10</span>
                        <ArrowRight size={12} />
                        <span>$11</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground">Recommended Range</div>
                  </motion.div>
                  
                  {/* Profit Card */}
                  <motion.div 
                    className="bg-card/60 border border-border/30 rounded-xl p-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 size={14} className={accentClass} />
                      <span className="text-xs font-semibold text-foreground">NET PROFIT</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                      <motion.span 
                        className="text-2xl font-bold text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        +$785.26
                      </motion.span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-2">
                      <span>ROI: <span className="text-primary">149.54%</span></span>
                      <span>Break-even: $21.01</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Stackmode Scout */}
                <motion.div 
                  className="mt-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-3"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground">Stackmode Scout</span>
                      <span className="flex items-center gap-1 text-xs text-primary">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        ONLINE
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground bg-background/50 rounded-lg p-2">
                    "Ask me about market sentiment, technical analysis, or trading strategies."
                  </p>
                </motion.div>
              </div>
              
              {/* Floating accent elements */}
              <motion.div 
                className={`absolute -top-4 -right-4 w-20 h-20 ${bgClass} rounded-full blur-xl`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
        </div>
      </a>
    </ScrollReveal>
  );
};
