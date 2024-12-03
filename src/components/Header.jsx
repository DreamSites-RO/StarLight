import { NavBar } from "../components";

import React from "react";

import VideoReady from "../assets/VideoReady.mp4";

import { motion } from "framer-motion";

const Header = () => {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 1,
    },
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={VideoReady} type="video/mp4" />
        Your browser does not support the video tag!
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="relative z-10 w-full">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-full mt-20 text-center">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="lg:text-[5.5rem] md:text-[4.3rem] text-[3.7rem] font-black mt-8 text-white"
              variants={fadeUp} // Applying fade-up animation to h1
            >
              Welcome to StarLight!
            </motion.h1>
            <motion.p
              className="lg:text-[2.8rem] md:text-[2.3rem] text-[1.8rem] font-black mt-4 italic text-clr-princ font-Genty"
              variants={fadeUp}
            >
              "The future lies beyond the stars..."
            </motion.p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
