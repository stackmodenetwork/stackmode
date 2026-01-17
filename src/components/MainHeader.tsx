import { useState, useCallback, useRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Instagram, Mic } from 'lucide-react';

// Haptic feedback utility - memoized to prevent recreation
const triggerHaptic = (style: 'light' | 'medium' = 'light') => {
  if ('vibrate' in navigator) {
    navigator.vibrate(style === 'light' ? 10 : 25);
  }
};

// Memoized nav link for desktop
const NavLink = memo(({ to, isActive, children }: { to: string; isActive: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={`text-base font-semibold transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-300 ${
      isActive 
        ? 'text-primary after:scale-x-100' 
        : 'text-foreground/80 hover:text-primary after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'
    }`}
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

// Memoized external link for desktop
const ExternalNavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
));
ExternalNavLink.displayName = 'ExternalNavLink';

export const MainHeader = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  
  const closeMenu = useCallback(() => {
    triggerHaptic('light');
    setMenuOpen(false);
  }, []);

  const handleMenuToggle = useCallback(() => {
    triggerHaptic('medium');
    setMenuOpen(prev => !prev);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    triggerHaptic('light');
    setMenuOpen(false);
  }, []);

  // Optimized swipe gesture handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaY = touchEndY - touchStartY.current;
    const deltaX = Math.abs(touchEndX - touchStartX.current);
    
    if (deltaY > 50 && deltaY > deltaX) {
      closeMenu();
    }
    
    touchStartY.current = null;
    touchStartX.current = null;
  }, [closeMenu]);

  const isLearnActive = location.pathname === '/learn';
  const isAboutActive = location.pathname === '/about';

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/images/sm-logo.png" alt="Stackmode Logo" className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground hidden sm:block -ml-1">STACKMODE.NET</span>
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-10 mx-8">
              <ExternalNavLink href="https://calendly.com/stackmodechris/tradingmastermindcoaching">
                Trading Mentorship
              </ExternalNavLink>
              <ExternalNavLink href="https://whop.com/stackmode-network-llc">
                Catch My Trades
              </ExternalNavLink>
              <NavLink to="/learn" isActive={isLearnActive}>
                Courses & Books
              </NavLink>
              <NavLink to="/about" isActive={isAboutActive}>
                About
              </NavLink>
              <ExternalNavLink href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true">
                Podcast
              </ExternalNavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleMenuToggle} 
              className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary transition-colors" 
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu - Only render content when open for performance */}
      {menuOpen && (
        <div 
          className="fixed inset-x-0 top-16 sm:top-20 z-50 md:hidden animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Glassmorphism container with gradient */}
          <div className="relative overflow-hidden border-b border-white/10 shadow-2xl">
            {/* Swipe indicator */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>
            
            {/* Gradient background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-primary/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative px-4 py-4">
            {/* Logo and Close Button in Mobile Menu */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <Link to="/" onClick={handleMenuItemClick} className="flex items-center gap-1">
                <img src="/images/sm-logo.png" alt="Stackmode Logo" className="w-12 h-12 object-contain" />
                <span className="text-lg font-bold text-foreground">STACKMODE.NET</span>
              </Link>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-200 active:scale-95"
                aria-label="Close menu"
              >
                <X size={20} className="text-primary" />
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1 mb-4">
              <a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMenuItemClick} 
                className="block px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in"
                style={{ animationDelay: '50ms' }}
              >
                Trading Mentorship
              </a>
              <a 
                href="https://whop.com/stackmode-network-llc" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleMenuItemClick} 
                className="block px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in"
                style={{ animationDelay: '100ms' }}
              >
                Catch My Trades
              </a>
              <Link 
                to="/learn" 
                onClick={handleMenuItemClick} 
                className={`block px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${isLearnActive ? 'text-primary bg-primary/15 border-primary/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
                style={{ animationDelay: '150ms' }}
              >
                Courses & Books
              </Link>
              <Link 
                to="/about" 
                onClick={handleMenuItemClick} 
                className={`block px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${isAboutActive ? 'text-primary bg-primary/15 border-primary/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
                style={{ animationDelay: '175ms' }}
              >
                About
              </Link>
              <a 
                href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMenuItemClick} 
                className="block px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in"
                style={{ animationDelay: '225ms' }}
              >
                Podcast
              </a>
            </div>
            
            {/* Social Links */}
            <div className="border-t border-white/10 pt-4 animate-fade-in" style={{ animationDelay: '250ms' }}>
              <p className="text-xs text-muted-foreground mb-3 px-4">Follow Us</p>
              <div className="grid grid-cols-4 gap-2">
                <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200 active:scale-95">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                  <span className="text-xs text-muted-foreground">Discord</span>
                </a>
                <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200 active:scale-95">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="text-xs text-muted-foreground">YouTube</span>
                </a>
                <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200 active:scale-95">
                  <Mic className="w-5 h-5 text-green-500" />
                  <span className="text-xs text-muted-foreground">Podcast</span>
                </a>
                <a href="https://www.instagram.com/stackmodetrading/" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex flex-col items-center gap-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200 active:scale-95">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="text-xs text-muted-foreground">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Backdrop with blur */}
        <div className="fixed inset-0 bg-background/70 backdrop-blur-sm -z-10" onClick={closeMenu} />
      </div>
      )}
    </>
  );
});

MainHeader.displayName = 'MainHeader';

export default MainHeader;
