import { memo, useState } from 'react';

const tools = [
  { name: 'ChatGPT', company: 'OpenAI', logo: '/images/logos/chatgpt.png' },
  { name: 'Claude', company: 'Anthropic', logo: '/images/logos/claude.png' },
  { name: 'Gemini', company: 'Google', icon: '✦', color: '#4285f4' },
  { name: 'Copilot', company: 'Microsoft', icon: '🤖', color: '#00a4ef' },
  { name: 'Midjourney', company: 'Midjourney Inc.', logo: '/images/logos/midjourney.png' },
  { name: 'Runway', company: 'Runway ML', icon: '🎬', color: '#a259ff' },
  { name: 'Perplexity AI', company: 'Perplexity', icon: '🔍', color: '#20b8cd' },
  { name: 'Grok', company: 'xAI', icon: '⚡', color: '#fff' },
  { name: 'Stable Diffusion', company: 'Stability AI', icon: '🎨', color: '#a855f7' },
  { name: 'ElevenLabs', company: 'ElevenLabs', icon: '🔊', color: '#00c8ff' },
  { name: 'Sora', company: 'OpenAI', icon: '🎥', color: '#10a37f' },
  { name: 'Kling AI', company: 'Kuaishou', icon: '📹', color: '#ff6b35' },
  { name: 'Cursor', company: 'Anysphere', icon: '⚡', color: '#00e5ff' },
  { name: 'Notion AI', company: 'Notion', icon: '📓', color: '#fff' },
  { name: 'HeyGen', company: 'HeyGen', icon: '🧑', color: '#6366f1' },
  { name: 'Pika Labs', company: 'Pika', icon: '🎬', color: '#ec4899' },
  { name: 'Leonardo AI', company: 'Leonardo', icon: '🖌️', color: '#a855f7' },
  { name: 'Synthesia', company: 'Synthesia', icon: '🎭', color: '#3b82f6' },
  { name: 'Luma AI', company: 'Luma Labs', icon: '💡', color: '#f59e0b' },
  { name: 'DeepSeek', company: 'DeepSeek', icon: '🔬', color: '#3b82f6' },
  { name: 'Google', company: 'Alphabet', logo: '/images/logos/google.png' },
  { name: 'Shopify', company: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'Stripe', company: 'Stripe', logo: '/images/logos/stripe.png' },
  { name: 'Figma', company: 'Figma', logo: '/images/logos/figma.png' },
  { name: 'Vercel', company: 'Vercel', logo: '/images/logos/vercel.png' },
  { name: 'GitHub', company: 'Microsoft', logo: '/images/logos/github.png' },
  { name: 'Whop', company: 'Whop', logo: '/images/logos/whop.png' },
];

const ToolItem = ({ tool }: { tool: typeof tools[0] }) => {
  const hasLogo = 'logo' in tool && tool.logo;

  return (
    <div className="flex items-center gap-2 px-4 sm:px-6 py-3 flex-shrink-0">
      {hasLogo ? (
        <img
          src={tool.logo as string}
          alt={tool.name}
          className="h-4 sm:h-5 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }}
          loading="lazy"
        />
      ) : (
        <span className="text-sm sm:text-base" style={{ opacity: 0.5 }}>
          {(tool as any).icon}
        </span>
      )}
      <span className="text-[9px] sm:text-[11px] whitespace-nowrap" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 500,
        color: 'rgba(255,255,255,0.35)',
      }}>
        {tool.name}
      </span>
    </div>
  );
};

const row1 = tools.slice(0, 14);
const row2 = tools.slice(14);

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
          {[...row1, ...row1, ...row1].map((tool, i) => (
            <ToolItem key={`r1-${i}`} tool={tool} />
          ))}
        </div>
        
        {/* Row 2 — reverse */}
        <div className="flex animate-marquee-reverse" style={{ width: 'max-content' }}>
          {[...row2, ...row2, ...row2].map((tool, i) => (
            <ToolItem key={`r2-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;
