import React from "react";

import { NavBar, Footer, Bara } from "../components";
const About = () => {
  return (
    <div className="bg-clr-black min-h-screen text-white font-Poppins">
      <NavBar />
      <div className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white text-center font-Poppins gap-4 flex flex-col">
        <h1 className="text-[2.5rem] font-black mb-[2rem] opacity-90 hover:opacity-100 transtion duration-300">
          About StarLight
        </h1>
        <div className="max-w-[850px] mx-auto lg:px-[2rem] md:px-[1rem] px-[1rem] text-white text-center font-Poppins gap-4 flex flex-col">
          <p className="text-[1rem] font-black opacity-80">
            Starting on April 14, we received the rooms promised by the
            „Alexandru Odobescu” National College, but their condition was not
            up to our expectations. Our team immediately took action and began
            the process of restoring the spaces. We painted the walls, cleaned,
            and gradually set up the hub to transform it into a special place
            where we can carry out our activities in a pleasant environment. We
            brought in tables and chairs, and hung representative banners on the
            walls to create an aesthetic and inspiring atmosphere.
          </p>
          <br />
          <p className="text-[1rem] font-black opacity-80">
            One of the essential pieces of equipment we have in the hub is the
            t-shirt press. With its help, we managed to personalize our
            t-shirts, each with a unique design created internally. This press
            offers us a significant advantage, allowing us to produce custom
            t-shirts quickly and continuously. Thus, we were able to add
            sponsors to our t-shirts throughout the season in a flexible and
            efficient way.
          </p>
          <br />
          <p className="text-[1rem] font-black opacity-80">
            In addition, the school administration also provided us with a 3D
            printer, an extremely valuable tool for our projects. It allows us
            to develop prototypes, experiment, and add extra value to our
            activities. Furthermore, the school has been very supportive,
            offering us the possibility of installing an air conditioner in our
            spaces, should we acquire the necessary kit for installation.
          </p>
          <br />
          <p className="text-[1rem] font-black opacity-80">
            Our hub continues to develop, and among our recent achievements are
            our first roll-up, already displayed in the hub, and two banners,
            one of which has already been mounted on a wall. Regarding
            sponsorships, we signed a sponsorship contract both in money and in
            goods, which enables us to expand and improve our equipment. We’ve
            also discussed decorating the space, and the painting process is
            ongoing, with testing of various paints to achieve the desired
            result.
          </p>
          <br />
          <p className="text-[1rem] font-black opacity-80">
            These achievements are just the beginning of an ongoing
            transformation, which we will continue to build with every step.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
