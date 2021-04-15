import React from "react";
import "../componentsStyles/Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="pageRights">
        <p>Copyright by "Firma budowlana"</p>
      </div>
      <div className="footerLinks">
        <div className="navButtons">
          <NavLink className="navBtn" to="/">
            O firmie
          </NavLink>
          <NavLink className="navBtn" to="/rent">
            Wynajem
          </NavLink>
          <NavLink className="navBtn" to="/equip">
            Nasz sprzęt
          </NavLink>
          <NavLink className="navBtn" to="/contact">
            Kontakt
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
