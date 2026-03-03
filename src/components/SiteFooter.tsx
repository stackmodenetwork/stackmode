import { memo } from 'react';
import { Link } from 'react-router-dom';

export const SiteFooter = memo(() => (
  <footer className="border-t py-12 sm:py-16 px-4" style={{ background: '#000', borderColor: 'rgba(255,255,255,0.08)' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-7 h-7 rounded-full" loading="lazy" />
            <span className="text-base font-bold tracking-wider uppercase font-heading">STACKMODE</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            AI software, trading strategies, and asset stacking education by Christopher Robinson, CEO.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'AI Prompt Shop', path: '/shop' },
              { label: 'Stackfinder Academy', path: '/academy' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Brand Boost', path: '/brand-boost' },
              { label: 'Library', path: '/library' },
            ].map(link => (
              <Link key={link.path} to={link.path} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>Connect</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: 'YouTube', href: 'https://youtube.com/@ChristopherRobinson-CEO' },
              { label: 'X (Twitter)', href: 'https://x.com/ChristopherRCEO' },
              { label: 'Instagram', href: 'https://instagram.com/christopherrobinsonceo' },
              { label: 'TikTok', href: 'https://tiktok.com/@stackmodechris___' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/stackmodechris' },
              { label: 'Discord', href: 'https://discord.gg/5zYWSWGMYm' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</Link>
            <Link to="/terms" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Stackmode.net — Christopher Robinson, CEO. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
));

SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;
