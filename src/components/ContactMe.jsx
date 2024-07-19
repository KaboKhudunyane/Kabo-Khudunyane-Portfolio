import { useState } from 'react';
import axios from 'axios';
import '../css/ContactMe.css';
import cellLogo from '../assets/cell-logo.png';
import linkedInLogo from '../assets/linkedin-logo.png';
import githubLogo from '../assets/github-logo.png';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const repoOwner = 'KaboKhudunyane';
    const repoName = 'Kabo-Khudunyane-Portfolio';
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

    const issueData = {
      title: `Contact form submission from ${formData.name}`,
      body: `**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`,
    };

    try {
      await axios.post(
        `https://api.github.com/repos/${repoOwner}/${repoName}/issues`,
        issueData,
        {
          headers: {
            Authorization: `token ${githubToken}`,
          },
        }
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>

      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="name-form"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="email-form"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="message-form"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="sendButton" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
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
