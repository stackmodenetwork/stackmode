import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Globe, Zap, Palette, Code, Smartphone, CheckCircle, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';

import { BusinessBackground } from '@/components/BusinessBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { BlueprintPromo } from '@/components/BlueprintPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { motion } from 'framer-motion';

const BuildYourWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Build Your Website | Stackmode Network</title>
        <meta name="description" content="Get a professional website built for your business. Custom web development services by Stackmode Network." />
        <link rel="canonical" href="https://stackmode.net/buildyourwebsite" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
        <MainHeader />
        
        {/* Dynamic Background */}
        <BusinessBackground variant="purple" />

        {/* Free Resources Banner */}
        <FreeResourcesCTA variant="banner" />

        {/* Back Button */}
        <div className="max-w-5xl mx-auto w-full px-4 pt-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Stackmode Network Group - TOP PLACEMENT */}
        <section className="max-w-5xl mx-auto pt-8 px-4 relative z-10">
          <ScrollReveal>
            <StackmodeGroupPromo variant="website" />
          </ScrollReveal>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-purple-500/10 to-transparent relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Globe className="w-10 h-10 text-purple-400" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Build Your <motion.span 
                  className="text-purple-400 inline-block"
                  animate={{ 
                    textShadow: [
                      '0 0 0px rgb(192, 132, 252)',
                      '0 0 20px rgb(192, 132, 252)',
                      '0 0 0px rgb(192, 132, 252)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >Website</motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Get a professional, modern website that converts visitors into customers
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" asChild className="gap-2 bg-purple-500 hover:bg-purple-500/90">
                  <a href="https://calendly.com/stackmodechris/businessconsulting" target="_blank" rel="noopener noreferrer">
                    <Zap size={20} />
                    Schedule a Free Consultation
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                  What You Get
                </h2>
              </ScrollReveal>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {[
                  { icon: Palette, title: 'Custom Design', desc: 'Unique, branded design tailored to your business and target audience' },
                  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Looks perfect on all devices - phones, tablets, and desktops' },
                  { icon: Code, title: 'Modern Technology', desc: 'Built with the latest web technologies for speed and reliability' },
                  { icon: Zap, title: 'Fast Loading', desc: 'Optimized for performance to keep your visitors engaged' },
                  { icon: Globe, title: 'SEO Ready', desc: 'Built-in search engine optimization to help you rank higher' },
                  { icon: CheckCircle, title: 'Ongoing Support', desc: 'Continued support and updates to keep your site running smoothly' }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <motion.div 
                      className="bg-muted/30 rounded-xl p-6 border border-border/50 text-center hover:border-purple-500/50 transition-all duration-300 group h-full"
                      whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(168,85,247,0.15)' }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <item.icon className="w-7 h-7 text-purple-400" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted/30 relative z-10">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10 rounded-2xl p-8 border border-purple-500/20"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(168,85,247,0.5)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
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
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blueprint Promo */}
        <BlueprintPromo variant="compact" />

        {/* Books Credibility Section */}
        <BooksCredibilityPromo variant="compact" showHeading={true} className="py-8" />

        {/* Start Learning for Free Section */}
        <section className="py-10 px-4 bg-muted/20 relative z-10">
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


        <MainFooter />
      </div>
    </>
  );
};

export default BuildYourWebsite;