import HTech1 from "../assets/HTech1.jpg";
import HTech2 from "../assets/HTech2.jpg";
import HTech3 from "../assets/HTech3.jpg";

import React from "react";

import { motion } from "framer-motion";

const HTech = () => {
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
            Demo H-Tech
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            On November 2, 2024, our team had the honor of participating in the
            first demonstration event of the IntoTheDeep season, organized by
            the h-tech team at "Ion Creangă" National College in Bucharest. This
            well-organized event brought together talented teams from the FTC
            community and provided the perfect setting to test strategies, learn
            from interactions with others, and explore the potential of the
            current season.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            The event was structured to highlight both the competitive and
            educational aspects, with each match offering opportunities for
            innovation and reflection. During the demonstration matches, our
            team achieved a new record of 210 points, a significant
            accomplishment that secured us second place in the competition
            standings. These results motivated us to face future challenges with
            confidence and focus on optimizing our strategies.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Collaborative Growth
          </h1>
          <p className="opacity-80 text-[1rem]">
            Beyond the competition, the event also provided a valuable
            opportunity to interact with other teams and exchange ideas. The
            collaborative atmosphere and mutual support among participants
            contributed to a memorable experience. We were thrilled to discover
            new approaches, discuss innovative technical solutions, and enjoy
            the positive energy shared by the entire community.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            The event was an exceptional experience, both technically and
            personally, and the lessons learned will guide our efforts
            throughout the current season. We look forward to participating in
            upcoming competitions and continuing to grow as a team.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HTech1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HTech2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HTech3})`,
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

export default HTech;
