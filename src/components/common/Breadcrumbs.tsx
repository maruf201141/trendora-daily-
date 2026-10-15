import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumbs" className="flex items-center text-xs text-[#AAB9CE] py-3">
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-[#EDF4FF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8CF0C4]"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-[#AAB9CE]/40 shrink-0" />
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-[#EDF4FF] transition-colors whitespace-nowrap truncate max-w-[200px] sm:max-w-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8CF0C4]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#EDF4FF] font-medium whitespace-nowrap truncate max-w-[240px] sm:max-w-md" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
