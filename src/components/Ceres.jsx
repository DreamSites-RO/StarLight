import React from "react";

import Ceres1 from "../assets/roboti/Ceres1.png";
import Ceres2 from "../assets/roboti/Ceres2.png";
import Ceres3 from "../assets/roboti/Ceres3.png";

import { motion } from "framer-motion";

const Ceres = () => {
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
    <section className="max-w-[1440px] mx-auto mb-[2rem] lg:mb-[4rem] lg:px-[2rem] md:px-[1rem] text-white font-Poppins gap-4 flex flex-col">
      <motion.h1
        className="font-black text-[2.25rem] text-center mb-[2.5rem] font-Poppins"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <span className="text-clr-princ italic">Ceres</span> - Into The Deep
        2024-2025
      </motion.h1>
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
            Robot Ceres
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            Robot Ceres, the second robot designed for the "Into the Deep"
            season, was built to meet all the competition's challenges with
            precision and efficiency. Its innovative features, including an
            advanced Intake-Outtake system and a robust climbing mechanism,
            enable it to perform complex tasks such as collecting and scoring
            game elements in both Low and High Baskets, as well as placing
            specimens in Chambers.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            The Intake-Outtake system allows Ceres to efficiently collect
            samples from the Submersible, game field, and Observation Zone. A
            tilting mechanism was chosen for transferring elements from the
            front to the back of the robot, balancing complexity with
            efficiency. This approach minimizes synchronization issues while
            ensuring precise handling of game pieces.
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
            Robot Ceres demonstrates a perfect blend of innovative design and
            reliable engineering. Its Intake-Outtake system and efficient
            climbing mechanism reflect the team’s commitment to optimizing
            functionality while maintaining simplicity in design. These features
            enable Ceres to excel at both the scoring and climbing aspects of
            the game, ensuring it remains competitive throughout the season.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            With its robust construction and meticulous design, Ceres stands as
            a testament to innovative problem-solving and engineering
            excellence. Its capabilities showcase its readiness to tackle the
            demanding tasks of the "Into the Deep" season, positioning it as a
            strong and reliable competitor in any match scenario.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${Ceres1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${Ceres2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${Ceres3})`,
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

export default Ceres;
