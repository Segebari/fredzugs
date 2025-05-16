import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const workHref = isMobile ? "#work-sm" : "#work";

  return (
    <nav className="px-4 sm:px-6 lg:px-14 pt-8 text-xl relative">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2">
            &copy;
            <div className="animation-container">
              <span className="code-by-fred"> Code by Fred</span>
              <span className="fred-zugs"> Fred Zugs</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          <li className="nav-item">
            <a href={workHref}>Work</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 z-50 ${
            isMenuOpen ? "bg-orange-500" : "bg-black"
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <li className="nav-item">
            <a href={workHref} onClick={closeMenu}>
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
