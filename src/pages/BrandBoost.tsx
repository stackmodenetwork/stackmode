import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';

const CEOTURBO_URL = 'https://ceoturbo.com';

const services = [
  { tag: '#SEO', title: 'SEO Domination', desc: 'Rank on Google. Organic traffic systems that compound over time. First page or we keep working.', code: 'seo.deploy(strategy="authority", rank=1)' },
  { tag: '#AI', title: 'AI Integration', desc: 'Automate workflows, customer service, and content creation with custom AI pipelines.', code: 'ai.integrate(pipeline="custom", auto=true)' },
  { tag: '#BUILD', title: 'Custom Systems', desc: 'Websites, SaaS dashboards, CRMs — built from scratch to match your exact business model.', code: 'build(type="saas", stack="modern", deploy=true)' },
];

const steps = [
  { num: '01', title: 'APPLY', desc: 'Tell us about your brand and goals' },
  { num: '02', title: 'STRATEGY CALL', desc: 'We build a custom growth roadmap' },
  { num: '03', title: 'WE BUILD', desc: 'Our team executes — you focus on business' },
  { num: '04', title: 'YOU GROW', desc: 'Watch traffic, leads & revenue climb' },
];

const BrandBoost = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>Brand Boost by CeoTurbo | SEO, AI & Custom Business Systems</title>
      <meta name="description" content="Brand Boost powered by CeoTurbo.com — SEO domination, AI integration, and custom-built business systems. Get your brand seen, found, and scaled." />
      <meta name="keywords" content="brand boost, ceoturbo, seo services, ai integration, custom websites, saas development, christopher robinson, business systems" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net/brand-boost" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net/brand-boost" />
      <meta property="og:title" content="Brand Boost by CeoTurbo — SEO, AI & Business Systems" />
      <meta property="og:description" content="Get your brand built right. SEO, AI pipelines, and custom software systems by CeoTurbo.com." />
      <meta property="og:site_name" content="Stackmode.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChristopherRCEO" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>Brand Boost by CeoTurbo — SEO, AI Integration & Custom Business Systems by Christopher Robinson</h1>
    </div>

    {/* Hero */}
    <section className="relative z-10 min-h-[70vh] flex items-center justify-center pt-14 pb-12 px-4 text-center">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(24px, 5vw, 48px)', color: '#ff2d9b', textShadow: '0 0 30px rgba(255,45,155,0.4)' }}
        >
          BRAND BOOST
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base mt-3 mb-2 tracking-[0.2em]"
          style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}
        >
          POWERED BY CEOTURBO.COM
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-muted-foreground"
        >
          We don't just build websites — we build brands that dominate search, automate with AI, and scale with custom systems. Your unfair advantage starts here.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          href={CEOTURBO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xs sm:text-sm inline-block animate-pulse"
          style={{ animationDuration: '2s' }}
        >
          [ VISIT CEOTURBO.COM → ]
        </motion.a>
      </div>
    </section>

    {/* Service Cards */}
    <section className="relative z-10 py-12 px-4">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="terminal-card p-5"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <span className="text-[9px] tracking-[0.2em] mb-2 block" style={{ fontFamily: "'Orbitron', sans-serif", color: '#ff2d9b' }}>{s.tag}</span>
            <h3 className="text-sm mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: '#e8f4ff' }}>{s.title}</h3>
            <p className="text-sm mb-4 text-muted-foreground">{s.desc}</p>
            <div className="rounded px-3 py-1.5 text-[10px]" style={{
              background: 'rgba(255,45,155,0.05)',
              border: '1px solid rgba(255,45,155,0.1)',
              fontFamily: "'Orbitron', sans-serif",
              color: '#39ff14',
            }}>
              &gt; {s.code}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* How It Works */}
    <section className="relative z-10 py-16 sm:py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs sm:text-sm mb-10 neon-pink"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        HOW IT WORKS
      </motion.h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center p-4"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "'Press Start 2P', monospace", color: '#ff2d9b', textShadow: '0 0 15px rgba(255,45,155,0.3)' }}>
              {step.num}
            </div>
            <h3 className="text-xs mb-1.5" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff', fontWeight: 700 }}>{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden sm:block absolute right-0 top-1/2 text-lg" style={{ color: 'rgba(255,45,155,0.3)' }}>→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="relative z-10 py-16 sm:py-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm sm:text-lg mb-6" style={{ fontFamily: "'Press Start 2P', monospace", color: '#ff2d9b', textShadow: '0 0 20px rgba(255,45,155,0.3)' }}>
          READY TO BE SEEN?
        </h2>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 text-muted-foreground">
          Your competitors are already building. Don't get left behind. Let CeoTurbo handle your digital presence while you focus on growth.
        </p>
        <a href={CEOTURBO_URL} target="_blank" rel="noopener noreferrer"
          className="btn-cta text-sm sm:text-base px-8 py-3 inline-block">
          [ GET STARTED WITH CEOTURBO → ]
        </a>
      </motion.div>
    </section>

    <SiteFooter />
  </div>
);

export default BrandBoost;
