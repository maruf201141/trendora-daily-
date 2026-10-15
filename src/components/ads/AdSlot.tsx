import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { AdPlacementId } from '../../types';
import { AD_PROVIDERS } from '../../config/adProviders';
import { INITIAL_AD_PLACEMENTS } from '../../config/adPlacements';
import { adScriptRegistry } from '../../lib/adScriptRegistry';
import { AdFallback } from './AdFallback';

interface AdSlotProps {
  placementId: AdPlacementId;
  className?: string;
  onOpenInspector?: () => void;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  placementId,
  className = '',
  onOpenInspector,
}) => {
  const placement = INITIAL_AD_PLACEMENTS[placementId];
  const provider = placement?.assignedProviderId
    ? AD_PROVIDERS[placement.assignedProviderId]
    : undefined;

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (!placement?.isEnabled || !provider?.isEnabled) {
      return;
    }

    // Provider C: ProfitableRate Native Invoke
    if (provider.id === 'profitablerate-invoke' && provider.scriptUrl) {
      adScriptRegistry
        .loadScript(provider.scriptUrl, provider.requiredAttributes)
        .then((success) => {
          if (success) {
            setScriptLoaded(true);
          } else {
            setLoadError(true);
          }
        });
    } else {
      setScriptLoaded(true);
    }
  }, [placement?.isEnabled, provider?.isEnabled, provider?.id, provider?.scriptUrl, provider?.requiredAttributes]);

  // If placement is completely disabled, do not render or reserve empty void
  if (!placement || !placement.isEnabled) {
    return null;
  }

  // If provider is disabled or not configured
  if (!provider || !provider.isEnabled) {
    return (
      <AdFallback
        placement={placement}
        provider={provider}
        reason="This ad placement is currently inactive pending owner review."
        onOpenInspector={onOpenInspector}
      />
    );
  }

  // If script failed to load (e.g. blocked by ad blocker)
  if (loadError) {
    return (
      <div
        role="region"
        aria-label={`Advertisement: ${placement.label}`}
        className="w-full my-3 p-3 rounded-lg border border-[#AAB9CE]/10 bg-[#111C2F]/30 text-center text-[11px] text-[#AAB9CE]/60"
      >
        <span>Ad request not loaded (client ad blocker or network restriction active).</span>
      </div>
    );
  }

  // Measure container width for responsive scaling of fixed-size ad units (e.g. 728x90 on mobile screens)
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (containerRef.current && provider?.dimensions?.width) {
        const width = containerRef.current.clientWidth;
        if (width > 0 && width < provider.dimensions.width) {
          setScale(Math.max(0.38, (width - 8) / provider.dimensions.width));
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [provider?.dimensions?.width]);

  // Is this a vertical skyscraper intended strictly for desktop?
  const isVerticalSkyscraper =
    placementId === 'sidebar' ||
    (provider?.dimensions && provider.dimensions.width === 160 && provider.dimensions.height >= 300);

  return (
    <div
      role="complementary"
      aria-label={`Advertisement: ${placement.label}`}
      className={`my-6 flex flex-col items-center justify-center overflow-hidden transition-all ${
        isVerticalSkyscraper ? 'hidden lg:flex' : 'w-full'
      } ${className}`}
    >
      {/* Clear Editorial Ad Label (never disguised as editorial content) */}
      <div className="w-full flex items-center justify-between text-[10px] uppercase tracking-widest text-[#AAB9CE]/60 pb-1.5 px-1 border-b border-[#AAB9CE]/10 mb-2">
        <span>{provider.formatCategory === 'sponsored-link' ? 'SPONSORED DISCOVERY' : 'ADVERTISEMENT'}</span>
        {onOpenInspector && (
          <button
            type="button"
            onClick={onOpenInspector}
            className="hover:text-[#8CF0C4] transition-colors lowercase cursor-pointer"
          >
            [ad status]
          </button>
        )}
      </div>

      {/* Provider-Specific Rendering: HighRevenueFormat Banner */}
      {provider.providerType === 'highrevenueformat' && provider.targetKey && provider.dimensions && (
        <div ref={containerRef} className="w-full flex justify-center overflow-x-hidden">
          <div
            className="relative flex items-center justify-center max-w-full rounded bg-[#111C2F]/40 border border-[#AAB9CE]/10 p-1"
            style={{
              height:
                scale < 1
                  ? `${Math.round(provider.dimensions.height * scale) + 8}px`
                  : `${provider.dimensions.height + 8}px`,
              minHeight:
                scale < 1
                  ? `${Math.round(provider.dimensions.height * scale) + 8}px`
                  : `${provider.dimensions.height + 8}px`,
              width: provider.dimensions.width >= 728 ? '100%' : `${provider.dimensions.width}px`,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                transform: scale < 1 ? `scale(${scale})` : undefined,
                transformOrigin: 'top center',
                width: `${provider.dimensions.width}px`,
                height: `${provider.dimensions.height}px`,
              }}
              className="flex items-center justify-center shrink-0"
            >
              <iframe
                title={`Advertisement - ${provider.name}`}
                srcDoc={adScriptRegistry.generateHighRevenueFormatHtml(
                  provider.targetKey,
                  provider.dimensions.width,
                  provider.dimensions.height,
                  provider.scriptUrl || ''
                )}
                width={provider.dimensions.width}
                height={provider.dimensions.height}
                onLoad={() => setIframeLoaded(true)}
                className="border-0 overflow-hidden"
                scrolling="no"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Provider C: Native Invoke with Target Container */}
      {provider.id === 'profitablerate-invoke' && (
        <div className="w-full flex justify-center py-2 overflow-x-hidden">
          <div
            id="container-c33b6c16e929619d5d484c3b93631e54"
            className="min-h-[90px] w-full max-w-[728px] rounded border border-[#AAB9CE]/10 bg-[#111C2F]/30 p-2 flex items-center justify-center text-xs text-[#AAB9CE]"
          >
            <span className="text-[11px] text-[#AAB9CE]/60">
              Interactive Sponsor Slot (#container-c33b6c16e929619d5d484c3b93631e54)
            </span>
          </div>
        </div>
      )}

      {/* Provider F: Direct Sponsored Link */}
      {provider.id === 'profitablerate-sponsored-link' && provider.directUrl && (
        <div className="w-full max-w-xl my-2 p-4 rounded-xl border border-[#9BC7FF]/20 bg-[#142138] hover:border-[#8CF0C4]/40 transition-all">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8CF0C4]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Partner Recommendation</span>
              </div>
              <p className="mt-1 text-sm text-[#EDF4FF] font-medium leading-snug">
                Explore Digital Tools & Wellbeing Resources
              </p>
              <p className="mt-1 text-xs text-[#AAB9CE] leading-relaxed">
                Handpicked partner guides and productivity software tailored for modern readers.
              </p>
            </div>
            <a
              href={provider.directUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8CF0C4] text-[#080E19] text-xs font-semibold hover:bg-[#8CF0C4]/90 transition-colors"
            >
              <span>Explore</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
