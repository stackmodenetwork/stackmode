import { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Wrench, BookOpen, Phone, MessageCircle, Home, Mic, type LucideIcon } from 'lucide-react';

const NavLink = memo(({ to, isActive, children, icon: Icon }: { to: string; isActive: boolean; children: React.ReactNode; icon: LucideIcon }) => (
  <Link to={to} className={`group flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${isActive ? 'text-cyan-400 bg-cyan-500/10' : 'text-foreground/70 hover:text-cyan-400 hover:bg-cyan-500/5'}`}>
    <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-muted-foreground group-hover:text-cyan-400'} />
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

const ExternalNavLink = memo(({ href, children, icon: Icon, highlight = false }: { href: string; children: React.ReactNode; icon: LucideIcon; highlight?: boolean }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${highlight ? 'text-background bg-cyan-500 hover:bg-cyan-400' : 'text-foreground/70 hover:text-cyan-400 hover:bg-cyan-500/5'}`}>
    <Icon size={14} className={highlight ? 'text-background' : 'text-muted-foreground group-hover:text-cyan-400'} />
    {children}
  </a>
));
ExternalNavLink.displayName = 'ExternalNavLink';

export const MainHeader = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const isActive = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 relative">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono hidden sm:block">STACKMODE</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 bg-card/50 rounded-full px-2 py-1 border border-border/50 absolute left-1/2 -translate-x-1/2">
              <NavLink to="/" isActive={isActive('/')} icon={Home}>Home</NavLink>
              <NavLink to="/coding" isActive={isActive('/coding')} icon={Terminal}>Academy</NavLink>
              <NavLink to="/buildyourwebsite" isActive={isActive('/buildyourwebsite')} icon={Wrench}>Build With Us</NavLink>
              <NavLink to="/library" isActive={isActive('/library')} icon={BookOpen}>Library</NavLink>
              <span className="w-px h-4 bg-border mx-1" />
              <ExternalNavLink href="https://discord.gg/5zYWSWGMYm" icon={MessageCircle}>Discord</ExternalNavLink>
              <ExternalNavLink href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" icon={Mic}>Podcast</ExternalNavLink>
              <ExternalNavLink href="https://ceoturbo.com" icon={Wrench}>Grow Your Brand</ExternalNavLink>
              <ExternalNavLink href="tel:+16787758532" icon={Phone} highlight>Call</ExternalNavLink>
            </nav>

            <button onClick={toggleMenu} className="lg:hidden p-2 rounded-lg bg-card/50 border border-border/50 hover:border-cyan-500/50 transition-colors" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 lg:hidden animate-fade-in">
          <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 px-4 py-4">
            <div className="space-y-1">
              <Link to="/" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/') ? 'text-cyan-400 bg-cyan-500/10' : 'text-foreground hover:bg-card/50'}`}>
                <Home size={18} className="text-cyan-400" /> Home
              </Link>
              <Link to="/coding" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/coding') ? 'text-cyan-400 bg-cyan-500/10' : 'text-foreground hover:bg-card/50'}`}>
                <Terminal size={18} className="text-cyan-400" /> Coding Academy
              </Link>
              <Link to="/buildyourwebsite" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/buildyourwebsite') ? 'text-violet-400 bg-violet-500/10' : 'text-foreground hover:bg-card/50'}`}>
                <Wrench size={18} className="text-violet-400" /> Build With Us
              </Link>
              <Link to="/library" onClick={closeMenu} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/library') ? 'text-orange-400 bg-orange-500/10' : 'text-foreground hover:bg-card/50'}`}>
                <BookOpen size={18} className="text-orange-400" /> Library
              </Link>
              <div className="pt-2 border-t border-border/50 mt-2">
                <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-foreground hover:bg-card/50 transition-colors">
                  <MessageCircle size={18} className="text-cyan-400" /> Discord
                </a>
                <a href="tel:+16787758532" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-background bg-cyan-500 hover:bg-cyan-400 transition-colors mt-2">
                  <Phone size={18} /> Call Me
                </a>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-background/50 -z-10" onClick={closeMenu} />
        </div>
      )}
    </>
  );
});

MainHeader.displayName = 'MainHeader';
export default MainHeader;
