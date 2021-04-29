import React, { Component } from "react";
import "../componentsStyles/Contact.css";

export class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact">
        <h2>Kontakt</h2>
        <div className="allContacts">
          <div className="facebookContact">
            <i className="fab fa-facebook-square"></i>
            <a
              href="https://www.facebook.com/RentBudGarden/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Facebook - klik!
            </a>
          </div>
          <div className="phoneContact">
            <i className="fas fa-phone-square"></i>Telefon: 883 003 799 -
            Krzysztof
          </div>
          <div className="emailContact">
            <i classNames="fas fa-envelope-square"></i>E-mail:
            wypozyczalnia.plonsk@gmail.com
          </div>
          <div className="addressLocation">
            <i className="fas fa-map-marker-alt"></i> Adres: Potyry 25, gm.
            Naruszewo
          </div>
          <div className="googleContact">
            <i className="fab fa-google"></i>
            <a href="https://www.google.com/search?q=rent%20bud%20garden&oq=rent+bud+garden&aqs=chrome..69i57j35i39j0l2j69i60l4.1679j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk01qDu75KDPWYSJY4K8en9av-x14Lw:1619684929613&rflfq=1&num=10&rldimm=13961944485973890078&lqi=Cg9yZW50IGJ1ZCBnYXJkZW5aIgoPcmVudCBidWQgZ2FyZGVuIg9yZW50IGJ1ZCBnYXJkZW6SARBjb3Jwb3JhdGVfb2ZmaWNl&ved=2ahUKEwj4p4LHhKPwAhUEgf0HHU5SBDsQvS4wA3oECAUQLg&rlst=f#rlfi=hd:;si:13961944485973890078,l,Cg9yZW50IGJ1ZCBnYXJkZW5aIgoPcmVudCBidWQgZ2FyZGVuIg9yZW50IGJ1ZCBnYXJkZW6SARBjb3Jwb3JhdGVfb2ZmaWNl;mv:[[52.6397774,20.3667657],[52.5184602,20.288271899999998]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2">
              Google - klik!
            </a>
          </div>
        </div>
      </section>
    );
  }
}
