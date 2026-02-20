import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useRef } from 'react';

const showcaseItems = [
  {
    title: 'AI Market Scanner',
    description: 'Scan 1000+ assets for breakout setups in seconds',
    image: '/images/showcase/market-scanner.png',
  },
  {
    title: 'Stackmode Scout AI',
    description: 'AI assistant that finds high-probability trades for you',
    image: '/images/showcase/scout-ai.png',
  },
  {
    title: 'Smart Calculators',
    description: 'Position sizing, risk/reward, and profit calculators',
    image: '/images/showcase/calculators.png',
  },
  {
    title: 'Live Crypto News',
    description: 'Real-time crypto news feed so you never miss a move',
    image: '/images/showcase/crypto-news.png',
  },
];

export function SoftwareShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-3">
            <Code2 size={14} className="text-primary" />
            <span className="text-xs font-mono text-primary font-semibold">Included With Your Membership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Your Trading Edge. <span className="text-primary">Included Free.</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            While you build your own software, use our tools to catch the best trades and stay informed on the market.
          </p>
        </div>

        {/* Horizontal scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center rounded-xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="px-4 py-3">
                <h3 className="text-sm font-bold text-foreground font-mono">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
