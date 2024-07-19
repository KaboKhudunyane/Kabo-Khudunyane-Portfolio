import {} from 'react';
import '../css/Education.css'; // Import your CSS file for Education
 
import cputLogo from '../assets/cput-logo.png';

const Education = () => {
  const educationList = [
  
    {
      title: "Advanced Diploma ICT Applications Development",
      institution: "CPUT",
      year: "2025",
      nqfLevel: "NQF Level 7",
      image: cputLogo
    },
    {
      title: "National Diploma ICT Application Development",
      institution: "CPUT",
      year: "2024",
      nqfLevel: "NQF Level 6",
      image: cputLogo
    },
    {
      title: "National Higher Certificate ICT",
      institution: "CPUT",
      year: "2017",
      nqfLevel: "NQF Level 5",
      image: cputLogo
    },
  ];

  return (
    <section className="education-container">
      <h1>Education</h1>
      <h2>My educational background includes the following qualifications:</h2>

      <div className="education-grid">
        {educationList.map((education, index) => (
          <div className="education-card" key={index}>
            <img src={education.image} alt={`${education.title} Logo`} />
            <div className="education-details">
              <h3>{education.title}</h3>
              <p><strong>Institution:</strong> {education.institution}</p>
              <p><strong>Year:</strong> {education.year}</p>
              {education.achievement && <p><strong>Achievement:</strong> {education.achievement}</p>}
              <p><strong>NQF Level:</strong> {education.nqfLevel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
