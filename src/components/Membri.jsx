import React, { useState } from "react";

import { motion } from "framer-motion";

import Adriana from "../assets/echipa/Adriana.jpg";
import Angelo from "../assets/echipa/Angelo.png";
import Antonia from "../assets/echipa/Antonia.jpg";
import Bucur from "../assets/echipa/Bucur.png";
import David from "../assets/echipa/David.png";
import DavidS from "../assets/echipa/DavidS.jpg";
import Iulia from "../assets/echipa/Iulia.jpg";
import Luci from "../assets/echipa/Luci.jpg";
import Maria from "../assets/echipa/Maria.png";
import Michu from "../assets/echipa/Michu.png";
import MihaiS from "../assets/echipa/MihaiS.jpg";
import Pope from "../assets/echipa/Pope.jpg";
import Rebeca from "../assets/echipa/Rebeca.png";
import Robby from "../assets/echipa/Robby.jpg";
import Sara from "../assets/echipa/Sara.jpg";
import Shobi from "../assets/echipa/Shobi.png";
import Speedy from "../assets/echipa/Speedy.jpg";
import Tufa from "../assets/echipa/Tufa.jpg";
import Alexia from "../assets/echipa/Alexia.jpg";
import Eve from "../assets/echipa/Eve.jpg";

const MembriCards = [
  {
    id: 1,
    image: Shobi,
    name: "Șerban Andrei (aka Shobi)",
    role: "-> Team Leader",
    text: "Am 18 ani, sunt mecanic și social media manager, dar reușesc să ajut toți colegii din toate departamentele. Fac parte din FTC de 2 ani.În acest sezon mi-am propus să mă distrez, să-mi fac mai mulți prieteni.",
    insta: "https://www.instagram.com/serban_andrei__/",
    gram: "@serban_andrei_",
  },
  {
    id: 2,
    image: Angelo,
    name: "Deaconu Mihai (aka Angelo)",
    role: "-> 3D Designer & Coach",
    text: "Bună! Mă numesc Deaconu Anghel Mihai și sunt elev în clasa a 12-a la Colegiul Național 'Alexandru Odobescu'. Fac parte din departamentele de Design 3D și Mecanică.",
    insta: "https://www.instagram.com/da.alex7/",
    gram: "@da.alex7",
  },
  {
    id: 3,
    image: Antonia,
    name: "Antonia Gheorghiță (aka Antoina)",
    role: "-> Design",
    text: "Eu sunt Antonia Gheorghiță, mi se zice Antoina, și fac parte din echipa StarLight Robotics. Sunt clasa a 12-a si m-am înscris în echipă din dorința de a dobândi experinență într-un nou domeniu fascinant pentru mine, robotica.",
    insta: "https://www.instagram.com/antoniasiatwt/",
    gram: "@antoniasiatwt",
  },
  {
    id: 4,
    image: Bucur,
    name: "Bucur Andrei",
    role: "-> Programmer & Driver",
    text: "Mă numesc Andrei, am 17 ani și fac parte din departamentul de Programare și Mecanică. Sunt pasionat de matematică și de biciclete. Am o experiență de 1 an în FTC.",
    insta: "https://www.instagram.com/02andrei04/",
    gram: "@02andrei04",
  },
  {
    id: 5,
    image: David,
    name: "David Georgescu (aka Struț)",
    role: "-> Mechanic & Driver",
    text: "Salut! Ma numesc David, am rolul de mechanic in echipa, sunt in drive team. Am experienta de 1 an in FTC si sunt alaturi colegii mei din momentul infiintarii echipei!",
    insta: "https://www.instagram.com/david_st56/",
    gram: "@david_st56",
  },
  {
    id: 6,
    image: DavidS,
    name: "David Stroiuleasa",
    role: "-> Mechanic",
    text: "Pasionat de robotică și atras de competițiile acestei științe, îmi dedic timpul proiectării și construirii roboților competitivi. Entuziasmat de inovație și colaborare in echipa, lucrez cu dedicatie pentru a obține performanțe remarcabile.",
    insta: "https://www.instagram.com/davidstroiuleasa/",
    gram: "@davidstroiuleasa",
  },
  {
    id: 7,
    image: Iulia,
    name: "Berevoianu Iulia",
    role: "-> Non-Tehnical Lead",
    text: "Hello! Numele meu este Iulia, am 17 ani și sunt în clasa a XI-a la Colegiul Național “Alexandru Odobescu” Pitești. În cadrul echipei ma ocup cu departamentele non-tehnice, iar cel mai mult îmi place să mă ocup de grafică.🌟",
    insta: "https://www.instagram.com/berevoianu_iulia/",
    gram: "@berevoianu_iulia",
  },
  {
    id: 8,
    image: Luci,
    name: "Bucurel Lucian",
    role: "-> Design",
    text: "Pe plan social sunt o persoană cooperantă care are abilități teoretice și practice bine puse la punct. Un foarte bun ascultător care mereu caută soluții și care vrea să își depășească condiția.",
    insta: "https://www.instagram.com/lvcimf/",
    gram: "@lvcimf",
  },
  {
    id: 9,
    image: Maria,
    name: "Maria Podea",
    role: "-> Peer Mentor",
    text: "Hello! Eu sunt Maria, am 18 ani și sunt studentă în cadrul UBB, FMI. După o experiență de 2 ani în FTC, atât pe departamente tehnice, cât și non-tehnice, sunt extrem de entuziasmată să-mi pot oferi sprijinul echipei, în calitate de Peer Mentor.",
    insta: "https://www.instagram.com/yasmina23maria/",
    gram: "@yasmina23maria",
  },
  {
    id: 10,
    image: Michu,
    name: "Mihai Diaconu",
    role: "-> Peer Mentor",
    text: "Eu sunt Mihai Diaconu! Sunt unul dintre peer-mentori echipei. Înainte activam în departamentul de programare, dar cu o ușoară înclinație spre modelare și asamblare 3D. Pentru mine, robotica înseamna o ușă deschisă pentru noi orizonturi.",
    insta: "https://www.instagram.com/adr0xd_/",
    gram: "@adr0xd_",
  },
  {
    id: 11,
    image: MihaiS,
    name: "Mihai Stroiuleasa",
    role: "-> Mechanic",
    text: "Mihai are rolul de mechanic in echipa si incearca sa invete cat mai multe lucruri noi care fac parte din acest departament.",
    insta: "",
    gram: "",
  },
  {
    id: 12,
    image: Pope,
    name: "Popepescu Alexandru",
    role: "-> Mechanic & 3D Designer",
    text: "Salut! Ma numesc Alexandru, am 17 ani, si ma ocup de departamentul tehnic si 3D design.",
    insta: "https://www.instagram.com/pope.alx/",
    gram: "@pope.alx",
  },
  {
    id: 13,
    image: Robby,
    name: "Robert Raicu (aka Robby)",
    role: "-> Mechanic",
    text: "Salut! Ma numesc Robert Raicu, am 16 ani. Din dorinta de a experimenta lucruri noi, am decis sa fac parte din echipa de robotica a liceului CNAO.",
    insta: "https://www.instagram.com/r0b._.3rt/",
    gram: "@r0b._.3rt",
  },
  {
    id: 14,
    image: Rebeca,
    name: "Rebeca Vasile",
    role: "-> PR & Marketing",
    text: "Rebeca se ocupa de dapartamentul non-tehnic in echipa si este alaturi de noi din momentul infiintarii echipei!",
    insta: "https://www.instagram.com/_rebeeca___/",
    gram: "@_rebeeca___",
  },
  {
    id: 15,
    image: Tufa,
    name: "Elena Sima (aka Tufă)",
    role: "-> PR & Design",
    text: "Bună! Mă numesc Elena, am 18 ani și sunt clasa a 12-a la Colegiul Național 'Alexandru Odobescu' din Pitești. În echipă mă ocup cel mai mult de departamentele de design și PR.",
    insta: "https://www.instagram.com/tufaabb/",
    gram: "@tufaabb",
  },
  {
    id: 16,
    image: Sara,
    name: "Borcaneci Sara",
    role: "-> Mechanic",
    text: "Sara face parte din departamantul tehnic, incercand sa invete cat mai multe lucri noi care tin de acest departament.",
    insta: "",
    gram: "",
  },
  {
    id: 17,
    image: Adriana,
    name: "Duminica Adriana",
    role: "-> PR & Design",
    text: "Bunaa! Sunt Adriana si am 15 ani. Sunt o persoana sociabila si ador sa ascult muzica in fiecare moment al vietii mele. In echipa de robotica am intrat deoarece sunt dornica sa-mi imbogatesc cunostintele si pe langa asta pot face ce-mi place.",
    insta: "https://www.instagram.com/adry.sunday/",
    gram: "@adry.sunday",
  },
  {
    id: 18,
    image: Speedy,
    name: "Andrei Florescu (aka Speedy)",
    role: "-> Mechanic",
    text: "Mă numesc Andrei și am 18 ani. Fac parte din departamentul de Mecanică. Sunt în programul FTC din sezonul PowerPlay. Încerc să mă dezvolt și să învăț lucruri noi.",
    insta: "https://www.instagram.com/_speedy05/",
    gram: "@_speedy05",
  },
  {
    id: 19,
    image: Alexia,
    name: "Nicolae Alexia",
    role: "-> PR & Design",
    text: "Alexia face parte din departamentul de PR si design, si a intrat in aceasta echipa cu dorinta de a invata cat mai multe lucruri noi.",
    insta: "",
    gram: "",
  },
  {
    id: 20,
    image: Eve,
    name: "Ilie Evelyn (aka Eve)",
    role: "-> Human Player & PR",
    text: "Bună! Sunt Evelyn, am 15 ani și sunt la profilul de Științe ale Naturii. Am văzut robotica ca pe o oportunitate de a-mi îmbunătăți abilitățile în diverse domenii. Pentru mine, robotica nu reprezintă doar o activitate, ci și o modalitate de a mă relaxa.",
    insta: "https://www.instagram.com/eve1ynn00/",
    gram: "@eve1ynn00",
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

const Membri = () => {
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
        Membri
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mt-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Apply stagger effect for child animations
      >
        {MembriCards.map((card) => (
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

export default Membri;
