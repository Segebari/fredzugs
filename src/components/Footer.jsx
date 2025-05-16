import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full px-4 sm:px-10 text-sm pb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="text-white mb-4 sm:mb-0">2024 &copy; Edition</div>
          <div className="flex flex-wrap justify-center text-white gap-3 sm:gap-5">
            <a
              href="https://x.com/iamsegebari"
              target="_blank"
              className="social"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/segebari-nwizug-b57269175/"
              target="_blank"
              className="social"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Segebari"
              target="_blank"
              className="social"
            >
              Github
            </a>
            <a
              href="https://dev.to/fredzugs"
              target="_blank"
              className="social"
            >
              Dev
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
