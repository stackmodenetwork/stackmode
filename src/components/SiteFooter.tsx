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
      <a href="https://stackmode.net" className="btn-ghost text-[10px] py-2 px-4">📚 Amazon Books →</a>
      <a href="https://stackmode.net" className="btn-ghost text-[10px] py-2 px-4">📖 Google Play Books →</a>
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
