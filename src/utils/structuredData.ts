export const generateBreadcrumbStructuredData = (crumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

export const generateArticleStructuredData = (article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  publisher: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://www.neoteq.com/og-image.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: article.publisher,
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.neoteq.com/logo512.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
};

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  serviceType?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceType || 'Technology Consulting',
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    areaServed: service.areaServed || 'Worldwide',
    description: service.description,
    name: service.name,
    url: service.url
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEOTEQ',
    url: 'https://www.neoteq.com',
    logo: 'https://www.neoteq.com/logo512.png',
    description: 'NEOTEQ delivers cutting-edge AI solutions, scalable infrastructure, and enterprise-grade software for digital transformation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gujarat',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@neoteq.com',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.linkedin.com/company/neoteq',
      'https://www.twitter.com/neoteq',
      'https://www.facebook.com/neoteq',
      'https://www.instagram.com/neoteq'
    ]
  };
};

export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

