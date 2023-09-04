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
    <div className="project-card-wrapper">
      <div className="icon-container">
        <img src={require(`../../assets/icons/${iconName}.png`)} alt={`${title} icon`} /> {/* Icon from assets directory */}
      </div>
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {technologies.join(' | ')} {/* Technologies on the same line separated by '|' */}
        </div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer"><FaLink /></a>
          <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
