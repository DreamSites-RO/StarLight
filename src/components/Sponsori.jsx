import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa"; // Import a globe icon for the website link

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
    link: "https://bricowoodtrade.ro/",
  },
  {
    id: 5,
    image: Stracar,
    text: "Compania noastra este infiintata din dorinta de a aduce pe piata o serie de servicii complexe, de o calitate ireprosabila oferite de specialistii nostrii cu o bogata experienta in domeniu.",
    link: "",
  },
  {
    id: 6,
    image: Trieurodata,
    text: "Suntem un jucator important si recunoscut in piata solutiilor de automatizari si robotizari ale proceselor industriale, cu o cifra de afaceri la nivel de grup de peste 20 milioane de euro.",
    link: "https://trieurodata.ro/",
  },
  {
    id: 7,
    image: ApaDinNoy,
    text: "Aceasta firma are peste 29 de ani de experiență în instrumentație de proces din toate industriile locale și naționale, cu o reputație de a livra instrumente și echipamente de măsură precise, în termen și cu respectarea bugetului.",
    link: "https://apadinnoy.ro/",
  },
  {
    id: 8,
    image: Romvega,
    text: "Să împărţim o apă bună, care poate vorbi pe înţelesul tuturor, înseamnă câte puţin din toate. Şi curaj, şi onestitate, şi încredere în viitor. Iar toţi cei care o primesc trebuie să înţeleagă ceva pe cât de simplu, pe atât de miraculos.",
    link: "https://bricowoodtrade.ro/",
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

  return (
    <div
      className="border-2 border-clr-princ rounded-[1.25rem] p-[4px] flex justify-center items-center w-[225px] h-[225px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] perspective cursor-pointer mx-auto"
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

const Sponsori = () => {
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
