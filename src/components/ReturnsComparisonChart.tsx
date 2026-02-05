import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, ArrowUpRight, Sparkles } from 'lucide-react';

export const ReturnsComparisonChart = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  // $10,000 investment growth comparison over 5 years
  const data = [
    { year: 'Year 1', sp500: 11000, stackmode: 11800, sp500Pct: 10, stackmodePct: 18 },
    { year: 'Year 2', sp500: 12100, stackmode: 13924, sp500Pct: 21, stackmodePct: 39 },
    { year: 'Year 3', sp500: 13310, stackmode: 16430, sp500Pct: 33, stackmodePct: 64 },
    { year: 'Year 4', sp500: 14641, stackmode: 19388, sp500Pct: 46, stackmodePct: 94 },
    { year: 'Year 5', sp500: 16105, stackmode: 22878, sp500Pct: 61, stackmodePct: 129 },
  ];

  const maxValue = 23000;
  const difference = 22878 - 16105;

  return (
    <motion.div
      className="relative bg-gradient-to-br from-primary/5 via-card/95 to-emerald-500/5 border-2 border-primary/30 rounded-2xl p-5 sm:p-6 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={18} className="text-primary" />
            <span className="text-foreground font-semibold">$10,000 Investment Growth</span>
          </div>
          <p className="text-muted-foreground text-sm">See the difference proper training makes</p>
        </div>
        
        {/* Final result highlight */}
        <motion.div 
          className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-3 py-2"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-primary font-bold text-sm">+${difference.toLocaleString()} more with Stackmode</span>
        </motion.div>
      </div>

      {/* Chart Area */}
      <div className="relative z-10 space-y-3">
        {data.map((item, index) => {
          const sp500Width = (item.sp500 / maxValue) * 100;
          const stackmodeWidth = (item.stackmode / maxValue) * 100;
          const isHovered = hoveredYear === index;
          
          return (
            <motion.div
              key={item.year}
              className="relative"
              onMouseEnter={() => setHoveredYear(index)}
              onMouseLeave={() => setHoveredYear(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Year label */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-muted-foreground w-14">{item.year}</span>
                
                {/* Values on hover */}
                <motion.div 
                  className="flex items-center gap-3 text-xs"
                  animate={{ opacity: isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-orange-400">
                    S&P: ${item.sp500.toLocaleString()} <span className="text-muted-foreground">(+{item.sp500Pct}%)</span>
                  </span>
                  <span className="text-primary font-semibold">
                    Stackmode: ${item.stackmode.toLocaleString()} <span className="text-primary/70">(+{item.stackmodePct}%)</span>
                  </span>
                </motion.div>
              </div>
              
              {/* Bar container */}
              <div className="relative h-8 bg-background/50 rounded-lg overflow-hidden border border-border/30">
                {/* S&P 500 bar (bottom layer) */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500/80 to-orange-400/60 rounded-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sp500Width}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                />
                
                {/* Stackmode bar (top layer, overlapping to show difference) */}
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-emerald-400 rounded-lg transition-all duration-150 ${isHovered ? 'shadow-lg shadow-primary/30' : ''}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stackmodeWidth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                />
                
                {/* Difference indicator at end of Stackmode bar */}
                <motion.div
                  className="absolute inset-y-0 flex items-center"
                  style={{ left: `${sp500Width}%` }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                >
                  <div 
                    className="h-full border-l-2 border-dashed border-primary/50"
                    style={{ width: `${stackmodeWidth - sp500Width}%` }}
                  />
                </motion.div>
                
                {/* Value labels inside bars */}
                <div className="absolute inset-0 flex items-center justify-end pr-2">
                  <motion.span 
                    className="text-xs font-bold text-white drop-shadow-md"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    ${item.stackmode.toLocaleString()}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend & Final Comparison */}
      <div className="relative z-10 mt-5 pt-4 border-t border-border/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Legend */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-primary to-emerald-400 rounded" />
              <span className="text-foreground">Stackmode Network (18%/yr avg)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded opacity-70" />
              <span className="text-muted-foreground">S&P 500 (~10%/yr)</span>
            </div>
          </div>
          
          {/* Final comparison callout */}
          <motion.div 
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-1 bg-primary/20 text-primary font-bold px-3 py-1.5 rounded-lg">
              <ArrowUpRight size={14} />
              <span>2x faster growth</span>
            </div>
          </motion.div>
        </div>
        
        {/* Disclaimer */}
        <p className="text-[10px] text-muted-foreground/70 mt-3 text-center">
          Based on average member returns. Past performance doesn't guarantee future results. Not financial advice.
        </p>
      </div>
    </motion.div>
  );
};

export default ReturnsComparisonChart;
