import React from "react";
import ListItem from "./ListItem";
function Footer() {
  return (
    <nav className="footer flex items-center justify-center bg-cyan-50 text-black p-2.5  bottom-0 left-0 w-full shadow-lg">
        <div className="footer-up w-full">
      <ul className="foot-list flex list-none m-0 p-0 mb-8">
        <ListItem pagename="Home" />
        <ListItem pagename="Skills" />
        <ListItem pagename="About" />
        <ListItem pagename="Projects" />

        <div className="flex ml-auto items-center mr-4">
        <img src="/github.png" className="w-6 h-6 mr-2" alt="GitHub" />
            <img src="/Instagram.png" className="w-6 h-6 mr-2" alt="Instagram" />
            <img src="/LinkedIn.png" className="w-6 h-6" alt="LinkedIn" />
        </div>

        {/* <li className={`nav-item ${currentPage === 'About' ? 'active' : ''}`} onClick={() => handlePageChange('About')}>About Me</li>
          <li className={`nav-item ${currentPage === 'Skills' ? 'active' : ''}`} onClick={() => handlePageChange('Skills')}>Skills</li>
          <li className={`nav-item ${currentPage === 'Projects' ? 'active' : ''}`} onClick={() => handlePageChange('Projects')}>Projects</li> */}
      </ul>
      <hr className="my-2" />
      <div className="flex justify-between">
          <div className="ml-2 p-2">Made with 💖 by Tushar</div>
          <div className="mr-2 p-2">@2024 Tushar All Rights Reserved</div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
