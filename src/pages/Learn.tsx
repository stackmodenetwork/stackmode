import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowRight, Code, Zap, MessageSquare, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';

const Learn = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Get Your Software Built | Stackmode</title>
        <meta name="description" content="Tell us what you need built. We'll architect and code it using the latest AI stack. Book a free call to get started." />
      </Helmet>

      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono">STACKMODE</span>
            </a>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
            >
              <Calendar size={16} />
              <span className="hidden sm:inline">Get a Quote</span>
              <span className="sm:hidden">Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-14 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Code size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wide">Software Shop</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-foreground mb-5 leading-tight"
          >
            <span>Tell Us What You Need.</span>{' '}
            <span className="text-cyan-400">We Build It.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-lg mb-8 max-w-xl mx-auto"
          >
            Apps, dashboards, AI tools, automations — we architect and code your software using the latest AI stack. Just book a free call.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="https://calendly.com/stackmodechris/architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            <Calendar size={20} />
            <span>Book a FREE Quote Call</span>
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: MessageSquare, step: '1', title: 'Tell Us Your Idea', desc: 'Book a free call. Describe what you need built.', color: 'cyan' },
              { icon: Code, step: '2', title: 'We Build It', desc: 'Our team architects and codes your software with the AI stack.', color: 'violet' },
              { icon: Zap, step: '3', title: 'You Launch', desc: 'Get your finished product. Ship it to the world.', color: 'emerald' },
            ].map((item, i) => (
              <ScrollReveal key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/50 border border-border/50 rounded-xl p-5 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-${item.color}-500/10 mb-3`}>
                    <item.icon size={20} className={`text-${item.color}-400`} />
                  </div>
                  <div className="text-xs text-muted-foreground font-bold mb-1">STEP {item.step}</div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              What We Build
            </h2>
            <div className="space-y-3">
              {[
                'Web apps & SaaS platforms',
                'AI-powered tools & chatbots',
                'Internal dashboards & admin panels',
                'Automations & API integrations',
                'Landing pages & MVPs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                  <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Ready to Build?</h2>
            <p className="text-muted-foreground text-sm mb-5">Book a free call. Tell us what you need. Get a custom quote.</p>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              <Calendar size={20} />
              <span>Book a FREE Quote Call</span>
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <UniversalPageBottom />

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Stackmode. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Learn;
