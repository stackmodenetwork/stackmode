import { motion } from 'framer-motion';
import { Code2, Rocket } from 'lucide-react';

const showcaseItems = [
  {
    title: 'AI Market Scanner',
    description: 'Real-time market analysis powered by AI',
    image: '/images/showcase/market-scanner.png',
  },
  {
    title: 'Live Crypto News',
    description: 'Aggregated news feed with sentiment tracking',
    image: '/images/showcase/crypto-news.png',
  },
  {
    title: 'Stackmode Scout AI',
    description: 'AI-powered trading assistant & signals',
    image: '/images/showcase/scout-ai.png',
  },
  {
    title: 'Smart Calculators',
    description: 'Options pricing & risk management tools',
    image: '/images/showcase/calculators.png',
  },
];

export function SoftwareShowcase() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Code2 size={14} className="text-primary" />
            <span className="text-xs font-mono text-primary font-semibold tracking-wide">Built by Students</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-mono tracking-tight leading-tight">
            Build Software. Stack Assets.{' '}
            <span className="text-primary">Get Paid.</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Learn to code AI-powered tools like these and sell them to companies for{' '}
            <span className="text-foreground font-semibold">$10,000+</span>. Our academy teaches you to build, ship, and monetize real software.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-xl border border-primary/20 bg-card/30 overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground font-mono">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Rocket size={14} className="text-primary" />
            All built with skills taught inside the academy
          </div>
        </div>
      </div>
    </section>
  );
}
