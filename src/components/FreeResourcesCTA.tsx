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
            className="relative bg-primary text-primary-foreground font-bold text-sm px-4 py-3 rounded-full shadow-xl cursor-pointer flex items-center gap-2"
            animate={{ 
              boxShadow: ['0 0 0px rgba(0,255,136,0.5)', '0 0 20px rgba(0,255,136,0.8)', '0 0 0px rgba(0,255,136,0.5)']
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
          className="relative bg-primary/10 border-2 border-primary/40 hover:border-primary/70 rounded-xl px-4 py-3 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift size={20} className="text-primary" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground text-sm">Free Courses & eBooks</span>
                <motion.span 
                  className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  FREE
                </motion.span>
              </div>
              <span className="text-xs text-muted-foreground">Get started with no cost resources</span>
            </div>
            <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </Link>
    );
  }

  // Banner variant (default)
  return (
    <Link to="/library" className={`block group ${className}`}>
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <motion.div 
          className="relative bg-primary/10 py-3 px-4 transition-all duration-300 group-hover:bg-primary/15"
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          
          <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <Gift size={20} className="text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-primary font-bold text-sm sm:text-base group-hover:text-primary transition-colors">FREE COURSES & EBOOKS</span>
            </motion.div>
            
            <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline group-hover:text-foreground/70 transition-colors">
              Start learning with no cost resources
            </span>
            
            <motion.div 
              className="flex items-center gap-1 bg-primary text-primary-foreground font-bold text-xs sm:text-sm px-3 py-1.5 rounded-full transition-all group-hover:shadow-lg"
            >
              <Sparkles size={14} />
              <span>Get Free Access</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FreeResourcesCTA;
