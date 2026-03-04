import { useState, memo, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Prompt Shop',
    path: '/shop',
    dropdown: [
      { label: 'All Prompts', path: '/shop' },
      { label: 'Website Prompts', path: '/shop?filter=website' },
      { label: 'Image Prompts', path: '/shop?filter=image' },
      { label: 'Video Prompts', path: '/shop?filter=video' },
      { label: 'Trading Prompts', path: '/shop?filter=trading' },
      { label: '🆓 Free Prompts', path: '/shop?filter=free' },
    ],
  },
  { label: 'Stackfinder', path: '/stackfinder' },
  { label: 'Brand Boost', path: '/brand-boost' },
  { label: 'Academy', path: '/academy' },
  { label: 'Library', path: '/library' },
  { label: 'Pricing', path: '/pricing' },
];

export const SiteNav = memo(() => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, isSubscribed, loading, signOut, handleCheckout, handlePortal } = useAuth();

  useEffect(() => { setOpen(false); setDropdownOpen(false); setUserMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const renderAuthButton = () => {
    if (loading) return null;

    if (!user) {
      return (
        <Link to="/auth" className="btn-primary btn-sm">Login</Link>
      );
    }

    if (isSubscribed) {
      return (
        <div className="relative" ref={userMenuRef}>
          <button onClick={() => setUserMenuOpen(v => !v)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000' }}>
            ★ Premium
          </button>
          {userMenuOpen && (
            <div className="absolute top-full right-0 mt-2 py-2 rounded-lg min-w-[180px]" style={{ background: 'rgba(17,17,17,0.98)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
              <button onClick={handlePortal}
                className="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5"
                style={{ color: 'rgba(255,255,255,0.7)' }}>
                Manage Subscription
              </button>
              <button onClick={signOut}
                className="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5"
                style={{ color: 'rgba(255,255,255,0.7)' }}>
                Logout
              </button>
            </div>
          )}
        </div>
      );
    }

    // Logged in but not subscribed
    return (
      <div className="relative" ref={userMenuRef}>
        <button onClick={() => setUserMenuOpen(v => !v)}
          className="btn-primary btn-sm">
          Subscribe
        </button>
        {userMenuOpen && (
          <div className="absolute top-full right-0 mt-2 py-2 rounded-lg min-w-[180px]" style={{ background: 'rgba(17,17,17,0.98)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
            <button onClick={handleCheckout}
              className="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Subscribe to Premium
            </button>
            <button onClick={signOut}
              className="block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderMobileAuthButton = () => {
    if (loading) return null;
    if (!user) {
      return <Link to="/auth" onClick={() => setOpen(false)} className="btn-primary btn-lg mt-6">Login</Link>;
    }
    if (isSubscribed) {
      return (
        <div className="flex flex-col items-center gap-3 mt-6">
          <span className="px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000' }}>★ Premium</span>
          <button onClick={() => { handlePortal(); setOpen(false); }} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Manage Subscription</button>
          <button onClick={() => { signOut(); setOpen(false); }} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Logout</button>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center gap-3 mt-6">
        <button onClick={() => { handleCheckout(); setOpen(false); }} className="btn-primary btn-lg">Subscribe to Premium</button>
        <button onClick={() => { signOut(); setOpen(false); }} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Logout</button>
      </div>
    );
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-8" style={{
        height: 60, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-wide text-white">Stackmode</span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => {
            const active = isActive(link.path);
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button onClick={() => setDropdownOpen(v => !v)}
                    className="px-3 py-1.5 text-sm transition-colors"
                    style={{ fontWeight: 500, color: active ? '#fff' : 'rgba(255,255,255,0.6)' }}>
                    {link.label} ▾
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 py-2 rounded-lg min-w-[200px]" style={{ background: 'rgba(17,17,17,0.98)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
                      {link.dropdown.map(item => (
                        <Link key={item.label} to={item.path}
                          className="block px-4 py-2 text-sm transition-colors hover:bg-white/5"
                          style={{ color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.6)' }}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.label} to={link.path}
                className="px-3 py-1.5 text-sm transition-colors"
                style={{ fontWeight: 500, color: active ? '#fff' : 'rgba(255,255,255,0.6)' }}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center">
          {renderAuthButton()}
        </div>

        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[199] lg:hidden" style={{ background: 'rgba(0,0,0,0.98)', paddingTop: 60 }}>
          <div className="flex flex-col items-center justify-center h-full gap-4 -mt-16">
            {navLinks.map(link => (
              <Link key={link.label} to={link.path} onClick={() => setOpen(false)}
                className="text-xl tracking-wide transition-colors"
                style={{ fontWeight: 600, color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                {link.label}
              </Link>
            ))}
            {renderMobileAuthButton()}
          </div>
        </div>
      )}
    </>
  );
});

SiteNav.displayName = 'SiteNav';
export default SiteNav;
