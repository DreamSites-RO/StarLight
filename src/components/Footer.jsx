import { Instagram, Facebook, Twitter } from "lucide-react";

import React from "react";

const Footer = () => {
  return (
    <div className="bg-clr-bgsec">
      <div className="max-w-[1440px] justify-center mx-auto py-12 flex flex-col md:flex-row lg:flex-row font-Poppins text-white font-black px-4">
        <div className="flex flex-1 flex-col justify-start mb-6 md:mb-0 lg:mb-0 opacity-80">
          <h1>@2024 StarLight</h1>
          <h1>
            <a href="https://cnodobescu.ro/">
              "Alexandru Odobescu National College" Pitești
            </a>
          </h1>
        </div>
        <div className="flex flex-1 flex-row lg:justify-end md:justify-end justify-start text-clr-princ gap-4">
          <a href="https://www.instagram.com/starlight_robotics/">
            <Instagram size={32} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558967226227">
            <Facebook size={32} />
          </a>
          <a href="https://twitter.com/StarLight_24909">
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
