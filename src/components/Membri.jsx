import React, { useState } from "react";

import Adi from "../assets/Adi.png";
import Veve from "../assets/Veve.png";
import Voro from "../assets/Voro.png";

const MembriCards = [
  {
    id: 1,
    image: Adi,
    text: "Brico Wood Trade ofera servicii profesionale de debitare, frezare, cantuire, CNC pentru producatiorii de mobila!",
  },
  {
    id: 2,
    image: Veve,
    text: "Casa Carpatica este localizată la baza Munţilor Făgăraş în centrul comunei Nucşoara, în imediată apropiere de Lacului Învârtita.",
  },
  {
    id: 3,
    image: Voro,
    text: "Casa Carpatica este localizată la baza Munţilor Făgăraş în centrul comunei Nucşoara, în imediată apropiere de Lacului Învârtita.",
  },
];

const FlipCard = ({ image, text, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="border-2 border-clr-princ rounded-[1.25rem] p-[4px] flex justify-center items-center w-[275px] h-[300px] md:w-[300px] md:h-[325px] lg:w-[325px] lg:h-[350px] perspective cursor-pointer mx-auto"
      onClick={handleFlip}
    >
      <div className="relative w-full h-full transition-transform duration-500 rounded-[1.25rem] overflow-hidden">
        {/* Background Image and Optional Overlay */}
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

        {/* Flip Back Overlay with Text */}
        {isFlipped && (
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white transition-opacity duration-500">
            <p className="text-xl font-semibold mb-4">{text}</p>
            {/* Link Icon */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 bg-white text-black rounded-full p-2 hover:bg-gray-300 transition duration-300"
                aria-label="Visit website"
              >
                <FaGlobe size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Membri = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-center text-white font-Poppins gap-4 flex flex-col">
      <h1 className="text-[2.5rem] font-black mb-[2rem] opacity-90 hover:opacity-100 transtion duration-300">
        Membri
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mt-8">
        {MembriCards.map((card) => (
          <FlipCard
            key={card.id}
            image={card.image}
            text={card.text}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Membri;
