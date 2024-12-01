import WattsUp1 from "../assets/WattsUp1.jpg";
import WattsUp2 from "../assets/WattsUp2.jpg";
import WattsUp3 from "../assets/WattsUp3.jpg";

import React from "react";

import { motion } from "framer-motion";

const WattsUp = () => {
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
            WATT’s UP Challenge
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            The WATT’s UP Challenge, held on November 16, 2024, at the Imperial
            Ballroom in Câmpulung, brought together 15 teams for its highly
            anticipated second edition. This event, known for its exceptional
            organization and precise scheduling, proved to be a tremendous
            success, benefiting both the participating teams and the dedicated
            organizing crew.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            We participated in six qualification matches, delivering strong
            performances that allowed us to win every match and secure the top
            ranking, earning the position of captain for the winning alliance.
            For our First Pick, we chose the Black Phantoms, whose excellent
            autonomous capabilities and seamless communication complemented our
            strategy perfectly, creating a strong and cohesive partnership
            during the matches.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Inspiring Growth
          </h1>
          <p className="opacity-80 text-[1rem]">
            The Playoff matches were especially rewarding, exceeding our
            expectations and reinforcing our belief in our team’s growing
            potential. The victories not only bolstered our confidence but also
            highlighted areas where we could further refine our approach,
            motivating us to continue improving.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            Beyond the competition, the event inspired us to push beyond our
            limits and develop our technical and strategic skills. The lively,
            supportive atmosphere and engaging non-technical activities drew in
            participants and created opportunities to connect with other teams
            at the stands. The cheering galleries brought an electrifying energy
            to the matches, making every moment unforgettable.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${WattsUp1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${WattsUp2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${WattsUp3})`,
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

export default WattsUp;
