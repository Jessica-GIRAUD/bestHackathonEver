import React, { Component } from 'react';
import './App.css';
import Filters from './components/Filters'
import Footer from './components/Footer';
import RS from './components/RS';
import Testit from './components/work';

class App extends Component {
  render() {
    return (
      <div>
        <Filters />
        <Testit />
        <Footer />
        <RS />
      </div>
    )
  }
}

export default App;
