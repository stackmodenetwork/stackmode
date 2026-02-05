import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, TrendingUp, Users, Sparkles, Youtube, Globe, Zap } from 'lucide-react';

export const BusinessGrowthVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Revenue streams that appear on hover
  const revenueStreams = [
    { icon: Youtube, label: 'YouTube', value: '$3,500/mo', color: 'text-red-500', x: 20, y: 25 },
    { icon: Globe, label: 'Affiliate', value: '$2,200/mo', color: 'text-purple-400', x: 80, y: 20 },
    { icon: DollarSign, label: 'Products', value: '$5,800/mo', color: 'text-green-400', x: 15, y: 70 },
    { icon: Users, label: 'Coaching', value: '$4,500/mo', color: 'text-cyan-400', x: 75, y: 75 },
  ];

  // Calculate distance from mouse to each revenue stream
  const getDistance = (streamX: number, streamY: number) => {
    const dx = mousePos.x - streamX;
    const dy = mousePos.y - streamY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-gradient-to-br from-purple-500/10 via-card/90 to-fuchsia-500/10 border-2 border-purple-500/30 rounded-2xl p-6 overflow-hidden cursor-crosshair min-h-[280px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Magnetic glow that follows cursor */}
      <motion.div
        className="absolute w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
        }}
        animate={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          scale: isHovering ? 1.2 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        initial={{ x: '-50%', y: '-50%' }}
      />

      {/* Connection lines from center to revenue streams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {revenueStreams.map((stream, i) => {
          const distance = getDistance(stream.x, stream.y);
          const opacity = isHovering ? Math.max(0.1, 1 - distance / 60) : 0.2;
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${stream.x}%`}
              y2={`${stream.y}%`}
              stroke="rgb(168,85,247)"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ opacity }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Rocket size={20} className="text-purple-400" />
          <span className="text-foreground font-semibold">Revenue Streams Map</span>
        </div>
        <motion.div
          className="flex items-center gap-1 text-xs text-muted-foreground"
          animate={{ opacity: isHovering ? 1 : 0.6 }}
        >
          <Sparkles size={12} className="text-purple-400" />
          <span>Move cursor to explore</span>
        </motion.div>
      </div>

      {/* Center hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{
          scale: isHovering ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 1.5, repeat: isHovering ? Infinity : 0 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center border-4 border-background shadow-xl shadow-purple-500/30">
            <div className="text-center">
              <Zap size={20} className="text-white mx-auto" />
              <span className="text-white text-xs font-bold">$16K+</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue stream nodes */}
      {revenueStreams.map((stream, i) => {
        const Icon = stream.icon;
        const distance = getDistance(stream.x, stream.y);
        const isNear = distance < 30;

        return (
          <motion.div
            key={i}
            className="absolute z-20"
            style={{ left: `${stream.x}%`, top: `${stream.y}%` }}
            animate={{
              scale: isNear && isHovering ? 1.2 : 1,
              x: '-50%',
              y: '-50%',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className={`relative ${isNear && isHovering ? 'z-30' : ''}`}>
              {/* Glow when near */}
              <motion.div
                className="absolute inset-0 rounded-xl blur-lg"
                style={{ backgroundColor: stream.color.includes('red') ? 'rgba(239,68,68,0.4)' : stream.color.includes('purple') ? 'rgba(168,85,247,0.4)' : stream.color.includes('green') ? 'rgba(34,197,94,0.4)' : 'rgba(6,182,212,0.4)' }}
                animate={{ opacity: isNear && isHovering ? 0.8 : 0.3, scale: isNear && isHovering ? 1.5 : 1 }}
              />
              
              <div className={`relative bg-background/90 backdrop-blur-sm border-2 ${isNear && isHovering ? 'border-purple-400' : 'border-border/50'} rounded-xl p-3 transition-colors`}>
                <Icon size={16} className={stream.color} />
                
                {/* Expanded info on hover */}
                <motion.div
                  className="overflow-hidden"
                  animate={{
                    height: isNear && isHovering ? 'auto' : 0,
                    opacity: isNear && isHovering ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="pt-2">
                    <div className="text-xs text-muted-foreground">{stream.label}</div>
                    <div className="text-sm font-bold text-foreground">{stream.value}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Bottom stats */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-muted-foreground">Multiple income streams = stability</span>
          </div>
          <span className="text-purple-400 font-semibold flex items-center gap-1">
            <TrendingUp size={12} />
            Diversified Revenue
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessGrowthVisual;
