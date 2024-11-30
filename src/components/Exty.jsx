import Exty1 from "../assets/Exty1.png";
import Exty2 from "../assets/Exty2.png";

import WattsUp3 from "../assets/WattsUp3.jpg";

import React from "react";

import { Link } from "react-router-dom";

const Exty = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white font-Poppins gap-4 flex flex-col">
      <h1 className="font-black text-[2.25rem] opacity-90 hover:opacity-100 transition-all duration-300 text-center mb-[2.5rem] font-Poppins">
        <span className="text-clr-princ italic">Exty</span> - Into The Deep
        2024-2025
      </h1>
      <div className="max-w-[1440px] mx-4 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16">
        <div className="bg-clr-bgsec font-bold col-span-3 lg:col-span-2 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
          <h1 className="font-Poppins opacity-90 font-black text-[1.5rem] mb-6">
            Robot Exty
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            Robot Exty, designed on September 7, 2024, during the first day of
            the FTC "Into the Deep" season, was celebrated for its innovative
            design and advanced technical solutions. It was created to
            accomplish the season's specific tasks, which included collecting
            samples from a "submarine" and either placing them into a basketball
            hoop or attaching them with a clip to a bar. These samples formed a
            specimen that could then be placed on the bar, with all tasks to be
            completed within 2 minutes and 30 seconds.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            The robot's chassis is simple yet robust, made from 3 GoBilda
            profiles and 4 312 rpm motors, each fixed directly to the wheels.
            The GoBilda wheels from the second generation contribute to
            excellent maneuverability on the competition field. A standout
            feature of the design is the claw mechanism, allowing the robot to
            grasp and manipulate game elements with precision.
          </p>
        </div>
        <div className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Conclusion
          </h1>
          <p className="opacity-80 text-[1rem]">
            In conclusion, Robot Exty embodies both simplicity and innovation,
            achieving a balance between robust construction and advanced
            functionality. Its well-engineered design, including a durable
            chassis and a precise claw mechanism, enables it to handle complex
            game tasks effectively. These features, along with its overall
            efficiency, highlight its suitability for competitive environments
            and the strategic demands of the Into the Deep season.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${Exty1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
        <div
          style={{
            backgroundImage: `url(${Exty2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
        <div
          style={{
            backgroundImage: `url(${WattsUp3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
      </div>
    </section>
  );
};

export default Exty;
