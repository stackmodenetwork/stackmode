import { Play, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface PressStartButtonProps {
  onClick: () => void;
  className?: string;
}

export const PressStartButton = ({ onClick, className = "" }: PressStartButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      onClick();
    }, 200);
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        btn-retro group relative overflow-hidden
        ${isPressed ? 'scale-95 brightness-125' : 'scale-100'}
        ${className}
      `}
      disabled={isPressed}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-gaming opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Glitch Effect */}
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 animate-glitch" />
      
      {/* Content */}
      <div className="relative flex items-center gap-3 z-10">
        <Play 
          size={20} 
          className="transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse-neon" 
        />
        <span className="text-lg font-bold tracking-widest">
          PRESS START
        </span>
        <ChevronRight 
          size={20} 
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-pulse-neon" 
        />
      </div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:w-6 group-hover:h-6" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:w-6 group-hover:h-6" />
    </button>
  );
};