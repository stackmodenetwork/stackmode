import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { Globe, Code, TrendingUp, Palette, Search, Users } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stackmodechris/turboboost';

const anim = (i: number) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { delay: i * 0.06 }
});

const services = [
{ icon: Globe, title: 'Custom Website', desc: 'Mobile-first, fast, SEO-ready — built to convert visitors into clients.', span: 'md:col-span-2' },
{ icon: TrendingUp, title: 'Content Monetization', desc: 'Digital products, offers, funnels, and pricing strategy for your audience.', span: 'md:col-span-1' },
{ icon: Code, title: 'AI Systems & Automation', desc: 'Automated lead nurturing, content pipelines, booking flows that run 24/7.', span: 'md:col-span-1' },
{ icon: Palette, title: 'Custom Dashboards', desc: 'Analytics dashboards, client portals, membership platforms — anything you need.', span: 'md:col-span-1' },
{ icon: Search, title: 'SEO & Traffic Strategy', desc: 'Keyword research, schema markup, and content calendars that drive organic traffic.', span: 'md:col-span-1' },
{ icon: Users, title: '1-on-1 Strategy', desc: 'Direct access to Christopher for business strategy and execution support.', span: 'md:col-span-2' }];


const BrandBoost = () =>
<div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Brand Boost — Done-For-You Website & AI Systems | Stackmode</title>
      <meta name="description" content="Delete the Linktree. Get a real brand. Christopher Robinson builds your complete digital presence." />
      <link rel="canonical" href="https://stackmode.net/brand-boost" />
    </Helmet>

    <SiteNav />

    {/* Hero */}
    <section className="relative min-h-[80vh] flex-col text-center px-4 pt-20 pb-12 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider mb-6"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}>
          Limited Availability
        </span>
        <h1 className="text-4xl sm:text-6xl mb-4" style={{ fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Delete the Linktree.<br />Get a Real Brand.
        </h1>
        <p className="text-base sm:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
          Custom website, content monetization plan, AI systems, and revenue strategy. One person. Full execution.
        </p>
        <div className="flex justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Book Your Free Strategy Call →</a>
        </div>
      </motion.div>
    </section>

    {/* Bento Services Grid */}
    <section id="included" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-header__eyebrow">Everything included</p>
          <p className="section-header__subtitle">Not a consultation. Not a template. A full-stack brand build.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              {...anim(i)}
              className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 group hover:border-white/20 transition-colors ${s.span}`}>
              
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/60" />
                  </div>
                </div>
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>{s.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{s.desc}</p>
              </motion.div>);

        })}
        </div>
      </div>
    </section>

    {/* Client Showcase Proof */}
    





















  

    {/* CTA */}
    <section className="section text-center">
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 className="section-header__title">Your brand is losing money every day</h2>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
          You have the traffic and attention, but you're leaving revenue on the table. Let's fix that.
        </p>
        <a href="https://calendly.com/stackmodechris/turboboost" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Book Your Free Strategy Call →</a>
        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>No obligation · Free 30-min call · Limited spots</p>
      </div>
    </section>

    <SiteFooter />
  </div>;


export default BrandBoost;