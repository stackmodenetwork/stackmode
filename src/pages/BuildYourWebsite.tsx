import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Globe, Zap, Palette, Code, Smartphone, CheckCircle, BookOpen, ArrowRight, Calendar, Phone, Users, Check, Star, Gift, TrendingUp, Briefcase, Youtube, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { BusinessBackground } from '@/components/BusinessBackground';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { StackmodeGroupPromo } from '@/components/StackmodeGroupPromo';
import { BooksCredibilityPromo } from '@/components/BooksCredibilityPromo';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { ReviewsGallery } from '@/components/ReviewsGallery';
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
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-purple-500/10 to-transparent relative z-10">
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
                className="text-xl text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Stop paying web agencies $3,000+ for a simple website. Learn to build it yourself with AI — or let us handle it for you.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 text-purple-400">
                  <Check size={18} className="text-purple-400" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Check size={18} className="text-purple-400" />
                  <span>No Coding Required</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Check size={18} className="text-purple-400" />
                  <span>SEO Included</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== STACKMODE NETWORK - TOP PRIORITY ========== */}
        <section className="max-w-5xl mx-auto py-8 px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/30 mb-3"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} />
                Learn to Build Websites Yourself
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Website Training <span className="text-purple-400">Included</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Inside the Stackmode Network, you'll learn to build professional websites with AI — plus get all our trading and business content for just $50/month.
              </p>
            </div>
            <StackmodeGroupPromo variant="website" />
          </ScrollReveal>
        </section>

        {/* ========== FREE CONSULTATION CTA ========== */}
        <section className="max-w-3xl mx-auto py-6 px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Want It Done For You?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Professional Website Services
              </h3>
            </div>
            <a 
              href="https://calendly.com/stackmodechris/businessconsulting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.div 
                className="relative bg-gradient-to-br from-card/80 via-card/60 to-purple-500/10 border-2 border-purple-500/30 rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] group-hover:scale-[1.02]"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute top-0 left-4 -translate-y-1/2 z-20">
                  <motion.div 
                    className="bg-purple-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    FREE Consultation
                  </motion.div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center pt-2">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Phone size={24} className="text-purple-400" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">Book a Free Website Consultation</h4>
                      <p className="text-sm text-muted-foreground">Let's discuss your project</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-xl mx-auto">
                    Need a professional website but don't want to build it yourself? Let's talk about your needs. I'll create a custom quote — no obligation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>Custom design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>Mobile responsive</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      <span>SEO optimized</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-500/90 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-purple-500/25">
                    <Calendar size={20} />
                    <span>Schedule Free Consultation</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </a>
          </ScrollReveal>
        </section>

        {/* ========== REVIEWS SECTION ========== */}
        <section className="py-8 px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-3">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-purple-400 text-sm font-semibold">Proven Results</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Happy Clients & Students</h2>
            </div>
          </ScrollReveal>
          <ReviewsGallery />
        </section>

        {/* Features Section */}
        <section className="py-10 md:py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
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

        {/* ========== FOOTER SECTIONS ========== */}

        {/* Books Credibility Section */}
        <BooksCredibilityPromo variant="compact" showHeading={true} className="py-8" />

        {/* Free Resources Section */}
        <section className="py-8 px-4 bg-muted/20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/library" className="block group">
              <motion.div 
                className="bg-gradient-to-br from-background/95 via-background/90 to-purple-500/10 border-2 border-border/50 hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                whileHover={{ scale: 1.01 }}
              >
                <div className="text-center">
                  <span className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Free Resources
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                    Start Learning for Free
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                    Access free trading strategies, business guides, and educational content in our resource library
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { icon: Globe, title: 'Website Tips', desc: 'Build better' },
                      { icon: Palette, title: 'Design Guides', desc: 'Look great' },
                      { icon: BookOpen, title: 'eBooks', desc: 'Deep dives' },
                      { icon: Zap, title: 'Video Lessons', desc: 'Visual learning' }
                    ].map((item, i) => (
                      <div key={i} className="bg-background rounded-xl p-4 border border-border/50 text-center group-hover:border-purple-500/30 transition-all duration-300 h-full">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:from-purple-400 group-hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg group-hover:shadow-purple-500/30">
                    <Gift size={18} />
                    <span>Get FREE Resources Here</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default BuildYourWebsite;
