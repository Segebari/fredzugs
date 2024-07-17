import React from "react";
import img from "../../assets/img/fred.png";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row w-full h-screen overflow-hidden">
        <div className="w-full md:w-[15%]"></div>
        <div className="flex-grow flex justify-center items-end">
          <img
            src={img}
            alt="Me"
            className="w-auto max-w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
        <div className="hidden md:flex w-[40%] items-center justify-left text-3xl">
          Front-End & React Native <br /> Developer
        </div>
      </div>

      <div className="relative mt-[-6rem] md:mt-[-8rem] text-6xl md:text-9xl overflow-hidden flex flex-nowrap">
        <span className="inline-block mr-8 animate-marquee whitespace-nowrap">
          Fred Zugs -
        </span>
        <span className="inline-block mr-8 animate-marquee whitespace-nowrap">
          Fred Zugs -
        </span>
        <span className="inline-block mr-8 animate-marquee whitespace-nowrap">
          Fred Zugs -
        </span>
        <span className="inline-block mr-8 animate-marquee whitespace-nowrap">
          Fred Zugs -
        </span>
        <span className="inline-block mr-8 animate-marquee whitespace-nowrap">
          Fred Zugs -
        </span>
      </div>
    </>
  );
};

export default Hero;
