import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingPhoneButton = () => {
  return (
    <motion.a
      href="tel:6787758532"
      className="fixed bottom-8 right-8 z-40 hidden md:flex group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call (678) 775-8532"
    >
      <div className="relative">
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Ping animation */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary rounded-full shadow-xl shadow-primary/30 transition-all border-2 border-primary-foreground/20">
          <Phone size={24} className="text-primary-foreground" />
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
            <span className="text-sm font-medium text-foreground">(678) 775-8532</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingPhoneButton;
