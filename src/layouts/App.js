import React, { Component } from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section'
import '../css/App.css';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <ScrollingProvider>
        <div className="app">
          <Section id="home" className="heroSection">
            {<Hero />}
          </Section>
          <main>
            <Section id="about" className="aboutSection">
              {<About />}
            </Section>
            <Section id="gallery" className="gallerySection">
              {<Gallery />}
            </Section>
            <Section id="contact" className="contactSection">
              {<Contact />}
            </Section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </ScrollingProvider>
    );
  }
}

export default App;
