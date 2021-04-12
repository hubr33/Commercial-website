import React from "react";
import { Route } from "react-router-dom";
import { AboutCompany } from "./AboutCompany";

const Page = () => {
  return <Route path="/" exact component={AboutCompany} />;
};

export default Page;
