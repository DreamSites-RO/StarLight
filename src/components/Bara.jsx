import React from "react";

import { motion } from "framer-motion";

const Bara = () => {
  return (
    <motion.div
      className="h-[2px] bg-white/75 opacity-80 lg:w-[75%] w-[95%] mx-auto my-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileExit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default Bara;
