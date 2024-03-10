import React,{ useState,useEffect} from 'react'

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

  return (
    <div className="header flex items-center w-screen  justify-between p-5 bg-cyan-50">
      <div className="header-left p-24.5 ml-14 text-left w-full">
        <div className='font-mono'>Hey, I am Tushar</div>
        <div className="android text-black text-5xl">
         {/* {fixedText} */}
          
          <span>I create <span className='text-blue-800'>Android</span> platform</span>
          {/* <span>{typedText}</span> */}
        </div>
        <div className="android text-black text-5xl">
         {/* {fixedText} */}
          
          <span>Application</span>
          {/* <span>{typedText}</span> */}
        </div>
        <div style={{ height: `${lineHeight * 1.5}em` }}></div>
        <p className="one font-extralight">Proficient in Java for Android development</p>
        <p className='font-extralight'>Interested in applying machine learning principles.</p>
      </div>

      <div className="header-right ml-20 p-12  mt-4 w-full">
        <img
          src="/lion.jpg"
          alt="Your Image"
          className="w-60 h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
