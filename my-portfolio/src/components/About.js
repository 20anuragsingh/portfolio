import React from 'react';
import profileImage from './images/images.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
               I am a Computer science student at ABES Engineering Collage, Ghaziabad, with strong foundations in Web development and DSA and hands-on experience in Backend in Node.js. I enjoy building scalable, user-focused applications using modern technologies.
            </p>
            <p>
              When I'm not coding, you can find me experimenting with digital photography, or exploring new places. I'm always
              eager to learn new technologies and tackle challenging problems.
            </p>
          </div>
          <div className="about-image">
            {/* Placeholder for profile image */}
            <div className="profile-placeholder">
              <img src={profileImage} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">Node.js</span>
            <span className="skill">HTML/CSS</span>
            <span className="skill">Git</span>
            <span className="skill">Python</span>
            {/* Add more skills as needed */}
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div className="education-list">
            <div className="education-item">
              <h4>B.Tech</h4>
              <p className="institution">ABES Engineering Collage</p>
              <p className="year">2024-2028</p>
            </div>
            <div className="education-item">
              <h4>Senior Secondary Education (Class XII)</h4>
              <p className="institution">SVM public school, Maniram Gorakhpur</p>
              <p className="year">2024</p>
            </div>
            <div className="education-item">
              <h4>Secondary Education (Class X)</h4>
              <p className="institution">Guru gorakhnath vidyapeeth, Pipiganj, Gorakhpur</p>
              <p className="year">2022</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>
        <div className="certificates">
          <h3>Certificates</h3>
          <div className="certificates-list">
            <div className="certificate-item">
              <h4>Java skill up</h4>
              <p className="issuer">GeeksforGeeks</p>
              <p className="date">December 2025.</p>
            </div>
            <div className="certificate-item">
              <h4>AI for Students: Build your own Generative model</h4>
              <p className="issuer">NXT WAVE</p>
              <p className="date">16 Nov 2025</p>
            </div>
            {/* Add more certificates as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
