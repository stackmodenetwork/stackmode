import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const prompts = [
  { title: 'Investor Pitch Deck', desc: 'Professional 12-slide pitch deck with financial modeling and market analysis.', price: '$14.99' },
  { title: 'Sales Presentation', desc: 'High-converting sales presentation with objection handling and social proof.', price: '$9.99' },
  { title: 'Training & Onboarding', desc: 'Employee training slides with structured modules and visual aids.', price: '$7.99' },
  { title: 'Quarterly Business Review', desc: 'QBR template with KPIs, charts, and executive summary sections.', price: '$8.99' },
  { title: 'Product Launch Deck', desc: 'Go-to-market presentation with competitive analysis and roadmap slides.', price: '$11.99' },
  { title: 'Conference Talk Template', desc: 'Speaker-ready presentation with audience engagement and storytelling flow.', price: 'Free', free: true },
];

const ShopPresentationPrompts = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Presentation Prompts | Stackmode | Christopher Robinson CEO</title>
      <meta name="description" content="Generate pitch decks, sales presentations, and training slides with AI." />
      <link rel="canonical" href="https://stackmode.net/shop/presentation-prompts" />
    </Helmet>
    <SiteNav />
    <main style={{ paddingTop: 80 }}>
      <div className="container px-4">
        <nav className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/prompt-shop" className="hover:text-white">AI Prompt Shop</Link> / <span className="text-white">Presentation Prompts</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl mb-2 font-heading font-bold">Presentation Prompts</h1>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Generate pitch decks, sales presentations, and training slides with AI.</p>
      </div>
      <section className="section section--dark" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {prompts.map(p => (
              <div key={p.title} className="glass-card">
                <span className="text-[10px] uppercase tracking-wider mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.4)' }}>Presentation</span>
                <h3 className="text-lg mb-2 font-heading font-bold">{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className={`text-sm font-bold ${p.free ? 'text-green-400' : 'text-white'}`}>{p.price}</span>
                  <button className="btn-primary btn-sm">Get Prompt</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/prompt-shop" className="btn-glass">← Back to All Prompts</Link>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default ShopPresentationPrompts;
