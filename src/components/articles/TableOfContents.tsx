import React from 'react';
import { List } from 'lucide-react';
import { ArticleSection } from '../../types';

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  if (sections.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 rounded-xl border border-[#AAB9CE]/15 bg-[#111C2F]/80 p-5 max-w-2xl"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#AAB9CE]/10 text-xs font-semibold uppercase tracking-wider text-[#8CF0C4]">
        <List className="w-4 h-4" />
        <span>In This Dispatch</span>
      </div>

      <ol className="space-y-2 text-sm">
        {sections.map((section, idx) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-[#AAB9CE] hover:text-[#EDF4FF] hover:underline transition-colors flex items-baseline gap-2 group"
            >
              <span className="font-mono text-xs text-[#8CF0C4]/70">{idx + 1}.</span>
              <span className="group-hover:translate-x-0.5 transition-transform">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
