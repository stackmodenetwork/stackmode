import { memo } from 'react';

const tools = [
  { name: 'Lovable', logo: null, icon: '💜' },
  { name: 'Claude', logo: '/images/logos/claude.png' },
  { name: 'ChatGPT', logo: '/images/logos/chatgpt.png' },
  { name: 'Midjourney', logo: '/images/logos/midjourney.png' },
  { name: 'Cursor', logo: null, icon: '⚡' },
  { name: 'Google', logo: '/images/logos/google.png' },
  { name: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'Stripe', logo: '/images/logos/stripe.png' },
  { name: 'Whop', logo: '/images/logos/whop.png' },
  { name: 'Figma', logo: '/images/logos/figma.png' },
  { name: 'Vercel', logo: '/images/logos/vercel.png' },
  { name: 'GitHub', logo: '/images/logos/github.png' },
  { name: 'Runway', logo: null, icon: '🎬' },
  { name: 'Canva', logo: null, icon: '✏️' },
  { name: 'VS Code', logo: null, icon: '🔧' },
  { name: 'Notion', logo: null, icon: '📓' },
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
      
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(90deg, rgba(4,6,14,0.95), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10" style={{ background: 'linear-gradient(270deg, rgba(4,6,14,0.95), transparent)' }} />
        
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex items-center gap-2.5 px-5 sm:px-7 py-3 flex-shrink-0">
              {tool.logo ? (
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="h-6 sm:h-8 w-auto object-contain" 
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.35 }}
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="text-lg sm:text-xl">{tool.icon}</span>
                  <span className="text-sm sm:text-base whitespace-nowrap text-foreground/30" style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 500,
                  }}>
                    {tool.name}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;
