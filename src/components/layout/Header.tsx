import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Mail } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeaderProps {
  onOpenAdConsole?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Emotional Stories', href: '/category/emotional-stories' },
    { label: 'Lifestyle & Wellbeing', href: '/category/lifestyle-wellbeing' },
    { label: 'Technology & AI', href: '/category/technology-ai' },
    { label: 'Digital Skills', href: '/category/digital-skills' },
    { label: 'Online Safety', href: '/category/online-safety' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#080E19]/95 backdrop-blur-md border-b border-[#AAB9CE]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:ring-1 focus-visible:ring-[#8CF0C4]"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors">
              Trendora<span className="text-[#8CF0C4]"> Daily</span>
            </span>
          </Link>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="Main publication sections"
            className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#AAB9CE]"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#8CF0C4] font-semibold'
                      : 'hover:text-[#EDF4FF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8CF0C4] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Utility Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => navigate('/search')}
              aria-label="Search articles"
              className="p-2 rounded-lg text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#111C2F] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#111C2F] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 top-16 z-30 bg-[#080E19]/98 backdrop-blur-lg border-b border-[#AAB9CE]/15 flex flex-col p-6 overflow-y-auto"
        >
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-widest text-[#AAB9CE]/60 font-semibold">
              Editorial Sections
            </span>
          </div>

          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif text-[#EDF4FF] hover:text-[#8CF0C4] py-1 border-b border-[#AAB9CE]/10"
            >
              Home Front
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#EDF4FF] hover:text-[#8CF0C4] py-1 border-b border-[#AAB9CE]/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#AAB9CE]/15 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#AAB9CE] hover:text-[#EDF4FF]"
            >
              <Mail className="w-4 h-4 text-[#8CF0C4]" />
              <span>Contact Trendora Daily</span>
            </Link>
            <Link
              to="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#AAB9CE] hover:text-[#EDF4FF]"
            >
              <Search className="w-4 h-4 text-[#8CF0C4]" />
              <span>Search Publication</span>
            </Link>
          </div>

          <div className="mt-auto pt-8 text-xs text-[#AAB9CE]/70">
            <p className="font-serif italic text-sm text-[#EDF4FF]/80">
              “Stories that stay with you. Ideas that move you forward.”
            </p>
          </div>
        </div>
      )}
    </>
  );
};
