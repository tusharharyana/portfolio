import React from 'react'

function About() {
  return (
    <div className="about flex items-center w-screen  justify-between p-5 ">
      <div className="about-right ml-20 p-12 w-full">
        <img
          src="/lion.jpg"
          alt="Your Image"
          className="w-60 h-auto rounded-3xl"
        />
      </div>
      <div className="about-left p-24.5 mr-14 text-left w-full">
        <div className='font-mono'>About</div>
        <h1>About Me</h1>
        <p className='font-medium'>I thrive in environments that prioritize friendliness and honesty, where everyone feels valued and respected. When I'm part of a team that works together well, it brings out the best in me. I enjoy collaborating with others, sharing ideas, and supporting each other to achieve our goals.

Having a positive attitude is important to me. I believe it helps me stay motivated, even when faced with challenges. I approach each task with enthusiasm and a determination to do my best.

Meeting deadlines is something I take seriously.</p>
 <p className='font-medium'><br></br>I understand the importance of being reliable and delivering results on time. I put in the effort to ensure that my work is completed efficiently and to a high standard.</p>
      </div>

    </div>
  )
}

export default About
