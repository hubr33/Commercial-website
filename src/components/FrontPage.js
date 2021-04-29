import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../componentsStyles/FrontPage.css";

export class FrontPage extends Component {
  state = {
    messages: ["Fachowa pomoc", "Nowe maszyny", "Gwarantowana satysfakcja"],
    phoneNumber: "",
    email: "",
    phoneNumbersArray: [],
    emailsArray: [],
    newsArray: [
      "Od miesiąca dostępna dla Was bardzo mocna glebogryzarka",
      "Zapraszamy do wynajmu wertykulatora, zabieg wertykulacji poprawi kondycję Twojego trawnika",
      "Kolejna Nowość do Waszej dyspozycji przecinarka spalinowa Husqvarna K770",
    ],
  };

  handleHideMessage = () => {
    const message = document.querySelector(".sentMessage");
    message.classList.remove("active");
  };

  handleShowMessage = () => {
    const message = document.querySelector(".sentMessage");
    message.classList.add("active");
    setTimeout(this.handleHideMessage, 5000);
  };

  handleError = (type) => {
    const phoneError = document.querySelector(".errorPhoneNumber");
    const emailError = document.querySelector(".errorEmail");
    const phoneID = document.getElementById("phoneID");
    const emailID = document.getElementById("emailID");
    if (this.state.phoneNumber.length === 9) {
      phoneError.classList.remove("active");
      this.handleShowMessage();
      this.setState(() =>
        this.state.phoneNumbersArray.push(this.state.phoneNumber)
      );
      phoneID.value = "";
    } else if (type === "phone") {
      phoneError.classList.add("active");
    }
    if (this.state.email.length > 5) {
      emailError.classList.remove("active");
      this.handleShowMessage();
      this.setState(() => this.state.emailsArray.push(this.state.email));
      emailID.value = "";
    } else if (type === "email") {
      emailError.classList.add("active");
    }
  };

  handleAddInfo = (type, e) => {
    if (type === "phone") {
      const number = e.target.value;
      this.setState({ phoneNumber: number });
    } else if (type === "email") {
      const email = e.target.value;
      this.setState({ email: email });
    }
  };

  render() {
    return (
      <>
        <main>
          <div className="sentMessage">
            <p>Wiadomość została pomyślnie wysłana!</p>
            <p>
              Skontaktujemy się z Państwem w jak{" "}
              <strong>najszybszym czasie</strong>.
            </p>
          </div>
          <div className="square">
            <h2>
              Wynajem sprzetu budowlanego <br />i ogrodniczego
            </h2>
            <button className="checkInfoBtn">
              <NavLink className="checkUs" to="/company">
                <p>O nas</p>
              </NavLink>
            </button>
          </div>
        </main>
        <div className="connectorsAndNews">
          <div className="building">
            <div className="buildingNote">
              <p>Wynajem sprzętu</p>
              <h2>Budowlanego</h2>
              {/* <button className="buildingBtn">Sprawdź</button> */}
              <NavLink to="/rentBuilding" className="buildingBtn">
                Sprawdź
              </NavLink>
            </div>
          </div>
          <div className="gardening">
            <div className="gardeningNote">
              <p>Wynajem sprzetu</p>
              <h2>Ogrodniczego</h2>
              {/* <button className="gardeningBtn">Sprawdź</button> */}
              <NavLink to="/rentGarden" className="gardeningBtn">
                Sprawdź
              </NavLink>
            </div>
          </div>
          <div className="news">
            <div className="newsHeader">
              <h2>Aktualności</h2>
            </div>
            <div className="newsNote">
              {this.state.newsArray.map((news) => (
                <div className="noteContainer" key={news}>
                  <p key={news}>{news}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="aboutCompany">
          <div className="contactUs">
            <div className="contactImg"></div>
            <div className="contactPanel">
              <p>Numer kontaktowy</p>
              <p>
                <i className="fas fa-mobile-alt"></i>883 003 799
              </p>

              <p>Adres e-mail</p>
              <p>
                <i className="far fa-envelope"></i>
                wypozyczalnia.plonsk@gmail.com
              </p>
            </div>
            <div className="contactInfo">
              {this.state.messages.map((message) => (
                <div key={message}>
                  <p key={message}></p>
                  {message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
