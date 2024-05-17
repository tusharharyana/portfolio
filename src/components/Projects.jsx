import React from "react";

function Projects() {
  return (
    <div
      id="projects"
      className="skills flex  items-center w-3/4 m-auto flex-col md:flex-row justify-between mb-20"
    >
      <div className="skill text-left ">
        <div className="p-4">
        <p className="font-mono">Journey into Tech Projects</p>
          <h1>My Portfolio</h1>
        </div>

        <div className="flex  m-auto flex-col md:flex-row p-4 mt-2 gap-5">
          <div className="w-60 bg-zinc-700 rounded-lg p-4 mr-4 font-serif hover:scale-95 cursor-pointer">
            <img
              src="/customerchurn.jpg"
              className="w-full h-52 mr-2 rounded-lg"
              alt="Html5"
            />

            <ul className="mt-2 text-white">
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

          <div className="w-64 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-95 cursor-pointer">
            <img
              src="/quizproject.png"
              className="w-full mr-2 h-52 rounded-lg"
            />
            <ul className="mt-2 text-white">
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

          <div className="w-64 bg-zinc-700 rounded-lg p-4 mr-4 hover:scale-95 cursor-pointer">
            <img
              src="/hiappproject.png"
              className="w-full mr-2 h-52 rounded-lg"
            />
            <ul className="mt-2 text-white">
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

          <div className="w-64 bg-zinc-700 rounded-lg p-4 mr-4 text-white hover:scale-95 cursor-pointer">
            <div className="h-52 ">
              <img
                src="/portfolioproject.png"
                className="w-full mr-2 mt-2 rounded-lg"
              />
              <img
                src="/portfolioproject2.png"
                className="w-full mr-2 rounded-lg"
              />
            </div>
            <ul>
              <li>✅Portfolio website built with React.js and Tailwind CSS.</li>
              <li>
                ✅Responsive design ensures compatibility across devices and
                screen sizes.
              </li>
              <li>✅Features interactive components.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
