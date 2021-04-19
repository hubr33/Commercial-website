import React from "react";
import "../componentsStyles/RentButton.css";

export const RentButton = (props) => {
  return (
    <button onClick={props.click} className="buildRentButton">
      Wynajmij
    </button>
  );
};
