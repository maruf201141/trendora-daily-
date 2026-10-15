import { Article } from '../types';

/**
 * Calculate estimated reading time based on standard 190 words per minute
 */
export function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 190);
  return Math.max(1, minutes);
}

/**
 * Calculates exact word count across title, excerpt, and all sections of an article
 */
export function getArticleWordCount(article: Article): number {
  const parts: string[] = [article.title, article.excerpt];
  if (article.sections) {
    for (const s of article.sections) {
      parts.push(s.title);
      if (s.content) parts.push(...s.content);
      if (s.pullQuote) parts.push(s.pullQuote);
      if (s.keyTakeaway) parts.push(s.keyTakeaway);
      if (s.subsections) {
        for (const sub of s.subsections) {
          parts.push(sub.title);
          if (sub.content) parts.push(...sub.content);
        }
      }
    }
  }
  return parts.join(' ').trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Calculates accurate reading time from actual article content
 */
export function getArticleReadingTime(article: Article): number {
  const words = getArticleWordCount(article);
  return Math.max(1, Math.ceil(words / 190));
}

export function formatPublishedDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}
