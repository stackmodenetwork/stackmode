import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Trophy, Zap, Users, Target, ArrowRight, Sparkles, Crown, BarChart3 } from 'lucide-react';

export const StackmodePerformanceChart = () => {
  const [animatedStackmode, setAnimatedStackmode] = useState(0);
  const [animatedSP500, setAnimatedSP500] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Animate counters when in view
  useEffect(() => {
    if (!isInView) return;
    
    const stackmodeTarget = 847;
    const sp500Target = 127;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      
      setAnimatedStackmode(Math.round(stackmodeTarget * eased));
      setAnimatedSP500(Math.round(sp500Target * eased));
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  // Chart data points for the animated lines
  const stackmodePoints = [0, 15, 35, 42, 78, 95, 120, 180, 250, 320, 410, 520, 650, 750, 847];
  const sp500Points = [0, 8, 12, 18, 25, 32, 40, 52, 65, 78, 90, 102, 112, 120, 127];
  
  const maxValue = 900;
  const chartHeight = 200;
  const chartWidth = 100;

  const generatePath = (points: number[]) => {
    const step = chartWidth / (points.length - 1);
    return points.map((val, i) => {
      const x = i * step;
      const y = chartHeight - (val / maxValue) * chartHeight;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-card via-card/95 to-primary/5 border-2 border-primary/40 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

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
              <h3 className="text-foreground font-bold text-lg">5-Year Performance Comparison</h3>
              <p className="text-muted-foreground text-xs">Stackmode Traders vs S&P 500 Index</p>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5"
            animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 15px rgba(34,197,94,0.3)', '0 0 0px rgba(34,197,94,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold">6.7x OUTPERFORMANCE</span>
          </motion.div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Main Chart Area */}
        <div className="relative mb-6">
          {/* Chart Container */}
          <div className="relative h-[220px] sm:h-[260px] bg-background/30 rounded-xl border border-border/30 p-4 overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-4 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-border/20 w-full" />
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-4 bottom-4 w-12 flex flex-col justify-between text-[10px] text-muted-foreground">
              <span>+900%</span>
              <span>+675%</span>
              <span>+450%</span>
              <span>+225%</span>
              <span>0%</span>
            </div>

            {/* Chart SVG */}
            <svg className="absolute left-14 right-4 top-4 bottom-4" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
              {/* S&P 500 Line - Draw first (below) */}
              <motion.path
                d={generatePath(sp500Points)}
                fill="none"
                stroke="rgba(239, 68, 68, 0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
              />
              
              {/* S&P 500 Area */}
              <motion.path
                d={`${generatePath(sp500Points)} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
                fill="url(#sp500Gradient)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              {/* Stackmode Line - Draw second (on top) */}
              <motion.path
                d={generatePath(stackmodePoints)}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              />
              
              {/* Stackmode Area */}
              <motion.path
                d={`${generatePath(stackmodePoints)} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
                fill="url(#stackmodeGradient)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="stackmodeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="sp500Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* End point markers */}
              <motion.circle
                cx={chartWidth}
                cy={chartHeight - (847 / maxValue) * chartHeight}
                r="5"
                fill="hsl(var(--primary))"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
              />
              <motion.circle
                cx={chartWidth}
                cy={chartHeight - (127 / maxValue) * chartHeight}
                r="4"
                fill="rgb(239, 68, 68)"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              />
            </svg>

            {/* Floating value labels at end points */}
            <motion.div
              className="absolute right-6 bg-primary text-background text-xs font-bold px-2 py-1 rounded-lg shadow-lg"
              style={{ top: '15%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              +{animatedStackmode}%
            </motion.div>
            
            <motion.div
              className="absolute right-6 bg-destructive/80 text-white text-xs font-bold px-2 py-1 rounded-lg"
              style={{ bottom: '25%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              +{animatedSP500}%
            </motion.div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-14">
            <span>Year 1</span>
            <span>Year 2</span>
            <span>Year 3</span>
            <span>Year 4</span>
            <span>Year 5</span>
          </div>
        </div>

        {/* Legend & Stats */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <motion.div
            className="bg-primary/10 border border-primary/30 rounded-xl p-4"
            whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary))' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-foreground">Stackmode Traders</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-primary">+{animatedStackmode}%</span>
              <span className="text-xs text-muted-foreground">avg return</span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-primary">
              <TrendingUp size={12} />
              <span>Compound growth with multiple streams</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-sm font-semibold text-foreground">S&P 500 Index</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-muted-foreground">+{animatedSP500}%</span>
              <span className="text-xs text-muted-foreground">avg return</span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <TrendingDown size={12} />
              <span>Passive buy & hold strategy</span>
            </div>
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[
            { icon: Zap, label: 'Active Trading', value: 'Real-time signals' },
            { icon: Target, label: 'AI Tools', value: 'Stack Finder' },
            { icon: Users, label: 'Community', value: '500+ traders' },
            { icon: Crown, label: 'Mentorship', value: '1-on-1 support' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-background/50 border border-border/30 rounded-lg p-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary)/0.5)' }}
            >
              <item.icon size={18} className="text-primary mx-auto mb-1" />
              <div className="text-[10px] text-muted-foreground">{item.label}</div>
              <div className="text-xs font-semibold text-foreground">{item.value}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border/30">
          <motion.a
            href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-primary/25 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={18} />
            <span>Start Outperforming The Market</span>
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Disclaimer */}
        <p className="text-[9px] text-muted-foreground/50 text-center mt-3">
          Based on average active member performance. Past performance does not guarantee future results. Individual results vary.
        </p>
      </div>
    </motion.div>
  );
};

export default StackmodePerformanceChart;
