import {} from 'react';
import '../css/AboutMe.css';
import KaboImage from '../assets/KaboImage.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>
      <div className="about-image-container">
        <img src={KaboImage} alt="Kabo Khudunyane" className="about-image" />
      </div>
      <br />
      <div className="about-info">
        <p>
          I am Kabo Khudunyane, Junior Software Engineer and 3rd year
          Applications Development student at Cape Peninsula University of
          Technology, where I am learning the latest industry trends and
          technologies.
        </p>
        <p>
          During my educational path, I have established a strong groundwork in
          computer science fundamentals, programming languages, and
          methodologies of software engineering. I possess expertise in Java and
          JavaScript, having engaged in diverse projects that leverage these
          languages to create effective and dependable solutions.
        </p>
        <p>
          I excel in collaborative environments and thrive in flexible,
          team-oriented setups where I can contribute my skills effectively. I
          am enthusiastic about exploring diverse approaches, staying abreast of
          emerging trends, and adapting to innovative methodologies. My
          commitment to continuous learning enables me to navigate the dynamic
          landscape of technology, making me a valuable asset in team-based
          settings.
        </p>
        <br />
      </div>
    </section>
  );
};

export default AboutMe;
