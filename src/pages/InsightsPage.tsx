import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/content';
import '../styles/InsightsPage.css';

const InsightsPage: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="insights-page">
      {/* Hero Section */}
      <section className="insights-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Insights & Resources</h1>
            <p>
              Stay ahead of the technology curve with our expert insights, industry trends,
              and thought leadership content. Discover the latest innovations and best practices
              that can transform your business.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="number">{blogPosts.length}+</span>
                <span className="label">Articles Published</span>
              </div>
              <div className="hero-stat">
                <span className="number">{categories.length}</span>
                <span className="label">Topic Categories</span>
              </div>
              <div className="hero-stat">
                <span className="number">50K+</span>
                <span className="label">Monthly Readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-posts">
          <div className="container">
            <div className="section-header">
              <h2>Featured Articles</h2>
              <p>Our most popular and impactful content</p>
            </div>
            <div className="featured-posts-grid">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/insights/${post.id}`}
                  className="featured-post-card"
                >
                  <div className="post-image">
                    <div className="category-badge">{post.category}</div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="author">{post.author}</span>
                      <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="read-more">Read Full Article →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Find content that matches your interests and expertise</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => {
              const categoryPosts = blogPosts.filter(post => post.category === category);
              return (
                <div key={category} className="category-card">
                  <div className="category-icon">📚</div>
                  <h3>{category}</h3>
                  <p>{categoryPosts.length} articles available</p>
                  <div className="category-preview">
                    {categoryPosts.slice(0, 2).map((post) => (
                      <Link
                        key={post.id}
                        to={`/insights/${post.id}`}
                        className="preview-link"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="all-posts">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Explore our complete collection of insights and resources</p>
          </div>
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/insights/${post.id}`}
                className="post-card"
              >
                <div className="post-image">
                  <div className="category-badge">{post.category}</div>
                  {post.featured && <div className="featured-badge">Featured</div>}
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="author">{post.author}</span>
                    <span className="separator">•</span>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="separator">•</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>
                Subscribe to our newsletter and get the latest insights, trends, and expert
                advice delivered straight to your inbox.
              </p>
            </div>
            <div className="newsletter-form">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </div>
                <p className="form-note">
                  No spam, unsubscribe at any time. Read our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="related-resources">
        <div className="container">
          <div className="section-header">
            <h2>Additional Resources</h2>
            <p>Explore more ways to learn and stay informed</p>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📊</div>
              <h3>Case Studies</h3>
              <p>Real-world examples of successful digital transformation projects</p>
              <Link to="/case-studies" className="resource-link">View Case Studies →</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3>Whitepapers</h3>
              <p>In-depth research and analysis on emerging technology trends</p>
              <Link to="/whitepapers" className="resource-link">Download Papers →</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🎥</div>
              <h3>Webinars</h3>
              <p>Live and recorded sessions with industry experts and thought leaders</p>
              <Link to="/webinars" className="resource-link">Watch Webinars →</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">📱</div>
              <h3>Podcasts</h3>
              <p>Listen to conversations about technology, innovation, and business</p>
              <Link to="/podcasts" className="resource-link">Listen Now →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;