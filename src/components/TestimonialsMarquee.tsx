import { memo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

const testimonials = [
  {
    name: 'Marcus T.',
    username: '@marcus',
    body: 'The AI Trading prompt showed me how to analyze SPY charts in ChatGPT. Made my first profitable swing trade the same week.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Destiny W.',
    username: '@destiny',
    body: 'The asset stacking course broke down exactly how to stack income streams. I now have 4 running simultaneously.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Jaylon B.',
    username: '@jaylon',
    body: "The Midjourney image prompts are insane. My product photos look like a $10K shoot. Clients can't believe it.",
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇬🇧 UK',
  },
  {
    name: 'Priya M.',
    username: '@priya',
    body: 'Stackfinder spotted NVDA before it ran 8%. The AI scanner is the real deal.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇮🇳 India',
  },
  {
    name: 'Kevin L.',
    username: '@kevin',
    body: "Christopher's Academy teaches AI tools I actually use every day. ROI in the first week.",
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Alexis R.',
    username: '@alexis',
    body: 'Used the SaaS landing page prompt to build my entire site in Lovable. Saved me $3,000 in designer fees.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'David K.',
    username: '@davidk',
    body: 'The quant modeling prompts are next level. Built an entire DCF model in minutes.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Sofia N.',
    username: '@sofia',
    body: 'Brand Boost transformed my online presence. 340% traffic increase in 3 months.',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇪🇸 Spain',
  },
  {
    name: 'Haruto S.',
    username: '@haruto',
    body: 'Impressive performance on mobile! The Academy content is perfectly organized.',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇯🇵 Japan',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="bg-[#0a0a0a] border-white/[0.06] hover:border-white/[0.12] transition-colors w-64 shrink-0">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-primary/20 text-primary text-xs">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {name} <span className="text-muted-foreground text-xs">{country}</span>
            </p>
            <p className="text-xs text-muted-foreground">{username}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

const TestimonialsMarquee = memo(() => {
  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 mb-10">
        <div className="section-header">
          <p className="section-header__eyebrow">Testimonials</p>
          <h2 className="section-header__title">What People Are Saying</h2>
          <p className="section-header__subtitle">
            Real feedback from Academy members and clients.
          </p>
        </div>
      </div>

      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
        {/* Column 1 - down */}
        <Marquee vertical pauseOnHover className="[--duration:30s]">
          {testimonials.slice(0, 3).map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Column 2 - up */}
        <Marquee vertical reverse pauseOnHover className="[--duration:25s]">
          {testimonials.slice(3, 6).map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Column 3 - down */}
        <Marquee vertical pauseOnHover className="[--duration:35s] hidden sm:flex">
          {testimonials.slice(6, 9).map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Column 4 - up */}
        <Marquee vertical reverse pauseOnHover className="[--duration:28s] hidden lg:flex">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username + '-4'} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
      </div>
    </section>
  );
});
TestimonialsMarquee.displayName = 'TestimonialsMarquee';

export default TestimonialsMarquee;
