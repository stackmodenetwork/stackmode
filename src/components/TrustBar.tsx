import { memo } from 'react';

const tools = [
  { name: 'ChatGPT', company: 'OpenAI', logo: '/images/logos/chatgpt.png' },
  { name: 'Claude', company: 'Anthropic', logo: '/images/logos/claude.png' },
  { name: 'Gemini', company: 'Google', logo: 'https://logo.clearbit.com/deepmind.google', fallbackIcon: '✦' },
  { name: 'Copilot', company: 'Microsoft', logo: 'https://logo.clearbit.com/github.com', fallbackIcon: '🤖' },
  { name: 'Midjourney', company: 'Midjourney Inc.', logo: '/images/logos/midjourney.png' },
  { name: 'Runway', company: 'Runway ML', logo: 'https://logo.clearbit.com/runwayml.com', fallbackIcon: '🎬' },
  { name: 'Perplexity AI', company: 'Perplexity', logo: 'https://logo.clearbit.com/perplexity.ai', fallbackIcon: '🔍' },
  { name: 'Grok', company: 'xAI', logo: 'https://logo.clearbit.com/x.ai', fallbackIcon: '⚡' },
  { name: 'Stable Diffusion', company: 'Stability AI', logo: 'https://logo.clearbit.com/stability.ai', fallbackIcon: '🎨' },
  { name: 'ElevenLabs', company: 'ElevenLabs', logo: 'https://logo.clearbit.com/elevenlabs.io', fallbackIcon: '🔊' },
  { name: 'Sora', company: 'OpenAI', logo: '/images/logos/chatgpt.png' },
  { name: 'Kling AI', company: 'Kuaishou', logo: 'https://logo.clearbit.com/klingai.com', fallbackIcon: '🎥' },
  { name: 'Cursor', company: 'Anysphere', logo: 'https://logo.clearbit.com/cursor.com', fallbackIcon: '⚡' },
  { name: 'Notion AI', company: 'Notion', logo: 'https://logo.clearbit.com/notion.so', fallbackIcon: '📓' },
  { name: 'HeyGen', company: 'HeyGen', logo: 'https://logo.clearbit.com/heygen.com', fallbackIcon: '🧑' },
  { name: 'Pika Labs', company: 'Pika', logo: 'https://logo.clearbit.com/pika.art', fallbackIcon: '🎬' },
  { name: 'Leonardo AI', company: 'Leonardo', logo: 'https://logo.clearbit.com/leonardo.ai', fallbackIcon: '🖌️' },
  { name: 'Synthesia', company: 'Synthesia', logo: 'https://logo.clearbit.com/synthesia.io', fallbackIcon: '🎭' },
  { name: 'Luma AI', company: 'Luma Labs', logo: 'https://logo.clearbit.com/lumalabs.ai', fallbackIcon: '💡' },
  { name: 'DeepSeek', company: 'DeepSeek', logo: 'https://logo.clearbit.com/deepseek.com', fallbackIcon: '🔬' },
  { name: 'Google', company: 'Alphabet', logo: '/images/logos/google.png' },
  { name: 'Shopify', company: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'Stripe', company: 'Stripe', logo: '/images/logos/stripe.png' },
  { name: 'Figma', company: 'Figma', logo: '/images/logos/figma.png' },
  { name: 'Vercel', company: 'Vercel', logo: '/images/logos/vercel.png' },
  { name: 'GitHub', company: 'Microsoft', logo: '/images/logos/github.png' },
  { name: 'Whop', company: 'Whop', logo: '/images/logos/whop.png' },
];

const ToolItem = ({ tool }: { tool: typeof tools[0] }) => {
  const hasLocalLogo = tool.logo.startsWith('/');
  
  return (
    <div className="flex items-center gap-2.5 px-5 sm:px-7 py-3 flex-shrink-0">
      {hasLocalLogo ? (
        <img
          src={tool.logo}
          alt={tool.name}
          className="h-5 sm:h-6 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }}
          loading="lazy"
        />
      ) : (
        <img
          src={tool.logo}
          alt={tool.name}
          className="h-5 sm:h-6 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'inline';
          }}
        />
      )}
      {!hasLocalLogo && (
        <span className="text-sm hidden" style={{ opacity: 0.4 }}>
          {(tool as any).fallbackIcon || '●'}
        </span>
      )}
      <span className="text-[10px] sm:text-xs whitespace-nowrap" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 500,
        color: 'rgba(255,255,255,0.35)',
      }}>
        {tool.name}
      </span>
    </div>
  );
};

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
        
        {/* Row 1 */}
        <div className="flex animate-marquee mb-2" style={{ width: 'max-content' }}>
          {[...tools.slice(0, 14), ...tools.slice(0, 14), ...tools.slice(0, 14)].map((tool, i) => (
            <ToolItem key={`r1-${i}`} tool={tool} />
          ))}
        </div>
        
        {/* Row 2 — reverse direction */}
        <div className="flex animate-marquee-reverse" style={{ width: 'max-content' }}>
          {[...tools.slice(14), ...tools.slice(14), ...tools.slice(14)].map((tool, i) => (
            <ToolItem key={`r2-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

TrustBar.displayName = 'TrustBar';
export default TrustBar;
