import React from 'react';
import { Article } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { ArticleGrid } from './ArticleGrid';

interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-heading" className="mt-16 pt-12 border-t border-[#AAB9CE]/15">
      <SectionHeading
        title="Continue Reading"
        subtitle="Thoughtfully related dispatches from the Trendora archive."
      />
      <ArticleGrid articles={articles.slice(0, 3)} columns={3} />
    </section>
  );
};
