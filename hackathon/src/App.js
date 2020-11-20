import React, { Component } from 'react';
import './App.css';
import Filters from './components/Filters'
import Footer from './components/Footer';
import RS from './components/RS';
import FavoriteCard from './components/FavoriteCard';
import GodCard from './components/GodCard';
import Data from './APIGods.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Filters />
        <Footer />
        <RS />
      </div>
    )
  }
}

export default App;
