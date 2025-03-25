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
        Hi, I'm Fred Zugs, a Full-Stack Developer specializing in the MERN
        stack (MongoDB, Express.js, React, Node.js). With a strong design
        background from advertising, I craft visually stunning, user-friendly
        web and mobile apps that stand out. I'm proficient in React, Tailwind
        CSS, and Next.js, and passionate about building seamless experiences
        across the stack. With 2+ years in tech, I've delivered creative
        projects, and I'm always eager to learn, share knowledge, and solve
        problems through code.
      </p>
    </div>
  );
};

export default AboutMe;
