import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { blogPosts } from '../data/content';
import '../styles/InsightsPage.css';

const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const filteredPosts = selectedCategory 
    ? regularPosts.filter(post => post.category === selectedCategory)
    : regularPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const resources = [
    {
      id: 'whitepaper-ai',
      title: 'The Future of AI in Enterprise',
      type: 'Whitepaper',
      description: 'Comprehensive guide to implementing AI solutions in enterprise environments.',
      downloadLink: '#',
      icon: '📄'
    },
    {
      id: 'case-study-healthcare',
      title: 'Healthcare AI Transformation Case Study',
      type: 'Case Study',
      description: 'How we helped a leading healthcare provider reduce diagnostic errors by 42%.',
      downloadLink: '#',
      icon: '🏥'
    },
    {
      id: 'ebook-cloud',
      title: 'Cloud Migration Best Practices',
      type: 'eBook',
      description: 'Step-by-step guide to successful cloud migration and optimization.',
      downloadLink: '#',
      icon: '☁️'
    },
    {
      id: 'webinar-digital',
      title: 'Digital Transformation Webinar',
      type: 'Webinar',
      description: 'Watch our experts discuss strategies for successful digital transformation.',
      downloadLink: '#',
      icon: '🎥'
    }
  ];

  return (
    <div className="insights-page">
      <SEO
        title="Insights & Resources - Thought Leadership"
        description="Discover thought leadership content, industry insights, and resources to help you navigate the future of technology. Expert articles on AI, cloud computing, digital transformation, and more."
        keywords="technology insights, AI articles, cloud computing blog, digital transformation resources, technology thought leadership, software development guides"
        url="https://www.neoteq.com/insights"
        type="website"
      />
      
      <div className="insights-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights & <span className="highlight">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover thought leadership content, industry insights, and resources to help you navigate the future of technology.
          </motion.p>
        </div>
      </div>

      <div className="insights-content">
        <div className="container">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <ScrollReveal direction="up" delay={0.1}>
              <section className="featured-posts">
                <h2 className="section-title">
                  Featured <span className="highlight">Articles</span>
                </h2>
                <div className="featured-grid">
                  {featuredPosts.map((post) => (
                    <Link 
                      key={post.id} 
                      to={`/insights/${post.id}`}
                      className="post-card-link"
                    >
                      <GlassCard className="post-card" glowColor="#00E5FF">
                        <div className="post-image-placeholder">
                          <div className="post-image-content">
                            <span className="post-image-icon">📝</span>
                          </div>
                        </div>
                        <div className="post-content">
                          <span className="post-category">{post.category}</span>
                          <h3>{post.title}</h3>
                          <p className="post-excerpt">{post.excerpt}</p>
                          <div className="post-meta">
                            <span>{post.author}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <div className="post-date">{formatDate(post.date)}</div>
                        </div>
                      </GlassCard>
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          )}

          {/* Category Filter */}
          <ScrollReveal direction="up" delay={0.2}>
            <section className="blog-filter-section">
              <h2 className="section-title">
                All <span className="highlight">Articles</span>
              </h2>
              <div className="category-filters">
                <button
                  className={`category-filter ${selectedCategory === null ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Blog Posts Grid */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="posts-grid">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/insights/${post.id}`}
                  className="post-card-link"
                >
                  <GlassCard className="post-card" glowColor="#00B4D8">
                    <div className="post-image-placeholder">
                      <div className="post-image-content">
                        <span className="post-image-icon">📝</span>
                      </div>
                    </div>
                    <div className="post-content">
                      <span className="post-category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-meta">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="post-date">{formatDate(post.date)}</div>
                      <div className="read-more">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Resources Section */}
          <ScrollReveal direction="up" delay={0.4}>
            <section className="resources-section">
              <h2 className="section-title">
                Resources & <span className="highlight">Downloads</span>
              </h2>
              <div className="resources-grid">
                {resources.map((resource) => (
                  <GlassCard key={resource.id} className="resource-card" glowColor="#00E5FF">
                    <div className="resource-icon">{resource.icon}</div>
                    <div className="resource-type">{resource.type}</div>
                    <h3>{resource.title}</h3>
                    <p className="resource-description">{resource.description}</p>
                    <a 
                      href={resource.downloadLink} 
                      className="resource-download"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle download logic here
                      }}
                    >
                      Download
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </a>
                  </GlassCard>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
