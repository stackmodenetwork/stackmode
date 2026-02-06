import { Zap, Target, Shield, ArrowRight, Brain, Rocket, BarChart3, Eye, TrendingUp, Code } from 'lucide-react';

interface StackFinderPromoProps {
  variant?: 'home' | 'trading' | 'coding';
}

const variantConfig = {
  home: {
    color: 'cyan',
    gradientFrom: 'from-cyan-500/10',
    gradientTo: 'to-purple-500/10',
    borderColor: 'border-cyan-500/40',
    hoverBorder: 'group-hover:border-cyan-400',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    bgGlow: 'bg-cyan-500/10',
    iconBg: 'bg-cyan-500/20',
    textColor: 'text-cyan-400',
    btnBg: 'bg-cyan-500',
    pillBg: 'bg-cyan-500/10',
    pillBorder: 'border-cyan-500/30',
    headline: 'Get StackFinder FREE When You Join',
    description: 'Academy members get instant access to the StackFinder suite — AI watchlists, Sector IQ rankings, smart calculators, and the Stackmode Scout chatbot. Everything you need to trade smarter.',
    features: [
      { icon: Eye, label: 'AI Watchlist' },
      { icon: BarChart3, label: 'Sector IQ' },
      { icon: Brain, label: 'Scout AI' },
    ],
    ctaText: 'Join & Get Access',
    tagline: 'Included FREE',
  },
  trading: {
    color: 'primary',
    gradientFrom: 'from-primary/10',
    gradientTo: 'to-emerald-500/10',
    borderColor: 'border-primary/40',
    hoverBorder: 'group-hover:border-primary',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
    bgGlow: 'bg-primary/10',
    iconBg: 'bg-primary/20',
    textColor: 'text-primary',
    btnBg: 'bg-primary',
    pillBg: 'bg-primary/10',
    pillBorder: 'border-primary/30',
    headline: 'Markets Made Simple',
    description: "Don't have time to watch charts all day? Just check my curated watchlist and Sector IQ — they show you exactly which stocks and sectors are moving right now. No analysis paralysis, just clear signals.",
    features: [
      { icon: Eye, label: 'My Watchlist' },
      { icon: TrendingUp, label: 'Sector IQ' },
      { icon: Target, label: 'Clear Signals' },
    ],
    ctaText: 'Get Market Intel',
    tagline: 'FREE with Academy',
  },
  coding: {
    color: 'violet',
    gradientFrom: 'from-violet-500/10',
    gradientTo: 'to-cyan-500/10',
    borderColor: 'border-violet-500/40',
    hoverBorder: 'group-hover:border-violet-400',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    bgGlow: 'bg-violet-500/10',
    iconBg: 'bg-violet-500/20',
    textColor: 'text-violet-400',
    btnBg: 'bg-violet-500',
    pillBg: 'bg-violet-500/10',
    pillBorder: 'border-violet-500/30',
    headline: 'See What You Can Build',
    description: "The StackFinder is a real SaaS tool I built using the same skills taught in the Academy. AI watchlists, smart calculators, live market data — you'll learn to build products like this.",
    features: [
      { icon: Code, label: 'Real SaaS' },
      { icon: Brain, label: 'AI Integration' },
      { icon: Zap, label: 'Live Data' },
    ],
    ctaText: 'Learn To Build This',
    tagline: 'Built with Academy Skills',
  },
};

export const StackFinderPromo = ({ variant = 'home' }: StackFinderPromoProps) => {
  const config = variantConfig[variant];
  
  return (
    <a 
      href="https://whop.com/stackmode-academy/educationalservice/"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div 
        className={`relative bg-gradient-to-r ${config.gradientFrom} via-card ${config.gradientTo} ${config.borderColor} ${config.hoverBorder} ${config.hoverShadow} border-2 rounded-xl p-4 sm:p-5 overflow-hidden transition-all duration-300`}
      >
        {/* Subtle background glow */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${config.bgGlow} rounded-full blur-2xl`} />
        
        <div className="relative z-10">
          {/* Compact Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg ${config.iconBg} flex items-center justify-center`}>
                <Brain size={16} className={config.textColor} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">The StackFinder</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground">AI-Powered Market Intelligence</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-1.5 ${config.pillBg} ${config.pillBorder} border rounded-full px-2.5 py-1`}>
              <span className={`w-1.5 h-1.5 ${config.textColor.replace('text-', 'bg-')} rounded-full animate-pulse`} />
              <span className={`text-[10px] font-bold ${config.textColor}`}>LIVE</span>
            </div>
          </div>
          
          {/* Dynamic Hook */}
          <div className="mb-3">
            <p className={`text-sm font-bold ${config.textColor} mb-1`}>{config.headline}</p>
            <p className="text-sm text-foreground/80 leading-snug">
              {config.description}
            </p>
          </div>
          
          {/* Feature Pills - Inline */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {config.features.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 ${config.pillBg} ${config.pillBorder} border rounded-full px-2 py-0.5`}
              >
                <feature.icon size={10} className={config.textColor} />
                <span className="text-[10px] text-foreground/80">{feature.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className={`flex items-center gap-2 ${config.btnBg} text-background font-bold text-sm px-4 py-2 rounded-lg transition-all group-hover:gap-3`}>
              <Rocket size={14} />
              <span>{config.ctaText}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground line-through">$200/mo</span>
              <span className={`${config.textColor} font-bold`}>{config.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default StackFinderPromo;
