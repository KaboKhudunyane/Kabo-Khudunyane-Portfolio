const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <div className="project-cards">
          <div className="home-garden-agency-card">
            <div className="card-body">
              <h4 className="card-title">Home & Garden Agency</h4>
              <h4 className="card-description">
                A dynamic digital interface, enabling service providers to
                register and display their profiles. Clients can easily navigate
                through the listings, applying filters for job type, location,
                and rate fees.
              </h4>
              <h4 className="card-use">University Project</h4>
              <div className="card-source-code">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="source-code-button">Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="kalculator-app-card">
            <div className="card-body">
              <h4 className="card-title">Kalculator App</h4>
              <h4 className="card-description">
                Streamlined calculator application, users can perform basic
                calculations effortlessly, an ideal tool for quick and easy math
                tasks.
              </h4>
              <h4 className="card-use">Personal Project</h4>
              <div className="card-source-code">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="source-code-button">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
