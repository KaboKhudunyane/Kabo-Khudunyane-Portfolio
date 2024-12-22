import {} from 'react';
import '../css/Projects.css'; // Import your CSS file for Projects

import carshareLogo from "../assets/carshare-logo.png";
import kalculatorLogo from "../assets/kalculator-logo.png";
import toDoListLogo from "../assets/todolist-logo.png";
import loginImage from "../assets/loginImage.png";

const Projects = () => {
  const projectList = [
    {
      title: "Car Share",
      description: "This project is a simple login page built using React. The page includes a heading, login form, and signup option, all styled using CSS.",
      use: "University Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/CarShare",
      projectUrl: "https://github.com/KaboKhudunyane/CarShare", // Replace with actual project URL
      image: carshareLogo
    },
    {
      title: "Campus Connect",
      description: "Streamlined calculator application, users can perform basic calculations effortlessly, an ideal tool for quick and easy math tasks.",
      use: "Personal Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/Kalculator-App",
      projectUrl: "https://github.com/KaboKhudunyane/Kalculator-App", // Replace with netlify project URL
      image: kalculatorLogo
    },
    {
      title: "Kalculator App",
      description: "Streamlined calculator application, users can perform basic calculations effortlessly, an ideal tool for quick and easy math tasks.",
      use: "Personal Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/Kalculator-App",
      projectUrl: "https://github.com/KaboKhudunyane/Kalculator-App", // Replace with netlify project URL
      image: kalculatorLogo
    },
    {
      title: "To-Do List",
      description: "A task tracker app that allows the user to enter a task, date and time which are then stored in a state and displayed in a list.",
      use: "Personal Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/To-do-List",
      projectUrl: "https://github.com/KaboKhudunyane/To-do-List", // Replace with actual project URL
      image: toDoListLogo
    },
    
    {
      title: "Simple Login Page",
      description: "This project is a simple login page built using React. The page includes a heading, login form, and signup option, all styled using CSS.",
      use: "Personal Project",
      sourceCodeUrl: "hhttps://github.com/KaboKhudunyane/Simple-Login-Page",
      projectUrl: "https://github.com/KaboKhudunyane/Simple-Login-Page", // Replace with actual project URL
      image: loginImage
    },
  ];

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <h2>I have worked on the following projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div 
            key={index}
            className="project-card"
            onClick={() => window.open(project.projectUrl, "_blank")}
          >
            <img src={project.image} alt="Project" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.use}</p>
              <div>
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
