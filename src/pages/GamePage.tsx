import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedBlock } from '@/components/AnimatedBlock';

const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full gap-2 p-4">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-primary animate-pulse-neon"
              style={{ animationDelay: `${i * 0.01}s` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedBlock delay={0.1}>
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="btn-retro flex items-center gap-2 px-6 py-3"
            >
              <ArrowLeft size={20} />
              BACK
            </button>
            <h1 className="text-4xl font-bold text-primary neon-glow animate-pulse-neon">
              GAME LEVEL
            </h1>
            <div className="w-24" /> {/* Spacer */}
          </div>
        </AnimatedBlock>

        {/* Game Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatedBlock delay={0.2} className="bg-card neon-border p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-secondary mb-4 neon-glow">
              FORUM ACCESS
            </h2>
            <p className="text-muted-foreground mb-4">
              Connect with other players and share your experiences in our retro gaming community.
            </p>
            <div className="w-full h-32 bg-gradient-retro opacity-20 rounded animate-pulse-neon" />
          </AnimatedBlock>

          <AnimatedBlock delay={0.3} className="bg-card neon-border p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-accent mb-4 neon-glow">
              VIDEO CONTENT
            </h2>
            <p className="text-muted-foreground mb-4">
              Watch exclusive gaming content, tutorials, and behind-the-scenes footage.
            </p>
            <div className="w-full h-32 bg-gradient-neon opacity-20 rounded animate-pulse-neon" />
          </AnimatedBlock>

          <AnimatedBlock delay={0.4} className="bg-card neon-border p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-neon-blue mb-4 neon-glow">
              DISCORD SERVER
            </h2>
            <p className="text-muted-foreground mb-4">
              Join our Discord community for real-time chat, events, and exclusive updates.
            </p>
            <div className="w-full h-32 bg-gradient-gaming opacity-20 rounded animate-pulse-neon" />
          </AnimatedBlock>
        </div>

        {/* Interactive Elements */}
        <AnimatedBlock delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-muted p-8 rounded-lg neon-border">
              <Home size={48} className="text-primary neon-glow mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                WELCOME TO THE NEXT LEVEL
              </h3>
              <p className="text-muted-foreground">
                You've successfully navigated to the game page! 
                This retro-styled interface is ready for your content.
              </p>
            </div>
          </div>
        </AnimatedBlock>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary animate-pulse-neon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;