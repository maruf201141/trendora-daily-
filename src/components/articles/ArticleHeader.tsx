import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, User } from 'lucide-react';
import { Article } from '../../types';
import { CATEGORIES } from '../../content/categories';
import { formatPublishedDate, getArticleReadingTime } from '../../lib/readingTime';

interface ArticleHeaderProps {
  article: Article;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  const category = CATEGORIES.find((c) => c.slug === article.category);
  const formattedDate = formatPublishedDate(article.publishedDate);
  const readingTime = getArticleReadingTime(article);

  return (
    <header className="mb-8 max-w-4xl">
      {/* Category & Metadata kicker */}
      <div className="flex items-center gap-2 text-xs text-[#AAB9CE] mb-4 flex-wrap">
        <Link
          to={`/category/${article.category}`}
          className="text-xs font-semibold uppercase tracking-wider text-[#8CF0C4] hover:underline"
        >
          {category?.name || article.category}
        </Link>
        <span aria-hidden="true" className="text-[#AAB9CE]/40">/</span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#AAB9CE]/70" />
          <span>{formattedDate}</span>
        </span>
        <span aria-hidden="true" className="text-[#AAB9CE]/40">/</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#AAB9CE]/70" />
          <span>{readingTime} min read</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDF4FF] leading-[1.15] text-balance">
        {article.title}
      </h1>

      {/* Excerpt Deck */}
      <p className="mt-4 text-base sm:text-lg text-[#AAB9CE] leading-relaxed font-normal">
        {article.excerpt}
      </p>

      {/* Author Attribution Strip */}
      <div className="mt-6 pt-6 border-t border-[#AAB9CE]/15 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-11 h-11 rounded-full border border-[#8CF0C4]/40"
          />
          <div>
            <div className="text-sm font-semibold text-[#EDF4FF]">{article.author.name}</div>
            <div className="text-xs text-[#AAB9CE]">{article.author.role}</div>
          </div>
        </div>

        {article.tags.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-[#AAB9CE]/80 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-[#AAB9CE]/50">Topics:</span>
            {article.tags.map((tag, idx) => (
              <span key={tag}>
                <span className="text-[#9BC7FF]">{tag}</span>
                {idx < article.tags.length - 1 && <span className="text-[#AAB9CE]/30 ml-1">·</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
