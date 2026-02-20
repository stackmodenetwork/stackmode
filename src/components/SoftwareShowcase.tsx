import { motion } from 'framer-motion';
import { Code2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const showcaseItems = [
  {
    title: 'StackFinder Market Scanner',
    description: 'Scan 1000+ assets for breakout setups in seconds. AI-powered signals, sector analysis, and live watchlist sync.',
    image: '/images/showcase/stackfinder-scanner.png',
  },
  {
    title: 'Smart Calculators',
    description: 'Position sizing, risk/reward, and profit calculators built to protect your capital on every trade.',
    image: '/images/showcase/calculators.png',
  },
];

export function SoftwareShowcase() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev - 1 + showcaseItems.length) % showcaseItems.length : null);
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex(prev => prev !== null ? (prev + 1) % showcaseItems.length : null);
  }, []);

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-3">
            <Code2 size={14} className="text-primary" />
            <span className="text-xs font-mono text-primary font-semibold">Included With Your Membership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            StackFinder Gives You the <span className="text-[#00FF88] drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]">Trading Edge</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            While you're building your software, StackFinder keeps you ahead of the market. Scan for trades, manage risk, and never miss a move.
          </p>
        </div>

        {/* Centered side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {showcaseItems.map((item, i) => (
            <motion.button
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(i)}
              className="rounded-xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/40 transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-md hover:shadow-xl hover:shadow-primary/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="px-4 py-3">
                <h3 className="text-sm font-bold text-foreground font-mono">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">Tap any image to enlarge</p>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none">
          <div className="relative flex items-center justify-center max-h-[80vh]">
            <button onClick={() => setSelectedIndex(null)} className="absolute -top-10 right-2 p-2 text-foreground/70 hover:text-foreground transition-colors z-30">
              <X size={24} />
            </button>
            <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors">
              <ChevronRight size={24} />
            </button>
            {selectedIndex !== null && (
              <motion.img
                key={selectedIndex}
                src={showcaseItems[selectedIndex].image}
                alt={showcaseItems[selectedIndex].title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl border-2 border-primary/30"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
