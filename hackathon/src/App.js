import React, { Component } from 'react';
import "./App.css";
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import Carousell from "./components/Carousell";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from './components/Footer';
import RS from './components/RS';
import Testit from './components/Testit';

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
      <Testit />
       <Footer />
       <RS />
    </ThemeProvider>
  );
}

export default App;
