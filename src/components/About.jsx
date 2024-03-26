import React from "react";

function About() {
  return (
    <div
      id="about"
      className="about flex items-center w-3/4 m-auto flex-col md:flex-row justify-between p-5 mb-20 "
    >
      <div className="about-right  p-12 w-full">
        <img
          src="/images/logo2.png"
          alt="Your Image"
          className="w-full h-full rounded-3xl hover:shadow-2xl"
        />
      </div>
      <div className="about-left p-24.5 ml-auto text-left w-full">
        <h1>About Me</h1>
        <p className="font-serif mt-2 ">Hey there, I'm Tushar!</p>
        <p className="font-serif mt-2">
          I believe in kindness, honesty, and working together as a team. When
          I'm surrounded by positivity and support, I thrive. I love sharing
          ideas, collaborating, and helping others reach their goals. I'm
          passionate about what I do and always give it my all. Challenges don't
          scare me; they motivate me to do better. Meeting deadlines is
          important to me because I value reliability and excellence in my work.
        </p>
        <p className="font-serif">
          <br></br>Let's connect and create something amazing together!.
        </p>
      </div>
    </div>
  );
}

export default About;
