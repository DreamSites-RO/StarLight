import ZileleRoboticii1 from "../assets/ZileleRoboticii1.jpg";
import ZileleRoboticii2 from "../assets/ZileleRoboticii2.jpg";
import ZileleRoboticii3 from "../assets/ZileleRoboticii3.jpg";

import React from "react";

import { motion } from "framer-motion";

const ZileleRoboticii = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white font-Poppins gap-4 flex flex-col">
      <motion.div
        className="max-w-[1440px] mx-4 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          variants={item}
          className="bg-clr-bgsec font-bold col-span-3 lg:col-span-2 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[1.5rem] mb-6">
            Zilele Roboticii
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            On November 24, 2024, our team participated in the first League Meet
            of the IntoTheDeep season, held in Ploiești, within the City Hall of
            the municipality, in the SUD Region. The event was organized by the
            Ro2D2 Team and Info1 Robotics, providing an excellent setting for
            competition and interaction. Additionally, we had the opportunity to
            visit the stands of FLL teams such as Info1 Junior, Info1 Lite,
            Ro2D2 Junior, and Plex Robotics, discovering inspiring projects.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            During the competition, we achieved an outstanding performance,
            winning five matches and setting a new national and international
            record of 278 points in partnership with the High Five Robotics
            team. At the end of the event, we secured second place in both the
            League Rank and the competition standings. The biggest surprise came
            when we were ranked 5th worldwide in the Offensive Power Ranking
            (OPR).
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Inspiring Excellence
          </h1>
          <p className="opacity-80 text-[1rem]">
            The event atmosphere was exceptional, filled with positive energy
            and enthusiasm. Participants enjoyed interactive activities and
            engaging challenges, with every moment becoming an opportunity for
            learning and connection. The event was a memorable experience that
            strengthened team spirit and our passion for robotics.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            The event was an exceptional experience, blending valuable
            performances with meaningful interactions that provided both
            insights and inspiration. Energized by the positive and
            collaborative atmosphere, we are excited to apply the lessons
            learned as we strive to grow and excel in future competitions.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${ZileleRoboticii1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${ZileleRoboticii2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${ZileleRoboticii3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default ZileleRoboticii;
