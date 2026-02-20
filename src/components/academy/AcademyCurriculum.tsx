import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface CurriculumBlock {
  title: string;
  items: string[];
}

interface Phase {
  id: string;
  label: string;
  subtitle: string;
  blocks: CurriculumBlock[];
}

const phases: Phase[] = [
  {
    id: 'phase1',
    label: 'Phase 1',
    subtitle: 'AI Development Mastery',
    blocks: [
      {
        title: 'AI-Powered Full-Stack Development',
        items: ['Build with Claude, Gemini, GPT-4 & Cursor', 'No-code/low-code frameworks', 'Prompt engineering for developers'],
      },
      {
        title: 'Real Software Projects',
        items: ['SaaS applications from scratch', 'Mobile apps (iOS & Android)', 'Chrome extensions & automation tools', 'API integrations & webhooks'],
      },
      {
        title: 'The StackFinder Tool',
        items: ['Exclusive AI trading analysis tool', 'Real-time market scanning with AI', 'Learn how it was built AND how to use it'],
      },
      {
        title: 'Launch & Monetization',
        items: ['Get your first paying customers', 'Pricing strategies that work', 'Scaling from $0 to $10K/month'],
      },
    ],
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    subtitle: 'Trading & Investing',
    blocks: [
      {
        title: 'The Stackmode Strategy',
        items: ['Proprietary approach to stocks, crypto & options', 'When to buy, sell & hold', 'Chart patterns that actually matter'],
      },
      {
        title: 'AI-Enhanced Trading',
        items: ['Using StackFinder for market analysis', 'Algorithmic thinking for traders', 'Backtesting strategies with data'],
      },
      {
        title: 'Asset Class Mastery',
        items: ['Stock market (long-term & swing trading)', 'Cryptocurrency strategies', 'Options trading (conservative approaches)'],
      },
      {
        title: 'Fundamental Analysis',
        items: ['Reading financial statements', 'Macro economic indicators', 'News analysis & market sentiment'],
      },
    ],
  },
  {
    id: 'phase3',
    label: 'Phase 3',
    subtitle: 'Wealth Stacking System',
    blocks: [
      {
        title: 'The Compound Effect',
        items: ['Automated profit funneling', 'Tax optimization strategies', 'Building lasting wealth infrastructure'],
      },
      {
        title: 'Advanced Trading Techniques',
        items: ['Position sizing formulas', 'Multi-timeframe analysis', 'Hedging strategies'],
      },
      {
        title: 'Business Scaling',
        items: ['Hiring & team building with AI', 'Creating recurring revenue systems', 'Multiple income stream architecture'],
      },
      {
        title: 'The Exit Strategy',
        items: ['When and how to take profits', 'Portfolio rebalancing', 'Setting up generational wealth'],
      },
    ],
  },
];

export const AcademyCurriculum = () => (
  <section id="curriculum" className="py-16 sm:py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
          What You'll Master Inside Stackmode Academy
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          A structured 12-month journey from complete beginner to confident builder & investor.
        </p>
      </motion.div>

      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="w-full bg-card border border-border/50 rounded-xl p-1 h-auto flex-wrap">
          {phases.map((phase) => (
            <TabsTrigger
              key={phase.id}
              value={phase.id}
              className="flex-1 min-w-[100px] rounded-lg py-2.5 text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {phase.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {phases.map((phase) => (
          <TabsContent key={phase.id} value={phase.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-primary font-medium text-sm mb-6 mt-4">{phase.subtitle}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {phase.blocks.map((block) => (
                  <div key={block.title} className="bg-card/60 border border-border/50 rounded-xl p-5">
                    <h4 className="font-bold text-foreground text-sm mb-3">✓ {block.title}</h4>
                    <div className="space-y-2">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check size={13} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);
