import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    q: "I have zero tech skills and can't code. Is this for me?",
    a: "Absolutely. That's the power of AI development. We teach you to build software using AI assistants like Claude, Gemini, and Cursor. These tools write the code FOR you—you just need to learn how to direct them. Complete beginners have built full apps within their first month.",
  },
  {
    q: 'How much money do I need to start the business side?',
    a: "Technically, you can start with $0. Many AI tools have free tiers, and hosting can cost as little as $5–10/month. We teach you how to validate ideas and get your first paying customers BEFORE spending serious money. For the trading side, we recommend having at least $500–1000 in 'house money' (profits from your software) before you start.",
  },
  {
    q: "Be honest—is this 'passive income' actually passive?",
    a: "Hell no. Anyone who tells you it's passive is lying. Building software requires work. Trading requires discipline. BUT—what we teach you is how to build SYSTEMS that eventually run with minimal input. Month 1 is hard. Month 6 is easier. Month 12, you have automated income streams.",
  },
  {
    q: "Why shouldn't I just take my savings and start trading immediately?",
    a: "Because that's how 90% of traders blow up their accounts. Our philosophy: Build software → Generate income → Trade with PROFITS, not savings. This way, you're trading with 'house money,' and losses don't hurt your life.",
  },
  {
    q: 'Do I need to be an expert to use your trading signals?',
    a: "We don't do 'signals' like most groups. We teach you HOW to find opportunities yourself using our StackFinder tool and education. The goal is to make YOU an independent trader, not dependent on someone else's calls.",
  },
  {
    q: "What's the time commitment?",
    a: 'Minimum 5–10 hours per week to see real progress. This includes watching lessons, practicing development, paper trading, and engaging with the community. Treat it like a part-time job investing in your future.',
  },
  {
    q: 'When will the Atlanta campus open?',
    a: "We're targeting late 2026 for our first cohort. Online members get priority access when applications open. The campus will be invite-only initially, so join the academy now to secure your spot.",
  },
  {
    q: 'Can I really build an app without knowing how to code?',
    a: "Yes, with AI assistance. Tools like Claude, Cursor, and Gemini can write entire applications based on your descriptions. You'll learn prompt engineering—how to communicate what you want to the AI. You still need to understand CONCEPTS, but you don't need to memorize syntax.",
  },
  {
    q: 'What if I just want to learn trading, not development?',
    a: "You can focus on either path, but we STRONGLY recommend doing both. Trading requires capital. Building software generates that capital. The combination is where the magic happens.",
  },
  {
    q: 'Is there a community?',
    a: "YES. Private Discord with active daily engagement. You'll connect with other students, share wins, get feedback on your projects, discuss trades, and stay accountable. This isn't a solo journey—you're joining a movement.",
  },
];

export const AcademyFAQ = () => (
  <section className="py-16 sm:py-20 px-4 bg-card/30">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
          Questions? We've Got Answers.
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
