import {} from 'react';
import '../css/Technologies.css'; // Import your CSS file for Technologies
import javaLogo from '../assets/java-logo.png';
import javascriptLogo from '../assets/js-logo.png';
import htmlLogo from '../assets/html-logo.png';
import reactLogo from '../assets/react-logo.png';
import nodeLogo from '../assets/node-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import cssLogo from '../assets/css-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';

const Technologies = () => {
  const techData = [
    {
      name: 'Java',
      description: 'I have worked with Java on academic projects, gaining foundational knowledge in object-oriented programming and application development.',
      image: javaLogo,
    },
    {
      name: 'JavaScript',
      description: 'I have used JavaScript in a few projects to add interactivity to web pages and understand basic concepts like functions and event handling.',
      image: javascriptLogo,
    },
    {
      name: 'SQL',
      description: 'I have built applications using SQL databases for managing data and performing queries, learning fundamental database operations.',
      image: sqlLogo,
    },
    {
      name: 'HTML',
      description: 'I am familiar with HTML for creating structured content and have used it in various web projects.',
      image: htmlLogo,
    },
    {
      name: 'CSS',
      description: 'I have applied CSS to style and layout web pages, learning basic styling techniques and responsive design principles.',
      image: cssLogo,
    },
    {
      name: 'React',
      description: 'I have experimented with React, building simple applications like To-Do lists and basic UI components to understand its component-based architecture and state management.',
      image: reactLogo,
    },
    {
      name: 'Node.js',
      description: 'I have used Node.js in a few projects for server-side development, exploring its capabilities in building backend APIs and services.',
      image: nodeLogo,
    },
    {
      name: 'MySQL',
      description: 'I have built applications using SQL databases, focusing on managing data and executing queries, acquiring fundamental skills in database operations.',
      image: mysqlLogo,
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
