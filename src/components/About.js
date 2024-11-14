import React from "react";
import "./About.css"; // Importing the CSS file for styling
import img from "../assets/img.jpg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Visit");
  };

  return (
    <div className="teaching">
      <div className="cpm1">
        <div className="about-container">
          <div className="about-image-section">
            <img
              src={img} // Replace with the path to your image
              alt="Your Portrait"
              className="about-image"
            />
          </div>
          <div
            className="about-content"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>
              <p className="about-description">
                Hi, I’m Danish Rizwan, a passionate developer with a strong
                interest in AI, web development, and creative coding. I love
                building projects that combine both functionality and aesthetics
                to deliver user-friendly experiences.
              </p>
            </div>
            <div className="about-skills">
              <h2 className="skills-heading">Skills & Expertise :</h2>
              <ul className="skills-list" style={{border : "none"}}>
                <li>JavaScript / React / Node.js</li>
                <li>HTML / CSS / Responsive Design</li>
                <li> C / Python / Java</li>
                <li>API Integration</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
          </div>
          <div className="contact-section">
            <div className="social-links">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:your-email@example.com">Email</a> 
            </div>
            <button onClick={handleButtonClick}>Go to Home Page</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
