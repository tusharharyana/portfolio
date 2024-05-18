import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTypedIndex] = useState(0);
  const fixedText = "A";
  const targetText = "Android Developer";
  const lineHeight = 1.2;

  //   useEffect(() => {
  //     const typeText = (index) => {
  //       if (index <= targetText.length) {
  //         setTypedText(targetText.substring(1, index));
  //         setTimeout(() => typeText(index + 1), 200); // Adjust typing speed here
  //       } else {
  //         setTimeout(() => setTypedText(""), 1000); // Wait for 1 second before restarting
  //         setTimeout(() => typeText(1), 200); // Restart typing
  //       }
  //     };

  //     // Start typing when the component mounts
  //     typeText(1);

  //     // Clean up the timer when the component unmounts
  //     return () => clearTimeout();
  //   }, []);

  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  const handleDownload = () => {
    const resumeURL = "/ResumeMCA42.pdf";
    window.open(resumeURL, "_blank");
  };

  return (
    <div
      id="hero"
      className="header flex  w-3/4 m-auto flex-col md:flex-row justify-between p-5 mt-20 bg-cyan-50 rounded-xl mb-20"
    >
      <div className="header-left  text-left w-full">
        <div className="font-mono">Hey, I am Tushar</div>
        <div className="android text-black text-5xl">
          {/* {fixedText} */}

          <span>
            I create <span className="text-blue-800">Android</span> platform Application
          </span>
          {/* <span>{typedText}</span> */}
        </div>
      
        <div style={{ height: `${lineHeight * 1.5}em` }}></div>
        <p className="one font-extralight">
          Proficient in Java for Android development
        </p>
        <p className="font-extralight">
          Interested in applying machine learning principles.
        </p>
        <div className="flex p-6">
          <a
            href="https://github.com/tusharharyana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/githublogo.png"
              className="w-10 h-10 mr-4 cursor-pointer hover:scale-105"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-238941237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkdinlogo.png"
              className="w-10 h-10 mr-4 cursor-pointer hover:scale-105"
            />
          </a>
          <a
            href="https://instagram.com/tusharharyanaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instalogo.png"
              className="w-10 h-10 cursor-pointer hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="header-right p-2 md:p-12  mt-4 w-full">
        <img
          src="/images/tusharharyana.png"
          alt="Your Image"
          className="w-full h-auto rounded-3xl"
        />
        <div className=" flex mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mr-2 hover:scale-105"
            onClick={handleDownload}
          >
            Resume
          </button>
          <p className="font-mono p-2">Click the resume button to download.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
