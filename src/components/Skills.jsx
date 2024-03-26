import React from "react";

function Skills() {
  return (
    <div
      id="skills"
      className="skills flex w-2/3 md:w-3/4 m-auto flex-col md:flex-row  justify-between mb-20 "
    >
      <div className="skill text-left w-full">
        <div className="font-mono px-1">Skills</div>
        <h1>My Expertise</h1>
        <div className="flex p-2 gap-4 mt-4 flex-col md:flex-row">

          <div className="flex ">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/html.png"
              className="w-12 h-14 mr-2 bg-gray-300 p-2 rounded-lg"
              alt="Html5"
            />
            <p className="w-36 font-serif mt-2 bg-gray-300 rounded-lg p-2">HTML</p>
          </div>

          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/css.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">CSS</p>
          </div>
          </div>


          <div className="flex">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/js.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
              />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">
              JavaScript
            </p>
          </div>
            
          <div className="w-44  bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/mysql.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">MySQL</p>
          </div>
          </div>

          <div className="flex">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/c_logo.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">C</p>
          </div>
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/c++.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">C++</p>
          </div>
        </div>
        </div>




        <div className="flex  mt-4 flex-col md:flex-row gap-4 p-2">
          <div className="flex">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/javalogo.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">Java</p>
          </div>
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/python.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">
              Python
            </p>
          </div>
          </div>

          <div className="flex">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/sqllogo.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">SQL</p>
          </div>
          
          
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/tailwind.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">
              Tailwind
            </p>
          </div>
          </div>

          <div className="flex">
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/Android.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">
              Android Studio
            </p>
          </div>
          <div className="w-44 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-105">
            <img
              src="/linux.png"
              className="w-12 h-14 mr-2  bg-gray-300 p-2 rounded-lg"
            />
            <p className="w-36 font-serif mt-2  bg-gray-300 p-2 rounded-lg">
              Linux
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
