import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { AdSlot } from '../ads/AdSlot';
import { CheckCircle2 } from 'lucide-react';

interface ArticleBodyProps {
  article: Article;
  onOpenAdConsole?: () => void;
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ article, onOpenAdConsole }) => {
  return (
    <div className="article-body max-w-2xl text-[#EDF4FF] font-sans">
      {article.sections.map((section, idx) => {
        const isFirstSection = idx === 0;

        return (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#EDF4FF] mb-4 pb-2 border-b border-[#AAB9CE]/15">
              {section.title}
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#EDF4FF]/95">
              {section.content.map((paragraph, pIdx) => {
                const isEditorNote =
                  paragraph.startsWith("*Editor's Note:") && paragraph.endsWith('*');

                if (isEditorNote) {
                  const noteText = paragraph.replace(/^\*|\*$/g, '');
                  return (
                    <aside
                      key={pIdx}
                      aria-label="Editorial notice"
                      className="my-4 p-3.5 rounded-lg border border-[#9BC7FF]/25 bg-[#142138] text-xs sm:text-sm text-[#9BC7FF] italic flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8CF0C4] shrink-0" />
                      <span>{noteText}</span>
                    </aside>
                  );
                }

                const isDropCap = isFirstSection && pIdx === 0;

                // Support contextual internal article links formatted as [Label](/articles/slug)
                const parts = paragraph.split(/(\[[^\]]+\]\([^)]+\))/g);

                return (
                  <p
                    key={pIdx}
                    className={`leading-[1.85] text-[15px] sm:text-[16px] text-[#EDF4FF]/90 font-normal break-words ${
                      isDropCap
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:text-[#8CF0C4]'
                        : ''
                    }`}
                  >
                    {parts.map((part, partIdx) => {
                      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                      if (linkMatch) {
                        const [, text, url] = linkMatch;
                        const isInternal = url.startsWith('/');
                        if (isInternal) {
                          return (
                            <Link
                              key={partIdx}
                              to={url}
                              className="text-[#8CF0C4] underline underline-offset-4 decoration-[#8CF0C4]/40 hover:decoration-[#8CF0C4] hover:text-[#EDF4FF] transition-colors font-medium"
                            >
                              {text}
                            </Link>
                          );
                        }
                        return (
                          <a
                            key={partIdx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9BC7FF] underline underline-offset-4 decoration-[#9BC7FF]/40 hover:decoration-[#9BC7FF] hover:text-[#EDF4FF] transition-colors font-medium"
                          >
                            {text}
                          </a>
                        );
                      }
                      return <React.Fragment key={partIdx}>{part}</React.Fragment>;
                    })}
                  </p>
                );
              })}
            </div>

            {/* Elegant Serif Pull Quote (no thick left border, hairline top/bottom) */}
            {section.pullQuote && (
              <figure className="my-8 py-6 px-4 border-y border-[#AAB9CE]/20 text-center">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#9BC7FF] leading-relaxed">
                  “{section.pullQuote}”
                </blockquote>
              </figure>
            )}

            {/* Key Takeaway box */}
            {section.keyTakeaway && (
              <div className="my-6 p-5 rounded-xl border border-[#8CF0C4]/30 bg-[#8CF0C4]/5 text-xs sm:text-sm text-[#EDF4FF] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8CF0C4] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#8CF0C4] block mb-1 uppercase tracking-wider text-[11px]">
                    Actionable Takeaway
                  </strong>
                  <p className="text-[#EDF4FF]/90 leading-relaxed">{section.keyTakeaway}</p>
                </div>
              </div>
            )}

            {/* In-Content Ad Placement 1 (between Section 1 and Section 2) */}
            {idx === 0 && article.sections.length >= 2 && (
              <AdSlot
                placementId="in-content-1"
                className="my-8"
                onOpenInspector={onOpenAdConsole}
              />
            )}

            {/* In-Content Ad Placement 2 (only in longer articles with at least 3 sections, placed before the final section, avoiding consecutive ad placements) */}
            {article.sections.length >= 3 && idx === article.sections.length - 2 && idx > 0 && (
              <AdSlot
                placementId="in-content-2"
                className="my-8"
                onOpenInspector={onOpenAdConsole}
              />
            )}
          </section>
        );
      })}
    </div>
  );
};
