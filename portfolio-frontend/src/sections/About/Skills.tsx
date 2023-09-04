import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3> Languages</h3>
          <ul>
            <li>JavaScript (Typescript)</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Flask</li>
            <li>Express</li>
            <li>React Native</li>
            <li>Electron</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Databases</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Web</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Render</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Cloud</h3>
          <ul>
            <li>Amazon Web Services (AWS)</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>OS</h3>
          <ul>
            <li>MacOS</li>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
