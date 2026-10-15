import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, Filter, RefreshCw } from 'lucide-react';
import { searchArticles, ARTICLES } from '../content/articles';
import { CATEGORIES } from '../content/categories';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SearchBar } from '../components/search/SearchBar';
import { CategoryFilter } from '../components/search/CategoryFilter';
import { ArticleGrid } from '../components/articles/ArticleGrid';
import { AdSlot } from '../components/ads/AdSlot';
import { updateSeoMetadata } from '../lib/seo';

interface SearchPageProps {
  onOpenAdConsole: () => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onOpenAdConsole }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('category') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);

  useEffect(() => {
    updateSeoMetadata({
      title: query ? `Search: "${query}" – Trendora Daily` : 'Search Archive – Trendora Daily',
      description: 'Search across Trendora Daily essays, wellness guides, technology tips, and digital safety articles.',
    });
  }, [query]);

  // Synchronize URL parameters
  const handleQueryChange = (val: string) => {
    setQuery(val);
    const newParams = new URLSearchParams(searchParams);
    if (val) {
      newParams.set('q', val);
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams, { replace: true });
  };

  const handleCategorySelect = (catSlug: string) => {
    setSelectedCategory(catSlug);
    const newParams = new URLSearchParams(searchParams);
    if (catSlug !== 'all') {
      newParams.set('category', catSlug);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams, { replace: true });
  };

  const results = searchArticles(query, selectedCategory);

  const breadcrumbs = [{ label: 'Search & Archive' }];

  return (
    <div className="min-h-screen">
      <PageContainer>
        <Breadcrumbs items={breadcrumbs} />

        <header className="my-8 max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#EDF4FF] mb-3">
            Search Publication Archive
          </h1>
          <p className="text-sm text-[#AAB9CE] leading-relaxed">
            Explore our curated catalog of emotional reflections, life lessons, AI prompt techniques, and cybersecurity principles.
          </p>
        </header>

        {/* Search Controls */}
        <div className="space-y-4 my-8 p-6 rounded-2xl border border-[#AAB9CE]/15 bg-[#142138] max-w-4xl">
          <SearchBar
            value={query}
            onChange={handleQueryChange}
            autoFocus={false}
          />

          <div className="pt-2">
            <span className="block text-xs uppercase tracking-wider text-[#AAB9CE]/70 mb-2 font-medium">
              Filter by Topic:
            </span>
            <CategoryFilter
              activeCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#AAB9CE]/15 text-xs text-[#AAB9CE]">
          <span>
            Found <strong className="text-[#8CF0C4]">{results.length}</strong>{' '}
            {results.length === 1 ? 'article' : 'articles'}
            {query && <span> for &ldquo;{query}&rdquo;</span>}
            {selectedCategory !== 'all' && (
              <span> in {CATEGORIES.find((c) => c.slug === selectedCategory)?.name || selectedCategory.replace(/-/g, ' ')}</span>
            )}
          </span>

          {(query || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                handleQueryChange('');
                handleCategorySelect('all');
              }}
              className="inline-flex items-center gap-1 text-[#9BC7FF] hover:underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <ArticleGrid articles={results} columns={3} />
        ) : (
          <div className="my-12 p-12 text-center rounded-2xl border border-dashed border-[#AAB9CE]/20 bg-[#111C2F]">
            <Search className="w-10 h-10 text-[#AAB9CE]/40 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-medium text-[#EDF4FF]">
              No Matching Dispatches Found
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#AAB9CE] max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find any stories matching your criteria. Try adjusting your search keywords or switching back to all categories.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="text-[#AAB9CE]/60 mr-1 self-center">Popular searches:</span>
              {['Prompts', 'Morning', 'Privacy', 'Voicemail', 'Distractions'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleQueryChange(keyword)}
                  className="px-2.5 py-1 rounded bg-[#142138] border border-[#AAB9CE]/20 text-[#8CF0C4] hover:border-[#8CF0C4] transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Page Ad Placement */}
        <div className="my-14">
          <AdSlot
            placementId="after-hero"
            onOpenInspector={onOpenAdConsole}
          />
        </div>
      </PageContainer>
    </div>
  );
};
