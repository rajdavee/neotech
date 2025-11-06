import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import '../styles/TestimonialsCarousel.css';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
  industry: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'CTO',
      company: 'HealthTech Solutions',
      content: 'NEOTEQ transformed our diagnostic platform with cutting-edge AI. The reduction in diagnostic errors exceeded our expectations, and the team\'s expertise in healthcare technology was exceptional. The platform now processes thousands of scans daily with remarkable accuracy.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      role: 'VP of Engineering',
      company: 'FinTech Innovations',
      content: 'Working with NEOTEQ was a game-changer. Their payment processing system handles over a million transactions daily with 99.99% uptime. The microservices architecture they built scales seamlessly, and we\'ve seen a 60% reduction in processing time.',
      rating: 5,
      industry: 'FinTech'
    },
    {
      id: '3',
      name: 'Emily Chen',
      role: 'Digital Transformation Lead',
      company: 'Retail Dynamics',
      content: 'The omnichannel e-commerce platform NEOTEQ developed unified our entire retail operation. Online sales increased by 85%, and customer satisfaction ratings reached 4.8/5. Their understanding of retail technology and customer experience is outstanding.',
      rating: 5,
      industry: 'Retail'
    },
    {
      id: '4',
      name: 'Michael Thompson',
      role: 'Head of Data Science',
      company: 'AI Research Labs',
      content: 'NEOTEQ\'s GPU optimization solution reduced our ML training time from weeks to hours. The 50x performance improvement enabled us to experiment with larger models and reduced infrastructure costs by 70%. Their expertise in GPU computing is unmatched.',
      rating: 5,
      industry: 'Technology'
    },
    {
      id: '5',
      name: 'Dr. Priya Sharma',
      role: 'Academic Director',
      company: 'EduTech University',
      content: 'The Learning Management System NEOTEQ built supports 50,000+ students seamlessly. Student engagement increased by 45%, and we achieved 99.5% uptime during peak remote learning periods. The platform\'s mobile capabilities are exceptional.',
      rating: 5,
      industry: 'Education'
    },
    {
      id: '6',
      name: 'David Williams',
      role: 'Operations Director',
      company: 'Supply Chain Pro',
      content: 'NEOTEQ\'s retail analytics platform revolutionized our inventory management. We reduced costs by 30% and improved stock availability from 85% to 98%. Their predictive analytics capabilities provided insights we didn\'t even know were possible.',
      rating: 5,
      industry: 'Retail'
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(interval);
  }, [paginate]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Our <span className="highlight">Clients Say</span>
          </h2>
          <p className="testimonials-subtitle">
            Trusted by industry leaders who've transformed their operations
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="testimonial-slide"
            >
              <GlassCard className="testimonial-card" glowColor="#00E5FF">
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-author-info">
                      <div className="testimonial-avatar">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="testimonial-details">
                        <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
                        <p className="testimonial-role">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                        <span className="testimonial-industry">{testimonials[currentIndex].industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <button
            className="carousel-button carousel-button-prev"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="carousel-button carousel-button-next"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1;
                paginate(newDirection);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

