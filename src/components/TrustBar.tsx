import { memo } from 'react';

const tools = [
  { name: 'Lovable', icon: '💜' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'ChatGPT', icon: '🧠' },
  { name: 'Midjourney', icon: '🎨' },
  { name: 'Cursor', icon: '⚡' },
  { name: 'Runway', icon: '🎬' },
  { name: 'Google', icon: '🔍' },
  { name: 'Shopify', icon: '🛒' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Whop', icon: '🏪' },
  { name: 'Canva', icon: '✏️' },
  { name: 'Figma', icon: '🎯' },
];

export const TrustBar = memo(() => (
  <section className="relative py-12 sm:py-16 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-8" style={{
        fontFamily: "'Orbitron', sans-serif",
        color: 'rgba(122,155,181,0.7)',
        fontWeight: 500,
      }}>
        Learn to master the tools that build the future
      </p>
      
      {/* Scrolling marquee of tools */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(90deg, var(--bg-secondary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(270deg, var(--bg-secondary), transparent)' }} />
        
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-2 px-6 sm:px-8 py-3 flex-shrink-0">
              <span className="text-xl sm:text-2xl">{tool.icon}</span>
              <span className="text-sm sm:text-base font-medium whitespace-nowrap" style={{
                fontFamily: "'Orbitron', sans-serif",
                color: 'rgba(232,244,255,0.4)',
                fontWeight: 500,
              }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;
