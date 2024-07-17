import React, { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const isVisible =
          top < window.innerHeight && top > -ref.current.offsetHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} 
                  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <p
        className="py-24 sm:py-16 md:py-24 lg:py-32 
                    text-base sm:text-lg md:text-xl lg:text-2xl 
                    text-justify sm:text-left"
      >
        Front-End Developer & React Native App Developer | Technical Writer |
        Building user-friendly experiences across web and mobile (React,
        Tailwind, Next.js). Strong design background and passion for clear
        communication. Expanding into backend development with Node.js. 2+ years
        in tech, crafting creative projects.
      </p>
    </div>
  );
};

export default AboutMe;
