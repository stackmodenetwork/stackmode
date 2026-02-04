import { useEffect } from 'react';

export const TrustpilotWidget = () => {
  useEffect(() => {
    // Load Trustpilot widget if not already loaded
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(document.querySelector('.trustpilot-widget'), true);
    }
  }, []);

  return (
    <div className="w-full py-4">
      <div 
        className="trustpilot-widget" 
        data-locale="en-US" 
        data-template-id="56278e9abfbbba0bdcd568bc" 
        data-businessunit-id="696401fbe66451fcf34d00f5" 
        data-style-height="52px" 
        data-style-width="100%"
        data-token="71f1aa95-62e8-4ff7-ab53-b2c5407fc95e"
      >
        <a 
          href="https://www.trustpilot.com/review/stackmode.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          See our reviews on Trustpilot
        </a>
      </div>
    </div>
  );
};

// Extend Window interface for Trustpilot
declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: Element | null, forceReload?: boolean) => void;
    };
  }
}
