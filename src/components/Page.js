import React from "react";
import { Route } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { AboutCompany } from "./AboutCompany";
import { Renting } from "./Renting";
import { BuildingItems } from "./BuildingItems";

const Page = () => {
  return (
    <>
      <Route path="/" exact component={FrontPage} />
      <Route path="/company" component={AboutCompany} />
      <Route path="/rent" component={Renting} />
      <Route path="/rentBuilding" component={BuildingItems} />
    </>
  );
};

export default Page;
