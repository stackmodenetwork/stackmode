import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, TrendingUp, Users, Briefcase, Award, Mail, Send, ArrowLeft, Zap, BookOpen, Youtube, Globe, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { DualCallCTA } from '@/components/DualCallCTA';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import { OptimizedImage } from '@/components/OptimizedImage';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(subject || 'Inquiry from Website');
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:stackmodenetwork@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    toast({
      title: "Opening email client",
      description: "Your default email app should open now."
    });
  };

  return (
    <>
      <Helmet>
        <title>About Stackmodechris | Trading Mentor & Founder of Stackmode Academy</title>
        <meta name="description" content="Meet Christopher Robinson (Stackmodechris) - a passionate trader and mentor helping everyday people achieve financial freedom through stocks, options, futures, forex, and crypto trading." />
        <meta name="keywords" content="Stackmodechris, trading mentor, Christopher Robinson, Stackmode Academy, trading education, forex trading, crypto trading, stocks trading, options trading, futures trading" />
        <link rel="canonical" href="https://stackmode.net/about" />
        
        <meta property="og:title" content="About Stackmodechris | Trading Mentor & Founder" />
        <meta property="og:description" content="Meet Christopher Robinson - a passionate trader helping everyday people achieve financial freedom through proven trading strategies." />
        <meta property="og:url" content="https://stackmode.net/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://stackmode.net/images/stackmodechris-about-new.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Stackmodechris | Trading Mentor" />
        <meta name="twitter:description" content="Meet Christopher Robinson - helping traders achieve financial freedom through proven strategies." />
        <meta name="twitter:image" content="https://stackmode.net/images/stackmodechris-about-new.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Christopher Robinson",
            "alternateName": "Stackmodechris",
            "description": "Trading Mentor & Founder of Stackmode Academy",
            "jobTitle": "Trading Mentor",
            "url": "https://stackmode.net/about",
            "image": "https://stackmode.net/images/stackmodechris-about-new.png",
            "sameAs": [
              "https://www.youtube.com/@stackmodetrading",
              "https://www.instagram.com/stackmodechris",
              "https://www.facebook.com/stackmodechris",
              "https://www.linkedin.com/in/stackmodechris"
            ],
            "knowsAbout": ["Stock Trading", "Options Trading", "Futures Trading", "Forex Trading", "Cryptocurrency Trading", "Technical Analysis", "Price Action"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <MainHeader />

        {/* Free Resources Banner */}
        <FreeResourcesCTA variant="banner" />

        <div className="max-w-5xl mx-auto w-full px-4 pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20">
                  <OptimizedImage 
                    src="/images/stackmodechris-about-new.png?v=2" 
                    alt="Stackmodechris - Founder of Stackmode Academy" 
                    className="w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Christopher Robinson
                </h1>
                <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                  aka Stackmodechris
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Founder of Stackmode Academy | AI Business & Trading Mentor
                </p>
                <p className="text-base text-muted-foreground mb-6 max-w-xl">
                  Unlinking time from money. It's time to own your life.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                    <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/stackmodechris/tradingmastermindcoaching">
                      <TrendingUp size={18} />
                      Free Trading Call
                    </a>
                  </Button>
                  <Button asChild className="gap-2 bg-accent hover:bg-accent/90">
                    <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/stackmodechris/businessconsulting">
                      <Briefcase size={18} />
                      Grow Your Business
                    </a>
                  </Button>
                  <Button asChild className="gap-2 bg-purple-500 hover:bg-purple-500/90 text-white">
                    <Link to="/buildyourwebsite">
                      <Globe size={18} />
                      Build Your Website
                    </Link>
                  </Button>
                  <Button asChild className="gap-2 bg-cyan-500 hover:bg-cyan-500/90 text-background">
                    <a target="_blank" rel="noopener noreferrer" href="https://whop.com/stackmode-academy/educationalservice/">
                      <Zap size={18} />
                      Join The Academy
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                  <Button variant="outline" asChild className="gap-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    <Link to="/library">
                      <BookOpen size={18} />
                      Free Resources
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@Stackmodechris">
                      <Youtube size={18} />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                My Story
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm Christopher Robinson, known online as <strong className="text-foreground">Stackmodechris</strong>. I spent 4 years in Finance before realizing the traditional path wasn't for me. I left to build something different—a <strong className="text-foreground">Business Network</strong> that teaches my clients how to use AI Tools & Software, Business Growth Strategies, and Trading.
                </p>
                
                <p className="text-lg leading-relaxed">
                  With my education, you will understand <strong className="text-foreground">The Stackmode Philosophy</strong>: unlinking time from money. It's time to own your life.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My mission is to show people that financial freedom isn't about climbing a corporate ladder—it's about <strong className="text-foreground">building a Business with AI systems that work for you</strong>, then using that cash flow to master the markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Teach Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                What I Teach
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Three pillars to unlock financial freedom and own your life
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* AI Business Models */}
                <a 
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-2xl p-8 border-2 border-purple-500/30 text-center hover:border-purple-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:bg-purple-500/5 hover:-translate-y-2 group cursor-pointer block"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                  <ArrowDown className="w-5 h-5 text-purple-500/50 mx-auto mb-4 group-hover:text-purple-500 group-hover:translate-y-1 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors">AI Business Models</h3>
                  <p className="text-muted-foreground text-sm">How to build scalable, AI-driven businesses that generate passive and active cash flow.</p>
                </a>

                {/* Swing Trading & Price Action */}
                <a 
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-2xl p-8 border-2 border-emerald-500/30 text-center hover:border-emerald-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-500/5 hover:-translate-y-2 group cursor-pointer block"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <ArrowDown className="w-5 h-5 text-emerald-500/50 mx-auto mb-4 group-hover:text-emerald-500 group-hover:translate-y-1 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-400 transition-colors">Swing Trading & Price Action</h3>
                  <p className="text-muted-foreground text-sm">Master stocks, stock options, futures, crypto, and forex using proven trading systems.</p>
                </a>

                {/* The Stackmode Philosophy */}
                <a 
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-2xl p-8 border-2 border-cyan-500/30 text-center hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:bg-cyan-500/5 hover:-translate-y-2 group cursor-pointer block"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110">
                    <Award className="w-8 h-8 text-cyan-500" />
                  </div>
                  <ArrowDown className="w-5 h-5 text-cyan-500/50 mx-auto mb-4 group-hover:text-cyan-500 group-hover:translate-y-1 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">The Stackmode Philosophy</h3>
                  <p className="text-muted-foreground text-sm">The exact blueprint I use to scale businesses while building trading income.</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stackmode Academy Promo */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <a 
                href="https://whop.com/stackmode-academy/educationalservice/"
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative bg-gradient-to-br from-background via-cyan-950/20 to-background rounded-2xl p-8 md:p-10 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] hover:scale-[1.02] overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="flex justify-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-background text-xs font-bold px-4 py-1.5 rounded-full animate-pulse">
                      75% OFF — LIMITED TIME
                    </span>
                  </div>
                  
                  {/* Main content */}
                  <div className="relative text-center space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Stop Paying <span className="text-red-400 line-through opacity-70">$5,000</span> for Outdated Courses
                    </h3>
                    <p className="text-lg md:text-xl text-cyan-400 font-semibold">
                      Get Everything I Know for <span className="text-2xl md:text-3xl font-black">$50/mo</span>
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      AI Business Models. Swing Trading Systems. The Stackmode Philosophy. 
                      One network. One price. Unlimited access.
                    </p>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-background font-bold px-8 py-4 rounded-xl text-lg group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                        <Zap size={20} className="animate-pulse" />
                        Join The Stackmode Academy
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground pt-2">
                      Cancel anytime • Instant access • New content weekly
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Books Credibility Section */}
        <BooksCredibilityPromo variant="compact" showHeading={true} />

        {/* Start Learning for Free Section */}
        <section className="py-10 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <Link to="/library" className="block group">
              <div className="bg-gradient-to-br from-background/95 via-background/90 to-accent/10 border-2 border-border/50 hover:border-accent/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                <div className="text-center">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Free Resources
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Start Learning for Free
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                    Access free trading strategies, business guides, and educational content in our resource library
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg group-hover:shadow-accent/30">
                    <BookOpen size={18} />
                    <span>Get FREE Resources Here</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send Me a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a question or want to discuss trading? Fill out the form below.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      value={formData.name} 
                      onChange={e => setFormData({ ...formData, name: e.target.value })} 
                      maxLength={100} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      maxLength={255} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="What's this about?" 
                    value={formData.subject} 
                    onChange={e => setFormData({ ...formData, subject: e.target.value })} 
                    maxLength={150} 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    value={formData.message} 
                    onChange={e => setFormData({ ...formData, message: e.target.value })} 
                    maxLength={2000} 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  This will open your default email application to send the message.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Dual Call CTA */}
        <DualCallCTA />

        {/* Trustpilot Widget */}
        <section className="py-6 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <TrustpilotWidget />
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default About;
