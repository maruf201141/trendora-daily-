import React from 'react';
import { CATEGORIES } from '../../content/categories';

interface CategoryFilterProps {
  activeCategory: string; // 'all' or category slug
  onSelectCategory: (slug: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  className = '',
}) => {
  return (
    <div
      role="tablist"
      aria-label="Filter articles by category"
      className={`flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full ${className}`}
    >
      <button
        role="tab"
        aria-selected={activeCategory === 'all'}
        onClick={() => onSelectCategory('all')}
        className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
          activeCategory === 'all'
            ? 'bg-[#8CF0C4] text-[#080E19] font-semibold'
            : 'bg-[#111C2F] text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#142138] border border-[#AAB9CE]/15'
        }`}
      >
        All Dispatches
      </button>

      {CATEGORIES.map((cat) => {
        const isSelected = activeCategory === cat.slug;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat.slug)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              isSelected
                ? 'bg-[#8CF0C4] text-[#080E19] font-semibold'
                : 'bg-[#111C2F] text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#142138] border border-[#AAB9CE]/15'
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};
