import React from 'react'
import img from "../../assets/img/fred.png";

const Hero = () => {
  return (
    <>
      <div className=" w-screen h-screen overflow-y-hidden relative">
        <div className='flex w-screen'>
          <div className="w-[15%]"></div>
          <img
            src={img}
            alt="Me"
            className="relative bottom-0 h-[40rem] lg:min-h-[35rem] object-cover md:object-contain"
          />
          <div className="hidden md:flex w-[40%] items-center justify-left text-3xl">
            Front-End & React Native <br /> Developer
          </div>
        </div>
      </div>

      <div className="relative mt-[-11rem] lg:mt-[-11rem] text-9xl overflow-hidden flex flex-nowrap">
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
