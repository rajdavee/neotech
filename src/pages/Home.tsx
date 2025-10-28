import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import IndustrySlider from '../components/IndustrySlider';
import Contact from '../components/Contact';
// import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <About />
      <IndustrySlider />
      <Contact />
    </div>
  );
};

export default Home;