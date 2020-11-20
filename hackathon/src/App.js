import React, { Component } from 'react';
import "./App.css";
import RS from './components/RS';
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";
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
      <Footer />
      <RS />
    </ThemeProvider>
  );
}

export default App;
