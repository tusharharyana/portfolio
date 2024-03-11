import React from "react";

function Certificates() {
  return (
    <div className="skills flex items-center w-screen  justify-between p-5 bg-cyan-50">
      <div className="skill p-24.5 m-14 text-left w-full">
        <div className="font-mono px-4">Recents Certificates</div>
        <h1 className="px-3">My Certificates</h1>

        <div className="flex p-4 mt-4">
          <div className="w-82 h-28 bg-teal-700 rounded-lg p-4 mr-4 flex">
            <img
              src="/ibmlogo.png"
              className="w-20 h-20 mr-2 rounded-lg"
              alt="Html5"
            />
            <p className="text-white text-sm font-serif p-5">Machine Learning course by
            <p>IBM</p>
            </p>
          </div>
          <div className="w-82 h-28 bg-teal-700 rounded-lg p-4 mr-4 flex">
            <img
              src="/logovit.png"
              className="w-18 h-16 mr-2 rounded-lg "
              alt="Html5"
            />
            <p className="text-white text-sm font-serif p-4">Networking cardinal Certificate
            <p>VIT</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
