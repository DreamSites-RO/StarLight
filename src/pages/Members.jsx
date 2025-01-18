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
    <div className="bg-clr-black min-h-screen text-white font-Poppins">
      <NavBar />
      <Mentori />
      <Bara />
      <Membri />
      {/* <Bara /> */}
      {/* <Voluntari /> */}
      <Footer />
    </div>
  );
};

export default Members;
