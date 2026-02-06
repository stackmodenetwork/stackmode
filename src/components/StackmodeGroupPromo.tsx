import { motion } from 'framer-motion';
import { Zap, Check, Users, TrendingUp, Youtube, Briefcase, Globe, Sparkles, Bot, ArrowRight, BarChart3, Target, Rocket } from 'lucide-react';

interface StackmodeGroupPromoProps {
  variant?: 'home' | 'trading' | 'business' | 'library' | 'website';
}

export const StackmodeGroupPromo = ({ variant = 'home' }: StackmodeGroupPromoProps) => {
  const getContent = () => {
    switch (variant) {
      case 'trading':
        return {
          badge: 'STOP OVERPAYING FOR SIGNALS',
          title: "Trading 'Gurus' Charge $5,000+",
          subtitle: 'You Get The Same Tools for $50/month',
          headline: 'Same signals. Same scanners. Fraction of the cost.',
          description: "While others charge thousands for trading signals and outdated courses, we give you live scanners, AI-powered analysis, and weekly coaching — updated constantly.",
          features: [
            'Live Volume Scanner & Alerts',
            'Smart Strike Solver for Options',
            'AI Market Analysis Tools',
            'Weekly Live Trading Calls',
            '$1000+ Worth of Courses',
            'Cancel Anytime'
          ],
          icon: BarChart3,
          comparison: { guru: '$4,997', us: '$50/mo' },
          theme: 'emerald' as const
        };
      case 'business':
        return {
          badge: 'THE GURU ERA IS OVER',
          title: "Stop Paying $5,000 for 'Mentorship'",
          subtitle: 'Get The Same Blueprints for $50/month',
          headline: 'Same AI tools. Same business models. No gatekeeping.',
          description: "High-ticket gurus sell you a PDF and disappear. We give you constantly updated AI business training, YouTube monetization strategies, and a real community — for less than a Netflix subscription.",
          features: [
            'AI Business Model Training',
            'YouTube Monetization Strategies',
            'Content Creation with AI',
            'Social Media Growth Systems',
            '$1000+ Worth of Courses',
            'Cancel Anytime'
          ],
          icon: Youtube,
          comparison: { guru: '$4,997', us: '$50/mo' },
          theme: 'purple' as const
        };
      case 'library':
        return {
          badge: 'WHY PAY THOUSANDS?',
          title: "Courses Become Outdated. We Don't.",
          subtitle: 'Always-Updated Education for $50/month',
          headline: 'Live training beats pre-recorded courses.',
          description: "That $2,000 course you bought last year? Already outdated. The Stackmode Academy evolves with the market — new strategies, new tools, new content weekly.",
          features: [
            '$1000+ Worth of Courses',
            'Updated to Current Trends',
            'Live Weekly Coaching',
            'AI Tools Included',
            'Active Community',
            'Cancel Anytime'
          ],
          icon: Target,
          comparison: { guru: '$2,000+', us: '$50/mo' },
          theme: 'purple' as const
        };
      case 'website':
        return {
          badge: 'SKIP THE $3K WEB AGENCY',
          title: 'Learn to Build Websites Yourself',
          subtitle: 'AI Website Training Included for $50/month',
          headline: 'Why pay thousands when you can learn for $50?',
          description: "Web agencies charge $3,000+ for a simple site. Inside the Stackmode Academy, you'll learn to build professional websites with AI — plus get all our trading and business content.",
          features: [
            'AI Website Building Training',
            'No Coding Required',
            'Professional Templates',
            'SEO & Marketing Included',
            'Plus All Trading Content',
            'Cancel Anytime'
          ],
          icon: Globe,
          comparison: { guru: '$3,000+', us: '$50/mo' },
          theme: 'purple' as const
        };
      default: // home
        return {
          badge: 'THE GURU ERA IS OVER',
          title: "Stop Paying $5,000 for 'Mentorship'",
          subtitle: 'Everything You Need to Stack Income. One Network.',
          headline: 'Same signals. Same blueprints. Same AI tools. $50.',
          description: "We took the same trading signals, business blueprints, and AI tools that 'gurus' charge thousands for... and put them all in one place. No gatekeeping. No upsells. Just results.",
          features: [
            'Trading Signals & AI Scanners',
            'Business Blueprints & AI Tools',
            'Live Weekly Coaching Calls',
            'Community of Entrepreneurs'
          ],
          icon: Rocket,
          comparison: { guru: '$4,997', us: '$50/mo' },
          theme: 'cyan' as const
        };
    }
  };

  const content = getContent();
  const isCompact = variant === 'home';
  const IconComponent = content.icon;
  const isPurple = content.theme === 'purple';
  const isEmerald = content.theme === 'emerald';

  // Dynamic theme colors
  const themeColors = isPurple 
    ? {
        border: 'border-purple-500/40',
        borderHover: 'hover:border-purple-400',
        shadow: 'hover:shadow-[0_0_80px_rgba(168,85,247,0.3)]',
        bgGradient: 'from-purple-500/10 via-card/80 to-purple-400/10',
        glowFrom: 'from-purple-500/15',
        glowTo: 'from-purple-400/10',
        badge: 'bg-purple-500/20 border-purple-400/50',
        badgeText: 'text-purple-400',
        cornerBorder: 'border-purple-400/50',
        iconText: 'text-purple-400',
        checkText: 'text-purple-400',
        saveText: 'text-purple-400',
        buttonBg: 'from-purple-500 to-purple-400',
        buttonShadow: 'shadow-purple-500/25',
        arrowText: 'text-purple-400'
      }
    : isEmerald
    ? {
        border: 'border-emerald-500/40',
        borderHover: 'hover:border-emerald-400',
        shadow: 'hover:shadow-[0_0_80px_rgba(16,185,129,0.3)]',
        bgGradient: 'from-emerald-500/10 via-card/80 to-emerald-400/10',
        glowFrom: 'from-emerald-500/15',
        glowTo: 'from-emerald-400/10',
        badge: 'bg-emerald-500/20 border-emerald-400/50',
        badgeText: 'text-emerald-400',
        cornerBorder: 'border-emerald-400/50',
        iconText: 'text-emerald-400',
        checkText: 'text-emerald-400',
        saveText: 'text-emerald-400',
        buttonBg: 'from-emerald-500 to-emerald-400',
        buttonShadow: 'shadow-emerald-500/25',
        arrowText: 'text-emerald-400'
      }
    : {
        border: 'border-cyan-500/40',
        borderHover: 'hover:border-cyan-400',
        shadow: 'hover:shadow-[0_0_80px_rgba(34,211,238,0.3)]',
        bgGradient: 'from-cyan-500/10 via-card/80 to-cyan-400/10',
        glowFrom: 'from-cyan-500/15',
        glowTo: 'from-cyan-400/10',
        badge: 'bg-cyan-500/20 border-cyan-400/50',
        badgeText: 'text-cyan-400',
        cornerBorder: 'border-cyan-400/50',
        iconText: 'text-cyan-400',
        checkText: 'text-cyan-400',
        saveText: 'text-cyan-400',
        buttonBg: 'from-cyan-500 to-cyan-400',
        buttonShadow: 'shadow-cyan-500/25',
        arrowText: 'text-cyan-400'
      };

  return (
    <motion.section 
      className="relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <a
        href="https://whop.com/stackmode-networkgroup/makemoneyonlinefast/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`relative bg-gradient-to-br ${themeColors.bgGradient} border-2 ${themeColors.border} rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 ${themeColors.borderHover} ${themeColors.shadow} group-hover:scale-[1.01]`}>
          {/* Animated background elements */}
          <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${themeColors.glowFrom} to-transparent rounded-full blur-3xl opacity-60`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${themeColors.glowTo} to-transparent rounded-full blur-3xl opacity-50`} />
          
          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className={`absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 ${themeColors.cornerBorder} rounded-tr-2xl`} />
          </motion.div>
          
          {/* Floating icon */}
          <motion.div
            className="absolute top-6 right-6 opacity-30"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconComponent size={48} className={themeColors.iconText} />
          </motion.div>
          
          <div className="relative z-10">
            {/* Badge with glow */}
            <motion.div 
              className={`inline-flex items-center gap-2 ${themeColors.badge} border rounded-full px-4 py-2 mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className={themeColors.badgeText} />
              </motion.div>
              <span className={`${themeColors.badgeText} text-sm font-bold tracking-wide`}>{content.badge}</span>
            </motion.div>

            {/* Price Comparison Visual */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                <span className="text-red-400 text-xs font-medium">Guru Course</span>
                <span className="text-red-400 font-bold line-through">{content.comparison.guru}</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} className={themeColors.arrowText} />
              </motion.div>
              <div className={`flex items-center gap-2 ${themeColors.badge} border rounded-lg px-3 py-2`}>
                <span className={`${themeColors.badgeText} text-xs font-medium`}>Stackmode</span>
                <span className={`${themeColors.badgeText} font-bold text-lg`}>{content.comparison.us}</span>
              </div>
            </div>

            <div className={`${isCompact ? 'lg:flex lg:items-center lg:gap-8' : ''}`}>
              <div className={`${isCompact ? 'lg:flex-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {content.title}
                </h3>
                <p className={`text-lg sm:text-xl ${themeColors.badgeText} font-semibold mb-2`}>
                  {content.subtitle}
                </p>
                <p className="text-base font-medium text-foreground/90 mb-3 italic">
                  "{content.headline}"
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
                      <Check size={16} className={`${themeColors.checkText} flex-shrink-0`} />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className={`${isCompact ? 'lg:text-center lg:min-w-[280px]' : ''}`}>
              {/* Pricing with emphasis */}
                <div className={`flex items-center gap-3 mb-4 ${isCompact ? 'lg:justify-center' : ''}`}>
                  <span className="text-muted-foreground line-through text-lg">$200/mo</span>
                  <span className="text-foreground font-bold text-3xl sm:text-4xl">$50/mo</span>
                  <motion.span 
                    className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full border border-green-400/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    75% OFF
                  </motion.span>
                </div>

                {/* Enhanced CTA Button */}
                <motion.div 
                  className="relative inline-flex"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.buttonBg} rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />
                  
                  <div className={`relative flex items-center gap-3 bg-gradient-to-r ${themeColors.buttonBg} text-background font-bold text-lg px-8 py-4 rounded-xl shadow-xl ${themeColors.buttonShadow} transition-all`}>
                    <Users size={20} />
                    <span>Join Stackmode Academy</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
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
