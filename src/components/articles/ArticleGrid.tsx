import React from 'react';
import { Article } from '../../types';
import { ArticleCard } from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  columns?: 2 | 3 | 4;
  className?: string;
  variant?: 'standard' | 'horizontal';
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  columns = 3,
  className = '',
  variant = 'standard',
}) => {
  if (articles.length === 0) {
    return (
      <div className="py-12 text-center rounded-xl border border-dashed border-[#AAB9CE]/20 p-8 text-[#AAB9CE]">
        <p className="text-sm font-serif">No editorial dispatches match this selection.</p>
      </div>
    );
  }

  const colClasses = {
    2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
  };

  return (
    <div className={`${colClasses[columns]} ${className}`}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          variant={variant}
        />
      ))}
    </div>
  );
};
