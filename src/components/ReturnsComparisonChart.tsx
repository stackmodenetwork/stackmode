import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Sparkles } from 'lucide-react';

export const ReturnsComparisonChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: Math.max(0, Math.min(100, x)), y });
  };

  // S&P 500 average ~10% per year, Stackmode 15-20%
  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
  const sp500Data = [10, 21, 33, 46, 61]; // Compounded ~10% returns
  const stackmodeData = [18, 39, 64, 93, 128]; // Compounded ~18% returns

  // Calculate current position based on mouse X
  const currentYearIndex = Math.min(4, Math.floor(mousePos.x / 20));
  const sp500Value = sp500Data[currentYearIndex];
  const stackmodeValue = stackmodeData[currentYearIndex];

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-gradient-to-br from-primary/5 via-card/90 to-cyan-500/5 border-2 border-primary/30 rounded-2xl p-6 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background glow that follows mouse */}
      <motion.div
        className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        style={{ transform: 'translate(-50%, -50%)' }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 size={20} className="text-primary" />
          <span className="text-foreground font-semibold">Average Annual Returns</span>
        </div>
        <motion.div
          className="flex items-center gap-1 text-xs text-muted-foreground"
          animate={{ opacity: isHovering ? 1 : 0.6 }}
        >
          <Sparkles size={12} className="text-primary" />
          <span>Hover to explore</span>
        </motion.div>
      </div>

      {/* Chart Area */}
      <div className="relative z-10 h-40 mb-4">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-20">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-muted-foreground/30" />
          ))}
        </div>

        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* S&P 500 Line (red/orange) */}
          <motion.path
            d={`M 0,${140 - sp500Data[0]} L ${100 / 4},${140 - sp500Data[1] * 0.9} L ${200 / 4},${140 - sp500Data[2] * 0.85} L ${300 / 4},${140 - sp500Data[3] * 0.8} L 100%,${140 - sp500Data[4] * 0.75}`}
            fill="none"
            stroke="rgb(251, 146, 60)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          {/* Stackmode Line (green) */}
          <motion.path
            d={`M 0,${140 - stackmodeData[0] * 0.9} L ${100 / 4},${140 - stackmodeData[1] * 0.8} L ${200 / 4},${140 - stackmodeData[2] * 0.7} L ${300 / 4},${140 - stackmodeData[3] * 0.6} L 100%,${140 - stackmodeData[4] * 0.5}`}
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>

        {/* Vertical line that follows mouse */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{
            left: `${mousePos.x}%`,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />

        {/* Tooltip that follows mouse */}
        <motion.div
          className="absolute z-20 pointer-events-none"
          animate={{
            left: `${Math.min(80, Math.max(20, mousePos.x))}%`,
            top: '10%',
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="bg-background/95 backdrop-blur-sm border border-primary/40 rounded-xl p-3 shadow-xl shadow-primary/20 transform -translate-x-1/2">
            <div className="text-xs text-muted-foreground mb-2 font-medium">{years[currentYearIndex]}</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground font-bold text-sm">Stackmode: +{stackmodeValue}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                <span className="text-muted-foreground text-sm">S&P 500: +{sp500Value}%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated dots on hover */}
        {isHovering && (
          <>
            <motion.div
              className="absolute w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg shadow-primary/50"
              animate={{
                left: `${currentYearIndex * 25}%`,
                top: `${100 - stackmodeValue * 0.7}%`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
            <motion.div
              className="absolute w-3 h-3 bg-orange-400 rounded-full border-2 border-background"
              animate={{
                left: `${currentYearIndex * 25}%`,
                top: `${100 - sp500Value * 1.2}%`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </>
        )}
      </div>

      {/* Legend */}
      <div className="relative z-10 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-primary rounded-full" />
          <span className="text-foreground font-medium">Stackmode Network (15-20%/yr)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-orange-400 rounded-full" />
          <span className="text-muted-foreground">S&P 500 (~10%/yr)</span>
        </div>
      </div>

      {/* Bottom CTA hint */}
      <motion.div
        className="relative z-10 text-center mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs text-muted-foreground">
          <TrendingUp size={12} className="inline mr-1 text-primary" />
          Compounded returns over 5 years • Not financial advice
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ReturnsComparisonChart;
