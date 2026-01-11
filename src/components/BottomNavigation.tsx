import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, Calendar } from 'lucide-react';

// Haptic feedback utility
const triggerHaptic = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(10);
  }
};

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/learn', label: 'Courses', icon: BookOpen },
  { path: '/about', label: 'About', icon: User },
  { 
    path: 'https://calendly.com/stackmodechris/tradingmastermindcoaching', 
    label: 'Book Call', 
    icon: Calendar,
    isExternal: true,
    isHighlighted: true
  },
];

export const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleClick = () => {
    triggerHaptic();
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      {/* Glassmorphism background */}
      <div className="relative">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background/95" />
        <div className="absolute inset-0 backdrop-blur-xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Safe area padding for devices with home indicators */}
        <div className="relative px-2 pt-2 pb-safe">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = !item.isExternal && isActive(item.path);
              
              const className = `
                flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all duration-200 active:scale-95 min-w-[64px]
                ${item.isHighlighted 
                  ? 'text-primary-foreground' 
                  : active 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }
              `;

              const content = (
                <>
                  <div className={`
                    relative p-2 rounded-xl transition-all duration-200
                    ${item.isHighlighted 
                      ? 'bg-primary shadow-lg shadow-primary/30' 
                      : active 
                        ? 'bg-primary/15' 
                        : 'bg-transparent'
                    }
                  `}>
                    <Icon size={20} />
                    {item.isHighlighted && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                    )}
                  </div>
                  <span className={`text-[10px] font-medium ${item.isHighlighted ? 'text-primary' : ''}`}>
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
};

export default BottomNavigation;