import { useNavigate } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';
import { Icon3D } from '@/components/Icon3D';
import { PressStartButton } from '@/components/PressStartButton';
import { ShoppingBag, Zap, Code, Database, Brain, Shield } from 'lucide-react';
const Index = () => {
  const navigate = useNavigate();
  const handlePressStart = () => {
    navigate('/game');
  };
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full gap-4 p-8 animate-pulse-neon">
          {Array.from({
          length: 64
        }).map((_, i) => <div key={i} className="bg-primary rounded" style={{
          animationDelay: `${i * 0.05}s`,
          animationDuration: '3s'
        }} />)}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Title Block */}
        <AnimatedBlock delay={0.1} className="text-center mb-16">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-primary neon-glow mb-4 animate-pulse-neon">STACKMODE.NET</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-secondary neon-glow animate-glitch">CREATE YOUR FUTURE INSHALLAH</h2>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-accent animate-rotate-3d" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent animate-float" />
          </div>
        </AnimatedBlock>

        {/* Icon Row */}
        <AnimatedBlock delay={0.3} className="mb-16">
          <div className="flex items-center justify-center gap-12 md:gap-20">
            <Icon3D type="candlesticks" size={80} className="hover:scale-110 transition-transform duration-500" />
            <Icon3D type="video" size={80} className="hover:scale-110 transition-transform duration-500" />
            <Icon3D type="book" size={80} className="hover:scale-110 transition-transform duration-500" />
            <Icon3D type="globe" size={80} className="hover:scale-110 transition-transform duration-500" />
          </div>
        </AnimatedBlock>

        {/* Stacking Blocks */}
        <div className="mb-16 space-y-6">
          <AnimatedBlock delay={0.5} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <ShoppingBag size={24} className="text-emerald-400 mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">SHOP</span>
          </AnimatedBlock>
          
          <AnimatedBlock delay={0.6} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <Zap size={24} className="text-secondary mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">POWER CORE</span>
          </AnimatedBlock>
          
          <AnimatedBlock delay={0.7} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <Code size={24} className="text-accent mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">MATRIX CODE</span>
          </AnimatedBlock>

          <AnimatedBlock delay={0.8} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <Database size={24} className="text-blue-400 mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">DATA STREAM</span>
          </AnimatedBlock>

          <AnimatedBlock delay={0.9} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <Brain size={24} className="text-purple-400 mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">NEURAL NET</span>
          </AnimatedBlock>

          <AnimatedBlock delay={1.0} className="w-80 h-16 bg-card neon-border rounded flex items-center justify-center">
            <Shield size={24} className="text-orange-400 mr-3 neon-glow" />
            <span className="text-foreground font-bold tracking-wider">CRYPTO VAULT</span>
          </AnimatedBlock>
        </div>

        {/* Press Start Button */}
        <AnimatedBlock delay={1.1}>
          <PressStartButton onClick={handlePressStart} className="mb-8" />
        </AnimatedBlock>

        {/* Footer Text */}
        <AnimatedBlock delay={1.2} className="text-center">
          <p className="text-muted-foreground font-mono text-sm tracking-wider animate-pulse-neon">
            SYSTEM INITIALIZED • READY FOR LAUNCH
          </p>
        </AnimatedBlock>
      </div>

      {/* Corner UI Elements */}
      <div className="absolute top-4 left-4 text-primary neon-glow font-mono text-sm animate-pulse-neon">
        v2.0.0
      </div>
      <div className="absolute top-4 right-4 text-secondary neon-glow font-mono text-sm animate-pulse-neon">
        ONLINE
      </div>
      <div className="absolute bottom-4 left-4 text-accent neon-glow font-mono text-sm animate-pulse-neon">
        LOADING...
      </div>
      <div className="absolute bottom-4 right-4 text-muted-foreground font-mono text-sm">
        © 2024 RETRO
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse-neon" style={{
        backgroundSize: '100% 4px'
      }} />
      </div>
    </div>;
};
export default Index;