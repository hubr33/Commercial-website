import React, { Component } from "react";
import "../componentsStyles/FrontPage.css";

export class FrontPage extends Component {
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
                id="phoneID"
                type="number"
                onChange={(e) => this.handleAddInfo("phone", e)}
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
                id="emailID"
                type="text"
                onChange={(e) => this.handleAddInfo("email", e)}
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
                <div key={message}>
                  <p key={message}></p>
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
                <div className="noteContainer" key={news}>
                  <p key={news}>{news}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
