import {} from 'react';
import '../css/Technologies.css'; // Import your CSS file for Technologies
import javaLogo from '../assets/java-logo.png';
import javascriptLogo from '../assets/js-logo.png';
import htmlLogo from '../assets/html-logo.png';
import reactLogo from '../assets/react-logo.png';
import nodeLogo from '../assets/node-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import cssLogo from '../assets/css-logo.png';
import springLogo from '../assets/springboot-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';

const Technologies = () => {
  const techData = [
    {
      name: 'Java',
      description: 'Developed academic projects focusing on object-oriented programming, enhancing my skills in building robust and efficient applications.',
      image: javaLogo,
    },{
      name: 'SQL',
      description: 'Utilized SQL in various projects to design and manage databases, proficient in writing queries and performing data manipulation tasks.',
      image: sqlLogo,
    },{
      name: 'MySQL',
      description: 'Implemented MySQL databases in projects for data storage solutions, focusing on database design, normalization, and optimization techniques.',
      image: mysqlLogo,
    },
    {
      name: 'Spring Boot',
      description: 'Built applications using Spring Boot for backend development, gaining experience in creating RESTful APIs and microservices architecture.',
      image: springLogo,
    },
    
    
    {
      name: 'JavaScript',
      description: 'Implemented dynamic and interactive features on web pages, understanding core concepts such as DOM manipulation and asynchronous programming.',
      image: javascriptLogo,
    },
    {
      name: 'React',
      description: 'Developed user interfaces with React, building reusable components and managing application state using hooks and context API.',
      image: reactLogo,
    },
    {
      name: 'Node.js',
      description: 'Explored server-side development with Node.js, creating RESTful APIs and handling server operations for full-stack applications.',
      image: nodeLogo,
    },
    {
      name: 'HTML',
      description: 'Structured web content using HTML, applying semantic tags to enhance accessibility and SEO in web projects.',
      image: htmlLogo,
    },
    {
      name: 'CSS',
      description: 'Styled web pages with CSS, focusing on responsive design principles and using frameworks like Bootstrap to ensure a consistent look across devices.',
      image: cssLogo,
    },
  ];

  return (
    <section className="technologies-container">
      <h1>Technologies</h1>
      <h2>I have experience with the following technologies</h2>
      <div className="technologies-grid">
        {techData.map((tech, index) => (
          <div className="technology-card" key={index}>
            <img src={tech.image} alt={`${tech.name} logo`} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
