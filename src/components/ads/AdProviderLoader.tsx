import React, { useEffect } from 'react';
import { AD_PROVIDERS } from '../../config/adProviders';
import { adScriptRegistry } from '../../lib/adScriptRegistry';

export const AdProviderLoader: React.FC = () => {
  useEffect(() => {
    // Audit active global providers (e.g. if Monetag or CPM scripts get enabled by the owner)
    Object.values(AD_PROVIDERS).forEach((provider) => {
      if (provider.isEnabled && provider.formatCategory === 'pop-overlay' && provider.scriptUrl) {
        // Only load if explicitly enabled by the owner
        adScriptRegistry.loadScript(provider.scriptUrl, provider.requiredAttributes);
      }
    });
  }, []);

  return null; // Invisible background orchestrator
};
