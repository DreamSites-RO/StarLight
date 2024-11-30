import React from "react";

import {
  NavBar,
  Footer,
  Mentori,
  Membri,
  Voluntari,
  Bara,
} from "../components";

const Members = () => {
  return (
    <div>
      <NavBar />
      <Mentori />
      <Bara />
      <Membri />
      <Bara />
      <Voluntari />
      <Footer />
    </div>
  );
};

export default Members;
