import { useRef } from "react";
const NavBar = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactMeRef = useRef(null);
  const sectionRefs = {
    Home: homeRef,
    "About Me": aboutMeRef,
    Resume: resumeRef,
    Projects: projectsRef,
    Technologies: technologiesRef,
    Contact: contactMeRef,
  };

  const HandleFocus = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <button className="homeButton" onClick={HandleFocus}>
        Home
      </button>
      <button className="aboutMeButton" onClick={HandleFocus}>
        About Me
      </button>
      <button className="resumeButton" onClick={HandleFocus}>
        Resume
      </button>
      <button className="projectsButton" onClick={HandleFocus}>
        Projects
      </button>
      <button className="technologiesButton" onClick={HandleFocus}>
        Technologies
      </button>
      <button className="contactMeButton" onClick={HandleFocus}>
        Contact
      </button>
    </div>
  );
};

export default NavBar;
