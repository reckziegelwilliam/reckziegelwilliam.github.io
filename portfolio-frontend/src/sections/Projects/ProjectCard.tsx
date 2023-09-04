import React from 'react';
import './Projects.css'; // Import styling
import { FaLink, FaGithub } from 'react-icons/fa'; // Importing Icons

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  iconName?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, link, github, iconName }) => {
  return (
    <div className="project-card-container"> {/* New container */}
      <div className="project-card">
        <div className="icon-container">
          <img src={require(`../../assets/icons/${iconName}.png`)} alt={`${title} icon`} />
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tech">
            {technologies.join(' | ')}
          </div>
        </div>
        <div className="links">
          <a href={link} target="_blank" rel="noopener noreferrer"><FaLink /></a>
          <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
