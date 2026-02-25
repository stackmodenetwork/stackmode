import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Do I need coding experience?',
    a: 'No. AI writes the code for you. You just learn how to direct it. Complete beginners have built full apps in their first month.',
  },
  {
    q: 'How much money do I need to start?',
    a: "You can start for free. Many AI tools have free tiers and hosting costs $5–10/month. For trading, we recommend using profits from your software — not your savings.",
  },
  {
    q: 'What do I get for $50/mo?',
    a: 'Exclusive educational video content, the StackFinder AI tool, private community chat, live trading sessions, AI coding lessons, and new content every week. Cancel anytime.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no commitments. Cancel with one click whenever you want.',
  },
  {
    q: 'Is there a community?',
    a: "Yes — a private community chat with daily engagement. Connect with other students, share wins, get feedback, discuss trades, and stay accountable.",
  },
];

export const AcademyFAQ = () => (
  <section className="py-14 sm:py-18 px-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Common Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border/50 rounded-xl px-5 data-[state=open]:border-primary/30">
            <AccordionTrigger className="text-sm text-left font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
