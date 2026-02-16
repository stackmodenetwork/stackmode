import { motion } from 'framer-motion';
import { Bot, DollarSign, TrendingUp, Check } from 'lucide-react';

const columns = [
  {
    icon: Bot,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'BUILD WITH AI',
    subtitle: 'Master AI-Powered Development',
    items: [
      'Build full-stack apps without traditional coding',
      'Use Gemini, Claude, Cursor & cutting-edge AI tools',
      'Create SaaS products, mobile apps & automation',
      'No prior experience required—AI is your co-pilot',
    ],
  },
  {
    icon: DollarSign,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    title: 'GENERATE INCOME',
    subtitle: 'Turn Your Software Into Cash Flow',
    items: [
      'Launch creations to paying customers',
      'Learn SaaS, subscriptions & one-time sales',
      'Marketing automation & customer acquisition',
      'Build products people actually pay for',
    ],
  },
  {
    icon: TrendingUp,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    title: 'STACK & MULTIPLY',
    subtitle: 'Invest Your Profits Intelligently',
    items: [
      'Master stocks, crypto & options trading',
      'Use our proprietary StackFinder AI tool',
      'Learn technical & fundamental analysis',
      'Risk management that protects your capital',
    ],
  },
];

export const AcademyDifference = () => (
  <section className="py-16 sm:py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
          The Only Academy That Teaches Both Sides of Wealth
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Build income-generating software, then multiply it through strategic investing.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/60 border border-border/50 rounded-2xl p-6 hover:border-border transition-colors"
          >
            <div className={`p-3 rounded-xl ${col.bgColor} w-fit mb-4`}>
              <col.icon size={24} className={col.color} />
            </div>
            <h3 className="font-bold text-foreground text-sm tracking-wide mb-1">{col.title}</h3>
            <p className={`text-xs ${col.color} font-medium mb-4`}>{col.subtitle}</p>
            <div className="space-y-2.5">
              {col.items.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className={`${col.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
