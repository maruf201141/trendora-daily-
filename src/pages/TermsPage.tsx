import React, { useEffect } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateSeoMetadata } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSeoMetadata({
      title: `Terms of Use – ${siteConfig.name}`,
      description: 'Terms governing access and readership of Trendora Daily editorial content and services.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Terms of Use', url: '/terms-of-use' },
      ],
    });
  }, []);

  const breadcrumbs = [{ label: 'Terms of Use' }];

  return (
    <div className="min-h-screen">
      <PageContainer maxWidth="narrow">
        <Breadcrumbs items={breadcrumbs} />

        <header className="my-8 pb-6 border-b border-[#AAB9CE]/15">
          <span className="text-xs uppercase tracking-widest text-[#8CF0C4] font-semibold">
            Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#EDF4FF] mt-2 mb-4">
            Terms of Use
          </h1>
          <p className="text-xs text-[#AAB9CE]">
            Effective Date: March 2026 • Last Updated: October 2026
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#EDF4FF]/90 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or browsing Trendora Daily, you agree to be bound by these Terms of Use and our accompanying Privacy Policy. If you do not agree to these terms, please discontinue use of the publication.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              2. Intellectual Property & Original Editorial Rights
            </h2>
            <p>
              All essays, stories, illustrations, typography layouts, and editorial compilations published on Trendora Daily are the intellectual property of Trendora Daily or its contributing writers, protected under international copyright conventions.
            </p>
            <p>
              You may quote brief excerpts (up to 150 words) for non-commercial commentary, critical review, or scholarship, provided that full attribution and a direct hyperlink to the original article on Trendora Daily are clearly provided. Systematic automated scraping or republication of whole articles without prior written license is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              3. External Links & Third-Party Sites
            </h2>
            <p>
              Our articles and advertising slots may include links to third-party websites or services. Trendora Daily does not endorse and is not responsible for the contents, products, or privacy practices of external platforms. Your engagement with external entities is solely between you and that third party.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              4. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws applicable to modern digital publications, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};
