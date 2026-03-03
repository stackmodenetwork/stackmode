import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const CALENDLY_URL = 'https://calendly.com/stackmodechris/turboboost';

const tickerItems = ['Custom Websites', 'AI Automation', 'SEO Strategy', 'Content Monetization', 'Brand Identity', 'Limited Spots Available'];

const services = [
  { num: '01', title: 'Custom Website', desc: 'No more Linktree. A fully designed, professional website built for your brand — mobile-first, fast, SEO-ready, and built to convert visitors into clients.' },
  { num: '02', title: 'Content Monetization Plan', desc: 'A complete roadmap to turn your content into revenue — digital products, offers, funnels, and pricing strategy aligned to your audience and goals.' },
  { num: '03', title: 'AI Systems & Automation', desc: 'Custom AI workflows built for your business — automated lead nurturing, content generation pipelines, booking flows, and tools that run 24/7 without you.' },
  { num: '04', title: 'Custom Dashboards', desc: 'If you need it, Christopher builds it — analytics dashboards, client portals, booking tools, membership platforms, or any custom web app your business requires.' },
  { num: '05', title: 'SEO & Traffic Strategy', desc: 'Keyword research, on-page optimization, metadata, schema markup, and a content calendar designed to drive organic traffic that converts into real revenue.' },
  { num: '06', title: '1-on-1 Strategy Sessions', desc: 'Direct access to Christopher for personalized business strategy, growth planning, and execution support.' },
];

const BrandBoost = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Brand Boost — Done-For-You Website & AI Systems | Stackmode</title>
      <meta name="description" content="Delete the Linktree. Get a real brand. Christopher Robinson builds your complete digital presence." />
      <link rel="canonical" href="https://stackmode.net/brand-boost" />
    </Helmet>

    <SiteNav />

    {/* Hero */}
    <section className="section text-center" style={{ paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}>
            Limited Availability
          </span>
          <h1 className="text-4xl sm:text-6xl mb-4 font-heading font-bold" style={{ lineHeight: 1.1 }}>
            Delete the Linktree.<br />Get a Real Brand.
          </h1>
          <p className="text-base sm:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            Christopher Robinson builds your complete digital presence — custom website, content monetization plan, AI systems, and revenue strategy. One person. Full execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Book Your Free Strategy Call</a>
            <a href="#included" className="btn-glass btn-lg">See What's Included</a>
          </div>
        </motion.div>
      </div>
    </section>


    {/* Everything Included */}
    <section id="included" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Everything Included</p>
          <p className="section-header__subtitle">This is the full-stack brand build — not a consultation, not a template.</p>
        </div>
        <div className="grid-3">
          {services.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card relative"
            >
              <div className="absolute top-4 left-4 text-4xl font-bold font-heading" style={{ color: 'rgba(255,255,255,0.04)' }}>
                {s.num}
              </div>
              <div className="pt-10">
                <h3 className="text-lg mb-3 font-heading font-bold">{s.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Urgency CTA */}
    <section className="section text-center section--glass">
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 className="section-header__title">Your Brand Is Losing Money Every Day</h2>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          You have the traffic, you have the attention, but you are leaving revenue on the table because your systems aren't optimized. Let's fix that.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Book Your Free Call →</a>
          <a href="#included" className="btn-glass btn-lg">See What's Included</a>
        </div>
        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>No obligation · Free 30-min call · Limited spots</p>
      </div>
    </section>

    {/* Calendly Section */}
    <section className="section text-center">
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 className="section-header__title">Book Your Free Strategy Call</h2>
        <p className="section-header__subtitle mb-8">Pick a time that works for you. Christopher will review your brand and map out a personalized build plan — no obligation.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Book a Call →</a>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default BrandBoost;
