import React from "react";
import Nav from "../components/Nav/Nav";

const DefaultLayout = ({ children }) => (
  <div>
    <Nav />
    <main>{children}</main>
  </div>
);

export default DefaultLayout;
