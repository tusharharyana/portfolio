import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
   //for Hi

 const [showMessage,setShowMessage] = useState(false);
 const handleLogoClick = ()=>{
  setShowMessage(true);
//set timeout for dissappear

setTimeout(()=>{
setShowMessage(false);
},3000);//3 sec

 };
//finish


  return (
    <nav className="navbar flex items-center fixed justify-between bg-white text-black p-2.5 top-0 left-0 w-full drop-shadow-lg">
      <div className="flex w-48">
        <img src="/portfoliologo.png" alt="My logo" className="m-1 ml-6 w-25 h-12 cursor-pointer" onClick={handleLogoClick}/>{showMessage && <p className="text-blue-600 font-serif ">Hi</p>}
      </div>
      <ul className="nav-list flex list-none m-0 p-0 text-c">
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <span style={{ color: activeItem === "Home" ? "#059669" : "inherit" }} onClick={() => handleItemClick("Home")}>Home</span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
            <span style={{ color: activeItem === "Skills" ? "#059669" : "inherit" }} onClick={() => handleItemClick("Skills")}>Skills</span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <span style={{ color: activeItem === "About" ? "#059669" : "inherit" }} onClick={() => handleItemClick("About")}>About</span>
          </Link>
        </li>
        <li className="cursor-pointer px-1.5 py-1 mx-2.5 my-2.5">
          <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
            <span style={{ color: activeItem === "Projects" ? "#059669" : "inherit" }} onClick={() => handleItemClick("Projects")}>Projects</span>
          </Link>
        </li>
      </ul>
      <Link to="contacts" spy={true} smooth={true} offset={-30} duration={500}>
        <button className={`nav-item-button border-blue-300 rounded-md text-blue-700 cursor-pointer h-auto mr-6 m-1 w-auto `}>
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
