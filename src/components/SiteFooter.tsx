import { memo } from 'react';
import { Link } from 'react-router-dom';

export const SiteFooter = memo(() => (
  <footer className="border-t py-12 sm:py-16 px-4" style={{
    background: '#000',
    borderColor: 'rgba(255,255,255,0.08)',
  }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-7 h-7 rounded-full" loading="lazy" />
            <span className="text-base font-bold tracking-wider uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              STACKMODE
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            AI software, trading strategies, and asset stacking education by Christopher Robinson, CEO.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>
            Navigate
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'AI Prompt Shop', path: '/prompt-shop' },
              { label: 'Stackfinder', path: '/stackfinder' },
              { label: 'Academy', path: '/academy' },
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

        {/* Connect */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>
            Connect
          </h4>
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

        {/* Legal */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Grotesk', sans-serif" }}>
            Legal
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</Link>
            <Link to="/terms" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms & Conditions</Link>
            <Link to="/dmca" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>DMCA</Link>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Stackmode.net — Christopher Robinson, CEO. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { label: 'YouTube', href: 'https://youtube.com/@ChristopherRobinson-CEO', d: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z' },
            { label: 'X', href: 'https://x.com/ChristopherRCEO', d: 'M18.2 2.25h3.5l-7.7 8.8 9 11.7h-7.1l-5.5-7.2-6.3 7.2H.6l8.2-9.4L0 2.25h7.3l5 6.6 5.9-6.6Zm-1.2 18.4h1.9L7.1 4.2H5.1l11.9 16.45Z' },
            { label: 'Instagram', href: 'https://instagram.com/christopherrobinsonceo', d: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44-.24.61-.52 1.05-.98 1.51-.46.46-.9.74-1.51.98-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.07 4.07 0 0 1-1.51-.98 4.07 4.07 0 0 1-.98-1.51c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44.24-.61.52-1.05.98-1.51a4.07 4.07 0 0 1 1.51-.98c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.47 1.38 2.13a5.87 5.87 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0Z' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/stackmodechris', d: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.27V1.73A1.75 1.75 0 0 0 22.22 0Z' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={s.d} /></svg>
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-[10px] mt-4" style={{ color: 'rgba(255,255,255,0.1)' }}>
        Stackmode.net — AI Education & Trading by Christopher Robinson CEO. Stackmodechris.
      </p>
    </div>
  </footer>
));

SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;
