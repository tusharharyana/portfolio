import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const [isNavVisible, setNavVisible] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  //for Hi

  const [showMessage, setShowMessage] = useState(false);
  const handleLogoClick = () => {
    setShowMessage(true);
    //set timeout for dissappear

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); //3 sec
  };
  //finish

  return (
    <nav
      className="navbar flex items-center fixed justify-between text-black p-2.5 top-0 left-0 w-full drop-shadow-lg
      "
      //    bg-green-500 sm:bg-red-600 md:bg-yellow-200 lg:bg-blue-500 2xl:bg-purple-500 xl:bg-orange-500
    >
      {/* logo */}
      <div className="flex w-48">
        <img
          src="/portfoliologo.png"
          alt="My logo"
          className="m-1 ml-6 w-25 h-12 cursor-pointer"
          onClick={handleLogoClick}
        />
        {showMessage && <p className="text-blue-600 font-serif ">Hi</p>}
      </div>

      {/* nav items */}
      <ul
        className={`${
          isNavVisible ? "flex" : "hidden"
        } md:flex nav-list list-none m-0 p-0 text-c`}
      >
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <span
              style={{ color: activeItem === "Home" ? "black" : "inherit" }}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
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
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <span
              style={{ color: activeItem === "About" ? "black" : "inherit" }}
              onClick={() => handleItemClick("About")}
            >
              About
            </span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
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
          md:flex nav-item-button border-blue-300 rounded-md text-blue-700 cursor-pointer h-auto mr-6 m-1 w-auto transition-transform `}
        >
          Contact Me
        </button>
      </Link>

      {/* menu icon */}
      <img alt="hamburger" src="/icon_menu.svg" className="md:hidden w-22 h-10" />
    </nav>
  );
};

export default Navbar;
