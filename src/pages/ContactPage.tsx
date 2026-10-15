import React, { useEffect, useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { updateSeoMetadata } from '../lib/seo';
import {
  Mail,
  Facebook,
  ExternalLink,
  Copy,
  Check,
  MessageSquare,
  FileEdit,
  Lightbulb,
  Briefcase,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSeoMetadata({
      title: `Contact Trendora Daily – Official Facebook & Editorial Inquiries`,
      description:
        'Have a question, spotted an error, want to share feedback, or interested in working with Trendora Daily? Connect with us via our official Facebook page or direct email.',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ],
    });
  }, []);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(siteConfig.editorialContact);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const contactCategories = [
    {
      title: 'General Feedback',
      description: 'Thoughts on our editorial tone, reading experience, or overall publication.',
      subject: '[General Feedback] Trendora Daily',
      icon: MessageSquare,
    },
    {
      title: 'Article Corrections',
      description: 'Factual clarifications, typographical notices, or update requests on published dispatches.',
      subject: '[Article Correction] Trendora Daily',
      icon: FileEdit,
    },
    {
      title: 'Editorial Suggestions',
      description: 'Story pitches, prospective topic recommendations, or essay submissions.',
      subject: '[Editorial Suggestion] Trendora Daily',
      icon: Lightbulb,
    },
    {
      title: 'Advertising and Partnerships',
      description: 'Commercial inquiries, custom sponsorships, and partner verification.',
      subject: '[Advertising & Partnership] Trendora Daily',
      icon: Briefcase,
    },
    {
      title: 'Privacy-Related Enquiries',
      description: 'Data rights inquiries, cookie management, and transparency clarifications.',
      subject: '[Privacy Enquiry] Trendora Daily',
      icon: ShieldAlert,
    },
  ];

  const breadcrumbs = [{ label: 'Contact Trendora Daily' }];

  return (
    <div className="min-h-screen">
      <PageContainer maxWidth="narrow">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <header className="my-8 pb-6 border-b border-[#AAB9CE]/15">
          <span className="text-xs uppercase tracking-widest text-[#8CF0C4] font-semibold">
            Direct Communication
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#EDF4FF] mt-2 mb-4">
            Contact Trendora Daily
          </h1>
          <p className="text-base text-[#AAB9CE] leading-relaxed max-w-2xl">
            Have a question, spotted an error, want to share feedback, or interested in working with Trendora Daily? We would love to hear from you.
          </p>
        </header>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Card 1: Official Facebook Page */}
          <div className="p-6 sm:p-7 rounded-2xl border border-[#AAB9CE]/15 bg-[#142138] flex flex-col justify-between hover:border-[#8CF0C4]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/20 text-[#9BC7FF]">
                  <Facebook className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
                    Connect on Facebook
                  </span>
                  <h2 className="font-serif text-lg font-medium text-[#EDF4FF]">
                    Official Facebook Page
                  </h2>
                </div>
              </div>

              <p className="text-xs text-[#AAB9CE] leading-relaxed">
                Follow our official page for updates, community discussions, and newly published stories. Send us direct messages or join the conversation.
              </p>

              <div className="p-3 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/15">
                <span className="text-[11px] text-[#AAB9CE]/60 block mb-1">Official Page Link:</span>
                <a
                  href={siteConfig.officialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#9BC7FF] hover:underline break-all inline-flex items-center gap-1.5"
                >
                  <span className="truncate">{siteConfig.officialFacebook}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#AAB9CE]/10">
              <a
                href={siteConfig.officialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook Page (opens in a new tab)"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#111C2F] text-xs sm:text-sm font-semibold text-[#EDF4FF] border border-[#AAB9CE]/25 hover:border-[#8CF0C4] hover:text-[#8CF0C4] transition-all"
              >
                <Facebook className="w-4 h-4" />
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email Contact */}
          <div className="p-6 sm:p-7 rounded-2xl border border-[#AAB9CE]/15 bg-[#142138] flex flex-col justify-between hover:border-[#8CF0C4]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/20 text-[#8CF0C4]">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
                    Send Us an Email
                  </span>
                  <h2 className="font-serif text-lg font-medium text-[#EDF4FF]">
                    Editorial & Inquiries Desk
                  </h2>
                </div>
              </div>

              <p className="text-xs text-[#AAB9CE] leading-relaxed">
                Direct written communication with our editors and operations team. We typically review and respond within 24–48 business hours.
              </p>

              <div className="p-3 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/15 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[11px] text-[#AAB9CE]/60 block mb-0.5">Primary Email:</span>
                  <a
                    href={`mailto:${siteConfig.editorialContact}`}
                    className="text-xs sm:text-sm font-mono text-[#EDF4FF] hover:text-[#8CF0C4] break-all select-all font-medium transition-colors"
                  >
                    {siteConfig.editorialContact}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                  className="px-2.5 py-1.5 rounded-md bg-[#111C2F] text-xs text-[#AAB9CE] hover:text-[#EDF4FF] hover:bg-[#1e2d48] border border-[#AAB9CE]/20 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#8CF0C4]" />
                      <span className="text-[11px] text-[#8CF0C4]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#AAB9CE]/10">
              <a
                href={`mailto:${siteConfig.editorialContact}`}
                aria-label={`Email Trendora Daily at ${siteConfig.editorialContact}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs sm:text-sm font-semibold hover:bg-[#8CF0C4]/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Trendora Daily</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Categories Section */}
        <section className="my-12">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
              How We Can Help
            </span>
            <h2 className="font-serif text-2xl font-medium text-[#EDF4FF] mt-1">
              Contact Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB9CE] mt-1">
              Select an inquiry category to open a pre-addressed email draft with the appropriate subject tag:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.title}
                  href={`mailto:${siteConfig.editorialContact}?subject=${encodeURIComponent(cat.subject)}`}
                  className="p-5 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F] hover:border-[#8CF0C4]/40 hover:bg-[#142138] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#EDF4FF] group-hover:text-[#8CF0C4] transition-colors">
                      <Icon className="w-4 h-4 text-[#8CF0C4]" />
                      <span>{cat.title}</span>
                    </div>
                    <p className="text-xs text-[#AAB9CE] mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#AAB9CE]/10 flex items-center justify-between text-xs text-[#9BC7FF] group-hover:text-[#8CF0C4]">
                    <span>Compose email</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Form Transparency Notice */}
        <div className="my-8 p-5 rounded-xl border border-[#9BC7FF]/20 bg-[#111C2F]/80 flex items-start gap-3 text-xs leading-relaxed text-[#AAB9CE]">
          <Info className="w-4 h-4 text-[#9BC7FF] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#EDF4FF] block mb-1">Direct Communication Channel Notice</strong>
            <p>
              To guarantee that every message is received without risk of silent form failure or unconfigured intermediary servers, we do not route inquiries through automated web forms. Please send your message directly via email to{' '}
              <a
                href={`mailto:${siteConfig.editorialContact}`}
                className="text-[#8CF0C4] underline font-mono font-medium"
              >
                {siteConfig.editorialContact}
              </a>{' '}
              or reach out via our{' '}
              <a
                href={siteConfig.officialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9BC7FF] underline font-medium"
              >
                official Facebook Page
              </a>
              .
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
