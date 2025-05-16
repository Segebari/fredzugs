import { useEffect, useRef, useState } from "react";

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
        I'm Fred Zugs, a Full-Stack Developer specializing in the MERN stack and a versatile range of technologies. With a design-centric background from advertising, I'm passionate about building visually appealing and intuitive web and mobile applications. My proficiency spans React, React Native, Tailwind CSS, Next.js, Node.js, Express, Angular, Vue, Python, AWS, Azure, Prisma, Redis, PostgreSQL (with pgAdmin4), SQL, MongoDB, Docker, and Kubernetes. Bringing over three years of tech experience, I'm dedicated to delivering seamless, creative, and robust full-stack solutions. I'm committed to continuous growth, collaborative knowledge sharing, and solving complex problems through well-crafted code.
      </p>
    </div>
  );
};

export default AboutMe;
