import React, { Component } from "react";
import "../componentsStyles/AboutCompany.css";

export class AboutCompany extends Component {
  state = {
    messages: ["Fachowa pomoc", "Solidne maszyny", "Pełna satysfakcja"],
    phoneNumber: "",
    email: "",
    phoneNumbersArray: [],
    emailsArray: [],
    newsArray: [
      "Nowy młot udarowy już w naszym asortymencie! Zachecamy do wynajmu.",
      "Nowa koparka pod wykop fundamentów już dostępna!",
      "Zniżki dla stałych klientów! O procencie zniżki zapytaj naszego sprzedawcę.",
    ],
  };

  handleError = (type) => {
    const phoneError = document.querySelector(".errorPhoneNumber");
    const emailError = document.querySelector(".errorEmail");
    if (type === "phone") {
      phoneError.classList.add("active");
    } else if (this.state.phoneNumber.length > 8) {
      phoneError.classList.remove("active");
    }
    if (type === "email") {
      emailError.classList.add("active");
    } else if (this.state.email.length > 5) {
      emailError.classList.remove("active");
    }
  };

  handleLength = (type) => {};

  render() {
    return (
      <>
        <main>
          <div className="square">
            <h2>
              Wynajem sprzetu budowlanego <br />
              oraz ogrodniczego
            </h2>
            <button className="checkInfoBtn">
              <p>Sprawdź nas!</p>
            </button>
          </div>
        </main>
        <div className="aboutCompany">
          <div className="contactUs">
            <div className="contactImg"></div>
            <div className="contactPanel">
              <p>
                Zostaw nam swój numer, <strong>oddzwonimy!</strong>
              </p>
              <input
                type="text"
                value={this.state.phoneNumber}
                placeholder="Wpisz swój numer telefonu"
              />
              <span className="errorPhoneNumber">
                Wpisz poprawnie numer telefonu
              </span>
              <button
                className="sendPhoneNumber"
                onClick={() => this.handleError("phone")}
              >
                Wyślij
              </button>
              <p>
                Zostaw nam swój e-mail, <strong>doradzimy!</strong>
              </p>
              <input
                type="text"
                value={this.state.email}
                placeholder="Wpisz swój adres e-mail"
              />
              <span className="errorEmail">Wpisz poprawnie adres e-mail</span>
              <button
                className="sendEmail"
                onClick={() => this.handleError("email")}
              >
                Wyślij
              </button>
            </div>
            <div className="contactInfo">
              {this.state.messages.map((message) => (
                <div>
                  <p></p>
                  {message}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="connectorsAndNews">
          <div className="building">
            <div className="buildingNote">
              <p>Wynajem sprzętu</p>
              <h2>Budowlanego</h2>
              <button className="buildingBtn">Sprawdź</button>
            </div>
          </div>
          <div className="gardening">
            <div className="gardeningNote">
              <p>Wynajem sprzetu</p>
              <h2>Ogrodniczego</h2>
              <button className="gardeningBtn">Sprawdź</button>
            </div>
          </div>
          <div className="news">
            <div className="newsHeader">
              <h2>Aktualności</h2>
            </div>
            <div className="newsNote">
              {this.state.newsArray.map((news) => (
                <div className="noteContainer">
                  <p>{news}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
