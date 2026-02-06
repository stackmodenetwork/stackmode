import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { BookOpen, Terminal, ArrowRight, Gift, Play, Download, Check, Star, Zap, Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsGallery } from '@/components/ReviewsGallery';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';

const freeResource = {
  title: "The Key Steps To Profitability",
  excerpt: "Complete roadmap covering trading AND business fundamentals. Risk management, strategy development, and consistent execution.",
  courseLink: "https://stackmodechris.systeme.io/freecourse",
  ebookLink: "https://stackmodechris.systeme.io/freebook"
};

const Learn = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Library | Free Resources & Courses | Stackmode</title>
        <meta name="description" content="Free coding tutorials, trading resources, and business training. Get instant access to courses, ebooks, and more." />
      </Helmet>

      <MainHeader />

      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <BookOpen size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-mono">RESOURCE LIBRARY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Free <span className="text-cyan-400">Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Courses, ebooks, and guides. No credit card required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Network CTA */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-cyan-500/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card/50 border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <Zap size={12} />
                    BEST VALUE
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Stackmode Academy
                  </h2>
                  <p className="text-muted-foreground">
                    Coding school, business training, AI tools, live coaching — all in one membership.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground line-through">$200</span>
                    <span className="text-3xl font-bold text-foreground">$50<span className="text-sm text-muted-foreground">/mo</span></span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-background font-bold px-6 py-3 rounded-lg group-hover:bg-cyan-400 transition-colors">
                    <span>Join Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
                <Gift size={16} />
                100% FREE
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Start Here
              </h2>
              <p className="text-muted-foreground">
                Get instant access to our flagship free training.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-card/30 border-2 border-emerald-500/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {freeResource.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {freeResource.excerpt}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {['Risk Management', 'Strategy Development', 'Business Scaling', 'Execution'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={freeResource.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-lg transition-all"
                    >
                      <Play size={18} />
                      <span>Get Free Course</span>
                    </a>
                    <a
                      href={freeResource.ebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-border hover:border-emerald-500/50 text-foreground font-semibold px-6 py-3 rounded-lg transition-all"
                    >
                      <Download size={18} />
                      <span>Download eBook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-violet-500/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Explore More</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            <ScrollReveal delay={0.1}>
              <Link
                to="/coding"
                className="group block bg-card/30 border border-border/50 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <Terminal size={28} className="text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                  Coding School
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Learn to build SaaS with AI tools
                </p>
                <span className="text-cyan-400 text-sm font-medium flex items-center gap-1">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Link
                to="/business"
                className="group block bg-card/30 border border-border/50 rounded-xl p-6 hover:border-violet-500/30 transition-colors"
              >
                <Users size={28} className="text-violet-400 mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                  Business Services
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Done-for-you or learn it yourself
                </p>
                <span className="text-violet-400 text-sm font-medium flex items-center gap-1">
                  View Options <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-2xl font-bold text-foreground">What Students Say</h2>
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

export default Learn;
