import {} from 'react';
import '../css/Home.css';
import Resume from '../assets/Resume.pdf';

const Home = () => {
  return (
    <section className="home-section">
      <h1>Hello</h1>
      <h2>I'm Kabo Khudunyane</h2>
      <p>
        Junior Software Engineer and 3rd year Applications Development student
        at Cape Peninsula University of Technology.
      </p>
      <br />
      <br />
      <a href={Resume} download="Kabo Khudunyane Resume">
        <button className="download-button">Download my Resume</button>
      </a>
    </section>
  );
};

export default Home;
