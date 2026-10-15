import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search articles, topics, or authors...',
  className = '',
  autoFocus = false,
}) => {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <Search className="absolute left-3.5 w-4 h-4 text-[#AAB9CE] pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        aria-label="Search articles across Trendora Daily"
        className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-[#111C2F] border border-[#AAB9CE]/20 text-sm text-[#EDF4FF] placeholder-[#AAB9CE]/60 focus:border-[#8CF0C4] focus:outline-none transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          className="absolute right-3 p-0.5 text-[#AAB9CE] hover:text-[#EDF4FF] transition-colors"
          aria-label="Clear search input"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
