import { ArrowRight, Check, Calendar, Layers, Brain, Wrench, Database } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { SoftwareProofSection } from '@/components/SoftwareProofSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/images/sm-logo.png" alt="Stackmode" className="w-10 h-10 object-contain" />
              <span className="text-lg font-bold text-foreground font-mono">STACKMODE</span>
            </div>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
            >
              <Calendar size={16} />
              <span className="hidden sm:inline">Book a FREE Call</span>
              <span className="sm:hidden">Free Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-10 pb-8">
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Layers size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wide">The Future of Software</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 leading-tight"
          >
            The Old Stack Is Dead.
            <br />
            <span className="text-cyan-400">The AI Stack Is Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-lg mb-4 max-w-2xl mx-auto"
          >
            "Full stack" used to mean React + Node. Now it means <span className="text-foreground font-medium">AI Agents, Memory Layers, and Tool Orchestration</span>. 
            If your company isn't building with the new stack, you're already behind.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-bold mb-6"
          >
            Stackmode builds the new stack for you — <span className="text-cyan-400">or teaches you how</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex justify-center"
          >
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              <Calendar size={20} />
              <span>Book a FREE Architecture Call</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The New AI Stack */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
              The AI Agent Stack
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-sm max-w-xl mx-auto">
              Every modern app now runs on four layers. We build all of them.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Brain,
                title: 'The Model Layer',
                subtitle: 'The Brain',
                desc: 'GPT, Gemini, Claude — the AI that thinks. We pick the right model for your product.',
                color: 'cyan',
              },
              {
                icon: Database,
                title: 'The Memory Layer',
                subtitle: 'The Context Stack',
                desc: 'Agents remember users, past actions, and preferences. No more starting from zero.',
                color: 'violet',
              },
              {
                icon: Layers,
                title: 'The Planning Layer',
                subtitle: 'The Task Stack',
                desc: 'Big goals get broken into sub-tasks. The agent pushes, pops, and executes — just like a developer.',
                color: 'emerald',
              },
              {
                icon: Wrench,
                title: 'The Tool Layer',
                subtitle: 'The Hands',
                desc: 'APIs, search, code execution — the tools the agent uses to get real work done.',
                color: 'amber',
              },
            ].map((layer, i) => (
              <ScrollReveal key={layer.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-card/50 border-2 border-${layer.color}-500/20 rounded-xl p-5 hover:border-${layer.color}-500/40 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-${layer.color}-500/10`}>
                      <layer.icon size={20} className={`text-${layer.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{layer.title}</h3>
                      <span className={`text-${layer.color}-400 text-xs font-medium`}>{layer.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{layer.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground text-center mb-6">
              Why Your Business Needs This
            </h2>
            <div className="space-y-3">
              {[
                'AI agents are replacing traditional software teams',
                'Companies using AI stacks ship 10x faster',
                'The old "full stack" skillset is becoming obsolete',
                'Custom AI tools give you an unfair advantage',
                'Every industry needs AI-powered software — now',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                  <Check size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* StackFinder Showcase */}
      <SoftwareProofSection variant="home" />

      <UniversalPageBottom />

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://discord.gg/5zYWSWGMYm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
            </a>
            <a href="https://www.youtube.com/@Stackmodechris" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-400 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Stackmode. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
