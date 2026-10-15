import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-emotional',
    name: 'Emotional Stories',
    slug: 'emotional-stories',
    description:
      'Human narratives, personal milestones, reflections on memory, resilience, and connection that linger long after reading.',
  },
  {
    id: 'cat-lifestyle',
    name: 'Lifestyle & Wellbeing',
    slug: 'lifestyle-wellbeing',
    description:
      'Mindful routines, sustainable daily habits, restorative practices, and practical clarity for modern living.',
  },
  {
    id: 'cat-tech',
    name: 'Technology & AI',
    slug: 'technology-ai',
    description:
      'Demystifying artificial intelligence, smart tools, and tech trends with plain language and practical understanding.',
  },
  {
    id: 'cat-skills',
    name: 'Digital Skills',
    slug: 'digital-skills',
    description:
      'Actionable workflows, file organization methods, automation shortcuts, and modern productivity craftsmanship.',
  },
  {
    id: 'cat-safety',
    name: 'Online Safety',
    slug: 'online-safety',
    description:
      'Empowering privacy guides, account defense, threat awareness, and proactive steps to protect your personal digital life.',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
