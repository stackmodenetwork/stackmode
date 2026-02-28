import { Link } from 'react-router-dom';
import { Home, Mic, MessageCircle, Globe, Phone } from 'lucide-react';

export function LegalPageNav() {
  return (
    <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <Home size={14} />
          <span>Home</span>
        </Link>
        <a
          href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <Mic size={14} />
          <span>Podcast</span>
        </a>
        <a
          href="https://discord.gg/5zYWSWGMYm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <MessageCircle size={14} />
          <span>Discord</span>
        </a>
        <a
          href="https://ceoturbo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <Globe size={14} />
          <span>Grow Your Brand</span>
        </a>
        <a
          href="tel:+16787758532"
          className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Phone size={14} />
          <span>Call</span>
        </a>
      </div>
    </nav>
  );
}
