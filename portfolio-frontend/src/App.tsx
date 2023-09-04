import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { DarkModeProvider } from './contexts/DarkModeContext';

// Import your section components
import Footer from './components/Footer/Footer';
import Skills from './sections/About/Skills';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Resume/Experience';
import './Layout.css';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Router>
        <div className="layout-grid">
          <div className="top">
            <About />
          </div>
          <div className="sidebar">
            <Skills />
          </div>
          <div className="main-content">
            <Projects />
            <Experience />
          </div>
        </div>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
