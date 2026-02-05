import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, 
  Clock, Zap, Bot, BarChart3, ArrowRight, Check, X, 
  Briefcase, Laptop, Coffee, AlertTriangle, Sparkles, Trophy
} from 'lucide-react';

export const ReturnsComparisonChart = () => {
  const [showStackmode, setShowStackmode] = useState(false);
  const [animatedIncome, setAnimatedIncome] = useState(0);

  // Auto-toggle between views for impact
  useEffect(() => {
    const timer = setInterval(() => {
      setShowStackmode(prev => !prev);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animate income counter
  useEffect(() => {
    const targetIncome = showStackmode ? 12500 : 2800;
    const duration = 1000;
    const steps = 30;
    const increment = (targetIncome - animatedIncome) / steps;
    
    let current = animatedIncome;
    const interval = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= targetIncome) || (increment < 0 && current <= targetIncome)) {
        setAnimatedIncome(targetIncome);
        clearInterval(interval);
      } else {
        setAnimatedIncome(Math.round(current));
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [showStackmode]);

  const employeeStats = {
    title: "Average Employee",
    subtitle: "$40K/year job",
    monthlyIncome: 2800,
    debt: 38000,
    savings: 400,
    monthlyLeft: -200,
    stress: "High",
    freedom: "None",
    growth: "2% raises",
    retirement: "67 years old",
    color: "red",
    icon: Briefcase,
  };

  const stackmodeStats = {
    title: "Stackmode Investor",
    subtitle: "AI Business + Trading",
    monthlyIncome: 12500,
    debt: 0,
    savings: 85000,
    monthlyLeft: 7500,
    stress: "Low",
    freedom: "Full",
    growth: "40%+ annually",
    retirement: "Any time",
    color: "primary",
    icon: Laptop,
  };

  const currentStats = showStackmode ? stackmodeStats : employeeStats;

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
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <BarChart3 size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-foreground font-bold text-lg">The Financial Reality Check</h3>
              <p className="text-muted-foreground text-xs">Same 5 years. Different decisions. Different life.</p>
            </div>
          </div>
          
          {/* Toggle */}
          <div className="flex items-center gap-2 bg-background/60 rounded-lg p-1 border border-border/50">
            <button
              onClick={() => setShowStackmode(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                !showStackmode 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase size={12} />
              Employee
            </button>
            <button
              onClick={() => setShowStackmode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                showStackmode 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Zap size={12} />
              Stackmode
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {/* Monthly Income */}
          <motion.div 
            className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
              showStackmode 
                ? 'bg-primary/5 border-primary/40' 
                : 'bg-red-500/5 border-red-500/30'
            }`}
            layout
          >
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={14} className={showStackmode ? 'text-primary' : 'text-red-400'} />
              <span className="text-xs text-muted-foreground">Monthly Income</span>
            </div>
            <motion.div 
              className={`text-2xl font-bold ${showStackmode ? 'text-primary' : 'text-foreground'}`}
              key={animatedIncome}
            >
              ${animatedIncome.toLocaleString()}
            </motion.div>
            <div className={`text-xs mt-1 ${showStackmode ? 'text-primary/70' : 'text-muted-foreground'}`}>
              {showStackmode ? 'Multiple streams' : 'Single paycheck'}
            </div>
            {showStackmode && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full"
              >
                +346%
              </motion.div>
            )}
          </motion.div>

          {/* Debt */}
          <motion.div 
            className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
              showStackmode 
                ? 'bg-primary/5 border-primary/40' 
                : 'bg-red-500/5 border-red-500/30'
            }`}
            layout
          >
            <div className="flex items-center gap-2 mb-2">
              <CreditCard size={14} className={showStackmode ? 'text-primary' : 'text-red-400'} />
              <span className="text-xs text-muted-foreground">Total Debt</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={showStackmode ? 'no-debt' : 'debt'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-2xl font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}
              >
                {showStackmode ? '$0' : '$38,000'}
              </motion.div>
            </AnimatePresence>
            <div className={`text-xs mt-1 flex items-center gap-1 ${showStackmode ? 'text-primary/70' : 'text-red-400/70'}`}>
              {showStackmode ? (
                <><Check size={10} /> Debt free</>
              ) : (
                <><AlertTriangle size={10} /> Crushing debt</>
              )}
            </div>
          </motion.div>

          {/* Savings */}
          <motion.div 
            className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
              showStackmode 
                ? 'bg-primary/5 border-primary/40' 
                : 'bg-red-500/5 border-red-500/30'
            }`}
            layout
          >
            <div className="flex items-center gap-2 mb-2">
              <PiggyBank size={14} className={showStackmode ? 'text-primary' : 'text-red-400'} />
              <span className="text-xs text-muted-foreground">Savings</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={showStackmode ? 'high-savings' : 'low-savings'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-2xl font-bold ${showStackmode ? 'text-primary' : 'text-foreground'}`}
              >
                {showStackmode ? '$85,000' : '$400'}
              </motion.div>
            </AnimatePresence>
            <div className={`text-xs mt-1 ${showStackmode ? 'text-primary/70' : 'text-muted-foreground'}`}>
              {showStackmode ? '6+ months runway' : '1 week buffer'}
            </div>
          </motion.div>

          {/* Monthly Surplus */}
          <motion.div 
            className={`relative p-4 rounded-xl border-2 transition-all duration-500 ${
              showStackmode 
                ? 'bg-primary/5 border-primary/40' 
                : 'bg-red-500/5 border-red-500/30'
            }`}
            layout
          >
            <div className="flex items-center gap-2 mb-2">
              {showStackmode ? (
                <TrendingUp size={14} className="text-primary" />
              ) : (
                <TrendingDown size={14} className="text-red-400" />
              )}
              <span className="text-xs text-muted-foreground">Monthly Left</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={showStackmode ? 'surplus' : 'deficit'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-2xl font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}
              >
                {showStackmode ? '+$7,500' : '-$200'}
              </motion.div>
            </AnimatePresence>
            <div className={`text-xs mt-1 ${showStackmode ? 'text-primary/70' : 'text-red-400/70'}`}>
              {showStackmode ? 'Growing wealth' : 'Going backwards'}
            </div>
          </motion.div>
        </div>

        {/* Lifestyle Comparison */}
        <div className={`rounded-xl p-4 mb-5 transition-all duration-500 ${
          showStackmode ? 'bg-primary/5 border border-primary/20' : 'bg-red-500/5 border border-red-500/20'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className={`text-xs mb-1 ${showStackmode ? 'text-primary' : 'text-muted-foreground'}`}>Stress Level</div>
              <div className={`font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}>
                {showStackmode ? '😌 Low' : '😰 High'}
              </div>
            </div>
            <div>
              <div className={`text-xs mb-1 ${showStackmode ? 'text-primary' : 'text-muted-foreground'}`}>Time Freedom</div>
              <div className={`font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}>
                {showStackmode ? '🏖️ Full' : '⏰ None'}
              </div>
            </div>
            <div>
              <div className={`text-xs mb-1 ${showStackmode ? 'text-primary' : 'text-muted-foreground'}`}>Annual Growth</div>
              <div className={`font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}>
                {showStackmode ? '📈 40%+' : '📉 2%'}
              </div>
            </div>
            <div>
              <div className={`text-xs mb-1 ${showStackmode ? 'text-primary' : 'text-muted-foreground'}`}>Retire At</div>
              <div className={`font-bold ${showStackmode ? 'text-primary' : 'text-red-400'}`}>
                {showStackmode ? '🎯 Anytime' : '👴 67'}
              </div>
            </div>
          </div>
        </div>

        {/* Income Sources Visual */}
        <div className="mb-5">
          <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
            <Sparkles size={12} className="text-primary" />
            Income Sources
          </div>
          
          <AnimatePresence mode="wait">
            {showStackmode ? (
              <motion.div
                key="stackmode-sources"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2"
              >
                {[
                  { icon: Bot, label: 'AI Business', value: '$4,500/mo' },
                  { icon: BarChart3, label: 'Trading', value: '$5,000/mo' },
                  { icon: Laptop, label: 'Affiliate', value: '$2,000/mo' },
                  { icon: DollarSign, label: 'Dividends', value: '$1,000/mo' },
                ].map((source, i) => (
                  <motion.div
                    key={source.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-center"
                  >
                    <source.icon size={16} className="text-primary mx-auto mb-1" />
                    <div className="text-[10px] text-muted-foreground">{source.label}</div>
                    <div className="text-xs font-bold text-primary">{source.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="employee-sources"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center justify-center gap-4 py-4"
              >
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                  <Briefcase size={20} className="text-red-400 mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">9-5 Job</div>
                  <div className="text-sm font-bold text-red-400">$2,800/mo</div>
                  <div className="text-[10px] text-red-400/60 mt-1">Only income source</div>
                </div>
                <div className="text-muted-foreground/50">
                  <X size={24} />
                </div>
                <div className="bg-muted/30 border border-border/30 rounded-lg p-4 text-center opacity-50">
                  <Coffee size={20} className="text-muted-foreground mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">Side Hustle?</div>
                  <div className="text-sm font-bold text-muted-foreground">$0</div>
                  <div className="text-[10px] text-muted-foreground/60 mt-1">No time/energy</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/30">
          <div className="flex items-center gap-2 text-sm">
            <Trophy size={16} className="text-primary" />
            <span className="text-muted-foreground">Join 500+ members who made the switch</span>
          </div>
          
          <motion.a
            href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-primary/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={16} />
            <span>Become a Stackmode Investor</span>
            <ArrowRight size={16} />
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
