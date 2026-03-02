import { useState, memo, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Prompt Shop',
    path: '/prompt-shop',
    dropdown: [
      { label: 'All Prompts', path: '/prompt-shop' },
      { label: 'Image Prompts', path: '/shop/image-prompts' },
      { label: 'Video Prompts', path: '/shop/video-prompts' },
      { label: 'Presentations', path: '/shop/presentation-prompts' },
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-8" style={{
        height: 60,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm font-bold tracking-wider text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>
            STACKMODE
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => {
            const active = isActive(link.path);
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(v => !v)}
                    className="px-3 py-1.5 text-sm transition-colors relative"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {link.label} ▾
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 py-2 rounded-lg min-w-[200px]" style={{
                      background: 'rgba(17,17,17,0.98)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(20px)',
                    }}>
                      {link.dropdown.map(item => (
                        <Link key={item.path} to={item.path}
                          className="block px-4 py-2 text-sm transition-colors hover:bg-white/5"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.6)',
                          }}>
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
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                }}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary btn-sm">
          Subscribe to Premium
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[199] lg:hidden" style={{ background: 'rgba(0,0,0,0.98)', paddingTop: 60 }}>
          <div className="flex flex-col items-center justify-center h-full gap-4 -mt-16">
            {navLinks.map(link => (
              <Link key={link.label} to={link.path} onClick={() => setOpen(false)}
                className="text-xl tracking-wide uppercase transition-colors"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  color: isActive(link.path) ? '#fff' : 'rgba(255,255,255,0.4)',
                }}>
                {link.label}
              </Link>
            ))}
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)} className="btn-primary btn-lg mt-6">
              Subscribe to Premium
            </a>
          </div>
        </div>
      )}
    </>
  );
});

SiteNav.displayName = 'SiteNav';
export default SiteNav;
