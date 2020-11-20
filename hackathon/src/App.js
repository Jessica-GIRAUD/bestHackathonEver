<<<<<<< HEAD
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
=======
import "./App.css";
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import Carousell from "./components/Carousell";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        root: {
          justifyContent: "space-between",
        },
        gutters: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Carousell />
      <Filters />
    </ThemeProvider>
  );
>>>>>>> 0f64cd162d266111fcbb98257997789770972654
}

export default App;
