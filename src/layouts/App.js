import React, { Component } from 'react';
import { ScrollingProvider, Section } from 'react-scroll-section'
import '../css/App.css';
import Header from './Header';
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
          <header>
            {<Header />}
          </header>
          <Section id="home" className="hero">
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
