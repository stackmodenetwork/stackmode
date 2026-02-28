import { Sparkles, Video, Globe, CreditCard, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'AI Prompt Shop',
    desc: 'Pre-built prompts for content, marketing & code.',
    href: 'https://ceoturbo.com',
  },
  {
    icon: Video,
    title: 'Make Ads Fast',
    desc: 'AI-powered ad creatives in minutes, not days.',
    href: 'https://ceoturbo.com',
  },
  {
    icon: Globe,
    title: 'Website Design',
    desc: 'Custom sites built with AI speed & precision.',
    href: 'https://ceoturbo.com',
  },
  {
    icon: CreditCard,
    title: 'Digital Business Cards',
    desc: 'NFC tap-to-share cards for modern networking.',
    href: 'https://ceoturbo.com',
  },
];

export const CeoTurboServices = () => (
  <section className="relative py-16 sm:py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <img src="/images/ceoturbo-logo-new.png" alt="CEOTurbo" className="h-7 w-auto" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground font-mono tracking-tight">
          Grow Your Brand with <span className="text-accent">CEOTurbo</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
          Tools & services to accelerate your business — powered by AI.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {services.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl border border-border/50 p-4 sm:p-5 transition-all hover:border-accent/40 hover:bg-accent/5"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <s.icon size={18} className="text-accent" />
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CeoTurboServices;
