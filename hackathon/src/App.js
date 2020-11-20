import React, { Component } from "react";
import "./App.css";
import RS from "./components/RS";
import Filters from "./components/Filters";
import NavBar from "./components/NavBar";
import Carousell from "./components/Carousell";
import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Testit from "./components/Testit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FavoriteCard from "./components/FavoriteCard";

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
      <Router>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route path="/howitworks">
            <Testit />
            <Footer />
          </Route>
          <Route path="/Favorites">
            <FavoriteCard />
          </Route>
          <Route exact path="/">
            <Carousell />
            <Filters />
            <Footer />
            <RS />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
