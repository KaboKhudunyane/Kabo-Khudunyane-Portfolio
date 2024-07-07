import javaLogo from "../assets/java-logo.png";
import javascriptLogo from "../assets/js-logo.png";
import htmlLogo from "../assets/html-logo.png";
import reactLogo from "../assets/react-logo.png";
import nodeLogo from "../assets/node-logo.png";
import sqlLogo from "../assets/sql-logo.png";
import cssLogo from "../assets/css-logo.png";

const Technologies = () => {
  return (
    <div>
      <h1>Technologies</h1>
      <h2>I have experience with the following technologies</h2>
      <div className="technology-cards">
        <div className="java-card">
          <img src={javaLogo} />
          <h4>Java</h4>
          <h4>
            I have exstensive knowledge of Java, through successful completion
            of academic projects throughout my educational journey.
          </h4>
        </div>
        <div className="javascript-card">
          <img src={javascriptLogo} />
          <h4>Javascript</h4>
          <h4>
            I have exstensive knowledge of Java, through successful completion
            of academic projects throughout my educational journey.
          </h4>
        </div>
        <div className="sql-card">
          <img src={sqlLogo} />
          <h4>SQL</h4>
          <h4>I have build applications making use of SQL.</h4>
        </div>
        <div className="html-card">
          <img src={htmlLogo} />
          <h4>HTML</h4>
          <h4>HTML writing</h4>
        </div>
        <div className="css-card">
          <img src={cssLogo} />
          <h4>CSS</h4>
          <h4>CSS writing</h4>
        </div>
        <div className="react-card">
          <img src={reactLogo} />
          <h4>React</h4>
          <h4>
            I Have experience building a variety of small React applications.
            <br></br>
            <br></br>
            E.g To-Do list, Tic-Tac-Toe, Calclator app.
          </h4>
        </div>
        <div className="node-card">
          <img src={nodeLogo} />
          <h4>Node.JS</h4>
          <h4>I have build applications making use of Node.JS.</h4>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
