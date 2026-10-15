import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Facebook, ExternalLink, Copy, Check } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(siteConfig.editorialContact);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="w-full bg-[#080E19] border-t border-[#AAB9CE]/15 text-[#AAB9CE] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Info (Col 1-2 on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#EDF4FF]">
                Trendora<span className="text-[#8CF0C4]"> Daily</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-[#AAB9CE]">
              {siteConfig.tagline}
            </p>
            <p className="text-xs leading-relaxed text-[#AAB9CE]/70 max-w-sm">
              Thoughtful stories, useful life lessons, and simple technology guides to help you live, learn, and navigate your digital world with confidence.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8CF0C4]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Independent Editorial Standards</span>
            </div>
          </div>

          {/* Editorial Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#EDF4FF]">
              Editorial Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/category/emotional-stories" className="hover:text-[#8CF0C4] transition-colors">
                  Emotional Stories
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle-wellbeing" className="hover:text-[#8CF0C4] transition-colors">
                  Lifestyle & Wellbeing
                </Link>
              </li>
              <li>
                <Link to="/category/technology-ai" className="hover:text-[#8CF0C4] transition-colors">
                  Technology & AI
                </Link>
              </li>
              <li>
                <Link to="/category/digital-skills" className="hover:text-[#8CF0C4] transition-colors">
                  Digital Skills
                </Link>
              </li>
              <li>
                <Link to="/category/online-safety" className="hover:text-[#8CF0C4] transition-colors">
                  Online Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#EDF4FF]">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#8CF0C4] transition-colors">
                  About Trendora Daily
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8CF0C4] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#8CF0C4] transition-colors">
                  Privacy Policy & Cookies
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-[#8CF0C4] transition-colors">
                  Advertising Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-[#8CF0C4] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#EDF4FF]">
              Connect With Us
            </h4>
            <div className="space-y-3 text-xs">
              {/* Facebook Link */}
              <div>
                <a
                  href={siteConfig.officialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official Facebook Page (opens in a new tab)"
                  className="group flex items-center gap-2 text-xs text-[#EDF4FF] hover:text-[#8CF0C4] transition-colors"
                >
                  <span className="p-1.5 rounded-md bg-[#142138] border border-[#AAB9CE]/20 group-hover:border-[#8CF0C4]/40 text-[#9BC7FF] group-hover:text-[#8CF0C4] transition-colors">
                    <Facebook className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">Official Facebook Page</span>
                  <ExternalLink className="w-3 h-3 text-[#AAB9CE]/60 group-hover:text-[#8CF0C4]" />
                </a>
              </div>

              {/* Email Contact */}
              <div className="space-y-1">
                <a
                  href={`mailto:${siteConfig.editorialContact}`}
                  className="group flex items-center gap-2 text-xs text-[#EDF4FF] hover:text-[#8CF0C4] transition-colors"
                  aria-label="Email Us at mtxmaruf201@gmail.com"
                >
                  <span className="p-1.5 rounded-md bg-[#142138] border border-[#AAB9CE]/20 group-hover:border-[#8CF0C4]/40 text-[#9BC7FF] group-hover:text-[#8CF0C4] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">Email Us</span>
                </a>
                <div className="flex items-center gap-2 pl-7">
                  <span className="text-[11px] font-mono text-[#AAB9CE] break-all select-all">
                    {siteConfig.editorialContact}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                    className="p-1 text-[#AAB9CE] hover:text-[#8CF0C4] transition-colors shrink-0"
                  >
                    {copied ? (
                      <Check className="w-3 h-3 text-[#8CF0C4]" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#AAB9CE]/70">
                <p>Have feedback or suggestions? Reach out directly via our official channels.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#AAB9CE]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB9CE]/60">
          <p>© {currentYear} Trendora Daily. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#EDF4FF] transition-colors">
              Privacy
            </Link>
            <span className="text-[#AAB9CE]/30">·</span>
            <Link to="/disclaimer" className="hover:text-[#EDF4FF] transition-colors">
              Disclaimer
            </Link>
            <span className="text-[#AAB9CE]/30">·</span>
            <Link to="/terms-of-use" className="hover:text-[#EDF4FF] transition-colors">
              Terms
            </Link>
            <span className="text-[#AAB9CE]/30">·</span>
            <Link to="/contact" className="hover:text-[#8CF0C4] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
