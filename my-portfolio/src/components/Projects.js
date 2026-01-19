import React from 'react';

const Projects = () => {
  const webDevProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "React DnD"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-taskmanager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts using multiple weather APIs.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-app.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com"
    }
  ];

  const otherProjects = [
    {
      title: "Data Analysis Dashboard",
      description: "A Python-based data visualization dashboard for analyzing sales data and generating insights using pandas, matplotlib, and streamlit.",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit", "Jupyter"],
      github: "https://github.com/yourusername/data-dashboard",
      live: null
    },
    {
      title: "Mobile App - Fitness Tracker",
      description: "A React Native mobile application for tracking workouts, monitoring progress, and setting fitness goals.",
      technologies: ["React Native", "Expo", "AsyncStorage", "React Navigation"],
      github: "https://github.com/yourusername/fitness-tracker",
      live: null
    },
    {
      title: "Machine Learning Model",
      description: "A machine learning project for predicting customer churn using various classification algorithms and feature engineering techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
      github: "https://github.com/yourusername/ml-churn-prediction",
      live: null
    },
    {
      title: "IoT Home Automation",
      description: "An IoT project for home automation using Raspberry Pi, sensors, and a web interface for controlling smart devices.",
      technologies: ["Python", "Raspberry Pi", "MQTT", "HTML/CSS", "JavaScript"],
      github: "https://github.com/yourusername/iot-home-automation",
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