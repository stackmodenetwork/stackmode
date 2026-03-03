import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const anim = (i: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: i * 0.06 },
});

const showcaseItems = [
  { img: '/images/showcase/client-jd.png', title: 'Fitness & Coaching', tools: 'Lovable · Midjourney' },
  { img: '/images/showcase/client-legacy.png', title: 'Global Business', tools: 'Claude · Figma' },
  { img: '/images/showcase/client-7uvhavin.png', title: 'Music & Entertainment', tools: 'Lovable · DALL-E' },
  { img: '/images/showcase/client-ceoturbo.png', title: 'Growth Platform', tools: 'Cursor · Stripe' },
];

export default function BrandShowcaseBento() {
  return (
    <section className="section section--glass">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Stackmode AI Prompts</p>
          <h2 className="section-header__title">Build Your Brand. Make It Yours.</h2>
          <p className="section-header__subtitle">
            Every prompt includes [bracket variables] for your brand — so no two outputs look the same.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              {...anim(i)}
              className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.tools}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto' }}>
            Logos, websites, pitch decks, video scripts, product photos, business cards — all built with AI prompts.
          </p>
          <Link to="/shop" className="btn-primary btn-sm" onClick={() => window.scrollTo(0, 0)}>
            Browse the AI Prompt Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
