import { Gift, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FreeResourcesCTAProps {
  variant?: 'banner' | 'floating' | 'inline';
  className?: string;
}

export const FreeResourcesCTA = ({ variant = 'banner', className = '' }: FreeResourcesCTAProps) => {
  
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-20 sm:bottom-6 right-4 z-40 animate-fade-in ${className}`}>
        <Link to="/library">
          <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-background font-bold text-sm px-4 py-3 rounded-full shadow-xl cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform">
            <Gift size={18} />
            <span>Free Resources</span>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <Link to="/library" className={`group inline-block ${className}`}>
        <div className="relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40 hover:border-amber-500/70 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <Gift size={20} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-sm">Free Courses & eBooks</span>
                <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                  FREE
                </span>
              </div>
              <span className="text-xs text-muted-foreground">Get started with no cost resources</span>
            </div>
            <ArrowRight size={18} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  // Banner variant (default) — no framer-motion for max performance
  return (
    <Link to="/library" className={`block group ${className}`}>
      <div className="relative overflow-hidden cursor-pointer">
        <div className="relative bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 py-3 px-4 transition-all duration-300 group-hover:from-amber-500/20 group-hover:via-orange-500/10 group-hover:to-amber-500/20">
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-300" />
          
          <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Gift size={20} className="text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="text-amber-500 font-bold text-sm sm:text-base group-hover:text-amber-400 transition-colors">FREE COURSES & EBOOKS</span>
            </div>
            
            <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline group-hover:text-foreground/70 transition-colors">
              Start learning with no cost resources
            </span>
            
            <div className="flex items-center gap-1 bg-amber-500 text-background font-bold text-xs sm:text-sm px-3 py-1.5 rounded-full transition-all group-hover:bg-amber-400 group-hover:shadow-lg group-hover:shadow-amber-500/30">
              <Sparkles size={14} />
              <span>Get Free Access</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FreeResourcesCTA;