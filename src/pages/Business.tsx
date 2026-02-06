import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { Globe, Megaphone, Check, ArrowRight, Zap, Users, Calendar, ChevronRight, Code, Rocket, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const Business = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Business Services | Done-For-You Websites & Ads | Stackmode</title>
        <meta name="description" content="Get professional websites and ad campaigns built for you, or learn to do it yourself. Done-for-you agency services or join the network." />
      </Helmet>

      <MainHeader />
      <FreeResourcesCTA variant="banner" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Globe size={16} className="text-violet-400" />
            <span className="text-violet-400 text-sm font-mono font-semibold">STACKMODE SERVICES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
          >
            We Build.
            <br />
            <span className="text-violet-400">You Grow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Need a website? Ads that convert? Choose done-for-you or learn to do it yourself.
          </motion.p>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Done-For-You Path */}
            <ScrollReveal delay={0.1}>
              <div className="bg-gradient-to-br from-violet-500/10 to-transparent border-2 border-violet-500/30 rounded-2xl p-8 h-full">
                <div className="bg-violet-500/20 border border-violet-500/40 rounded-full px-3 py-1 text-xs font-bold text-violet-400 inline-block mb-4">
                  AGENCY SERVICES
                </div>
                
                <div className="w-14 h-14 bg-violet-500/20 border border-violet-500/50 rounded-xl flex items-center justify-center mb-6">
                  <Rocket size={28} className="text-violet-400" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Done-For-You
                </h2>
                <p className="text-muted-foreground mb-6">
                  We handle everything. You focus on your business. Professional websites, ad campaigns, and automation — delivered.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-violet-400 shrink-0" />
                    <span className="text-foreground/80">Custom Website Design & Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-violet-400 shrink-0" />
                    <span className="text-foreground/80">Facebook & Google Ad Campaigns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-violet-400 shrink-0" />
                    <span className="text-foreground/80">Marketing Automation Setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-violet-400 shrink-0" />
                    <span className="text-foreground/80">Ongoing Support & Optimization</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/stackmodechris/architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full bg-violet-500 hover:bg-violet-400 text-white font-bold text-lg px-6 py-4 rounded-lg transition-all"
                >
                  <Calendar size={20} />
                  <span>Book a Free Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  30-min call • No obligation • Custom quote
                </p>
              </div>
            </ScrollReveal>

            {/* DIY Path */}
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-2xl p-8 h-full">
                <div className="bg-cyan-500/20 border border-cyan-500/40 rounded-full px-3 py-1 text-xs font-bold text-cyan-400 inline-block mb-4">
                  JOIN THE ACADEMY
                </div>
                
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/50 rounded-xl flex items-center justify-center mb-6">
                  <Users size={28} className="text-cyan-400" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Do-It-Yourself
                </h2>
                <p className="text-muted-foreground mb-6">
                  Learn to build websites, run ads, and scale your business. Full training library, templates, and community support.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400 shrink-0" />
                    <span className="text-foreground/80">Complete Website Building Courses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400 shrink-0" />
                    <span className="text-foreground/80">Ad Campaign Training & Templates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400 shrink-0" />
                    <span className="text-foreground/80">AI Tools & Automation Guides</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400 shrink-0" />
                    <span className="text-foreground/80">Discord Community + Live Coaching</span>
                  </div>
                </div>

                <a
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full bg-cyan-500 hover:bg-cyan-400 text-background font-bold text-lg px-6 py-4 rounded-lg transition-all"
                >
                  <Zap size={20} />
                  <span>Join for $50/month</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Cancel anytime • Instant access
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-violet-500/5">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What We Build
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From simple landing pages to full e-commerce stores. We've built it all.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Business Websites', desc: 'Professional sites that convert visitors into customers' },
              { icon: Megaphone, title: 'Ad Campaigns', desc: 'Facebook, Google, and social media advertising' },
              { icon: Code, title: 'Custom Software', desc: 'SaaS apps, dashboards, and automation tools' },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:border-violet-500/30 transition-colors">
                  <service.icon size={32} className="text-violet-400 mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Client Results</h2>
            </div>
          </ScrollReveal>
          <ReviewsGallery />
        </div>
      </section>

      {/* Universal Bottom CTA */}
      <UniversalPageBottom />

      <MainFooter />
    </main>
  );
};

export default Business;
