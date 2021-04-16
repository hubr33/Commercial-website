import React from "react";
import { Route } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { AboutCompany } from "./AboutCompany";

const Page = () => {
  return (
    <>
      <Route path="/" exact component={FrontPage} />
      <Route path="/company" exact component={AboutCompany} />
    </>
  );
};

export default Page;
