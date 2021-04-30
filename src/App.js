import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Page from "./components/Page";
import { Footer } from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Header />
        <Page />
        <Footer />
      </Router>
    );
  }
}

export default App;
