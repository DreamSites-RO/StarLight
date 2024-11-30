import { Link } from "react-router-dom";
import KickAthon1 from "../assets/KickAthon1.jpg";
import KickAthon2 from "../assets/KickAthon2.jpg";
import KickAthon3 from "../assets/KickAthon3.jpg";

import React from "react";

const KickAthon = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white font-Poppins gap-4 flex flex-col">
      <div className="max-w-[1440px] mx-4 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16">
        <div className="bg-clr-bgsec font-bold col-span-3 lg:col-span-2 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
          <h1 className="font-Poppins opacity-90 font-black text-[1.5rem] mb-6">
            KickAthon
          </h1>
          <p className="opacity-80 text-[1rem] font-black">
            After the event at Mega Mall, we confidently headed to the next
            event of the season, KickAthon, held at ICHB Colentina on September
            7-8, 2024. This event posed a real challenge: building the first
            robot prototype in just 16 hours, followed by a series of
            demonstration matches designed to test the implemented ideas and
            mechanisms.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            This competition marked our first attempt to apply the knowledge we
            had accumulated. Before attending, we thoroughly analyzed previous
            seasons to better understand the types of parts and strategies
            commonly used. However, we prepared only the essentials, ensuring we
            could adapt to any mission required during the event.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            The first crucial step was choosing a robot concept that was
            feasible, efficient, and innovative. After several discussions and
            debates, we decided to build a robot named{" "}
            <span className="text-clr-princ hover:opacity-100">
              <Link to="/Robots"> “Exty” </Link>
            </span>
            with a simple yet ingenious design. It was equipped with a claw to
            collect game elements and position them on the bar, while the
            transfer from the ground to the scoring area was managed using
            sliders.
          </p>
          <br />
          <p className="opacity-80 text-[1rem] font-black">
            The event night was intense but filled with enthusiasm. In addition
            to building the robot, the organizers prepared various recreational
            activities, including a Treasure Hunt, offering an excellent
            opportunity for relaxation and socialization. This active break
            allowed us to return refreshed and complete the prototype within the
            allocated time.
          </p>
        </div>
        <div className="bg-clr-bgsec font-black col-span-3 lg:col-span-1 justify-center lg:px-8 lg:py-4 px-4 py-2 text-left border-clr-princ shadow-2xl border rounded-xl">
          <h1 className="font-Poppins opacity-90 font-black text-[22px] mb-6">
            Winning with Innovation
          </h1>
          <p className="opacity-80 text-[1rem]">
            The day culminated with demonstration matches, where each team had
            the chance to participate in two games. We were proud to win each
            confrontation with impressive results, showcasing the efficiency of
            our design and strategy.
          </p>
          <br />
          <p className="opacity-80 text-[1rem]">
            In the end, our efforts were recognized with the{" "}
            <span className="text-clr-princ hover:opacity-100">
              <Link to="/Rewards">“Most Innovative System”</Link>
            </span>
            award, a distinction that further motivated us to continue on this
            path of creativity and technical excellence. KickAthon was
            undoubtedly an exceptional start to the new season!
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${KickAthon1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
        <div
          style={{
            backgroundImage: `url(${KickAthon2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
        <div
          style={{
            backgroundImage: `url(${KickAthon3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
          className="bg-white/5 h-[275px] font-bold col-span-3 lg:col-span-1 justify-center py-4 text-center border-clr-princ shadow-2xl border rounded-xl"
        ></div>
      </div>
    </section>
  );
};

export default KickAthon;
