import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Zap, Users, BookOpen, ShoppingCart, Headphones, Star, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const books = [
  {
    title: "Neuro Trading",
    image: "/images/books/neuro-trading.jpg",
    amazonLink: "https://a.co/d/0bz50oF",
    audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaGWdZbM",
    ebookPrice: "$9.99",
    audiobookPrice: "$9.99",
    paperbackPrice: "$19.99"
  },
  {
    title: "Before The HYPE",
    image: "/images/books/before-the-hype-2026.jpg",
    amazonLink: "https://a.co/d/eSgONXa",
    audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaaVspUM",
    ebookPrice: "$9.99",
    audiobookPrice: "$9.99",
    paperbackPrice: "$19.99"
  },
  {
    title: "Freedom Money",
    image: "/images/books/freedom-money.jpg",
    amazonLink: "https://a.co/d/91RUksI",
    audiobookLink: "https://play.google.com/store/audiobooks/details?id=AQAAAEAaqV_pVM",
    ebookPrice: "$9.99",
    audiobookPrice: "$9.99",
    paperbackPrice: "$19.99"
  }
];

interface UniversalPageBottomProps {
  className?: string;
  showBooks?: boolean;
}

export const UniversalPageBottom = ({ className = '', showBooks = true }: UniversalPageBottomProps) => {
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Main CTAs */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Sparkles size={28} className="text-primary mx-auto" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ready to Get Started?
            </h2>
             <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
58:               Book a free consultation to talk about your project or coding goals.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <motion.a
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={20} />
                <span>Get Your Software Engineered</span>
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </ScrollReveal>

        {/* CEOTurbo Brand CTA */}
        <ScrollReveal delay={0.05}>
          <div className="text-center mt-8 mb-2">
            <p className="text-muted-foreground text-sm mb-3">
              Need to turbo-boost your brand income?
            </p>
            <motion.a
              href="https://ceoturbo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-bold px-6 py-3 rounded-xl transition-all text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src="/images/ceoturbo-logo.png" alt="CEOTurbo" className="w-6 h-6 object-contain" />
              <span>Visit CEOTurbo.com</span>
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Books Section */}
        {showBooks && (
          <ScrollReveal delay={0.1}>
            <div className="border-t border-border/30 pt-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-3">
                  <BookOpen size={16} className="text-amber-500" />
                  <span className="text-amber-500 text-sm font-bold">PUBLISHED AUTHOR</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Learn From My Books</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {books.map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card/50 border border-border hover:border-amber-500/50 rounded-xl p-4 transition-all group"
                  >
                    {/* Book Cover */}
                    <div className="flex justify-center mb-3">
                      <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                        <motion.img
                          src={book.image}
                          alt={book.title}
                          className="w-24 h-36 object-cover rounded-lg shadow-lg group-hover:shadow-amber-500/20 transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        />
                      </a>
                    </div>

                    {/* Book Info */}
                    <h4 className="font-bold text-foreground text-center mb-1">{book.title}</h4>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={10} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex justify-center gap-2 text-[10px] mb-3">
                      <span className="text-muted-foreground">
                        eBook <span className="text-amber-500 font-bold">{book.ebookPrice}</span>
                      </span>
                      <span className="text-border">|</span>
                      <span className="text-muted-foreground">
                        Print <span className="text-amber-500 font-bold">{book.paperbackPrice}</span>
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold py-2 rounded-lg transition-colors text-xs"
                      >
                        <ShoppingCart size={12} />
                        <span>Amazon</span>
                      </a>
                      <a
                        href={book.audiobookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition-colors text-xs"
                      >
                        <Headphones size={12} />
                        <span>Audio {book.audiobookPrice}</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default UniversalPageBottom;
