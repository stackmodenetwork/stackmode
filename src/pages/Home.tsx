import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import { ReviewWall } from '@/components/ReviewWall';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

const pillars = [
  { icon: '🤖', title: 'AI & AUTOMATION', desc: 'Master ChatGPT, Claude, Midjourney — build AI workflows that save hours daily.', color: '#39ff14' },
  { icon: '💻', title: 'CODING & SOFTWARE', desc: 'Python, JavaScript, React — from zero to deploying real apps and SaaS products.', color: '#00e5ff' },
  { icon: '📈', title: 'TRADING & INVESTING', desc: 'Stock screening, technical analysis, portfolio building — real strategies that work.', color: '#ff6b1a' },
  { icon: '🏗️', title: 'BUSINESS & BRANDING', desc: 'Launch products, build brands, create income streams — the CEO playbook.', color: '#ff2d9b' },
];

const curriculum = [
  { phase: 'PHASE 01', title: 'Foundation', items: ['AI Tool Mastery', 'Python Fundamentals', 'Web Dev Basics'] },
  { phase: 'PHASE 02', title: 'Build', items: ['Full-Stack Apps', 'SaaS Products', 'Automation Systems'] },
  { phase: 'PHASE 03', title: 'Invest', items: ['Stock Analysis', 'Portfolio Strategy', 'Passive Income'] },
  { phase: 'PHASE 04', title: 'Scale', items: ['Brand Building', 'Marketing Systems', 'Revenue Streams'] },
];

const Home = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>Stackmode Academy | AI, Coding, Software &amp; Trading School | Christopher Robinson</title>
      <meta name="description" content="Stackmode Academy — founded by Christopher Robinson (StackmodeChris). Learn AI tools, software development, Python coding, stock trading, and investing." />
      <meta name="keywords" content="stackmode academy, stackmodechris, christopher robinson CEO, learn AI online, coding and trading school" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net/academy" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net/academy" />
      <meta property="og:title" content="Stackmode Academy — AI, Coding &amp; Trading School" />
      <meta property="og:description" content="Christopher Robinson's complete education system. Learn AI, code software, and master trading/investing." />
      <meta property="og:site_name" content="Stackmode Academy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stackmodechris" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>Stackmode Academy — Learn AI, Coding & Trading with Christopher Robinson CEO</h1>
    </div>

    {/* Hero */}
    <section className="relative z-10 min-h-[80vh] flex items-center justify-center pt-14 pb-12 px-4 text-center">
      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="block" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(28px, 6vw, 56px)', color: '#39ff14', textShadow: '0 0 30px rgba(57,255,20,0.4)' }}>
            STACKMODE
          </span>
          <span className="block mt-1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(20px, 4vw, 40px)', color: '#00e5ff', textShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
            ACADEMY
          </span>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-8 text-muted-foreground">
          The complete education system for mastering AI, coding, trading & business — built by Christopher Robinson for builders who want real results.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3">
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-xs sm:text-sm">
            [ ENROLL NOW → ]
          </a>
          <a href="#curriculum" className="btn-ghost text-xs sm:text-sm">[ VIEW CURRICULUM ]</a>
        </motion.div>
      </div>
    </section>

    {/* 4 Core Pillars */}
    <section className="relative z-10 py-16 sm:py-24 px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center text-xs sm:text-sm mb-10 neon-green" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        CORE PILLARS
      </motion.h2>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="terminal-card p-5 text-center">
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="text-[11px] sm:text-xs mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: p.color, textShadow: `0 0 10px ${p.color}40` }}>
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Reviews */}
    <ReviewWall />

    {/* Curriculum Path */}
    <section id="curriculum" className="relative z-10 py-16 sm:py-24 px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center text-xs sm:text-sm mb-10 neon-cyan" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        CURRICULUM PATH
      </motion.h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {curriculum.map((c, i) => (
          <motion.div key={c.phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="terminal-card p-5">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <span className="text-[9px] tracking-[0.2em] block mb-1" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}>{c.phase}</span>
            <h3 className="text-xs mb-3" style={{ fontFamily: "'Press Start 2P', monospace", color: '#e8f4ff' }}>{c.title}</h3>
            <ul className="space-y-1.5">
              {c.items.map(item => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span style={{ color: '#39ff14' }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Watch & Learn */}
    <section className="relative z-10 py-16 sm:py-24 px-4 text-center">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-xs sm:text-sm mb-6 neon-green" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        WATCH & LEARN
      </motion.h2>
      <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
        Free lessons on YouTube. Subscribe and level up before you even enroll.
      </p>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-2xl mx-auto terminal-card overflow-hidden" style={{ boxShadow: '0 0 60px rgba(57,255,20,0.1)' }}>
        <div className="flex gap-1.5 px-3 py-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
        </div>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed?listType=user_uploads&list=ChristopherRobinson-CEO"
            title="Stackmode Academy YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
      <a href="https://www.youtube.com/@ChristopherRobinson-CEO" target="_blank" rel="noopener noreferrer"
        className="btn-ghost text-xs mt-6 inline-block">
        [ SUBSCRIBE ON YOUTUBE → ]
      </a>
    </section>

    {/* Pricing & FAQ */}
    <AcademyPricing />
    <AcademyFAQ />

    {/* Final CTA */}
    <section className="relative z-10 py-16 sm:py-24 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-sm sm:text-lg mb-6" style={{ fontFamily: "'Press Start 2P', monospace", color: '#39ff14', textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>
          READY TO STACK?
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 text-muted-foreground">
          Join 500+ members learning AI, coding, trading & business. Your future self will thank you.
        </p>
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer"
          className="btn-cta text-sm sm:text-base px-8 py-3 inline-block">
          [ JOIN STACKMODE ACADEMY → ]
        </a>
      </motion.div>
    </section>

    <SiteFooter />
  </div>
);

export default Home;
