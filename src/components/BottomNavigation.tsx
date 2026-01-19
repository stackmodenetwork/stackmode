import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, TrendingUp, Briefcase, Phone } from 'lucide-react';
import { useEffect, useState, useCallback, memo, useMemo } from 'react';

// Haptic feedback utility
const triggerHaptic = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(10);
  }
};

interface NavItem {
  path: string;
  label: string;
  icon: typeof Home;
  isExternal?: boolean;
  isHighlighted?: boolean;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/trading', label: 'Trading', icon: TrendingUp },
  { path: '/business', label: 'Business', icon: Briefcase },
  { path: '/library', label: 'Library', icon: BookOpen },
  { 
    path: 'tel:+1234567890', 
    label: 'Call Me', 
    icon: Phone,
    isExternal: true,
    isHighlighted: true
  },
];

export const BottomNavigation = memo(() => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoize active check function
  const isActive = useCallback((path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  // Track active index for indicator animation
  useEffect(() => {
    const index = navItems.findIndex(item => !item.isExternal && isActive(item.path));
    if (index !== -1 && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, activeIndex, isActive]);

  const handleClick = useCallback(() => {
    triggerHaptic();
  }, []);

  // Memoize indicator style calculation
  const indicatorStyle = useMemo(() => ({
    width: `${100 / navItems.length}%`,
    left: `${activeIndex * (100 / navItems.length)}%`,
  }), [activeIndex]);

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Glassmorphism background */}
      <div className="relative">
        {/* Background layers - solid for better readability */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-background/98" />
        <div className="absolute inset-0 backdrop-blur-xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Sliding indicator */}
        <div 
          className={`absolute top-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 will-change-transform transition-all duration-300 ease-out ${isAnimating ? 'opacity-100' : 'opacity-70'}`}
          style={indicatorStyle}
        />
        
        {/* Safe area padding for devices with home indicators */}
        <div className="relative px-2 pt-2 pb-safe">
          <div className="flex items-center justify-around">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = !item.isExternal && isActive(item.path);
              
              const className = `
                relative flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 min-w-[64px]
                ${item.isHighlighted 
                  ? 'text-primary-foreground' 
                  : active 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }
              `;

              const content = (
                <>
                  {/* Animated background glow for active state */}
                  {active && !item.isHighlighted && (
                    <div className="absolute inset-0 bg-primary/5 rounded-xl animate-fade-in" />
                  )}
                  
                  <div className={`
                    relative p-2 rounded-xl transition-all duration-300
                    ${item.isHighlighted 
                      ? 'bg-primary shadow-lg shadow-primary/30 scale-100 hover:scale-105 active:scale-95' 
                      : active 
                        ? 'bg-primary/15 scale-110' 
                        : 'bg-transparent scale-100 hover:scale-105 active:scale-95'
                    }
                  `}>
                    <Icon 
                      size={20} 
                      className={`transition-transform duration-300 ${active && !item.isHighlighted ? 'animate-scale-in' : ''}`}
                    />
                    {item.isHighlighted && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                    )}
                  </div>
                  <span className={`
                    text-[10px] font-medium transition-all duration-300
                    ${item.isHighlighted ? 'text-primary' : ''}
                    ${active && !item.isHighlighted ? 'text-primary font-semibold' : ''}
                  `}>
                    {item.label}
                  </span>
                </>
              );

              if (item.isExternal) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleClick}
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
});

BottomNavigation.displayName = 'BottomNavigation';

export default BottomNavigation;