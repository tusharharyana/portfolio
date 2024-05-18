import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const [isNavVisible, setNavVisible] = useState(false);

  //for side menu
  const [isSideMenuOpen, setMenu] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  //for Hi

  // const [showMessage, setShowMessage] = useState(false);
  // const handleLogoClick = () => {
  //   setShowMessage(true);
  //   //set timeout for dissappear

  //   setTimeout(() => {
  //     setShowMessage(false);
  //   }, 3000); //3 sec
  // };
  //finish

  return (
    <nav
      className="navbar flex items-center fixed justify-between text-black p-2.5 top-0 left-0 w-full bg-white drop-shadow-lg
      "
      //    bg-green-500 sm:bg-red-600 md:bg-yellow-200 lg:bg-blue-500 2xl:bg-purple-500 xl:bg-orange-500
    >
      {/* logo */}
      <div className="flex w-48">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <img
            src="/portfoliologo.png"
            alt="My logo"
            className="m-1 ml-6 w-25 h-12 cursor-pointer hover:scale-105"
            onClick={() => {
              handleItemClick("Home");
              handleLogoClick();
            }}
          />
        </Link>
        {/* {showMessage && <p className="text-blue-600 font-serif ">Hi</p>} */}
      </div>

      {/* nav items */}
      <ul
        className={`${
          isNavVisible ? "flex" : "hidden"
        } md:flex nav-list list-none m-0 p-0 text-c`}
      >
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5 hover:scale-105">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <span
              style={{ color: activeItem === "Home" ? "black" : "inherit" }}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5 hover:scale-105">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <span
              style={{ color: activeItem === "Skills" ? "black" : "inherit" }}
              onClick={() => handleItemClick("Skills")}
            >
              Skills
            </span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5 hover:scale-105">
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <span
              style={{ color: activeItem === "About" ? "black" : "inherit" }}
              onClick={() => handleItemClick("About")}
            >
              About
            </span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5 hover:scale-105">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span
              style={{ color: activeItem === "Projects" ? "black" : "inherit" }}
              onClick={() => handleItemClick("Projects")}
            >
              Projects
            </span>
          </Link>
        </li>
      </ul>

      {/* contact btn */}
      <Link to="contacts" spy={true} smooth={true} offset={0} duration={500}>
        <button
          className={`
          ${isNavVisible ? "flex" : "hidden"}
          md:flex nav-item-button border-blue-300 rounded-md text-blue-700 cursor-pointer h-auto mr-6 m-1 w-auto transition-transform hover:scale-105`}
        >
          Contact Me
        </button>
      </Link>

      {/* menu icon */}
      <img
        onClick={() => setMenu(true)}
        alt="hamburger"
        src="/icon_menu.svg"
        className="md:hidden w-22 h-10 cursor-pointer hover:scale-105"
      />

      {/* for side bar */}
      <div
        className={clsx(
          "fixed h-full w-screen md:hidden bg-black/50 backdrop:blur-sm top-0 right-0 -translate-x-full transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex-cl absolute top-0 right-0 h-screen p-16 gap-10 z-50">
          {/* close function */}

          <img
            src="close.png"
            className="w-10 h-10 m-auto cursor-pointer hover:scale-105"
            onClick={() => setMenu(false)}
          />

          <ul className="mt-8">
            <li className="cursor-pointer p-2 text-2xl mb-4 hover:scale-105">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span
                  style={{ color: activeItem === "Home" ? "black" : "inherit" }}
                  onClick={() => {
                    handleItemClick("Home");
                    setMenu(false);
                  }}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-2xl mb-4 hover:scale-105">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <span
                  style={{
                    color: activeItem === "Skills" ? "black" : "inherit",
                  }}
                  onClick={() => {
                    handleItemClick("Skills");
                    setMenu(false);
                  }}
                >
                  Skills
                </span>
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-2xl mb-4 hover:scale-105">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <span
                  style={{
                    color: activeItem === "About" ? "black" : "inherit",
                  }}
                  onClick={() => {
                    handleItemClick("About");

                    setMenu(false);
                  }}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="cursor-pointer p-2 text-2xl mb-4 hover:scale-105">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span
                  style={{
                    color: activeItem === "Projects" ? "black" : "inherit",
                  }}
                  onClick={() => {
                    handleItemClick("Projects");

                    setMenu(false);
                  }}
                >
                  Projects
                </span>
              </Link>
            </li>

            {/* contact btn */}
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setMenu(false)}
            >
              <button
                className={`hover:scale-105 md:flex nav-item-button border-blue-300 rounded-md text-blue-700 cursor-pointer h-auto w-auto transition-transform `}
              >
                Contact Me
              </button>
            </Link>

            <div className="flex p-0 mt-4">
              <a
                href="https://github.com/tusharharyana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/githublogo.png"
                  className="w-10 h-10 mr-4 cursor-pointer hover:scale-105"
                  onClick={() => setMenu(false)}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-238941237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkdinlogo.png"
                  className="w-10 h-10 mr-4 cursor-pointer hover:scale-105"
                  onClick={() => setMenu(false)}
                />
              </a>
              <a
                href="https://instagram.com/tusharharyanaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instalogo.png"
                  className="w-10 h-10 cursor-pointer hover:scale-105"
                  onClick={() => setMenu(false)}
                />
              </a>
            </div>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
