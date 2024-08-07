import { useRef } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"; 
import Education from "./components/Education";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe"; 

const App = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactMeRef = useRef(null);

  // Helper function to render sections
  const renderSection = (ref, Component, className) => (
    <div ref={ref} className={className}>
      <Component />
    </div>
  );

  return (
    <div className="container">
      {/* Navigation Bar */}
      <div className="navBar-container">
        <NavBar
          homeRef={homeRef}
          aboutMeRef={aboutMeRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          technologiesRef={technologiesRef}
          contactMeRef={contactMeRef}
        />
      </div>

      {/* Main Content Sections */}
      {renderSection(homeRef, Home, "home-container")}
      {renderSection(aboutMeRef, AboutMe, "aboutMe-container")}
      {renderSection(educationRef, Education, "education-container")}
      {renderSection(projectsRef, Projects, "projects-container")}
      {renderSection(technologiesRef, Technologies, "technologies-container")}
      {renderSection(contactMeRef, ContactMe, "contactMe-container")}
    </div>
  );
};

export default App;
