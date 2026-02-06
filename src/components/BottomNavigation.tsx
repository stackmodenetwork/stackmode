import { Link, useLocation } from 'react-router-dom';
import { Home, Terminal, Globe, BookOpen, DollarSign } from 'lucide-react';
import { memo } from 'react';

interface NavItem {
  path: string;
  label: string;
  icon: typeof Home;
  isExternal?: boolean;
  isHighlighted?: boolean;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/coding', label: 'Coding', icon: Terminal },
  { path: '/business', label: 'Services', icon: Globe },
  { path: '/library', label: 'Library', icon: BookOpen },
  { 
    path: 'https://whop.com/stackmode-networkgroup/makemoneyonlinefast/', 
    label: 'Join', 
    icon: DollarSign,
    isExternal: true,
    isHighlighted: true
  },
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
              const active = !item.isExternal && isActive(item.path);
              
              const className = `
                flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors min-w-[60px]
                ${item.isHighlighted 
                  ? 'text-background' 
                  : active 
                    ? 'text-cyan-400' 
                    : 'text-muted-foreground'
                }
              `;

              const content = (
                <>
                  <div className={`
                    p-2 rounded-lg transition-colors
                    ${item.isHighlighted 
                      ? 'bg-cyan-500' 
                      : active 
                        ? 'bg-cyan-500/10' 
                        : ''
                    }
                  `}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-[10px] font-medium ${item.isHighlighted ? 'text-cyan-400' : ''}`}>
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
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.path} to={item.path} className={className}>
                  {content}
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
