import React, { Component } from "react";
import "../componentsStyles/ItemsAll.css";
import scythe from "../componentsStyles/scythe.jpg";
import mower from "../componentsStyles/mower.jpg";
import scissors from "../componentsStyles/scissors.jpg";
import { RentButton } from "./RentButton";

export class GardenItems extends Component {
  state = {
    time: new Date().toISOString().slice(0, 10),
    rentTimeFrom: "",
    rentTimeTo: "",
    selectedItem: "",
    gardenItems: [
      {
        id: 0,
        picture: scythe,
        brand: "OLEO-MAC",
        item: "Kosa spalinowa",
        about:
          "Kosa spalinowa marki OLEO-MAC zapewni szybką i efektowną pracę nad Twoim trawnikiem!",
      },
      {
        id: 1,
        picture: mower,
        brand: "Stihl",
        item: "Kosiarka spalinowa",
        about:
          "Kosiarka spalinowa Marki Stihl, dla której żaden trawnik to nie problem.",
      },
      {
        id: 2,
        picture: scissors,
        brand: "Extech",
        item: "Nożyce elektryczne",
        about:
          "Nożycze elektryczne marki Extech, dla których grube gałęzie (do 1.2cm) zostaną ścięte.",
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
      this.setState({ selectedItem: this.state.gardenItems[getID].item });
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
          <h2>Nasz sprzęt ogrodniczy</h2>
          <div className="buildItemContainer">
            {this.state.gardenItems.map((gardenItem) => (
              <div
                key={gardenItem}
                id={gardenItem.id}
                className="buildItemCreate"
              >
                <div className="buildImg">
                  <img src={gardenItem.picture} alt="" />
                </div>
                <div className="buildText">
                  <p>
                    Marka <h4>{gardenItem.brand}</h4>
                  </p>
                  <p>
                    Przedmiot <h4>{gardenItem.item}</h4>
                  </p>
                  <p>
                    Opis <h4>{gardenItem.about}</h4>
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
