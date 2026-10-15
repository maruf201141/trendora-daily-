import React, { useEffect } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateSeoMetadata } from '../lib/seo';
import { ShieldCheck, Mail, Facebook, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSeoMetadata({
      title: `About ${siteConfig.name} – Editorial Mission & Standards`,
      description: 'Learn about Trendora Daily, our editorial mission, writing team, and commitment to human-first publishing.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ],
    });
  }, []);

  const breadcrumbs = [{ label: 'About' }];

  return (
    <div className="min-h-screen">
      <PageContainer maxWidth="narrow">
        <Breadcrumbs items={breadcrumbs} />

        <header className="my-8 pb-6 border-b border-[#AAB9CE]/15">
          <span className="text-xs uppercase tracking-widest text-[#8CF0C4] font-semibold">
            About Our Publication
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#EDF4FF] mt-2 mb-4">
            Stories that stay with you. Ideas that move you forward.
          </h1>
          <p className="text-base text-[#AAB9CE] leading-relaxed">
            Trendora Daily was established to create a calm, thoughtful sanctuary in an era of digital sensory overload.
          </p>
        </header>

        <div className="space-y-8 text-sm sm:text-base text-[#EDF4FF]/90 leading-relaxed font-sans">
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#EDF4FF]">
              Our Editorial Charter
            </h2>
            <p>
              In an attention economy that rewards sensationalism, outrage, and synthetic content mills, Trendora Daily takes a deliberately deliberate pace. We publish articles across five core pillars:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs sm:text-sm">
              <li className="p-3.5 rounded-lg border border-[#AAB9CE]/15 bg-[#142138]">
                <strong className="text-[#8CF0C4] block mb-1">Emotional Stories</strong>
                Human narratives on memory, family archives, loss, and quiet perseverance.
              </li>
              <li className="p-3.5 rounded-lg border border-[#AAB9CE]/15 bg-[#142138]">
                <strong className="text-[#8CF0C4] block mb-1">Lifestyle & Wellbeing</strong>
                Evidence-informed micro-habits, cognitive rest, and restoring daily equilibrium.
              </li>
              <li className="p-3.5 rounded-lg border border-[#AAB9CE]/15 bg-[#142138]">
                <strong className="text-[#8CF0C4] block mb-1">Technology & AI</strong>
                Demystifying artificial intelligence, smart algorithms, and computing fundamentals.
              </li>
              <li className="p-3.5 rounded-lg border border-[#AAB9CE]/15 bg-[#142138]">
                <strong className="text-[#8CF0C4] block mb-1">Digital Skills & Online Safety</strong>
                Practical filing taxonomies, passkeys, encrypted privacy habits, and defense.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#EDF4FF]">
              Advertising & Commercial Independence
            </h2>
            <p>
              Publishing high-quality editorial writing requires sustainable funding. We integrate selected advertising partners and display placements to support our writers and operations.
            </p>
            <p>
              However, our commercial arrangements remain strictly separated from editorial decisions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#AAB9CE]">
              <li>Commercial sponsors have zero input or review privileges over editorial manuscripts.</li>
              <li>All advertising units and sponsored partner links are explicitly labeled as “ADVERTISEMENT” or “SPONSORED”.</li>
              <li>We never deploy deceptive countdown timers, forced redirects, or fake review badges.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#EDF4FF]">
              The Masthead
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">Elena Rostova</p>
                <p className="text-xs text-[#8CF0C4]">Staff Essayist</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Culture, memory, and everyday archives.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">Sarah Lindqvist</p>
                <p className="text-xs text-[#8CF0C4]">Wellbeing Contributor</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Mindful routines, rest, and sustainable habits.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">Marcus Chen</p>
                <p className="text-xs text-[#8CF0C4]">Technology Contributor</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Applied AI, software craft, and computing fundamentals.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">Julian Vance</p>
                <p className="text-xs text-[#8CF0C4]">Security & Essays Contributor</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Human connection, personal safety, and online privacy.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">Maya Patel</p>
                <p className="text-xs text-[#8CF0C4]">Digital Skills Contributor</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Filing systems, clean digital spaces, and workflows.</p>
              </div>
              <div className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]">
                <p className="font-serif text-sm font-semibold text-[#EDF4FF]">David Ross</p>
                <p className="text-xs text-[#8CF0C4]">Contributing Writer</p>
                <p className="text-xs text-[#AAB9CE] mt-2">Sustainable freelancing, financial clarity, and career autonomy.</p>
              </div>
            </div>
          </section>

          {/* New Official Contact Section */}
          <section className="my-8 p-6 sm:p-7 rounded-2xl border border-[#9BC7FF]/20 bg-[#111C2F] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
              <ShieldCheck className="w-4 h-4" />
              <span>Reader & Community Outreach</span>
            </div>

            <h3 className="font-serif text-xl font-medium text-[#EDF4FF]">
              Connect With the Publication
            </h3>

            <p className="text-sm text-[#AAB9CE] leading-relaxed">
              Want to share feedback or suggest a story? Contact Trendora Daily through our{' '}
              <a
                href={siteConfig.officialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8CF0C4] underline font-medium hover:text-[#8CF0C4]/80 inline-flex items-center gap-1"
              >
                <span>official Facebook Page</span>
                <ExternalLink className="w-3 h-3 inline" />
              </a>{' '}
              or{' '}
              <a
                href={`mailto:${siteConfig.editorialContact}`}
                className="text-[#9BC7FF] underline font-medium hover:text-[#9BC7FF]/80 inline-flex items-center gap-1"
              >
                <span>email us</span>
                <Mail className="w-3 h-3 inline" />
              </a>
              .
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={siteConfig.officialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#142138] border border-[#AAB9CE]/20 text-xs font-medium text-[#EDF4FF] hover:border-[#8CF0C4] hover:text-[#8CF0C4] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-[#9BC7FF]" />
                <span>Visit Official Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`mailto:${siteConfig.editorialContact}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8CF0C4] text-xs font-semibold text-[#080E19] hover:bg-[#8CF0C4]/90 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email {siteConfig.editorialContact}</span>
              </a>
            </div>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};
