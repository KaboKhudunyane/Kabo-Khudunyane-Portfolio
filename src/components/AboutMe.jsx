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
    I am Kabo Khudunyane, a recent graduate in Applications Development from the Cape Peninsula University of Technology, 
    where I gained a strong foundation in industry trends and cutting-edge technologies.
  </p>
  <p>
    Throughout my academic journey, I developed a solid understanding of Object-Oriented Programming (OOP), SOLID principles, and software design patterns. 
    These foundational principles have shaped my ability to craft maintainable, efficient, and scalable solutions. 
    Additionally, I worked on projects that emphasized structured design, clean coding practices, and innovative problem-solving strategies.
  </p>
  <p>
    I thrive in collaborative, team-oriented environments where I can both contribute and grow. 
    My passion for embracing new challenges, exploring innovative methodologies, and staying up-to-date with emerging technologies drives me. 
    My commitment to continuous learning and adaptability positions me as a strong candidate for internships and graduate programs, 
    where I aim to grow and make a meaningful impact.
  </p>
</div>

    </section>
  );
};

export default AboutMe;
