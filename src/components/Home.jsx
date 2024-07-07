// Importing the Resume PDF file from the specified path
import Resume from "../assets/Resume.pdf";

// Functional component named Home
const Home = () => {
  return (
    // JSX structure for the Home component
    <div>
      <h1>Hello</h1>
      <h2>Im Kabo Khudunyane</h2>
      <p>
        Junior Software Engineer and 3rd year Applications Development student
        at Cape Peninsula University of Technology.
      </p>
      <br />
      <br />
      {/* Download button with a link to the imported Resume file */}
      <a href={Resume} download="Kabo Khudunyane Resume">
        <button className="downloadButton">Download my Resume</button>
      </a>
    </div>
  );
};

// Exporting the Home component as the default export
export default Home;
