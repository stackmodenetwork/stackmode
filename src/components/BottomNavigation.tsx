import { Link, useLocation } from 'react-router-dom';
import { Home, Terminal, Globe, BookOpen } from 'lucide-react';
import { memo } from 'react';

interface NavItem {
  path: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/coding', label: 'Academy', icon: Terminal },
  { path: '/buildyourwebsite', label: 'Build', icon: Globe },
  { path: '/library', label: 'Library', icon: BookOpen },
];

export const BottomNavigation = memo(() => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        <div className="absolute inset-x-0 top-0 h-px bg-border/50" />
        
        <div className="relative px-2 pt-2 pb-safe">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors min-w-[60px] ${active ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-primary/10' : ''}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-medium">{item.label}</span>
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
