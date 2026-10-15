import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AdProviderLoader } from './components/ads/AdProviderLoader';
import { AdControlPanelModal } from './components/ads/AdControlPanelModal';
import { AD_PROVIDERS } from './config/adProviders';
import { INITIAL_AD_PLACEMENTS } from './config/adPlacements';
import { AdProviderId, AdPlacementId } from './types';

// Pages
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { CategoryPage } from './pages/CategoryPage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [isAdConsoleOpen, setIsAdConsoleOpen] = useState(false);
  const [providersState, setProvidersState] = useState(AD_PROVIDERS);
  const [placementsState, setPlacementsState] = useState(INITIAL_AD_PLACEMENTS);

  const handleToggleProvider = (providerId: AdProviderId) => {
    setProvidersState((prev) => {
      const target = prev[providerId];
      if (!target) return prev;
      return {
        ...prev,
        [providerId]: {
          ...target,
          isEnabled: !target.isEnabled,
        },
      };
    });
  };

  const handleTogglePlacement = (placementId: AdPlacementId) => {
    setPlacementsState((prev) => {
      const target = prev[placementId];
      if (!target) return prev;
      return {
        ...prev,
        [placementId]: {
          ...target,
          isEnabled: !target.isEnabled,
        },
      };
    });
  };

  return (
    <BrowserRouter>
      {/* Background script loader for active global ad networks */}
      <AdProviderLoader />

      <div className="flex flex-col min-h-screen bg-[#0B1220] text-[#EDF4FF]">
        {/* Editorial Top Navigation */}
        <Header onOpenAdConsole={() => setIsAdConsoleOpen(true)} />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenAdConsole={() => setIsAdConsoleOpen(true)} />}
            />
            <Route
              path="/articles/:slug"
              element={<ArticlePage onOpenAdConsole={() => setIsAdConsoleOpen(true)} />}
            />
            <Route
              path="/category/:slug"
              element={<CategoryPage onOpenAdConsole={() => setIsAdConsoleOpen(true)} />}
            />
            <Route
              path="/search"
              element={<SearchPage onOpenAdConsole={() => setIsAdConsoleOpen(true)} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsPage />} />
            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Advertising & Integration Control Modal */}
        <AdControlPanelModal
          isOpen={isAdConsoleOpen}
          onClose={() => setIsAdConsoleOpen(false)}
          providersState={providersState}
          onToggleProvider={handleToggleProvider}
          placementsState={placementsState}
          onTogglePlacement={handleTogglePlacement}
        />
      </div>
    </BrowserRouter>
  );
}
