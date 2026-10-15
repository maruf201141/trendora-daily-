import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '../../types';

interface ArticleNavigationProps {
  prevArticle?: Article;
  nextArticle?: Article;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({
  prevArticle,
  nextArticle,
}) => {
  if (!prevArticle && !nextArticle) return null;

  return (
    <nav
      aria-label="Previous and next articles"
      className="my-10 pt-8 border-t border-[#AAB9CE]/15 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {prevArticle ? (
        <Link
          to={`/articles/${prevArticle.slug}`}
          className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#142138] hover:border-[#8CF0C4]/40 transition-all flex flex-col group"
        >
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#AAB9CE]/70 mb-1 group-hover:text-[#8CF0C4]">
            <ChevronLeft className="w-3.5 h-3.5" /> Previous Dispatch
          </span>
          <span className="font-serif text-sm sm:text-base font-medium text-[#EDF4FF] line-clamp-2">
            {prevArticle.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextArticle ? (
        <Link
          to={`/articles/${nextArticle.slug}`}
          className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#142138] hover:border-[#8CF0C4]/40 transition-all flex flex-col text-left sm:text-right group"
        >
          <span className="flex items-center justify-start sm:justify-end gap-1 text-[11px] uppercase tracking-wider text-[#AAB9CE]/70 mb-1 group-hover:text-[#8CF0C4]">
            Next Dispatch <ChevronRight className="w-3.5 h-3.5" />
          </span>
          <span className="font-serif text-sm sm:text-base font-medium text-[#EDF4FF] line-clamp-2">
            {nextArticle.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};
