import {} from 'react';
import '../css/Education.css'; // Import your CSS file for Education

// Import your education images
 import cputLogo from '../assets/cput-logo.png'; 

const Education = () => {
  const educationList = [
    {
      title: "Advanced Diploma ICT Applications Development",
      institution: "Cape Peninsula University of Technology",
      year: "2025",
      nqfLevel: "NQF Level 7",
      image: cputLogo,
      url: "https://www.cput.ac.za/academic/faculties/informaticsdesign/prospectus"
    },
    {
      title: "National Diploma ICT Application Development",
      institution: "Cape Peninsula University of Technology",
      year: "2024",
      nqfLevel: "NQF Level 6",
      image: cputLogo,
      url: "https://www.cput.ac.za/academic/faculties/informaticsdesign/prospectus"
    },
    
    {
      title: "National Higher Certificate ICT",
      institution: "Cape Peninsula University of Technology",
      year: "2017",
      nqfLevel: "NQF Level 5",
      image: cputLogo,
      url: "https://www.cput.ac.za/academic/faculties/informaticsdesign/prospectus"
    },
    
    
  ];

  return (
    <section className="education-container">
      <h1>Education</h1>
      <h2>My educational background includes the following qualifications:</h2>

      <div className="education-grid">
        {educationList.map((education, index) => (
          <a 
            key={index}
            href={education.url}
            target="_blank"
            rel="noopener noreferrer"
            className="education-card"
          >
            <img src={education.image} alt={`${education.title} Logo`} />
            <div className="education-details">
              <h3>{education.title}</h3>
              <p><strong>Institution:</strong> {education.institution}</p>
              <p><strong>Year:</strong> {education.year}</p>
              {education.achievement && <p><strong>Achievement:</strong> {education.achievement}</p>}
              <p><strong>NQF Level:</strong> {education.nqfLevel}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
