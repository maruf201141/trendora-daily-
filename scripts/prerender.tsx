import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router';

import { ARTICLES } from '../src/content/articles';
import { CATEGORIES } from '../src/content/categories';
import { siteConfig } from '../src/config/siteConfig';

import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';

import { HomePage } from '../src/pages/HomePage';
import { ArticlePage } from '../src/pages/ArticlePage';
import { CategoryPage } from '../src/pages/CategoryPage';
import { AboutPage } from '../src/pages/AboutPage';
import { ContactPage } from '../src/pages/ContactPage';
import { PrivacyPolicyPage } from '../src/pages/PrivacyPolicyPage';
import { DisclaimerPage } from '../src/pages/DisclaimerPage';
import { TermsPage } from '../src/pages/TermsPage';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = siteConfig.canonicalBaseUrl || 'https://trendora-daily.vercel.app';

interface RouteToPrerender {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown>[];
  element: React.ReactElement;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildBaseSchemas(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url: `${BASE_URL}/`,
      description: siteConfig.description,
      email: siteConfig.editorialContact,
      sameAs: [siteConfig.officialFacebook],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: `${BASE_URL}/`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];
}

function generateArticleSchema(article: (typeof ARTICLES)[0]): Record<string, unknown>[] {
  const schemas = buildBaseSchemas();
  const categoryName = CATEGORIES.find((c) => c.slug === article.category)?.name || article.category.replace(/-/g, ' ');
  const articleImg = article.featuredImage.startsWith('http')
    ? article.featuredImage
    : `${BASE_URL}${article.featuredImage.startsWith('/') ? '' : '/'}${article.featuredImage}`;
  const articleUrl = `${BASE_URL}/articles/${article.slug}`;

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [articleImg],
    datePublished: `${article.publishedDate}T08:00:00Z`,
    dateModified: article.updatedDate ? `${article.updatedDate}T08:00:00Z` : `${article.publishedDate}T08:00:00Z`,
    articleSection: categoryName,
    inLanguage: 'en-US',
    keywords: article.tags.join(', '),
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: `${BASE_URL}/`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
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
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryName,
        item: `${BASE_URL}/category/${article.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  });

  return schemas;
}

function generateBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown>[] {
  const schemas = buildBaseSchemas();
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  });
  return schemas;
}

async function prerender() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Run vite build first.`);
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  const routes: RouteToPrerender[] = [];

  // 1. Homepage
  routes.push({
    path: '/',
    title: `${siteConfig.name} – Stories That Stay With You, Ideas That Move You Forward`,
    description: siteConfig.description,
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
    schema: buildBaseSchemas(),
    element: (
      <Routes>
        <Route path="/" element={<HomePage onOpenAdConsole={() => {}} />} />
      </Routes>
    ),
  });

  // 2. All Articles
  for (const article of ARTICLES) {
    const articleImg = article.featuredImage.startsWith('http')
      ? article.featuredImage
      : `${BASE_URL}${article.featuredImage.startsWith('/') ? '' : '/'}${article.featuredImage}`;

    routes.push({
      path: `/articles/${article.slug}`,
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      canonicalUrl: `${BASE_URL}/articles/${article.slug}`,
      ogType: 'article',
      ogImage: articleImg,
      schema: generateArticleSchema(article),
      element: (
        <Routes>
          <Route path="/articles/:slug" element={<ArticlePage onOpenAdConsole={() => {}} />} />
        </Routes>
      ),
    });
  }

  // 3. All Categories
  for (const cat of CATEGORIES) {
    routes.push({
      path: `/category/${cat.slug}`,
      title: `${cat.name} Dispatches | ${siteConfig.name}`,
      description: cat.description,
      canonicalUrl: `${BASE_URL}/category/${cat.slug}`,
      ogType: 'website',
      schema: generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: cat.name, url: `/category/${cat.slug}` },
      ]),
      element: (
        <Routes>
          <Route path="/category/:slug" element={<CategoryPage onOpenAdConsole={() => {}} />} />
        </Routes>
      ),
    });
  }

  // 4. Static Pages
  routes.push({
    path: '/about',
    title: `About Us | ${siteConfig.name}`,
    description: 'Learn about Trendora Daily, our editorial mission, ethical commitments, and dedication to human storytelling in a digital age.',
    canonicalUrl: `${BASE_URL}/about`,
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ]),
    element: (
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    ),
  });

  routes.push({
    path: '/contact',
    title: `Contact Editorial & Reader Support | ${siteConfig.name}`,
    description: 'Get in touch with the Trendora Daily editorial newsroom, submit story suggestions, or contact reader support.',
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ]),
    element: (
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    ),
  });

  routes.push({
    path: '/privacy-policy',
    title: `Privacy Policy | ${siteConfig.name}`,
    description: 'Read the Trendora Daily privacy policy. We value your digital autonomy and handle personal information with care.',
    canonicalUrl: `${BASE_URL}/privacy-policy`,
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
    ]),
    element: (
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    ),
  });

  routes.push({
    path: '/disclaimer',
    title: `Editorial Disclaimer | ${siteConfig.name}`,
    description: 'Understand Trendora Daily editorial independence, content boundaries, sponsorship transparency, and informational disclaimers.',
    canonicalUrl: `${BASE_URL}/disclaimer`,
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Editorial Disclaimer', url: '/disclaimer' },
    ]),
    element: (
      <Routes>
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    ),
  });

  routes.push({
    path: '/terms-of-use',
    title: `Terms of Use | ${siteConfig.name}`,
    description: 'Review the terms and conditions governing the use of Trendora Daily, our content, and digital services.',
    canonicalUrl: `${BASE_URL}/terms-of-use`,
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Terms of Use', url: '/terms-of-use' },
    ]),
    element: (
      <Routes>
        <Route path="/terms-of-use" element={<TermsPage />} />
      </Routes>
    ),
  });

  console.log(`[prerender] Starting prerender of ${routes.length} static routes...`);

  let renderedCount = 0;

  for (const route of routes) {
    // Render full page React markup inside MemoryRouter with Header + Route + Footer
    const appMarkup = renderToString(
      <MemoryRouter initialEntries={[route.path]}>
        <div className="flex flex-col min-h-screen bg-[#0B1220] text-[#EDF4FF]">
          <Header onOpenAdConsole={() => {}} />
          <main className="flex-1">{route.element}</main>
          <Footer />
        </div>
      </MemoryRouter>
    );

    // Transform HTML template
    let html = templateHtml;

    // 1. Replace <title>
    html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);

    // 2. Replace description meta
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    );

    // 3. Replace canonical link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );

    // 4. Replace Open Graph tags
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonicalUrl}" />`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="${route.ogType}" />`
    );

    // 5. Replace Twitter tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
    );

    // 6. Handle og:image & twitter:image if provided
    if (route.ogImage) {
      const ogImgTag = `<meta property="og:image" content="${route.ogImage}" />\n    <meta name="twitter:image" content="${route.ogImage}" />`;
      if (html.includes('property="og:image"')) {
        html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i, `<meta property="og:image" content="${route.ogImage}" />`);
        html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${route.ogImage}" />`);
      } else {
        html = html.replace('</head>', `    ${ogImgTag}\n  </head>`);
      }
    }

    // 7. Inject JSON-LD Schema
    if (route.schema) {
      const schemaJson = JSON.stringify(route.schema, null, 2);
      const schemaTag = `<script id="trendora-jsonld-schema" type="application/ld+json">\n${schemaJson}\n    </script>`;
      if (html.includes('id="trendora-jsonld-schema"')) {
        html = html.replace(/<script\s+id="trendora-jsonld-schema".*?<\/script>/s, schemaTag);
      } else {
        html = html.replace('</head>', `    ${schemaTag}\n  </head>`);
      }
    }

    // 8. Inject prerendered React markup into root
    html = html.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`);

    // Write file to output
    if (route.path === '/') {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf-8');
    } else {
      const cleanPath = route.path.replace(/^\//, '');
      const dirPath = path.join(DIST_DIR, cleanPath);
      fs.mkdirSync(dirPath, { recursive: true });

      // Write both dir/index.html and dir.html for maximum static server compatibility
      fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf-8');
      fs.writeFileSync(path.join(DIST_DIR, `${cleanPath}.html`), html, 'utf-8');
    }

    renderedCount++;
  }

  console.log(`[prerender] Successfully generated ${renderedCount} prerendered HTML pages in dist/!`);
}

prerender().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
