import { Helmet } from 'react-helmet-async';
import SplitHero from '@/components/landing/SplitHero';
import CustomCursor from '@/components/landing/CustomCursor';

const Landing = () => (
  <div className="relative" style={{ background: '#04040a' }}>
    <Helmet>
      <title>Stackmode | Choose Your Path | Christopher Robinson</title>
      <meta name="description" content="Stackmode by Christopher Robinson (StackmodeChris) — Choose your path: Stackmode Academy for AI software & trading, or CEO Turbo for website design & brand growth." />
      <link rel="canonical" href="https://stackmode.net/" />
    </Helmet>

    <CustomCursor />
    <SplitHero />
  </div>
);

export default Landing;
