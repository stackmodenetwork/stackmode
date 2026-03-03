import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tools = [
  { name: 'ChatGPT', src: '/images/logos/chatgpt.png' },
  { name: 'Claude', src: '/images/logos/claude.png' },
  { name: 'Midjourney', src: '/images/logos/midjourney.png' },
  { name: 'Figma', src: '/images/logos/figma.png' },
  { name: 'Stripe', src: '/images/logos/stripe-new.png' },
  { name: 'Shopify', src: '/images/logos/shopify.png' },
  { name: 'Notion', src: '/images/logos/notion.png' },
  { name: 'GitHub', src: '/images/logos/github.png' },
  { name: 'Vercel', src: '/images/logos/vercel.png' },
  { name: 'Google', src: '/images/logos/google-new.png' },
  { name: 'Perplexity', src: '/images/logos/perplexity.png' },
  { name: 'Runway', src: '/images/logos/runway.png' },
  { name: 'ElevenLabs', src: '/images/logos/elevenlabs.png' },
  { name: 'Reddit', src: '/images/logos/reddit.png' },
  { name: 'OpenAI', src: '/images/logos/openai.png' },
  { name: 'Whop', src: '/images/logos/whop.png' },
  { name: 'Slack', src: '/images/logos/slack-salesforce.png' },
];

export default function ToolsLogoGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="lg:w-2/5 flex-shrink-0">
            <p className="section-header__eyebrow mb-2">Powered by</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Tools we build&nbsp;with
            </h2>
            <p className="text-sm sm:text-base mb-6" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 380 }}>
              We use industry-leading AI, design, and development tools to ship professional products for every client.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary btn-sm" onClick={() => window.scrollTo(0, 0)}>Browse Prompts</Link>
              <Link to="/brand-boost" className="btn-glass btn-sm">View Services →</Link>
            </div>
          </div>

          {/* Right — logo grid */}
          <div className="lg:w-3/5 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="aspect-square rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center p-3 hover:border-white/20 hover:bg-white/[0.08] transition-colors group"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
