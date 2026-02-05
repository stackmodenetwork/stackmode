import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Zap, Bot, BarChart3, ArrowRight, Check, X, Briefcase, Laptop, AlertTriangle, Sparkles, Trophy } from 'lucide-react';
export const ReturnsComparisonChart = () => {
  return <motion.div className="relative bg-gradient-to-br from-card via-card/95 to-background border-2 border-primary/30 rounded-2xl overflow-hidden" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 border-b border-border/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <BarChart3 size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-foreground font-bold text-lg">The Financial Reality Check</h3>
              <p className="text-muted-foreground text-xs">Same 5 years. Different decisions. Different life.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground"> Get Started Today!  </span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Side by Side Comparison */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          
          {/* Employee Column */}
          <motion.div className="relative bg-gradient-to-br from-red-500/5 to-red-500/10 border-2 border-red-500/30 rounded-xl p-4 overflow-hidden" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
            {/* Sad overlay pattern */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.1)_10px,rgba(239,68,68,0.1)_20px)]" />
            
            {/* Header */}
            <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-red-500/20">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <Briefcase size={24} className="text-red-400" />
              </div>
              <div>
                <h4 className="text-foreground font-bold">Average Employee</h4>
                <p className="text-red-400 text-xs">$40K/year job • Trading time for money</p>
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold px-2 py-1 rounded-full">
                😰 STRUGGLING
              </div>
            </div>

            {/* Stats */}
            <div className="relative space-y-3">
              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-red-400" />
                  <span className="text-sm text-muted-foreground">Monthly Income</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">$2,800</div>
                  <div className="text-[10px] text-red-400">Single paycheck</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-red-400" />
                  <span className="text-sm text-muted-foreground">Total Debt</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-400">$38,000</div>
                  <div className="text-[10px] text-red-400 flex items-center gap-1">
                    <AlertTriangle size={10} /> Crushing debt
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-2">
                  <PiggyBank size={16} className="text-red-400" />
                  <span className="text-sm text-muted-foreground">Savings</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">$400</div>
                  <div className="text-[10px] text-red-400">1 week buffer</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} className="text-red-400" />
                  <span className="text-sm text-muted-foreground">Monthly Left</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-400">-$200</div>
                  <div className="text-[10px] text-red-400">Going backwards</div>
                </div>
              </div>
            </div>

            {/* Lifestyle */}
            <div className="relative mt-4 pt-3 border-t border-red-500/20">
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-red-500/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Stress</div>
                  <div className="font-bold text-red-400">😰 High</div>
                </div>
                <div className="bg-red-500/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Freedom</div>
                  <div className="font-bold text-red-400">⏰ None</div>
                </div>
                <div className="bg-red-500/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Growth</div>
                  <div className="font-bold text-red-400">📉 2%/yr</div>
                </div>
                <div className="bg-red-500/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Retire At</div>
                  <div className="font-bold text-red-400">👴 67</div>
                </div>
              </div>
            </div>

            {/* Income Source */}
            <div className="relative mt-4 flex justify-center">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                <Briefcase size={20} className="text-red-400 mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Only Income</div>
                <div className="text-sm font-bold text-red-400">9-5 Job</div>
              </div>
            </div>
          </motion.div>

          {/* Stackmode Investor Column */}
          <motion.div className="relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/40 rounded-xl p-4 overflow-hidden" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            {/* Success glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            
            {/* Header */}
            <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Laptop size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-bold">Stackmode Investor</h4>
                <p className="text-primary text-xs">AI Business + Trading • Money works for you</p>
              </div>
              <motion.div className="absolute -top-2 -right-2 bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold px-2 py-1 rounded-full" animate={{
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                🚀 THRIVING
              </motion.div>
            </div>

            {/* Stats */}
            <div className="relative space-y-3">
              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Monthly Income</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">$12,500</div>
                  <div className="text-[10px] text-primary">Multiple streams</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Total Debt</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">$0</div>
                  <div className="text-[10px] text-primary flex items-center gap-1">
                    <Check size={10} /> Debt free
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2">
                  <PiggyBank size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Savings</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">$85,000</div>
                  <div className="text-[10px] text-primary">6+ months runway</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Monthly Left</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">+$7,500</div>
                  <div className="text-[10px] text-primary">Growing wealth</div>
                </div>
              </div>
            </div>

            {/* Lifestyle */}
            <div className="relative mt-4 pt-3 border-t border-primary/20">
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-primary/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Stress</div>
                  <div className="font-bold text-primary">😌 Low</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Freedom</div>
                  <div className="font-bold text-primary">🏖️ Full</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Growth</div>
                  <div className="font-bold text-primary">📈 40%+</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <div className="text-muted-foreground">Retire At</div>
                  <div className="font-bold text-primary">🎯 Anytime</div>
                </div>
              </div>
            </div>

            {/* Income Sources */}
            <div className="relative mt-4 grid grid-cols-4 gap-2">
              {[{
              icon: Bot,
              label: 'AI Biz',
              value: '$4.5K'
            }, {
              icon: BarChart3,
              label: 'Trading',
              value: '$5K'
            }, {
              icon: Laptop,
              label: 'Affiliate',
              value: '$2K'
            }, {
              icon: DollarSign,
              label: 'Dividends',
              value: '$1K'
            }].map((source, i) => <motion.div key={source.label} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + i * 0.1
            }} className="bg-primary/10 border border-primary/30 rounded-lg p-2 text-center">
                  <source.icon size={14} className="text-primary mx-auto mb-1" />
                  <div className="text-[9px] text-muted-foreground">{source.label}</div>
                  <div className="text-[10px] font-bold text-primary">{source.value}</div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>

        {/* Comparison Badge */}
        <motion.div className="flex justify-center mb-5" initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4
      }}>
          <div className="bg-gradient-to-r from-red-500/20 via-primary/30 to-primary/20 border border-primary/40 rounded-full px-6 py-3 flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Employee</div>
              <div className="text-lg font-bold text-red-400">-$200/mo</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles size={16} className="text-primary mb-1" />
              <span className="text-xs text-primary font-bold">VS</span>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Stackmode</div>
              <div className="text-lg font-bold text-primary">+$7,500/mo</div>
            </div>
            <div className="border-l border-primary/30 pl-4">
              <div className="text-xs text-muted-foreground">Difference</div>
              <div className="text-lg font-bold text-primary">+$7,700</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border/30">
          <motion.a href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-primary/25 transition-all" whileHover={{
          scale: 1.03
        }} whileTap={{
          scale: 0.98
        }}>
            <Zap size={18} />
            <span>Become a Stackmode Investor</span>
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Disclaimer */}
        <p className="text-[9px] text-muted-foreground/50 text-center mt-3">
          Results based on active member data. Individual results vary based on effort and market conditions.
        </p>
      </div>
    </motion.div>;
};
export default ReturnsComparisonChart;