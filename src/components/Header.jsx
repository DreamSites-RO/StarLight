import { NavBar } from "../components";

import VideoReady from "../assets/VideoReady.mp4";

const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={VideoReady} type="video/mp4" />
        Your browser does not support the video tag!
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="relative z-10 w-full">
        <NavBar />
        <div className="flex flex-col items-center justify-center h-full mt-20 text-center">
          <h1 className="lg:text-[5.5rem] md:text=[4.3] text-[3.7rem] font-black mt-8 text-white">
            Welcome to StarLight!
          </h1>
          <p className="lg:text-[2.8rem] md:text-[2.3rem] text-[1.8rem] font-black mt-4 italic text-clr-princ font-Genty">
            "The future lies beyond the stars..."
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
