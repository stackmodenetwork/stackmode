import { useState, memo, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

const navLinks = [
  {
    label: 'Stackmode',
    path: '/academy',
    dropdown: [
      { label: 'Academy', path: '/academy', hasArrow: true },
      { label: 'Library', path: '/library', hasAnimation: true },
    ],
  },
  { label: 'Business Cards', path: '/businesscards' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Stackfinder', path: '/stackfinder' },
];

export const SiteNav = memo(() => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-8" style={{
        height: 60, background: '#0A0A0A', borderBottom: '1px solid #1E1E1E',
      }}>
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-bold tracking-wider text-white" style={{ fontFamily: "'Syne', sans-serif", textTransform: 'uppercase' }}>STACKMODE</span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const active = isActive(link.path);
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button onClick={() => setDropdownOpen(v => !v)}
                    className="px-3 py-1.5 text-[11px] uppercase transition-colors tracking-[0.15em]"
                    style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, color: active ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                    {link.label} <span className="ml-0.5 text-[9px]">&#9662;</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 py-2 min-w-[200px]" style={{ background: '#111111', border: '1px solid #1E1E1E' }}>
                      {link.dropdown.map(item => (
                        <Link key={item.label} to={item.path}
                          className="group flex items-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-colors hover:bg-white/5"
                          style={{ fontFamily: "'DM Mono', monospace", color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                          {item.hasAnimation ? (
                            <motion.span
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}>
                              <BookOpen size={14} className="text-white" strokeWidth={1.5} />
                            </motion.span>
                          ) : null}
                          {item.label}
                          {item.hasArrow && (
                            <ChevronRight size={12} className="ml-auto text-white/40 group-hover:text-white group-hover:rotate-90 transition-transform duration-200" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.label} to={link.path}
                className="px-3 py-1.5 text-[11px] uppercase transition-colors tracking-[0.15em]"
                style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, color: active ? '#fff' : 'rgba(255,255,255,0.5)' }}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Auth buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            <Link to="/dashboard" className="px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] bg-white text-black font-bold transition-colors hover:bg-white/90" style={{ fontFamily: "'DM Mono', monospace", borderRadius: 2 }}>
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/auth" className="px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors border border-transparent hover:border-white/20" style={{ fontFamily: "'DM Mono', monospace", borderRadius: 2 }}>
                Login
              </Link>
              <Link to="/pricing" className="px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] bg-white text-black font-bold transition-colors hover:bg-white/90" style={{ fontFamily: "'DM Mono', monospace", borderRadius: 2 }}>
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[199] lg:hidden" style={{ background: '#0A0A0A', paddingTop: 60 }}>
          <div className="flex flex-col items-center justify-center h-full gap-4 -mt-16">
            {navLinks.map(link => (
              <div key={link.label} className="flex flex-col items-center gap-2">
                <Link to={link.path} onClick={() => setOpen(false)}
                  className="text-xl tracking-wide uppercase transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                  {link.label}
                </Link>
                {link.dropdown && link.dropdown.map(sub => (
                  <Link key={sub.label} to={sub.path} onClick={() => setOpen(false)}
                    className="text-sm tracking-wide uppercase transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace", color: isActive(sub.path) ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-8 w-64">
              {user ? (
                <Link to="/dashboard" onClick={() => setOpen(false)}
                  className="btn-primary text-center text-sm">Dashboard</Link>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setOpen(false)}
                    className="btn-glass text-center text-sm">Login</Link>
                  <Link to="/pricing" onClick={() => setOpen(false)}
                    className="btn-primary text-center text-sm">Get Started</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

SiteNav.displayName = 'SiteNav';
export default SiteNav;
