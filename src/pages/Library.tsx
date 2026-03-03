import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconHover3D } from '@/components/ui/icon-3d-hover';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const FREE_LINK = 'https://stackmodechris.systeme.io/free-education';
const WHOP_URL = 'https://whop.com/stackmode-academy/educationalservice/';

const books = [
  {
    title: 'Neuro Trading',
    image: '/images/books/neuro-trading.jpg',
    tagline: 'Master the psychology of trading.',
    bullets: ['Why 90% of traders lose — and how to be in the 10%', 'Emotional discipline techniques used by pros', 'Build a trading mindset that prints long-term'],
    amazonLink: 'https://a.co/d/0bz50oF',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaGWdZbM',
  },
  {
    title: 'Before The Hype',
    image: '/images/books/before-the-hype-2026.jpg',
    tagline: 'How to spot opportunities before they go viral.',
    bullets: ['Learn the "Asset Stacking" strategy for long-term wealth', 'Identifying high-signal trends in a noisy market'],
    amazonLink: 'https://a.co/d/eSgONXa',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaaVspUM',
  },
  {
    title: 'Freedom Money',
    image: '/images/books/freedom-money.jpg',
    tagline: 'How to build multiple income streams.',
    bullets: ['Protect & grow your money like the wealthy do', 'Stack income streams for financial freedom'],
    amazonLink: 'https://a.co/d/91RUksI',
    audiobookLink: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAaqV_pVM',
  },
];

const resources = [
  { title: 'The Stackmode Podcast', desc: 'Weekly episodes on AI, trading, and building wealth.', cta: 'Listen Now', href: 'https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true', icon: '🎙️' },
  { title: 'Discord Community', desc: 'Join thousands of traders, builders, and creators.', cta: 'Join Discord', href: 'https://discord.gg/5zYWSWGMYm', icon: '💬' },
  { title: 'YouTube Channel', desc: '1.2M+ views. Free tutorials, market breakdowns, and builds.', cta: 'Watch Now', href: 'https://youtube.com/@ChristopherRobinson-CEO', icon: '▶️' },
];

const Library = () => {

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Helmet>
        <title>Library — Books & Audiobooks | Stackmode by Christopher Robinson</title>
        <meta name="description" content="Read or listen to Stackmode books by Christopher Robinson. Master trading psychology, asset stacking, and financial freedom." />
        <link rel="canonical" href="https://stackmode.net/library" />
      </Helmet>

      <SiteNav />

      {/* Library 3D Header */}
      <section className="section flex justify-center" style={{ paddingTop: 120 }}>
        <div className="container flex justify-center">
          <IconHover3D
            heading="Library"
            text="A comprehensive collection of books and resources by Christopher Robinson. Master trading psychology, asset stacking, and financial freedom."
            width={600}
            height={150}
          />
        </div>
      </section>

      {/* Library Heading */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div className="flex justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h1 className="section-header__title">Library</h1>
            <p className="section-header__subtitle">Books by Christopher Robinson. Available on Amazon and Google Play.</p>
          </div>

          {/* Book Cards */}
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {books.map((book, i) => (
              <motion.div key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                  <img src={book.image} alt={book.title} className="w-32 sm:w-36 rounded-xl border border-white/10 group-hover:border-white/30 transition-all group-hover:scale-105" loading="lazy" />
                </a>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{book.title}</p>
                  <h3 className="text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{book.tagline}</h3>
                  <div className="flex flex-col gap-2 mb-5">
                    {book.bullets.map(b => (
                      <span key={b} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <span className="text-white font-bold">✓</span> {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">Amazon →</a>
                    <a href={book.audiobookLink} target="_blank" rel="noopener noreferrer" className="btn-glass btn-sm">Audiobook →</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn for Free */}
      <section className="section text-center">
        <div className="container" style={{ maxWidth: 600 }}>
          <p className="section-header__eyebrow mb-2">Learn for Free</p>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>100% free. No email required. No tricks.</p>
          <div className="glass-card">
            <h2 className="section-header__title" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>Free Educational Access</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Get free access to key investing & business fundamentals. Start learning AI, trading, and wealth-building basics — right now.
            </p>
            <a href={FREE_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Get Free Access →</a>
          </div>
        </div>
      </section>

      {/* More Resources */}
      <section className="section section--glass">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">More Resources</h2>
          </div>
          <div className="grid-3">
            {resources.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card text-center"
              >
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>{r.title}</h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{r.desc}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="btn-glass btn-sm">{r.cta} →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Go Deeper */}
      <section className="section text-center">
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 className="section-header__title">Ready to Go Deeper?</h2>
          <p className="section-header__subtitle mb-8">Join the Academy for structured learning across AI, trading, and asset stacking.</p>
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">Join the Academy →</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Library;
