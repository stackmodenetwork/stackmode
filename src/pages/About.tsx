import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowRight, Zap, Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';
import { OptimizedImage } from '@/components/OptimizedImage';
import { FreeResourcesCTA } from '@/components/FreeResourcesCTA';
import { UniversalPageBottom } from '@/components/UniversalPageBottom';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

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
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    const mailtoSubject = encodeURIComponent(subject || 'Inquiry from Website');
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:stackmodenetwork@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    toast({ title: "Opening email client", description: "Your default email app should open now." });
  };

  return (
    <>
      <Helmet>
        <title>About Stackmodechris | Mentor & Founder</title>
        <meta name="description" content="Meet Christopher Robinson — helping people build income through business, coding, and investing." />
        <link rel="canonical" href="https://stackmode.net/about" />
        <meta property="og:title" content="About Stackmodechris | Mentor & Founder" />
        <meta property="og:description" content="Meet Christopher Robinson — helping people build income through business, coding, and investing." />
        <meta property="og:url" content="https://stackmode.net/about" />
        <meta property="og:image" content="https://stackmode.net/images/stackmodechris-about-new.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Christopher Robinson",
            "alternateName": "Stackmodechris",
            "description": "Mentor & Founder of Stackmode Academy",
            "url": "https://stackmode.net/about",
            "image": "https://stackmode.net/images/stackmodechris-about-new.png",
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <MainHeader />
        <FreeResourcesCTA variant="banner" />

        {/* Hero with photo + bio */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/40 shadow-xl">
                <OptimizedImage
                  src="/images/stackmodechris-about-new.png?v=2"
                  alt="Stackmodechris"
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
              >
                Christopher Robinson
              </motion.h1>
              <p className="text-primary font-medium mb-3">aka Stackmodechris</p>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                I help people make more money. I teach business, coding, and investing — 
                all in one place. My goal: unlink your time from your income.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://whop.com/stackmode-academy/educationalservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  <Zap size={16} />
                  Join The Academy — $50/mo
                </a>
                <a
                  href="https://calendly.com/stackmodechris/architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  <Calendar size={16} />
                  FREE Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What I Teach */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground text-center mb-6">
                What I Teach
              </h2>
              <div className="space-y-3">
                {[
                  'How to get views and turn them into income',
                  'How to build and sell software with AI',
                  'How to invest in stocks, crypto, and real estate',
                  'How to unlink your time from your money',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg px-4 py-3">
                    <Check size={18} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-10 px-4">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-6">
                <Mail size={28} className="text-primary mx-auto mb-2" />
                <h2 className="text-2xl font-bold text-foreground mb-1">Send Me a Message</h2>
                <p className="text-muted-foreground text-sm">Got a question? I'd love to hear from you.</p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card/50 border border-border/50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name *</label>
                    <Input id="name" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input id="subject" placeholder="What's this about?" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea id="message" placeholder="Your message..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4} required />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">Opens your email app to send.</p>
              </form>
            </ScrollReveal>
          </div>
        </section>

        <UniversalPageBottom />
        <MainFooter />
      </main>
    </>
  );
};

export default About;
