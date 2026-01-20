import React from 'react';

const Projects = () => {
  const webDevProjects = [
    {
      title: "Interactive UI with Zero JavaScript",
      description: "🛠️ Key Features: Pure CSS Animations: Floating background elements to add depth and movement. Interactive States: Smooth transitions on input focus and button hovers. Modern Aesthetic: A clean, vibrant gradient design with centered UI. Zero Dependencies: No frameworks, no libraries, just pure code. Sometimes, the best way to level up your front-end skills is to strip away the abstractions and get back to the basics of the box model and keyframes. ",
      technologies: ["HTML", "css"],
      github: "https://github.com/20anuragsingh/login_page",
      live: "https://your-ecommerce-demo.com"
    },
    {
      title: "simple Tic Tac Toe game using HTML, CSS, and JavaScript",
      description: "🔧 Tech Used: HTML for structure | CSS for styling | JavaScript for game logic 🕹️ Features I implemented: ✔ 3×3 grid ✔ Turn-based gameplay ✔ Automatic win/draw detection ✔ Clean UI",
      technologies: ["HTML", "CSS", "JS"],
      github: "https://github.com/20anuragsingh/tictactoe.gethub.io",
      live: "https://your-taskmanager-demo.com"
    },
    {
      title: "simple Learning App using only HTML, CSS, and JavaScript — no frameworks, just the basic",
      description: "This project helped me practice: 💡 Responsive design 💡 DOM manipulation 💡 Clean and simple UI/UX",
      technologies: ["JavaScript", "HTML/CSS"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-app.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/20anuragsingh/portfolio",
      live: "https://your-portfolio.com"
    }
  ];

  const otherProjects = [
    {
      title: "Comming soon..",
      description: "....",
      technologies: ["...."],
      github: "https://github.com/yourusername/data-dashboard",
      live: null
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>

        <div className="projects-category">
          <h3>Web Development Projects</h3>
          <div className="projects-grid">
            {webDevProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-category">
          <h3>Other Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;