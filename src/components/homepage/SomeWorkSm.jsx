import React from "react";
import burgeon from "../../assets/img/burgeon.png";
import bookhive from "../../assets/img/bookhive.png";
import music from "../../assets/img/music.png";
import rock from "../../assets/img/rock.png";

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
      title: "MUSIC APP",
      tech: "Javascript",
      bgImage: music,
      link: "https://zug-music.netlify.app/",
    },
    {
      title: "ROCHAMBEAU",
      tech: "Javascript",
      bgImage: rock,
      link: "https://rock-paper-scissors-fred.netlify.app/",
    },
  ];

  return (
    <div className="lg:hidden">
      {" "}
      {/* Show on small screens, hide on lg and above */}
      <div id="work" className="w-full h-auto items-center flex flex-col">
        <p className="text-xs text-secondary border-b border-secondary w-[90%] h-[3rem]">
          FEATURED WORK
        </p>
        {workItems.map((item, index) => (
          <div
            key={index}
            className="w-full min-h-screen px-4 py-6"
          >
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