import React, { useEffect } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateSeoMetadata } from '../lib/seo';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const DisclaimerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSeoMetadata({
      title: `Editorial & Advertising Disclaimer – ${siteConfig.name}`,
      description: 'Important legal notices regarding editorial content, commercial disclosures, health information, and technical tutorials.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Disclaimer', url: '/disclaimer' },
      ],
    });
  }, []);

  const breadcrumbs = [{ label: 'Disclaimer' }];

  return (
    <div className="min-h-screen">
      <PageContainer maxWidth="narrow">
        <Breadcrumbs items={breadcrumbs} />

        <header className="my-8 pb-6 border-b border-[#AAB9CE]/15">
          <span className="text-xs uppercase tracking-widest text-[#8CF0C4] font-semibold">
            Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#EDF4FF] mt-2 mb-4">
            Editorial & Advertising Disclaimer
          </h1>
          <p className="text-xs text-[#AAB9CE]">
            Effective Date: March 2026 • Last Updated: October 2026
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#EDF4FF]/90 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              1. General Editorial Information
            </h2>
            <p>
              The articles, guides, essays, and resources published on Trendora Daily are provided exclusively for informational, educational, and inspirational purposes. While our writers make every reasonable effort to verify factual accuracy at the time of writing, technologies, security protocols, and software tools evolve rapidly.
            </p>
            <p>
              Trendora Daily makes no express or implied warranties regarding the completeness or ongoing suitability of any tutorial or computing advice for your specific hardware or configuration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              2. Commercial & Advertising Disclosures
            </h2>
            <p>
              In compliance with Federal Trade Commission (FTC) guidelines and international advertising transparency laws:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#AAB9CE]">
              <li>
                <strong>Third-Party Display Advertisements:</strong> Display banner placements rendered across header, in-content, sidebar, and footer sections are served by programmatic ad networks. These are marked with &ldquo;ADVERTISEMENT&rdquo;.
              </li>
              <li>
                <strong>Sponsored Discovery Links:</strong> Where external partner links appear (such as direct partner campaigns), they are clearly labeled as &ldquo;SPONSORED DISCOVERY&rdquo; and incorporate the required <code className="text-[#8CF0C4]">rel=&quot;sponsored nofollow&quot;</code> attributes.
              </li>
              <li>
                <strong>No Automatic Redirection:</strong> Trendora Daily never employs deceptive auto-redirects, hidden clicks, or disguised system pop-ups to generate unintended ad traffic.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              3. Programmatic Ad Inventory & Category Standards
            </h2>
            <p>
              Digital banner inventory served through third-party ad networks (such as HighRevenueFormat and ProfitableRate) is delivered programmatically through third-party ad exchanges.
            </p>
            <p>
              Trendora Daily enforces an editorial standard requesting the exclusion of gambling, betting, adult, and high-risk verticals in publisher dashboard configurations. However, because external ad exchanges deliver real-time programmatic bids via cross-origin servers, individual creatives cannot be dynamically inspected by website frontend code. If you encounter an ad that violates our editorial standards, please notify us at{' '}
              <a href={`mailto:${siteConfig.editorialContact}`} className="text-[#8CF0C4] underline">
                {siteConfig.editorialContact}
              </a>{' '}
              so we can adjust network-level blocklists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              4. No Medical or Mental Health Advice
            </h2>
            <p>
              Articles in our Lifestyle & Wellbeing section discuss subjective personal habits, mindfulness techniques, and daily routines. They do not constitute clinical diagnosis, psychiatric therapy, or medical advice. If you are experiencing persistent mental health distress, please consult a certified healthcare professional.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#EDF4FF]">
              5. Cybersecurity & Technical Safeguards
            </h2>
            <p>
              Our Online Safety and Technology dispatches describe defensive best practices (such as passkeys and multi-factor authentication). However, no digital system can guarantee 100% security against determined adversaries. Users remain solely responsible for maintaining backup copies of critical files and safeguarding their credentials.
            </p>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};
