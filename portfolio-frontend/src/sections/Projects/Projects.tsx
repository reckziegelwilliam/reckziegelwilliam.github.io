import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          github={project.github}
          iconName={project.iconName}
        />
      ))}
    </div>
  );
}

export default Projects;
