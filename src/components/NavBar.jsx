import LogoStarLight from "../assets/LogoStarLight.png";
import React from "react";
import {
  BookMarked,
  Eye,
  Heart,
  MonitorDown,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing motion from Framer Motion

const NavBar = () => {
  // Animation settings
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 100, damping: 25 },
  };

  return (
    <div
      className="mr-auto ml-auto max-w-[1440px] relative z-20 bg-transparent py-6"
      id="navbar"
    >
      <div className="relative z-20 bg-transparent">
        <div className="md:px-12 lg:py-2">
          <div className="flex items-center justify-between">
            <motion.div className="relative z-20 ml-6 lg:ml-0" {...fadeUp}>
              <Link to="/">
                <img src={LogoStarLight} alt="Logo1" className="lg:w-48 w-40" />
              </Link>
            </motion.div>

            <div className="flex items-center justify-end mr-6 lg:ml-0">
              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-transparent shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <motion.ul
                    className="px-6 pt-32 text-white space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0"
                    {...fadeUp}
                  >
                    <li>
                      <Link
                        to="/Members"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 flex flex-row"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300">
                          Members
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Events"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 flex flex-row"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300">
                          Events
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Awards"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300">
                          Awards
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Robots"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300">
                          Robots
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/About"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300">
                          About
                        </span>
                      </Link>
                    </li>
                  </motion.ul>

                  <motion.div {...fadeUp}>
                    <Link to="/Contact">
                      <button className="font-Poppins text-white font-bold opacity-80 border-solid border-2 border-gray-500 hover:opacity-100 hover:border-white transition ease-in-out duration-300 rounded-xl text-center px-12 py-3">
                        Contact
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
              </label>

              <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[rgb(14,14,15)] shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 lg:hidden">
                <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row mt-16 md:mt-16 lg:mt-0">
                  <motion.ul
                    className="px-6 pt-32 text-white space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0"
                    {...fadeUp}
                  >
                    <li>
                      <Link
                        to="/Members"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 flex flex-row"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300 flex flex-row gap-2">
                          <Heart />
                          Members
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Events"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 flex flex-row"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300 flex flex-row gap-2">
                          <Eye />
                          Events
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Awards"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300 flex flex-row gap-2">
                          <MonitorDown />
                          Awards
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Robots"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300 flex flex-row gap-2">
                          <BookMarked />
                          Robots
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/About"
                        className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0"
                      >
                        <span className="relative text-white opacity-80 hover:opacity-100 transition duration-300 flex flex-row gap-2">
                          <MonitorSmartphone />
                          About
                        </span>
                      </Link>
                    </li>
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <motion.div {...fadeUp}>
                      <Link to="/Contact">
                        <button className="mt-8 font-Poppins font-bold opacity-80 border-solid border-2 border-gray-500 hover:opacity-100 hover:border-white transition ease-in-out duration-300 rounded-xl text-center px-12 py-3">
                          Contact
                        </button>
                      </Link>
                    </motion.div>
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
