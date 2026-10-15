import { AdPlacementConfig, AdPlacementId } from '../types';

export const INITIAL_AD_PLACEMENTS: Record<AdPlacementId, AdPlacementConfig> = {
  'header-banner': {
    id: 'header-banner',
    label: 'Top Header Banner',
    description: 'Compact 320×50 mobile/tablet banner displayed cleanly below header navigation.',
    assignedProviderId: 'highrevenueformat-320x50',
    isEnabled: true,
    allowedFormats: ['banner'],
  },
  'after-hero': {
    id: 'after-hero',
    label: 'Post-Hero Editorial Placement',
    description: 'Prominent 728×90 leaderboard on desktop or responsive container between hero and latest stories.',
    assignedProviderId: 'highrevenueformat-728x90',
    isEnabled: true,
    allowedFormats: ['banner', 'native-invoke'],
  },
  'in-content-1': {
    id: 'in-content-1',
    label: 'Mid-Article Inline Unit 1',
    description: 'Placed naturally between section 2 and section 3 in long articles.',
    assignedProviderId: 'highrevenueformat-320x50',
    isEnabled: true,
    allowedFormats: ['banner', 'native-invoke'],
  },
  'in-content-2': {
    id: 'in-content-2',
    label: 'Lower-Article Sponsored Unit 2',
    description: 'Placed before final summary in in-depth guides.',
    assignedProviderId: 'profitablerate-sponsored-link',
    isEnabled: true,
    allowedFormats: ['banner', 'sponsored-link'],
  },
  'sidebar': {
    id: 'sidebar',
    label: 'Article Sticky Sidebar (Desktop Only)',
    description: '160×300 or 160×600 vertical banner on screens >= 1024px. Hidden on mobile.',
    assignedProviderId: 'highrevenueformat-160x300',
    isEnabled: true,
    allowedFormats: ['banner'],
  },
  'before-related-articles': {
    id: 'before-related-articles',
    label: 'Pre-Recommendations Unit',
    description: 'Native container unit positioned above "Read Next" editorial section.',
    assignedProviderId: 'profitablerate-invoke',
    isEnabled: true,
    allowedFormats: ['native-invoke', 'banner'],
  },
  'footer-banner': {
    id: 'footer-banner',
    label: 'Footer Pre-Legal Banner',
    description: 'Gentle leaderboard banner above the site directory and legal links.',
    assignedProviderId: 'highrevenueformat-728x90',
    isEnabled: false, // Turned off by default to maintain clean footer aesthetics
    allowedFormats: ['banner'],
  },
};
