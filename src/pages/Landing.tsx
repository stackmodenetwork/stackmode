import { Helmet } from 'react-helmet-async';
import SplitHero from '@/components/landing/SplitHero';
import CustomCursor from '@/components/landing/CustomCursor';
import DigitalCardPurchase from '@/components/landing/DigitalCardPurchase';

const Landing = () => (
  <div className="relative" style={{ background: '#04040a', overflowX: 'hidden', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
    <Helmet>
      <title>Stackmode Academy | AI, Coding, Software &amp; Trading School | StackmodeChris | Christopher Robinson</title>
      <meta name="description" content="Stackmode Academy — founded by Christopher Robinson (StackmodeChris). Learn AI tools, software development, Python coding, stock trading, and investing. Get your NFC digital business card from CEO Turbo. Code. Content. Capital. Join for $50/month at stackmode.net" />
      <meta name="keywords" content="stackmode academy, stackmodechris, christopher robinson CEO, learn AI online, coding and trading school, software development course, AI tools for beginners, python programming course, stock trading school, crypto investing course, learn to code and trade, digital assets course, build passive income online, web development bootcamp, content monetization, financial freedom course, online tech school, CEO turbo, NFC digital business cards, digital business card, tap to share business card, brand boost, Atlanta Georgia tech school, christopherrobinsonceo instagram, stackmodechris tiktok, ChristopherRobinson-CEO youtube, best online academy 2026, learn AI software 2026, no code AI software, how to build software with AI, asset stacking, how to stack assets, wealth building school, best trading course online, learn cryptocurrency investing, Python AI course, web development course online, digital marketing course, content creator course, online business school, entrepreneur education, CEO training, personal branding course, NFC business card buy, premium digital business card" />
      
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://stackmode.net" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net" />
      <meta property="og:title" content="Stackmode Academy — AI, Coding &amp; Trading School | StackmodeChris" />
      <meta property="og:description" content="Christopher Robinson's complete education system. Learn AI, code software, and master trading/investing. One ecosystem. $50/month. Join today at stackmode.net" />
      <meta property="og:image" content="https://stackmode.net/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Stackmode Academy by Christopher Robinson — AI Coding and Trading School" />
      <meta property="og:site_name" content="Stackmode Academy" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stackmodechris" />
      <meta name="twitter:creator" content="@stackmodechris" />
      <meta name="twitter:title" content="Stackmode Academy — AI, Coding &amp; Trading School by StackmodeChris" />
      <meta name="twitter:description" content="Code. Content. Capital. Christopher Robinson's complete system to build assets, grow audiences and multiply profits. $50/month." />
      <meta name="twitter:image" content="https://stackmode.net/og-image.jpg" />
    </Helmet>

    <CustomCursor />
    <SplitHero />
    <DigitalCardPurchase />
  </div>
);

export default Landing;
