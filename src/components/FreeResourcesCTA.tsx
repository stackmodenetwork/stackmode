import { motion } from 'framer-motion';
import { Gift, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FreeResourcesCTAProps {
  variant?: 'banner' | 'floating' | 'inline';
  className?: string;
}

export const FreeResourcesCTA = ({ variant = 'banner', className = '' }: FreeResourcesCTAProps) => {
  
  if (variant === 'floating') {
    return (
      <motion.div
        className={`fixed bottom-20 sm:bottom-6 right-4 z-40 ${className}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link to="/library">
          <motion.div
            className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-background font-bold text-sm px-4 py-3 rounded-full shadow-xl cursor-pointer flex items-center gap-2"
            animate={{ 
              boxShadow: ['0 0 0px rgba(245,158,11,0.5)', '0 0 20px rgba(245,158,11,0.8)', '0 0 0px rgba(245,158,11,0.5)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Gift size={18} />
            </motion.div>
            <span>Free Resources</span>
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  if (variant === 'inline') {
    return (
      <Link to="/library" className={`group inline-block ${className}`}>
        <motion.div
          className="relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40 hover:border-amber-500/70 rounded-xl px-4 py-3 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift size={20} className="text-amber-500" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-sm">Free Courses & eBooks</span>
                <motion.span 
                  className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  FREE
                </motion.span>
              </div>
              <span className="text-xs text-muted-foreground">Get started with no cost resources</span>
            </div>
            <ArrowRight size={18} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </Link>
    );
  }

  // Banner variant (default)
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/library" className="block group">
        <div className="relative bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 border-y border-amber-500/30 py-3 px-4">
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-amber-500 rounded-full blur-md opacity-50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <Gift size={20} className="text-amber-500 relative z-10" />
              </div>
              <span className="text-amber-500 font-bold text-sm sm:text-base">FREE COURSES & EBOOKS</span>
            </motion.div>
            
            <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline">
              Start learning with no cost resources
            </span>
            
            <motion.div 
              className="flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-background font-bold text-xs sm:text-sm px-3 py-1.5 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={14} />
              <span>Get Free Access</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FreeResourcesCTA;
