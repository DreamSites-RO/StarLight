import { Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger children elements with a 0.3s delay
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 }, // Element starts from below and hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }, // Animate with upward movement and fade-in
    },
  };

  return (
    <motion.div
      className="bg-clr-bgsec"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger the animation when the section is 20% in view
      variants={container}
    >
      <div className="max-w-[1440px] justify-center mx-auto py-12 flex flex-col md:flex-row lg:flex-row font-Poppins text-white font-black px-4">
        {/* Left section (text) */}
        <motion.div
          variants={container}
          className="flex flex-1 flex-col justify-start mb-6 md:mb-0 lg:mb-0 opacity-80"
        >
          <motion.h1 variants={item}>@2024 StarLight</motion.h1>
          <motion.h1 variants={item}>
            <a href="https://cnodobescu.ro/">
              "Alexandru Odobescu National College" Pitești
            </a>
          </motion.h1>
        </motion.div>

        {/* Right section (social icons) */}
        <motion.div className="flex flex-1 flex-row lg:justify-end md:justify-end justify-start text-clr-princ gap-4">
          <motion.a
            variants={item}
            href="https://www.instagram.com/starlight_robotics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={32} />
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.facebook.com/profile.php?id=61558967226227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={32} />
          </motion.a>
          <motion.a
            variants={item}
            href="https://twitter.com/StarLight_24909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={32} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
