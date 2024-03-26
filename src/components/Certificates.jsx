import React from "react";

function Certificates() {
  return (
    <div className="skills flex  items-center w-3/4 m-auto flex-col md:flex-row justify-between bg-cyan-50 rounded-xl">
      <div className="skill text-left w-full">
        <div className="font-mono px-4 mt-4">Recents Certificates</div>
        <h1 className="px-3">My Certificates</h1>

        <div className="flex flex-wrap gap-4 m-auto flex-col md:flex-row p-4 mt-4">
          <a
            href="/machine.pdf"
            download
            className="w-82 h-28 bg-teal-700 rounded-lg p-4 mr-4 flex hover:scale-105"
          >
            <img
              src="/ibmlogo.png"
              className="w-20 h-20 mr-2 rounded-lg"
              alt="Html5"
            />
            <p className="text-white text-sm font-serif p-5">
              Machine Learning course by
              <p>IBM</p>
            </p>
          </a>

          <a
            href="/Networking.pdf"
            download
            className="w-82 h-28 bg-teal-700 rounded-lg p-4 mr-4 flex hover:scale-105"
          >
            <img
              src="/logovit.png"
              className="w-18 h-16 mr-2 rounded-lg "
              alt="Html5"
            />
            <p className="text-white text-sm font-serif p-4">
              Networking cardinal Certificate
              <p>VIT</p>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
