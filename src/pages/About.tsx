import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, TrendingUp, Users, Briefcase, Award, Mail, Send, ArrowLeft, Zap, BookOpen, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConnectWithMe } from '@/components/ConnectWithMe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { OptimizedImage } from '@/components/OptimizedImage';

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
        <title>About Stackmodechris | Trading Mentor & Founder of Stackmode Network</title>
        <meta name="description" content="Meet Christopher Robinson (Stackmodechris) - a passionate trader and mentor helping everyday people achieve financial freedom through stocks, options, futures, forex, and crypto trading." />
        <meta name="keywords" content="Stackmodechris, trading mentor, Christopher Robinson, Stackmode Network, trading education, forex trading, crypto trading, stocks trading, options trading, futures trading" />
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
            "description": "Trading Mentor & Founder of Stackmode Network",
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

        {/* Back Button */}
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
                    src="/images/stackmodechris-about-new.png" 
                    alt="Stackmodechris - Christopher Robinson, Trading Mentor" 
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
                  Trading Mentor & Founder of Stackmode Network
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
                      Free Business Call
                    </a>
                  </Button>
                  <Button asChild className="gap-2 bg-cyan-500 hover:bg-cyan-500/90 text-background">
                    <a target="_blank" rel="noopener noreferrer" href="https://whop.com/stackmode-network-llc">
                      <Zap size={18} />
                      Catch My Trades
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="gap-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    <Link to="/library">
                      <BookOpen size={18} />
                      Library
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
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
                  I'm Christopher Robinson, known online as <strong className="text-foreground">Stackmodechris</strong>. I'm a passionate trader and mentor dedicated to helping everyday people achieve financial freedom through the markets.
                </p>
                
                <p className="text-lg leading-relaxed">
                  With expertise spanning <strong className="text-foreground">stocks, options, futures, forex, and crypto</strong>, I've built a thriving community of traders who learn to read price action and execute high-probability setups. Through proven strategies and hands-on mentorship, I've helped clients generate thousands of dollars in profits.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Beyond trading, I'm an IT specialist and content creator who shares my journey through my podcast, YouTube channel, and social media. My mission is simple: <strong className="text-foreground">teach real trading skills that work, without the hype or empty promises.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Areas of Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, title: 'Stock Trading', desc: 'Master technical analysis, chart patterns, and swing trading strategies to capture profitable moves in equity markets' },
                  { icon: Briefcase, title: 'Options Trading', desc: 'Learn high-probability options setups including credit spreads, iron condors, and directional plays for consistent income' },
                  { icon: Award, title: 'Futures & Forex', desc: 'Swing trading strategy using price action, support/resistance levels, and market structure analysis' },
                  { icon: Users, title: 'Crypto Trading', desc: 'Navigate volatile digital asset markets with risk management, trend analysis, and strategic position sizing' }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-background rounded-xl p-6 border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ConnectWithMe />
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Trading Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 1-on-1 mentorship call and let's discuss your trading goals
                </p>
                <Button size="lg" asChild className="gap-2">
                  <a href="https://calendly.com/stackmodechris/tradingmastermindcoaching" target="_blank" rel="noopener noreferrer">
                    <Calendar size={20} />
                    Schedule Your FREE Call
                  </a>
                </Button>
              </div>
            </div>
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

        <MainFooter />
      </div>
    </>
  );
};

export default About;
