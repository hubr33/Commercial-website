import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../componentsStyles/Renting.css";

export class Renting extends Component {
  state = {};
  render() {
    return (
      <section className="renting">
        <div className="buildChoose">
          <div className="buildChooseContainer">
            <h2>Sprzęt budowlany</h2>
            <NavLink to="/rentBuilding" className="buildChooseBtn">
              Wybierz
            </NavLink>
          </div>
        </div>
        <div className="gardenChoose">
          <div className="gardenChooseContainer">
            <h2>Sprzęt ogrodniczy</h2>
            <button className="gardenChooseBtn">Wybierz</button>
          </div>
        </div>
      </section>
    );
  }
}
