import { useState, useCallback, useRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Instagram, Mic, TrendingUp, Target, Briefcase, Globe, BookOpen, User, Headphones, MessageCircle, Phone, type LucideIcon } from 'lucide-react';

// Haptic feedback utility - memoized to prevent recreation
const triggerHaptic = (style: 'light' | 'medium' = 'light') => {
  if ('vibrate' in navigator) {
    navigator.vibrate(style === 'light' ? 10 : 25);
  }
};

// Memoized nav link for desktop with icon
const NavLink = memo(({
  to,
  isActive,
  children,
  icon: Icon
}: {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  icon: LucideIcon;
}) => <Link to={to} className={`group relative flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap hover:scale-105 ${isActive ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/40' : 'text-foreground/70 hover:text-primary hover:bg-primary/10'}`}>
    <Icon size={14} className={`transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
    {children}
    {isActive && <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse -z-10" />}
  </Link>);
NavLink.displayName = 'NavLink';

// Memoized external link for desktop with icon
const ExternalNavLink = memo(({
  href,
  children,
  icon: Icon
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}) => <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-105">
    <Icon size={14} className="text-primary transition-transform duration-300 group-hover:rotate-12" />
    {children}
  </a>);
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
  const isLibraryActive = location.pathname === '/library';
  const isAboutActive = location.pathname === '/about';
  const isBuildWebsiteActive = location.pathname === '/buildyourwebsite';
  return <>
      {/* Top Navigation Bar */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-2 lg:px-4">
          <div className="flex items-center h-16 sm:h-20 md:h-24 gap-2 lg:gap-4">
            {/* Logo - Fixed width, won't shrink */}
            <Link to="/" className="flex items-center shrink-0">
              <img src="/images/sm-logo.png" alt="Stackmode Logo" className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain" />
              <span className="text-base lg:text-lg xl:text-xl font-bold text-foreground hidden lg:block xl:hidden whitespace-nowrap">STACKMODE.NET</span>
              <span className="text-base lg:text-lg xl:text-xl font-bold text-foreground hidden xl:block whitespace-nowrap">STACKMODE.NET</span>
            </Link>
            
            {/* Desktop Navigation - Takes remaining space */}
            <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0">
              <div className="flex items-center bg-muted/30 rounded-full px-1.5 xl:px-2 py-1 xl:py-1.5 border border-border/50 backdrop-blur-sm overflow-hidden">
                <NavLink to="/trading" isActive={location.pathname === '/trading'} icon={TrendingUp}>
                  Trading Education
                </NavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <ExternalNavLink href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/" icon={Target}>
                  Catch My Trades
                </ExternalNavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <NavLink to="/business" isActive={location.pathname === '/business'} icon={Briefcase}>
                  Grow Your Business
                </NavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <NavLink to="/buildyourwebsite" isActive={isBuildWebsiteActive} icon={Globe}>
                  Build Your Website
                </NavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <NavLink to="/library" isActive={isLibraryActive} icon={BookOpen}>
                  Library
                </NavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <NavLink to="/about" isActive={isAboutActive} icon={User}>
                  About
                </NavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <ExternalNavLink href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" icon={Headphones}>
                  Podcast
                </ExternalNavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <ExternalNavLink href="https://discord.gg/5zYWSWGMYm" icon={MessageCircle}>
                  Discord
                </ExternalNavLink>
                <span className="w-px h-4 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-0.5 xl:mx-1 shrink-0" />
                <a href="tel:+16787758532" className="group flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap text-primary-foreground bg-primary shadow-lg shadow-primary/40 hover:scale-105">
                  <Phone size={14} className="transition-transform duration-300 group-hover:rotate-12" />
                  Call Me
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={handleMenuToggle} className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary transition-colors" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu - Only render content when open for performance */}
      {menuOpen && <div className="fixed inset-x-0 top-16 sm:top-20 z-50 md:hidden animate-fade-in" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
              <button onClick={closeMenu} className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-200 active:scale-95" aria-label="Close menu">
                <X size={20} className="text-primary" />
              </button>
            </div>

            <div className="space-y-1 mb-4">
              <Link to="/trading" onClick={handleMenuItemClick} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${location.pathname === '/trading' ? 'text-primary bg-primary/15 border-primary/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`} style={{
              animationDelay: '50ms'
            }}>
                <TrendingUp size={18} className="text-primary" />
                Learn How To Trade
              </Link>
              <a href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in" style={{
              animationDelay: '75ms'
            }}>
                <Target size={18} className="text-primary" />
                Catch My Trades
              </a>
              <Link to="/business" onClick={handleMenuItemClick} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${location.pathname === '/business' ? 'text-accent bg-accent/15 border-accent/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`} style={{
              animationDelay: '100ms'
            }}>
                <Briefcase size={18} className="text-accent" />
                Grow Your Business
              </Link>
              <Link to="/buildyourwebsite" onClick={handleMenuItemClick} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${isBuildWebsiteActive ? 'text-purple-400 bg-purple-500/15 border-purple-500/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`} style={{
              animationDelay: '125ms'
            }}>
                <Globe size={18} className="text-purple-400" />
                Build Your Website
              </Link>
              <Link to="/library" onClick={handleMenuItemClick} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${isLibraryActive ? 'text-primary bg-primary/15 border-primary/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`} style={{
              animationDelay: '150ms'
            }}>
                <BookOpen size={18} className="text-primary" />
                Library
              </Link>
              <Link to="/about" onClick={handleMenuItemClick} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium border transition-all duration-300 active:scale-[0.98] animate-fade-in ${isAboutActive ? 'text-primary bg-primary/15 border-primary/30' : 'text-foreground bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`} style={{
              animationDelay: '175ms'
            }}>
                <User size={18} className="text-primary" />
                About
              </Link>
              <a href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in" style={{
              animationDelay: '200ms'
            }}>
                <Headphones size={18} className="text-green-500" />
                Podcast
              </a>
              <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick} className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground font-medium bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 active:scale-[0.98] animate-fade-in" style={{
              animationDelay: '225ms'
            }}>
                <MessageCircle size={18} className="text-primary" />
                Discord
              </a>
              <a href="tel:+16787758532" onClick={handleMenuItemClick} className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary-foreground font-medium bg-primary hover:bg-primary/90 border border-primary/30 transition-all duration-300 active:scale-[0.98] animate-fade-in shadow-lg shadow-primary/30" style={{
              animationDelay: '250ms'
            }}>
                <Phone size={18} />
                Call Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="border-t border-white/10 pt-4 animate-fade-in" style={{
            animationDelay: '250ms'
          }}>
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
      </div>}
    </>;
});
MainHeader.displayName = 'MainHeader';
export default MainHeader;