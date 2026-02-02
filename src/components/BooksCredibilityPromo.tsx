import { motion } from 'framer-motion';
import { BookOpen, Headphones, ShoppingCart, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
interface Book {
  title: string;
  subtitle: string;
  image: string;
  amazonLink: string;
  audiobookLink: string;
  description: string;
  features: string[];
  ebookPrice: string;
  audiobookPrice: string;
  paperbackPrice: string;
}
const books: Book[] = [{
  title: "Neuro Trading",
  subtitle: "Master The Psychology of Trading",
  image: "/images/books/neuro-trading.jpg",
  amazonLink: "https://a.co/d/0bz50oF",
  audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaGWdZbM",
  description: "Unlock the mental edge that separates winning traders from the rest. Master your emotions, build discipline, and trade with confidence.",
  features: ["Trading Psychology", "Emotional Control", "Mental Framework"],
  ebookPrice: "$9.99",
  audiobookPrice: "$9.99",
  paperbackPrice: "$19.99"
}, {
  title: "Before The HYPE",
  subtitle: "Spot Opportunities Before the Crowd",
  image: "/images/books/before-the-hype-v2.png",
  amazonLink: "https://a.co/d/eSgONXa",
  audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaaVspUM",
  description: "Learn to identify winning trades and opportunities before they go mainstream. Get in early, get out profitable.",
  features: ["Early Entry Strategies", "Trend Spotting", "Market Timing"],
  ebookPrice: "$9.99",
  audiobookPrice: "$9.99",
  paperbackPrice: "$19.99"
}, {
  title: "Freedom Money",
  subtitle: "Build Your Path to Financial Independence",
  image: "/images/books/freedom-money.jpg",
  amazonLink: "https://a.co/d/91RUksI",
  audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaqV_pVM",
  description: "Your complete guide to building wealth through multiple income streams. Learn the money management strategies that create lasting freedom.",
  features: ["Wealth Building", "Multiple Income Streams", "Financial Freedom"],
  ebookPrice: "$9.99",
  audiobookPrice: "$9.99",
  paperbackPrice: "$19.99"
}];
interface BooksCredibilityPromoProps {
  variant?: 'full' | 'compact' | 'minimal';
  showHeading?: boolean;
  className?: string;
}
export const BooksCredibilityPromo = ({
  variant = 'full',
  showHeading = true,
  className = ''
}: BooksCredibilityPromoProps) => {
  if (variant === 'minimal') {
    return <section className={`py-8 ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-3">
                <BookOpen size={16} className="text-amber-500" />
                <span className="text-amber-500 text-sm font-semibold">Published Author</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Learn from My Books on Amazon</h3>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-4">
            {books.map((book, index) => <motion.a key={book.title} href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-card/50 border border-border hover:border-amber-500/50 rounded-xl px-4 py-3 transition-all duration-300" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.02
          }}>
                <img src={book.image} alt={book.title} className="w-10 h-14 object-cover rounded shadow-md" />
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-amber-500 transition-colors">
                    {book.title}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-500">
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                  </div>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </motion.a>)}
          </div>
        </div>
      </section>;
  }
  if (variant === 'compact') {
    return <section className={`py-10 ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          {showHeading && <ScrollReveal>
              <div className="text-center mb-8">
                <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-full px-5 py-2 mb-4" animate={{
              scale: [1, 1.02, 1]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}>
                  <BookOpen size={18} className="text-amber-500" />
                  <span className="text-amber-500 font-bold text-sm">BESTSELLING AUTHOR</span>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Learn from My Amazon Books
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Transform your trading and business with proven strategies from my published works
                </p>
              </div>
            </ScrollReveal>}

          <div className="grid md:grid-cols-3 gap-4">
            {books.map((book, index) => <motion.div key={book.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }} className="group">
                <div className="relative bg-card/60 border border-border hover:border-amber-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                  {/* Book Cover */}
                  <div className="relative mb-4 flex justify-center">
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <motion.img src={book.image} alt={book.title} className="w-28 h-40 rounded-lg shadow-xl group-hover:shadow-amber-500/20 transition-shadow hover:shadow-amber-500/40 object-scale-down" whileHover={{
                    scale: 1.08,
                    rotateY: 10
                  }} />
                    </a>
                  </div>

                  {/* Book Info */}
                  <h3 className="font-bold text-foreground text-center mb-1">{book.title}</h3>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-amber-500 fill-amber-500" />)}
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex justify-center gap-3 text-xs mb-3">
                    <span className="text-muted-foreground">eBook <span className="text-amber-500 font-bold">{book.ebookPrice}</span></span>
                    <span className="text-border">|</span>
                    <span className="text-muted-foreground">Paperback <span className="text-amber-500 font-bold">{book.paperbackPrice}</span></span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold py-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-1">
                        <ShoppingCart size={14} />
                        <span className="text-sm">Amazon</span>
                      </div>
                    </a>
                    <a href={book.audiobookLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-1">
                        <Headphones size={14} />
                        <span className="text-sm">Audio {book.audiobookPrice}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>;
  }

  // Full variant - for Library page
  return <section className={`py-12 ${className}`} id="books-section">
      <div className="max-w-6xl mx-auto px-4">
        {showHeading && <ScrollReveal>
            <div className="text-center mb-10">
              <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 border-2 border-amber-500/50 rounded-full px-6 py-3 mb-5" animate={{
            boxShadow: ['0 0 0px rgba(245,158,11,0)', '0 0 30px rgba(245,158,11,0.3)', '0 0 0px rgba(245,158,11,0)']
          }} transition={{
            duration: 3,
            repeat: Infinity
          }}>
                <BookOpen size={20} className="text-amber-500" />
                <span className="text-amber-500 font-bold tracking-wide">AMAZON BESTSELLING AUTHOR</span>
                <Star size={16} className="text-amber-500 fill-amber-500" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Learn From My Published Books
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                Deep-dive into proven trading psychology, wealth building strategies, and market timing techniques.
              </p>
              <p className="text-sm text-amber-500/80">
                Available in Paperback, eBook & Audiobook formats
              </p>
            </div>
          </ScrollReveal>}

        <div className="grid lg:grid-cols-3 gap-6">
          {books.map((book, index) => <motion.div key={book.title} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.15,
          duration: 0.5
        }} className="group">
              <div className="relative h-full bg-gradient-to-b from-card/80 to-card/40 border-2 border-border hover:border-amber-500/60 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Book Cover */}
                <div className="relative mb-6 flex justify-center">
                  <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="relative cursor-pointer">
                    <motion.img src={book.image} alt={book.title} className="w-36 h-52 object-cover rounded-lg shadow-2xl border border-white/10 hover:shadow-amber-500/30" whileHover={{
                  scale: 1.08,
                  rotateY: 15
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }} />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none" />
                  </a>
                </div>

                {/* Book Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{book.title}</h3>
                  <p className="text-sm text-amber-500 font-medium mb-2">{book.subtitle}</p>
                  <div className="flex justify-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-amber-500 fill-amber-500" />)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="flex justify-center gap-4 text-sm mb-4">
                  <div className="text-center">
                    <span className="text-muted-foreground block text-xs">eBook</span>
                    <span className="text-amber-500 font-bold">{book.ebookPrice}</span>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <span className="text-muted-foreground block text-xs">Paperback</span>
                    <span className="text-amber-500 font-bold">{book.paperbackPrice}</span>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <span className="text-muted-foreground block text-xs">Audiobook</span>
                    <span className="text-purple-400 font-bold">{book.audiobookPrice}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {book.features.map(feature => <span key={feature} className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-1 rounded-full border border-amber-500/20">
                      {feature}
                    </span>)}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {/* Amazon Button */}
                  <motion.a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#232F3E] hover:bg-[#1a242f] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-amber-500/10" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    <ShoppingCart size={18} className="text-[#FF9900]" />
                    <span>Buy on Amazon</span>
                    <ArrowRight size={16} className="text-[#FF9900]" />
                  </motion.a>

                  {/* Audiobook Button */}
                  <motion.a href={book.audiobookLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    <Headphones size={18} />
                    <span>Listen on Google Play — {book.audiobookPrice}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div className="mt-10 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.5
      }}>
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Available Worldwide
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              5-Star Reviews
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <Headphones size={14} className="text-purple-400" />
              Audio Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default BooksCredibilityPromo;