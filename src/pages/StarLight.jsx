import { Header, Introducere, Sponsori, Footer } from "../components";

import React from "react";
const StarLight = () => {
  return (
    <div className="bg-clr-bgsec min-h-screen text-white font-Poppins">
      <Header />
      <Introducere />
      <Sponsori />
      <Footer />
    </div>
  );
};

export default StarLight;
