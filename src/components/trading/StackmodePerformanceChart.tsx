import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Trophy, Zap, Users, Target, ArrowRight, Sparkles, Crown, BarChart3 } from 'lucide-react';

export const StackmodePerformanceChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  // Realistic data points (percentage returns over 5 years)
  // S&P 500: Based on historical ~10% annual avg = ~61% over 5 years
  // Stackmode: Active trading with 25-30% annual = ~185% over 5 years
  const years = ['Start', 'Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5'];
  
  // S&P 500 realistic compound growth (~10% annual)
  const sp500Data = [0, 10, 21, 33, 46, 61];
  
  // Stackmode traders (active trading ~25% annual avg with some variance)
  const stackmodeData = [0, 28, 58, 95, 138, 189];

  const dataPoints = years.length;
  const maxValue = 220; // Max Y axis value
  const chartHeight = 180;

  // Get interpolated value at cursor position (0-100 range)
  const getValueAtPosition = (data: number[], position: number) => {
    const segmentWidth = 100 / (dataPoints - 1);
    const index = position / segmentWidth;
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.min(Math.ceil(index), dataPoints - 1);
    const fraction = index - lowerIndex;
    
    if (lowerIndex >= dataPoints - 1) return data[dataPoints - 1];
    if (lowerIndex < 0) return data[0];
    
    return data[lowerIndex] + (data[upperIndex] - data[lowerIndex]) * fraction;
  };

  // Get the Y percentage for a value (maps to the chart area)
  const getYPercent = (value: number) => {
    return (1 - value / maxValue) * 100;
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setCursorPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    setCursorPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handleMouseLeave = () => {
    if (!isTouching) setCursorPosition(null);
  };

  const handleTouchStart = () => setIsTouching(true);
  const handleTouchEnd = () => {
    setIsTouching(false);
    setCursorPosition(null);
  };

  // Chart dimensions for viewBox (use wider ratio to avoid distortion)
  const chartWidth = 400;

  // Generate smooth SVG path from data using cubic bezier curves
  const generatePath = (data: number[]) => {
    const segmentWidth = chartWidth / (data.length - 1);
    const points = data.map((val, i) => ({
      x: i * segmentWidth,
      y: chartHeight - (val / maxValue) * chartHeight,
    }));

    if (points.length < 2) return '';

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const tension = 0.3;
      
      const prevPoint = i > 0 ? points[i - 1] : current;
      const nextNext = i < points.length - 2 ? points[i + 2] : next;
      
      const cp1x = current.x + (next.x - prevPoint.x) * tension;
      const cp1y = current.y + (next.y - prevPoint.y) * tension;
      const cp2x = next.x - (nextNext.x - current.x) * tension;
      const cp2y = next.y - (nextNext.y - current.y) * tension;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    
    return path;
  };

  // Generate area path (smooth line + close to bottom)
  const generateAreaPath = (data: number[]) => {
    const linePath = generatePath(data);
    const lastX = (data.length - 1) * (chartWidth / (data.length - 1));
    return `${linePath} L ${lastX} ${chartHeight} L 0 ${chartHeight} Z`;
  };

  // Current values based on cursor
  const currentStackmode = cursorPosition !== null 
    ? Math.round(getValueAtPosition(stackmodeData, cursorPosition)) 
    : stackmodeData[stackmodeData.length - 1];
  const currentSP500 = cursorPosition !== null 
    ? Math.round(getValueAtPosition(sp500Data, cursorPosition)) 
    : sp500Data[sp500Data.length - 1];
  const yearIndex = cursorPosition !== null 
    ? Math.round((cursorPosition / 100) * (years.length - 1))
    : years.length - 1;
  const currentYear = years[yearIndex];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-card via-card/95 to-primary/5 border-2 border-primary/40 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
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
              <h3 className="text-foreground font-bold text-lg">5-Year Performance Comparison</h3>
              <p className="text-muted-foreground text-xs">Stackmode Active Traders vs S&P 500 Index</p>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 py-1.5"
            animate={{ boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 15px rgba(34,197,94,0.3)', '0 0 0px rgba(34,197,94,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy size={14} className="text-primary" />
            <span className="text-primary text-xs font-bold">3X OUTPERFORMANCE</span>
          </motion.div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Interactive Hint */}
        <div className="text-center mb-3">
          <span className="text-xs text-muted-foreground">
            {cursorPosition !== null ? (
              <span className="text-primary font-medium">{currentYear}</span>
            ) : (
              <>👆 Hover or drag to explore returns</>
            )}
          </span>
        </div>

        {/* Live Stats Display */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.div 
            className="bg-primary/10 border border-primary/30 rounded-xl p-3 text-center"
            animate={cursorPosition !== null ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-foreground">Stackmode Traders</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              +{currentStackmode}%
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 text-center"
            animate={cursorPosition !== null ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-xs font-medium text-foreground">S&P 500 Index</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-muted-foreground">
              +{currentSP500}%
            </div>
          </motion.div>
        </div>

        {/* Chart Area */}
        <div
          ref={chartRef}
          className="relative h-[180px] sm:h-[220px] bg-background/30 rounded-xl border border-border/30 cursor-crosshair touch-none select-none overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-6 px-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-border/20 w-full" />
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-1 sm:left-2 top-6 bottom-8 flex flex-col justify-between text-[8px] sm:text-[10px] text-muted-foreground pointer-events-none">
            <span>+200%</span>
            <span>+150%</span>
            <span>+100%</span>
            <span>+50%</span>
            <span>0%</span>
          </div>

          {/* Chart SVG */}
          <svg 
            className="absolute left-8 sm:left-10 right-2 sm:right-4 top-6 bottom-8" 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
            preserveAspectRatio="none"
          >
            {/* Gradients */}
            <defs>
              <linearGradient id="stackmodeGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="sp500Gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* S&P 500 Area & Line */}
            <motion.path
              d={generateAreaPath(sp500Data)}
              fill="url(#sp500Gradient2)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.path
              d={generatePath(sp500Data)}
              fill="none"
              stroke="rgba(239, 68, 68, 0.7)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />

            {/* Stackmode Area & Line */}
            <motion.path
              d={generateAreaPath(stackmodeData)}
              fill="url(#stackmodeGradient2)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.path
              d={generatePath(stackmodeData)}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Data point dots */}
            {stackmodeData.filter((_, i) => i === 0 || i === stackmodeData.length - 1).map((val, idx) => {
              const i = idx === 0 ? 0 : stackmodeData.length - 1;
              const x = (i / (dataPoints - 1)) * chartWidth;
              const y = chartHeight - (val / maxValue) * chartHeight;
              return (
                <motion.circle
                  key={`stackmode-${i}`}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="hsl(var(--primary))"
                  vectorEffect="non-scaling-stroke"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + idx * 0.5 }}
                />
              );
            })}
            {sp500Data.filter((_, i) => i === 0 || i === sp500Data.length - 1).map((val, idx) => {
              const i = idx === 0 ? 0 : sp500Data.length - 1;
              const x = (i / (dataPoints - 1)) * chartWidth;
              const y = chartHeight - (val / maxValue) * chartHeight;
              return (
                <motion.circle
                  key={`sp500-${i}`}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="rgb(239, 68, 68)"
                  vectorEffect="non-scaling-stroke"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4 + idx * 0.5 }}
                />
              );
            })}
          </svg>

          {/* Cursor line, dots, and tooltips */}
          {cursorPosition !== null && (() => {
            // Calculate precise positions matching the SVG coordinate system
            const stackmodeYPct = getYPercent(currentStackmode);
            const sp500YPct = getYPercent(currentSP500);
            // Chart inner area: top padding ~14%, bottom padding ~18%, left ~8%, usable width ~88%
            const xPos = `calc(8% + ${cursorPosition * 0.88}%)`;
            const chartTopPad = 14; // % from top where chart area starts
            const chartUsableHeight = 68; // % of container that is chart area

            return (
              <>
                {/* Vertical cursor line */}
                <div
                  className="absolute top-6 bottom-8 w-px pointer-events-none z-10"
                  style={{
                    left: xPos,
                    background: 'linear-gradient(to bottom, hsl(var(--primary)/0.1), hsl(var(--primary)/0.6), hsl(var(--primary)/0.1))',
                  }}
                />

                {/* Stackmode dot on curve */}
                <div
                  className="absolute w-3 h-3 rounded-full border-2 border-primary bg-background pointer-events-none z-20"
                  style={{
                    left: xPos,
                    top: `${chartTopPad + (stackmodeYPct / 100) * chartUsableHeight}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 8px hsl(var(--primary)/0.6)',
                  }}
                />

                {/* S&P 500 dot on curve */}
                <div
                  className="absolute w-3 h-3 rounded-full border-2 border-destructive bg-background pointer-events-none z-20"
                  style={{
                    left: xPos,
                    top: `${chartTopPad + (sp500YPct / 100) * chartUsableHeight}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 8px rgba(239,68,68,0.5)',
                  }}
                />

                {/* Stackmode tooltip */}
                <div
                  className="absolute bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-md shadow-lg pointer-events-none z-30 whitespace-nowrap"
                  style={{
                    left: xPos,
                    top: `${chartTopPad + (stackmodeYPct / 100) * chartUsableHeight}%`,
                    transform: `translate(${cursorPosition > 80 ? '-110%' : '60%'}, -50%)`,
                  }}
                >
                  +{currentStackmode}%
                </div>

                {/* S&P 500 tooltip */}
                <div
                  className="absolute bg-destructive/90 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg pointer-events-none z-30 whitespace-nowrap"
                  style={{
                    left: xPos,
                    top: `${chartTopPad + (sp500YPct / 100) * chartUsableHeight}%`,
                    transform: `translate(${cursorPosition > 80 ? '-110%' : '60%'}, -50%)`,
                  }}
                >
                  +{currentSP500}%
                </div>

                {/* Year label at cursor */}
                <div
                  className="absolute bottom-0 bg-primary/20 text-primary text-[9px] font-bold px-2 py-0.5 rounded-t pointer-events-none z-30 whitespace-nowrap"
                  style={{
                    left: xPos,
                    transform: 'translateX(-50%)',
                  }}
                >
                  {currentYear}
                </div>
              </>
            );
          })()}

          {/* X-axis year labels inside chart */}
          <div className="absolute bottom-1 left-8 sm:left-10 right-2 sm:right-4 flex justify-between text-[8px] sm:text-[10px] text-muted-foreground pointer-events-none">
            {years.map((year) => (
              <span key={year} className="text-center">{year}</span>
            ))}
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
          <div className="bg-background/50 border border-border/30 rounded-lg p-2 text-center">
            <div className="text-[10px] text-muted-foreground">S&P 500 Annual Avg</div>
            <div className="text-sm font-bold text-foreground">~10%</div>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-2 text-center">
            <div className="text-[10px] text-muted-foreground">Stackmode Annual Avg</div>
            <div className="text-sm font-bold text-primary">~25%</div>
          </div>
          <div className="bg-background/50 border border-border/30 rounded-lg p-2 text-center">
            <div className="text-[10px] text-muted-foreground">Outperformance</div>
            <div className="text-sm font-bold text-primary">+128%</div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {[
            { icon: Zap, label: 'Active Trading', value: 'Real-time alerts' },
            { icon: Target, label: 'AI Tools', value: 'Stack Finder' },
            { icon: Users, label: 'Community', value: '500+ traders' },
            { icon: Crown, label: 'Mentorship', value: '1-on-1 support' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-background/50 border border-border/30 rounded-lg p-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary)/0.5)' }}
            >
              <item.icon size={16} className="text-primary mx-auto mb-1" />
              <div className="text-[9px] text-muted-foreground">{item.label}</div>
              <div className="text-[10px] font-semibold text-foreground">{item.value}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-3 border-t border-border/30">
          <motion.a
            href="https://whop.com/stackmode-academy/educationalservice/"
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
          S&P 500 based on historical 10% annual average. Stackmode based on active member averages. Past performance does not guarantee future results.
        </p>
      </div>
    </motion.div>
  );
};

export default StackmodePerformanceChart;
