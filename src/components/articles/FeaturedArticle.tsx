import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Article } from '../../types';
import { CATEGORIES } from '../../content/categories';
import { formatPublishedDate, getArticleReadingTime } from '../../lib/readingTime';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  const [imageError, setImageError] = useState(false);
  const category = CATEGORIES.find((c) => c.slug === article.category);
  const formattedDate = formatPublishedDate(article.publishedDate);
  const readingTime = getArticleReadingTime(article);

  return (
    <section
      aria-label="Lead Editorial Story"
      className="my-8 rounded-2xl border border-[#9BC7FF]/20 bg-[#111C2F] overflow-hidden group hover:border-[#8CF0C4]/40 transition-all"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Visual Anchor (7 columns) */}
        <Link
          to={`/articles/${article.slug}`}
          className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[#080E19]"
        >
          {!imageError ? (
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              onError={() => setImageError(true)}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#142138]">
              <BookOpen className="w-12 h-12 text-[#8CF0C4]/50 mb-3" />
              <span className="text-sm font-serif text-[#EDF4FF]">Trendora Lead Feature</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111C2F] via-transparent to-transparent lg:hidden" />
        </Link>

        {/* Editorial Text (5 columns) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#AAB9CE] mb-3 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-[#8CF0C4] font-semibold">
                Lead Feature
              </span>
              <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
              <Link
                to={`/category/${article.category}`}
                className="text-[#9BC7FF] hover:underline"
              >
                {category?.name || article.category}
              </Link>
              <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
              <span>{formattedDate}</span>
              <span aria-hidden="true" className="text-[#AAB9CE]/40">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#AAB9CE]/70" />
                <span>{readingTime} min read</span>
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors leading-tight">
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#AAB9CE] leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#AAB9CE]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-9 h-9 rounded-full border border-[#8CF0C4]/30"
              />
              <div>
                <p className="text-xs font-semibold text-[#EDF4FF]">{article.author.name}</p>
                <p className="text-[11px] text-[#AAB9CE]">{article.author.role}</p>
              </div>
            </div>

            <Link
              to={`/articles/${article.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs font-semibold hover:bg-[#8CF0C4]/90 transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
