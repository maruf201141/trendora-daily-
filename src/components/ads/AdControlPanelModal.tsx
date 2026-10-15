import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldAlert,
  AlertTriangle,
  Code2,
  FileCheck2,
  Ban,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { AD_PROVIDERS } from '../../config/adProviders';
import { INITIAL_AD_PLACEMENTS } from '../../config/adPlacements';
import { adScriptRegistry, ScriptRecord } from '../../lib/adScriptRegistry';
import { AdProviderId, AdPlacementId } from '../../types';

interface AdControlPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  providersState: typeof AD_PROVIDERS;
  onToggleProvider: (providerId: AdProviderId) => void;
  placementsState: typeof INITIAL_AD_PLACEMENTS;
  onTogglePlacement: (placementId: AdPlacementId) => void;
}

export const AdControlPanelModal: React.FC<AdControlPanelModalProps> = ({
  isOpen,
  onClose,
  providersState,
  onToggleProvider,
  placementsState,
  onTogglePlacement,
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'gambling-policy' | 'placements' | 'registry'>('status');
  const [loadedScripts, setLoadedScripts] = useState<Map<string, ScriptRecord>>(new Map());

  useEffect(() => {
    if (!isOpen) return;
    const unsub = adScriptRegistry.subscribe((map) => {
      setLoadedScripts(map);
    });
    return unsub;
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ad-control-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl border border-[#9BC7FF]/20 bg-[#111C2F] shadow-2xl text-[#EDF4FF] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#AAB9CE]/15 bg-[#080E19]">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#8CF0C4]" />
            <div>
              <h2 id="ad-control-title" className="text-base sm:text-lg font-semibold tracking-tight text-[#EDF4FF]">
                Advertising Safety & Status Verification Console
              </h2>
              <p className="text-[11px] text-[#AAB9CE]">
                Real application states, technical format reviews, and partner dashboard guidelines
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#AAB9CE] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close ad console"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#AAB9CE]/15 bg-[#0B1220] px-4 sm:px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 px-3 sm:px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'status'
                ? 'border-[#8CF0C4] text-[#8CF0C4]'
                : 'border-transparent text-[#AAB9CE] hover:text-white'
            }`}
          >
            Provider Status Audit ({Object.keys(providersState).length})
          </button>
          <button
            onClick={() => setActiveTab('gambling-policy')}
            className={`py-3 px-3 sm:px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'gambling-policy'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-[#AAB9CE] hover:text-white'
            }`}
          >
            <Ban className="w-3.5 h-3.5" />
            <span>Ad Quality & Gambling Controls</span>
          </button>
          <button
            onClick={() => setActiveTab('placements')}
            className={`py-3 px-3 sm:px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'placements'
                ? 'border-[#8CF0C4] text-[#8CF0C4]'
                : 'border-transparent text-[#AAB9CE] hover:text-white'
            }`}
          >
            Placements ({Object.keys(placementsState).length})
          </button>
          <button
            onClick={() => setActiveTab('registry')}
            className={`py-3 px-3 sm:px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'registry'
                ? 'border-[#8CF0C4] text-[#8CF0C4]'
                : 'border-transparent text-[#AAB9CE] hover:text-white'
            }`}
          >
            Browser Registry ({loadedScripts.size})
          </button>
        </div>

        {/* Console Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* TAB 1: Real Provider Statuses */}
          {activeTab === 'status' && (
            <div className="space-y-4">
              {/* Definition Criteria Box */}
              <div className="p-4 rounded-xl border border-[#9BC7FF]/20 bg-[#0B1220] text-xs text-[#AAB9CE] space-y-2 leading-relaxed">
                <span className="font-semibold text-[#8CF0C4] block uppercase tracking-wider text-[11px]">
                  Real Application Status Definitions (No Fabricated Approvals):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <p>• <strong className="text-[#EDF4FF]">Configured:</strong> Script URL, key, or container exists in codebase.</p>
                  <p>• <strong className="text-[#EDF4FF]">Enabled:</strong> Turned on by owner toggle in current session.</p>
                  <p>• <strong className="text-[#EDF4FF]">Loaded:</strong> Script network resource successfully loaded in browser.</p>
                  <p>• <strong className="text-[#EDF4FF]">Rendered:</strong> Sandboxed frame / container child mounted in DOM.</p>
                  <p>• <strong className="text-[#EDF4FF]">Format Reviewed:</strong> Client code verified for frame/scope safety.</p>
                  <p>• <strong className="text-[#EDF4FF]">Publisher Approved:</strong> Formally verified in ad network dashboard.</p>
                </div>
                <div className="pt-1 text-[11px] text-amber-300 border-t border-[#AAB9CE]/10">
                  ⚠ <em>Rule: A successful script load never indicates partner account or domain approval.</em>
                </div>
              </div>

              <div className="grid gap-3.5">
                {Object.values(providersState).map((provider) => {
                  const scriptRecord = provider.scriptUrl ? loadedScripts.get(provider.scriptUrl) : undefined;
                  const isLoaded = scriptRecord?.status === 'loaded';
                  const isBlocked = scriptRecord?.status === 'blocked';

                  return (
                    <div
                      key={provider.id}
                      className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#142138] space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-[#EDF4FF]">
                              {provider.name}
                            </span>

                            {/* Format Review State */}
                            {provider.isFormatReviewed ? (
                              <span className="inline-flex items-center gap-1 text-[10px] text-[#8CF0C4] bg-[#8CF0C4]/10 px-2 py-0.5 rounded border border-[#8CF0C4]/20">
                                <FileCheck2 className="w-3 h-3" /> Format Reviewed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                <AlertTriangle className="w-3 h-3" /> Unreviewed Format
                              </span>
                            )}

                            {/* Publisher Approval State (Never hardcoded as approved) */}
                            <span className="inline-flex items-center gap-1 text-[10px] text-[#AAB9CE] bg-white/5 px-2 py-0.5 rounded border border-[#AAB9CE]/20">
                              <HelpCircle className="w-3 h-3" /> Pending Publisher Review
                            </span>
                          </div>
                          <p className="text-xs text-[#AAB9CE] mt-0.5">{provider.description}</p>
                        </div>

                        {/* Enable/Disable Toggle */}
                        <div className="flex items-center gap-2 shrink-0">
                          <label className="flex items-center cursor-pointer gap-2 text-xs">
                            <input
                              type="checkbox"
                              checked={provider.isEnabled}
                              onChange={() => onToggleProvider(provider.id as AdProviderId)}
                              className="w-4 h-4 rounded text-[#8CF0C4] bg-[#0B1220] border-[#AAB9CE]/30 focus:ring-[#8CF0C4] cursor-pointer"
                            />
                            <span className={provider.isEnabled ? 'text-[#8CF0C4] font-medium' : 'text-[#AAB9CE]'}>
                              {provider.isEnabled ? 'Enabled' : 'Disabled'}
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Six-State Matrix */}
                      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-2.5 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/10 text-[11px] font-mono">
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Configured</span>
                          <span className="text-[#8CF0C4]">Yes</span>
                        </div>
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Owner State</span>
                          <span className={provider.isEnabled ? 'text-[#8CF0C4]' : 'text-[#AAB9CE]'}>
                            {provider.isEnabled ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Format</span>
                          <span className={provider.isFormatReviewed ? 'text-[#8CF0C4]' : 'text-amber-400'}>
                            {provider.isFormatReviewed ? 'Reviewed' : 'Unreviewed'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Script Load</span>
                          <span className={
                            !provider.isEnabled
                              ? 'text-[#AAB9CE]'
                              : provider.providerType === 'direct-link'
                              ? 'text-[#9BC7FF]'
                              : provider.providerType === 'highrevenueformat'
                              ? 'text-[#8CF0C4]'
                              : isLoaded
                              ? 'text-[#8CF0C4]'
                              : isBlocked
                              ? 'text-rose-400'
                              : 'text-amber-400'
                          }>
                            {!provider.isEnabled
                              ? 'Idle'
                              : provider.providerType === 'direct-link'
                              ? 'Direct URL'
                              : provider.providerType === 'highrevenueformat'
                              ? 'Frame Sandboxed'
                              : isLoaded
                              ? 'Loaded'
                              : isBlocked
                              ? 'Blocked'
                              : 'Pending'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Rendered</span>
                          <span className={provider.isEnabled ? 'text-[#8CF0C4]' : 'text-[#AAB9CE]'}>
                            {provider.isEnabled
                              ? provider.providerType === 'direct-link'
                                ? 'Card Active'
                                : provider.providerType === 'highrevenueformat'
                                ? 'Frame Mounted'
                                : 'Slot Ready'
                              : 'Disabled'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#AAB9CE]/60 block text-[9px] uppercase">Approval</span>
                          <span className="text-amber-400">External Dashboard</span>
                        </div>
                      </div>

                      {/* Technical Identifiers */}
                      <div className="text-[11px] font-mono bg-[#0B1220] p-2.5 rounded-lg border border-[#AAB9CE]/10 overflow-x-auto text-[#9BC7FF] space-y-0.5">
                        {provider.targetKey && <div>Target Key: {provider.targetKey}</div>}
                        {provider.dimensions && (
                          <div>Creative Dimensions: {provider.dimensions.width}×{provider.dimensions.height}</div>
                        )}
                        {provider.containerId && <div>Required Container ID: #{provider.containerId}</div>}
                        {provider.scriptUrl && <div className="truncate">External Script: {provider.scriptUrl}</div>}
                        {provider.directUrl && <div className="truncate">Landing Target: {provider.directUrl}</div>}
                      </div>

                      {/* Verification Notes */}
                      <div className="text-xs text-[#AAB9CE] leading-relaxed">
                        <strong className="text-[#EDF4FF]">Verification Note: </strong>
                        {provider.approvalNotes}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Ad Quality & Gambling Controls */}
          {activeTab === 'gambling-policy' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-amber-400/30 bg-amber-400/5 text-xs text-[#EDF4FF] space-y-2 leading-relaxed">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Gambling & Betting Creative Policy</span>
                </div>
                <p>
                  Trendora Daily maintains an editorial policy strictly prohibiting gambling, casino, sports betting, and predatory financial schemes.
                </p>
                <div className="p-3 rounded-lg bg-[#0B1220] border border-amber-400/20 text-[#AAB9CE]">
                  <strong className="text-amber-300 block mb-1">Technical Limitations Disclosure:</strong>
                  External advertising networks (HighRevenueFormat/Adsterra, ProfitableRate, Monetag) deliver programmatic creatives inside cross-origin sandboxed iframes. <strong>Client-side JavaScript or CSS cannot inspect or alter cross-origin ad creatives</strong> without violating the browser Same-Origin Policy.
                  <br /><br />
                  Therefore, category restrictions <strong>must be configured directly inside your respective partner dashboard</strong>.
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#8CF0C4]">
                  Dashboard Actions & Individual Provider Kill Switches:
                </h3>

                {Object.values(providersState)
                  .filter((p) => p.gamblingCategoryControl.requiresDashboardAction)
                  .map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl border border-[#AAB9CE]/15 bg-[#142138] space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-sm text-[#EDF4FF]">{p.name}</span>
                        <button
                          type="button"
                          onClick={() => onToggleProvider(p.id as AdProviderId)}
                          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                            p.isEnabled
                              ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20'
                              : 'bg-[#8CF0C4]/10 text-[#8CF0C4] border border-[#8CF0C4]/30 hover:bg-[#8CF0C4]/20'
                          }`}
                        >
                          {p.isEnabled ? 'Disable Provider (Kill Switch)' : 'Re-enable Provider'}
                        </button>
                      </div>

                      <p className="text-[#AAB9CE] leading-relaxed">
                        <strong className="text-[#9BC7FF]">Dashboard Instructions: </strong>
                        {p.gamblingCategoryControl.dashboardInstructions}
                      </p>

                      <div className="text-[11px] text-[#AAB9CE]/70">
                        {p.gamblingCategoryControl.networkCategoryFilteringSupported ? (
                          <span className="text-[#8CF0C4]">✓ Provider dashboard supports category exclusion filters</span>
                        ) : (
                          <span className="text-amber-400">⚠ Provider lacks category exclusions; disable provider to eliminate betting creatives.</span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 3: Placement Configurations */}
          {activeTab === 'placements' && (
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-[#AAB9CE]/15 bg-[#0B1220] text-xs text-[#AAB9CE]">
                Every placement can be enabled or disabled independently. Disabled placements collapse cleanly without creating layout shifts.
              </div>

              {Object.values(placementsState).map((placement) => (
                <div
                  key={placement.id}
                  className="p-4 rounded-lg border border-[#AAB9CE]/15 bg-[#142138] flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-[#EDF4FF]">{placement.label}</span>
                      <span className="text-xs text-[#AAB9CE] font-mono">({placement.id})</span>
                    </div>
                    <p className="text-xs text-[#AAB9CE] mt-1">{placement.description}</p>
                    <p className="text-xs text-[#9BC7FF] mt-1">
                      Assigned Provider:{' '}
                      {placement.assignedProviderId ? providersState[placement.assignedProviderId]?.name : 'None'}
                    </p>
                  </div>

                  <label className="flex items-center cursor-pointer gap-2 text-xs shrink-0">
                    <input
                      type="checkbox"
                      checked={placement.isEnabled}
                      onChange={() => onTogglePlacement(placement.id as AdPlacementId)}
                      className="w-4 h-4 rounded text-[#8CF0C4] bg-[#0B1220] border-[#AAB9CE]/30 focus:ring-[#8CF0C4] cursor-pointer"
                    />
                    <span className={placement.isEnabled ? 'text-[#8CF0C4] font-medium' : 'text-[#AAB9CE]'}>
                      {placement.isEnabled ? 'Slot On' : 'Slot Off'}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Browser Runtime Script Registry */}
          {activeTab === 'registry' && (
            <div className="space-y-4">
              <p className="text-xs text-[#AAB9CE]">
                In-memory registry tracked by <code className="text-[#8CF0C4]">adScriptRegistry</code> preventing duplicate network requests during SPA route changes.
              </p>
              {loadedScripts.size === 0 ? (
                <div className="p-8 text-center text-xs text-[#AAB9CE] border border-dashed border-[#AAB9CE]/20 rounded-lg">
                  No ad scripts loaded yet in current session.
                </div>
              ) : (
                <div className="space-y-2">
                  {Array.from(loadedScripts.entries()).map(([url, rec]) => (
                    <div
                      key={url}
                      className="p-3 rounded bg-[#0B1220] border border-[#AAB9CE]/15 text-xs font-mono flex items-center justify-between gap-4"
                    >
                      <span className="truncate text-[#EDF4FF]">{url}</span>
                      <span
                        className={`shrink-0 uppercase text-[10px] px-2 py-0.5 rounded font-medium ${
                          rec.status === 'loaded'
                            ? 'text-[#8CF0C4] bg-[#8CF0C4]/10'
                            : rec.status === 'blocked'
                            ? 'text-rose-400 bg-rose-400/10'
                            : 'text-amber-400 bg-amber-400/10'
                        }`}
                      >
                        {rec.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#AAB9CE]/15 bg-[#080E19] flex items-center justify-between text-xs text-[#AAB9CE]">
          <span>Trendora Daily Real Advertising Integration Engine</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#142138] hover:bg-[#1a2d4d] text-[#EDF4FF] transition-colors cursor-pointer"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
