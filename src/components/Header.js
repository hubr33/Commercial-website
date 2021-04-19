import React from "react";
import "../componentsStyles/Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="firmName">
        <h2>Tutaj logo / info </h2>
      </div>
      <div className="info">
        <div className="hours">
          <p>
            <strong>Pon-Pt:</strong> 8:00-16:00
          </p>
          <p>
            <strong>Sobota:</strong> 8:00-14:00
          </p>
          <p>
            <strong>Niedziela:</strong> Nieczynne
          </p>
        </div>
        <div className="navButtons">
          <NavLink className="navBtn" to="/">
            Start
          </NavLink>
          <NavLink className="navBtn" to="/company">
            O firmie
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
