import React from "react";
import "../componentsStyles/AboutCompany.css";

export const AboutCompany = () => {
  return (
    <section className="companyWrapper">
      <aside>
        <h2>Czym się zajmujemy?</h2>
        <div className="informationAboutCompany">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            soluta natus eveniet iure aspernatur eligendi provident repellendus.
            Explicabo consequuntur, cupiditate exercitationem quaerat
            perspiciatis eum illum at rem numquam totam natus deserunt,
            perferendis quia facilis ipsum, voluptate tempora sapiente
            consectetur optio aspernatur pariatur. Iste amet similique odit
            aspernatur minus provident non.
          </p>
        </div>
      </aside>
      <div className="location">
        <h2>Gdzie się znajdujemy?</h2>
        <div>Tutaj api z googla lokalizacji</div>
      </div>
    </section>
  );
};
