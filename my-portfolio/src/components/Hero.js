import React from 'react';
import photo from './images/photo3.jpeg'
// import logo from './images/images.png'
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Anurag singh</span>
          </h1>
          <h2 className="hero-subtitle">
            A Full-Stack Developer | Tech Enthusiast | Problem Solver
          </h2>
          <p className="hero-description">
            Passionate about creating innovative solutions through code.
            I specialize in web development and love bringing ideas to life
            through technology.
          </p>
          <div className="hero-buttons">
            <button
              className="hero-btn primary-btn"
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </button>
            <button
              className="hero-btn secondary-btn"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <img src={photo} alt="Anurag's" className="hero-photo" />
            {/* <span>Your Photo</span> */}
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
