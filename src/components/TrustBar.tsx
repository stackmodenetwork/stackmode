import { memo } from 'react';

const tools = [
  { name: 'ChatGPT', logo: '/images/logos/chatgpt.png' },
  { name: 'Claude', logo: '/images/logos/claude.png' },
  { name: 'Google', logo: '/images/logos/google-new.png', noFilter: true },
  { name: 'Midjourney', logo: '/images/logos/midjourney.png' },
  { name: 'Runway', logo: '/images/logos/runway.png', noFilter: true },
  { name: 'Perplexity AI', logo: '/images/logos/perplexity.png' },
  { name: 'ElevenLabs', logo: '/images/logos/elevenlabs.png' },
  { name: 'Stripe', logo: '/images/logos/stripe-new.png' },
  { name: 'Reddit', logo: '/images/logos/reddit.png' },
  { name: 'Slack', logo: '/images/logos/slack-salesforce.png', noFilter: true },
  { name: 'GitHub', logo: '/images/logos/github.png' },
  { name: 'Figma', logo: '/images/logos/figma.png', noFilter: true },
  { name: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'Vercel', logo: '/images/logos/vercel.png' },
  { name: 'Whop', logo: '/images/logos/whop.png' },
];

const row1 = tools.slice(0, 8);
const row2 = tools.slice(8);

const ToolItem = ({ tool }: { tool: typeof tools[0] }) => (
  <div className="flex items-center gap-2.5 px-5 sm:px-7 py-3 flex-shrink-0">
    <img
      src={tool.logo}
      alt={tool.name}
      className="h-5 sm:h-6 w-auto object-contain max-w-[80px] sm:max-w-[100px]"
      style={{
        filter: (tool as any).noFilter ? 'none' : 'brightness(0) invert(1)',
        opacity: (tool as any).noFilter ? 0.7 : 0.55,
      }}
      loading="lazy"
    />
    <span className="text-[9px] sm:text-[11px] whitespace-nowrap" style={{
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 500,
      color: 'rgba(255,255,255,0.3)',
    }}>
      {tool.name}
    </span>
  </div>
);

export const TrustBar = memo(() => (
  <section className="relative py-8 sm:py-14 overflow-hidden" style={{ background: 'rgba(4,6,14,0.95)' }}>
    <div className="max-w-5xl mx-auto px-4 text-center">
      <p className="text-[10px] sm:text-sm tracking-[0.2em] uppercase mb-5 sm:mb-6 text-muted-foreground" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 500,
      }}>
        Learn to master the tools that build the future
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: 'linear-gradient(90deg, rgba(4,6,14,0.95), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10" style={{ background: 'linear-gradient(270deg, rgba(4,6,14,0.95), transparent)' }} />

        {/* Row 1 */}
        <div className="flex animate-marquee mb-1" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((tool, i) => (
            <ToolItem key={`r1-${i}`} tool={tool} />
          ))}
        </div>

        {/* Row 2 — reverse */}
        <div className="flex animate-marquee-reverse" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((tool, i) => (
            <ToolItem key={`r2-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;
