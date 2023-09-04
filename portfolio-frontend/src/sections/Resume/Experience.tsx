import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-card">
        <h3>Application Developer, R/West Contract</h3>
        <p>Led the upgrade of R/West's kiosk application, transitioning from Handlebars.js to React with TypeScript and integrating PouchDB for offline data syncing. Spearheaded a complete system rebuild, implementing Node.js with AWS Lambda for backend logic and AWS DynamoDB for scalable database services.</p>
      </div>
      <div className="experience-card">
        <h3>Web Developer, Contract</h3>
        <p>Designed and developed 20+ dynamic interactive websites for clients in technology, fintech, and finance, optimizing traffic (up to 800%), enhancing user clicks (200%), and customer purchases by 50%. Demonstrated experience in working with APIs, TypeScript, and AWS services to create robust, scalable, and user-friendly platforms.</p>
      </div>
      <div className="experience-card">
        <h3>Full Stack Marketer, Contract</h3>
        <p>Worked as a full-stack marketer in Los Angeles, CA from Dec 2016 to Jan 2018.</p>
      </div>
    </div>
  );
}

export default Experience;
