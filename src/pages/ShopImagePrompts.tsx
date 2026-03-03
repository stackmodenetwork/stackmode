import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const prompts = [
  { title: 'Brand Identity Suite', desc: 'Complete brand identity — logo concepts, color palette, typography, and brand guidelines.', price: '$12.99' },
  { title: 'Product Photography Pro', desc: 'Stunning product photography with professional lighting, angles, and staging.', price: '$8.99' },
  { title: 'Social Media Graphics Pack', desc: 'Cohesive social media graphics — posts, stories, banners, and profile images.', price: '$5.99' },
  { title: 'Icon & Illustration Set', desc: 'Generate consistent icon sets and illustrations for apps, websites, and presentations.', price: '$6.99' },
  { title: 'Real Estate Photography', desc: 'Professional real estate imagery with interior staging, exterior shots, and aerial views.', price: '$7.99' },
  { title: 'Mockup Generator', desc: 'Create device and packaging mockups — phones, laptops, t-shirts, boxes, and more.', price: 'Free', free: true },
];

const ShopImagePrompts = () => (
  <div style={{ background: '#000', minHeight: '100vh' }}>
    <Helmet>
      <title>Image Design Prompts | Stackmode | Christopher Robinson CEO</title>
      <meta name="description" content="Generate stunning visuals with Midjourney, DALL-E 3, and Stable Diffusion. Brand identities, product shots, social graphics, and more." />
      <link rel="canonical" href="https://stackmode.net/shop/image-prompts" />
    </Helmet>
    <SiteNav />
    <main style={{ paddingTop: 80 }}>
      <div className="container px-4">
        <nav className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/prompt-shop" className="hover:text-white">AI Prompt Shop</Link> / <span className="text-white">Image Design Prompts</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl mb-2 font-heading font-bold">Image Design Prompts</h1>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Generate stunning visuals with Midjourney, DALL-E 3, and Stable Diffusion.</p>
      </div>
      <section className="section section--dark" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            {prompts.map(p => (
              <div key={p.title} className="glass-card">
                <span className="text-[10px] uppercase tracking-wider mb-3 inline-block" style={{ color: 'rgba(255,255,255,0.4)' }}>Image</span>
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

export default ShopImagePrompts;
