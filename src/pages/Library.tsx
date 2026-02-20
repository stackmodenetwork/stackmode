import { Helmet } from 'react-helmet-async';
import { BookOpen, Download, Play, ArrowRight, Gift, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

const freeResources = [
  {
    title: 'AI Development Starter Guide',
    description: 'Learn the fundamentals of building software with AI assistants. Perfect for complete beginners.',
    type: 'eBook',
    icon: BookOpen,
    color: 'cyan',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
  {
    title: 'Intro to Prompt Engineering',
    description: 'Master the art of communicating with AI to build exactly what you envision.',
    type: 'Course',
    icon: Play,
    color: 'violet',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
  {
    title: 'Trading Fundamentals 101',
    description: 'Understand stocks, crypto, and options before risking a single dollar.',
    type: 'Course',
    icon: Play,
    color: 'emerald',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
  {
    title: 'The Stackmode Blueprint',
    description: 'Our philosophy: Build first, then stack. A free guide to sustainable wealth in the AI era.',
    type: 'eBook',
    icon: BookOpen,
    color: 'amber',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
  {
    title: 'Build Your First App in 1 Hour',
    description: 'Step-by-step video walkthrough of building a real app using AI tools — no coding required.',
    type: 'Video',
    icon: Play,
    color: 'rose',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
  {
    title: 'Portfolio & Risk Management Templates',
    description: 'Spreadsheets and dashboards to track your trades and manage risk like a pro.',
    type: 'Template',
    icon: Download,
    color: 'blue',
    href: 'https://whop.com/stackmode-academy/educationalservice/',
  },
];

const Library = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Free Resources & Library | Stackmode Academy</title>
        <meta name="description" content="Access free courses, eBooks, and templates to start learning AI development and investing. No cost, no catch." />
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
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(200,100%,50%)] hover:bg-[hsl(200,100%,60%)] text-background font-bold px-4 py-2 rounded-lg transition-all text-sm"
            >
              Join Academy
              <ArrowRight size={16} />
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
            Free Courses, eBooks & Templates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
          >
            Start your journey into AI development and smart investing — completely free. No credit card, no catch.
          </motion.p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {freeResources.map((resource, i) => (
              <ScrollReveal key={resource.title}>
                <motion.a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="block bg-card/50 border border-border/50 rounded-xl p-5 hover:border-amber-500/30 transition-all group h-full"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-${resource.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                      <resource.icon size={20} className={`text-${resource.color}-400`} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider text-${resource.color}-400 bg-${resource.color}-500/10 px-2 py-0.5 rounded-full`}>
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2 group-hover:text-amber-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                    <span>Access Free</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Want the Full Academy Experience?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Get access to 200+ hours of content, the StackFinder AI tool, live trading sessions, and our private community.
            </p>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(260,100%,65%)] to-[hsl(200,100%,50%)] text-white font-bold px-8 py-4 rounded-xl transition-all hover:opacity-90 shadow-lg"
            >
              Join Stackmode Academy — $50/mo
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>
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
