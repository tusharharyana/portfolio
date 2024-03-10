import React from "react";
import ListItem from "./ListItem";

//rafce
const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between bg-white text-black p-2.5 top-0 left-0 w-full drop-shadow-lg">
      <img src="/portfoliologo.png" alt="My logo" className="m-1 ml-6 w-25 h-12" />
      <ul className="nav-list flex list-none m-0 p-0 text-c">
        <ListItem pagename="Home" />
        <ListItem pagename="Skills" />
        <ListItem pagename="About" />
        <ListItem pagename="Projects" />

        {/* <li className={`nav-item ${currentPage === 'About' ? 'active' : ''}`} onClick={() => handlePageChange('About')}>About Me</li>
      <li className={`nav-item ${currentPage === 'Skills' ? 'active' : ''}`} onClick={() => handlePageChange('Skills')}>Skills</li>
      <li className={`nav-item ${currentPage === 'Projects' ? 'active' : ''}`} onClick={() => handlePageChange('Projects')}>Projects</li> */}
      </ul>
      <button
        className={`nav-item-button border-blue-300 rounded-md text-blue-700 cursor-pointer h-auto mr-6 m-1 w-auto `}
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
