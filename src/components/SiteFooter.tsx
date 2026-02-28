import { memo } from 'react';
import { Link } from 'react-router-dom';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/christopherrobinsonceo/', icon: '📸' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@stackmodechris___', icon: '🎵' },
  { label: 'Twitter/X', href: 'https://x.com/ChristopherRCEO', icon: '𝕏' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stackmodechris/', icon: '💼' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ChristopherRobinson-CEO', icon: '▶️' },
  { label: 'Discord', href: 'https://discord.gg/5zYWSWGMYm', icon: '💬' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Academy', path: '/academy' },
  { label: 'Prompt Shop', path: '/prompt-shop' },
  { label: 'Brand Boost', href: 'https://ceoturbo.com' },
  { label: 'Library', path: '/library' },
];

export const SiteFooter = memo(() => (
  <footer className="relative border-t py-12 sm:py-16 px-4" style={{
    background: '#030508',
    borderColor: 'rgba(57,255,20,0.1)',
  }}>
    <div className="flex justify-center mb-6">
      <img src="/images/stackmode-logo.png" alt="Stackmode" className="w-12 h-12 rounded-full" />
    </div>
    
    <p className="text-center text-[8px] sm:text-[10px] tracking-[0.2em] mb-8 neon-green" style={{
      fontFamily: "'Press Start 2P', monospace",
    }}>
      STACKMODE.NET
    </p>

    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
      {navLinks.map(link => link.href ? (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
          className="text-sm tracking-wide transition-colors hover:text-neon-green text-foreground/40"
          style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {link.label}
        </a>
      ) : (
        <Link key={link.label} to={link.path!}
          className="text-sm tracking-wide transition-colors hover:text-neon-green text-foreground/40"
          style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {link.label}
        </Link>
      ))}
    </div>

    <div className="flex justify-center gap-4 mb-8">
      {socials.map(s => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
          className="text-lg sm:text-xl opacity-40 hover:opacity-100 transition-opacity hover:scale-110 transform">
          {s.icon}
        </a>
      ))}
    </div>

    <div className="flex justify-center mb-8">
      <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="67e4fc7b3c4aed39c66f2c18" data-style-height="52px" data-style-width="100%">
        <a href="https://www.trustpilot.com/review/stackmode.net" target="_blank" rel="noopener noreferrer"
          className="text-xs text-foreground/20">Trustpilot</a>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <a href="https://www.amazon.com/stores/Christopher-Robinson/author/B0DQX99MLJ" target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px] py-2 px-4 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.207-.09.39-.112.547-.066.156.043.235.18.235.403 0 .26-.12.474-.358.64-.79.56-1.83 1.054-3.12 1.48-1.292.428-2.553.7-3.783.816l-.542.045c-2.37 0-4.94-.48-7.71-1.44S1.374 19.09.045 18.02zM6.394 15.66c0-.678.132-1.272.396-1.782.264-.51.614-.9 1.052-1.17.437-.27.9-.46 1.39-.57.49-.11 1.07-.18 1.74-.21l1.442-.06v-.48c0-.39-.025-.7-.076-.93-.05-.23-.156-.43-.313-.6-.158-.17-.377-.28-.66-.33-.282-.05-.632-.08-1.05-.08-.39 0-.818.04-1.282.12-.464.08-.87.19-1.216.33-.12.05-.206.04-.256-.04-.05-.08-.076-.18-.076-.3v-.39c0-.17.03-.3.09-.38.06-.08.174-.16.34-.23.52-.24 1.1-.42 1.738-.54.64-.12 1.27-.18 1.89-.18.86 0 1.56.08 2.1.24.54.16.96.38 1.26.66.3.28.5.62.6 1.02.1.4.15.84.15 1.32v4.92c0 .14-.07.21-.21.21h-.84c-.12 0-.19-.07-.21-.21l-.12-.72c-.44.4-.89.7-1.36.9-.47.2-1.01.3-1.62.3-.42 0-.82-.07-1.2-.2-.38-.13-.71-.32-1-.57-.29-.25-.52-.56-.69-.93-.17-.37-.26-.8-.26-1.29zm3.5.36c0 .3.05.56.14.78.09.22.22.4.38.54.16.14.34.24.55.3.21.06.43.09.66.09.3 0 .62-.06.95-.18.33-.12.65-.3.94-.54v-1.98l-1.09.06c-.74.04-1.3.17-1.67.39-.37.22-.56.57-.56 1.04z"/><path d="M21.69 17.49c.21-.05.37-.02.48.09.11.11.08.28-.1.51-.54.72-1.14 1.27-1.78 1.65-.64.38-1.48.57-2.5.57-1.32 0-2.42-.39-3.28-1.17-.86-.78-1.3-1.86-1.3-3.24 0-1.19.35-2.2 1.04-3.03.69-.83 1.66-1.25 2.89-1.25 1.2 0 2.05.42 2.53 1.26.48.84.73 2.01.73 3.51 0 .12-.05.19-.14.21l-5.04.03c0 .78.19 1.38.58 1.81.39.43.95.64 1.69.64.39 0 .77-.07 1.13-.2.36-.13.65-.28.87-.45.16-.12.29-.17.39-.15.1.02.18.1.24.24l.21.45c.07.14.09.26.05.36-.04.1-.14.2-.3.3-.44.28-.96.5-1.56.66-.6.16-1.16.24-1.68.24-.64 0-1.2-.09-1.68-.27-.48-.18-.89-.44-1.23-.78-.34-.34-.6-.76-.78-1.26-.18-.5-.27-1.07-.27-1.71 0-.66.1-1.25.3-1.77.2-.52.48-.96.84-1.32.36-.36.78-.63 1.26-.81.48-.18 1-.27 1.56-.27.6 0 1.11.07 1.53.21.42.14.77.35 1.05.63.28.28.48.63.6 1.05.12.42.18.9.18 1.44v.36h-4.32c.04-.84.24-1.47.6-1.89.36-.42.87-.63 1.53-.63.42 0 .77.09 1.05.27.28.18.42.48.42.9z"/></svg>
        Amazon Books →
      </a>
      <a href="https://play.google.com/store/books/author?id=Christopher+Robinson" target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px] py-2 px-4 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1.004 1.004 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.303-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/></svg>
        Google Play Books →
      </a>
    </div>

    <div className="flex flex-wrap justify-center gap-4 text-xs mb-4 text-foreground/20">
      <Link to="/privacy" className="hover:text-neon-green transition-colors">Privacy Policy</Link>
      <span>·</span>
      <Link to="/terms" className="hover:text-neon-green transition-colors">Terms of Service</Link>
      <span>·</span>
      <Link to="/dmca" className="hover:text-neon-green transition-colors">DMCA</Link>
    </div>

    <p className="text-center text-[10px] mt-4 max-w-2xl mx-auto" style={{ color: '#1a2a40' }}>
      Stackmode.net | Christopher Robinson CEO | Dunwoody, GA ·
      Web Design · Coding · AI Integration · Business Systems · Passive Income · SaaS ·
      Investing · Stock Trading · Real Estate · Animation · Prompt Engineering
    </p>

    <p className="text-center text-[9px] mt-2 text-foreground/10">
      © {new Date().getFullYear()} Stackmode.net | Christopher Robinson CEO | All Rights Reserved
    </p>
  </footer>
));

SiteFooter.displayName = 'SiteFooter';
export default SiteFooter;
