import { motion } from 'framer-motion';
import { Zap, Target, Shield, ArrowRight, Brain, Rocket, BarChart3 } from 'lucide-react';

interface StackFinderPromoProps {
  variant?: 'home' | 'trading';
}

export const StackFinderPromo = ({ variant = 'home' }: StackFinderPromoProps) => {
  const isTrading = variant === 'trading';
  
  return (
    <a 
      href="https://whop.com/stackmode-academy/educationalservice/"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <motion.div 
        className={`relative bg-gradient-to-r ${isTrading ? 'from-primary/10 via-card to-emerald-500/10 border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]' : 'from-cyan-500/10 via-card to-purple-500/10 border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]'} border-2 rounded-xl p-4 sm:p-5 overflow-hidden transition-all duration-300`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Subtle background glow */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${isTrading ? 'bg-primary/10' : 'bg-cyan-500/10'} rounded-full blur-2xl`} />
        
        <div className="relative z-10">
          {/* Compact Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg ${isTrading ? 'bg-primary/20' : 'bg-cyan-500/20'} flex items-center justify-center`}>
                <Brain size={16} className={isTrading ? 'text-primary' : 'text-cyan-400'} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">The StackFinder</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground">AI-Powered Trading Intelligence</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-1.5 ${isTrading ? 'bg-primary/20 border-primary/40' : 'bg-cyan-500/20 border-cyan-500/40'} border rounded-full px-2.5 py-1`}>
              <span className={`w-1.5 h-1.5 ${isTrading ? 'bg-primary' : 'bg-cyan-400'} rounded-full animate-pulse`} />
              <span className={`text-[10px] font-bold ${isTrading ? 'text-primary' : 'text-cyan-400'}`}>LIVE</span>
            </div>
          </div>
          
          {/* Main Hook - Compact */}
          <p className="text-sm sm:text-base text-foreground/90 mb-3 leading-snug">
            <span className="font-bold">Stop guessing entries.</span> Get AI-calculated strikes, 
            theta protection, and real-time profit targets — <span className={`${isTrading ? 'text-primary' : 'text-cyan-400'} font-semibold`}>all in one tool.</span>
          </p>
          
          {/* Feature Pills - Inline */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {[
              { icon: Target, label: 'Smart Strikes' },
              { icon: Shield, label: 'Theta Shield' },
              { icon: BarChart3, label: 'Profit Calc' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 ${isTrading ? 'bg-primary/10 border-primary/30' : 'bg-cyan-500/10 border-cyan-500/30'} border rounded-full px-2 py-0.5`}
              >
                <feature.icon size={10} className={isTrading ? 'text-primary' : 'text-cyan-400'} />
                <span className="text-[10px] text-foreground/80">{feature.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className={`flex items-center gap-2 ${isTrading ? 'bg-primary text-background' : 'bg-cyan-500 text-background'} font-bold text-sm px-4 py-2 rounded-lg transition-all group-hover:gap-3`}>
              <Rocket size={14} />
              <span>Launch StackFinder</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground line-through">$200/mo</span>
              <span className={`${isTrading ? 'text-primary' : 'text-cyan-400'} font-bold`}>FREE with Academy</span>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default StackFinderPromo;
