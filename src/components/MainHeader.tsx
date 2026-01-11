import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Instagram, Mic } from 'lucide-react';

export const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (path: string) => location.pathname === path;

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
              <a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Trading Mentorship
              </a>
              <a 
                href="https://whop.com/stackmode-network-llc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Catch My Trades
              </a>
              <Link 
                to="/learn" 
                className={`text-base font-semibold transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-300 ${isActive('/learn') || isActive('/courses') || isActive('/books') ? 'text-primary after:scale-x-100' : 'text-foreground/80 hover:text-primary after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
              >
                Courses & Books
              </Link>
              <Link 
                to="/about" 
                className={`text-base font-semibold transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-300 ${isActive('/about') ? 'text-primary after:scale-x-100' : 'text-foreground/80 hover:text-primary after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left'}`}
              >
                About
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary transition-colors" 
              aria-label="Open menu"
            >
              {menuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed inset-x-0 top-16 sm:top-20 z-50 md:hidden transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-xl">
          <div className="px-4 py-4">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center justify-center pb-4 mb-4 border-b border-border">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-1">
                <img src="/images/sm-logo.png" alt="Stackmode Logo" className="w-12 h-12 object-contain" />
                <span className="text-lg font-bold text-foreground">STACKMODE.NET</span>
              </Link>
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1 mb-4">
              <a 
                href="https://calendly.com/stackmodechris/tradingmastermindcoaching" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu} 
                className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
              >
                Trading Mentorship
              </a>
              <a 
                href="https://whop.com/stackmode-network-llc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu} 
                className="block px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
              >
                Catch My Trades
              </a>
              <Link 
                to="/learn" 
                onClick={closeMenu} 
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/learn') || isActive('/courses') || isActive('/books') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'}`}
              >
                Courses & Books
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu} 
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/about') ? 'text-primary bg-primary/10' : 'text-foreground hover:bg-muted'}`}
              >
                About
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-3 px-4">Follow Us</p>
              <div className="grid grid-cols-4 gap-2">
                <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                  <span className="text-xs text-muted-foreground">Discord</span>
                </a>
                <a href="https://www.youtube.com/@stackmodetrading" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="text-xs text-muted-foreground">YouTube</span>
                </a>
                <a href="https://podcasters.spotify.com/pod/show/stackmodetrading" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Mic className="w-5 h-5 text-green-500" />
                  <span className="text-xs text-muted-foreground">Podcast</span>
                </a>
                <a href="https://www.instagram.com/stackmodetrading/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="text-xs text-muted-foreground">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-background/60 -z-10" onClick={closeMenu} />
      </div>
    </>
  );
};

export default MainHeader;
