import React, { Component } from 'react';
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
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <section className="hero">
            {<Hero />}
          </section>
          <section className="about">
            {<About />}
          </section>
          <section className="gallery">
            {<Gallery />}
          </section>
          <section className="contact">
            {<Contact />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    );
  }
}

export default App;
