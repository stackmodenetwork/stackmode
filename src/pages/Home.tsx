import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

const features = [
  { title: 'Automated Signals', items: ['Real-time alerts', 'Portfolio optimization'], icon: '📡' },
  { title: 'AI Asset Stacking', items: ['No-code development', 'Build 10x faster'], icon: '🤖' },
  { title: 'No-Code Development', items: ['Full websites & apps', 'SaaS tool builds'], icon: '💻' },
  { title: '1-on-1 Strategy', items: ['Direct access', 'Personalized roadmap'], icon: '🎯' },
];

const tracks = [
  {
    num: '01',
    title: 'Build with AI',
    desc: 'No code. No limits. Build full websites, apps, automations, and client tools using AI. Christopher walks you through the exact workflow.',
    items: ['AI-Powered Web Development', 'Prompt Engineering Mastery', 'Lovable, Claude, and Cursor Workflows', 'SaaS & Client Tool Builds', 'Automations That Save Hours'],
    cta: 'Start Building',
  },
  {
    num: '02',
    title: 'Learn Trading',
    desc: 'Stocks, crypto, and forex. Learn how to read charts, stack income streams, and trade with confidence using Christopher\'s proven strategy.',
    items: ['Technical Analysis Foundations', 'Stocks, Crypto & Forex Basics', 'Risk Management & Position Sizing', 'AI-Assisted Trade Scanning', 'Building Multiple Income Streams'],
    cta: 'Start Trading',
  },
];

const results = [
  { name: 'TRUE LEGACY', sub: 'Global Business Enterprise', stat: '340% traffic increase', quote: "Christopher's systems completely transformed my workflow. We saw a 340% traffic increase almost immediately after deploying the Stackmode frameworks for our global launch." },
  { name: 'ZAHPHYSIQUE', sub: 'Health & Wellness Coaching', stat: '12x more booked calls', quote: "The Academy taught me how to automate my lead flow. I am getting 12x more booked calls than I ever was before. I stopped guessing and started executing." },
  { name: 'SWOLE JD', sub: 'Fitness Coaching Platform', stat: '500+ organic views in 72hrs', quote: "I launched a brand new coaching funnel heavily utilizing AI. Within the first 72 hours we hit 500+ organic views and converted our first high-ticket clients." },
];

const Academy = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Stackmode Academy — AI, Trading & Asset Stacking | Christopher Robinson</title>
      <meta name="description" content="One enrollment. Three wealth-building disciplines. Learn AI software, master trading, and stack digital assets." />
      <link rel="canonical" href="https://stackmode.net/academy" />
    </Helmet>

    <SiteNav />

    {/* Hero */}
    <section className="section text-center" style={{ paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex justify-center mb-6">
            <svg viewBox="0 0 24 24" fill="white" className="w-16 h-16">
              <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
              <path d="M6 10.27v5.38C6 17.5 8.69 19 12 19s6-1.5 6-3.35v-5.38l-6 2.73-6-2.73z" />
            </svg>
          </div>
          <h1 className="section-header__title">Stackmode Academy</h1>
          <p className="section-header__subtitle mb-8">
            One enrollment. Three wealth-building disciplines. Learn AI software, master trading, and stack digital assets — all by Christopher Robinson, CEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Join the Academy</a>
            <a href="#tracks" className="btn-glass btn-lg">See What's Inside</a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Grow Faster */}
    <section className="section section--glass">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Grow Faster With Our All-In-One Solution</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card text-center"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{f.title}</h3>
              <div className="flex flex-col gap-1">
                {f.items.map(item => (
                  <span key={item} className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Two Tracks */}
    <section id="tracks" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Two Tracks. One Platform.</h2>
          <p className="section-header__subtitle">Master the skills that actually build wealth.</p>
        </div>
        <div className="grid-2">
          {tracks.map((track, i) => (
            <motion.div key={track.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card relative"
            >
              <div className="absolute top-4 right-4 text-5xl font-bold" style={{ color: 'rgba(255,255,255,0.04)', fontFamily: "'Barlow Condensed', sans-serif" }}>
                {track.num}
              </div>
              <h3 className="text-2xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{track.title}</h3>
              <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{track.desc}</p>
              <div className="flex flex-col gap-2 mb-6">
                {track.items.map(item => (
                  <span key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span className="text-white font-bold">✓</span> {item}
                  </span>
                ))}
              </div>
              <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">{track.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Verified Results */}
    <section className="section section--glass">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Don't take our word for it. Look at the numbers.</h2>
          <p className="section-header__subtitle">Real, verified results from builders scaling their income with Stackmode systems.</p>
        </div>
        <div className="grid-3">
          {results.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
            >
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontStyle: 'italic' }}>
                "{r.quote}"
              </p>
              <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-base font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{r.name}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section text-center">
      <div className="container" style={{ maxWidth: 600 }}>
        <h2 className="section-header__title">Enroll in Stackmode Academy Today</h2>
        <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg mt-6 inline-block">Join the Academy →</a>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default Academy;
