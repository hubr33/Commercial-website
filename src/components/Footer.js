import React from "react";
import "../componentsStyles/Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="pageRights">
        <p>Copyright by "RENT-BUD-GARDEN" All rights reserved</p>
      </div>
      <div className="footerLinks">
        <div className="navButtons">
          <NavLink className="navBtn" to="/">
            Start
          </NavLink>
          <NavLink className="navBtn" to="/company">
            O nas
          </NavLink>
          <NavLink className="navBtn" to="/rent">
            Wynajem
          </NavLink>
          <NavLink className="navBtn" to="/contact">
            Kontakt
          </NavLink>
        </div>
      </div>
      <div className="iconLinks">
        <a href="https://www.facebook.com/RentBudGarden">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.google.com/search?q=rent%20bud%20garden&oq=rent+bud+garden&aqs=chrome..69i57j35i39j0l2j69i60l4.1679j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk01qDu75KDPWYSJY4K8en9av-x14Lw:1619684929613&rflfq=1&num=10&rldimm=13961944485973890078&lqi=Cg9yZW50IGJ1ZCBnYXJkZW5aIgoPcmVudCBidWQgZ2FyZGVuIg9yZW50IGJ1ZCBnYXJkZW6SARBjb3Jwb3JhdGVfb2ZmaWNl&ved=2ahUKEwj4p4LHhKPwAhUEgf0HHU5SBDsQvS4wA3oECAUQLg&rlst=f#rlfi=hd:;si:13961944485973890078,l,Cg9yZW50IGJ1ZCBnYXJkZW5aIgoPcmVudCBidWQgZ2FyZGVuIg9yZW50IGJ1ZCBnYXJkZW6SARBjb3Jwb3JhdGVfb2ZmaWNl;mv:[[52.6397774,20.3667657],[52.5184602,20.288271899999998]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2">
          <i className="fab fa-google"></i>
        </a>
      </div>
    </footer>
  );
};
