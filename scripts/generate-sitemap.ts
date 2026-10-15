import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES } from '../src/content/articles';
import { CATEGORIES } from '../src/content/categories';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://trendora-daily.vercel.app';

interface SitemapEntry {
  url: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

const staticPages: SitemapEntry[] = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms-of-use', priority: '0.5', changefreq: 'yearly' },
];

const categoryPages: SitemapEntry[] = CATEGORIES.map((c) => ({
  url: `/category/${c.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

const articlePages: SitemapEntry[] = ARTICLES.map((a) => ({
  url: `/articles/${a.slug}`,
  lastmod: a.updatedDate || a.publishedDate,
  priority: a.isFeatured ? '0.9' : '0.8',
  changefreq: 'monthly',
}));

const allUrls: SitemapEntry[] = [...staticPages, ...categoryPages, ...articlePages];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const p of allUrls) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${p.url}</loc>\n`;
  if (p.lastmod) {
    xml += `    <lastmod>${p.lastmod}</lastmod>\n`;
  }
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`[sitemap] Generated public/sitemap.xml with ${allUrls.length} URLs`);

// Verify robots.txt in public
const robotsContent = `# Trendora Daily - Robots Configuration
# Allow all search engine crawlers to discover and index articles and public pages
User-agent: *
Allow: /

# Directives
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf-8');
console.log(`[robots] Verified public/robots.txt with Sitemap: ${baseUrl}/sitemap.xml`);

const distDir = path.resolve(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf-8');
  console.log(`[sync] Copied sitemap.xml and robots.txt to ${distDir}`);
}

