import React, { useRef, useEffect } from "react";
import burgeon from "../../assets/img/burgeon.png";
import bookhive from "../../assets/img/bookhive.png";
import dice from "../../assets/img/dice.png";
import rock from "../../assets/img/meta.png";
import terra from "../../assets/img/terra.png";

const SomeWork = () => {
  const workRefs = useRef([]);

  useEffect(() => {
    workRefs.current.forEach((work) => {
      if (!work) return;

      const hoverView = work.querySelector(".hover-view");
      const bgImage = work.querySelector(".bg-image");

      const handleMouseMove = (e) => {
        const rect = work.getBoundingClientRect();
        const x = e.clientX - rect.left - hoverView.offsetWidth / 2;
        const y = e.clientY - rect.top - hoverView.offsetHeight / 2;

        hoverView.style.left = `${x}px`;
        hoverView.style.top = `${y}px`;
      };

      const handleMouseEnter = () => {
        bgImage.style.opacity = "1";
      };

      const handleMouseLeave = () => {
        bgImage.style.opacity = "0";
      };

      work.addEventListener("mousemove", handleMouseMove);
      work.addEventListener("mouseenter", handleMouseEnter);
      work.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        work.removeEventListener("mousemove", handleMouseMove);
        work.removeEventListener("mouseenter", handleMouseEnter);
        work.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const workItems = [
    {
      title: "DICE GAME",
      tech: "MERN APP",
      bgImage: dice,
      link: "https://fair-dice-game.netlify.app",
    },
    {
      title: "META APP",
      tech: "META API",
      bgImage: rock,
      link: "https://github.com/Segebari/woro-social/",
    },
    {
      title: "TERRASPHERE",
      tech: "JS, TAILWIND, HTML, CSS",
      bgImage: terra,
      link: "https://terrasphere.com.ng/",
    },
    {
      title: "BURGEON",
      tech: "React & Tailwind",
      bgImage: burgeon,
      link: "https://burgeonproperties.netlify.app/",
    },
    {
      title: "BOOKHIVE",
      tech: "React & Firebase",
      bgImage: bookhive,
      link: "https://zugs-bookhive.netlify.app/",
    },

  ];

  return (
    <>
      <div className="hidden lg:block">
        <div id="work" className="w-full h-auto items-center flex flex-col">
          <p className="text-xs text-secondary border-b border-secondary w-[80%] h-[3rem] pl-20">
            FEATURED WORK
          </p>
          {workItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (workRefs.current[index] = el)}
              className="w-[80%] h-[9rem] flex border-b border-secondary justify-between items-center px-20 work relative"
            >
              <h3 className="text-5xl work-h3">{item.title}</h3>
              <h6 className="work-h6">{item.tech}</h6>
              <div className="hover-view absolute w-48 h-48">
                <div
                  className="bg-image w-[80%] h-[80%] bg-cover bg-center opacity-0 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SomeWork;
