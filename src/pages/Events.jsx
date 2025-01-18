import {
  NavBar,
  Footer,
  KickOff,
  KickAthon,
  TreasureHunt,
  Bara,
  WattsUp,
  HTech,
  ZileleRoboticii,
  MareaUnireRoboticii,
  HideMeet,
} from "../components";

import React from "react";
const Events = () => {
  return (
    <div className="bg-clr-black min-h-screen text-white font-Poppins">
      <NavBar />
      <div className="flex flex-col">
        <TreasureHunt />
        <Bara />
        <KickOff />
        <Bara />
        <KickAthon />
        <Bara />
        <HTech />
        <Bara />
        <WattsUp />
        <Bara />
        <ZileleRoboticii />
        <Bara />
        <MareaUnireRoboticii />
        <Bara />
        <HideMeet />
        <Bara />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
