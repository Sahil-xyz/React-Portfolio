import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
      <Footer />
    </div>
  );
};

export default Main;
