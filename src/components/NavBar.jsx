import '../css/NavBar.css'
import PropTypes from 'prop-types';

const NavBar = ({ homeRef, aboutMeRef, educationRef, projectsRef, technologiesRef, contactMeRef }) => {
  const sectionRefs = {
    Home: homeRef,
    "About Me": aboutMeRef,
    Education: educationRef,
    Projects: projectsRef,
    Technologies: technologiesRef,
    Contact: contactMeRef,
  };

  // Function to handle scrolling to a section
  const handleFocus = (section) => {
    const yOffset = -70; // Adjust this value to match your navbar height
    const element = sectionRefs[section].current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const sections = ["Home", "About Me", "Education","Projects", "Technologies", "Contact"];

  return (
    <div className="navbar">
      {sections.map((section) => (
        <button
          key={section}
          className={`${section.replace(" ", "").toLowerCase()}Button`}
          onClick={() => handleFocus(section)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  homeRef: PropTypes.object.isRequired,
  aboutMeRef: PropTypes.object.isRequired,
  educationRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  technologiesRef: PropTypes.object.isRequired,
  contactMeRef: PropTypes.object.isRequired,
};

export default NavBar;