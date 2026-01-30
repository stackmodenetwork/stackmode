import { motion } from 'framer-motion';
import { Zap, Check, Users, TrendingUp, Youtube, Briefcase, Globe, Sparkles, Bot, ArrowRight } from 'lucide-react';

interface StackmodeGroupPromoProps {
  variant?: 'home' | 'trading' | 'business' | 'library' | 'website';
}

export const StackmodeGroupPromo = ({ variant = 'home' }: StackmodeGroupPromoProps) => {
  const getContent = () => {
    switch (variant) {
      case 'trading':
        return {
          badge: 'THE STACKFINDER',
          title: 'AI-Powered Trading Tools',
          subtitle: 'Master The Markets with The Stack Scanner',
          description: 'Get access to the Stackfinder — our Market Intelligence System with live volume tracking, smart strike solver, accurate share calculators, and the Stackmode Scout AI assistant.',
          features: [
            'Live Volume Scanner & Stock Alerts',
            'Smart Strike Solver for Options',
            'AI Market Analysis with Stackmode Scout',
            'Weekly Live Trading Calls',
            'Trading Courses Worth $1000+',
            'Always Updated Strategies'
          ],
          accentColor: 'primary',
          gradientFrom: 'from-primary/20',
          gradientTo: 'to-cyan-500/20',
          borderColor: 'border-primary/40',
          hoverBorder: 'hover:border-primary',
          glowColor: 'rgba(var(--primary-rgb),0.4)',
          badgeBg: 'bg-primary/20',
          badgeText: 'text-primary',
        };
      case 'business':
        return {
          badge: 'AI BUSINESS MODELS',
          title: 'Build Income With AI',
          subtitle: 'The Stackmode System',
          description: 'Learn how to generate income by creating AI-powered businesses, get monetized on YouTube and other platforms, and follow the proven Stackmode System to financial freedom.',
          features: [
            'AI Business Model Training',
            'YouTube Monetization Strategies',
            'Content Creation with AI',
            'Social Media Growth Systems',
            'Business Courses Worth $1000+',
            'Always Updated to Current Trends'
          ],
          accentColor: 'accent',
          gradientFrom: 'from-accent/20',
          gradientTo: 'to-purple-500/20',
          borderColor: 'border-accent/40',
          hoverBorder: 'hover:border-accent',
          glowColor: 'rgba(168,85,247,0.4)',
          badgeBg: 'bg-accent/20',
          badgeText: 'text-accent',
        };
      case 'library':
        return {
          badge: 'BETTER THAN COURSES',
          title: 'Always Updated Education',
          subtitle: '$1000+ Worth of Courses for $50/mo',
          description: "Unlike pre-recorded courses that become outdated, the Stackmode Network gives you constantly updated trading and business education that evolves with the market.",
          features: [
            'Trading & Business Courses Worth $1000+',
            'Updated to Current Market Trends',
            'Live Weekly Coaching Calls',
            'AI Tools & Resources Included',
            'Community of Active Traders',
            'Cancel Anytime — No Lock-in'
          ],
          accentColor: 'primary',
          gradientFrom: 'from-primary/20',
          gradientTo: 'to-accent/20',
          borderColor: 'border-primary/40',
          hoverBorder: 'hover:border-primary',
          glowColor: 'rgba(var(--primary-rgb),0.4)',
          badgeBg: 'bg-gradient-to-r from-primary/20 to-accent/20',
          badgeText: 'text-primary',
        };
      case 'website':
        return {
          badge: 'DIY OPTION',
          title: 'Learn to Build Your Own Website',
          subtitle: 'Website Training Included',
          description: "Want to build your own website? Inside the Stackmode Network, you'll learn how to create professional websites using AI tools — no coding required.",
          features: [
            'AI Website Building Training',
            'No Coding Required',
            'Professional Design Templates',
            'SEO & Marketing Included',
            'Plus All Trading & Business Content',
            'Just $50/month — Cancel Anytime'
          ],
          accentColor: 'purple-400',
          gradientFrom: 'from-purple-500/20',
          gradientTo: 'to-accent/20',
          borderColor: 'border-purple-500/40',
          hoverBorder: 'hover:border-purple-500',
          glowColor: 'rgba(168,85,247,0.4)',
          badgeBg: 'bg-purple-500/20',
          badgeText: 'text-purple-400',
        };
      default: // home
        return {
          badge: 'STACKMODE NETWORK',
          title: 'The Blueprint to Financial Freedom',
          subtitle: 'AI Business Models & Trading',
          description: 'Join the Stackmode Network and learn AI business models and trading strategies. For just $50/month, get access to everything you need to build multiple income streams.',
          features: [
            'AI Business & Trading Education',
            'Live Weekly Coaching Calls',
            'The Stackfinder Trading Tools',
            'Community of Entrepreneurs'
          ],
          accentColor: 'primary',
          gradientFrom: 'from-primary/20',
          gradientTo: 'to-accent/20',
          borderColor: 'border-primary/40',
          hoverBorder: 'hover:border-primary',
          glowColor: 'rgba(var(--primary-rgb),0.4)',
          badgeBg: 'bg-gradient-to-r from-primary/20 to-accent/20',
          badgeText: 'text-primary',
        };
    }
  };

  const content = getContent();
  const isCompact = variant === 'home';

  return (
    <motion.section 
      className="relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <a
        href="https://whop.com/stackmode-network-llc"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`relative bg-gradient-to-br ${content.gradientFrom} via-card/60 ${content.gradientTo} border-2 ${content.borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 ${content.hoverBorder} hover:shadow-[0_0_60px_${content.glowColor}] group-hover:scale-[1.01]`}>
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-50" />
          
          {/* Floating icons */}
          <motion.div
            className="absolute top-4 right-4 opacity-20"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Bot size={40} className={content.badgeText} />
          </motion.div>
          
          <div className="relative z-10">
            {/* Badge */}
            <motion.div 
              className={`inline-flex items-center gap-2 ${content.badgeBg} border ${content.borderColor} rounded-full px-4 py-2 mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} className={content.badgeText} />
              <span className={`${content.badgeText} text-sm font-bold tracking-wide`}>{content.badge}</span>
            </motion.div>

            <div className={`${isCompact ? 'lg:flex lg:items-center lg:gap-8' : ''}`}>
              <div className={`${isCompact ? 'lg:flex-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {content.title}
                </h3>
                <p className={`text-lg sm:text-xl ${content.badgeText} font-semibold mb-3`}>
                  {content.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {content.description}
                </p>

                {/* Features Grid */}
                <div className={`grid ${isCompact ? 'grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-3 mb-6`}>
                  {content.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Check size={16} className={content.badgeText + ' flex-shrink-0'} />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className={`${isCompact ? 'lg:text-center lg:min-w-[280px]' : ''}`}>
                {/* Pricing */}
                <div className={`flex items-center gap-3 mb-4 ${isCompact ? 'lg:justify-center' : ''}`}>
                  <span className="text-muted-foreground line-through text-lg">$100/mo</span>
                  <span className="text-foreground font-bold text-3xl sm:text-4xl">$50/mo</span>
                  <span className={`${content.badgeBg} ${content.badgeText} text-xs font-bold px-2 py-1 rounded-full`}>50% OFF</span>
                </div>

                {/* Button */}
                <motion.div 
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${content.gradientFrom.replace('/20', '')} ${content.gradientTo.replace('/20', '')} text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all group-hover:shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Users size={20} />
                  <span>Join Stackmode Network</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>

                <p className="text-xs text-muted-foreground mt-3">
                  Cancel anytime • Instant access • No contracts
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.section>
  );
};
