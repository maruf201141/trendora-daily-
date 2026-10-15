import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  actionText,
  actionHref,
  onActionClick,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-[#AAB9CE]/15 ${className}`}>
      <div>
        <h2 className="text-xl sm:text-2xl font-serif font-medium tracking-tight text-[#EDF4FF]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm text-[#AAB9CE] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {(actionText && (actionHref || onActionClick)) && (
        <div className="shrink-0 pt-2 sm:pt-0">
          {actionHref ? (
            <a
              href={actionHref}
              className="text-xs font-semibold text-[#8CF0C4] hover:text-[#8CF0C4]/80 transition-colors inline-flex items-center gap-1 group"
            >
              <span>{actionText}</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={onActionClick}
              className="text-xs font-semibold text-[#8CF0C4] hover:text-[#8CF0C4]/80 transition-colors inline-flex items-center gap-1 group"
            >
              <span>{actionText}</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
