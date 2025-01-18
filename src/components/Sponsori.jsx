import React, { useState } from "react";

import { motion } from "framer-motion";

import BricoWoodTrade from "../assets/BricoWoodTrade.png";
import CasaCarpatica from "../assets/CasaCarpatica.png";
import ImobilCad from "../assets/ImobilCad.png";
import Olma from "../assets/Olma.png";
import Stracar from "../assets/Stracar.png";
import Trieurodata from "../assets/Trieurodata.png";
import ApaDinNoy from "../assets/ApaDinNoy.png";
import Romvega from "../assets/Romvega.png";
import LogoOdo from "../assets/LogoOdo.jpg";
import LogoAsociatieOdo from "../assets/LogoAsociatieOdo.png";

const cardsData = [
  {
    id: 1,
    image: BricoWoodTrade,
    text: "Brico Wood Trade ofera servicii profesionale de debitare, frezare, cantuire, CNC pentru producatiorii de mobila!",
    link: "https://bricowoodtrade.ro/",
  },
  {
    id: 2,
    image: CasaCarpatica,
    text: "Casa Carpatica este localizată la baza Munţilor Făgăraş în centrul comunei Nucşoara, în imediată apropiere de Lacului Învârtita.",
    link: "https://www.turistinfo.ro/nucsoara/cazare-nucsoara/casa_carpatica-c98602.html",
  },
  {
    id: 3,
    image: ImobilCad,
    text: "Firma executa lucrari de cadastru si intabulare in judetul Arges si lucrari de topografie in toata tara.",
    link: "https://imobilcad.ro/",
  },
  {
    id: 4,
    image: Olma,
    text: "Industria constructiilor metalice si a produselor din metal, exclusiv masini, utilaje si instalatii.",
    link: "",
  },
  {
    id: 5,
    image: Stracar,
    text: "Compania noastra este infiintata din dorinta de a aduce pe piata o serie de servicii complexe, de o calitate ireprosabila oferite de specialistii nostrii cu o bogata experienta in domeniu.",
    link: "https://www.stracar.ro/",
  },
  {
    id: 6,
    image: Trieurodata,
    text: "Indiferent in ce industrie va aflati, fiti cu un pas inaintea concurentei!",
    link: "https://trieurodata.ro/",
  },
  {
    id: 7,
    image: ApaDinNoy,
    text: "Să împărţim o apă bună, care poate vorbi pe înţelesul tuturor, înseamnă câte puţin din toate.",
    link: "https://apadinnoy.ro/",
  },
  {
    id: 8,
    image: Romvega,
    text: "Aceasta firma are peste 29 de ani de experiență în instrumentație de proces din toate industriile locale și naționale.",
    link: "https://www.romvega.ro/",
  },
];

const cardsDataParteneri = [
  {
    id: 1,
    image: LogoOdo,
    text: "Adresa: Str. Vasile Pârvan, nr. 1, Pitesti, jud. Arges Telefon: 0248/ 643202 Tel/Fax : 0248/ 643309 Mail: colegiul_odobescu@yahoo.com",
    link: "https://cnodobescu.ro/",
  },
  {
    id: 2,
    image: LogoAsociatieOdo,
    text: "Scopul asociației este de a sprijini liceul nostru în activitățile de instruire, educare și formare a elevilor. ",
    link: "https://cnodobescu.ro/asociatia-de-parinti/",
  },
];

const FlipCard = ({ image, text, link }) => {
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
      className="border-2 border-clr-princ rounded-[1.25rem] p-[4px] flex justify-center items-center w-[300px] h-[300px] md:w-[325px] md:h-[325px] lg:w-[350px] lg:h-[350px] perspective cursor-pointer mx-auto"
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

        {/* Flip Back Overlay with Text */}
        {isFlipped && (
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white transition-opacity duration-500">
            <p className="lg:text-xl text-md font-semibold mb-4 px-4 text-center">
              {text}
            </p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:mt-4 mt-2 bg-clr-princ text-white px-4 py-2 rounded-lg text-lg font-Poppins font-bold hover:bg-opacity-90 transition-all duration-300 border-black border-[2px]"
              >
                Vizitati Siteul!
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Sponsori = () => {
  const sharedVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and hidden
    visible: {
      opacity: 1,
      y: 0, // Move to its final position
      transition: { duration: 0.5 }, // Animation duration
    },
  };

  return (
    <section className="bg-black min-h-screen">
      <div className="bg-black min-h-screen text-white font-Poppins lg:px-[2rem] md:px-[1rem] max-w-[1440px] mx-auto py-16 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-black text-left opacity-90 hover:opacity-100 transition duration-300 ease-in-out mb-4 lg:mb-8">
          Our Sponsors
        </h1>
        <p className="text-[16px] text-center lg:text-[18px] font-bold opacity-80 font-Poppins px-2 md:px-[8rem] lg:px-[16rem]">
          Robotics team sponsors are our essential support, providing vital
          funds and materials, making our dreams a reality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mt-16">
          {cardsData.map((card) => (
            <FlipCard
              key={card.id}
              image={card.image}
              text={card.text}
              link={card.link}
            />
          ))}
        </div>
      </div>

      <div className="bg-black min-h-screen text-white font-Poppins lg:px-[2rem] md:px-[1rem] max-w-[1440px] mx-auto py-16 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-black text-left opacity-90 hover:opacity-100 transition duration-300 ease-in-out mb-4 lg:mb-8">
          Our Parteners
        </h1>
        <p className="text-[16px] text-center lg:text-[18px] font-bold opacity-80 font-Poppins px-2 md:px-[8rem] lg:px-[16rem]">
          Our partners are the backbone of innovation, offering invaluable
          expertise, resources, and collaboration that drive our success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12 mt-16">
          {cardsDataParteneri.map((card) => (
            <FlipCard
              key={card.id}
              image={card.image}
              text={card.text}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsori;
