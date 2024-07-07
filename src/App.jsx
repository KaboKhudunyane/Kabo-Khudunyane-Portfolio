import NavBar from "./Components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="navBar-container">
        <NavBar />
      </div>
      <div className="home-container">
        <Home />
      </div>
      <div className="aboutMe-container">
        <AboutMe />
      </div>
      <div className="resume-container">
        <Resume />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="technologies-container">
        <Technologies />
      </div>
      <div className="contactMe-container">
        <ContactMe />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};
export default App;
