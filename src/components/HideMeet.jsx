import HideMeet1 from "../assets/HideMeet1.png";
import HideMeet2 from "../assets/HideMeet2.jpg";
import HideMeet3 from "../assets/HideMeet3.jpg";

import React from "react";

import { motion } from "framer-motion";

const HideMeet = () => {
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
            Hide & Meet League Meet
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            On Sunday, January 12, our team had the pleasure of participating in
            the Hide&Meet League Meet, an engaging event hosted at the “Mircea
            cel Bătrân” Middle School No. 13 in Pitești. The competition was
            expertly organized by the teams High Five Robotics, ARRA FTC,
            LightBulb Robotics, and 4D Robotics, whose efforts ensured a smooth
            and dynamic experience for all participants. Their attention to
            detail and dedication to fostering a competitive yet collaborative
            environment truly stood out, making the event both professional and
            enjoyable.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            During the competition, we showcased consistent and strong
            performances, winning five out of six matches and securing third
            place in the event standings. This achievement reflects our ongoing
            efforts to refine our strategies and enhance our gameplay. In the
            overall League Rank, we currently hold the fourth position, a result
            that motivates us to continue striving for improvement as we look
            ahead to the next stages of the season.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Unified Growth
          </h1>
          <p className="opacity-80 text-[1rem]">
            The Hide&Meet League Meet provided more than just a platform for
            competition. It was an opportunity to connect with other teams,
            share ideas, and celebrate the collective passion for robotics.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            This memorable event strengthened our determination to excel, not
            only as individuals but as a cohesive team. It reminded us of the
            importance of collaboration, innovation, and resilience, values that
            will guide us in the competitions to come. We are excited to
            continue building on the lessons learned and look forward to facing
            future challenges with renewed confidence and drive.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HideMeet1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HideMeet2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        <motion.div
          variants={item}
          style={{
            backgroundImage: `url(${HideMeet3})`,
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

export default HideMeet;
