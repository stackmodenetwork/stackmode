import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Zap, Bot, BarChart3, ArrowRight, Check, Briefcase, Laptop, AlertTriangle, Sparkles, Trophy, Frown, Clock, ChartNoAxesColumnDecreasing, UserRound, Smile, Palmtree, ChartNoAxesCombined, Target, Flame, ShieldAlert, TrendingDown as TrendingDownIcon, Coins, Rocket, Crown, Heart } from 'lucide-react';

export const ReturnsComparisonChart = () => {
  const [employeeHovered, setEmployeeHovered] = useState(false);
  const [investorHovered, setInvestorHovered] = useState(false);

  return (
    <motion.div 
      className="relative bg-gradient-to-br from-card via-card/95 to-background border-2 border-primary/30 rounded-2xl overflow-hidden" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
    >

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 border-b border-border/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <BarChart3 size={20} className="text-primary" />
            </motion.div>
            <div>
              <h3 className="text-foreground font-bold text-lg">The Financial Reality Check</h3>
              <p className="text-muted-foreground text-xs">Same 5 years. Different decisions. Different life.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Get Started Today!</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Side by Side Comparison */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          
          {/* Employee Column */}
          <motion.div 
            className="relative bg-gradient-to-br from-destructive/5 to-destructive/10 border-2 border-destructive/30 rounded-xl p-4 overflow-hidden group/employee" 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            onMouseEnter={() => setEmployeeHovered(true)}
            onMouseLeave={() => setEmployeeHovered(false)}
          >
            {/* Animated warning pulse when hovered */}
            <AnimatePresence>
              {employeeHovered && (
                <motion.div 
                  className="absolute inset-0 bg-destructive/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </AnimatePresence>
            
            {/* Draining money animation */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-destructive/20"
                  initial={{ top: '-20%', right: `${20 + i * 25}%`, opacity: 0 }}
                  animate={{ 
                    top: '120%', 
                    opacity: [0, 0.5, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity, 
                    delay: i * 1.5,
                    ease: 'linear'
                  }}
                >
                  <DollarSign size={20} />
                </motion.div>
              ))}
            </div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,hsl(var(--destructive)/0.1)_10px,hsl(var(--destructive)/0.1)_20px)]" />
            
            {/* Header */}
            <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-destructive/20">
              <motion.div 
                className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center"
                animate={employeeHovered ? { scale: [1, 0.95, 1] } : {}}
                transition={{ duration: 0.5, repeat: employeeHovered ? Infinity : 0 }}
              >
                <Briefcase size={24} className="text-destructive" />
              </motion.div>
              <div>
                <h4 className="text-foreground font-bold">Average Employee</h4>
                <p className="text-destructive text-xs">$40K/year job • Trading time for money</p>
              </div>
              <motion.div 
                className="absolute -top-2 -right-2 bg-destructive/20 border border-destructive/40 text-destructive text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShieldAlert size={10} />
                AT RISK
              </motion.div>
            </div>

            {/* Stats */}
            <div className="relative space-y-3">
              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-destructive/20"
                whileHover={{ x: 3, borderColor: 'hsl(var(--destructive)/0.5)' }}
              >
                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-destructive" />
                  <span className="text-sm text-muted-foreground">Monthly Income</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">$2,800</div>
                  <div className="text-[10px] text-destructive">Single paycheck</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-destructive/20"
                whileHover={{ x: 3, borderColor: 'hsl(var(--destructive)/0.5)' }}
              >
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-destructive" />
                  <span className="text-sm text-muted-foreground">Total Debt</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-destructive">$38,000</div>
                  <div className="text-[10px] text-destructive flex items-center gap-1">
                    <AlertTriangle size={10} /> Crushing debt
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-destructive/20"
                whileHover={{ x: 3, borderColor: 'hsl(var(--destructive)/0.5)' }}
              >
                <div className="flex items-center gap-2">
                  <PiggyBank size={16} className="text-destructive" />
                  <span className="text-sm text-muted-foreground">Savings</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">$400</div>
                  <div className="text-[10px] text-destructive">1 week buffer</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-destructive/20"
                whileHover={{ x: 3, borderColor: 'hsl(var(--destructive)/0.5)' }}
              >
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} className="text-destructive" />
                  <span className="text-sm text-muted-foreground">Monthly Left</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-destructive">-$200</div>
                  <div className="text-[10px] text-destructive">Going backwards</div>
                </div>
              </motion.div>
            </div>

            {/* Lifestyle */}
            <div className="relative mt-4 pt-3 border-t border-destructive/20">
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <motion.div className="bg-destructive/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Stress</div>
                  <div className="font-bold text-destructive flex items-center justify-center gap-1">
                    <Frown size={12} /> High
                  </div>
                </motion.div>
                <motion.div className="bg-destructive/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Freedom</div>
                  <div className="font-bold text-destructive flex items-center justify-center gap-1">
                    <Clock size={12} /> None
                  </div>
                </motion.div>
                <motion.div className="bg-destructive/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Growth</div>
                  <div className="font-bold text-destructive flex items-center justify-center gap-1">
                    <ChartNoAxesColumnDecreasing size={12} /> 2%/yr
                  </div>
                </motion.div>
                <motion.div className="bg-destructive/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Retire At</div>
                  <div className="font-bold text-destructive flex items-center justify-center gap-1">
                    <UserRound size={12} /> 67
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Income Source */}
            <div className="relative mt-4 flex justify-center">
              <motion.div 
                className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Briefcase size={20} className="text-destructive mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Only Income</div>
                <div className="text-sm font-bold text-destructive">9-5 Job</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stackmode Investor Column */}
          <motion.div 
            className="relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/40 rounded-xl p-4 overflow-hidden group/investor" 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            onMouseEnter={() => setInvestorHovered(true)}
            onMouseLeave={() => setInvestorHovered(false)}
          >
            {/* Animated success pulse when hovered */}
            <AnimatePresence>
              {investorHovered && (
                <motion.div 
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.05, 0.15, 0.05] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </AnimatePresence>
            
            {/* Rising money animation - money going UP */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary/30"
                  initial={{ bottom: '-20%', left: `${15 + i * 20}%`, opacity: 0 }}
                  animate={{ 
                    bottom: '120%', 
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: 'easeOut'
                  }}
                >
                  <Coins size={18} />
                </motion.div>
              ))}
            </div>
            
            {/* Success glow */}
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Bottom glow */}
            <motion.div 
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
            
            {/* Header */}
            <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-primary/20">
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                animate={investorHovered ? { scale: [1, 1.1, 1], rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.8, repeat: investorHovered ? Infinity : 0 }}
              >
                <Rocket size={24} className="text-primary" />
              </motion.div>
              <div>
                <h4 className="text-foreground font-bold">Stackmode Investor</h4>
                <p className="text-primary text-xs">AI Business + Trading • Money works for you</p>
              </div>
              <motion.div 
                className="absolute -top-2 -right-2 bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1" 
                animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 15px rgba(34,197,94,0.5)', '0 0 0px rgba(34,197,94,0)'] }} 
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown size={10} />
                WINNING
              </motion.div>
            </div>

            {/* Stats */}
            <div className="relative space-y-3">
              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30"
                whileHover={{ x: 3, borderColor: 'hsl(var(--primary))' }}
              >
                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Monthly Income</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">$12,500</div>
                  <div className="text-[10px] text-primary">Multiple streams</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30"
                whileHover={{ x: 3, borderColor: 'hsl(var(--primary))' }}
              >
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
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30"
                whileHover={{ x: 3, borderColor: 'hsl(var(--primary))' }}
              >
                <div className="flex items-center gap-2">
                  <PiggyBank size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Savings</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">$85,000</div>
                  <div className="text-[10px] text-primary">6+ months runway</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/30"
                whileHover={{ x: 3, borderColor: 'hsl(var(--primary))' }}
              >
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Monthly Left</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-lg">+$7,500</div>
                  <div className="text-[10px] text-primary">Growing wealth</div>
                </div>
              </motion.div>
            </div>

            {/* Lifestyle */}
            <div className="relative mt-4 pt-3 border-t border-primary/20">
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <motion.div className="bg-primary/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Stress</div>
                  <div className="font-bold text-primary flex items-center justify-center gap-1">
                    <Smile size={12} /> Low
                  </div>
                </motion.div>
                <motion.div className="bg-primary/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Freedom</div>
                  <div className="font-bold text-primary flex items-center justify-center gap-1">
                    <Palmtree size={12} /> Full
                  </div>
                </motion.div>
                <motion.div className="bg-primary/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Growth</div>
                  <div className="font-bold text-primary flex items-center justify-center gap-1">
                    <ChartNoAxesCombined size={12} /> 40%+
                  </div>
                </motion.div>
                <motion.div className="bg-primary/10 rounded-lg p-2" whileHover={{ scale: 1.05 }}>
                  <div className="text-muted-foreground">Retire At</div>
                  <div className="font-bold text-primary flex items-center justify-center gap-1">
                    <Target size={12} /> Anytime
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Income Sources */}
            <div className="relative mt-4 grid grid-cols-4 gap-2">
              {[
                { icon: Bot, label: 'AI Biz', value: '$4.5K' }, 
                { icon: BarChart3, label: 'Trading', value: '$5K' }, 
                { icon: Laptop, label: 'Affiliate', value: '$2K' }, 
                { icon: DollarSign, label: 'Dividends', value: '$1K' }
              ].map((source, i) => (
                <motion.div 
                  key={source.label} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.3 + i * 0.1 }} 
                  className="bg-primary/10 border border-primary/30 rounded-lg p-2 text-center"
                  whileHover={{ scale: 1.08, borderColor: 'hsl(var(--primary))' }}
                >
                  <source.icon size={14} className="text-primary mx-auto mb-1" />
                  <div className="text-[9px] text-muted-foreground">{source.label}</div>
                  <div className="text-[10px] font-bold text-primary">{source.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparison Badge */}
        <motion.div 
          className="flex justify-center mb-5" 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-destructive/20 via-primary/30 to-primary/20 border border-primary/40 rounded-full px-6 py-3 flex items-center gap-4"
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Employee</div>
              <div className="text-lg font-bold text-destructive">-$200/mo</div>
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
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border/30">
          <motion.a 
            href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-primary/25 transition-all" 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={18} />
            <span>Learn How To Get In Stackmode</span>
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Disclaimer */}
        <p className="text-[9px] text-muted-foreground/50 text-center mt-3">
          Results based on active member data. Individual results vary based on effort and market conditions.
        </p>
      </div>
    </motion.div>
  );
};

export default ReturnsComparisonChart;