import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm [Your Name], a passionate [Your Profession] with a love for creating
              innovative solutions through code. I specialize in [Your Specializations] and
              have experience working on [brief experience].
            </p>
            <p>
              When I'm not coding, you can find me [hobbies or interests]. I'm always
              eager to learn new technologies and tackle challenging problems.
            </p>
          </div>
          <div className="about-image">
            {/* Placeholder for profile image */}
            <div className="profile-placeholder">
              <span>Profile Image</span>
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
              <h4>[Degree/Program Name]</h4>
              <p className="institution">[Institution Name]</p>
              <p className="year">[Year of Graduation]</p>
            </div>
            <div className="education-item">
              <h4>[Previous Degree/Program]</h4>
              <p className="institution">[Institution Name]</p>
              <p className="year">[Year of Graduation]</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>
        <div className="certificates">
          <h3>Certificates</h3>
          <div className="certificates-list">
            <div className="certificate-item">
              <h4>[Certificate Name]</h4>
              <p className="issuer">[Issuing Organization]</p>
              <p className="date">[Date Obtained]</p>
            </div>
            <div className="certificate-item">
              <h4>[Another Certificate]</h4>
              <p className="issuer">[Issuing Organization]</p>
              <p className="date">[Date Obtained]</p>
            </div>
            {/* Add more certificates as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;