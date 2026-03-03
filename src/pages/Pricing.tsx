import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const tiers = [
  {
    label: 'Free', name: 'AI Prompt Shop', price: '$0', cadence: 'forever',
    tagline: 'Browse and buy individual prompts. No subscription needed.',
    benefits: ['Browse AI Prompt Shop', 'Buy only what you need', 'Zero monthly fees', 'Discord (General channels)'],
    cta: 'Browse Shop', href: '/shop', external: false, featured: false, isSubscription: false,
  },
  {
    label: 'Stackmode', name: 'Stackmode Architect', price: '$20', cadence: '/mo',
    tagline: 'Everything you need to build with AI and trade smarter.',
    benefits: ['Full AI Prompt Library', 'Stackfinder AI Scanner', 'All Academy courses', 'Weekly live coaching', 'Discord (All channels)'],
    cta: 'Get Access — $20/mo', href: '', external: false, featured: true, badge: 'Most Popular', isSubscription: true,
  },
  {
    label: 'CEO', name: 'Brand Boost', price: 'Custom', cadence: '',
    tagline: 'Done-for-you: website, AI systems, content plan, and revenue strategy.',
    benefits: ['Custom website built for you', 'Content monetization plan', 'AI systems & automation', 'Custom dashboards', '1-on-1 strategy sessions'],
    cta: 'Contact', href: '/brand-boost', external: false, featured: false, isSubscription: false,
  },
];

const comparisonRows = [
  { feature: 'Buy individual prompts', free: true, stack: true, ceo: true },
  { feature: 'Full Prompt Library', free: false, stack: true, ceo: true },
  { feature: 'Stackfinder AI Scanner', free: false, stack: true, ceo: true },
  { feature: 'All courses + live coaching', free: false, stack: true, ceo: true },
  { feature: 'Done-for-you brand build', free: false, stack: false, ceo: true },
];

const Pricing = () => {
  const { user, isSubscribed } = useAuth();
  const navigate = useNavigate();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!user) { navigate('/auth'); return; }
    if (isSubscribed) {
      // open portal
      const { data } = await supabase.functions.invoke('customer-portal');
      if (data?.url) window.open(data.url, '_blank');
      return;
    }
    setCheckoutLoading(true);
    const { data, error } = await supabase.functions.invoke('create-checkout');
    if (!error && data?.url) window.location.href = data.url;
    else setCheckoutLoading(false);
  };

  const getCtaLabel = (tier: typeof tiers[0]) => {
    if (!tier.isSubscription) return tier.cta;
    if (!user) return 'Sign In to Subscribe';
    if (isSubscribed) return 'Manage Subscription';
    return 'Get Access — $20/mo';
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Pricing — Pick Your Stack | Stackmode</title>
        <meta name="description" content="Simple, transparent pricing. Start free. Upgrade when you're ready. No hidden fees." />
        <link rel="canonical" href="https://stackmode.net/pricing" />
      </Helmet>
      <SiteNav />
      <main style={{ paddingTop: 80 }}>
        <div className="text-center px-4 mb-10">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Simple, transparent pricing</p>
          <h1 className="text-5xl sm:text-6xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}>Pick Your Stack</h1>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>Start free. Upgrade when you're ready. No hidden fees.</p>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="grid-3" style={{ maxWidth: 1000, margin: '0 auto' }}>
              {tiers.map(tier => (
                <div key={tier.label} className="relative rounded-2xl p-6 sm:p-8 flex flex-col" style={{
                  background: tier.featured ? '#111' : '#0a0a0a', border: `1px solid ${tier.featured ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                }}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: '#fff', color: '#000' }}>
                      {tier.badge}
                    </div>
                  )}
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{tier.label}</p>
                  <h3 className="text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{tier.price}</span>
                    {tier.cadence && <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{tier.cadence}</span>}
                  </div>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>{tier.tagline}</p>
                  <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  <div className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2 text-sm">
                        <span className="text-white font-bold">✓</span>
                        <span style={{ color: 'rgba(255,255,255,0.7)' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  {tier.isSubscription ? (
                    <button
                      onClick={handleSubscribe}
                      disabled={checkoutLoading}
                      className={`${tier.featured ? 'btn-primary' : 'btn-glass'} btn-lg w-full disabled:opacity-50`}
                    >
                      {checkoutLoading ? 'Redirecting...' : getCtaLabel(tier)}
                    </button>
                  ) : tier.external ? (
                    <a href={tier.href} target="_blank" rel="noopener noreferrer" className="btn-glass btn-lg w-full">{tier.cta}</a>
                  ) : (
                    <Link to={tier.href} className="btn-glass btn-lg w-full text-center">{tier.cta}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-left" style={{ minWidth: 600, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="px-4 sm:px-6 py-3 text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white">Free</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white" style={{ background: 'rgba(255,255,255,0.03)' }}>Architect $20</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white">CEO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <td className="px-4 sm:px-6 py-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{row.feature}</td>
                      <td className="px-4 py-3 text-white">{row.free ? '✓' : <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>}</td>
                      <td className="px-4 py-3 text-white" style={{ background: 'rgba(255,255,255,0.02)' }}>{row.stack ? '✓' : <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>}</td>
                      <td className="px-4 py-3 text-white">{row.ceo ? '✓' : <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Pricing;
