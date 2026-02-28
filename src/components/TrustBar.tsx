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
  { name: 'VS Code', icon: '🔧' },
  { name: 'Vercel', icon: '▲' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Notion', icon: '📓' },
];

export const TrustBar = memo(() => (
  <section className="relative py-10 sm:py-14 overflow-hidden" style={{ background: 'rgba(4,6,14,0.95)' }}>
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 text-muted-foreground" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 500,
      }}>
        Learn to master the tools that build the future
      </p>
      
      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(90deg, rgba(4,6,14,0.95), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(270deg, rgba(4,6,14,0.95), transparent)' }} />
        
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-2 px-5 sm:px-7 py-3 flex-shrink-0">
              <span className="text-lg sm:text-xl">{tool.icon}</span>
              <span className="text-sm sm:text-base whitespace-nowrap text-foreground/30" style={{
                fontFamily: "'Orbitron', sans-serif",
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
