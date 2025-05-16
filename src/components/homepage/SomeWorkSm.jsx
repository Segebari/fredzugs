import React from "react";
import burgeon from "../../assets/img/burgeon.png";
import bookhive from "../../assets/img/bookhive.png";
import dice from "../../assets/img/dice.png";
import rock from "../../assets/img/meta.png";

const SomeWorkSm = () => {
  const workItems = [
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
    {
      title: "DICE GAME",
      tech: "MERN APP",
      bgImage: dice,
      link: "https://fair-dice-game.netlify.app/",
    },
    {
      title: "META APP",
      tech: "META API",
      bgImage: rock,
      link: "https://github.com/Segebari/woro-social/",
    },
  ];

  return (
    <div id="work" className="lg:hidden">
      {" "}
      {/* Show on small screens, hide on lg and above */}
      <div id="work-sm" className="w-full h-auto items-center flex flex-col">
        <p className="text-xs text-secondary border-b border-secondary w-[90%] h-[3rem]">
          FEATURED WORK
        </p>
        {workItems.map((item, index) => (
          <div key={index} className="w-full h-auto px-4 py-6">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-[25rem] object-contain mb-2"
              />
              <h3 className="text-3xl mb-2">{item.title}</h3>
              <p className="mb-2 border-t pt-3 border-secondary">{item.tech}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeWorkSm;
