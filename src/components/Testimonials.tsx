import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp Inc",
    testimonial: "Neoteq transformed our digital infrastructure completely. Their expertise in cloud migration and AI implementation has driven significant business growth for us. The team's professionalism and technical excellence exceeded our expectations.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Digital Director",
    company: "RetailPro",
    testimonial: "The e-commerce solution developed by Neoteq increased our online sales by 200%. Their attention to user experience and technical excellence is outstanding. We couldn't be happier with the results.",
    rating: 5,
    image: "👨‍💻"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "VP Technology",
    company: "FinanceFlow",
    testimonial: "Neoteq's team augmentation services provided us with world-class developers who seamlessly integrated with our team and delivered exceptional results. Highly recommended for any tech project.",
    rating: 5,
    image: "👩‍🔬"
  },
  {
    id: "4",
    name: "David Park",
    position: "CEO",
    company: "HealthTech Solutions",
    testimonial: "Working with Neoteq on our healthcare platform was a game-changer. Their understanding of HIPAA compliance and healthcare technology helped us launch successfully in record time.",
    rating: 5,
    image: "👨‍⚕️"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    position: "Head of Operations",
    company: "E-Commerce Plus",
    testimonial: "The GPU computing solutions provided by Neoteq revolutionized our data processing capabilities. Their expertise in CUDA optimization delivered performance improvements we never thought possible.",
    rating: 5,
    image: "👩‍💼"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from the businesses we've helped transform with our technology solutions</p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{currentTestimonial.testimonial}</p>
              
              <div className="testimonial-rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{currentTestimonial.image}</div>
                <div className="author-info">
                  <h4>{currentTestimonial.name}</h4>
                  <p>{currentTestimonial.position}, {currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button className="control-btn prev-btn" onClick={prevSlide}>
              <span>‹</span>
            </button>
            <button className="control-btn next-btn" onClick={nextSlide}>
              <span>›</span>
            </button>
          </div>

          <div className="testimonials-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Success Stories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


