import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/content';
import '../styles/BlogPost.css';

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post.category).slice(0, 3);

  return (
    <div className="blog-post">
      {/* Hero Section */}
      <section className="post-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/insights">Insights</Link>
              <span>/</span>
              <span>{post.title}</span>
            </div>
            <div className="post-meta">
              <span className="category">{post.category}</span>
              {post.featured && <span className="featured-badge">Featured</span>}
            </div>
            <h1>{post.title}</h1>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-details">
              <div className="author-info">
                <div className="author-avatar">👤</div>
                <div className="author-text">
                  <span className="author-name">{post.author}</span>
                  <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="post-stats">
                <span className="read-time">{post.readTime}</span>
                <span className="views">2.5K views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="content-layout">
            <article className="main-content">
              <div className="article-body">
                {/* Sample article content based on the post */}
                {post.id === 'ai-transformation-2024' && (
                  <>
                    <h2>The AI Revolution is Here</h2>
                    <p>
                      Artificial Intelligence is no longer a futuristic concept—it's transforming businesses
                      across every industry today. From automating routine tasks to providing deep insights
                      through advanced analytics, AI is reshaping how organizations operate and compete.
                    </p>
                    
                    <h3>Key AI Trends for 2024</h3>
                    <ul>
                      <li><strong>Generative AI Integration:</strong> Beyond chatbots, generative AI is being integrated into core business processes</li>
                      <li><strong>AI-Powered Decision Making:</strong> Real-time analytics and predictive models are driving strategic decisions</li>
                      <li><strong>Ethical AI Implementation:</strong> Organizations are prioritizing responsible AI development and deployment</li>
                      <li><strong>Industry-Specific Solutions:</strong> Tailored AI applications for healthcare, finance, manufacturing, and more</li>
                    </ul>
                    
                    <h3>Implementation Strategies</h3>
                    <p>
                      Successful AI transformation requires a strategic approach. Organizations should start
                      with clear objectives, invest in data infrastructure, and ensure their teams are
                      prepared for the changes ahead. The key is to begin with pilot projects that
                      demonstrate value while building capabilities for larger-scale implementations.
                    </p>
                    
                    <blockquote>
                      "AI is not about replacing humans, but about augmenting human capabilities to achieve
                      better outcomes and drive innovation."
                    </blockquote>
                    
                    <h3>Getting Started</h3>
                    <p>
                      If you're considering AI transformation for your organization, start by identifying
                      specific use cases where AI can provide immediate value. Focus on areas with
                      well-defined processes and quality data. Partner with experienced AI implementation
                      teams to ensure successful deployment and adoption.
                    </p>
                  </>
                )}
                
                {post.id === 'cloud-security-best-practices' && (
                  <>
                    <h2>Cloud Security Fundamentals</h2>
                    <p>
                      As organizations increasingly migrate to cloud environments, security becomes more
                      critical than ever. Cloud security requires a different approach than traditional
                      on-premises security, with shared responsibility models and new threat vectors to consider.
                    </p>
                    
                    <h3>Essential Security Measures</h3>
                    <ol>
                      <li><strong>Identity and Access Management (IAM):</strong> Implement robust authentication and authorization</li>
                      <li><strong>Data Encryption:</strong> Protect data both in transit and at rest</li>
                      <li><strong>Network Security:</strong> Use VPCs, firewalls, and network monitoring</li>
                      <li><strong>Compliance Monitoring:</strong> Ensure adherence to industry standards</li>
                    </ol>
                    
                    <p>
                      Regular security assessments and continuous monitoring are essential for maintaining
                      a secure cloud environment. Organizations should also invest in security training
                      for their teams and establish incident response procedures.
                    </p>
                  </>
                )}
                
                {post.id === 'agile-development-guide' && (
                  <>
                    <h2>Agile Development Methodology</h2>
                    <p>
                      Agile development has become the standard for modern software development, enabling
                      teams to deliver value faster while adapting to changing requirements. This comprehensive
                      guide covers the key principles and practices of agile development.
                    </p>
                    
                    <h3>Core Agile Principles</h3>
                    <ul>
                      <li>Individuals and interactions over processes and tools</li>
                      <li>Working software over comprehensive documentation</li>
                      <li>Customer collaboration over contract negotiation</li>
                      <li>Responding to change over following a plan</li>
                    </ul>
                    
                    <p>
                      Successful agile implementation requires commitment from the entire organization,
                      not just development teams. It's about creating a culture of collaboration,
                      continuous improvement, and customer focus.
                    </p>
                  </>
                )}
                
                {/* Default content for other posts */}
                {!['ai-transformation-2024', 'cloud-security-best-practices', 'agile-development-guide'].includes(post.id) && (
                  <>
                    <p>
                      This is a comprehensive article about {post.title.toLowerCase()}. The content explores
                      various aspects of this topic, providing insights and actionable recommendations
                      for businesses looking to implement these strategies.
                    </p>
                    
                    <h2>Key Takeaways</h2>
                    <p>
                      Understanding the implications and opportunities presented by modern technology
                      is crucial for business success. This article provides detailed analysis and
                      practical guidance for implementation.
                    </p>
                  </>
                )}
              </div>
              
              <div className="article-actions">
                <div className="social-sharing">
                  <h4>Share this article</h4>
                  <div className="share-buttons">
                    <button className="share-btn twitter">🐦 Twitter</button>
                    <button className="share-btn linkedin">🔗 LinkedIn</button>
                    <button className="share-btn facebook">📱 Facebook</button>
                  </div>
                </div>
                
                <div className="article-tags">
                  <h4>Tags</h4>
                  <div className="tags">
                    <span className="tag">{post.category}</span>
                    <span className="tag">Technology</span>
                    <span className="tag">Innovation</span>
                  </div>
                </div>
              </div>
            </article>
            
            <aside className="sidebar">
              <div className="author-bio">
                <div className="author-avatar">👤</div>
                <div className="bio-content">
                  <h3>{post.author}</h3>
                  <p>
                    Technology expert and thought leader with extensive experience in digital
                    transformation and innovative solutions.
                  </p>
                </div>
              </div>
              
              <div className="table-of-contents">
                <h3>In this article</h3>
                <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#key-concepts">Key Concepts</a></li>
                  <li><a href="#implementation">Implementation</a></li>
                  <li><a href="#conclusion">Conclusion</a></li>
                </ul>
              </div>
              
              <div className="newsletter-subscribe">
                <h3>Stay Updated</h3>
                <p>Get the latest insights delivered to your inbox.</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <div className="section-header">
              <h2>Related Articles</h2>
              <p>Continue exploring {post.category.toLowerCase()} topics</p>
            </div>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/insights/${relatedPost.id}`}
                  className="related-post-card"
                >
                  <div className="post-category">{relatedPost.category}</div>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                  <div className="post-meta">
                    <span>{relatedPost.author}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="post-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Implement These Ideas?</h2>
            <p>Let's discuss how we can help you apply these insights to your business</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Get In Touch</Link>
              <Link to="/insights" className="cta-button secondary">More Articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;