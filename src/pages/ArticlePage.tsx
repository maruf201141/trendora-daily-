import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { ARTICLES, getArticleBySlug, getRelatedArticles } from '../content/articles';
import { CATEGORIES } from '../content/categories';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleHeader } from '../components/articles/ArticleHeader';
import { ArticleBody } from '../components/articles/ArticleBody';
import { TableOfContents } from '../components/articles/TableOfContents';
import { ShareButtons } from '../components/articles/ShareButtons';
import { ArticleNavigation } from '../components/articles/ArticleNavigation';
import { RelatedArticles } from '../components/articles/RelatedArticles';
import { AdSlot } from '../components/ads/AdSlot';
import { updateSeoMetadata } from '../lib/seo';

interface ArticlePageProps {
  onOpenAdConsole: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ onOpenAdConsole }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    if (!article) {
      document.title = 'Article Not Found | Trendora Daily';
      let robotsTag = document.querySelector('meta[name="robots"]');
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute('content', 'noindex, follow');
      return;
    }

    // Clean up any stale noindex tag
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag && robotsTag.getAttribute('content')?.includes('noindex')) {
      robotsTag.remove();
    }

    window.scrollTo(0, 0);

    const categoryObj = CATEGORIES.find((c) => c.slug === article.category);
    updateSeoMetadata({
      title: article.title,
      description: article.excerpt,
      ogType: 'article',
      ogImage: article.featuredImage,
      article,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: categoryObj?.name || article.category, url: `/category/${article.category}` },
        { name: article.title, url: `/articles/${article.slug}` },
      ],
    });
  }, [article]);

  if (!article) {
    return (
      <PageContainer maxWidth="narrow" className="py-20 text-center">
        <div className="p-8 rounded-2xl border border-[#AAB9CE]/20 bg-[#111C2F]">
          <BookOpen className="w-12 h-12 text-[#8CF0C4]/60 mx-auto mb-4" />
          <h1 className="font-serif text-2xl font-bold text-[#EDF4FF]">
            Article Not Found
          </h1>
          <p className="mt-2 text-sm text-[#AAB9CE] max-w-md mx-auto">
            The dispatch you are seeking may have been moved or updated. Browse our archive or return to the home front.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs font-semibold hover:bg-[#8CF0C4]/90"
            >
              Back to Home
            </Link>
            <Link
              to="/search"
              className="px-4 py-2 rounded-lg bg-[#142138] text-[#EDF4FF] border border-[#AAB9CE]/20 text-xs font-medium hover:border-[#8CF0C4]"
            >
              Search Dispatches
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }

  const category = CATEGORIES.find((c) => c.slug === article.category);
  const relatedArticles = getRelatedArticles(article);

  // Determine prev and next articles in the collection
  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : undefined;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : undefined;

  const breadcrumbs = [
    { label: category?.name || article.category, href: `/category/${article.category}` },
    { label: article.title },
  ];

  return (
    <article className="min-h-screen">
      <PageContainer maxWidth="default">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Back Link */}
        <div className="my-2">
          <Link
            to={`/category/${article.category}`}
            className="inline-flex items-center gap-1.5 text-xs text-[#AAB9CE] hover:text-[#8CF0C4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {category?.name || 'Category'}</span>
          </Link>
        </div>

        {/* Article Header */}
        <ArticleHeader article={article} />

        {/* Featured Editorial Visual */}
        <div className="my-8 rounded-2xl overflow-hidden border border-[#AAB9CE]/15 bg-[#111C2F] aspect-[16/9] max-w-4xl">
          {!imageError ? (
            <img
              src={article.featuredImage}
              alt={article.imageAlt}
              onError={() => setImageError(true)}
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#142138]">
              <BookOpen className="w-12 h-12 text-[#8CF0C4]/60 mb-2" />
              <span className="text-sm font-serif text-[#EDF4FF]">Trendora Editorial Photography</span>
            </div>
          )}
        </div>

        {/* Share & Editorial Context Utility Bar */}
        <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-[#AAB9CE]/15 my-6">
          <ShareButtons title={article.title} />
          <div className="text-xs text-[#AAB9CE]/70 italic">
            Published in Trendora Daily Editorial Archive
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid: Main Body + Desktop Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl">
          {/* Main Reading Column (8 cols) */}
          <div className="lg:col-span-8 min-w-0">
            <TableOfContents sections={article.sections} />
            <ArticleBody article={article} onOpenAdConsole={onOpenAdConsole} />

            {/* End of article sharing & navigation */}
            <div className="mt-12 pt-6 border-t border-[#AAB9CE]/15 flex items-center justify-between">
              <span className="text-xs text-[#AAB9CE]">Enjoyed this essay?</span>
              <ShareButtons title={article.title} />
            </div>

            <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
          </div>

          {/* Desktop Sticky Sidebar (4 cols) - Strictly hidden on mobile */}
          <aside
            aria-label="Article Sidebar"
            className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6"
          >
            {/* Author Profile Card */}
            <div className="p-5 rounded-xl border border-[#AAB9CE]/15 bg-[#142138]">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full border border-[#8CF0C4]/40"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#EDF4FF]">
                    {article.author.name}
                  </h4>
                  <p className="text-xs text-[#AAB9CE]">{article.author.role}</p>
                </div>
              </div>
              <p className="text-xs text-[#AAB9CE] leading-relaxed">
                {article.author.bio}
              </p>
            </div>

            {/* Sidebar Ad Unit (160×300 or 160×600) */}
            <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F] flex flex-col items-center">
              <AdSlot
                placementId="sidebar"
                onOpenInspector={onOpenAdConsole}
              />
            </div>

            {/* Quick Links in Category */}
            <div className="p-5 rounded-xl border border-[#AAB9CE]/15 bg-[#142138]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8CF0C4] mb-3">
                More in {category?.name}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {ARTICLES.filter((a) => a.category === article.category && a.id !== article.id)
                  .slice(0, 3)
                  .map((other) => (
                    <li key={other.id}>
                      <Link
                        to={`/articles/${other.slug}`}
                        className="text-[#AAB9CE] hover:text-[#EDF4FF] hover:underline line-clamp-2 leading-snug"
                      >
                        {other.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Pre-Recommendations Unit */}
        <div className="my-10 max-w-4xl">
          <AdSlot
            placementId="before-related-articles"
            onOpenInspector={onOpenAdConsole}
          />
        </div>

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </PageContainer>
    </article>
  );
};
