import HomePage from "../assets/HomePage.jpg";

import React from "react";
const Introducere = () => {
  return (
    <section className="bg-clr-bgsec min-h-screen text-white font-Poppins max-w-[1440px] mx-auto py-16 flex flex-col justify-center items-center">
      <h1 className="text-[2.5rem] font-black text-center opacity-90 hover:opacity-100 transition duration-300">
        About StarLight
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row mt-16 gap-8 px-4 md:px-6 lg:px-4">
        <div className="flex flex-1 border-clr-princ p-[4px] rounded-[1.25rem] border-2">
          <img src={HomePage} alt="HomePage" className="rounded-[1.25rem]" />
        </div>
        <div className="flex flex-1 flex-col ">
          <h1 className="text-[2rem] font-black text-left opacity-90 hover:opacity-100 transition duration-300 ease-in-out mb-4 lg:mb-8">
            How it started?
          </h1>
          <p className="text-[16px] lg:text-[18px] font-bold opacity-80 font-Poppins">
            We are Team StarLight 24909, supported by the Parent Association of
            the "Alexandru Odobescu" National College, competing in the
            international FIRST Tech Challenge. Team StarLight was created with
            the goal of familiarizing and integrating students aged 14-19 into a
            variety of fields through the principles of STEAM (Science,
            Technology, Engineering, Art, and Math). Our aim is to create a
            source of inspiration, motivation, learning, and growth for young
            people who are team-oriented, eager to acquire knowledge, develop
            skills across various fields, and push the boundaries of their
            creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introducere;
