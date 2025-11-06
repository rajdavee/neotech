import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { generateArticleStructuredData } from '../utils/structuredData';
import { blogPosts } from '../data/content';
import '../styles/BlogPost.css';

const BlogPost: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  
  const blogPost = useMemo(() => {
    return blogPosts.find(post => post.id === blogId);
  }, [blogId]);

  const seoData = useMemo(() => {
    if (!blogPost) return null;
    
    return {
      title: blogPost.title,
      description: blogPost.excerpt,
      keywords: `${blogPost.category}, ${blogPost.category.toLowerCase()}, technology blog, industry insights, ${blogPost.title.toLowerCase()}`,
      type: 'article',
      author: blogPost.author,
      publishedTime: blogPost.date,
      section: blogPost.category,
      tags: [blogPost.category, 'Technology', 'Digital Transformation'],
      structuredData: generateArticleStructuredData({
        headline: blogPost.title,
        description: blogPost.excerpt,
        datePublished: blogPost.date,
        author: blogPost.author,
        publisher: 'NEOTEQ',
        url: `https://www.neoteq.com/insights/${blogId}`
      })
    };
  }, [blogPost, blogId]);

  return (
    <div className="blog-post">
      {seoData ? (
        <SEO
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          url={`https://www.neoteq.com/insights/${blogId}`}
          type={seoData.type}
          author={seoData.author}
          publishedTime={seoData.publishedTime}
          section={seoData.section}
          tags={seoData.tags}
          structuredData={seoData.structuredData}
        />
      ) : (
        <SEO
          title="Blog Post Not Found"
          description="The requested blog post could not be found."
          url="https://www.neoteq.com/insights/not-found"
        />
      )}
      
      <div className="container">
        {blogPost ? (
          <>
            <h1>{blogPost.title}</h1>
            <div className="blog-meta">
              <span>By {blogPost.author}</span>
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              <span>{blogPost.readTime}</span>
              <span>{blogPost.category}</span>
            </div>
            <div className="blog-content">
              <p>{blogPost.excerpt}</p>
              <p>Full blog post content coming soon...</p>
            </div>
          </>
        ) : (
          <>
            <h1>Blog Post Not Found</h1>
            <p>The requested blog post could not be found.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
