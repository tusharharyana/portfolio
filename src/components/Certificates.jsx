import React from "react";

function Certificates() {
  return (
    <div className="skills flex items-center w-screen  justify-between p-5 bg-cyan-50">
      <div className="skill p-24.5 m-14 text-left w-full">
        <div className="font-mono px-1">Recents Certificates</div>
        <h1>My Certificates</h1>

        <div className="flex p-4 mt-16">
          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4">
            <img
              src="/customerchurn.jpg"
              className="w-full mr-2 rounded-lg"
              alt="Html5"
            />
          </div>

          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/quiz.png" className="w-full mr-2 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
