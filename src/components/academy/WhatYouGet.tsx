import { motion } from 'framer-motion';
import { Code, TrendingUp, Wrench, MessageCircle, Video, BookOpen } from 'lucide-react';

const items = [
  {
    icon: Code,
    title: 'AI Coding Lessons',
    desc: 'Build full apps using AI — no coding experience needed.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Trading Education',
    desc: 'Stocks, crypto, options. Learn to find your own setups.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Wrench,
    title: 'StackFinder AI Tool',
    desc: 'Our proprietary market scanner. Members only.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: MessageCircle,
    title: 'Private Discord',
    desc: 'Daily engagement with students, alumni & instructors.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Video,
    title: 'Live Sessions',
    desc: 'Watch real trades and real builds. Every week.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: BookOpen,
    title: '200+ Hours of Content',
    desc: 'Step-by-step tutorials. New lessons every week.',
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
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Everything You Get for <span className="text-primary">$50/mo</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
