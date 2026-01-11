import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 pb-20 md:pb-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl shadow-black/20 p-3 sm:p-6">
        {/* Mobile: Compact single-line layout */}
        <div className="flex md:hidden items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-lg flex-shrink-0">🍪</span>
            <p className="text-xs text-muted-foreground truncate">
              We use cookies.{' '}
              <a href="/privacy" className="text-primary hover:underline">Learn more</a>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="text-xs h-8 px-2"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium h-8 px-3"
            >
              Accept
            </Button>
          </div>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍪</span>
              <h3 className="text-base font-semibold text-foreground">Cookie Notice</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <a 
                href="/privacy" 
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-sm"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium"
            >
              Accept All
            </Button>
          </div>
          
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie notice"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
