import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import DigitalCardPurchase from '@/components/landing/DigitalCardPurchase';

const features = [
  { icon: '📱', title: 'TAP TO SHARE', desc: 'One tap sends your entire brand — socials, website, portfolio. No app needed.' },
  { icon: '♾️', title: 'UNLIMITED UPDATES', desc: 'Change your info anytime. Your card stays current — forever.' },
  { icon: '🌍', title: 'WORKS EVERYWHERE', desc: 'Compatible with iPhone, Android, and any NFC-enabled device.' },
  { icon: '💎', title: 'PREMIUM BUILD', desc: 'Matte black finish with custom branding. Looks as sharp as your business.' },
];

const BusinessCards = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>NFC Digital Business Cards | CEO Turbo x Stackmode — Tap to Connect</title>
      <meta name="description" content="Premium NFC digital business cards. Tap to share your brand instantly. No paper, no limits, always updated. Built by CEO Turbo." />
      <link rel="canonical" href="https://stackmode.net/businesscards" />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://stackmode.net/businesscards" />
      <meta property="og:title" content="NFC Digital Business Cards | CEO Turbo x Stackmode" />
      <meta property="og:description" content="Premium NFC digital business cards. Tap to share your brand instantly." />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>NFC Digital Business Cards by CEO Turbo x Stackmode — Tap to Connect</h1>
    </div>

    {/* ═══ HERO ═══ */}
    <section className="relative z-10 pt-20 pb-10 sm:pt-28 sm:pb-16 px-4 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[10px] tracking-[0.3em] uppercase mb-4 text-muted-foreground"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        CEO TURBO × STACKMODE
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-lg sm:text-2xl md:text-3xl mb-3" style={{
          fontFamily: "'Press Start 2P', monospace",
          color: '#00e5ff',
          textShadow: '0 0 25px rgba(0,229,255,0.3)',
        }}>
          DIGITAL BUSINESS CARDS
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-base sm:text-xl max-w-xl mx-auto mb-6 text-foreground leading-relaxed"
        style={{ fontWeight: 500 }}
      >
        Paper cards get tossed. Yours gets <span style={{ color: '#39ff14' }}>tapped</span>.
        <br className="hidden sm:block" />
        Share your brand in one second — no app, no limits.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm text-muted-foreground mb-8 max-w-md mx-auto"
      >
        Premium NFC technology in a matte black card that makes you unforgettable at every meeting, event, and handshake.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        href="#get-your-card"
        className="btn-cta text-xs sm:text-sm inline-block"
      >
        [ GET YOUR CARD → ]
      </motion.a>
    </section>

    {/* ═══ FEATURES ═══ */}
    <section className="relative z-10 py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="terminal-card p-4 sm:p-5 text-center"
          >
            <div className="text-2xl sm:text-3xl mb-3">{f.icon}</div>
            <h3 className="text-[9px] sm:text-xs mb-2" style={{
              fontFamily: "'Press Start 2P', monospace",
              color: '#00e5ff',
              textShadow: '0 0 8px rgba(0,229,255,0.3)',
            }}>
              {f.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed" style={{ fontWeight: 500 }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ═══ SOCIAL PROOF ═══ */}
    <section className="relative z-10 py-10 sm:py-16 px-4 text-center" style={{ background: 'rgba(6,8,18,0.9)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-8"
        >
          {[
            { stat: '60+', label: 'Cards Delivered' },
            { stat: '100%', label: 'NFC Compatible' },
            { stat: '∞', label: 'Free Updates' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "'Press Start 2P', monospace", color: '#39ff14', textShadow: '0 0 12px rgba(57,255,20,0.3)' }}>
                {s.stat}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto italic">
          "I hand my card to someone and they're instantly impressed. It's a conversation starter every time."
        </p>
        <p className="text-xs mt-2" style={{ color: '#00e5ff', fontFamily: "'Orbitron', sans-serif" }}>
          — STACKMODE CLIENT
        </p>
      </div>
    </section>

    {/* ═══ PURCHASE / SHOPIFY ═══ */}
    <DigitalCardPurchase />

    <SiteFooter />
  </div>
);

export default BusinessCards;
