import React from "react";
import "../componentsStyles/AboutCompany.css";

export const AboutCompany = () => {
  return (
    <section className="companyWrapper">
      <aside>
        <h2>Czym się zajmujemy?</h2>
        <div className="informationAboutCompany">
          <p>
            Jesteśmy mała firmą, która znajduje się w Potyrach nieopodal miasta
            Płońsk. Mamy do zaoferowania profesjonalny sprzęt do prac
            budowlanych oraz do prac w ogrodzie. Zachęcamy do sprawdzenia
            naszego asortymentu oraz wypożyczenia naszego sprzętu w atrakcyjnych
            cenach. <br /> Zapraszam ~ <strong>Krzysztof Piotrowski</strong>
          </p>
        </div>
      </aside>
      <div className="location">
        <h2>Gdzie się znajdujemy?</h2>
        <div></div>
      </div>
    </section>
  );
};
