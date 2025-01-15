import MareaUnireRoboticii1 from "../assets/MareaUnireRoboticii1.jpg";
import MareaUnireRoboticii2 from "../assets/MareaUnireRoboticii2.jpg";
import MareaUnireRoboticii3 from "../assets/MareaUnireRoboticii3.jpg";

import React from "react";

import { motion } from "framer-motion";

const MareaUnireRoboticii = () => {
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
            Marea Unire A Roboticii
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            Between January 3-5, our team had the pleasure of participating in a
            remarkable event, professionally organized by the Byteforce RO037
            team at the "Dunărea de Jos" University in Galați. This event was
            the perfect start to the new year, giving us the energy and
            motivation to refine our gameplay and fuel our passion for robotics.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            During the qualification matches, we secured the first position and
            formed a strong alliance with the Cyliispepp team from Iași.
            Together, we represented the Winning Alliance and set an impressive
            record as the Highest Scoring Alliance, achieving 352 points. This
            outstanding performance further inspired us to push our limits.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Inspiring Atmosphere
          </h1>
          <p className="opacity-80 text-[1rem]">
            The atmosphere of the event was truly special, characterized by
            vibrant energy and a sense of collaboration among participants. The
            quality and variety of activities showcased impeccable organization,
            ensuring an engaging and seamless experience throughout the
            competition.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            This memorable event reinforced our determination to improve and
            inspired us to continue contributing to the growth of the robotics
            community in Romania. It served as a reminder of the impact of
            teamwork, innovation, and passion in driving progress and achieving
            excellence.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${MareaUnireRoboticii1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${MareaUnireRoboticii2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${MareaUnireRoboticii3})`,
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

export default MareaUnireRoboticii;
