import { Bot, MonitorPlay } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './UtilityProjects.module.css';

const UtilityProjects = () => {
  const projects = [
    {
      title: 'Google Form Auto-Filler',
      type: 'Automation & Web Scraping Script',
      description: 'A highly configurable Python automation tool designed to interact with and submit data to any Google Form. Parses fields and injects data from CSV sources, originally created to solve repetitive data entry workflows.',
      tech: ['Python 3', 'Playwright', 'CSV Data Handling'],
      icon: <Bot size={24} color="var(--accent-primary)" />,
      github: 'https://github.com/Kavinjr1612/Google-Form-Filler.git'
    },
    {
      title: 'UTD Background Monitor',
      type: 'Desktop Automation & Computer Vision App',
      description: 'A background monitoring and macro application built with a modern GUI. Captures screenshots, analyzes using computer vision, and executes automated tasks with Discord alerts for remote tracking.',
      tech: ['Python', 'CustomTkinter', 'OpenCV', 'Tesseract OCR', 'PyAutoGUI'],
      icon: <MonitorPlay size={24} color="var(--accent-primary)" />,
      github: 'https://github.com/Kavinjr1612/UTD_wehbook.git'
    }
  ];

  return (
    <section className="section" id="utilities">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-gradient">Automation & Productivity Scripts</h2>
          <p>Personal tools and utilities I developed to streamline workflows and solve immediate problems.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.type}>{project.type}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                </div>
                {project.icon}
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techItem}>{tech}</span>
                ))}
              </div>
              
              <div className={styles.actions}>
                <a href={project.github} className={styles.actionBtn}>
                  <FaGithub size={16} /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilityProjects;
