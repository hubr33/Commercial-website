import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Page from "./components/Page";
import { Footer } from "./components/Footer";

class App extends Component {
  state = {
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toLocaleTimeString(),
  };

  getTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    setInterval(this.getTime, 1000);
    return (
      <Router>
        <Header date={this.state.date} time={this.state.time} />
        <Page />
        <Footer />
      </Router>
    );
  }
}

export default App;
