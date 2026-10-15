import React, { useState } from 'react';
import { Share2, Link2, Check, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch {
        // Share cancelled or unavailable
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-[#AAB9CE]/60 mr-1 hidden sm:inline">Share:</span>

      {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
        <button
          type="button"
          onClick={handleNativeShare}
          aria-label="Share article via system dialog"
          className="p-2 rounded-lg bg-[#111C2F] text-[#AAB9CE] hover:text-[#8CF0C4] hover:bg-[#142138] border border-[#AAB9CE]/15 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      )}

      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy article link to clipboard"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#111C2F] text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#142138] border border-[#AAB9CE]/15 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#8CF0C4]" />
            <span className="text-[11px] text-[#8CF0C4]">Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="w-3.5 h-3.5" />
            <span className="text-[11px]">Copy link</span>
          </>
        )}
      </button>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="p-2 rounded-lg bg-[#111C2F] text-[#AAB9CE] hover:text-[#9BC7FF] hover:bg-[#142138] border border-[#AAB9CE]/15 transition-colors"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="p-2 rounded-lg bg-[#111C2F] text-[#AAB9CE] hover:text-[#9BC7FF] hover:bg-[#142138] border border-[#AAB9CE]/15 transition-colors"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
