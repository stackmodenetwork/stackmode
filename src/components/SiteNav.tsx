import { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ACADEMY', path: '/academy' },
  { label: 'PROMPT SHOP', path: '/prompt-shop' },
  { label: 'STACKFINDER', path: '/stackfinder' },
  { label: 'BRAND BOOST', href: 'https://ceoturbo.com' },
];

export const SiteNav = memo(() => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-8" style={{
        height: 56,
        background: 'rgba(8,12,26,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(57,255,20,0.1)',
      }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/images/stackmode-logo.png" alt="Stackmode" className="w-9 h-9 rounded-full object-cover" />
          <span className="hidden sm:block text-[10px] sm:text-xs tracking-[0.15em] neon-green" style={{
            fontFamily: "'Press Start 2P', monospace",
          }}>
            STACKMODE.NET
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = link.path ? location.pathname === link.path : false;
            if (link.href) {
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1.5 text-[11px] tracking-[2px] uppercase transition-colors hover:text-neon-green"
                  style={{ fontFamily: "'Orbitron', sans-serif", color: 'rgba(232,244,255,0.6)' }}>
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} to={link.path!}
                className="px-3 py-1.5 text-[11px] tracking-[2px] uppercase transition-colors relative"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: isActive ? '#39ff14' : 'rgba(232,244,255,0.6)',
                }}>
                {link.label}
                {isActive && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-neon-green" />}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 btn-cta text-[10px] py-2 px-4">
          [ START NOW → ]
        </a>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          {open ? <X size={22} color="#39ff14" /> : <Menu size={22} color="#e8f4ff" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[199] lg:hidden" style={{ background: 'rgba(8,12,26,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col items-center justify-center h-full gap-6 pt-14">
            {navLinks.map(link => {
              if (link.href) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                    className="text-lg tracking-[0.2em] uppercase transition-colors hover:text-neon-green"
                    style={{ fontFamily: "'Press Start 2P', monospace", color: 'rgba(232,244,255,0.5)', fontSize: 14 }}>
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.label} to={link.path!} onClick={() => setOpen(false)}
                  className="text-lg tracking-[0.2em] uppercase transition-colors"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: location.pathname === link.path ? '#39ff14' : 'rgba(232,244,255,0.5)',
                    fontSize: 14,
                    textShadow: location.pathname === link.path ? '0 0 10px #39ff14' : 'none',
                  }}>
                  {link.label}
                </Link>
              );
            })}
            <a href="https://whop.com/stackmode-academy/educationalservice/" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)} className="btn-cta text-sm mt-4">
              [ START NOW → ]
            </a>
          </div>
        </div>
      )}
    </>
  );
});

SiteNav.displayName = 'SiteNav';
export default SiteNav;
