import { Route, Routes } from "react-router-dom";

import React from "react";

import StarLight from "./pages/StarLight";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Rewards from "./pages/Rewards";
import Robots from "./pages/Robots";
import About from "./pages/About";
import Members from "./pages/Members";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<StarLight />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Rewards" element={<Rewards />} />
        <Route path="/Robots" element={<Robots />} />
        <Route path="/About" element={<About />} />
        <Route path="/Members" element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
