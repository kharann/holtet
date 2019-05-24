import React from 'react';
import Header from './Header';
import About from './About.js';
import ProjectGrid from './ProjectGrid';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <ProjectGrid />
    </React.Fragment>
  );
};

export default App;
