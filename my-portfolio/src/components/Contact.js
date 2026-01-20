import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>

            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <p>singh_anurag1@outlook.com</p>
              </div>

              <div className="contact-item">
                <h4>Phone</h4>
                <p>+91 638 7482 130</p>
              </div>

              <div className="contact-item">
                <h4>Location</h4>
                <p>Amsar, Turkwaliya, Gorakhpur, Uttar pradesh, India</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/20anuragsingh" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/singh-anurag1" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;