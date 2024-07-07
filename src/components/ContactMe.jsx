import {} from 'react';
import '../css/ContactMe.css'; // Import your CSS file for ContactMe
import cellLogo from '../assets/cell-logo.png';
import linkedInLogo from '../assets/linkedIn-logo.png';
import githubLogo from '../assets/github-logo.png';

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., sending data to backend)
    // You can fetch the input values using document.getElementById or use a state management solution like React hooks
  };

  return (
    <div className="contact-me-section">
      <h1>Contact Me</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="name-form"
            id="validationName"
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="email-form"
            id="validationEmail"
            placeholder="Email Address"
            required
          />
          <textarea
            className="message-form"
            id="validationMessage"
            placeholder="Message"
            required
          />
          <button className="sendButton" type="submit">
            Send Message
          </button>
        </form>
      </div>

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
    </div>
  );
};

ContactMe.propTypes = {
  // Define propTypes if necessary
};

export default ContactMe;
