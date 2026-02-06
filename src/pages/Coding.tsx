import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Code, Terminal, Cpu, Sparkles, ArrowRight, Check, Zap, Users, Bot, Globe, Rocket, Brain, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { StackFinderPromo } from '@/components/StackFinderPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { SoftwareProofSection } from '@/components/SoftwareProofSection';

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'Lovable', icon: '💜' },
  { name: 'Cursor AI', icon: '⚡' },
  { name: 'Claude AI', icon: '🤖' },
  { name: 'Bolt.new', icon: '⚡' },
  { name: 'Replit', icon: '💻' },
  { name: 'v0.dev', icon: '▲' },
  { name: 'Windsurf', icon: '🌊' },
];

const curriculum = [
  {
    phase: 'PHASE 1',
    title: 'Foundation',
    items: ['AI Coding Fundamentals', 'Prompt Engineering', 'No-Code to Low-Code', 'Environment Setup'],
    color: 'cyan',
  },
  {
    phase: 'PHASE 2',
    title: 'Build',
    items: ['Full-Stack Development', 'Database Design', 'API Integration', 'Authentication'],
    color: 'emerald',
  },
  {
    phase: 'PHASE 3',
    title: 'Launch',
    items: ['SaaS Architecture', 'Payment Integration', 'Deployment & Hosting', 'User Onboarding'],
    color: 'violet',
  },
  {
    phase: 'PHASE 4',
    title: 'Scale',
    items: ['Marketing Automation', 'AI Agents', 'Revenue Optimization', 'Exit Strategies'],
    color: 'amber',
  },
];

const saasIdeas = [
  { name: 'Healthcare SaaS', desc: 'Patient portals, scheduling, HIPAA-compliant tools', icon: '🏥' },
  { name: 'B2B Tools', desc: 'CRMs, invoicing, project management', icon: '🏢' },
  { name: 'AI Automation', desc: 'Chatbots, workflows, content generation', icon: '🤖' },
  { name: 'E-commerce', desc: 'Stores, inventory, payment systems', icon: '🛒' },
];

const Coding = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Stackmode Coding School | Learn to Build SaaS with AI | No Degree Needed</title>
        <meta name="description" content="Learn to code and build profitable SaaS products using AI tools like Cursor, Lovable, and Claude. Real skills > theoretical degrees. Start building today." />
      </Helmet>

      <MainHeader />
      <FreeResourcesCTA variant="banner" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Terminal size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono font-semibold">STACKMODE CODING SCHOOL</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
          >
            Stop <span className="text-muted-foreground line-through">Learning</span>
            <br />
            Start <span className="text-cyan-400">Building</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Real dev skills. AI-powered workflows. Build and launch your own SaaS — 
            <span className="text-foreground font-medium"> no CS degree required</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-lg px-8 py-4 rounded-lg transition-all shadow-lg shadow-cyan-500/25"
            >
              <Rocket size={20} />
              <span>Join The School</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/library"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-border hover:border-cyan-500/50 text-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-all"
            >
              <span>Free Resources</span>
              <ChevronRight size={18} />
            </Link>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-lg px-3 py-2 text-sm"
              >
                <span>{tech.icon}</span>
                <span className="text-muted-foreground font-mono">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Software Proof Section */}
      <SoftwareProofSection variant="coding" />

      {/* Anti-Guru Section */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                The "Guru" Problem
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted-foreground">$5,000+ bootcamps that teach outdated skills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted-foreground">4-year degrees that don't teach real building</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span className="text-muted-foreground">YouTube tutorials without structure</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-foreground">AI-powered development skills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-foreground">Build real products, not just learn theory</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span className="text-foreground">$50/month — cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
                <Code size={16} className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-mono">CURRICULUM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                From Zero to SaaS
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A structured path from complete beginner to launching your own profitable software product.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.1}>
                <div className={`bg-card/50 border border-${phase.color}-500/30 rounded-xl p-6 h-full hover:border-${phase.color}-500/60 transition-colors`}>
                  <div className={`text-${phase.color}-400 text-xs font-mono font-bold mb-2`}>{phase.phase}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className={`text-${phase.color}-400`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Build Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What You'll Build
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Not another todo app. Real, revenue-generating SaaS products.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {saasIdeas.map((idea, i) => (
              <ScrollReveal key={idea.name} delay={i * 0.1}>
                <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors group">
                  <div className="text-4xl mb-4">{idea.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {idea.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{idea.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* StackFinder Promo - Example of what you can build */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <StackFinderPromo variant="coding" />
          </ScrollReveal>
        </div>
      </section>

      {/* Universal Bottom CTA */}
      <UniversalPageBottom />

      <MainFooter />
    </main>
  );
};

export default Coding;
