export type CategorySlug =
  | 'emotional-stories'
  | 'lifestyle-wellbeing'
  | 'technology-ai'
  | 'digital-skills'
  | 'online-safety';

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  count?: number;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    title: string;
    content: string[];
  }[];
  pullQuote?: string;
  keyTakeaway?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  author: Author;
  publishedDate: string; // ISO or formatted date
  updatedDate?: string;
  readingTimeMinutes: number;
  featuredImage: string;
  imageAlt: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  isEditorsPick?: boolean;
  tags: string[];
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export type AdProviderId =
  | 'monetag-zone'
  | 'profitablerate-cpm-1'
  | 'profitablerate-invoke'
  | 'highrevenueformat-728x90'
  | 'profitablerate-cpm-2'
  | 'profitablerate-sponsored-link'
  | 'highrevenueformat-320x50'
  | 'profitablerate-cpm-3'
  | 'highrevenueformat-160x300'
  | 'highrevenueformat-160x600';

export type AdPlacementId =
  | 'header-banner'
  | 'after-hero'
  | 'in-content-1'
  | 'in-content-2'
  | 'sidebar'
  | 'before-related-articles'
  | 'footer-banner';

export interface AdProviderConfig {
  id: AdProviderId;
  name: string;
  description: string;
  providerType: 'monetag' | 'profitablerate' | 'highrevenueformat' | 'direct-link';
  scriptUrl?: string;
  targetKey?: string;
  dimensions?: { width: number; height: number };
  containerId?: string;
  directUrl?: string;
  requiredAttributes?: Record<string, string>;
  isConfigured: boolean; // Script/key exists in code
  isEnabled: boolean; // Owner has enabled the unit
  isFormatReviewed: boolean; // Integration format was architected for technical safety
  isPublisherApproved: boolean; // Formal approval in publisher network dashboard (never inferred from script load)
  approvalNotes: string; // Dashboard verification requirements
  formatCategory: 'banner' | 'pop-overlay' | 'native-invoke' | 'sponsored-link';
  placementRecommendation: AdPlacementId[];
  gamblingCategoryControl: {
    requiresDashboardAction: boolean;
    networkCategoryFilteringSupported: boolean;
    dashboardInstructions: string;
  };
}

export interface AdPlacementConfig {
  id: AdPlacementId;
  label: string;
  description: string;
  assignedProviderId?: AdProviderId;
  isEnabled: boolean;
  allowedFormats: ('banner' | 'native-invoke' | 'sponsored-link')[];
}
