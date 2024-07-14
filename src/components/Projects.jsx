import {} from 'react';
import '../css/Projects.css'; // Import your CSS file for Projects

import mysqlLogo from '../assets/mysql-logo.png';

const Projects = () => {
  const projectList = [
    {
      title: "Home & Garden Agency",
      description: "A dynamic digital interface, enabling service providers to register and display their profiles. Clients can easily navigate through the listings, applying filters for job type, location, and rate fees.",
      use: "University Project",
      sourceCodeUrl: "https://github.com/",
      image: mysqlLogo
    },
    {
      title: "Kalculator App",
      description: "Streamlined calculator application, users can perform basic calculations effortlessly, an ideal tool for quick and easy math tasks.",
      use: "Personal Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/Kalculator-App",
      image: mysqlLogo
    }
  ];

  return (
    <section className="projects-container">
      <h1>Projects</h1>
      <h2>I have worked on the following projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
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
