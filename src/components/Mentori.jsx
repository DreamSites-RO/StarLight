import React, { useState } from "react";

import { motion } from "framer-motion";

import Adi from "../assets/Adi.png";
import Veve from "../assets/Veve.png";
import Voro from "../assets/Voro.png";

// const MentoriCards = [
//   {
//     id: 1,
//     image: Adi,
//     name: "Diaconu Adrian",
//     role: "-> Mentor",
//     text: "Ca mentor, încerc să ofer o viziune de ansamblu asupra lucrurilor printr-o îndrumare tehnică riguroasă, folosind principii de bază ale fizicii și matematicii.",
//     insta: "",
//     gram: "",
//   },
//   {
//     id: 2,
//     image: Veve,
//     name: "Diaconu Veronica",
//     role: "-> Mentor",
//     text: "Sunt unul dinte mentorii echipei StarLight Robotics, preocupat de învățare continuă, de cultivarea abilităților de a relaționa și de a oferi încredere tinerilor să își atingă performanțele.",
//     insta: "https://www.instagram.com/diaconu_veronica13/",
//     gram: "@diaconu_veronica13",
//   },
//   {
//     id: 3,
//     image: Voro,
//     name: "Daniel Vorovenci",
//     role: "-> Mentor & Vizitator",
//     text: "Salutare! Mă numesc Daniel Vorovenci, reprezint Colegiul Național ”Alexandru Odobescu” din Pitești în calitate de director și am devenit mentor oficial al acestei echipei în 2024.",
//     insta: "",
//     gram: "",
//   },
// ];

const MentoriCards = [
  {
    id: 1,
    image: Adi,
    name: "Diaconu Adrian",
    role: "-> Mentor",
    text: "As a mentor, I try to provide an overall vision of things through rigorous technical guidance, using basic principles of physics and mathematics.",
    insta: "",
    gram: "",
  },
  {
    id: 2,
    image: Veve,
    name: "Diaconu Veronica",
    role: "-> Mentor",
    text: "I am one of the mentors of the StarLight Robotics team, focused on continuous learning, cultivating relationship skills, and instilling confidence in young people to achieve their goals.",
    insta: "https://www.instagram.com/diaconu_veronica13/",
    gram: "@diaconu_veronica13",
  },
  {
    id: 3,
    image: Voro,
    name: "Daniel Vorovenci",
    role: "-> Mentor & Visitor",
    text: "Hello! My name is Daniel Vorovenci, I represent the 'Alexandru Odobescu' National College in Pitești as its principal, and I officially became a mentor of this team in 2024.",
    insta: "",
    gram: "",
  },
];

const FlipCard = ({ image, name, role, text, insta, gram }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped(!isFlipped);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 }, // Start slightly below and hidden
    visible: {
      opacity: 1,
      y: 0, // Move to its final position
      transition: { duration: 0.5 }, // Animation duration
    },
  };

  return (
    <motion.div
      className="border-2 border-clr-princ rounded-[1.25rem] p-[4px] flex justify-center items-center w-[300px] h-[350px] md:w-[325px] md:h-[375px] lg:w-[350px] lg:h-[400px] perspective cursor-pointer mx-auto"
      onClick={handleFlip}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
    >
      <div className="relative w-full h-full transition-transform duration-500 rounded-[1.25rem] overflow-hidden">
        {/* Background Image */}
        <div
          className={`w-full h-full rounded-[1.25rem] bg-cover bg-center transition-all duration-500 ${
            isFlipped ? "bg-black bg-opacity-60" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: isFlipped ? "brightness(0.175)" : "brightness(1)",
          }}
        ></div>

        {/* Black Transparent Overlay with Name and Role */}
        {!isFlipped && (
          <div className="absolute bottom-6 left-0 w-full bg-black bg-opacity-70 text-white px-6 py-4">
            <h2 className="text-lg font-bold font-Poppins">{name}</h2>
            <p className="text-[18px] font-semi-bold font-Poppins opacity-90">
              {role}
            </p>
          </div>
        )}

        {/* Flip Back Overlay with Text */}
        {isFlipped && (
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white transition-opacity duration-500">
            <p className="lg:text-xl text-md font-semibold mb-4 px-4 text-center">
              {text}
            </p>
            {insta && (
              <a
                href={insta}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:mt-4 mt-2 bg-clr-princ text-white px-4 py-2 rounded-lg text-lg font-Poppins font-bold hover:bg-opacity-90 transition-all duration-300 border-black border-[2px]"
              >
                {gram}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Mentori = () => {
  const sharedVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and hidden
    visible: {
      opacity: 1,
      y: 0, // Move to its final position
      transition: { duration: 0.5 }, // Animation duration
    },
  };

  return (
    <section className="max-w-[1440px] mx-auto mb-[2rem] lg:mb-[4rem] lg:px-[2rem] md:px-[1rem] text-center text-white font-Poppins gap-4 flex flex-col">
      <motion.h1
        className="text-[2.5rem] font-black mb-[2rem] opacity-90 hover:opacity-100 transition duration-300"
        variants={sharedVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the <h1> is in view
      >
        Mentori
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mt-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Apply stagger effect for child animations
      >
        {MentoriCards.map((card) => (
          <FlipCard
            key={card.id}
            image={card.image}
            name={card.name}
            role={card.role}
            text={card.text}
            insta={card.insta}
            gram={card.gram}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Mentori;
