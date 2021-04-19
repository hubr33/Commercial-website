import React, { Component } from "react";
import "../componentsStyles/BuildingItems.css";
import einhellDrill from "../componentsStyles/einhellDrill.jpg";
import { RentButton } from "./RentButton";

export class BuildingItems extends Component {
  state = {
    buildingItems: [
      {
        id: 0,
        picture: einhellDrill,
        brand: "Einhell",
        item: "Wiertarka",
        about:
          "Wiertaka marki Einhell zapewni stabilną i szybką pracę, bez problemów!",
      },
      {
        id: 1,
        picture: einhellDrill,
        brand: "Einhell",
        item: "Wiertarka",
        about:
          "Wiertaka marki Einhell zapewni stabilną i szybką pracę, bez problemów!",
      },
      {
        id: 2,
        picture: einhellDrill,
        brand: "Einhell",
        item: "Wiertarka",
        about:
          "Wiertaka marki Einhell zapewni stabilną i szybką pracę, bez problemów!",
      },
    ],
  };

  handleOpenRent = () => {
    const shadow = document.querySelector(".buildingItemsShadow");
    shadow.classList.toggle("active");
  };
  render() {
    return (
      <section className="buildingItems">
        <div className="buildingItemsShadow">
          <h2>Wynajem</h2>
          <div className="rentOptions">
            <button className="closeShadow" onClick={this.handleOpenRent}>
              Zamknij
            </button>
            <div className="rentItem">
              <h3>Wybrany przedmiot</h3>
              <p>Www</p>
            </div>
            <div className="rentPeriod">
              <div className="rentFrom">
                <p>Wynajem od</p>
                <input type="date" />
              </div>
              <div className="rentTo">
                <p>Wynajem do</p>
                <input type="date" />
              </div>
            </div>
            <button className="applyOrder">Złóż zamówienie</button>
          </div>
        </div>
        <div className="buildingItemsContainer">
          <h2>Nasz sprzęt budowlany</h2>
          <div className="buildItemContainer">
            {this.state.buildingItems.map((buildingItem) => (
              <div
                key={buildingItem}
                id={buildingItem.id}
                className="buildItemCreate"
              >
                <div className="buildImg">
                  <img src={buildingItem.picture} alt="" />
                </div>
                <div className="buildText">
                  <p>
                    Marka <h4>{buildingItem.brand}</h4>
                  </p>
                  <p>
                    Przedmiot <h4>{buildingItem.item}</h4>
                  </p>
                  <p>
                    Opis <h4>{buildingItem.about}</h4>
                  </p>
                </div>
                <div className="buildRentArea">
                  <RentButton click={this.handleOpenRent} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
