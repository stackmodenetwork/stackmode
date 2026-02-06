import { motion } from 'framer-motion';
import { BarChart3, Zap, TrendingUp, Target, Shield, ArrowRight, Sparkles, Activity, DollarSign, Brain, Rocket, Crown } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

interface StackFinderPromoProps {
  variant?: 'home' | 'trading';
}

export const StackFinderPromo = ({ variant = 'home' }: StackFinderPromoProps) => {
  const isTrading = variant === 'trading';
  
  // Theme colors based on variant
  const accentClass = isTrading ? 'text-emerald-400' : 'text-cyan-400';
  const bgClass = isTrading ? 'bg-emerald-500/10' : 'bg-cyan-500/10';
  const gradientFrom = isTrading ? 'from-emerald-500/20' : 'from-cyan-500/20';
  const gradientBorder = isTrading ? 'border-emerald-500/40' : 'border-cyan-500/40';
  const hoverBorder = isTrading ? 'hsl(142, 76%, 36%)' : 'hsl(185, 100%, 50%)';
  
  return (
    <ScrollReveal>
      <a 
        href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`relative bg-gradient-to-br ${isTrading ? 'from-primary/10 via-card/90 to-emerald-500/10' : 'from-cyan-500/10 via-card/90 to-purple-500/10'} border-2 ${isTrading ? 'border-primary/40' : 'border-cyan-500/40'} rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 overflow-hidden transition-all duration-300 ${isTrading ? 'group-hover:border-primary group-hover:shadow-[0_0_80px_rgba(34,197,94,0.6)]' : 'group-hover:border-cyan-400 group-hover:shadow-[0_0_80px_rgba(6,182,212,0.6)]'} group-hover:scale-[1.01]`}>
          
          {/* Animated background elements */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${isTrading ? 'from-primary/20' : 'from-cyan-500/20'} to-transparent rounded-full blur-3xl opacity-60 hidden sm:block`} />
          <div className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr ${isTrading ? 'from-emerald-400/15' : 'from-purple-400/15'} to-transparent rounded-full blur-3xl opacity-50 hidden sm:block`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent_70%)]" />
          
          {/* Floating money particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/20"
                initial={{ y: '100%', x: `${15 + i * 18}%`, opacity: 0 }}
                animate={{ 
                  y: '-20%', 
                  opacity: [0, 0.6, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6 + i, 
                  repeat: Infinity, 
                  delay: i * 1.2,
                  ease: 'linear'
                }}
              >
                <DollarSign size={24} />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10">
            {/* Top Badge Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <motion.div 
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradientFrom} to-primary/20 border ${gradientBorder} rounded-full px-4 py-2`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 20px rgba(34,197,94,0.4)', '0 0 0px rgba(34,197,94,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  <Brain size={16} className={accentClass} />
                </motion.div>
                <span className={`${accentClass} text-xs sm:text-sm font-bold uppercase tracking-wide`}>AI-Powered • Real-Time • Automated</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 py-1.5"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown size={14} className="text-primary" />
                <span className="text-xs font-bold text-primary">EXCLUSIVE TOOL</span>
              </motion.div>
            </div>
            
            {/* Main Headline - The Hook */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black text-foreground mb-3 leading-[1.1]">
                <span className="block">Stop Losing Money</span>
                <span className="block">Guessing Trades.</span>
                <span className={`block ${isTrading ? "bg-gradient-to-r from-emerald-400 via-primary to-emerald-300" : "bg-gradient-to-r from-cyan-400 via-primary to-purple-400"} bg-clip-text text-transparent`}>
                  Start Using The StackFinder.
                </span>
              </h2>
            </motion.div>
            
            {/* Subheadline - The Pain Point */}
            <motion.p 
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-6 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-foreground font-semibold">Every losing trade hurts.</span> Bad entries. Wrong strikes. Theta decay eating your profits. 
              The StackFinder eliminates the guesswork with <span className="text-primary font-semibold">AI-calculated entries, optimal strike selection, and real-time market intelligence</span> — 
              so you can trade with confidence, not hope.
            </motion.p>
            
            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { value: '149%', label: 'Avg ROI', icon: TrendingUp },
                { value: '$785+', label: 'Avg Profit', icon: DollarSign },
                { value: '24/7', label: 'AI Active', icon: Activity },
                { value: '< 5s', label: 'Analysis', icon: Zap },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-background/60 backdrop-blur-sm border border-primary/30 rounded-xl p-3 sm:p-4 text-center"
                  whileHover={{ scale: 1.05, borderColor: hoverBorder }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <stat.icon size={18} className={`${accentClass} mx-auto mb-1`} />
                  <div className="text-xl sm:text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { icon: Activity, label: 'Live Volume Tracking' },
                { icon: Target, label: 'Smart Strike Solver' },
                { icon: Shield, label: 'Theta Decay Protection' },
                { icon: BarChart3, label: 'Profit Calculator' },
                { icon: Sparkles, label: 'AI Market Scout' },
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
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Main CTA Button */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${isTrading ? 'from-emerald-500' : 'from-cyan-500'} to-primary rounded-xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                
                <div className={`relative flex items-center gap-3 bg-gradient-to-r ${isTrading ? 'from-emerald-500 to-emerald-400 group-hover:from-emerald-400 group-hover:to-emerald-300 shadow-emerald-500/40' : 'from-cyan-500 to-cyan-400 group-hover:from-cyan-400 group-hover:to-cyan-300 shadow-cyan-500/40'} text-background font-black text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-2xl transition-all`}>
                  <Rocket size={24} />
                  <span>Get The StackFinder Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
              
              {/* Price Tag */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="text-muted-foreground text-xs line-through">$200/month value</span>
                <span className="text-primary font-bold text-lg">Included FREE @ $50/mo</span>
                <span className="text-xs text-muted-foreground">With Stackmode Network</span>
              </motion.div>
            </div>
            
            {/* Urgency Line */}
            <motion.div 
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">127 traders</span> joined this week alone
              </span>
            </motion.div>
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
};

export default StackFinderPromo;
