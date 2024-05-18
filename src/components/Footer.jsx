import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-scroll";
function Footer() {
  return (
    <footer className="footer flex bg-cyan-50 text-black p-2.5  bottom-0 left-0 shadow-lg">
      <div className="footer-up w-full">
        <div className="flex justify-between">
          <ul className="foot-list flex gap-2 list-none mb-auto">
            <li className="cursor-pointer px-1.5 py-1 my-2.5 hover:scale-105">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer px-1.5 py-1 my-2.5 hover:scale-105">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer px-1.5 py-1 my-2.5 hover:scale-105">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer px-1.5 py-1 my-2.5 hover:scale-105">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>

            {/* <li className={`nav-item ${currentPage === 'About' ? 'active' : ''}`} onClick={() => handlePageChange('About')}>About Me</li>
          <li className={`nav-item ${currentPage === 'Skills' ? 'active' : ''}`} onClick={() => handlePageChange('Skills')}>Skills</li>
          <li className={`nav-item ${currentPage === 'Projects' ? 'active' : ''}`} onClick={() => handlePageChange('Projects')}>Projects</li> */}
          </ul>

          <div className="flex">
            <a
              href="https://github.com/tusharharyana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src="/githublogo.png"
                className="w-8 h-8 mr-4 cursor-pointer hover:scale-105"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-238941237/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src="/LinkedIn.png"
                className="w-8 h-8 mr-4 cursor-pointer hover:scale-105"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://instagram.com/tusharharyanaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src="/Instagram.png"
                className="w-8 h-8 cursor-pointer hover:scale-105"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <div className="ml-2 p-2">Made with 💖 by Tushar</div>
          <div className="mr-2 p-2">@2024 Tushar All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
