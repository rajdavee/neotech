import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'NEOTEQ',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.neoteq.com';
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const defaultTitle = 'NEOTEQ - AI Solutions & Digital Transformation Services';
  const defaultDescription = 'NEOTEQ delivers cutting-edge AI solutions, scalable infrastructure, and enterprise-grade software. Specializing in digital transformation, cloud consulting, and intelligent automation for businesses worldwide.';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const pageTitle = title ? `${title} | ${defaultTitle.split(' - ')[0]}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image || defaultImage;
  const pageKeywords = keywords || 'AI solutions, digital transformation, cloud consulting, enterprise software, machine learning, automation, technology consulting';

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', pageTitle);
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', pageKeywords);

    // Open Graph tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    if (publishedTime) updateMetaTag('og:published_time', publishedTime, true);
    if (modifiedTime) updateMetaTag('og:modified_time', modifiedTime, true);
    if (section) updateMetaTag('og:section', section, true);
    if (tags.length > 0) {
      tags.forEach((tag, index) => {
        updateMetaTag(`og:tag${index > 0 ? `:${index}` : ''}`, tag, true);
      });
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);
    updateMetaTag('twitter:url', currentUrl);

    // Article meta tags
    if (type === 'article') {
      if (author) updateMetaTag('article:author', author, true);
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (section) updateMetaTag('article:section', section, true);
      tags.forEach((tag) => {
        const tagMeta = document.createElement('meta');
        tagMeta.setAttribute('property', 'article:tag');
        tagMeta.setAttribute('content', tag);
        document.head.appendChild(tagMeta);
      });
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo-dynamic]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-dynamic', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [
    pageTitle,
    pageDescription,
    pageImage,
    pageKeywords,
    currentUrl,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    structuredData
  ]);

  return null;
};

export default SEO;

