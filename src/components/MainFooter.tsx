import { Link } from 'react-router-dom';

export const MainFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-4 pb-bottom-nav md:pb-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">
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
