import React, { Component } from "react";
import "../componentsStyles/ItemsAll.css";
import einhellDrill from "../componentsStyles/einhellDrill.jpg";
import saw from "../componentsStyles/saw.jpg";
import hammer from "../componentsStyles/hammer.jpg";
import { RentButton } from "./RentButton";

export class BuildingItems extends Component {
  state = {
    time: new Date().toISOString().slice(0, 10),
    rentTimeFrom: "",
    rentTimeTo: "",
    selectedItem: "",
    buildingItems: [
      {
        id: 0,
        picture: einhellDrill,
        brand: "Einhell",
        item: "Wiertarka",
        about:
          "Wiertaka marki Einhell zapewni stabilną oraz szybką pracę, bez problemów!",
      },
      {
        id: 1,
        picture: saw,
        brand: "GardeTech",
        item: "Piła spalinowa",
        about:
          "Piła spalinowa marki GardeTech. Piła najwyższej jakości do trudnych zadań.",
      },
      {
        id: 2,
        picture: hammer,
        brand: "Makita",
        item: "Młot udarowy",
        about:
          "Młot udarowy marki Makita. Profesionalny sprzęt, który przebije najgrubszą warstwę.",
      },
    ],
  };

  handleOpenRent = (e) => {
    const orderBtn = document.querySelector(".buildRentButton");
    const shadow = document.querySelector(".buildingItemsShadow");
    shadow.classList.add("active");
    if (orderBtn) {
      const getID = e.target.parentElement.id;
      console.log(this.state.selectedItem);
      this.setState({ selectedItem: this.state.buildingItems[getID].item });
    } else {
      return null;
    }
  };

  handleCloseRent = () => {
    const error = document.querySelector(".errorFromToRent");
    const shadow = document.querySelector(".buildingItemsShadow");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    shadow.classList.remove("active");
    error.classList.remove("active");
    dateFrom.value = "";
    dateTo.value = "";
  };

  handleGetInputValue = () => {
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    this.setState({ rentTimeFrom: dateFrom.value, rentTimeTo: dateTo.value });
  };

  handleSubmitOrder = () => {
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const error = document.querySelector(".errorFromToRent");
    if ((this.state.rentTimeTo !== "") & (this.state.rentTimeFrom !== "")) {
      const shadow = document.querySelector(".buildingItemsShadow");
      shadow.classList.remove("active");
      error.classList.remove("active");
      this.setState({ rentTimeFrom: "", rentTimeTo: "" });
      dateFrom.value = "";
      dateTo.value = "";
    } else {
      error.classList.add("active");
    }
  };

  render() {
    return (
      <section className="buildingItems">
        <div className="buildingItemsShadow">
          <h2>Wynajem</h2>
          <div className="rentOptions">
            <button className="closeShadow" onClick={this.handleCloseRent}>
              Zamknij
            </button>
            <div className="rentItem">
              <h3>Wybrany przedmiot</h3>
              <p>{this.state.selectedItem}</p>
            </div>
            <div className="rentPeriod">
              <div className="rentFrom">
                <p>Wynajem od</p>
                <input
                  id="dateFrom"
                  onChange={this.handleGetInputValue}
                  type="date"
                  min={this.state.time}
                />
              </div>
              <div className="rentTo">
                <p>Wynajem do</p>
                <input
                  id="dateTo"
                  onChange={this.handleGetInputValue}
                  type="date"
                  min={this.state.time}
                />
              </div>
            </div>
            <p className="errorFromToRent">Wybierz date wynajmu</p>
            <button onClick={this.handleSubmitOrder} className="applyOrder">
              Złóż zamówienie
            </button>
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
                <div key={buildingItem} className="buildImg">
                  <img key={buildingItem} src={buildingItem.picture} alt="" />
                </div>
                <div key={buildingItem} className="buildText">
                  <p>
                    Marka <h4 key={buildingItem}>{buildingItem.brand}</h4>
                  </p>
                  <p>
                    Przedmiot <h4 key={buildingItem}>{buildingItem.item}</h4>
                  </p>
                  <p>
                    Opis <h4 key={buildingItem}>{buildingItem.about}</h4>
                  </p>
                </div>
                <RentButton click={this.handleOpenRent} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
