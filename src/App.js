import React, { Component } from 'react';
import './App.css';
import Sitebar from './Components/Navbar';
import BoxHero from './Components/BoxHero';
import TextContent from './Components/TextContent';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Sitebar />
        <BoxHero />
        <TextContent />
        <Footer />
      </div>
    );
  }
}

export default App;