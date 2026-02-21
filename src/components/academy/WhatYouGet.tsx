import { motion } from 'framer-motion';
import { Code, TrendingUp, Wrench, MessageCircle, Video, BookOpen, Layers, DollarSign } from 'lucide-react';

const items = [
  {
    icon: Layers,
    title: 'The AI Agentic Stack',
    desc: 'Master the Model, Memory, Planning, and Tool layers. Build AI apps that think, learn, and act on their own.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Code,
    title: 'Build Real Software',
    desc: 'Ship apps people actually pay for. No fluff tutorials — you build products that generate income from day one.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: TrendingUp,
    title: 'Stack Your Assets',
    desc: 'Stocks, crypto, options. Take your software income and multiply it. Learn setups that work in any market.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Wrench,
    title: 'StackFinder AI Tool',
    desc: 'Your edge while you build. Scans 1000+ assets, finds breakouts, and keeps you ahead of the market.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'Private Community',
    desc: 'Daily engagement with students making real money. Share wins, get help, stay accountable.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: DollarSign,
    title: 'Built for Real Results',
    desc: 'This isn\'t theory. Members are building $10K+ software, landing clients, and growing portfolios. You\'re next.',
    color: 'text-accent',
    bg: 'bg-accent/10',
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
          Build Software With AI, Learn to Trade the Markets & <span className="text-primary">Stack Your Assets</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto leading-relaxed">
          Most courses teach you to code. We teach you to build businesses, generate income, and stack wealth — all with the power of AI.
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
            className="bg-background border border-border/50 rounded-xl p-4 sm:p-5 hover:border-border transition-colors"
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
