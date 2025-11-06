import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductShowcase from '../components/ProductShowcase';
import ProblemStatement from '../components/ProblemStatement';
import ServicesSlider from '../components/ServicesSlider';
import About from '../components/About';
import TechnologyShowcase from '../components/TechnologyShowcase';
import AIFirstApproach from '../components/AIFirstApproach';
import DetailedTestimonials from '../components/DetailedTestimonials';
import WhyNeoTeq from '../components/WhyNeoTeq';
import IndustrySlider from '../components/IndustrySlider';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import EnhancedCTA from '../components/EnhancedCTA';
import RequestDemo from '../components/RequestDemo';
import Contact from '../components/Contact';
import GPUCircuitDivider from '../components/GPUCircuitDivider';
import ScrollReveal from '../components/ScrollReveal';
import GlowingOrb from '../components/GlowingOrb';
import { ParallaxSection } from '../components/AnimationUtils';
import { ParticleBackground } from '../components/AdvancedAnimations';
import SEO from '../components/SEO';
import '../styles/Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    // Ensure page scrolls to top when Home component mounts
    window.scrollTo(0, 0);
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div className="home">
      <SEO
        title="Home - AI Solutions & Digital Transformation"
        description="NEOTEQ delivers cutting-edge AI solutions, scalable infrastructure, and enterprise-grade software. Transform your business with our expertise in digital transformation, cloud consulting, and intelligent automation."
        keywords="AI solutions, digital transformation, enterprise software, cloud consulting, machine learning, automation, technology services, scalable infrastructure"
        url="https://www.neoteq.com/"
      />
      
      {/* Background Effects */}
      <GlowingOrb size={400} color="#00E5FF" intensity="low" position="top-right" />
      <GlowingOrb size={300} color="#00FFFF" intensity="low" position="bottom-left" />
      <ParticleBackground particleCount={60} speed={0.5} color="rgba(0, 229, 255, 0.15)" />
      
      {/* Hero Section */}
      <Hero />
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Stats Section with Parallax */}
      <ParallaxSection speed={0.3} direction="down">
        <ScrollReveal direction="zoom" delay={0.1} duration={0.8}>
          <Stats />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Product Showcase with Enhanced Animation */}
      <ScrollReveal direction="fade" delay={0.2} duration={0.8}>
        <ProductShowcase />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Problem Statement with Parallax */}
      <ParallaxSection speed={0.2} direction="up">
        <ScrollReveal direction="left" delay={0.1} duration={0.7}>
          <ProblemStatement />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Services Section - Slider */}
      <ScrollReveal direction="up" delay={0.2} duration={0.8}>
        <ServicesSlider />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* About Section with Parallax */}
      <ParallaxSection speed={0.25} direction="down">
        <ScrollReveal direction="fade" delay={0.1} duration={0.7}>
          <About />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Technology Showcase with Parallax */}
      <ParallaxSection speed={0.2} direction="up">
        <div style={{ opacity: 1, visibility: 'visible' }}>
          <TechnologyShowcase />
        </div>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* AI First Approach */}
      <ScrollReveal direction="up" delay={0.2} duration={0.8}>
        <AIFirstApproach />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Detailed Testimonials - Already has stagger animations */}
      <ParallaxSection speed={0.15} direction="down">
        <ScrollReveal direction="fade" delay={0.1} duration={0.8}>
          <DetailedTestimonials />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Why NeoTeq - Already has animated counters */}
      <ScrollReveal direction="zoom" delay={0.2} duration={0.8}>
        <WhyNeoTeq />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Industry Slider */}
      <ParallaxSection speed={0.2} direction="up">
        <ScrollReveal direction="left" delay={0.1} duration={0.7}>
          <IndustrySlider />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Testimonials Carousel */}
      <ScrollReveal direction="fade" delay={0.2} duration={0.8}>
        <TestimonialsCarousel />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Enhanced CTA - Already has enhanced animations */}
      <ParallaxSection speed={0.15} direction="down">
        <ScrollReveal direction="zoom" delay={0.1} duration={0.8}>
          <EnhancedCTA />
        </ScrollReveal>
      </ParallaxSection>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Request Demo */}
      <ScrollReveal direction="up" delay={0.2} duration={0.7}>
        <RequestDemo />
      </ScrollReveal>
      
      <GPUCircuitDivider animated={true} color="rgba(255, 255, 255, 0.3)" />
      
      {/* Contact Section */}
      <ParallaxSection speed={0.2} direction="up">
        <ScrollReveal direction="fade" delay={0.1} duration={0.8}>
          <Contact />
        </ScrollReveal>
      </ParallaxSection>
    </div>
  );
};

export default Home;