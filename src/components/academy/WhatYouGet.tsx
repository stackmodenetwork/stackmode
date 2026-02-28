import { motion } from 'framer-motion';
import { Code, TrendingUp, Globe, MessageCircle, Layers, DollarSign } from 'lucide-react';

const items = [
  {
    icon: Layers,
    title: 'The AI Agentic Stack',
    desc: 'Learn how to build AI apps that think, learn, and act on their own. No coding experience needed — AI does the heavy lifting.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Code,
    title: 'Build Real Software',
    desc: 'Learn to make apps that people pay for. AI writes the code — you just tell it what to build. Ship your first product fast.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Stack Your Assets',
    desc: 'Stocks, crypto, options. Take your software income and multiply it. Simple setups that work in any market.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Globe,
    title: 'StackFinder AI Tool',
    desc: 'Your trading edge. Scans 1000+ assets, finds breakouts, and keeps you ahead of the market while you build.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'Private Community',
    desc: 'Join students making real money every day. Share wins, get help, stay accountable. You\'re never alone.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: DollarSign,
    title: 'Built for Real Results',
    desc: 'This isn\'t theory. Members are building $10K+ software, landing clients, and growing portfolios. You\'re next.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export const WhatYouGet = () => (
  <section className="py-14 sm:py-18 px-4 bg-card/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Learn to Build Software, Trade Stocks & <span className="text-primary">Make Money With AI</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto leading-relaxed">
          No experience needed. We teach you step by step. Start earning in your first month.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-background border border-border/50 rounded-xl p-4 sm:p-5 hover:border-primary/30 transition-colors"
          >
            <div className={`p-2 rounded-lg ${item.bg} w-fit mb-2.5`}>
              <item.icon size={18} className={item.color} />
            </div>
            <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
