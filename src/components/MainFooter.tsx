import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';

export const MainFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-4 pb-bottom-nav md:pb-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a 
            href="https://discord.gg/5zYWSWGMYm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-200"
            aria-label="Discord"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>
          <a 
            href="https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-200"
            aria-label="Podcast"
          >
            <Mic className="w-5 h-5 text-green-500" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">
            Courses & Books
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-border hidden sm:inline">|</span>
          <Link to="/dmca" className="text-muted-foreground hover:text-primary transition-colors">
            DMCA Policy
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stackmode Network LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
