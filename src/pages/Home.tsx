import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProblemStatement from '../components/ProblemStatement';
import Services from '../components/Services';
import About from '../components/About';
import IndustrySlider from '../components/IndustrySlider';
import RequestDemo from '../components/RequestDemo';
import Contact from '../components/Contact';
// import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <ProductShowcase />
      <ProblemStatement />
      <Services />
      <About />
      <IndustrySlider />
      <RequestDemo />
      <Contact />
    </div>
  );
};

export default Home;