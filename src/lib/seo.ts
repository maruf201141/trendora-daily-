import { Article } from '../types';
import { siteConfig } from '../config/siteConfig';
import { CATEGORIES } from '../content/categories';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  article?: Article;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * Updates document head metadata dynamically in a React SPA
 */
export function updateSeoMetadata(meta: SeoMetadata): void {
  if (typeof document === 'undefined') return;

  // Title
  const formattedTitle = meta.title.includes(siteConfig.name)
    ? meta.title
    : `${meta.title} | ${siteConfig.name}`;
  document.title = formattedTitle;

  // Meta description
  updateMetaTag('name', 'description', meta.description);

  // Open Graph
  updateMetaTag('property', 'og:title', formattedTitle);
  updateMetaTag('property', 'og:description', meta.description);
  updateMetaTag('property', 'og:type', meta.ogType || 'website');
  updateMetaTag('property', 'og:site_name', siteConfig.name);

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : siteConfig.url;
  const currentUrl = meta.canonicalUrl || `${origin}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
  updateMetaTag('property', 'og:url', currentUrl);

  if (meta.ogImage) {
    const fullImgUrl = meta.ogImage.startsWith('http')
      ? meta.ogImage
      : `${origin}${meta.ogImage}`;
    updateMetaTag('property', 'og:image', fullImgUrl);
    updateMetaTag('name', 'twitter:image', fullImgUrl);
  }

  // Twitter
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:title', formattedTitle);
  updateMetaTag('name', 'twitter:description', meta.description);

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', currentUrl);

  // Structured Data (JSON-LD)
  updateStructuredData(meta, currentUrl, origin);
}

function updateMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateStructuredData(meta: SeoMetadata, url: string, origin: string) {
  const SCRIPT_ID = 'trendora-jsonld-schema';
  let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = SCRIPT_ID;
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }

  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: origin,
      description: siteConfig.description,
      email: siteConfig.editorialContact,
      sameAs: [siteConfig.officialFacebook],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  if (meta.article) {
    const categoryName = CATEGORIES.find((c) => c.slug === meta.article!.category)?.name || meta.article.category.replace(/-/g, ' ');
    const articleImg = meta.article.featuredImage.startsWith('http') 
      ? meta.article.featuredImage 
      : `${origin}${meta.article.featuredImage}`;

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.article.title,
      description: meta.article.excerpt,
      image: [articleImg],
      datePublished: `${meta.article.publishedDate}T08:00:00Z`,
      dateModified: meta.article.updatedDate ? `${meta.article.updatedDate}T08:00:00Z` : `${meta.article.publishedDate}T08:00:00Z`,
      articleSection: categoryName,
      inLanguage: 'en-US',
      keywords: meta.article.tags.join(', '),
      author: {
        '@type': 'Person',
        name: meta.article.author.name,
        jobTitle: meta.article.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: origin,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    });

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: origin,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: categoryName,
          item: `${origin}/category/${meta.article.category}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: meta.article.title,
          item: url,
        },
      ],
    });
  } else if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: meta.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${origin}${b.url}`,
      })),
    });
  }

  scriptTag.textContent = JSON.stringify(schemas, null, 2);
}
