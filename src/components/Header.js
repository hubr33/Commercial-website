import React from "react";
import "../componentsStyles/Header.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
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
          <p>
            <p>{props.time}</p>
            <p>{props.date}</p>
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
};
