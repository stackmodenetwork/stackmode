import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const prompts = [
  { title: 'YouTube Hook Generator', desc: 'Proven hook formulas that stop the scroll and boost retention.', price: 'Free', free: true },
  { title: 'Reel & TikTok Scripts', desc: 'Short-form video scripts designed for engagement and virality.', price: '$5.99' },
  { title: 'Video Sales Letter (VSL)', desc: 'High-converting video scripts for product launches and webinars.', price: '$9.99' },
  { title: 'YouTube Thumbnail Concepts', desc: 'AI-generated thumbnail ideas with composition and color guidance.', price: '$4.99' },
  { title: 'Content Calendar Generator', desc: '30-day video content calendar with hooks, topics, and CTAs.', price: '$7.99' },
  { title: 'Storyboard Creator', desc: 'Scene-by-scene storyboards for YouTube, ads, and course content.', price: '$8.99' },
];

const ShopVideoPrompts = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Video Design Prompts | Stackmode | Christopher Robinson CEO</title>
      <meta name="description" content="YouTube thumbnails, video scripts, reel calendars, and storyboards." />
      <link rel="canonical" href="https://stackmode.net/shop/video-prompts" />
    </Helmet>
    <SiteNav />
    <main style={{ paddingTop: 80 }}>
      <div className="container px-4">
        <nav className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/prompt-shop" className="hover:text-white">AI Prompt Shop</Link> / <span className="text-white">Video Design Prompts</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl mb-2 font-heading font-bold">Video Design Prompts</h1>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>YouTube thumbnails, video scripts, reel calendars, and storyboards.</p>
      </div>
      <section className="section section--dark" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {prompts.map(p => (
              <div key={p.title} className="glass-card">
                <span className="text-[10px] uppercase tracking-wider mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.4)' }}>Video</span>
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

export default ShopVideoPrompts;
