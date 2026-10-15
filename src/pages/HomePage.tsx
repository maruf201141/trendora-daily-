import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Shield, Cpu, Compass, Flame } from 'lucide-react';
import { ARTICLES, getArticlesByCategory } from '../content/articles';
import { FeaturedArticle } from '../components/articles/FeaturedArticle';
import { ArticleGrid } from '../components/articles/ArticleGrid';
import { SectionHeading } from '../components/common/SectionHeading';
import { NewsletterForm } from '../components/common/NewsletterForm';
import { AdSlot } from '../components/ads/AdSlot';
import { PageContainer } from '../components/layout/PageContainer';
import { updateSeoMetadata } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';

interface HomePageProps {
  onOpenAdConsole: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAdConsole }) => {
  const navigate = useNavigate();
  const latestStoriesRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSeoMetadata({
      title: `${siteConfig.name} – Stories That Stay With You, Ideas That Move You Forward`,
      description: siteConfig.description,
      ogType: 'website',
      ogImage: '/src/assets/images/hero_trendora_editorial_1791922645101.jpg',
    });
  }, []);

  const leadArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];
  const latestArticles = ARTICLES.filter((a) => a.id !== leadArticle.id).slice(0, 4);
  const emotionalArticles = getArticlesByCategory('emotional-stories').slice(0, 3);
  const lifestyleArticles = getArticlesByCategory('lifestyle-wellbeing').slice(0, 3);
  const techArticles = getArticlesByCategory('technology-ai').slice(0, 3);
  const digitalSkillsArticles = getArticlesByCategory('digital-skills').slice(0, 3);
  const onlineSafetyArticles = getArticlesByCategory('online-safety').slice(0, 3);
  const trendingArticles = ARTICLES.filter((a) => a.isTrending || a.isEditorsPick).slice(0, 3);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Editorial Hero Marquee */}
      <section className="relative border-b border-[#AAB9CE]/15 bg-gradient-to-b from-[#080E19] via-[#0B1220] to-[#0B1220] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8CF0C4]/30 bg-[#8CF0C4]/5 text-xs text-[#8CF0C4] font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Editorial Magazine</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#EDF4FF] leading-[1.12] text-balance">
              Stories that stay with you.{' '}
              <span className="italic text-[#9BC7FF]">Ideas that move you forward.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#AAB9CE] max-w-2xl mx-auto leading-relaxed font-normal">
              Thoughtful stories, useful life lessons, and simple technology guides to help you live, learn, and navigate your digital world with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection(latestStoriesRef)}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs sm:text-sm font-semibold hover:bg-[#8CF0C4]/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore the Stories</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection(guidesRef)}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111C2F] text-[#EDF4FF] border border-[#AAB9CE]/20 text-xs sm:text-sm font-medium hover:bg-[#142138] hover:border-[#8CF0C4]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discover Practical Guides</span>
                <Compass className="w-4 h-4 text-[#9BC7FF]" />
              </button>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        {/* Featured Editorial Article (Lead Story) */}
        <FeaturedArticle article={leadArticle} />

        {/* Section 4: Clearly Labeled Advertising Placement (after-hero) */}
        <div className="my-10">
          <AdSlot
            placementId="after-hero"
            onOpenInspector={onOpenAdConsole}
          />
        </div>

        {/* Section 5: Latest Stories */}
        <div ref={latestStoriesRef} className="my-14 scroll-mt-20">
          <SectionHeading
            title="Latest Dispatches"
            subtitle="Fresh perspectives on memory, living well, and modern digital craft."
            actionText="View all archive"
            actionHref="/search"
          />
          <ArticleGrid articles={latestArticles} columns={2} variant="horizontal" />
        </div>

        {/* Section 6: Emotional Stories */}
        <section className="my-16">
          <SectionHeading
            title="Emotional Stories"
            subtitle="Human reflections on grief, memory, family archives, and resilience that linger."
            actionText="Browse category"
            actionHref="/category/emotional-stories"
          />
          <ArticleGrid articles={emotionalArticles} columns={3} />
        </section>

        {/* Section 7: Lifestyle & Wellbeing */}
        <section className="my-16">
          <SectionHeading
            title="Lifestyle & Wellbeing"
            subtitle="Micro-habits, cognitive rest, morning clarity, and sustainable routines."
            actionText="Browse category"
            actionHref="/category/lifestyle-wellbeing"
          />
          <ArticleGrid articles={lifestyleArticles} columns={3} />
        </section>

        {/* In-Between Native Sponsor Unit */}
        <div className="my-12">
          <AdSlot
            placementId="before-related-articles"
            onOpenInspector={onOpenAdConsole}
          />
        </div>

        {/* Section 8 & 9: Practical Guides Container */}
        <div ref={guidesRef} className="scroll-mt-20">
          {/* Technology & AI */}
          <section className="my-16">
            <SectionHeading
              title="Technology & AI"
              subtitle="Demystifying generative tools, clear prompt structures, and everyday computing."
              actionText="Browse category"
              actionHref="/category/technology-ai"
            />
            <ArticleGrid articles={techArticles} columns={3} />
          </section>

          {/* Digital Skills */}
          <section className="my-16">
            <SectionHeading
              title="Digital Skills"
              subtitle="Frictionless filing architectures, mindful desktop hygiene, and workflow craftsmanship."
              actionText="Browse category"
              actionHref="/category/digital-skills"
            />
            <ArticleGrid articles={digitalSkillsArticles} columns={3} />
          </section>
        </div>

        {/* Section 10: Online Safety */}
        <section className="my-16">
          <SectionHeading
            title="Online Safety & Privacy"
            subtitle="Pragmatic security routines, threat awareness, and defending your personal data footprint."
            actionText="Browse category"
            actionHref="/category/online-safety"
          />
          <ArticleGrid articles={onlineSafetyArticles} columns={3} />
        </section>

        {/* Section 11: Trending & Editor's Picks */}
        <section className="my-16 p-6 sm:p-8 rounded-2xl border border-[#9BC7FF]/20 bg-[#111C2F]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8CF0C4] mb-2">
            <Flame className="w-4 h-4" />
            <span>Editor's Selection</span>
          </div>
          <h2 className="font-serif text-2xl font-medium text-[#EDF4FF] mb-6">
            Stories Resonating Most with Readers
          </h2>
          <ArticleGrid articles={trendingArticles} columns={3} />
        </section>

        {/* Section 13: Newsletter */}
        <NewsletterForm />

        {/* Section 14: About Trendora Daily Overview */}
        <section className="my-16 p-8 rounded-2xl border border-[#AAB9CE]/15 bg-[#142138] grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif text-2xl font-medium text-[#EDF4FF]">
              About Trendora Daily
            </h3>
            <p className="text-sm text-[#AAB9CE] leading-relaxed">
              We started Trendora Daily with a simple conviction: the internet does not need more clickbait outrage or machine-generated filler. It needs clear, thoughtful writing that respects your time and leaves you with actionable clarity.
            </p>
            <p className="text-xs text-[#AAB9CE]/80 leading-relaxed">
              Every dispatch is reviewed for accuracy, original narrative, and human utility before publication.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-lg bg-[#111C2F] text-xs font-semibold text-[#EDF4FF] border border-[#AAB9CE]/20 hover:border-[#8CF0C4] text-center transition-colors"
            >
              Our Editorial Principles
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-lg bg-[#8CF0C4] text-xs font-semibold text-[#080E19] text-center hover:bg-[#8CF0C4]/90 transition-colors"
            >
              Pitch a Story / Contact Us
            </Link>
          </div>
        </section>
      </PageContainer>
    </div>
  );
};
