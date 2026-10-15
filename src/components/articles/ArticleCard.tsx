import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { Article } from '../../types';
import { CATEGORIES } from '../../content/categories';
import { formatPublishedDate, getArticleReadingTime } from '../../lib/readingTime';

interface ArticleCardProps {
  article: Article;
  variant?: 'standard' | 'compact' | 'horizontal';
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'standard',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const category = CATEGORIES.find((c) => c.slug === article.category);
  const formattedDate = formatPublishedDate(article.publishedDate);
  const readingTime = getArticleReadingTime(article);

  if (variant === 'horizontal') {
    return (
      <article
        className={`group flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#142138] hover:border-[#8CF0C4]/40 transition-all ${className}`}
      >
        <Link
          to={`/articles/${article.slug}`}
          className="relative w-full sm:w-44 h-36 shrink-0 rounded-lg overflow-hidden bg-[#111C2F]"
        >
          {!imageError ? (
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              onError={() => setImageError(true)}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#111C2F] to-[#142138]">
              <BookOpen className="w-6 h-6 text-[#8CF0C4]/60 mb-1" />
              <span className="text-[10px] text-[#AAB9CE]">Trendora Dispatch</span>
            </div>
          )}
        </Link>

        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#AAB9CE] mb-1.5 flex-wrap">
              <Link
                to={`/category/${article.category}`}
                className="text-[#8CF0C4] hover:underline font-medium"
              >
                {category?.name || article.category}
              </Link>
              <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
              <span>{formattedDate}</span>
              <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#AAB9CE]/70" />
                <span>{readingTime} min</span>
              </span>
            </div>

            <h3 className="font-serif text-lg font-semibold text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors leading-snug line-clamp-2">
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </h3>

            <p className="mt-1.5 text-xs text-[#AAB9CE] line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-[#AAB9CE]/10 flex items-center justify-between text-xs text-[#AAB9CE]">
            <span>By {article.author.name}</span>
            <Link
              to={`/articles/${article.slug}`}
              className="text-[#8CF0C4] hover:underline font-medium text-xs"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group flex flex-col rounded-xl border border-[#AAB9CE]/15 bg-[#142138] overflow-hidden hover:border-[#8CF0C4]/40 transition-all ${className}`}
    >
      <Link
        to={`/articles/${article.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#111C2F]"
      >
        {!imageError ? (
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#111C2F] to-[#142138]">
            <BookOpen className="w-8 h-8 text-[#8CF0C4]/60 mb-2" />
            <span className="text-xs text-[#AAB9CE]">Trendora Editorial</span>
          </div>
        )}
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#AAB9CE] mb-2 flex-wrap">
            <Link
              to={`/category/${article.category}`}
              className="text-[#8CF0C4] hover:underline font-medium"
            >
              {category?.name || article.category}
            </Link>
            <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#AAB9CE]/70" />
              <span>{readingTime}m</span>
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors leading-snug">
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#AAB9CE] line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#AAB9CE]/10 flex items-center justify-between text-xs text-[#AAB9CE]">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-5 h-5 rounded-full border border-[#AAB9CE]/20"
              loading="lazy"
            />
            <span className="truncate max-w-[120px]">{article.author.name}</span>
          </div>
          <Link
            to={`/articles/${article.slug}`}
            className="text-[#8CF0C4] hover:underline font-medium"
          >
            Read Story →
          </Link>
        </div>
      </div>
    </article>
  );
};
