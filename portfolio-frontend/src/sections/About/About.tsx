import React from 'react';
import ProfilePic from './ProfilePic';
import Bio from './Bio';
import Title from './Title';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about-section">
            <div className="about-row">
                <div className="about-item">
                    <Title />
                </div>
            </div>
            <div className="about-row">
                <div className="about-item">
                    <Bio />
                </div>
            </div>
        </section>
    );
}

export default About;
