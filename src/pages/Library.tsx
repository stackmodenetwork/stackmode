import { Helmet } from 'react-helmet-async';
import { ArrowRight, Gift, TrendingUp, DollarSign, Brain, Shield, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FREE_LINK = 'https://stackmodechris.systeme.io/freeeducation';

const steps = [
  { icon: Brain, title: 'Learn the Mindset', desc: 'How rich people actually think about money.' },
  { icon: DollarSign, title: 'Build Income First', desc: 'Make money before you risk money. Simple.' },
  { icon: TrendingUp, title: 'Grow Your Money', desc: 'Stocks, crypto, real estate — the basics.' },
  { icon: Shield, title: 'Protect Your Bag', desc: 'Don\'t lose what you earned. Risk management.' },
  { icon: Zap, title: 'Stack & Repeat', desc: 'Reinvest profits. Build real wealth over time.' },
];

const Library = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Free Education — Key Steps to Profitability | Stackmode</title>
        <meta name="description" content="Free investing and business education. Learn the key steps to profitability — no fluff, no $5,000 programs. Just real knowledge." />
      </Helmet>

      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono">STACKMODE</span>
            </Link>
            <a
              href={FREE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
            >
              <Gift size={16} />
              Get Free Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Gift size={16} className="text-amber-500" />
            <span className="text-amber-500 text-sm font-bold">100% FREE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-foreground mb-5"
          >
            Key Steps to Profitability
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-foreground text-base sm:text-lg mb-2 max-w-xl mx-auto"
          >
            Stop paying <span className="line-through text-red-500 font-bold">$5,000</span> for outdated programs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg mx-auto"
          >
            Learn investing and business fundamentals — free. No fluff. No upsell traps. Just the real steps to making money.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href={FREE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-lg"
          >
            <Gift size={20} />
            Get Free Access Now
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            What You'll Learn
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-card/50 border border-border/50 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <step.icon size={20} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 border border-border/50 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 text-center">Why is this free?</h2>
            <div className="space-y-3">
              {[
                'Everyone deserves to learn how money works.',
                'We believe in building trust before asking for anything.',
                'The best students come from free education — not hype.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Ready to start?</h2>
          <p className="text-muted-foreground text-sm mb-6">No email required. No tricks. Just hit the button.</p>
          <a
            href={FREE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            <Gift size={20} />
            Get Free Access
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Stackmode Academy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Library;
