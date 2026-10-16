import React from 'react';
import { Info } from 'lucide-react';
import { AdProviderConfig, AdPlacementConfig } from '../../types';

interface AdFallbackProps {
  placement: AdPlacementConfig;
  provider?: AdProviderConfig;
  reason?: string;
  onOpenInspector?: () => void;
  showInspectorButton?: boolean;
}

export const AdFallback: React.FC<AdFallbackProps> = ({
  placement,
  provider,
  reason = 'Placement disabled or unverified',
  onOpenInspector,
  showInspectorButton = false,
}) => {
  // If placement is completely disabled, collapse naturally without reserving empty void
  if (!placement.isEnabled) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label={`Advertisement slot: ${placement.label}`}
      className="w-full my-4 rounded-lg border border-[#AAB9CE]/10 bg-[#111C2F]/40 px-3.5 py-2.5 text-center transition-all"
    >
      <div className="flex items-center justify-between gap-3 text-[11px] text-[#AAB9CE]/70">
        <span className="font-mono text-[10px] uppercase tracking-wider">
          Slot: {placement.label} (Inactive)
        </span>
        {showInspectorButton && onOpenInspector && (
          <button
            type="button"
            onClick={onOpenInspector}
            className="flex items-center gap-1 text-[11px] text-[#9BC7FF] hover:underline cursor-pointer"
          >
            <Info className="w-3 h-3" />
            <span>Inspector</span>
          </button>
        )}
      </div>

      <div className="mt-1 text-xs text-[#AAB9CE]/80">
        <p>{reason}</p>
        {provider && (
          <p className="mt-0.5 text-[11px] text-[#AAB9CE]/60">
            Provider: <strong className="text-[#EDF4FF]">{provider.name}</strong> •{' '}
            Status: {provider.isFormatReviewed ? 'Format reviewed (pending publisher dashboard approval)' : 'Not verified'}
          </p>
        )}
      </div>
    </div>
  );
};
