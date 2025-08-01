import { Book, Video, CandlestickChart, Globe, ShoppingBag, Database, Brain, Shield, Wallet } from 'lucide-react';

interface Icon3DProps {
  type: 'book' | 'video' | 'candlesticks' | 'globe' | 'shoppingBag' | 'database' | 'brain' | 'shield' | 'wallet';
  size?: number;
  className?: string;
}

export const Icon3D = ({ type, size = 64, className = "" }: Icon3DProps) => {
  const iconComponents = {
    book: Book,
    video: Video,
    candlesticks: CandlestickChart,
    globe: Globe,
    shoppingBag: ShoppingBag,
    database: Database,
    brain: Brain,
    shield: Shield,
    wallet: Wallet
  };

  const colors = {
    book: 'text-secondary',
    video: 'text-accent', 
    candlesticks: 'text-primary',
    globe: 'text-cyan-400',
    shoppingBag: 'text-emerald-400',
    database: 'text-blue-400',
    brain: 'text-purple-400',
    shield: 'text-orange-400',
    wallet: 'text-emerald-400'
  };

  const IconComponent = iconComponents[type];
  const colorClass = colors[type];

  return (
    <div className={`icon-3d group perspective-1000 ${className}`}>
      <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-3d-hover">
        {/* Main Icon */}
        <IconComponent 
          size={size} 
          className={`${colorClass} neon-glow transition-all duration-500 animate-pulse-neon`}
        />
        
        {/* 3D Shadow/Depth Effect */}
        <div className="absolute top-2 left-2 -z-10 opacity-30">
          <IconComponent 
            size={size} 
            className="text-muted"
          />
        </div>
        
        {/* Floating Animation Container */}
        <div className="absolute inset-0 animate-float">
          <div className="w-full h-full bg-gradient-retro opacity-10 blur-xl rounded-full scale-150" />
        </div>
        
        {/* Interactive Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-full h-full ${colorClass} blur-2xl opacity-50 scale-150 animate-pulse-neon`} />
        </div>
      </div>
      
      {/* Base Platform */}
      <div className="mt-4 w-16 h-2 bg-muted rounded-full opacity-50 mx-auto transform group-hover:scale-110 transition-transform duration-500" />
    </div>
  );
};