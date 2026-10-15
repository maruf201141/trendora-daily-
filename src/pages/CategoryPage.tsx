import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, getCategoryBySlug } from '../content/categories';
import { getArticlesByCategory } from '../content/articles';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleGrid } from '../components/articles/ArticleGrid';
import { AdSlot } from '../components/ads/AdSlot';
import { updateSeoMetadata } from '../lib/seo';
import { getArticleReadingTime } from '../lib/readingTime';
import { ArrowUpDown, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  onOpenAdConsole: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onOpenAdConsole }) => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<'latest' | 'readTime'>('latest');

  const category = slug ? getCategoryBySlug(slug) : undefined;
  const articles = slug ? getArticlesByCategory(slug) : [];

  useEffect(() => {
    if (category) {
      window.scrollTo(0, 0);
      updateSeoMetadata({
        title: `${category.name} – Trendora Daily Archive`,
        description: category.description,
        ogType: 'website',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: category.name, url: `/category/${category.slug}` },
        ],
      });
    }
  }, [category]);

  if (!category) {
    return (
      <PageContainer maxWidth="narrow" className="py-20 text-center">
        <h1 className="font-serif text-2xl font-bold text-[#EDF4FF]">
          Category Not Found
        </h1>
        <p className="mt-2 text-sm text-[#AAB9CE]">
          The section you are searching for does not exist in our editorial catalog.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs font-semibold"
        >
          Return to Home
        </Link>
      </PageContainer>
    );
  }

  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
    return getArticleReadingTime(a) - getArticleReadingTime(b);
  });

  const breadcrumbs = [{ label: category.name }];

  return (
    <div className="min-h-screen">
      <PageContainer>
        <Breadcrumbs items={breadcrumbs} />

        {/* Category Header */}
        <header className="my-8 pb-8 border-b border-[#AAB9CE]/15">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
            Editorial Section
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#EDF4FF] mt-2 mb-4">
            {category.name}
          </h1>
          <p className="text-base text-[#AAB9CE] max-w-3xl leading-relaxed">
            {category.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#AAB9CE]/10 text-xs text-[#AAB9CE]">
            <span>
              Showing <strong className="text-[#EDF4FF]">{articles.length}</strong> published{' '}
              {articles.length === 1 ? 'dispatch' : 'dispatches'}
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8CF0C4]" />
              <label htmlFor="sort-select" className="text-xs text-[#AAB9CE]">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'readTime')}
                className="bg-[#111C2F] border border-[#AAB9CE]/20 text-[#EDF4FF] text-xs rounded px-2.5 py-1 focus:outline-none focus:border-[#8CF0C4]"
              >
                <option value="latest">Latest Publication Date</option>
                <option value="readTime">Estimated Reading Time</option>
              </select>
            </div>
          </div>
        </header>

        {/* Category Articles */}
        <ArticleGrid articles={sortedArticles} columns={3} />

        {/* Category Ad Unit */}
        <div className="my-14">
          <AdSlot
            placementId="after-hero"
            onOpenInspector={onOpenAdConsole}
          />
        </div>

        {/* Other Sections Directory */}
        <div className="my-16 p-8 rounded-2xl border border-[#AAB9CE]/15 bg-[#142138]">
          <h3 className="font-serif text-xl font-medium text-[#EDF4FF] mb-4">
            Explore Other Editorial Channels
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((other) => (
              <Link
                key={other.id}
                to={`/category/${other.slug}`}
                className="p-4 rounded-xl border border-[#AAB9CE]/10 bg-[#111C2F] hover:border-[#8CF0C4]/40 transition-all group"
              >
                <h4 className="font-serif text-sm font-semibold text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors">
                  {other.name}
                </h4>
                <p className="mt-1 text-xs text-[#AAB9CE] line-clamp-2 leading-relaxed">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
