import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target, Flame, ArrowRight, DollarSign } from 'lucide-react';

export const ReturnsComparisonChart = () => {
  const [selectedScenario, setSelectedScenario] = useState<'conservative' | 'average' | 'aggressive'>('average');

  // Different scenarios based on trading approach
  const scenarios = {
    conservative: { label: 'Part-Time Trader', annualReturn: 25, color: 'cyan' },
    average: { label: 'Active Trader', annualReturn: 40, color: 'primary' },
    aggressive: { label: 'Full-Time Trader', annualReturn: 60, color: 'emerald' },
  };

  const currentScenario = scenarios[selectedScenario];
  const sp500Return = 10;

  // Calculate growth over time
  const calculateGrowth = (initial: number, rate: number, years: number) => {
    return initial * Math.pow(1 + rate / 100, years);
  };

  const startingCapital = 5000;
  const years = [1, 2, 3, 4, 5];
  
  const stackmodeValues = years.map(y => Math.round(calculateGrowth(startingCapital, currentScenario.annualReturn, y)));
  const sp500Values = years.map(y => Math.round(calculateGrowth(startingCapital, sp500Return, y)));
  
  const finalStackmode = stackmodeValues[4];
  const finalSP500 = sp500Values[4];
  const multiplier = (finalStackmode / finalSP500).toFixed(1);
  const difference = finalStackmode - finalSP500;

  return (
    <motion.div
      className="relative bg-gradient-to-br from-card via-card/95 to-primary/5 border-2 border-primary/40 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400" />
      
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Flame size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-lg">Real Returns Calculator</h3>
                <p className="text-muted-foreground text-xs">$5,000 starting capital • 5 year projection</p>
              </div>
            </div>
          </div>

          {/* Scenario selector */}
          <div className="flex gap-1.5 bg-background/50 rounded-lg p-1 border border-border/50">
            {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedScenario(key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedScenario === key
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {scenarios[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Main comparison visual */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* S&P 500 side */}
          <div className="bg-background/40 border border-border/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-orange-400/80" />
              <span className="text-sm text-muted-foreground">S&P 500 Index</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              ${finalSP500.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 text-orange-400 text-sm">
              <TrendingUp size={14} />
              <span>+{sp500Return}%/yr avg</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Passive investing</p>
          </div>

          {/* Stackmode side */}
          <motion.div 
            className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 rounded-xl p-4 overflow-hidden"
            animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 30px rgba(34,197,94,0.3)', '0 0 0px rgba(34,197,94,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {multiplier}x MORE
              </motion.div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium">Stackmode Network</span>
            </div>
            <motion.div 
              className="text-2xl sm:text-3xl font-bold text-primary mb-1"
              key={finalStackmode}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              ${finalStackmode.toLocaleString()}
            </motion.div>
            <div className="flex items-center gap-1 text-primary text-sm">
              <Zap size={14} />
              <span>+{currentScenario.annualReturn}%/yr avg</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{currentScenario.label}</p>
          </motion.div>
        </div>

        {/* Year-by-year comparison bars */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Growth Timeline</span>
            <span className="text-primary font-medium">+${difference.toLocaleString()} difference</span>
          </div>
          
          {years.map((year, index) => {
            const stackmodeWidth = Math.min(100, (stackmodeValues[index] / stackmodeValues[4]) * 100);
            const sp500Width = Math.min(100, (sp500Values[index] / stackmodeValues[4]) * 100);
            
            return (
              <div key={year} className="relative">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground w-10">Yr {year}</span>
                  <div className="flex-1 relative h-6 bg-background/30 rounded overflow-hidden">
                    {/* S&P bar */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-orange-400/40 rounded-r"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sp500Width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                    {/* Stackmode bar */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-emerald-400 rounded-r"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stackmodeWidth}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    />
                    {/* Value label */}
                    <motion.span
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white drop-shadow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      ${stackmodeValues[index].toLocaleString()}
                    </motion.span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/30">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 bg-gradient-to-r from-primary to-emerald-400 rounded" />
              <span className="text-muted-foreground">Stackmode</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-2 bg-orange-400/60 rounded" />
              <span className="text-muted-foreground">S&P 500</span>
            </div>
          </div>
          
          <motion.a
            href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Target size={14} />
            <span>Start Trading Smarter</span>
            <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Disclaimer */}
        <p className="text-[9px] text-muted-foreground/60 text-center mt-3">
          Projections based on member performance data. Results vary. Trading involves risk. Not financial advice.
        </p>
      </div>
    </motion.div>
  );
};

export default ReturnsComparisonChart;
