import {} from "react";
import cellLogo from "../assets/cell-logo.png";
import linkedInLogo from "../assets/linkedIn-logo.png";
import githubLogo from "../assets/github-logo.png";

const ContactMe = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="socials-container">
        
          <a href="tel:+27658595712">
            <img src={cellLogo} alt="Cell Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/kabokhudunyane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/KaboKhudunyane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
      </div>
      <br></br>
      <br></br>
      <div className="form-container">
        <form>
          <input
            type="text"
            className="name-form"
            id="validationName"
            placeholder="Name"
            required=""
          ></input>
          <input
            type="text"
            className="email-form"
            id="validationEmail"
            placeholder="Email Address"
            required=""
          ></input>
          <textarea
            type="text"
            className="message-form"
            id="validationMessage"
            placeholder="Message"
            required=""
          ></textarea>
          <button className="sendButton" type="submit">
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactMe;
