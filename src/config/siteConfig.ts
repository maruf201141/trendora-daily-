export const siteConfig = {
  name: 'Trendora Daily',
  shortName: 'Trendora',
  tagline: 'Stories that stay with you. Ideas that move you forward.',
  description:
    'Thoughtful stories, useful life lessons, and simple technology guides to help you live, learn, and navigate your digital world with confidence.',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://trendoradaily.com',
  editorialContact: 'mtxmaruf201@gmail.com',
  privacyContact: 'mtxmaruf201@gmail.com',
  officialFacebook: 'https://www.facebook.com/share/1C88DeX5oV/',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Emotional Stories', href: '/category/emotional-stories' },
    { label: 'Lifestyle & Wellbeing', href: '/category/lifestyle-wellbeing' },
    { label: 'Technology & AI', href: '/category/technology-ai' },
    { label: 'Digital Skills', href: '/category/digital-skills' },
    { label: 'Online Safety', href: '/category/online-safety' },
    { label: 'Contact', href: '/contact' },
  ],
  footerLinks: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
  socialLinks: [
    {
      name: 'Official Facebook Page',
      url: 'https://www.facebook.com/share/1C88DeX5oV/',
    },
    { name: 'Email Us', url: 'mailto:mtxmaruf201@gmail.com' },
  ],
};
