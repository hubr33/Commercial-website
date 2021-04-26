import React, { Component } from "react";
import "../componentsStyles/Contact.css";

export class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact">
        <h2>Kontakt do RENT-BUD-GARDEN</h2>
        <div className="allContacts">
          <div className="facebookContact">
            <i class="fab fa-facebook-square"></i>
            <a
              href="https://www.facebook.com/RentBudGarden/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Facebook - klik!
            </a>
          </div>
          <div className="phoneContact">
            <i class="fas fa-phone-square"></i>Numer telefonu: 883 003 799 -
            Krzysztof Piotrowski
          </div>
          <div className="emailContact">
            <i class="fas fa-envelope-square"></i>
            Adres e-mail: wypozyczalnia.plonsk@gmail.com
          </div>
          <div className="addressLocation">
            <i class="fas fa-map-marker-alt"></i>
            Adres: Potyry 25, 09-152, Naruszewo
          </div>
        </div>
      </section>
    );
  }
}
