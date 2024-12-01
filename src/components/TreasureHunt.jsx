import TreasureHunt1 from "../assets/TreasureHunt1.jpg";
import TreasureHunt2 from "../assets/TreasureHunt2.jpg";
import TreasureHunt3 from "../assets/TreasureHunt3.jpg";

import React from "react";

import { motion } from "framer-motion";

const TreasureHunt = () => {
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
        variants={container} // Apply the container variant to animate when in view
      >
        {/* Item 1 */}
        <motion.div
          variants={item} // Apply the item variant
          className="bg-clr-bgsec font-bold col-span-3 lg:col-span-2 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[1.5rem] mb-6">
            STAR Express
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            STAR Express was the first event organized by our team, centered
            around a treasure hunt through our city, Pitești. The 11
            participating teams navigated unique routes while completing
            challenges at each checkpoint, such as Origami, obstacle courses,
            darts, spontaneous promotion, and many others. The participants
            showed great interest and enthusiasm for the tasks, showcasing
            skills like dexterity, teamwork, and persuasion, which enabled them
            to successfully tackle the assignments.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            Regarding the event's organization, we started about a month before
            the event date. After settling logistical details, we allocated
            three weeks for registration to allow for intensive promotion.
            Naturally, we encountered some challenges during the implementation,
            particularly our goal of providing each team with a unique route.
            This task impacted our efficiency and took longer than anticipated.
            However, we overcame these hurdles, and the event unfolded as
            planned.
          </p>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          variants={item} // Apply the item variant
          className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl"
        >
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Community Connection
          </h1>
          <p className="opacity-80 text-[1rem]">
            Among the participants were members of FTC teams from Pitești,
            giving us the opportunity to connect with both the local community
            and the FTC community.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            At the end of the day, all teams were rewarded with gifts from our
            sponsors, to whom we extend our heartfelt thanks for their support.
            This was an event we organized with passion, marking a delightful
            prelude to the new season, and we were thrilled to have 33 dedicated
            participants join us.
          </p>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          variants={item} // Apply the item variant
          style={{
            backgroundImage: `url(${TreasureHunt1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        {/* Item 4 */}
        <motion.div
          variants={item} // Apply the item variant
          style={{
            backgroundImage: `url(${TreasureHunt2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></motion.div>

        {/* Item 5 */}
        <motion.div
          variants={item} // Apply the item variant
          style={{
            backgroundImage: `url(${TreasureHunt3})`,
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

export default TreasureHunt;

// return (
//     <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white font-Poppins gap-4 flex flex-col">
//       <div className="max-w-[1440px] mx-4 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16">
//         <div className="bg-clr-bgsec font-bold col-span-3 lg:col-span-2 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
//           <h1 className="font-Poppins opacity-90 font-black text-[1.5rem] mb-6">
//             STAR Express
//           </h1>
//           <p className="opacity-80 text-[1rem] font-black">
//             STAR Express was the first event organized by our team, centered
//             around a treasure hunt through our city, Pitești. The 11
//             participating teams navigated unique routes while completing
//             challenges at each checkpoint, such as Origami, obstacle courses,
//             darts, spontaneous promotion, and many others. The participants
//             showed great interest and enthusiasm for the tasks, showcasing
//             skills like dexterity, teamwork, and persuasion, which enabled them
//             to successfully tackle the assignments.
//           </p>
//           <br />
//           <p className="opacity-80 text-[1rem] font-black">
//             Regarding the event's organization, we started about a month before
//             the event date. After settling logistical details, we allocated
//             three weeks for registration to allow for intensive promotion.
//             Naturally, we encountered some challenges during the implementation,
//             particularly our goal of providing each team with a unique route.
//             This task impacted our efficiency and took longer than anticipated.
//             However, we overcame these hurdles, and the event unfolded as
//             planned.
//           </p>
//         </div>
//         <div className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
//           <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
//             Community Connection
//           </h1>
//           <p className="opacity-80 text-[1rem]">
//             Among the participants were members of FTC teams from Pitești,
//             giving us the opportunity to connect with both the local community
//             and the FTC community.
//           </p>
//           <br />
//           <p className="opacity-80 text-[1rem]">
//             At the end of the day, all teams were rewarded with gifts from our
//             sponsors, to whom we extend our heartfelt thanks for their support.
//             This was an event we organized with passion, marking a delightful
//             prelude to the new season, and we were thrilled to have 33 dedicated
//             participants join us.
//           </p>
//         </div>
//         <div
//           style={{
//             backgroundImage: `url(${TreasureHunt1})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             objectFit: "fill",
//           }}
//           className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
//         ></div>
//         <div
//           style={{
//             backgroundImage: `url(${TreasureHunt2})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             objectFit: "fill",
//           }}
//           className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
//         ></div>
//         <div
//           style={{
//             backgroundImage: `url(${TreasureHunt3})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             objectFit: "fill",
//           }}
//           className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
//         ></div>
//       </div>
//     </section>
//   );
// };
