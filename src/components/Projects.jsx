import React from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="skills flex items-center w-screen  justify-between p-5 "
    >
      <div className="skill p-24.5 m-14 text-left w-full">
        <div className="font-mono px-1">Recents Projects</div>
        <h1>My Portfolio</h1>

        <div className="flex p-4 mt-2">
          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4 font-serif">
            <img
              src="/customerchurn.jpg"
              className="w-full mr-2 rounded-lg"
              alt="Html5"
            />

            <ul className="mt-2">
              <li>
                ✅Develop predictive models to forecast churn probabilities
                accurately.
              </li>
              <li>
                ✅Utilize machine learning algorithms for accurate churn
                prediction.
              </li>
              <li>✅Apply SMOTE to balance datasets.</li>
            </ul>
          </div>

          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/quizproject.png" className="w-full mr-2 rounded-lg" />
            <ul className="mt-2">
              <li>
                ✅Quiz application with Firebase authentication for secure user
                login.
              </li>
              <li>
                ✅Dual interfaces: Admin for quiz management, User for
                quiz-taking.
              </li>
              <li>
                ✅Firebase Firestore used for storing quiz data, user details.
              </li>
            </ul>
          </div>

          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/hiappproject.png" className="w-full mr-2 rounded-lg" />
            <ul className="mt-2">
              <li>✅Application enables instant sharing via QR code scan.</li>
              <li>
                ✅Integrates with Instagram and WhatsApp for seamless
                communication.
              </li>
              <li>
                ✅Users can engage in discussions and conversations within the
                app.
              </li>
            </ul>
          </div>
  
        {/* <div className="flex p-4 "> */}
          <div className="w-80 bg-cyan-50 rounded-lg p-4 mr-4">
            <img src="/portfolioproject.png" className="w-full mr-2 rounded-lg" />
            <img src="/portfolioproject2.png" className="w-full mr-2 rounded-lg" />
            <ul className="mt-2">
              <li>✅Portfolio website built with React.js and Tailwind CSS.</li>
              <li>
                ✅Responsive design ensures compatibility across devices and
                screen sizes.
              </li>
              <li>
                ✅Features interactive components and animations for enhanced
                user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
