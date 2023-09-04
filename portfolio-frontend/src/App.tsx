import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { DarkModeProvider } from './contexts/DarkModeContext';

// Import your section components
import Skills from './sections/About/Skills';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Resume/Experience';
import Bio from './sections/About/Bio';
import './Layout.css';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <GlobalStyles />
        <div className="layout-grid">
          <div className="sidebar">
            <About />
          </div>
          <div className="main-content">
            <Projects />
            <Experience />
            <Skills />
          </div>
        </div>
    </DarkModeProvider>
  );
};

export default App;
