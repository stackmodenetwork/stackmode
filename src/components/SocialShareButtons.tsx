import { Facebook, Linkedin, Twitter, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const SocialShareButtons = ({ 
  url = typeof window !== 'undefined' ? window.location.href : 'https://stackmode.net',
  title = 'Stackmodechris | Free Trading Mentorship & Live Signals',
  description = 'Learn how to trade profitably with Stackmodechris. Free 1-on-1 trading mentorship, live trade signals for $20/mo.',
  className = ''
}: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground mr-2">Share:</span>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleShare('twitter')}
        className="h-9 w-9 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground hover:text-primary transition-colors"
        aria-label="Share on Twitter/X"
      >
        <Twitter size={18} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleShare('facebook')}
        className="h-9 w-9 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground hover:text-primary transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleShare('linkedin')}
        className="h-9 w-9 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground hover:text-primary transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={copyToClipboard}
        className="h-9 w-9 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground hover:text-primary transition-colors"
        aria-label="Copy link"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <Link2 size={18} />}
      </Button>
    </div>
  );
};
