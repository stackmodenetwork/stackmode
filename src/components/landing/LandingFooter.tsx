const academyLinks = [
  { label: 'Join Academy', href: 'https://whop.com/stackmode-academy/' },
  { label: 'Free Library', href: '/library' },
  { label: 'YouTube', href: 'https://www.youtube.com/@stackmodetrading' },
  { label: 'Discord', href: 'https://discord.gg/5zYWSWGMYm' },
];

const turboLinks = [
  { label: 'CEO Turbo', href: 'https://ceoturbo.com' },
  { label: 'Web Design', href: 'https://ceoturbo.com' },
  { label: 'NFC Cards', href: 'https://ceoturbo.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/stackmodetrading/' },
];

const LandingFooter = () => (
  <footer className="relative w-full py-12 px-6 border-t" style={{ background: '#030305', borderColor: 'rgba(255,255,255,0.05)' }}>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Logo */}
        <div>
          <h3 className="text-2xl tracking-[0.15em]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="text-white">STACK</span><span style={{ color: '#C9A84C' }}>MODE</span>
          </h3>
          <p className="text-[10px] text-white/20 mt-2 max-w-[200px]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Code · Content · Capital
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16">
          <div>
            <h4 className="text-xs tracking-[0.2em] text-white/40 mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>ACADEMY</h4>
            <ul className="space-y-2">
              {academyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] text-white/40 mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>CEO TURBO</h4>
            <ul className="space-y-2">
              {turboLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <p className="text-[9px] tracking-[0.2em] text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          © 2025 STACKMODE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <span className="text-[9px] tracking-[0.2em] text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>BUILT DIFFERENT.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] tracking-[0.2em] text-white/15" style={{ fontFamily: "'Share Tech Mono', monospace" }}>ONLINE</span>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
