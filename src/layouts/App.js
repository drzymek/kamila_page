import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import Hero from './Hero';
import Page from './Page';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main>
            <section className="hero">
              {<Hero />}
            </section>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
