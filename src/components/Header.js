import React, { Component } from "react";
import "../componentsStyles/Header.css";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  state = {
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toLocaleTimeString(),
  };

  getTime = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    setInterval(this.getTime, 500);
    return (
      <header>
        <div className="firmName">
          <h2>Rent-Bud-Garden </h2>
          <h3>Wypożyczalnia sprzętu budowlanego i ogrodniczego</h3>
        </div>
        <div className="info">
          <div className="hours">
            <p>
              <strong>Pon-Pt:</strong> 6:00-21:00
            </p>
            <p>
              <strong>Sobota:</strong> 6:00-21:00
            </p>
            <p>
              <strong>Niedziela:</strong> Nieczynne
            </p>
            <p className="currentDate">
              <p>{this.state.time}</p>
              <p>{this.state.date}</p>
            </p>
          </div>
          <div className="navButtons">
            <NavLink className="navBtn" to="/">
              Start
            </NavLink>
            <NavLink className="navBtn" to="/company">
              O nas
            </NavLink>
            <NavLink className="navBtn" to="/rent">
              Wynajem
            </NavLink>
            <NavLink className="navBtn" to="/contact">
              Kontakt
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}
