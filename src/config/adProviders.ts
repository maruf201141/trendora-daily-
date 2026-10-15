import { AdProviderConfig } from '../types';

export const AD_PROVIDERS: Record<string, AdProviderConfig> = {
  'monetag-zone': {
    id: 'monetag-zone',
    name: 'Provider A (Monetag-Style Zone 294802)',
    description: 'Third-party tag script with zone attribute 294802.',
    providerType: 'monetag',
    scriptUrl: 'https://quge5.com/88/tag.min.js',
    requiredAttributes: {
      'data-zone': '294802',
      async: 'true',
      'data-cfasync': 'false',
    },
    isConfigured: true,
    isEnabled: false,
    isFormatReviewed: false,
    isPublisherApproved: false,
    approvalNotes:
      'Unverified in Monetag dashboard. Zone 294802 may deliver on-click popunders, vignettes, or push overlays. Keep disabled until the owner confirms non-intrusive format and excludes adult/gambling categories.',
    formatCategory: 'pop-overlay',
    placementRecommendation: [],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Log in to your Monetag Publisher Account -> Sites -> Zone 294802 -> Content Restrictions. Enable strict filters to block Gambling, Casino, and Betting creatives.',
    },
  },
  'profitablerate-cpm-1': {
    id: 'profitablerate-cpm-1',
    name: 'Provider B (ProfitableRate CPM Script 1)',
    description: 'Background CPM ad script loader.',
    providerType: 'profitablerate',
    scriptUrl: 'https://pl31557065.profitableratecpmnetwork.com/f0/7d/87/f07d87e9b361e5e5dd41b9f7979b1718.js',
    isConfigured: true,
    isEnabled: false,
    isFormatReviewed: false,
    isPublisherApproved: false,
    approvalNotes:
      'Unreviewed background CPM script. Execution behavior has not been validated against network account terms.',
    formatCategory: 'pop-overlay',
    placementRecommendation: [],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: false,
      dashboardInstructions:
        'ProfitableRate CPM scripts deliver programmatic pop/interstitial inventory. If betting ads appear, disable this provider completely in the Ad Console.',
    },
  },
  'profitablerate-invoke': {
    id: 'profitablerate-invoke',
    name: 'Provider C (ProfitableRate Native Container)',
    description: 'Container-targeted ad banner invocation script.',
    providerType: 'profitablerate',
    scriptUrl: 'https://pl31625921.profitableratecpmnetwork.com/c33b6c16e929619d5d484c3b93631e54/invoke.js',
    containerId: 'container-c33b6c16e929619d5d484c3b93631e54',
    requiredAttributes: {
      async: 'async',
      'data-cfasync': 'false',
    },
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: targets #container-c33b6c16e929619d5d484c3b93631e54. Note: Publisher approval must be verified in the network dashboard; successful script load does not indicate advertiser approval.',
    formatCategory: 'native-invoke',
    placementRecommendation: ['after-hero', 'before-related-articles'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Log in to ProfitableRate Partner Console -> Placements -> Unit c33b6c16e929619d5d484c3b93631e54 -> Category Exclusions -> Check "Exclude Betting / Gambling / Sweepstakes".',
    },
  },
  'highrevenueformat-728x90': {
    id: 'highrevenueformat-728x90',
    name: 'Provider D (HighRevenueFormat Leaderboard 728×90)',
    description: '728×90 desktop leaderboard banner via atOptions iframe invocation.',
    providerType: 'highrevenueformat',
    targetKey: '3e941475ae82dcb37849aee04854b6db',
    scriptUrl: 'https://www.highrevenueformat.com/3e941475ae82dcb37849aee04854b6db/invoke.js',
    dimensions: { width: 728, height: 90 },
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: executes in isolated frame wrapper to protect atOptions scope. Publisher approval must be verified in Adsterra/HighRevenueFormat dashboard.',
    formatCategory: 'banner',
    placementRecommendation: ['after-hero', 'footer-banner'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Log in to Adsterra/HighRevenueFormat Dashboard -> Websites -> Select Domain -> Placement Key 3e941475ae82dcb37849aee04854b6db -> Filter Ads -> Enable "Block Gambling, Betting & Casino ads".',
    },
  },
  'profitablerate-cpm-2': {
    id: 'profitablerate-cpm-2',
    name: 'Provider E (ProfitableRate CPM Script 2)',
    description: 'Secondary CPM script identifier.',
    providerType: 'profitablerate',
    scriptUrl: 'https://pl31626026.profitableratecpmnetwork.com/1f/19/5a/1f195abbe8c3588d1ad5a813b2541b3b.js',
    isConfigured: true,
    isEnabled: false,
    isFormatReviewed: false,
    isPublisherApproved: false,
    approvalNotes:
      'Unreviewed background CPM script. Kept disabled to avoid unexpected redirect behavior.',
    formatCategory: 'pop-overlay',
    placementRecommendation: [],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: false,
      dashboardInstructions:
        'Raw CPM scripts lack client-side ad category controls. Disable this provider if unwanted ads appear.',
    },
  },
  'profitablerate-sponsored-link': {
    id: 'profitablerate-sponsored-link',
    name: 'Provider F (ProfitableRate Direct Sponsored Link)',
    description: 'Direct sponsored offer URL with key parameter.',
    providerType: 'direct-link',
    directUrl: 'https://www.profitableratecpmnetwork.com/jz3k7bkx4u?key=8fa8188a1165f3566b2b3bcb5bbf225b',
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: direct link rendered with explicit "SPONSORED DISCOVERY" disclosure and rel="sponsored nofollow noopener noreferrer". No automatic redirects. Landings are dynamically served by network.',
    formatCategory: 'sponsored-link',
    placementRecommendation: ['in-content-2', 'sidebar'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Review SmartLink offer verticals in your ProfitableRate publisher account to ensure Gambling and Adult offers are excluded.',
    },
  },
  'highrevenueformat-320x50': {
    id: 'highrevenueformat-320x50',
    name: 'Provider G (HighRevenueFormat Mobile Banner 320×50)',
    description: '320×50 mobile anchor/in-content banner via atOptions iframe invocation.',
    providerType: 'highrevenueformat',
    targetKey: 'a6a979ed7ece25eee99573ab07dccd5d',
    scriptUrl: 'https://www.highrevenueformat.com/a6a979ed7ece25eee99573ab07dccd5d/invoke.js',
    dimensions: { width: 320, height: 50 },
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: 320×50 dimensions isolated in sandboxed frame runner. Live ads depend on network dashboard status.',
    formatCategory: 'banner',
    placementRecommendation: ['header-banner', 'in-content-1'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Adsterra/HighRevenueFormat Dashboard -> Placement Key a6a979ed7ece25eee99573ab07dccd5d -> Filter Ads -> Enable "Block Gambling & Betting".',
    },
  },
  'profitablerate-cpm-3': {
    id: 'profitablerate-cpm-3',
    name: 'Provider H (ProfitableRate CPM Script 3)',
    description: 'Tertiary CPM script identifier.',
    providerType: 'profitablerate',
    scriptUrl: 'https://pl31557067.profitableratecpmnetwork.com/a1/ec/e1/a1ece11027a7ffe00ff52a1f2a6d11c4.js',
    isConfigured: true,
    isEnabled: false,
    isFormatReviewed: false,
    isPublisherApproved: false,
    approvalNotes:
      'Unreviewed background CPM script. Kept disabled until verified.',
    formatCategory: 'pop-overlay',
    placementRecommendation: [],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: false,
      dashboardInstructions:
        'Disable this provider if gambling or misleading creatives are served by this CPM script.',
    },
  },
  'highrevenueformat-160x300': {
    id: 'highrevenueformat-160x300',
    name: 'Provider I (HighRevenueFormat Half-Skyscraper 160×300)',
    description: '160×300 vertical sidebar banner.',
    providerType: 'highrevenueformat',
    targetKey: '2b55d8dc3138557885e1cc64dbcfa3e2',
    scriptUrl: 'https://www.highrevenueformat.com/2b55d8dc3138557885e1cc64dbcfa3e2/invoke.js',
    dimensions: { width: 160, height: 300 },
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: 160×300 unit restricted to desktop viewports (>=1024px). Domain approval must be confirmed in Adsterra dashboard.',
    formatCategory: 'banner',
    placementRecommendation: ['sidebar'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Adsterra/HighRevenueFormat Dashboard -> Placement Key 2b55d8dc3138557885e1cc64dbcfa3e2 -> Filter Ads -> Check "Exclude Gambling / Betting".',
    },
  },
  'highrevenueformat-160x600': {
    id: 'highrevenueformat-160x600',
    name: 'Provider J (HighRevenueFormat Wide Skyscraper 160×600)',
    description: '160×600 tall vertical skyscraper for large screens.',
    providerType: 'highrevenueformat',
    targetKey: 'f1e526d4e27d311493cc48f30bac11c4',
    scriptUrl: 'https://www.highrevenueformat.com/f1e526d4e27d311493cc48f30bac11c4/invoke.js',
    dimensions: { width: 160, height: 600 },
    isConfigured: true,
    isEnabled: true,
    isFormatReviewed: true,
    isPublisherApproved: false,
    approvalNotes:
      'Format reviewed: 160×600 tall vertical unit restricted to desktop sidebars (>=1024px). Publisher approval must be verified in dashboard.',
    formatCategory: 'banner',
    placementRecommendation: ['sidebar'],
    gamblingCategoryControl: {
      requiresDashboardAction: true,
      networkCategoryFilteringSupported: true,
      dashboardInstructions:
        'Adsterra/HighRevenueFormat Dashboard -> Placement Key f1e526d4e27d311493cc48f30bac11c4 -> Filter Ads -> Check "Exclude Gambling / Betting".',
    },
  },
};
