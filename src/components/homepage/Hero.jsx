import React from 'react'
import img from "../../assets/img/fred.png";

const Hero = () => {
  return (
    <>
      <div className="flex w-full h-[90vh] overflow-y-hidden">
        <div className="w-[15%]"></div>
        <img
          src={img}
          alt="Me"
          className=" h-[30rem] lg:h-[35rem] object-cover md:object-contain"
        />
        <div className="hidden md:flex w-[40%] items-center justify-left text-3xl">
          Front-End & React Native <br /> Developer
        </div>
      </div>

      <div className="relative mt-[-11rem] lg:mt-[-8rem] text-9xl overflow-hidden flex flex-nowrap">
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
}

export default Hero
