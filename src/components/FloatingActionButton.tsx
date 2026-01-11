import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

// Haptic feedback utility
const triggerHaptic = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(15);
  }
};

export const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show FAB after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    triggerHaptic();
    if (isExpanded) {
      // Navigate to booking
      window.open('https://calendly.com/stackmodechris/tradingmastermindcoaching', '_blank');
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic();
    setIsExpanded(false);
  };

  return (
    <>
      {/* FAB Container - Mobile only */}
      <div 
        className={`fixed bottom-6 right-6 z-50 md:hidden transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        {/* Expanded state with label */}
        <div 
          className={`absolute bottom-0 right-0 flex items-center gap-3 transition-all duration-300 origin-right ${
            isExpanded 
              ? 'scale-100 opacity-100' 
              : 'scale-75 opacity-0 pointer-events-none'
          }`}
        >
          {/* Label */}
          <div className="bg-background/95 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-xl">
            <p className="text-sm font-medium text-foreground whitespace-nowrap">
              Book FREE Mentorship Call
            </p>
          </div>
        </div>

        {/* Main FAB Button */}
        <button
          onClick={handleClick}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 active:scale-95 ${
            isExpanded 
              ? 'bg-primary text-primary-foreground shadow-primary/30' 
              : 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/40 hover:shadow-primary/50 hover:scale-105'
          }`}
          aria-label="Book mentorship call"
        >
          {/* Pulse animation ring */}
          {!isExpanded && (
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          )}
          
          {/* Icon */}
          <Calendar size={24} className="relative z-10" />
        </button>

        {/* Close button when expanded */}
        {isExpanded && (
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted border border-border rounded-full flex items-center justify-center shadow-md transition-all duration-200 active:scale-90"
            aria-label="Close"
          >
            <X size={14} className="text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Backdrop when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default FloatingActionButton;