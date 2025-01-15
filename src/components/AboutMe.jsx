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
          I am Kabo Khudunyane, a recent graduate in Applications Development from the Cape Peninsula University of Technology. 
          where I learned the latest industry trends and technologies.
        </p>
        <p>
         Throughout my academic journey, I have developed a strong understanding of Object-Oriented Programming (OOP), SOLID principles, and software design patterns. 
         These principles have guided my approach to creating maintainable and efficient solutions. 
         In addition, I have worked on various projects that reinforced the importance of structured design, clean coding practices, and problem-solving strategies.
        </p>
        <p>
          I thrive in collaborative, team-oriented environments where I can contribute my skills and learn from others. 
          I am eager to embrace new challenges, explore innovative approaches, and stay updated with emerging technologies.
          My dedication to continuous learning and adaptability makes me a strong candidate for internships and graduate programs, 
          where I can grow and make a meaningful impact.
        </p>
        <br />
      </div>
    </section>
  );
};

export default AboutMe;
