import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import TrustBar from '@/components/TrustBar';
import { ReviewWall } from '@/components/ReviewWall';
import DigitalCardPurchase from '@/components/landing/DigitalCardPurchase';

/* ═══ ECOSYSTEM CARD ═══ */
const EcoCard = ({ badge, badgeColor, title, copy, cta, href, isExternal, icon, delay }: {
  badge: string; badgeColor: string; title: string; copy: string; cta: string;
  href: string; isExternal?: boolean; icon: string; delay: number;
}) => {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="terminal-card p-5 sm:p-6 h-full flex flex-col"
    >
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
      </div>
      <div className="text-2xl mb-3">{icon}</div>
      <span className="inline-block text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded mb-3 self-start font-bold" style={{
        fontFamily: "'Orbitron', sans-serif",
        background: `${badgeColor}20`,
        color: badgeColor,
        border: `1px solid ${badgeColor}40`,
      }}>
        {badge}
      </span>
      <h3 className="text-sm sm:text-base mb-2" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: '#e8f4ff' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1 mb-4 text-muted-foreground" style={{ fontWeight: 500 }}>
        {copy}
      </p>
      <span className="btn-cta text-[10px] py-2 px-4 text-center">[ {cta} → ]</span>
    </motion.div>
  );

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">{inner}</a>;
  }
  return <Link to={href} className="no-underline">{inner}</Link>;
};

