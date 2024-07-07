import {} from 'react';
import '../css/Projects.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, use, sourceCodeUrl }) => {
  return (
    <div className="project-card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h4 className="card-description">{description}</h4>
        <h4 className="card-use">{use}</h4>
        <div className="card-source-code">
          <a
            href={sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="source-code-button">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  use: PropTypes.string.isRequired,
  sourceCodeUrl: PropTypes.string.isRequired
};

const Projects = () => {
  const projectList = [
    {
      title: "Home & Garden Agency",
      description: "A dynamic digital interface, enabling service providers to register and display their profiles. Clients can easily navigate through the listings, applying filters for job type, location, and rate fees.",
      use: "University Project",
      sourceCodeUrl: "https://github.com/"
    },
    {
      title: "Kalculator App",
      description: "Streamlined calculator application, users can perform basic calculations effortlessly, an ideal tool for quick and easy math tasks.",
      use: "Personal Project",
      sourceCodeUrl: "https://github.com/KaboKhudunyane/Kalculator-App"
    }
  ];

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="projects">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            use={project.use}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
