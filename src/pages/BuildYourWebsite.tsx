import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Globe, Zap, Palette, Code, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { ConnectWithMe } from '@/components/ConnectWithMe';

const BuildYourWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Build Your Website | Stackmode Network</title>
        <meta name="description" content="Get a professional website built for your business. Custom web development services by Stackmode Network." />
        <link rel="canonical" href="https://stackmode.net/buildyourwebsite" />
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-purple-500/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Build Your <span className="text-purple-400">Website</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get a professional, modern website that converts visitors into customers
              </p>
              <Button size="lg" asChild className="gap-2 bg-purple-500 hover:bg-purple-500/90">
                <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer">
                  <Zap size={20} />
                  Schedule a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                What You Get
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Palette, title: 'Custom Design', desc: 'Unique, branded design tailored to your business and target audience' },
                  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Looks perfect on all devices - phones, tablets, and desktops' },
                  { icon: Code, title: 'Modern Technology', desc: 'Built with the latest web technologies for speed and reliability' },
                  { icon: Zap, title: 'Fast Loading', desc: 'Optimized for performance to keep your visitors engaged' },
                  { icon: Globe, title: 'SEO Ready', desc: 'Built-in search engine optimization to help you rank higher' },
                  { icon: CheckCircle, title: 'Ongoing Support', desc: 'Continued support and updates to keep your site running smoothly' }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-muted/30 rounded-xl p-6 border border-border/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Your Online Presence?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation call and let's discuss your website project
                </p>
                <Button size="lg" asChild className="gap-2 bg-purple-500 hover:bg-purple-500/90">
                  <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer">
                    <Globe size={20} />
                    Get Started Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ConnectWithMe />
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default BuildYourWebsite;
