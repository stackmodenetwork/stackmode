import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Check, Calendar, TrendingUp, Code, Briefcase } from 'lucide-react';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ReviewsBackgroundCarousel } from '@/components/ReviewsBackgroundCarousel';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <MainHeader />
      <FreeResourcesCTA variant="banner" />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 pt-8 pb-6">
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
          >
            Make More Money.
            <br />
            <span className="text-cyan-400">Keep More Money.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-sm sm:text-lg mb-6 max-w-xl mx-auto"
          >
            We teach you 3 simple steps to build real income and grow your wealth.
          </motion.p>

          {/* 3-Step Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6 text-sm"
          >
            {[
              { step: '1', label: 'Get Views & Make Income', color: 'text-violet-400' },
              { step: '2', label: 'Build & Sell Software', color: 'text-cyan-400' },
              { step: '3', label: 'Invest & Grow Wealth', color: 'text-emerald-400' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2">
                <span className={`${item.color} font-bold text-lg`}>{item.step}.</span>
                <span className="text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Anti-guru line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm font-bold mb-4"
          >
            Stop paying <span className="text-destructive line-through">$5,000</span>{' '}
            <span className="text-foreground">for outdated courses</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://whop.com/stackmode-academy/educationalservice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              <Zap size={20} />
              <span>Join The Academy — $50/mo</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://calendly.com/stackmodechris/architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              <Calendar size={20} />
              <span>FREE Consultation Call</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-4 sm:py-6 px-4">
        <ReviewsBackgroundCarousel />
      </section>

      {/* 3 Path Cards */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
              Your Path to More Income
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-sm">
              Pick where you want to start. Each one makes you money.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Briefcase,
                title: 'Content & Business',
                desc: 'Get views online. Turn those views into real income.',
                color: 'violet',
                link: '/business',
              },
              {
                icon: Code,
                title: 'Code & Sell Software',
                desc: 'Build apps with AI. Sell them for monthly income.',
                color: 'cyan',
                link: '/coding',
              },
              {
                icon: TrendingUp,
                title: 'Invest Your Income',
                desc: 'Put your money into stocks, crypto, and real estate.',
                color: 'emerald',
                link: '/investing',
              },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <Link
                  to={card.link}
                  className={`group block bg-card/50 border-2 border-${card.color}-500/30 rounded-xl p-6 hover:border-${card.color}-400 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-all`}
                >
                  <card.icon size={28} className={`text-${card.color}-400 mb-3`} />
                  <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{card.desc}</p>
                  <span className={`text-${card.color}-400 text-sm font-medium flex items-center gap-1`}>
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Bottom */}
      <UniversalPageBottom />

      <MainFooter />
    </main>
  );
};

export default Home;
