import { Helmet } from 'react-helmet-async';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import { AcademyHero } from '@/components/academy/AcademyHero';
import { ReviewWall } from '@/components/ReviewWall';
import { WhatYouGet } from '@/components/academy/WhatYouGet';
import { AcademyPricing } from '@/components/academy/AcademyPricing';
import { AcademyFAQ } from '@/components/academy/AcademyFAQ';
import DigitalCardPurchase from '@/components/landing/DigitalCardPurchase';
import TrustBar from '@/components/TrustBar';

const Home = () => (
  <div className="relative" style={{ background: '#04060e', overflowX: 'hidden' }}>
    <Helmet>
      <title>Stackmode Academy | AI, Coding, Software &amp; Trading School | Christopher Robinson</title>
      <meta name="description" content="Stackmode Academy — founded by Christopher Robinson (StackmodeChris). Learn AI tools, software development, Python coding, stock trading, and investing." />
      <meta name="keywords" content="stackmode academy, stackmodechris, christopher robinson CEO, learn AI online, coding and trading school" />
      <meta name="author" content="Christopher Robinson" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://stackmode.net/academy" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stackmode.net/academy" />
      <meta property="og:title" content="Stackmode Academy — AI, Coding &amp; Trading School" />
      <meta property="og:description" content="Christopher Robinson's complete education system. Learn AI, code software, and master trading/investing." />
      <meta property="og:site_name" content="Stackmode Academy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stackmodechris" />
    </Helmet>

    <AnimatedBackground />
    <SiteNav />

    <div className="sr-only">
      <h1>Stackmode Academy — Learn AI, Coding & Trading with Christopher Robinson CEO</h1>
    </div>

    <div className="relative z-[1] pt-14">
      <AcademyHero />
      <TrustBar />
      <ReviewWall />
      <WhatYouGet />
      <AcademyPricing />
      <AcademyFAQ />
      <DigitalCardPurchase />
      <SiteFooter />
    </div>
  </div>
);

export default Home;
