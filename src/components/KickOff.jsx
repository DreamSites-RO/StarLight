import KickOff1 from "../assets/KickOff1.jpg";
import KickOff2 from "../assets/KickOff2.jpg";
import KickOff3 from "../assets/KickOff3.jpg";

import React from "react";

import { motion } from "framer-motion";

const KickOff = () => {
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
            KickOff
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            On September 7th, at Mega Mall Bucharest, the first event of the
            season took place—a perfect opportunity for teams to reunite and
            discover the theme that will define the entire competition year. In
            a vibrant and enthusiastic atmosphere, we were thrilled to unveil
            this season’s theme: "Into The Deep," a challenge that invites us to
            explore the depths of creativity and innovation.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            In addition to the season’s theme, another exciting highlight was
            the reveal of the game field, an essential element that gave us a
            clear glimpse of the challenges ahead. The ingenious field design,
            showcased in the images below, sparked our imagination and laid the
            groundwork for strategic discussions that will shape future
            projects.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Fueling Creativity
          </h1>
          <p className="opacity-80 text-[1rem]">
            This year was especially remarkable thanks to the new organizing
            team, "Nație Prin Educație," whose energy and enthusiasm impressed
            us all. Young and dynamic, the team stood alongside the
            participants, ready to support creativity and open new horizons.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            This event was more than just a meeting—it was a celebration of
            passion for technology, collaboration, and discovery. The first
            ideas came to life on the spot, and the participants’ energy turned
            the venue into a true laboratory of the future.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${KickOff1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${KickOff2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${KickOff3})`,
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

export default KickOff;
