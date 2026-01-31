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
          badge: 'THE STACKFINDER',
          title: 'AI-Powered Trading Tools',
          subtitle: 'Master The Markets with Smart Technology',
          description: 'Get access to the Stackfinder — our Market Intelligence System with live volume tracking, smart strike solver, accurate share calculators, and the Stackmode Scout AI assistant.',
          features: [
            'Live Volume Scanner & Stock Alerts',
            'Smart Strike Solver for Options',
            'AI Market Analysis with Stackmode Scout',
            'Weekly Live Trading Calls',
            'Trading Courses Worth $1000+',
            'Always Updated Strategies'
          ],
          icon: BarChart3,
        };
      case 'business':
        return {
          badge: 'AI BUSINESS MODELS',
          title: 'Build Income With AI',
          subtitle: 'The Stackmode System for Financial Freedom',
          description: 'Learn how to generate income by creating AI-powered businesses, get monetized on YouTube and other platforms, and follow the proven Stackmode System to financial freedom.',
          features: [
            'AI Business Model Training',
            'YouTube Monetization Strategies',
            'Content Creation with AI',
            'Social Media Growth Systems',
            'Business Courses Worth $1000+',
            'Always Updated to Current Trends'
          ],
          icon: Youtube,
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
          icon: Target,
        };
      case 'website':
        return {
          badge: 'DIY OPTION',
          title: 'Learn to Build Your Own Website',
          subtitle: 'Website Training Included in Membership',
          description: "Want to build your own website? Inside the Stackmode Network, you'll learn how to create professional websites using AI tools — no coding required.",
          features: [
            'AI Website Building Training',
            'No Coding Required',
            'Professional Design Templates',
            'SEO & Marketing Included',
            'Plus All Trading & Business Content',
            'Just $50/month — Cancel Anytime'
          ],
          icon: Globe,
        };
      default: // home
        return {
          badge: 'STACKMODE NETWORK',
          title: 'The Blueprint to Financial Freedom',
          subtitle: 'AI Business Models & Trading Education',
          description: 'Join the Stackmode Network and learn AI business models and trading strategies. For just $50/month, get access to everything you need to build multiple income streams.',
          features: [
            'AI Business & Trading Education',
            'Live Weekly Coaching Calls',
            'The Stackfinder Trading Tools',
            'Community of Entrepreneurs'
          ],
          icon: Rocket,
        };
    }
  };

  const content = getContent();
  const isCompact = variant === 'home';
  const IconComponent = content.icon;

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
        <div className="relative bg-gradient-to-br from-cyan-500/10 via-card/80 to-cyan-400/10 border-2 border-cyan-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(34,211,238,0.3)] group-hover:scale-[1.01]">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl opacity-50" />
          
          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl" />
          </motion.div>
          
          {/* Floating icon */}
          <motion.div
            className="absolute top-6 right-6 opacity-30"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconComponent size={48} className="text-cyan-400" />
          </motion.div>
          
          <div className="relative z-10">
            {/* Badge with glow */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full px-4 py-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-cyan-400" />
              </motion.div>
              <span className="text-cyan-400 text-sm font-bold tracking-wide">{content.badge}</span>
            </motion.div>

            <div className={`${isCompact ? 'lg:flex lg:items-center lg:gap-8' : ''}`}>
              <div className={`${isCompact ? 'lg:flex-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {content.title}
                </h3>
                <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-3">
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
                      <Check size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className={`${isCompact ? 'lg:text-center lg:min-w-[280px]' : ''}`}>
                {/* Pricing with emphasis */}
                <div className={`flex items-center gap-3 mb-4 ${isCompact ? 'lg:justify-center' : ''}`}>
                  <span className="text-muted-foreground line-through text-lg">$100/mo</span>
                  <span className="text-foreground font-bold text-3xl sm:text-4xl">$50/mo</span>
                  <motion.span 
                    className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded-full border border-cyan-400/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    50% OFF
                  </motion.span>
                </div>

                {/* Enhanced CTA Button */}
                <motion.div 
                  className="relative inline-flex"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-background font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-cyan-500/25 transition-all">
                    <Users size={20} />
                    <span>Join Stackmode Network</span>
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
