import React from 'react';
import Header from './Header';
import About from './About.js';
import ProjectGrid from './ProjectGrid';
import Connect from './Connect';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <ProjectGrid />
      <Connect />
    </React.Fragment>
  );
};

export default App;
