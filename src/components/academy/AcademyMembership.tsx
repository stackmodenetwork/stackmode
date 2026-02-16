import { motion } from 'framer-motion';
import { Wrench, BookOpen, MessageCircle, Target, Code, BarChart3 } from 'lucide-react';

const tools = [
  {
    icon: Wrench,
    title: 'StackFinder AI Tool',
    desc: 'Our proprietary market scanning & analysis software. Find high-probability setups using AI. Only available to members.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: BookOpen,
    title: 'Complete Video Library',
    desc: '200+ hours of step-by-step tutorials. New content added weekly. Never outdated.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: MessageCircle,
    title: 'Private Discord Community',
    desc: '24/7 access to fellow students, successful alumni, and instructors. Real accountability.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Target,
    title: 'Live Trading Sessions',
    desc: 'Watch real trades in real-time. Learn the decision-making process. Weekly market analysis.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Code,
    title: 'AI Development Stack',
    desc: 'Curated toolkit of the best AI coding assistants, templates, and frameworks. Save months of trial and error.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: BarChart3,
    title: 'Portfolio Templates',
    desc: 'Copy our exact risk management spreadsheets, trading journals, and business dashboards.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
];

export const AcademyMembership = () => (
  <section className="py-16 sm:py-20 px-4 bg-card/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
          What's Inside Your Academy Membership
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-background border border-border/50 rounded-xl p-5 hover:border-border transition-colors"
          >
            <div className={`p-2.5 rounded-lg ${tool.bg} w-fit mb-3`}>
              <tool.icon size={20} className={tool.color} />
            </div>
            <h3 className="font-bold text-foreground text-sm mb-2">{tool.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
