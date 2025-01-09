import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { ParallaxProvider } from './components/ParallaxProvider';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </ParallaxProvider>
  );
}

export default App;
