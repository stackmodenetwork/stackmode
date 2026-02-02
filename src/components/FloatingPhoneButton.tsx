import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingPhoneButton = () => {
  return (
    <>
      {/* CSS to handle responsive visibility */}
      <style>{`
        @media (max-width: 767px) {
          .floating-phone-button { display: none !important; }
        }
      `}</style>
      <motion.a
        href="tel:6787758532"
        className="floating-phone-button fixed bottom-8 right-8 z-[9999] flex group"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call (678) 775-8532"
      >
        <div className="relative">
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-primary rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Ping animation */}
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
          
          {/* Button */}
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary rounded-full shadow-2xl shadow-primary/40 transition-all border-2 border-primary-foreground/20">
            <Phone size={28} className="text-primary-foreground" />
          </div>
          
          {/* Tooltip on hover */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-background border border-border rounded-lg px-4 py-2 shadow-xl whitespace-nowrap">
              <span className="text-sm font-semibold text-foreground">(678) 775-8532</span>
              <span className="block text-xs text-muted-foreground">Click to call</span>
            </div>
          </div>
        </div>
      </motion.a>
    </>
  );
};

export default FloatingPhoneButton;