/* ═══ ABOUT SECTION ═══ */
const AboutSection = () => (
  <section className="relative py-16 sm:py-24 px-4" style={{ background: 'rgba(6,8,18,0.9)' }}>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="terminal-card p-3 relative scanlines"
      >
        <div className="flex gap-1.5 mb-2 px-2 pt-2">
          <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }} />
        </div>
        <img src="/images/stackmodechris-about-new.png" alt="Christopher Robinson CEO StackmodeChris"
          className="w-full aspect-square object-cover rounded" style={{ filter: 'saturate(0.85)' }} loading="lazy" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase mb-3 cursor-blink" style={{
          fontFamily: "'Orbitron', sans-serif", color: '#00e5ff',
        }}>
          [ FOUNDER & CEO ]
        </p>
        <h2 className="text-lg sm:text-xl mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          <span className="neon-green">Christopher</span>{' '}
          <span style={{ color: '#e8f4ff' }}>Robinson</span>
        </h2>
        <p className="text-sm mb-4" style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}>
          @StackmodeChris
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-6 text-foreground" style={{ fontWeight: 500 }}>
          Christopher Robinson is a serial entrepreneur, educator, and tech investor based in Dunwoody, GA. 
          From web design to AI systems to stock market strategy — he built Stackmode.net as the home base 
          for everyone ready to CODE, BUILD, and INVEST their way to freedom.
        </p>
        <div className="flex gap-3">
          {[
            { href: 'https://www.instagram.com/christopherrobinsonceo/', icon: '📸' },
            { href: 'https://www.tiktok.com/@stackmodechris___', icon: '🎵' },
            { href: 'https://x.com/ChristopherRCEO', icon: '𝕏' },
            { href: 'https://www.linkedin.com/in/stackmodechris/', icon: '💼' },
          ].map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-xl opacity-60 hover:opacity-100 transition-opacity">{s.icon}</a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ═══ MAIN LANDING PAGE ═══ */
const Landing = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>Stackmode.net | Christopher Robinson CEO — Code. Build. Invest.</title>
      <meta name="description" content="Learn to code, build income streams, and invest smarter with Christopher Robinson CEO (Stackmodechris). Courses, AI tools, prompt packs & more at Stackmode.net." />
      <meta name="keywords" content="christopher robinson ceo, stackmode, stackmodechris, make money online, coding courses, saas, ai tools, passive income, investing, trading, web design, stackmode academy" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net" />
      <meta property="og:title" content="Stackmode.net | Christopher Robinson CEO — Code. Build. Invest." />
      <meta property="og:description" content="Learn to code, build income streams, and invest smarter with Christopher Robinson CEO." />
      <meta property="og:site_name" content="Stackmode.net" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChristopherRCEO" />
      <meta name="twitter:creator" content="@ChristopherRCEO" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>Stackmode.net — Learn to Code, Build & Invest with Christopher Robinson CEO (StackmodeChris)</h1>
    </div>

    {/* ═══ HERO ═══ */}
    <section className="relative z-10 min-h-screen flex items-center pt-14 pb-12 px-4">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Left — 60% */}
        <div className="lg:col-span-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 sm:mb-6 cursor-blink"
            style={{ fontFamily: "'Orbitron', sans-serif", color: '#00e5ff' }}
          >
            [ CHRISTOPHER ROBINSON CEO ]
          </motion.p>

          <div className="mb-6 sm:mb-8">
            {['CODE.', 'BUILD.', 'INVEST.'].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
              >
                <span className={`block ${i === 0 ? 'neon-green' : i === 1 ? 'neon-cyan' : 'neon-pink'}`} style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 'clamp(28px, 6vw, 52px)',
                  lineHeight: 1.3,
                }}>
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl max-w-lg mb-6 sm:mb-8 leading-relaxed text-foreground"
            style={{ fontWeight: 500 }}
          >
            Stop waiting. Start stacking. The tools, courses, and systems that turn ambition into income.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-6"
          >
            <Link to="/academy" className="btn-cta text-xs sm:text-sm">[ EXPLORE THE ACADEMY → ]</Link>
            <Link to="/prompt-shop" className="btn-ghost text-xs sm:text-sm">[ BROWSE THE SHOP → ]</Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-xs text-muted-foreground"
          >
            ★★★★★ Rated on Trustpilot · 500+ students · Founded by Christopher Robinson CEO
          </motion.p>
        </div>

        {/* Right — 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-2 relative"
        >
          <div className="terminal-card overflow-hidden" style={{ boxShadow: '0 0 60px rgba(57,255,20,0.15)' }}>
            <div className="flex gap-1.5 px-3 py-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
            </div>
            <video
              autoPlay muted loop playsInline
              className="w-full aspect-video object-cover"
              poster="/images/stackmodechris-about-new.png"
            >
              <source src="/videos/promo-hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Ticker marquee */}
          <div className="mt-3 overflow-hidden rounded" style={{ background: 'rgba(4,6,14,0.9)', border: '1px solid rgba(57,255,20,0.08)' }}>
            <div className="flex animate-marquee py-1.5" style={{ width: 'max-content' }}>
              {[...Array(3)].map((_, g) => (
                <span key={g} className="text-[10px] tracking-[0.15em] whitespace-nowrap px-2" style={{
                  fontFamily: "'Orbitron', sans-serif", color: '#39ff14', opacity: 0.4,
                }}>
                  CODE · BUILD · INVEST · TRADE · AUTOMATE · SCALE · PASSIVE INCOME · AI TOOLS · SAAS · WEBDESIGN ·{' '}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ═══ TRUST BAR — moved up ═══ */}
    <TrustBar />

    {/* ═══ REVIEWS — "REAL RESULTS" moved above ecosystem ═══ */}
    <div className="relative z-10">
      <ReviewWall />
    </div>

    {/* ═══ WHAT IS STACKMODE — 3 Cards ═══ */}
    <section className="relative z-10 py-16 sm:py-24 px-4" style={{ background: 'rgba(6,8,18,0.9)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: '💻', title: 'CODE', copy: 'Learn real web dev & AI development skills that pay', color: '#ff6b1a' },
            { icon: '📈', title: 'BUILD', copy: 'Launch SaaS, apps & income systems from scratch', color: '#39ff14' },
            { icon: '💹', title: 'INVEST', copy: 'Master stocks, trading & passive income strategies', color: '#00e5ff' },
          ].map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="terminal-card p-5 text-center"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-sm sm:text-base mb-2" style={{
                fontFamily: "'Press Start 2P', monospace", color: card.color,
                textShadow: `0 0 10px ${card.color}`,
              }}>{card.title}</h3>
              <p className="text-sm text-muted-foreground" style={{ fontWeight: 500 }}>{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ ECOSYSTEM ═══ */}
    <section className="relative z-10 py-16 sm:py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm sm:text-lg mb-10 sm:mb-14 neon-green"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        THE STACKMODE ECOSYSTEM
      </motion.h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
        <EcoCard badge="LEARN" badgeColor="#39ff14" icon="🧠" title="Stackmode Academy" 
          copy="Courses on coding, AI, investing & building income. Real skills. Real results."
          cta="ENTER ACADEMY" href="/academy" delay={0} />
        <EcoCard badge="SHOP" badgeColor="#ff6b1a" icon="⌨️" title="Prompt Shop"
          copy="Done-for-you AI prompts for websites, presentations, images & videos."
          cta="BROWSE PROMPTS" href="/prompt-shop" delay={0.1} />
        <EcoCard badge="SOFTWARE" badgeColor="#00e5ff" icon="📊" title="StackFinder"
          copy="Find winning stocks faster. Proprietary software built for serious investors."
          cta="FIND STOCKS" href="/stackfinder" delay={0.2} />
        <EcoCard badge="AGENCY" badgeColor="#ff2d9b" icon="⚡" title="Brand Boost by CeoTurbo"
          copy="SEO, AI integration & custom business systems. Get your brand built right."
          cta="BOOST MY BRAND" href="https://ceoturbo.com" isExternal delay={0.3} />
      </div>
    </section>

    {/* ═══ ABOUT ═══ */}
    <AboutSection />

    {/* ═══ DIGITAL CARD ═══ */}
    <div className="relative z-10">
      <DigitalCardPurchase />
    </div>

    <SiteFooter />
  </div>
);

export default Landing;
