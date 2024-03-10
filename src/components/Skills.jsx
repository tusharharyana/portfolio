import React from "react";

function Skills() {
  return (
    <div className="skills flex items-center w-screen  justify-between p-5 ">
      <div className="skill p-24.5 m-14 text-left w-full">
        <div className="font-mono px-1">Skills</div>
        <h1>My Expertise</h1>
        <div className="flex p-4 mt-16">
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/html.jpg" className="w-8 h-8 mr-2" alt="Html5" />
            <p>
              Proficient in HTML, creating structured web pages for diverse
              devices.
            </p>
          </div>

          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/css.jpg" className="w-8 h-8 mr-2" />
            <p>
              Skilled in CSS, crafting responsive designs for user-friendly
              websites.
            </p>
          </div>

          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/js.png" className="w-8 h-8 mr-2" />
            <p>
              Proficient in JavaScript, creating interactive and dynamic web
              applications.
            </p>
          </div>

          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/mylogo.png" className="w-10 h-8 mr-2" />
            <p>
              Skilled in MySQL, managing databases for efficient data storage.
            </p>
          </div>

          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/c_logo.png" className="w-8 h-8 mr-2" />
            <p>
              Experienced in C programming, building efficient and reliable
              software.
            </p>
          </div>
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/c++.png" className="w-8 h-8 mr-2" />
            <p>
              Skilled in C++, developing high-performance and scalable software
              solutions.
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/java.png" className="w-14 h-10 mr-2" />
            <p>
              Proficient in Java, developing robust and scalable applications.
            </p>
          </div>
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/python.png" className="w-14 h-12 mr-2" />
            <p>
              Skilled in Python, creating versatile and efficient software
              solutions.
            </p>
          </div>

          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/sql.png" className="w-14 h-8 mr-2" />
            <p>
              Experienced in SQL, proficient in managing and querying databases.
            </p>
          </div>
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/tailwind.png" className="w-14 h-8 mr-2" />
            <p>
            CSS framework, utility-first approach, rapid UI development, customizable styling.
            </p>
          </div>
          <div className="w-44 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/Android.png" className="w-12 h-12 mr-2" />
            <p>
            Mobile development, Java programming, Android Studio, app lifecycle, UI design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
